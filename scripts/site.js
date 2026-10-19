// Juanita Harris — Buy Turks & Caicos
// Shared interactive behaviors: scroll reveals, mobile nav, drawer form, sticky CTA, header state

(function () {
  'use strict';

  // ---- Where the visitor came from ----
  // Recorded once, on the first page a visitor lands on, and kept in this
  // browser so an inquiry sent days later still shows the original source.
  // If storage is blocked, the source of the current visit is used instead.
  const SRC_KEY = 'btc_first_touch';
  const readSource = () => {
    try { return JSON.parse(localStorage.getItem(SRC_KEY) || 'null'); } catch (e) { return null; }
  };
  const currentSource = () => {
    const q = new URLSearchParams(location.search);
    let ref = '';
    try {
      if (document.referrer && new URL(document.referrer).host !== location.host) ref = document.referrer;
    } catch (e) { /* malformed referrer */ }
    const s = { ref, landing: location.pathname + location.search, at: new Date().toISOString() };
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
      if (q.get(k)) s[k] = q.get(k);
    });
    if (q.get('gclid')) s.gclid = 'yes';
    if (q.get('fbclid')) s.fbclid = 'yes';
    return s;
  };
  let firstTouch = readSource();
  if (!firstTouch) {
    firstTouch = currentSource();
    try { localStorage.setItem(SRC_KEY, JSON.stringify(firstTouch)); } catch (e) { /* storage blocked */ }
  }

  // ---- "How did you hear" : show the Other box only when Other is picked ----
  document.querySelectorAll('[data-heard]').forEach((sel) => {
    const other = sel.form && sel.form.querySelector('[data-heard-other]');
    if (!other) return;
    const sync = () => { other.hidden = sel.value !== 'Other'; };
    sel.addEventListener('change', sync);
    sync();
  });

  // ---- Scroll reveals (IntersectionObserver) ----
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  // ---- Header scroll state ----
  const header = document.querySelector('[data-header]');
  if (header) {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile hamburger ----
  const ham = document.querySelector('[data-hamburger]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (ham && mobileMenu) {
    const toggle = (force) => {
      const open = force === undefined ? !mobileMenu.classList.contains('is-open') : force;
      mobileMenu.classList.toggle('is-open', open);
      ham.classList.toggle('is-open', open);
      ham.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('no-scroll', open);
    };
    ham.addEventListener('click', () => toggle());
    mobileMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => toggle(false))
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) toggle(false);
    });
  }

  // ---- Drawer (private inquiry) ----
  const drawer = document.querySelector('[data-drawer]');
  const drawerOpeners = document.querySelectorAll('[data-drawer-open]');
  if (drawer && drawerOpeners.length) {
    const openDrawer = () => {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      const firstField = drawer.querySelector('input, select, textarea, button');
      if (firstField) setTimeout(() => firstField.focus(), 200);
    };
    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };
    drawerOpeners.forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); openDrawer(); }));
    drawer.querySelectorAll('[data-drawer-close]').forEach((b) =>
      b.addEventListener('click', (e) => { e.preventDefault(); closeDrawer(); })
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });

    // ---- Multi-step drawer form ----
    const form = drawer.querySelector('[data-multistep]');
    if (form) {
      const steps = Array.from(form.querySelectorAll('[data-step]'));
      const progress = form.querySelector('[data-progress]') || drawer.querySelector('[data-progress]');
      const submitBtn = drawer.querySelector('[data-submit]');
      const submitLabel = drawer.querySelector('[data-submit-label]');
      const backBtn = drawer.querySelector('[data-back]');
      let current = 0;
      const show = (i) => {
        steps.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
        if (progress) progress.style.transform = `scaleX(${(i + 1) / steps.length})`;
        if (submitLabel) submitLabel.textContent = i === steps.length - 1 ? 'Send' : 'Continue';
        if (backBtn) backBtn.style.visibility = i === 0 ? 'hidden' : 'visible';
      };
      show(0);
      if (backBtn) backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (current > 0) { current--; show(current); }
      });
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (current < steps.length - 1) { current++; show(current); return; }
        await sendInquiry(form, submitBtn, () => {
          drawer.classList.add('is-submitted');
          if (submitBtn) submitBtn.style.display = 'none';
          if (backBtn) backBtn.style.display = 'none';
        });
      });
    }
  }

  // ---- Inquiry delivery ----
  // Posts to /api/inquiry. Success is only shown once the server confirms it
  // stored and forwarded the message; any failure leaves the form filled in.
  async function sendInquiry(form, btn, onSuccess) {
    const errEl = form.querySelector('.form-error');
    const showErr = (msg) => { if (errEl) { errEl.textContent = msg; errEl.hidden = false; } };
    if (errEl) errEl.hidden = true;
    const data = Object.fromEntries(new FormData(form).entries());
    data.source = form.dataset.source || 'site';
    if (data.heard !== 'Other') delete data.heard_other;
    Object.keys(firstTouch || {}).forEach((k) => { data['src_' + k] = firstTouch[k]; });
    const email = String(data.email || '').trim();
    if (!String(data.name || '').trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showErr('Please add your name and a valid email so Juanita can reply.');
      return;
    }
    const label = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('status ' + res.status);
      onSuccess();
    } catch (err) {
      showErr('That did not go through. Please try again, or email juanita@buyturksandcaicos.com or call +1 (201) 674 6069.');
      if (btn) { btn.disabled = false; btn.innerHTML = label; }
    }
  }

  // ---- Inline (hero) form ----
  document.querySelectorAll('[data-inline-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      sendInquiry(form, btn, () => {
        if (btn) { btn.disabled = true; btn.innerHTML = 'Thank you · we will be in touch'; }
        form.classList.add('is-submitted');
      });
    });
  });

  // ---- Smooth-scroll fallback for older browsers ----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();

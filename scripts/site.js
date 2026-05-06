// Juanita Harris — Buy Turks & Caicos
// Shared interactive behaviors: scroll reveals, mobile nav, drawer form, sticky CTA, header state

(function () {
  'use strict';

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
      const progress = form.querySelector('[data-progress]');
      let current = 0;
      const show = (i) => {
        steps.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
        if (progress) progress.style.transform = `scaleX(${(i + 1) / steps.length})`;
      };
      show(0);
      form.querySelectorAll('[data-next]').forEach((b) =>
        b.addEventListener('click', (e) => {
          e.preventDefault();
          if (current < steps.length - 1) { current++; show(current); }
        })
      );
      form.querySelectorAll('[data-back]').forEach((b) =>
        b.addEventListener('click', (e) => {
          e.preventDefault();
          if (current > 0) { current--; show(current); }
        })
      );
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('is-submitted');
      });
    }
  }

  // ---- Inline form success state ----
  document.querySelectorAll('[data-inline-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        const original = btn.textContent.trim();
        btn.dataset.original = original;
        btn.innerHTML = 'Thank you · we will be in touch';
      }
      form.classList.add('is-submitted');
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

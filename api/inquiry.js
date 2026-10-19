// POST /api/inquiry
// Receives the site's inquiry forms, emails Juanita (optionally BCC'ing a
// backup address), and sends the visitor an acknowledgment. Responds 200 only
// after Juanita's notification was accepted by Resend, so the page never shows
// "thank you" for a message that was not delivered.

const RESEND_URL = 'https://api.resend.com/emails';
const clean = (v, max = 500) => String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const HEARD = ['Google', 'Social media', 'Referral', 'Real estate professional', 'Personal meeting', 'Other'];

// A plain-language reading of where the visitor first came from.
function sourceGuess(b) {
  const utm = clean(b.src_utm_source, 100);
  if (utm) return `Campaign link: ${utm}${b.src_utm_medium ? ` (${clean(b.src_utm_medium, 60)})` : ''}`;
  if (clean(b.src_gclid)) return 'Google ad';
  let host = '';
  try { host = new URL(clean(b.src_ref, 500)).hostname.replace(/^www\./, ''); } catch { host = ''; }
  if (!host) return clean(b.src_landing) ? 'Direct (typed in, a bookmark, or an app or email link)' : '';
  const known = [
    [/(^|\.)google\./, 'Google search'], [/(^|\.)bing\.com$/, 'Bing search'],
    [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo search'], [/(^|\.)yahoo\./, 'Yahoo search'],
    [/(^|\.)instagram\.com$/, 'Instagram'], [/(^|\.)(facebook\.com|fb\.com|fb\.me)$/, 'Facebook'],
    [/(^|\.)(linkedin\.com|lnkd\.in)$/, 'LinkedIn'], [/(^|\.)(t\.co|x\.com|twitter\.com)$/, 'X (Twitter)'],
    [/(^|\.)tiktok\.com$/, 'TikTok'], [/(^|\.)youtube\.com$/, 'YouTube'], [/(^|\.)pinterest\./, 'Pinterest'],
  ];
  const hit = known.find(([re]) => re.test(host));
  if (hit) return hit[1];
  return `Another website: ${host}`;
}

async function send(key, payload) {
  const r = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`resend ${r.status}: ${(await r.text()).slice(0, 300)}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const key = process.env.RESEND_API_KEY || process.env.resend_key;
  const to = process.env.INQUIRY_TO || 'juanita@buyturksandcaicos.com';
  const backup = process.env.INQUIRY_BACKUP; // optional, comma separated
  const from = process.env.INQUIRY_FROM || 'BuyTurksandCaicos.com <noreply@mail.ctrltechhq.com>';
  if (!key) {
    console.error('inquiry: RESEND_API_KEY missing');
    return res.status(500).json({ ok: false });
  }

  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  if (clean(b.website)) return res.status(200).json({ ok: true }); // honeypot

  const name = clean(b.name, 120);
  const email = clean(b.email, 200);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ ok: false });

  const fields = [
    ['Name', name], ['Email', email], ['Mobile', clean(b.phone, 60)],
    ['Island', clean(b.island)], ['Budget', clean(b.budget)], ['Intended use', clean(b.use)],
    ['Timeline', clean(b.timeline)], ['Notes', clean(b.notes, 1500)],
    ['Form', clean(b.source, 30)], ['Received', new Date().toISOString()],
  ].filter(([, v]) => v);

  let heard = HEARD.includes(clean(b.heard, 40)) ? clean(b.heard, 40) : '';
  if (heard === 'Other' && clean(b.heard_other, 120)) heard = `Other: ${clean(b.heard_other, 120)}`;
  fields.push(['How they heard', heard || 'Not answered']);

  const source = [
    ['Likely source', sourceGuess(b)],
    ['Referring page', clean(b.src_ref, 300)],
    ['First page visited', clean(b.src_landing, 300)],
    ['First visit', clean(b.src_at, 40)],
    ['utm_source', clean(b.src_utm_source, 100)], ['utm_medium', clean(b.src_utm_medium, 100)],
    ['utm_campaign', clean(b.src_utm_campaign, 100)], ['utm_term', clean(b.src_utm_term, 100)],
    ['utm_content', clean(b.src_utm_content, 100)],
    ['Google ad click', clean(b.src_gclid, 5) ? 'yes' : ''], ['Facebook link click', clean(b.src_fbclid, 5) ? 'yes' : ''],
  ].filter(([, v]) => v);
  if (!source.length) source.push(['Likely source', 'Not recorded']);

  const rows = (list) => list.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join('');
  const text = fields.map(([k, v]) => `${k}: ${v}`).join('\n')
    + '\n\nSOURCE\n' + source.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${rows(fields)}</table>`
    + `<p style="font-family:Arial,sans-serif;font-size:13px;color:#555;margin:18px 0 4px"><b>SOURCE</b></p>`
    + `<table cellpadding="4" style="font-family:Arial,sans-serif;font-size:13px;color:#555">${rows(source)}</table>`;

  try {
    await send(key, {
      from, to: [to], bcc: backup ? backup.split(',').map((s) => s.trim()) : undefined,
      reply_to: email,
      subject: `New inquiry from ${name} (BuyTurksandCaicos.com)`,
      text, html,
    });
  } catch (e) {
    console.error('inquiry: delivery failed', e.message, text);
    return res.status(502).json({ ok: false });
  }

  // Acknowledgment is best effort; the inquiry itself is already delivered.
  try {
    await send(key, {
      from, to: [email], reply_to: to,
      subject: 'Thank you, Juanita will be in touch',
      text: `Hello ${name.split(' ')[0]},\n\nThank you for your inquiry. Juanita will reply personally within one business day.\n\nIf it is urgent, call +1 (201) 674 6069.\n\nJuanita Harris\nBuyTurksandCaicos.com`,
    });
  } catch (e) {
    console.error('inquiry: acknowledgment failed', e.message);
  }
  return res.status(200).json({ ok: true });
}

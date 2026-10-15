// POST /api/inquiry
// Receives the site's inquiry forms, emails Juanita (optionally BCC'ing a
// backup address), and sends the visitor an acknowledgment. Responds 200 only
// after Juanita's notification was accepted by Resend, so the page never shows
// "thank you" for a message that was not delivered.

const RESEND_URL = 'https://api.resend.com/emails';
const clean = (v, max = 500) => String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO || 'juanita@buyturksandcaicos.com';
  const backup = process.env.INQUIRY_BACKUP; // optional, comma separated
  const from = process.env.INQUIRY_FROM || 'BuyTurksandCaicos.com <inquiries@mail.ctrltechhq.com>';
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

  const text = fields.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${fields
    .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join('')}</table>`;

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

# Juanita Harris — Buy Turks &amp; Caicos

Two finalist concepts for a luxury real-estate lead-gen landing page for **Juanita Harris** (a placeholder broker), selling private homes across Turks &amp; Caicos.

This is a static demo build — no backend, no analytics, no live form submissions. Designed to be shown to the client so she can pick a direction.

## The two directions

| | Direction | Tone |
|---|---|---|
| **№ 01** | **Editorial Atelier** — `editorial-atelier.html` | Magazine-style. Ivory paper, ink black, single brass accent. Cormorant serif display, gridded specimens. For the reader. |
| **№ 03** | **Cinematic Atlantic** — `cinematic-atlantic.html` | Deep ocean ink + sun-bleached cream. Full-bleed video hero (genuine T&amp;C drone footage). Oversized italic display. For the dreamer. |

The chooser at `index.html` previews both side by side.

## What's in each direction

Each page is a complete journey:

1. Sticky nav with Private Inquiry CTA + mobile hamburger
2. Hero (split with form for D1, full-bleed video for D3)
3. Press marquee + trust strip ($420M+ closed, 17 yrs on island, Christie's network)
4. Why Turks &amp; Caicos (no income tax, BOT, the reef, discretion)
5. Atlas of Islands — six area cards with real T&amp;C aerial photography
6. **Journeys / Lifestyle** — sailing, family/schools, wellness, concierge
7. Process — five chapters from conversation to keys
8. **Meet Juanita** — broker portrait, signature, credentials, direct call/email/WhatsApp
9. Investment metrics — appreciation, yield, occupancy, nightly rate
10. **The Caicos Wealth Report** — fake dossier cover with download CTA
11. Residency &amp; Tax — $0/$0/$0/$1M PRC threshold
12. FAQ — five most-asked questions, plain language
13. **Field Guide / Journal** — three magazine-style chapter cards
14. Pull-quote testimonial *(Editorial only)*
15. **Discretion Pledge** — quiet privacy commitment
16. Final CTA + footer with credentials (RECT, CIREBA, Christie's, Equal Housing)

Bold = additions made during the polish pass.

## Architecture

Plain static HTML/CSS/JS. No build step, no framework.

```
.
├── index.html              ← chooser
├── editorial-atelier.html  ← Direction № 01
├── cinematic-atlantic.html ← Direction № 03
├── styles/shared.css       ← scroll reveals, drawer, mobile menu, a11y
├── scripts/site.js         ← drawer + multi-step form + hamburger + reveals
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
└── design/                 ← original Claude Design handoff bundle (reference)
```

## Imagery &amp; video

All hot-linked from public CDNs (free-for-use):

- **Hero video (D3):** [Pexels 11418947](https://www.pexels.com/video/overcast-over-beach-on-turks-and-caicos-11418947/) — verified shot in Turks &amp; Caicos
- **Area photos:** Unsplash photographers — Keaton Nye, Romello Williams, Tanya Guillory, Marc Schmittbuhl, John Prefer, Gray Matter, Jack Cohen
- All photos verified shot in Turks &amp; Caicos

When the client picks a direction, swap CDN URLs for licensed/owned imagery — page structure stays identical.

## Local development

```bash
# Serve at http://127.0.0.1:4321
python3 -m http.server 4321 --bind 127.0.0.1
```

Open [http://127.0.0.1:4321/](http://127.0.0.1:4321/) for the chooser, or jump straight to:

- `/editorial-atelier.html`
- `/cinematic-atlantic.html`

## Deployment

This is a fully-static site. Deployed to Vercel. The `vercel.json` at the repo root configures clean URLs and security headers; no build command needed.

## Brand placeholder

"Juanita Harris" / "Private Caicos" / phone "+1 (649) 555 0142" / email "juanita@privatecaicos.example" — all placeholders. The schema.org markup, RECT-NO. 0481, and CIREBA membership are fictional. Replace before any public release.

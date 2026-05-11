# Juanita Harris — Buy Turks &amp; Caicos

Production marketing site for **Juanita Harris**, Bergen County Realtor® expanding her practice into Turks &amp; Caicos.

Live at: [BuyTurksandCaicos.com](https://buyturksandcaicos.com)

## The site

A single cinematic landing page — full-bleed video hero, deep ocean ink + sun-bleached cream palette, oversized italic display. Built around Juanita's dual-market positioning (NJ + TCI) and the "Every move is personal" brand.

### Sections

1. Hero — drone video over T&amp;C, emotional positioning line, inline introduction form
2. § 02 The case for the islands — four reasons grid (climate, tax, reef, access)
3. § 03 Residency &amp; Tax — $0/$0/$0/$1M PRC threshold
4. § 04 The atlas — six area cards with Juanita's own T&amp;C aerial photography
5. § 05 The life, not the square footage — journeys (sailing, family, wellness, concierge)
6. § 06 Method — five-chapter process from conversation to keys
7. § 07 A note from your broker — Juanita's bio + brand card
8. § 08 The investment thesis — appreciation, yield, occupancy, nightly rate
9. § 09 The 2026 Luxury Buyer's Guide — downloadable dossier
10. § 10 Questions — FAQ
11. § 11 The field guide — magazine-style chapter cards
12. § 12 A note on discretion
13. § 13 Three quiet ways to begin — soft-capture trio
14. § 14 A first conversation — final CTA

Five inline CTAs woven through (after Residency, after the Atlas, mid-Investment, inside Meet Juanita, plus a floating desktop pill).

## Architecture

Plain static HTML/CSS/JS. No build step, no framework.

```
.
├── index.html              ← the site (formerly cinematic-atlantic.html)
├── styles/shared.css       ← scroll reveals, drawer, mobile menu, a11y
├── scripts/site.js         ← drawer + multi-step form + hamburger + reveals
├── assets/                 ← Juanita's photographs + brand card
├── archive/                ← previous direction (editorial-atelier) + old chooser
├── vercel.json             ← clean URLs, redirects, headers
└── design/                 ← original Claude Design handoff bundle (reference)
```

## Local development

```bash
# Serve at http://127.0.0.1:4321
python3 -m http.server 4321 --bind 127.0.0.1
```

Open [http://127.0.0.1:4321/](http://127.0.0.1:4321/).

## Deployment

Deployed to Vercel from `main`. Push to main → auto-deploy.

```bash
# From a feature branch:
gh pr create --base main --title "..." --body "..."
gh pr merge --merge
```

## Brand

- **Juanita Harris** — Bergen County Realtor®, KW City Views
- Phone: +1 (201) 674 6069
- Email: juanita@upscalehomesforyou.com
- Domain: BuyTurksandCaicos.com (capitalization preserved in copy: B/T/C)

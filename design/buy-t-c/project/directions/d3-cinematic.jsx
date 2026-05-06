/* Direction 3 — Cinematic Atlantic
   Deep ocean ink + sun-bleached cream. Full-bleed image hero.
   Oversized, confident type. Most evocative + sensory. */

const D3 = () => {
  const W = 1280;
  return (
    <div className="lp d3" style={{ width: W, fontFamily: '"Söhne", "Inter", system-ui, sans-serif', color: '#f5efe1', background: '#0e1f2a' }}>
      <D3Style />
      <D3Hero />
      <D3Why />
      <D3Areas />
      <D3Process />
      <D3Investment />
      <D3Tax />
      <D3FAQ />
      <D3Final />
      <D3Footer />
    </div>
  );
};

const D3Style = () => (
  <style>{`
    .d3 {
      --deep: #0e1f2a;
      --deep-2: #14313f;
      --cream: #f5efe1;
      --cream-2: #ebe2cc;
      --sun: #e6a85c;
      --reef: #6fb1a8;
      --line: rgba(245,239,225,0.18);
      --muted: rgba(245,239,225,0.65);
    }
    .d3 .display {
      font-family: "Canela", "Tiempos Headline", "Cormorant Garamond", "Times New Roman", serif;
      font-weight: 300;
      letter-spacing: -0.025em;
      line-height: 0.92;
      font-style: italic;
    }
    .d3 .display-up {
      font-family: "Söhne", "Inter", system-ui, sans-serif;
      font-weight: 500;
      letter-spacing: -0.04em;
      line-height: 0.92;
    }
    .d3 .label {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--muted);
    }
    .d3 .btn {
      display: inline-flex; align-items: center; gap: 12px;
      padding: 18px 28px;
      background: var(--cream); color: var(--deep);
      font-size: 13px; font-weight: 500; letter-spacing: 0.06em;
      text-transform: uppercase;
      border: none; cursor: pointer;
      transition: background .25s, color .25s, transform .25s;
    }
    .d3 .btn:hover { background: var(--sun); }
    .d3 .btn-ghost {
      background: transparent; color: var(--cream);
      border: 1px solid var(--line);
    }
    .d3 .btn-ghost:hover { background: var(--cream); color: var(--deep); border-color: var(--cream); }
    .d3 a { color: inherit; text-decoration: none; }
    .d3 .ph {
      --ph-bg: #1a3645;
      --ph-a: rgba(245,239,225,0.04);
      --ph-b: rgba(245,239,225,0.09);
      --ph-fg: rgba(245,239,225,0.65);
      --ph-tag: rgba(14,31,42,0.7);
    }
    .d3 .ph-light {
      --ph-bg: #ebe2cc;
      --ph-a: rgba(14,31,42,0.05);
      --ph-b: rgba(14,31,42,0.09);
      --ph-fg: rgba(14,31,42,0.7);
      --ph-tag: rgba(245,239,225,0.85);
    }
    .d3 .arrow { display: inline-block; transition: transform .3s; }
    .d3 .lift:hover .arrow { transform: translate(4px,-4px); }
    .d3 .glow {
      background:
        radial-gradient(60% 80% at 30% 20%, rgba(230,168,92,0.18), transparent 60%),
        radial-gradient(50% 70% at 80% 70%, rgba(111,177,168,0.16), transparent 70%);
    }
  `}</style>
);

const D3Hero = () => (
  <section style={{ position: 'relative', height: 900, overflow: 'hidden' }}>
    <div className="ph" style={{ position: 'absolute', inset: 0 }}>
      <span className="ph-label" style={{ position: 'absolute', bottom: 24, right: 24 }}>FULL BLEED · GRACE BAY · DUSK · CINEMATIC</span>
    </div>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,31,42,0.55) 0%, rgba(14,31,42,0.2) 40%, rgba(14,31,42,0.85) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, padding: '36px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Juanita Harris <span style={{ color: 'var(--sun)' }}>—</span> <span style={{ color: 'var(--muted)' }}>Private Caicos</span></div>
        <div style={{ display: 'flex', gap: 36, fontSize: 13 }}>
          <a>Portfolio</a><a>Islands</a><a>Process</a><a>Journal</a>
        </div>
        <button className="btn-ghost btn">Begin <span className="arrow">↗</span></button>
      </nav>

      <div style={{ maxWidth: 1100 }}>
        <div className="label" style={{ marginBottom: 32, color: 'var(--sun)' }}>● 21°47'N · 72°16'W · TURKS &amp; CAICOS ISLANDS</div>
        <h1 style={{ margin: 0, fontSize: 168, lineHeight: 0.9 }}>
          <span className="display-up">Buy the</span><br/>
          <span className="display" style={{ color: 'var(--sun)' }}>quiet shore.</span>
        </h1>
        <p style={{ marginTop: 36, fontSize: 19, lineHeight: 1.55, color: 'var(--cream-2)', maxWidth: 560 }}>
          Sixty-five miles of barrier reef. Twelve uninhabited cays. A small brokerage that finds you a house among them — by introduction, by appointment, by the sea.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 32, alignItems: 'end' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <button className="btn">Schedule a private consultation</button>
          <button className="btn btn-ghost">Read the field guide ↓</button>
        </div>
        <D3HeroForm />
      </div>
    </div>
  </section>
);

const D3HeroForm = () => (
  <div style={{ background: 'rgba(14,31,42,0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--line)', padding: 28 }}>
    <div className="label" style={{ marginBottom: 14, color: 'var(--sun)' }}>● Begin a conversation</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
      <input style={d3inp} placeholder="First name" />
      <input style={d3inp} placeholder="Last name" />
    </div>
    <input style={{ ...d3inp, marginBottom: 12, width: '100%' }} placeholder="Email" />
    <select style={{ ...d3inp, marginBottom: 16, width: '100%' }}>
      <option>Budget — $1M – $3M</option>
      <option>$3M – $7M</option>
      <option>$7M – $15M</option>
      <option>$15M+</option>
    </select>
    <button className="btn lift" style={{ width: '100%', justifyContent: 'center' }}>
      Request a private call <span className="arrow">↗</span>
    </button>
  </div>
);

const d3inp = {
  background: 'transparent', border: 'none', borderBottom: '1px solid rgba(245,239,225,0.3)',
  padding: '12px 0', fontSize: 14, fontFamily: 'inherit', outline: 'none',
  color: '#f5efe1',
};

const D3Why = () => {
  const items = [
    ['☀', 'Eighty-four', 'Average degrees in February. Three hundred and fifty days of sun. The sea, eighty.'],
    ['◇', 'Zero', 'Income tax. Capital gains. Inheritance. The ledger ends where it begins.'],
    ['~', 'Sixty-five', 'Miles of barrier reef. Visibility, eighty feet. Twelve uninhabited cays beyond it.'],
    ['◐', 'Three', 'Hours from Miami. Direct from twelve gateways. A passport, a pair of shorts.'],
  ];
  return (
    <section style={{ padding: '160px 56px 96px', position: 'relative' }}>
      <div className="glow" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        <div className="label" style={{ marginBottom: 28 }}>§ 02 — The case for the islands</div>
        <h2 style={{ fontSize: 104, margin: '0 0 96px', maxWidth: 1100, lineHeight: 0.95 }}>
          <span className="display-up">Four reasons</span><br/>
          <span className="display" style={{ color: 'var(--sun)' }}>the quietly wealthy</span><br/>
          <span className="display-up">have come here for thirty years.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
          {items.map(([sym, n, b]) => (
            <div key={n} style={{ padding: '40px 28px 0 0', borderRight: '1px solid var(--line)' }}>
              <div style={{ fontSize: 28, color: 'var(--reef)', marginBottom: 20 }}>{sym}</div>
              <div className="display" style={{ fontSize: 88, color: 'var(--sun)', lineHeight: 1 }}>{n}</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--cream-2)', margin: '24px 0 0', maxWidth: 250 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const D3Areas = () => {
  const areas = [
    ['Grace Bay', 'The address that needs no introduction.', '$2.4M – $24M', 'GRACE BAY · CORAL SAND · 12 MI'],
    ['Long Bay', 'Shallow flats. The kite-set. Modernist.', '$3.1M – $18M', 'LONG BAY · TURQUOISE FLATS'],
    ['Leeward', 'Marina. Megayacht slips. Gated, by tender.', '$4M – $32M', 'LEEWARD · MARINA · GATED'],
    ['Parrot Cay', 'A private island. By invitation, by helicopter.', '$12M – $80M', 'PARROT CAY · PRIVATE'],
    ['Pine Cay', 'No cars. Eight hundred acres. Fifty homes.', '$5M – $22M', 'PINE CAY · NO CARS'],
    ['North Caicos', 'The road less paved. Coconut groves, flamingos.', '$650K – $6M', 'NORTH CAICOS · WILD'],
  ];
  return (
    <section style={{ padding: '120px 56px', background: 'var(--cream)', color: 'var(--deep)' }}>
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 64 }}>
        <div>
          <div className="label" style={{ color: 'rgba(14,31,42,0.6)', marginBottom: 24 }}>§ 03 — The atlas</div>
          <h2 style={{ fontSize: 88, margin: 0, lineHeight: 0.95 }}>
            <span className="display-up">Where, exactly,</span><br/>
            <span className="display" style={{ color: '#b07a2a' }}>you would prefer to live.</span>
          </h2>
        </div>
        <div className="label" style={{ color: 'rgba(14,31,42,0.6)' }}>SCROLL ↓ THE ARCHIPELAGO</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {areas.map(([name, blurb, range, ph], i) => (
          <article key={name} className="lift" style={{ cursor: 'pointer', position: 'relative' }}>
            <div className="ph ph-light" style={{ height: 360, position: 'relative' }}>
              <span className="ph-label">{ph}</span>
              <div style={{ position: 'absolute', top: 18, left: 18, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.18em', color: 'rgba(14,31,42,0.65)' }}>№ 0{i+1}</div>
            </div>
            <div style={{ padding: '28px 4px 0' }}>
              <h3 style={{ fontSize: 36, margin: '0 0 10px', fontWeight: 500, letterSpacing: '-0.02em' }}>{name}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(14,31,42,0.7)', margin: '0 0 20px', maxWidth: 340 }}>{blurb}</p>
              <div style={{ paddingTop: 16, borderTop: '1px solid rgba(14,31,42,0.18)', display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 500 }}>
                <span style={{ color: 'rgba(14,31,42,0.6)' }}>RANGE</span>
                <span>{range}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const D3Process = () => {
  const steps = [
    ['I', 'The conversation', 'Forty-five minutes. We listen. You describe the life you are designing.'],
    ['II', 'The brief', 'A written memorandum: islands, exposures, structures, fees, neighbors. Read in an evening.'],
    ['III', 'The voyage', 'Three to five days on island. Private boat, no agents-in-suits. Five properties, not fifty.'],
    ['IV', 'The offer', 'Counsel, negotiation, stamp duty, NIB filings. Quiet, end-to-end.'],
    ['V', 'The keys', 'Closing in 30–60 days. Contractor on Tuesday. You arrive Saturday. Pantry stocked.'],
  ];
  return (
    <section style={{ padding: '160px 56px' }}>
      <div className="label" style={{ marginBottom: 28 }}>§ 04 — Method</div>
      <h2 style={{ fontSize: 96, margin: '0 0 96px', maxWidth: 1100, lineHeight: 0.95 }}>
        <span className="display-up">Five chapters,</span> <span className="display" style={{ color: 'var(--sun)' }}>beginning to keys.</span>
      </h2>
      <div>
        {steps.map(([n, t, b], i) => (
          <div key={n} className="lift" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1.4fr 200px', gap: 32, padding: '40px 0', borderTop: '1px solid var(--line)', borderBottom: i === steps.length-1 ? '1px solid var(--line)' : 'none', alignItems: 'center', cursor: 'default' }}>
            <div className="display" style={{ fontSize: 80, color: 'var(--sun)', lineHeight: 1 }}>{n}</div>
            <h3 style={{ fontSize: 30, margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>{t}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--cream-2)', margin: 0 }}>{b}</p>
            <div className="label" style={{ textAlign: 'right' }}>STEP 0{i+1} / 05</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const D3Investment = () => (
  <section style={{ padding: '160px 56px', background: 'var(--deep-2)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
      <div>
        <div className="label" style={{ marginBottom: 28, color: 'var(--reef)' }}>§ 05 — The numbers, plainly</div>
        <h2 style={{ fontSize: 88, margin: '0 0 32px', lineHeight: 0.95 }}>
          <span className="display-up">A second home</span><br/>
          <span className="display" style={{ color: 'var(--sun)' }}>that pays for itself.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--cream-2)', maxWidth: 480 }}>
          We do not promise the moon. We do present the ledger. Most clients carry the property at positive cash flow within twenty-four months — and exit at a meaningful gain when the time comes.
        </p>
        <div className="ph" style={{ height: 280, marginTop: 40, position: 'relative' }}>
          <span className="ph-label">CHART · LUXURY APPRECIATION · 2015–2025</span>
        </div>
      </div>
      <div>
        {[
          ['Avg. luxury appreciation', '+11.4%', 'p.a. · 2019–2025'],
          ['Median rental yield', '6.8%', 'gross · beachfront villa'],
          ['Peak occupancy', '92%', 'Dec–Apr · Grace Bay'],
          ['Avg. nightly rate', '$3,400', 'USD · 4-bed villa'],
          ['Avg. days on market', '47', 'off-market · 2025'],
        ].map(([l, v, sub]) => (
          <div key={l} style={{ display: 'grid', gridTemplateColumns: '1.2fr auto', gap: 24, padding: '32px 0', borderTop: '1px solid var(--line)', alignItems: 'baseline' }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{l}</div>
              <div className="label" style={{ marginTop: 6, fontSize: 10 }}>{sub}</div>
            </div>
            <div className="display" style={{ fontSize: 64, color: 'var(--sun)', lineHeight: 1 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const D3Tax = () => (
  <section style={{ padding: '160px 56px' }}>
    <div className="label" style={{ marginBottom: 28 }}>§ 06 — Residency &amp; Tax</div>
    <h2 style={{ fontSize: 96, margin: '0 0 80px', maxWidth: 1100, lineHeight: 0.95 }}>
      <span className="display-up">A jurisdiction</span> <span className="display" style={{ color: 'var(--sun)' }}>built for the long view.</span>
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)' }}>
      {[
        ['$0', 'Personal income tax'],
        ['$0', 'Capital gains tax'],
        ['$0', 'Inheritance &amp; estate'],
        ['$1M', 'For permanent residency'],
      ].map(([v, l]) => (
        <div key={l} style={{ padding: '48px 28px 48px 0', borderRight: '1px solid var(--line)' }}>
          <div className="display" style={{ fontSize: 120, color: 'var(--sun)', lineHeight: 1, fontStyle: v === '$1M' ? 'italic' : 'normal' }}>{v}</div>
          <div style={{ fontSize: 15, marginTop: 24, color: 'var(--cream-2)' }} dangerouslySetInnerHTML={{ __html: l }} />
        </div>
      ))}
    </div>
    <p style={{ marginTop: 40, fontSize: 14, color: 'var(--muted)', maxWidth: 720, lineHeight: 1.6 }}>
      The Permanent Residency Certificate is issued upon a qualifying real-estate investment of $1,000,000 on Providenciales (or $300,000 on a sister island). Bearer is exempt from work-permit requirements; the certificate holds for life.
    </p>
  </section>
);

const D3FAQ = () => {
  const qs = [
    ['Is the market open to foreign buyers?', 'Wholly. There is no restriction on foreign ownership of freehold property in TCI. Title is held in fee simple.'],
    ['What are the closing costs?', 'Stamp duty 6.5%–10% by parcel value. Legal, recording, and survey ~1.5%. Written estimate before any offer.'],
    ['Can the property be rented?', 'Yes. Most beachfront clients elect a rental program. Net yields run 5–8% on well-positioned villas.'],
    ['How long does a transaction take?', 'Cash: 30–45 days. Financed: 60–90.'],
    ['Are mortgages available?', '65–70% LTV from a small set of local and offshore lenders. We make introductions.'],
  ];
  return (
    <section style={{ padding: '160px 56px', background: 'var(--cream)', color: 'var(--deep)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <div>
          <div className="label" style={{ color: 'rgba(14,31,42,0.6)', marginBottom: 28 }}>§ 07 — Questions</div>
          <h2 style={{ fontSize: 80, margin: 0, lineHeight: 0.95 }}>
            <span className="display-up">Asked,</span><br/>
            <span className="display" style={{ color: '#b07a2a' }}>plainly.</span>
          </h2>
        </div>
        <div>
          {qs.map(([q, a], i) => (
            <details key={q} open={i === 0} style={{ borderTop: '1px solid rgba(14,31,42,0.18)', padding: '28px 0', borderBottom: i === qs.length-1 ? '1px solid rgba(14,31,42,0.18)' : 'none' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', listStyle: 'none' }}>
                <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>{q}</span>
                <span style={{ color: '#b07a2a', fontSize: 26 }}>+</span>
              </summary>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(14,31,42,0.7)', margin: '16px 0 0', maxWidth: 580 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const D3Final = () => (
  <section style={{ padding: 0, position: 'relative', height: 720, overflow: 'hidden' }}>
    <div className="ph" style={{ position: 'absolute', inset: 0 }}>
      <span className="ph-label" style={{ position: 'absolute', top: 24, right: 24 }}>FULL BLEED · CAYS · TENDER · GOLDEN HOUR</span>
    </div>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,31,42,0.4), rgba(14,31,42,0.85))' }} />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="label" style={{ marginBottom: 32, color: 'var(--sun)' }}>● A first conversation</div>
      <h2 style={{ fontSize: 144, margin: '0 auto 36px', maxWidth: 1100, lineHeight: 0.95 }}>
        <span className="display-up">The shore is</span><br/>
        <span className="display" style={{ color: 'var(--sun)' }}>quieter</span> <span className="display-up">with someone who lives there.</span>
      </h2>
      <p style={{ fontSize: 19, color: 'var(--cream-2)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.55 }}>
        No pitch. No portal. A glass of something cold and an honest hour of your time.
      </p>
      <button className="btn lift">Schedule a private consultation <span className="arrow">↗</span></button>
    </div>
  </section>
);

const D3Footer = () => (
  <footer style={{ padding: '64px 56px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, background: 'var(--deep)' }}>
    <div>
      <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Juanita Harris <span style={{ color: 'var(--sun)' }}>—</span> <span style={{ color: 'var(--muted)' }}>Private Caicos</span></div>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16, maxWidth: 280, lineHeight: 1.55 }}>
        Private brokerage. Providenciales, Turks &amp; Caicos Islands, BWI. By appointment.
      </p>
    </div>
    {[['Office', ['Suite 4, Regent Village', 'Providenciales, TCI', '+1 (649) 555 0142']],
      ['Hours', ['Mon–Sat, 9–18 AST', 'After hours by request']],
      ['Elsewhere', ['Instagram', 'Press kit', 'Privacy']]].map(([h, items]) => (
      <div key={h}>
        <div className="label" style={{ marginBottom: 14 }}>{h}</div>
        {items.map(i => <div key={i} style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>{i}</div>)}
      </div>
    ))}
  </footer>
);

window.D3 = D3;

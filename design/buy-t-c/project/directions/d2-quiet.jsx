/* Direction 2 — Quiet Coastal
   Minimal, sand + bone, sans-only, very generous whitespace.
   Restrained. Confident. The "less is more" answer. */

const D2 = () => {
  const W = 1280;
  return (
    <div className="lp d2" style={{ width: W, fontFamily: '"Inter", "Söhne", system-ui, sans-serif', color: '#2a2620', background: '#faf7f1' }}>
      <D2Style />
      <D2Nav />
      <D2Hero />
      <D2Proof />
      <D2Why />
      <D2Areas />
      <D2Process />
      <D2Investment />
      <D2Tax />
      <D2FAQ />
      <D2Final />
      <D2Footer />
    </div>
  );
};

const D2Style = () => (
  <style>{`
    .d2 {
      --ink: #2a2620;
      --ink-2: #6b6358;
      --bone: #faf7f1;
      --sand: #f1ebde;
      --sand-2: #e6dfce;
      --line: rgba(42,38,32,0.14);
      --accent: #5c7a6e;
    }
    .d2 .h-display {
      font-family: "Inter", system-ui, sans-serif;
      font-weight: 300;
      letter-spacing: -0.035em;
      line-height: 1.02;
    }
    .d2 .h-display em { font-style: normal; color: var(--accent); }
    .d2 .label {
      font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--ink-2); font-weight: 500;
    }
    .d2 .btn {
      display: inline-flex; align-items: center; gap: 12px;
      padding: 16px 26px;
      background: var(--ink); color: var(--bone);
      font-size: 13px; font-weight: 500; letter-spacing: 0.02em;
      border: none; cursor: pointer;
      border-radius: 999px;
      transition: background .25s, transform .25s;
    }
    .d2 .btn:hover { background: var(--accent); }
    .d2 .btn-ghost {
      background: transparent; color: var(--ink);
      border: 1px solid var(--line);
    }
    .d2 .btn-ghost:hover { background: var(--ink); color: var(--bone); border-color: var(--ink); }
    .d2 a { color: inherit; text-decoration: none; }
    .d2 .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); display: inline-block; }
    .d2 .arrow { display: inline-block; transition: transform .3s; }
    .d2 .lift:hover .arrow { transform: translateX(4px); }
    .d2 .ph {
      --ph-bg: #ece5d3;
      --ph-a: rgba(42,38,32,0.04);
      --ph-b: rgba(42,38,32,0.08);
      --ph-fg: rgba(42,38,32,0.6);
      --ph-tag: rgba(250,247,241,0.85);
      border-radius: 4px;
    }
  `}</style>
);

const D2Nav = () => (
  <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 64px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>
      <span className="dot" />
      Juanita Harris
    </div>
    <div style={{ display: 'flex', gap: 36, fontSize: 14, color: 'var(--ink-2)' }}>
      <a>Listings</a><a>Islands</a><a>About</a><a>Journal</a>
    </div>
    <button className="btn">Schedule a call <span className="arrow">→</span></button>
  </nav>
);

const D2Hero = () => (
  <section style={{ padding: '40px 64px 96px' }}>
    <div className="label" style={{ marginBottom: 32 }}>● A private brokerage in Turks &amp; Caicos</div>
    <h1 className="h-display" style={{ fontSize: 116, margin: 0, maxWidth: 1100 }}>
      A home on the<br/>
      reef, found <em>quietly</em>.
    </h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, marginTop: 64, alignItems: 'end' }}>
      <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 560, margin: 0 }}>
        We work with a small number of buyers each year, sourcing freehold residences on the islands &mdash; from the founding parcels on Grace Bay to the cays only reached by tender. No portal. No volume. One conversation at a time.
      </p>
      <D2HeroForm />
    </div>
    <div style={{ marginTop: 80 }}>
      <div className="ph" style={{ height: 460 }}>
        <span className="ph-label">GRACE BAY · WIDE · MORNING LIGHT</span>
      </div>
    </div>
  </section>
);

const D2HeroForm = () => (
  <div style={{ background: 'var(--sand)', borderRadius: 16, padding: 32 }}>
    <div className="label" style={{ marginBottom: 14 }}>Begin</div>
    <div style={{ display: 'grid', gap: 14 }}>
      <input style={inp} placeholder="Your name" />
      <input style={inp} placeholder="Email" />
      <input style={inp} placeholder="Phone (optional)" />
      <select style={inp}>
        <option>Budget — $1M – $3M</option>
        <option>$3M – $7M</option>
        <option>$7M – $15M</option>
        <option>$15M+</option>
      </select>
    </div>
    <button className="btn lift" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>
      Schedule a private call <span className="arrow">→</span>
    </button>
  </div>
);

const inp = {
  background: '#faf7f1', border: 'none', borderRadius: 10,
  padding: '14px 16px', fontSize: 14, fontFamily: 'inherit', outline: 'none',
  color: '#2a2620', width: '100%',
};

const D2Proof = () => (
  <section style={{ padding: '64px 64px 96px', borderTop: '1px solid var(--line)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
      {[['$1.2B+','In transactions, 2014–2025'],
        ['11 yr','On the islands'],
        ['142','Closed acquisitions'],
        ['96%','Off-market sourced']].map(([n, l]) => (
        <div key={l}>
          <div className="h-display" style={{ fontSize: 64, lineHeight: 1, fontWeight: 300 }}>{n}</div>
          <div className="label" style={{ marginTop: 16 }}>{l}</div>
        </div>
      ))}
    </div>
  </section>
);

const D2Why = () => {
  const items = [
    ['Tax', 'No income, no capital gains, no inheritance. The ledger is unusually short.'],
    ['Title', 'Freehold ownership, English common law, USD denominated. Familiar bones.'],
    ['Reach', 'Direct flights from twelve U.S. and U.K. gateways. Three hours from Miami.'],
    ['Reef', 'Sixty-five miles of barrier reef. Twelve uninhabited cays. Water like glass.'],
    ['Privacy', 'A small island, a smaller circle. Closings without press releases.'],
    ['Climate', 'Eighty-four degrees in February. Three hundred and fifty days of sun.'],
  ];
  return (
    <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)' }}>
      <div className="label" style={{ marginBottom: 28 }}>Why here, why now</div>
      <h2 className="h-display" style={{ fontSize: 80, margin: '0 0 80px', maxWidth: 900 }}>
        Six reasons people<br/>quietly relocate <em>here</em>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
        {items.map(([t, b], i) => (
          <div key={t} style={{ padding: '40px 36px 40px 0', borderBottom: i < 3 ? '1px solid var(--line)' : 'none', borderRight: (i+1) % 3 !== 0 ? '1px solid var(--line)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span className="dot" />
              <span className="label">{t}</span>
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.5, margin: 0, maxWidth: 320, fontWeight: 300 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const D2Areas = () => {
  const areas = [
    ['Grace Bay', 'The address that needs no introduction. Twelve miles of coral sand, the resorts at one end, the residences at the other.', '$2.4M – $24M', 'PROVIDENCIALES · NORTH SHORE'],
    ['Long Bay', 'Shallow turquoise flats. Newer construction. The kite-set, the family compound, the modernist box.', '$3.1M – $18M', 'PROVIDENCIALES · EAST'],
    ['Leeward', 'Marina, megayacht slips, gated. For arriving by tender and leaving by helicopter.', '$4M – $32M', 'PROVIDENCIALES · NE TIP'],
    ['Parrot Cay', 'A private island. Fewer than fifty residences. By introduction only.', '$12M – $80M', 'PRIVATE · BY HELICOPTER'],
    ['Pine Cay', 'Eight hundred acres, no cars, fifty homes. A rumor more than a place.', '$5M – $22M', 'PRIVATE · BY BOAT'],
    ['North Caicos', 'The road less paved. Coconut groves, flamingos, raw acreage at gentler prices.', '$650K – $6M', 'NORTH ISLAND · WILD'],
  ];
  return (
    <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 56 }}>
        <div>
          <div className="label" style={{ marginBottom: 24 }}>The atlas</div>
          <h2 className="h-display" style={{ fontSize: 72, margin: 0 }}>Where you might prefer to live.</h2>
        </div>
        <a className="label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>View full map <span className="arrow">→</span></a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {areas.map(([name, blurb, range, ph]) => (
          <article key={name} className="lift" style={{ cursor: 'pointer' }}>
            <div className="ph" style={{ height: 280 }}>
              <span className="ph-label">{ph}</span>
            </div>
            <div style={{ padding: '24px 4px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <h3 className="h-display" style={{ fontSize: 30, margin: 0 }}>{name}</h3>
                <span className="label" style={{ color: 'var(--accent)' }}>{range}</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, fontWeight: 300 }}>{blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const D2Process = () => {
  const steps = [
    ['01', 'A first call', 'Forty-five minutes. We listen. You tell us about the life you are designing.'],
    ['02', 'A written brief', 'Islands, exposures, structures, fees, neighbors. Read in an evening.'],
    ['03', 'Three days on island', 'Private boat. Five properties, not fifty. You eat well.'],
    ['04', 'The offer', 'Counsel, negotiation, stamp duty, NIB filings. Quiet handling.'],
    ['05', 'The keys', 'Closing in 30–60 days. We meet the contractor on Tuesday. You arrive Saturday.'],
  ];
  return (
    <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)', background: 'var(--sand)' }}>
      <div className="label" style={{ marginBottom: 28 }}>How we work</div>
      <h2 className="h-display" style={{ fontSize: 72, margin: '0 0 80px', maxWidth: 900 }}>Five steps, no surprises.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
        {steps.map(([n, t, b]) => (
          <div key={n}>
            <div className="h-display" style={{ fontSize: 48, color: 'var(--accent)', fontWeight: 300, marginBottom: 24 }}>{n}</div>
            <div style={{ height: 1, background: 'var(--ink)', opacity: 0.7, marginBottom: 24, width: 32 }} />
            <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 14px', letterSpacing: '-0.01em' }}>{t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, fontWeight: 300 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const D2Investment = () => {
  return (
    <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div className="label" style={{ marginBottom: 28 }}>The numbers</div>
          <h2 className="h-display" style={{ fontSize: 72, margin: '0 0 28px' }}>
            A second home that <em>quietly pays</em><br/>for itself.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 460, fontWeight: 300 }}>
            Most of our clients carry the property at positive cash flow within two years and exit at a meaningful gain. Below: the figures we share with new clients on a first call.
          </p>
        </div>
        <div style={{ background: 'var(--sand)', borderRadius: 16, padding: '12px 36px' }}>
          {[
            ['Avg. luxury appreciation', '+11.4%', 'p.a. · 2019–2025'],
            ['Median rental yield', '6.8%', 'gross, beachfront'],
            ['Peak occupancy', '92%', 'Dec–Apr, Grace Bay'],
            ['Avg. nightly rate', '$3,400', '4-bed villa'],
            ['Avg. days on market (off-market)', '47', 'days'],
          ].map(([l, v, sub]) => (
            <div key={l} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--line)', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{l}</div>
                <div className="label" style={{ marginTop: 4, textTransform: 'none', letterSpacing: 0, fontSize: 12 }}>{sub}</div>
              </div>
              <div className="h-display" style={{ fontSize: 40, color: 'var(--accent)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const D2Tax = () => (
  <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)' }}>
    <div className="label" style={{ marginBottom: 28 }}>Residency &amp; Tax</div>
    <h2 className="h-display" style={{ fontSize: 72, margin: '0 0 64px', maxWidth: 1000 }}>
      A jurisdiction <em>designed</em><br/>for the long view.
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      {[
        ['$0', 'Personal income tax'],
        ['$0', 'Capital gains tax'],
        ['$0', 'Inheritance &amp; estate'],
        ['$1M', 'Investment for permanent residency'],
      ].map(([v, l]) => (
        <div key={l} style={{ background: 'var(--sand)', borderRadius: 16, padding: 32, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="h-display" style={{ fontSize: 88, color: 'var(--accent)', lineHeight: 1, fontWeight: 300 }}>{v}</div>
          <div style={{ fontSize: 14, fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: l }} />
        </div>
      ))}
    </div>
    <p style={{ marginTop: 36, fontSize: 14, color: 'var(--ink-2)', maxWidth: 720, fontWeight: 300, lineHeight: 1.6 }}>
      Permanent Residency Certificate issued upon a qualifying real-estate investment of $1,000,000 on Providenciales (or $300,000 on a sister island). Bearer is exempt from work-permit requirements. The certificate holds for life.
    </p>
  </section>
);

const D2FAQ = () => {
  const qs = [
    ['Is the market open to foreign buyers?', 'Wholly. There is no restriction on foreign ownership of freehold property. Title is held in fee simple.'],
    ['What are the closing costs?', 'Stamp duty 6.5%–10% by parcel value. Legal, recording, and survey ~1.5%. We share a written estimate before any offer.'],
    ['Can the property be rented?', 'Yes. Most beachfront clients elect a rental program. Net yields run 5–8% on well-positioned villas.'],
    ['How long does a transaction take?', 'Cash: 30–45 days. Financed: 60–90.'],
    ['Are mortgages available?', '65–70% LTV from a small set of local and offshore lenders. We make the introductions.'],
    ['Do you only work with $5M+ buyers?', 'No. We work across price points, but our practice is built around buyers seeking thoughtful, off-market acquisitions.'],
  ];
  return (
    <section style={{ padding: '120px 64px', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <div>
          <div className="label" style={{ marginBottom: 28 }}>Questions</div>
          <h2 className="h-display" style={{ fontSize: 56, margin: 0 }}>Asked,<br/>plainly.</h2>
        </div>
        <div>
          {qs.map(([q, a], i) => (
            <details key={q} open={i === 0} style={{ borderTop: '1px solid var(--line)', padding: '28px 0', borderBottom: i === qs.length-1 ? '1px solid var(--line)' : 'none' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', listStyle: 'none' }}>
                <span style={{ fontSize: 19, fontWeight: 500 }}>{q}</span>
                <span style={{ color: 'var(--accent)', fontSize: 22, fontWeight: 300 }}>+</span>
              </summary>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: '16px 0 0', maxWidth: 580, fontWeight: 300 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const D2Final = () => (
  <section style={{ padding: '160px 64px', textAlign: 'center', background: 'var(--sand)', borderTop: '1px solid var(--line)' }}>
    <div className="label" style={{ marginBottom: 32 }}>● A first conversation</div>
    <h2 className="h-display" style={{ fontSize: 104, margin: '0 auto 36px', maxWidth: 1100, lineHeight: 1 }}>
      The shore is <em>quieter</em> with someone who lives there.
    </h2>
    <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.55, fontWeight: 300 }}>
      No pitch. No portal. A glass of something cold and an honest hour of your time.
    </p>
    <button className="btn lift">Schedule a private consultation <span className="arrow">→</span></button>
  </section>
);

const D2Footer = () => (
  <footer style={{ padding: '64px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, borderTop: '1px solid var(--line)' }}>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 500 }}>
        <span className="dot" />
        Juanita Harris
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 16, maxWidth: 280, lineHeight: 1.55, fontWeight: 300 }}>
        Private brokerage. Providenciales, Turks &amp; Caicos Islands.
      </p>
    </div>
    {[['Office', ['Suite 4, Regent Village', 'Providenciales, TCI', '+1 (649) 555 0142']],
      ['Hours', ['Mon–Sat, 9–18 AST', 'After hours by request']],
      ['Elsewhere', ['Instagram', 'Press kit', 'Privacy']]].map(([h, items]) => (
      <div key={h}>
        <div className="label" style={{ marginBottom: 14 }}>{h}</div>
        {items.map(i => <div key={i} style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 6, fontWeight: 300 }}>{i}</div>)}
      </div>
    ))}
  </footer>
);

window.D2 = D2;

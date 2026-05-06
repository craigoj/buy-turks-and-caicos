/* Direction 1 — Editorial Atelier
   Magazine-style. Ivory paper, ink black, single brass accent.
   Big serif display, gridded specimen feel. */

const D1 = () => {
  const W = 1280;
  return (
    <div className="lp d1" style={{ width: W, fontFamily: '"Söhne", "Inter", system-ui, sans-serif', color: '#1b1814', background: '#f4f0e6' }}>
      <D1Style />
      <D1Nav />
      <D1Hero />
      <D1Marquee />
      <D1Why />
      <D1Areas />
      <D1Process />
      <D1Investment />
      <D1Tax />
      <D1FAQ />
      <D1Final />
      <D1Footer />
    </div>
  );
};

const D1Style = () => (
  <style>{`
    .d1 {
      --ink: #1b1814;
      --paper: #f4f0e6;
      --paper-2: #ece6d6;
      --rule: rgba(27,24,20,0.18);
      --muted: rgba(27,24,20,0.62);
      --brass: #9a6f2c;
      --ph-bg: #e7e0cf;
      --ph-a: rgba(27,24,20,0.05);
      --ph-b: rgba(27,24,20,0.09);
      --ph-fg: rgba(27,24,20,0.7);
      --ph-tag: rgba(244,240,230,0.85);
    }
    .d1 .display {
      font-family: "Tiempos Headline", "Cormorant Garamond", "Times New Roman", serif;
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 0.95;
    }
    .d1 .eyebrow {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .d1 .num {
      font-family: "Tiempos Headline", "Cormorant Garamond", serif;
      font-feature-settings: "lnum", "tnum";
    }
    .d1 .btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 14px 22px;
      background: var(--ink); color: var(--paper);
      font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
      border: none; cursor: pointer;
      transition: background .25s;
    }
    .d1 .btn:hover { background: var(--brass); }
    .d1 .btn-ghost {
      background: transparent; color: var(--ink);
      border: 1px solid var(--ink);
    }
    .d1 .btn-ghost:hover { background: var(--ink); color: var(--paper); }
    .d1 a { color: inherit; text-decoration: none; }
    .d1 .arrow { display: inline-block; transition: transform .25s; }
    .d1 .lift:hover .arrow { transform: translate(4px, -4px); }
  `}</style>
);

const D1Nav = () => (
  <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid var(--rule)' }}>
    <div style={{ fontFamily: '"Tiempos Headline", serif', fontSize: 22, letterSpacing: '-0.01em' }}>
      Juanita Harris<span style={{ color: 'var(--brass)' }}>.</span>
    </div>
    <div style={{ display: 'flex', gap: 36, fontSize: 13, color: 'var(--muted)' }}>
      <a>Portfolio</a><a>Islands</a><a>Process</a><a>Journal</a><a>Contact</a>
    </div>
    <div className="eyebrow">Providenciales · TCI</div>
  </nav>
);

const D1Hero = () => (
  <section style={{ padding: '56px', borderBottom: '1px solid var(--rule)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48 }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 28 }}>Vol. I — Private Caicos · Est. MMXII</div>
        <h1 className="display" style={{ fontSize: 132, margin: 0 }}>
          The quiet<br/>
          <em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>archipelago</em><br/>
          of one's own.
        </h1>
        <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.55, maxWidth: 520, color: 'var(--muted)' }}>
          A private brokerage for those acquiring residence on Providenciales, Parrot Cay, and the lesser-known shores of Turks &amp; Caicos. By introduction, by appointment, by the sea.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          <button className="btn lift">Schedule a private consultation <span className="arrow">↗</span></button>
          <button className="btn btn-ghost">View the portfolio</button>
        </div>
        <div style={{ display: 'flex', gap: 56, marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--rule)' }}>
          {[['$1.2B','In closed transactions'], ['142','Private acquisitions'], ['11 yrs','On the islands']].map(([n, l]) => (
            <div key={l}>
              <div className="num" style={{ fontSize: 38, lineHeight: 1 }}>{n}</div>
              <div className="eyebrow" style={{ marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <D1HeroForm />
    </div>
  </section>
);

const D1HeroForm = () => (
  <aside style={{ background: 'var(--paper-2)', padding: 36, alignSelf: 'start' }}>
    <div className="eyebrow">A. 01 — The Introduction</div>
    <h3 className="display" style={{ fontSize: 32, margin: '14px 0 8px' }}>Begin a conversation.</h3>
    <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 28px' }}>
      Tell us a little about what you are seeking. We respond personally within one business day.
    </p>
    <div style={{ display: 'grid', gap: 22 }}>
      <div className="field"><label>First name</label><input placeholder="Eleanor" /></div>
      <div className="field"><label>Email</label><input placeholder="eleanor@example.com" /></div>
      <div className="field"><label>Budget</label>
        <select><option>$3M – $7M</option><option>$7M – $15M</option><option>$15M+</option></select>
      </div>
      <div className="field"><label>Notes</label><input placeholder="Beachfront, sleeps 12, by Christmas." /></div>
    </div>
    <button className="btn lift" style={{ width: '100%', marginTop: 28, justifyContent: 'center' }}>
      Request introduction <span className="arrow">↗</span>
    </button>
    <p className="eyebrow" style={{ marginTop: 18, textAlign: 'center', fontSize: 10 }}>By appointment · No obligation</p>
  </aside>
);

const D1Marquee = () => (
  <div style={{ borderBottom: '1px solid var(--rule)', overflow: 'hidden', padding: '22px 0' }}>
    <div style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap', fontFamily: '"Tiempos Headline", serif', fontSize: 22, fontStyle: 'italic', color: 'var(--muted)' }}>
      {Array(2).fill(0).map((_, i) => (
        <React.Fragment key={i}>
          <span>As featured in <em style={{ fontStyle: 'normal' }}>Mansion Global</em></span>
          <span>·</span>
          <span><em style={{ fontStyle: 'normal' }}>Robb Report</em></span>
          <span>·</span>
          <span><em style={{ fontStyle: 'normal' }}>The Wall Street Journal</em></span>
          <span>·</span>
          <span><em style={{ fontStyle: 'normal' }}>Architectural Digest</em></span>
          <span>·</span>
          <span><em style={{ fontStyle: 'normal' }}>Condé Nast Traveler</em></span>
          <span>·</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const D1Why = () => {
  const items = [
    ['I.', 'No income tax', 'No personal income tax. No capital gains. No inheritance. The ledger stays where it began.'],
    ['II.', 'British Overseas Territory', 'English common law, USD currency, direct flights from twelve gateways. A passport that travels well.'],
    ['III.', 'The reef', 'Sixty-five miles of barrier reef. Water like cut glass. Twelve uninhabited cays, by tender.'],
    ['IV.', 'Discretion', 'A small island. A smaller circle. Transactions that close without a press release.'],
  ];
  return (
    <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 64 }}>
        <div className="eyebrow">§ 02 — The Case for the Islands</div>
        <h2 className="display" style={{ fontSize: 64, margin: 0 }}>
          Four reasons the quietly wealthy<br/>have come here for thirty years.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--rule)' }}>
        {items.map(([n, t, b]) => (
          <div key={t} style={{ padding: '36px 24px 36px 0', borderRight: '1px solid var(--rule)' }}>
            <div className="num" style={{ fontSize: 28, color: 'var(--brass)' }}>{n}</div>
            <h3 className="display" style={{ fontSize: 26, margin: '32px 0 14px' }}>{t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const D1Areas = () => {
  const areas = [
    ['01', 'Grace Bay', 'Twelve miles of coral sand. The address that needs no introduction.', '$2.4M – $24M'],
    ['02', 'Long Bay', 'Shallow turquoise flats. The kite-set. New construction, contemporary.', '$3.1M – $18M'],
    ['03', 'Leeward', 'Marina, megayacht slips, gated. For the family that arrives by tender.', '$4M – $32M'],
    ['04', 'Parrot Cay', 'The private island. By invitation, by helicopter, by very few.', '$12M – $80M'],
    ['05', 'Pine Cay', 'No cars, 800 acres, fifty residences. A rumor more than a place.', '$5M – $22M'],
    ['06', 'North Caicos', 'The road less paved. Coconut groves, flamingos, raw acreage.', '$650K – $6M'],
  ];
  return (
    <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div className="eyebrow">§ 03 — Atlas of Islands</div>
        <h2 className="display" style={{ fontSize: 64, margin: 0 }}>Where, exactly, you would prefer to live.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)' }}>
        {areas.map(([n, name, blurb, range]) => (
          <article key={name} className="lift" style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', cursor: 'pointer' }}>
            <div className="ph" style={{ height: 220 }}>
              <span className="ph-label">{name.toUpperCase()} · AERIAL · {n}</span>
            </div>
            <div style={{ padding: '24px 28px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="display" style={{ fontSize: 32, margin: 0 }}>{name}</h3>
                <div className="num" style={{ fontSize: 13, color: 'var(--brass)' }}>№ {n}</div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: '12px 0 20px' }}>{blurb}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid var(--rule)' }}>
                <span className="eyebrow">Range</span>
                <span className="num" style={{ fontSize: 15 }}>{range}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const D1Process = () => {
  const steps = [
    ['I.', 'The Conversation', 'A first call, no obligation. We listen. You describe the life you are designing. We are honest about what is, and is not, available this season.'],
    ['II.', 'The Brief', 'A written introduction memorandum: islands, exposures, structures, fee implications, neighbors. Read in an evening; revisable on a flight.'],
    ['III.', 'The Voyage', 'Three to five days on island. Private boat, no agents-in-suits. We see five properties, not fifty. You eat well.'],
    ['IV.', 'The Offer', 'Counsel from your Caribbean attorney. We negotiate quietly. Stamp duty, escrow, NIB filings—handled.'],
    ['V.', 'The Keys', 'Closing in 30–60 days. We meet the contractor on Tuesday. You arrive Saturday. The pantry is stocked.'],
  ];
  return (
    <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div className="eyebrow">§ 04 — Method</div>
        <h2 className="display" style={{ fontSize: 64, margin: 0 }}>
          Five chapters, beginning to <em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>keys</em>.
        </h2>
      </div>
      <div style={{ display: 'grid', gap: 0 }}>
        {steps.map(([n, t, b], i) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '120px 1.3fr 2fr', gap: 32, padding: '28px 0', borderTop: '1px solid var(--rule)', borderBottom: i === steps.length - 1 ? '1px solid var(--rule)' : 'none' }}>
            <div className="num" style={{ fontSize: 44, color: 'var(--brass)', lineHeight: 1 }}>{n}</div>
            <h3 className="display" style={{ fontSize: 30, margin: 0 }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', margin: 0, maxWidth: 560 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const D1Investment = () => {
  const data = [
    ['Avg. luxury appreciation, 2019–2025', '+11.4%', 'p.a.'],
    ['Median rental yield, beachfront villa', '6.8%', 'gross'],
    ['Occupancy, Grace Bay, peak season', '92%', 'Dec–Apr'],
    ['Avg. nightly rate, 4-bed villa', '$3,400', 'USD'],
  ];
  return (
    <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div className="eyebrow">§ 05 — The Numbers, Plainly</div>
          <h2 className="display" style={{ fontSize: 64, margin: '24px 0 28px' }}>
            A second home that quietly pays for itself.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 480 }}>
            We do not promise the moon. We do present the ledger. Most of our clients carry the property at a positive cash-flow within twenty-four months, and exit at a meaningful gain when the time comes.
          </p>
          <div className="ph" style={{ height: 280, marginTop: 36 }}>
            <span className="ph-label">CHART · APPRECIATION 2015–2025</span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {data.map(([l, v, sub]) => (
            <div key={l} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, padding: '32px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
              <div style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 240 }}>{l}</div>
              <div style={{ textAlign: 'right' }}>
                <div className="num display" style={{ fontSize: 56, lineHeight: 1 }}>{v}</div>
                <div className="eyebrow" style={{ marginTop: 6 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const D1Tax = () => (
  <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)', background: '#1b1814', color: '#f4f0e6' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
      <div className="eyebrow" style={{ color: 'rgba(244,240,230,0.6)' }}>§ 06 — Residency &amp; Tax</div>
      <h2 className="display" style={{ fontSize: 64, margin: 0 }}>
        A jurisdiction designed for the long view.
      </h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(244,240,230,0.18)' }}>
      {[
        ['$0', 'Personal income tax'],
        ['$0', 'Capital gains'],
        ['$0', 'Inheritance &amp; estate'],
        ['$1M', 'Investment threshold for PRC'],
      ].map(([v, l]) => (
        <div key={l} style={{ padding: '40px 28px 0 0', borderRight: '1px solid rgba(244,240,230,0.18)' }}>
          <div className="num display" style={{ fontSize: 76, color: '#d4a45a', lineHeight: 1 }}>{v}</div>
          <div style={{ fontSize: 15, marginTop: 18, color: 'rgba(244,240,230,0.75)' }} dangerouslySetInnerHTML={{__html: l}} />
        </div>
      ))}
    </div>
    <p style={{ marginTop: 48, fontSize: 14, color: 'rgba(244,240,230,0.55)', maxWidth: 720 }}>
      The Permanent Residency Certificate is issued upon a qualifying real-estate investment of $1,000,000 on Providenciales (or $300,000 on a sister island). Bearer is exempt from work-permit requirements; the certificate holds for life.
    </p>
  </section>
);

const D1FAQ = () => {
  const qs = [
    ['Is this market open to foreign buyers?', 'Wholly. There is no restriction on foreign ownership of freehold property in the Turks & Caicos Islands. Title is held in fee simple.'],
    ['What are the closing costs?', 'Stamp duty is 6.5%–10% depending on parcel value. Legal, recording, and survey typically add ~1.5%. We provide a written estimate before any offer.'],
    ['Can the property be rented when we are not there?', 'Yes. Most of our beachfront clients elect a rental program. Net yields run 5–8% on well-positioned villas.'],
    ['How long does a transaction take?', 'A cash purchase closes in 30–45 days. Financed transactions, 60–90.'],
    ['Are mortgages available?', 'Yes — typically 65–70% LTV from a small set of local and offshore lenders. We make introductions.'],
  ];
  return (
    <section style={{ padding: '96px 56px', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
        <div>
          <div className="eyebrow">§ 07 — Questions</div>
          <h2 className="display" style={{ fontSize: 56, margin: '24px 0' }}>Asked, in plain language.</h2>
        </div>
        <div>
          {qs.map(([q, a], i) => (
            <details key={q} open={i === 0} style={{ borderTop: '1px solid var(--rule)', padding: '24px 0' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', listStyle: 'none' }}>
                <span className="display" style={{ fontSize: 22 }}>{q}</span>
                <span className="num" style={{ color: 'var(--brass)', fontSize: 22 }}>+</span>
              </summary>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: '16px 0 0', maxWidth: 580 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const D1Final = () => (
  <section style={{ padding: '120px 56px', textAlign: 'center', borderBottom: '1px solid var(--rule)' }}>
    <div className="eyebrow">§ 08 — Begin</div>
    <h2 className="display" style={{ fontSize: 120, margin: '24px auto 36px', maxWidth: 1000, lineHeight: 1 }}>
      The shore is <em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>quieter</em><br/>
      with someone who lives there.
    </h2>
    <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.55 }}>
      A first conversation, by appointment. No pitch. No portal. A glass of something cold and an honest hour of your time.
    </p>
    <button className="btn lift">Schedule a private consultation <span className="arrow">↗</span></button>
  </section>
);

const D1Footer = () => (
  <footer style={{ padding: '56px 56px 64px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
    <div>
      <div style={{ fontFamily: '"Tiempos Headline", serif', fontSize: 28 }}>Juanita Harris<span style={{ color: 'var(--brass)' }}>.</span></div>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16, maxWidth: 280, lineHeight: 1.55 }}>Private brokerage. Providenciales, Turks &amp; Caicos Islands, BWI. By appointment.</p>
    </div>
    {[['Office', ['Suite 4, Regent Village', 'Providenciales, TCI', '+1 (649) 555 0142']],
      ['Hours', ['Mon–Sat, 9–18 AST', 'After hours by request']],
      ['Elsewhere', ['Instagram', 'Mansion Global', 'Press kit']]].map(([h, items]) => (
      <div key={h}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{h}</div>
        {items.map(i => <div key={i} style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>{i}</div>)}
      </div>
    ))}
  </footer>
);

window.D1 = D1;

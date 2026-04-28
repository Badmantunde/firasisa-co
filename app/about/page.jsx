import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Firas Isa | Crypto Dispensers Founder | Chicago Bitcoin Entrepreneur',
  description:
    'Meet Firas Isa — the Chicago entrepreneur who built Crypto Dispensers from a single Bitcoin ATM into a global cash-to-Bitcoin network serving 1M+ users across 159 countries.',
  alternates: { canonical: 'https://firasisa.com/about' },
}

const TIMELINE = [
  {
    year: '2017',
    event: '<strong>Founded Crypto Dispensers.</strong> Launched the first Bitcoin ATM at Woodfield Mall in Schaumburg, IL — the largest mall in Illinois. September 12, 2017.',
  },
  {
    year: '2018–19',
    event: '<strong>Mall network expansion.</strong> Deployed Bitcoin ATM kiosks across Simon, Brookfield, and Tanger Properties — major retail destinations across the Midwest.',
  },
  {
    year: '2020',
    event: '<strong>Invented BitcoinPOP™.</strong> Built the Point of Payment system that turned 16,000+ retail locations — CVS, Rite Aid, and more — into instant cash-to-Bitcoin access points.',
  },
  {
    year: '2021–23',
    event: '<strong>Reached 1 million users globally.</strong> Launched the web platform. Integrated Paybis, Transak, and Cybrid to support debit, credit, ACH, and wire purchases across 159 countries.',
  },
  {
    year: '2024',
    event: '<strong>Corporate restructure and Series A.</strong> Converted from LLC to C-Corp. Announced a $5M Series A at a $25M valuation. Began mobile app development.',
  },
  {
    year: '2025–26',
    event: '<strong>Global digital payment network.</strong> Operating across 159 countries with 16,000+ U.S. retail locations, SOC 2 Type II certification, and FinCEN registration.',
  },
]

const BELIEFS = [
  {
    title: 'Financial freedom is a right, not a privilege.',
    body: 'The people who need wealth preservation most are the same people the financial system makes it hardest for. Bitcoin changes that equation — if you can access it.',
  },
  {
    title: 'Execution beats theory.',
    body: 'Firas didn\'t write a white paper. He put a machine in a mall. Then he built retail distribution that didn\'t require a machine. Ideas mean nothing without the follow-through.',
  },
  {
    title: 'Meet people where they are.',
    body: 'If your product requires users to change their behavior, you\'ve already lost. BitcoinPOP works because it fits into how people already handle money.',
  },
  {
    title: 'Trust is built through compliance.',
    body: 'Crypto has a reputation problem. Crypto Dispensers holds FinCEN registration and SOC 2 Type II certification because trust has to be earned — not assumed.',
  },
  {
    title: 'Build for the next generation.',
    body: 'The people buying Bitcoin at CVS today are leaving something real behind for their kids. That\'s the point. That\'s always been the point.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="page-wrapper">

        {/* ── PAGE HERO ───────────────────────────────────────── */}
        <header className="page-hero">
          <div className="page-hero-inner wrap">
            <span className="page-eyebrow">About the Founder</span>
            <h1 className="page-title">FIRAS<br />ISA</h1>
            <p className="page-subtitle">
              Founder &amp; CEO, Crypto Dispensers.<br />
              Chicago. Bitcoin. 2017 to now.
            </p>
          </div>
        </header>

        {/* ── ORIGIN STORY ────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">The Origin</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>

            <div className="two-col">
              <div>
                <div className="about-photo" aria-label="Firas Isa, Founder" style={{ marginBottom: '32px' }}>
                  <img
                    src="/founder.jpg"
                    alt="Firas Isa — Founder & CEO, Crypto Dispensers, Chicago"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    ['Founded', 'September 12, 2017'],
                    ['Education', 'Saint Xavier University, Chicago'],
                    ['Headquarters', '205 N Michigan Ave, Suite 810, Chicago, IL'],
                    ['Company', 'Crypto Dispensers (Virtual Assets, LLC / C-Corp)'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="t-label" style={{ marginBottom: '4px' }}>{label}</dt>
                      <dd style={{ fontFamily: 'var(--f-hel)', fontSize: '15px', fontWeight: 300, color: 'var(--white)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <blockquote className="about-quote" style={{ marginBottom: '36px' }}>
                  "I wanted to build a company for Americans who work hard, who try to save, who want to own something that holds its value — and who deserve more than a lifetime of payments, interest, and obligations with nothing to pass on."
                </blockquote>

                <p className="t-body" style={{ marginBottom: '24px' }}>
                  Firas Isa grew up understanding what it meant to work for every dollar. He watched people around him earn cash — real, physical cash — and struggle to do anything meaningful with it. Banks that didn't want them. Savings accounts that couldn't keep up with inflation. A financial system designed, at its core, for people who already had assets.
                </p>

                <p className="t-body" style={{ marginBottom: '24px' }}>
                  In 2017, he installed a single Bitcoin ATM at Woodfield Mall in Schaumburg, Illinois. Not because Bitcoin was trendy — it wasn't, not yet. But because he could see what it was: a savings tool that didn't require a credit score, a bank account, or anyone's permission to use.
                </p>

                <p className="t-body">
                  From that one machine, Firas built <a href="https://www.cryptodispensers.com" style={{ color: 'var(--orange)', opacity: 1 }}>Crypto Dispensers</a> into a company that has onboarded over one million users globally, operates retail access points at 16,000+ stores, and processes transactions across 159 countries. He didn't raise a seed round first. He installed a machine and figured it out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MILESTONES ──────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx-soft)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">Milestones</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>

            <div className="timeline" role="list">
              {TIMELINE.map(({ year, event }) => (
                <div key={year} className="timeline-row" role="listitem">
                  <span className="timeline-year">{year}</span>
                  <p
                    className="timeline-event"
                    dangerouslySetInnerHTML={{ __html: event }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ───────────────────────────────────────────── */}
        <div className="stats-bar" aria-label="Founder metrics">
          <dl className="stats-grid">
            {[
              { num: '2017', label: 'Founded' },
              { num: '16K+', label: 'Retail Locations' },
              { num: '1M+',  label: 'Users Globally' },
              { num: '159',  label: 'Countries' },
              { num: '4.9★', label: 'Trustpilot' },
            ].map(({ num, label }) => (
              <div key={label} className="stat-item">
                <dt className="stat-label">{label}</dt>
                <dd className="stat-num">{num}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── CORE BELIEFS ────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">What He Believes</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>

            <div className="two-col" style={{ marginBottom: 'clamp(56px,8vw,100px)' }}>
              <h2
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(36px,6vw,80px)',
                  fontWeight: 700,
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                }}
              >
                FIVE PRINCIPLES<br />THAT DRIVE<br />THE WORK.
              </h2>
              <p className="t-body" style={{ paddingTop: '8px' }}>
                Firas doesn't talk in frameworks. He talks in decisions — the ones he made at 3 AM when the company had one machine and no roadmap. These are the beliefs that came out of those decisions.
              </p>
            </div>

            <div className="belief-list" role="list">
              {BELIEFS.map((b, i) => (
                <div key={i} className="belief-item" role="listitem">
                  <span className="belief-num">0{i + 1}</span>
                  <div className="belief-text">
                    <strong>{b.title}</strong><br />
                    {b.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="two-col" style={{ alignItems: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(40px,7vw,100px)',
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: '-0.035em',
                  color: 'var(--onyx)',
                }}
              >
                READ THE<br />FOUNDER'S<br />LETTER.
              </h2>
              <div>
                <p className="t-body on-light" style={{ marginBottom: '36px' }}>
                  In his own words — why Firas built Crypto Dispensers, who he built it for, and where he intends to take it. Written from Chicago. Unfiltered.
                </p>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.cryptodispensers.com/crypto-dispensers-founder-letter-from-firas-isa-ceo"
                    className="cta dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the letter <span className="cta-arrow">→</span>
                  </a>
                  <a
                    href="https://www.cryptodispensers.com/team/firas-isa"
                    className="cta dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Founder profile <span className="cta-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

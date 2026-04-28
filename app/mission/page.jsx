import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Mission | Firas Isa | Bitcoin Financial Freedom',
  description:
    'Firas Isa built Crypto Dispensers on one conviction: financial freedom is not a luxury. Learn why Bitcoin accessibility matters and how Crypto Dispensers is closing the gap.',
  alternates: { canonical: 'https://firasisa.com/mission' },
}

const PROBLEMS = [
  {
    stat: '~60M',
    label: 'Unbanked or underbanked Americans',
    desc: 'Nearly one in four American adults is unbanked or relies on alternative financial services. They pay more for everything, check cashing, money orders, wire transfers, simply for not having a traditional bank account.',
  },
  {
    stat: '8–10%',
    label: 'Real inflation rate felt by working households',
    desc: 'Official inflation numbers don\'t capture what working households actually feel. Food, rent, gas, childcare, the essentials inflate faster than wages, eroding savings that took years to build.',
  },
  {
    stat: '$35+',
    label: 'Average monthly bank fee for low-balance accounts',
    desc: 'Monthly maintenance fees, overdraft charges, and minimum balance penalties hit people who can afford them least. Banks extract wealth from the people with the least of it.',
  },
  {
    stat: '0',
    label: 'Dollar amount of savings passed to next generation for most American families',
    desc: 'Generational wealth transfer is concentrated at the top. For most working families, there is nothing to pass on, no assets, no equity, no inheritance. Bitcoin is an attempt to change that.',
  },
]

export default function MissionPage() {
  return (
    <>
      <Nav />
      <main className="page-wrapper">

        {/* ── PAGE HERO ───────────────────────────────────────── */}
        <header className="page-hero">
          <div className="page-hero-inner wrap">
            <span className="page-eyebrow">The Mission</span>
            <h1 className="page-title">
              FINANCIAL<br />
              FREEDOM IS<br />
              NOT A LUXURY.
            </h1>
            <p className="page-subtitle">
              It is the foundation of every other freedom.<br />
              And it belongs to everyone.
            </p>
          </div>
        </header>

        {/* ── THE PROBLEM ─────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">The Problem</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>

            <div className="two-col" style={{ marginBottom: 'clamp(56px,8vw,100px)' }}>
              <h2
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(36px,5.5vw,72px)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  color: 'var(--white)',
                }}
              >
                THE SYSTEM<br />WASN'T BUILT<br />FOR EVERYONE.
              </h2>
              <div>
                <p className="t-body" style={{ marginBottom: '24px' }}>
                  The American financial system creates winners and losers, not by accident, but by design. The people with the most assets get the best rates, the lowest fees, and the most options. The people with the least get charged the most for everything.
                </p>
                <p className="t-body">
                  Inflation punishes people who hold dollars. Banking fees punish people with low balances. Credit systems exclude people without credit history. And the wealth gap compounds, year after year, for everyone on the wrong side of those rules.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                background: 'var(--rule-dark)',
              }}
            >
              {PROBLEMS.map(({ stat, label, desc }) => (
                <div
                  key={stat}
                  style={{
                    background: 'var(--onyx-soft)',
                    padding: 'clamp(32px,4vw,52px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 'clamp(36px,5vw,64px)',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      color: 'var(--orange)',
                    }}
                  >
                    {stat}
                  </span>
                  <strong
                    style={{
                      fontFamily: 'var(--f-hel)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--white)',
                      lineHeight: 1.3,
                    }}
                  >
                    {label}
                  </strong>
                  <p className="t-body" style={{ fontSize: '14px', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BITCOIN AS THE ANSWER ───────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--orange)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label" style={{ color: 'rgba(0,0,0,0.5)' }}>The Answer</span>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid rgba(0,0,0,0.12)' }} />
            </div>

            <div className="two-col">
              <h2
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(44px,7vw,100px)',
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: '-0.035em',
                  color: 'var(--onyx)',
                }}
              >
                BITCOIN<br />IS THE<br />ANSWER.
              </h2>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--f-inter)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(0,0,0,0.7)',
                    marginBottom: '24px',
                  }}
                >
                  Bitcoin isn't speculation. It's a savings technology, one that can't be inflated away, can't be confiscated by a bank, and doesn't require anyone's permission to hold. It is, in the most literal sense, a tool for financial sovereignty.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--f-inter)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(0,0,0,0.7)',
                    marginBottom: '24px',
                  }}
                >
                  The problem isn't that people don't want Bitcoin. It's that they couldn't access it. Most crypto platforms require a verified bank account, a brokerage app, or technical knowledge that creates barriers the financial system has already used against these people their entire lives.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--f-inter)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(0,0,0,0.7)',
                  }}
                >
                  Firas Isa built Crypto Dispensers to eliminate every one of those barriers. Walk in with cash. Leave with Bitcoin. That's it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE'RE DOING ABOUT IT ───────────────────────── */}
        <section className="page-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label" style={{ color: 'var(--gray-600)' }}>What Crypto Dispensers Does</span>
              <hr className="rule-light" style={{ flex: 1 }} />
            </div>

            <div className="two-col">
              <h2
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(36px,5.5vw,72px)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  color: 'var(--onyx)',
                }}
              >
                WE BUILD THE<br />INFRASTRUCTURE<br />FREEDOM NEEDS.
              </h2>
              <div>
                <p className="t-body on-light" style={{ marginBottom: '24px' }}>
                  Crypto Dispensers is the retail layer of Bitcoin adoption. We make buying Bitcoin as ordinary as buying a phone charger, a decision you can make at a CVS at 9pm on a Tuesday, with the cash in your pocket, without an account, without a wait.
                </p>
                <p className="t-body on-light" style={{ marginBottom: '24px' }}>
                  BitcoinPOP™, our Point of Payment system, is the most direct expression of that mission. It connects a person holding cash to Bitcoin in under five minutes at 16,000+ stores nationwide. No bank. No ATM. No friction.
                </p>
                <p className="t-body on-light" style={{ marginBottom: '40px' }}>
                  We also maintain FinCEN registration and SOC 2 Type II certification, because trust is built through accountability, and the people we serve deserve a platform they can trust.
                </p>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <a href="/crypto-dispensers" className="cta dark">
                    See all products <span className="cta-arrow">→</span>
                  </a>
                  <a
                    href="https://www.cryptodispensers.com/bitcoinpop"
                    className="cta dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try BitcoinPOP <span className="cta-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER LETTER PULLOUT ──────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx-soft)' }}>
          <div className="page-section-inner">
            <blockquote
              className="pull-quote"
              style={{ maxWidth: '900px', marginBottom: '52px' }}
            >
              "The truck driver. The small business owner. The neighbor who works in cash. These are the people I built Crypto Dispensers for. They deserve access to the same wealth-preservation tools available to everyone else."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--white)',
                }}
              >
               , Firas Isa
              </span>
              <span className="t-label">Founder &amp; CEO, Crypto Dispensers</span>
              <hr className="rule" style={{ flex: 1 }} />
              <a
                href="https://www.cryptodispensers.com/crypto-dispensers-founder-letter-from-firas-isa-ceo"
                className="cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full letter <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

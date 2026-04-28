import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WritingClient from './WritingClient'
import { ARTICLES } from '@/lib/articles'

export const metadata = {
  title: 'Writing | Firas Isa | Bitcoin, Fintech & Entrepreneurship',
  description:
    'Thoughts from Firas Isa on Bitcoin adoption, financial inclusion, building Crypto Dispensers, and the future of cash-to-crypto access for everyday Americans.',
  alternates: { canonical: 'https://firasisa.com/writing' },
}

const serializable = ARTICLES.map(({ Content: _c, ...rest }) => rest)

export default function WritingPage() {
  return (
    <>
      <Nav />
      <main className="page-wrapper">

        {/* ── PAGE HERO ──────────────────────────────────────── */}
        <header className="page-hero">
          <div className="page-hero-inner wrap">
            <span className="page-eyebrow">Writing</span>
            <h1 className="page-title">
              THOUGHTS<br />FROM THE<br />FOUNDER.
            </h1>
            <p className="page-subtitle">
              Bitcoin. Fintech. Building. Financial freedom.<br />
              Written from the trenches.
            </p>
          </div>
        </header>

        {/* ── POSTS + TABS (client) ─────────────────────────── */}
        <section className="page-section writing-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <WritingClient articles={serializable} />
          </div>
        </section>

        {/* ── NEWSLETTER ────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx-soft)' }}>
          <div className="page-section-inner">
            <div className="two-col" style={{ alignItems: 'center' }}>
              <div>
                <p className="t-label" style={{ marginBottom: '20px' }}>Stay in the loop</p>
                <h2 style={{
                  fontFamily: 'var(--f-hel)',
                  fontSize: 'clamp(36px,5.5vw,72px)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  color: 'var(--white)',
                }}>
                  THOUGHTS,<br />DELIVERED.
                </h2>
              </div>
              <div>
                <p className="t-body" style={{ marginBottom: '32px' }}>
                  New writing on Bitcoin, fintech, and building for the people the financial system forgot. No spam. Just the actual thinking.
                </p>
                <form style={{ display: 'flex', gap: '12px' }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--rule-dark)',
                      color: 'var(--white)',
                      fontFamily: 'var(--f-inter)',
                      fontSize: '15px',
                      padding: '14px 18px',
                      outline: 'none',
                    }}
                  />
                  <button type="submit" className="btn-submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Firas Isa | Founder, Crypto Dispensers | Chicago',
  description:
    'Connect with Firas Isa, founder and CEO of Crypto Dispensers. For speaking inquiries, media, partnerships, or general questions.',
  alternates: { canonical: 'https://firasisa.com/contact' },
}

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'firasisa@cryptodispensers.com',
    href: 'mailto:firasisa@cryptodispensers.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/firas-isa',
    href: 'https://www.linkedin.com/in/firas-isa/',
  },
  {
    label: 'Company',
    value: 'cryptodispensers.com',
    href: 'https://www.cryptodispensers.com',
  },
  {
    label: 'Office',
    value: '205 N Michigan Ave, Suite 810\nChicago, IL 60601',
    href: null,
  },
]

const SPEAKING_TOPICS = [
  'Bitcoin accessibility and financial inclusion',
  'Cash-to-crypto infrastructure and retail distribution',
  'Building and scaling a compliant fintech business',
  'The unbanked and underbanked economy',
  'Bitcoin as a savings tool for working Americans',
  'The future of digital payments and cash equivalence',
  'Founder journey: from a single ATM to a global network',
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="page-wrapper">

        {/* ── PAGE HERO ───────────────────────────────────────── */}
        <header className="page-hero">
          <div className="page-hero-inner wrap">
            <span className="page-eyebrow">Connect</span>
            <h1 className="page-title">
              LET'S<br />TALK.
            </h1>
            <p className="page-subtitle">
              Media, speaking, partnerships, or<br />just a conversation about Bitcoin.
            </p>
          </div>
        </header>

        {/* ── CONTACT GRID ────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="contact-grid">

              {/* Contact info */}
              <div className="contact-info-block">
                <div>
                  <p className="t-label" style={{ marginBottom: '32px' }}>Direct Contact</p>
                  {CONTACT_INFO.map(({ label, value, href }) => (
                    <div key={label} className="contact-info-group" style={{ marginBottom: '32px' }}>
                      <span className="contact-info-label">{label}</span>
                      <span className="contact-info-value">
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {value}
                          </a>
                        ) : (
                          <span style={{ whiteSpace: 'pre-line' }}>{value}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <hr className="rule" />

                <div>
                  <p className="t-label" style={{ marginBottom: '20px' }}>Crypto Dispensers</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      ['Buy Bitcoin', 'https://app.cryptodispensers.com/signup'],
                      ['BitcoinPOP™', 'https://www.cryptodispensers.com/bitcoinpop'],
                      ['Find ATMs', 'https://www.cryptodispensers.com/bitcoin-atms'],
                      ['About the Company', 'https://www.cryptodispensers.com/about-us'],
                      ['Founder Profile', 'https://www.cryptodispensers.com/team/firas-isa'],
                    ].map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        className="cta"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ justifyContent: 'space-between' }}
                      >
                        {label} <span className="cta-arrow">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <p className="t-label" style={{ marginBottom: '32px' }}>Send a Message</p>
                <form
                  action="mailto:firasisa@cryptodispensers.com"
                  method="post"
                  encType="text/plain"
                  className="contact-form"
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your full name" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                      <option value="">Select a topic</option>
                      <option value="speaking">Speaking Inquiry</option>
                      <option value="media">Media / Press</option>
                      <option value="partnership">Partnership</option>
                      <option value="investor">Investor Relations</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* ── SPEAKING ────────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label" style={{ color: 'var(--gray-600)' }}>Speaking &amp; Media</span>
              <hr className="rule-light" style={{ flex: 1 }} />
            </div>

            <div className="two-col">
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--f-hel)',
                    fontSize: 'clamp(36px,5.5vw,72px)',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: '-0.025em',
                    color: 'var(--onyx)',
                    marginBottom: '28px',
                  }}
                >
                  FIRAS ISA<br />SPEAKS ON<br />WHAT HE<br />HAS BUILT.
                </h2>
                <p className="t-body on-light">
                  Not theory. Not predictions. Firas brings a decade of execution to the stage, from a single Bitcoin ATM to 16,000 retail locations to a million users. He speaks about the problems he built for, the innovations that came from them, and where the industry is going next.
                </p>
              </div>

              <div>
                <p className="t-label" style={{ color: 'var(--gray-600)', marginBottom: '24px' }}>Topics</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {SPEAKING_TOPICS.map((topic, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--f-inter)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: 'var(--gray-600)',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--rule-light)',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: '10px',
                          color: 'var(--orange)',
                          paddingTop: '4px',
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '36px' }}>
                  <a href="mailto:firasisa@cryptodispensers.com?subject=Speaking Inquiry" className="cta dark">
                    Book Firas to speak <span className="cta-arrow">→</span>
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

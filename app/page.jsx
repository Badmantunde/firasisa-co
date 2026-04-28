import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Firas Isa | Founder of Crypto Dispensers | Cash to Bitcoin Pioneer',
  description:
    'Firas Isa founded Crypto Dispensers in 2017 to make Bitcoin accessible to every American — no bank account required. Buy Bitcoin with cash at 16,000+ retail stores nationwide.',
  alternates: { canonical: 'https://firasisa.com' },
}

const TICKER_ITEMS = [
  'BitcoinPOP™',
  'Cash to Bitcoin',
  'No Bank Account Required',
  'Buy Bitcoin at CVS',
  'FinCEN Registered',
  'SOC 2 Certified',
  '16,000+ Retail Stores',
  'Chicago, IL',
  '1M+ Users Served',
  '159 Countries',
  'Bitcoin for Everyone',
  'Founded 2017',
]

const SERVICES = [
  {
    num: '01',
    name: 'BitcoinPOP™',
    desc: 'Point of Payment. Deposit cash at 16,000+ retail stores — CVS, Rite Aid, Casey\'s, Office Depot — and receive Bitcoin directly. No ATM, no bank account needed.',
    href: 'https://www.cryptodispensers.com/bitcoinpop',
    label: 'How it works',
  },
  {
    num: '02',
    name: 'Bitcoin ATMs',
    desc: 'Insert cash, receive Bitcoin in minutes. Kiosks at malls and retail locations across the U.S. Fast, simple, and ready when you are.',
    href: 'https://www.cryptodispensers.com/bitcoin-atms',
    label: 'Find ATMs',
  },
  {
    num: '03',
    name: 'Debit & Credit',
    desc: 'Buy Bitcoin instantly with any major debit or credit card — real-time processing, secure, and delivered to your wallet.',
    href: 'https://www.cryptodispensers.com/debit-credit',
    label: 'Buy now',
  },
  {
    num: '04',
    name: 'ACH & Wire',
    desc: 'Link a bank account for ACH or send a wire for high-volume purchases — lower fees, larger limits, institutional-grade access.',
    href: 'https://www.cryptodispensers.com/ach-transfer',
    label: 'Get started',
  },
]

const POSTS = [
  {
    tag: 'Founder Story',
    title: 'Why I Built a Bitcoin Company for People Without Bank Accounts',
    excerpt:
      'Millions of Americans earn cash and want to save. The financial system wasn\'t built for them — Bitcoin was. Here\'s why I built Crypto Dispensers.',
    date: '2026 · 8 min',
    href: '/writing/why-i-built-crypto-dispensers',
  },
  {
    tag: 'Product',
    title: 'BitcoinPOP: Putting Bitcoin Access Inside Every Neighborhood Store',
    excerpt:
      'We asked one question: what if buying Bitcoin was as easy as paying a bill at CVS? The answer became BitcoinPOP — our most important innovation.',
    date: '2026 · 6 min',
    href: '/writing/bitcoinpop-bitcoin-retail',
  },
  {
    tag: 'Bitcoin',
    title: 'How Everyday Americans Can Use Bitcoin to Fight Inflation',
    excerpt:
      'Inflation hits hardest when you\'re living paycheck to paycheck. Here\'s why Bitcoin isn\'t speculation for the people I built this for — it\'s protection.',
    date: '2025 · 7 min',
    href: '/writing/bitcoin-inflation-hedge',
  },
]

const STORES = [
  'CVS Pharmacy', 'Rite Aid', "Casey's General Store",
  'Office Depot', 'Winn-Dixie', "Love's Travel Stops", 'Tops Markets',
]

export default function HomePage() {
  return (
    <main>

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Introduction">
        <Nav />

        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-meta" aria-hidden="true">
          <span className="hero-meta-line">Chicago, Illinois</span>
          <span className="hero-meta-line">Est. 2017</span>
          <span className="hero-meta-line">Fintech · Bitcoin</span>
        </div>

        <div className="hero-content wrap">
          <h1 className="hero-name">FIRAS<br />ISA</h1>
          <div className="hero-bottom">
            <p className="hero-tagline">
              Founder &amp; CEO, Crypto Dispensers<br />
              Making Bitcoin accessible to everyone.
            </p>
            <div className="hero-scroll" aria-hidden="true">
              <div className="hero-scroll-line" />
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ══════════════════════════════════════════ */}
      <div className="stats-bar" aria-label="Company metrics">
        <dl className="stats-grid">
          {[
            { num: '2017', label: 'Year Founded' },
            { num: '16K+', label: 'Retail Locations' },
            { num: '1M+',  label: 'Users Globally' },
            { num: '159',  label: 'Countries Served' },
            { num: '4.9★', label: 'Trustpilot Rating' },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item">
              <dt className="stat-label">{label}</dt>
              <dd className="stat-num">{num}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ═══ TICKER ══════════════════════════════════════════════ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="ticker-seg">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="ticker-item">
                  {item}<span className="ticker-sep"> · </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT ═══════════════════════════════════════════════ */}
      <section id="about" className="about" aria-labelledby="about-h">
        <div className="wrap">
          <div className="about-header">
            <span className="t-label">About the Founder</span>
            <hr className="rule" style={{ flex: 1 }} />
          </div>
          <div className="about-grid">
            <div className="about-photo" aria-label="Founder portrait — Firas Isa">
              <img
                src="/founder.jpg"
                alt="Firas Isa — Founder & CEO, Crypto Dispensers"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div>
              <blockquote
                className="about-quote"
                cite="https://www.cryptodispensers.com/crypto-dispensers-founder-letter-from-firas-isa-ceo"
              >
                "I wanted to build a company for Americans who work hard, who try to save, who want to own something that holds its value — and who deserve more than a lifetime of payments and obligations with nothing to pass on."
              </blockquote>
              <p className="t-body" style={{ marginBottom: '24px' }}>
                Firas Isa is a Chicago-based entrepreneur and the founder of{' '}
                <a href="https://www.cryptodispensers.com" style={{ color: 'var(--orange)', opacity: 1 }}>
                  Crypto Dispensers
                </a>
                — a platform he launched in September 2017 with a single Bitcoin ATM at Woodfield Mall. Today, Crypto Dispensers serves over one million users across 159 countries, with cash-to-Bitcoin access at 16,000+ retail locations nationwide.
              </p>
              <p className="t-body" style={{ marginBottom: '44px' }}>
                He didn't build it for traders or tech insiders. He built it for the truck driver, the small business owner, the freelancer — the people the banking system overlooks. His signature innovation, BitcoinPOP™, lets anyone buy Bitcoin with cash at a neighborhood store. No bank account. No ATM. No barriers.
              </p>
              <a href="/about" className="cta">
                Full story <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPANY ═════════════════════════════════════════════ */}
      <section id="company" className="company" aria-labelledby="company-h">
        <div className="wrap">
          <div className="company-top">
            <div>
              <p className="t-label" style={{ color: 'var(--gray-600)', marginBottom: '20px' }}>The Company</p>
              <h2 id="company-h" className="company-name">
                CRYPTO<br />DISPENSERS
              </h2>
            </div>
            <div className="company-right">
              <div className="badges">
                <span className="badge">FinCEN Registered</span>
                <span className="badge">SOC 2 Type II</span>
                <span className="badge">4.9★ Trustpilot</span>
                <span className="badge">159 Countries</span>
              </div>
              <p className="t-body on-light" style={{ textAlign: 'right', fontSize: '15px', maxWidth: '320px' }}>
                A full-scale fintech platform making it simple and safe to buy Bitcoin anywhere in the U.S. — with cash, card, ACH, or wire transfer.
              </p>
            </div>
          </div>
          <hr className="rule-light" style={{ marginBottom: '48px' }} />
          <div className="services-grid">
            {SERVICES.map(({ num, name, desc, href, label }) => (
              <div key={num} className="service-card">
                <span className="svc-num">{num}</span>
                <h3 className="svc-name">{name}</h3>
                <p className="svc-desc">{desc}</p>
                <a
                  href={href}
                  className="cta dark"
                  style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '9px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label} <span className="cta-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            <a href="/crypto-dispensers" className="cta dark">
              Full company profile <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ BITCOINPOP ══════════════════════════════════════════ */}
      <section id="bitcoinpop" className="bitcoinpop" aria-labelledby="bitcoinpop-h">
        <div className="wrap">
          <div className="bitcoinpop-inner">
            <div>
              <p className="t-label" style={{ color: 'rgba(0,0,0,0.4)', marginBottom: '32px' }}>
                Flagship Product
              </p>
              <h2 id="bitcoinpop-h" className="bitcoinpop-wordmark">
                BITCOIN<br />POP<sup>™</sup>
              </h2>
              <p style={{
                fontFamily: 'var(--f-hel)',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.45)',
                marginTop: '16px',
              }}>
                Point of Payment
              </p>
            </div>
            <div>
              <p className="bitcoinpop-headline">
                Cash in. Bitcoin out.<br />
                No bank account.<br />
                No ATM required.
              </p>
              <p style={{
                fontFamily: 'var(--f-inter)',
                fontSize: '16px',
                lineHeight: 1.75,
                fontWeight: 300,
                color: 'rgba(0,0,0,0.65)',
                marginBottom: '8px',
              }}>
                BitcoinPOP is Crypto Dispensers' most important innovation — turning everyday retail stores into instant Bitcoin access points for the 60 million Americans who handle cash and deserve access to the digital economy. Walk in, deposit cash, get Bitcoin. Done.
              </p>
              <div className="store-tags">
                {STORES.map((s) => (
                  <span key={s} className="store-tag">{s}</span>
                ))}
              </div>
              <a
                href="https://www.cryptodispensers.com/bitcoinpop"
                className="cta orange-bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try BitcoinPOP — Buy Bitcoin with cash <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION ═════════════════════════════════════════════ */}
      <section id="mission" className="mission" aria-labelledby="mission-h">
        <div className="wrap">
          <p className="t-label" style={{ marginBottom: '44px' }}>The Mission</p>
          <h2 id="mission-h" className="mission-title">
            FINANCIAL<br />
            FREEDOM IS<br />
            NOT A LUXURY.
          </h2>
          <div className="mission-body">
            <div>
              <p className="t-body" style={{ marginBottom: '24px' }}>
                The American financial system wasn't built equally. Inflation erodes savings. Banking fees punish the people with the least. Credit systems exclude the workers who show up every day, earn in cash, and deserve the same tools that protect wealth for everyone else.
              </p>
              <p className="t-body">
                Firas Isa's answer wasn't to complain about the system. It was to build around it. Crypto Dispensers is the infrastructure he wished existed: a way for anyone, anywhere, to access Bitcoin and take real control of their financial future.
              </p>
            </div>
            <div>
              <p className="t-body" style={{ marginBottom: '24px' }}>
                Bitcoin isn't speculation to Firas. It's a savings tool. A hedge. A way to pass something real to the next generation when every other system has failed to hold its value.
              </p>
              <p className="t-body" style={{ marginBottom: '44px' }}>
                The people who need it most are the same people who've been told for decades that complex financial instruments aren't for them. That's the gap Crypto Dispensers was built to close.
              </p>
              <a href="/mission" className="cta">
                Read the mission <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WRITING ═════════════════════════════════════════════ */}
      <section id="writing" className="writing" aria-labelledby="writing-h">
        <div className="wrap">
          <div className="writing-top">
            <div>
              <p className="t-label" style={{ color: 'var(--gray-600)', marginBottom: '12px' }}>Writing</p>
              <h2 id="writing-h" className="writing-headline">
                THOUGHTS<br />FROM THE<br />FOUNDER.
              </h2>
            </div>
            <a href="/writing" className="cta dark">
              All writing <span className="cta-arrow">→</span>
            </a>
          </div>
          <div className="posts-grid">
            {POSTS.map(({ tag, title, excerpt, date, href }) => (
              <a key={href} href={href} className="post-card">
                <span className="post-tag">{tag}</span>
                <h3 className="post-title">{title}</h3>
                <p className="post-excerpt">{excerpt}</p>
                <span className="post-meta">{date}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

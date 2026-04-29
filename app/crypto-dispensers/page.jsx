import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Crypto Dispensers | Buy Bitcoin with Cash at 16,000+ Stores',
  description:
    'Crypto Dispensers, founded by Firas Isa in 2017, lets you buy Bitcoin with cash at CVS, Rite Aid and 16,000+ stores — or online via debit, credit, ACH or wire. FinCEN registered. SOC 2 certified.',
  alternates: { canonical: 'https://firasisa.com/crypto-dispensers' },
  openGraph: {
    title: 'Crypto Dispensers | Buy Bitcoin with Cash — No Bank Account Needed',
    description:
      'Walk into CVS, Rite Aid or 16,000+ other stores. Pay cash. Get Bitcoin. Founded by Firas Isa in 2017. Serving 1M+ users in 159 countries. FinCEN registered. SOC 2 certified.',
    url: 'https://firasisa.com/crypto-dispensers',
    images: [{ url: '/thumbnail.png', width: 3274, height: 1684, alt: 'Crypto Dispensers — Buy Bitcoin with Cash' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Dispensers | Buy Bitcoin with Cash at 16,000+ Stores',
    description: 'Walk in with cash. Leave with Bitcoin. No bank account needed. Founded by Firas Isa — serving 1M+ users in 159 countries.',
    images: ['/thumbnail.png'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Crypto Dispensers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crypto Dispensers is a fintech company founded in 2017 by Firas Isa that makes buying Bitcoin and cryptocurrency simple and accessible. It operates retail cash-to-Bitcoin access via BitcoinPOP™ at 16,000+ stores, plus online purchases via debit card, credit card, ACH, and wire transfer. It serves over 1 million users across 159 countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Crypto Dispensers safe and legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Crypto Dispensers is FinCEN registered, holds SOC 2 Type II certification, and maintains a 4.9-star Trustpilot rating from thousands of verified customer reviews. It has processed transactions for over 1 million users since 2017.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does BitcoinPOP work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BitcoinPOP (Point of Payment) lets you deposit cash at a participating retail store, such as CVS, Rite Aid, or Casey\'s, and receive Bitcoin directly to your Crypto Dispensers wallet. No bank account or ATM required. Create an account at cryptodispensers.com, generate a payment barcode, and pay cash at the counter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy Bitcoin with cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can buy Bitcoin with cash at 16,000+ retail locations across the United States through Crypto Dispensers\' BitcoinPOP service, including CVS Pharmacy, Rite Aid, Casey\'s General Store, Office Depot, Winn-Dixie, Love\'s Travel Stops, Tops Markets, Giant Martin\'s, and Harveys Supermarket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Crypto Dispensers charge fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crypto Dispensers charges a transaction fee that varies by payment method. Cash deposits via BitcoinPOP, Bitcoin ATMs, and debit/credit card purchases each carry different fee structures. Visit cryptodispensers.com for current fee information.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I buy Bitcoin at CVS using Crypto Dispensers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1. Create a free account at cryptodispensers.com. 2. Select BitcoinPOP and enter your Bitcoin purchase amount. 3. Generate a payment barcode. 4. Bring the barcode and cash to any participating CVS Pharmacy. 5. Pay at the register, Bitcoin is delivered to your account instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Crypto Dispensers FinCEN registered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Crypto Dispensers is registered as a Money Services Business (MSB) with the Financial Crimes Enforcement Network (FinCEN), a bureau of the U.S. Department of the Treasury.',
      },
    },
  ],
}

const PRODUCTS = [
  {
    num: '01',
    name: 'BitcoinPOP™',
    tag: 'Flagship Innovation',
    desc: 'Point of Payment, the most direct route from cash to Bitcoin ever built. Walk into any participating retail store, deposit cash at the register, and receive Bitcoin to your wallet. No bank account, no ATM, no friction. Available at 16,000+ locations nationwide including CVS Pharmacy, Rite Aid, Casey\'s General Store, Office Depot, Winn-Dixie, and more.',
    href: 'https://www.cryptodispensers.com/bitcoinpop',
    label: 'Buy Bitcoin with cash',
    keywords: 'How to buy Bitcoin without a bank account · Buy Bitcoin at CVS · Cash to Bitcoin near me',
  },
  {
    num: '02',
    name: 'Bitcoin ATMs',
    tag: null,
    desc: 'Crypto Dispensers operates and partners with Bitcoin ATM kiosks at major mall and retail locations across the United States. Insert cash, receive Bitcoin directly to your wallet in minutes. Simple, fast, and private.',
    href: 'https://www.cryptodispensers.com/bitcoin-atms',
    label: 'Find an ATM near you',
    keywords: 'Bitcoin ATM near me · Bitcoin kiosk · Buy Bitcoin ATM',
  },
  {
    num: '03',
    name: 'Debit & Credit Card',
    tag: null,
    desc: 'Buy Bitcoin instantly online using any major debit or credit card. Real-time processing, institutional-grade security, and direct delivery to your wallet. Available 24/7 through the Crypto Dispensers platform.',
    href: 'https://www.cryptodispensers.com/debit-credit',
    label: 'Buy Bitcoin with card',
    keywords: 'Buy Bitcoin with debit card · Bitcoin credit card purchase · Instant Bitcoin online',
  },
  {
    num: '04',
    name: 'ACH Bank Transfer',
    tag: null,
    desc: 'Link a bank account and buy Bitcoin directly via ACH, lower fees and larger transaction limits make this ideal for regular buyers and those building a Bitcoin savings practice over time.',
    href: 'https://www.cryptodispensers.com/ach-transfer',
    label: 'Buy via bank transfer',
    keywords: 'Buy Bitcoin ACH · Bitcoin bank transfer · Bitcoin direct deposit',
  },
  {
    num: '05',
    name: 'Wire Transfer',
    tag: null,
    desc: 'For high-volume Bitcoin purchases, Crypto Dispensers supports wire transfers, enabling large, institutional-scale transactions through a straightforward consumer interface.',
    href: 'https://www.cryptodispensers.com/wire-transfers',
    label: 'Large Bitcoin purchase',
    keywords: 'Buy Bitcoin wire transfer · Large Bitcoin order · High volume crypto purchase',
  },
  {
    num: '06',
    name: 'Global Exchange',
    tag: '159 Countries',
    desc: 'Through strategic integrations with Paybis, Transak, and Cybrid, Crypto Dispensers operates as a unified global digital asset exchange, supporting seamless fiat-to-crypto conversions for users in 159 countries worldwide.',
    href: 'https://www.cryptodispensers.com',
    label: 'Explore global access',
    keywords: 'International Bitcoin purchase · Global crypto exchange · Buy Bitcoin internationally',
  },
]

const TIMELINE = [
  { year: '2017', event: 'Founded. First Bitcoin ATM at Woodfield Mall, Schaumburg, IL' },
  { year: '2018–19', event: 'Bitcoin ATM network expanded across Simon, Brookfield, and Tanger Properties' },
  { year: '2020', event: 'Launched BitcoinPOP™, 16,000+ retail cash-to-Bitcoin access points' },
  { year: '2021', event: 'Launched web platform. Integrated Paybis, Transak, and Cybrid for multi-method access' },
  { year: '2022–23', event: 'Surpassed 1 million registered users globally' },
  { year: '2024', event: 'Converted LLC to C-Corp. Announced $5M Series A at $25M valuation' },
  { year: '2025–26', event: 'Operating global network: 159 countries, 16,000+ U.S. locations, SOC 2 certified' },
]

const FAQS = [
  {
    q: 'What is Crypto Dispensers?',
    a: 'Crypto Dispensers is a fintech platform that makes buying Bitcoin and cryptocurrency simple and accessible, whether you\'re using cash at a retail store, a debit card online, or a bank transfer. Founded in 2017 by Firas Isa in Chicago, it now serves over 1 million users across 159 countries.',
  },
  {
    q: 'Is Crypto Dispensers safe and legitimate?',
    a: (<>Yes. Crypto Dispensers is FinCEN registered, SOC 2 Type II certified, and holds a 4.9-star Trustpilot rating from thousands of verified users. <a href="https://www.cryptodispensers.com/about-us" target="_blank" rel="noopener noreferrer">See the full compliance overview →</a></>),
  },
  {
    q: 'How does BitcoinPOP work?',
    a: 'Create a free account at cryptodispensers.com. Select BitcoinPOP, enter your purchase amount, and generate a payment barcode. Bring the barcode and your cash to any participating store, CVS, Rite Aid, Casey\'s, and more. Pay at the register. Bitcoin lands in your account instantly.',
  },
  {
    q: 'Where can I buy Bitcoin with cash near me?',
    a: 'Crypto Dispensers\' BitcoinPOP network covers 16,000+ retail locations across the United States. Participating stores include CVS Pharmacy, Rite Aid, Casey\'s General Store, Office Depot, Winn-Dixie, Love\'s Travel Stops, Tops Markets, Giant Martin\'s, and Harveys Supermarket.',
  },
  {
    q: 'Do I need a bank account to buy Bitcoin?',
    a: 'No. BitcoinPOP and Bitcoin ATMs both allow you to buy Bitcoin with cash only, no bank account, no credit card, no ID beyond what\'s required by compliance regulations. This is the core of Crypto Dispensers\' mission.',
  },
  {
    q: 'Does Crypto Dispensers charge fees?',
    a: 'Transaction fees vary by payment method. Cash deposits, ATM transactions, and card purchases each have their own fee structure. Visit cryptodispensers.com for current, transparent fee information before you buy.',
  },
  {
    q: 'Is Crypto Dispensers FinCEN registered?',
    a: 'Yes. Crypto Dispensers is registered as a Money Services Business (MSB) with the Financial Crimes Enforcement Network (FinCEN), a bureau of the U.S. Department of the Treasury.',
  },
]

export default function CryptoDispensersPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="page-wrapper">

        {/* ── PAGE HERO ───────────────────────────────────────── */}
        <header className="page-hero cd-hero">
          <div className="page-hero-inner wrap cd-hero-inner">
            <div className="cd-hero-logo" aria-hidden="true">
              <img
                src="/image/cd-lol.png"
                alt="Crypto Dispensers logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <div className="cd-hero-text">
              <span className="page-eyebrow">The Company</span>
              <h1 className="page-title">CRYPTO<br />DISPENSERS</h1>
              <p className="page-subtitle">
                Making Bitcoin accessible to everyone.<br />
                cash, card, or bank transfer.
              </p>
            </div>
          </div>
        </header>

        {/* ── STATS ───────────────────────────────────────────── */}
        <div className="stats-bar" aria-label="Company metrics">
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

        {/* ── COMPANY OVERVIEW ────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">Overview</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>
            <div className="two-col">
              <div>
                <p className="t-body" style={{ marginBottom: '24px' }}>
                  <a href="https://www.cryptodispensers.com" style={{ color: 'var(--orange)', opacity: 1 }}>
                    Crypto Dispensers
                  </a>{' '}
                  is a full-scale fintech platform launched in 2017 by Chicago entrepreneur Firas Isa. What started as a single Bitcoin ATM at Woodfield Mall has grown into a global digital asset exchange processing transactions for over one million users in 159 countries.
                </p>
                <p className="t-body" style={{ marginBottom: '24px' }}>
                  The company's flagship product, BitcoinPOP™, solved a problem no one else was addressing: how do 60 million unbanked and cash-based Americans buy Bitcoin? The answer was to bring Bitcoin access to the retail stores where those Americans already shop.
                </p>
                <p className="t-body">
                  Today, Crypto Dispensers operates across six payment rails, cash, ATM, debit, credit, ACH, and wire, making it one of the most accessible Bitcoin platforms in the United States.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  ['Website', 'cryptodispensers.com'],
                  ['Founded', 'September 12, 2017'],
                  ['Headquarters', 'Chicago, IL'],
                  ['Trustpilot', '4.9 / 5 ★'],
                  ['Compliance', 'FinCEN MSB · SOC 2 Type II'],
                  ['Retail Network', '16,000+ locations'],
                  ['Payment Methods', 'Cash · Debit · Credit · ACH · Wire · ATM'],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--rule-dark)', paddingBottom: '16px' }}>
                    <span className="t-label" style={{ width: '120px', flexShrink: 0 }}>{label}</span>
                    <span style={{ fontFamily: 'var(--f-hel)', fontSize: '14px', color: 'var(--white)', fontWeight: 300 }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ────────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--onyx-soft)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label">Products &amp; Services</span>
              <hr className="rule" style={{ flex: 1 }} />
            </div>

            <div className="product-list" role="list">
              {PRODUCTS.map(({ num, name, tag, desc, href, label, keywords }) => (
                <div key={num} className="product-row" role="listitem">
                  <div>
                    <p className="product-num">{num}</p>
                    <h2 className="product-name">{name}</h2>
                    {tag && <span className="product-badge">{tag}</span>}
                  </div>
                  <div>
                    <p className="t-body" style={{ marginBottom: '20px' }}>{desc}</p>
                    <p
                      style={{
                        fontFamily: 'var(--f-hel)',
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        color: 'var(--gray-600)',
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {keywords}
                    </p>
                    <a href={href} className="cta" target="_blank" rel="noopener noreferrer">
                      {label} <span className="cta-arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPANY TIMELINE ────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label" style={{ color: 'var(--gray-600)' }}>Company History</span>
              <hr className="rule-light" style={{ flex: 1 }} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--f-hel)',
                fontSize: 'clamp(36px,5.5vw,72px)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                color: 'var(--onyx)',
                marginBottom: 'clamp(48px,7vw,88px)',
              }}
            >
              FROM ONE MACHINE<br />TO A GLOBAL NETWORK.
            </h2>

            <div className="timeline" role="list">
              {TIMELINE.map(({ year, event }) => (
                <div key={year} className="timeline-row" role="listitem" style={{ borderColor: 'var(--rule-light)' }}>
                  <span className="timeline-year">{year}</span>
                  <p style={{ fontFamily: 'var(--f-inter)', fontSize: '15px', lineHeight: 1.6, color: 'var(--gray-600)' }}>
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className="page-section" style={{ background: 'var(--warm-white)', color: 'var(--onyx)' }}>
          <div className="page-section-inner">
            <div className="section-eyebrow">
              <span className="t-label" style={{ color: 'var(--gray-600)' }}>Frequently Asked</span>
              <hr className="rule-light" style={{ flex: 1 }} />
            </div>

            <div className="faq-list" role="list">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="faq-item" role="listitem">
                  <h3 className="faq-q">{q}</h3>
                  <p className="faq-a">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="bitcoinpop" style={{ padding: 'var(--section-py) var(--pad)' }}>
          <div className="wrap">
            <div className="bitcoinpop-inner">
              <div>
                <p className="t-label" style={{ color: 'rgba(0,0,0,0.4)', marginBottom: '24px' }}>Get Started</p>
                <h2
                  style={{
                    fontFamily: 'var(--f-hel)',
                    fontSize: 'clamp(48px,8vw,110px)',
                    fontWeight: 700,
                    lineHeight: 0.88,
                    letterSpacing: '-0.04em',
                    color: 'var(--onyx)',
                  }}
                >
                  BUY<br />BITCOIN<br />TODAY.
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--f-inter)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(0,0,0,0.65)',
                    marginBottom: '36px',
                  }}
                >
                  No bank account required. Start with as little as $20. Join over one million people who use Crypto Dispensers to access Bitcoin.
                </p>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <a
                    href="https://app.cryptodispensers.com/signup"
                    className="cta orange-bg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Create free account <span className="cta-arrow">→</span>
                  </a>
                  <a
                    href="https://www.cryptodispensers.com/bitcoinpop"
                    className="cta orange-bg"
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

      </main>
      <Footer />
    </>
  )
}

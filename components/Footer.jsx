const ExternalArrow = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px', flexShrink: 0 }}
  >
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="t-label" style={{ marginBottom: '24px' }}>Connect</p>
            <div className="footer-logo" aria-label="Firas Isa">
              FIRAS<br />ISA
            </div>
            <p className="footer-sub">
              Founder &amp; CEO, Crypto Dispensers<br />
              205 N Michigan Ave · Chicago, IL 60601
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:firasisa@cryptodispensers.com" className="footer-link">
              firasisa@cryptodispensers.com
            </a>
            <a
              href="https://www.linkedin.com/in/firas-isa/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn<ExternalArrow />
            </a>
            <a
              href="https://www.cryptodispensers.com"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crypto Dispensers<ExternalArrow />
            </a>
            <a
              href="https://app.cryptodispensers.com/signup"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--orange)' }}
            >
              Buy Bitcoin Now<ExternalArrow />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Firas Isa · firasisa.com</p>
          <nav aria-label="Footer navigation">
            <ul className="footer-nav" role="list">
              <li><a href="/about">About</a></li>
              <li><a href="/mission">Mission</a></li>
              <li><a href="/crypto-dispensers">Company</a></li>
              <li><a href="/writing">Writing</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

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
              LinkedIn ↗
            </a>
            <a
              href="https://www.cryptodispensers.com"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crypto Dispensers ↗
            </a>
            <a
              href="https://app.cryptodispensers.com/signup"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--orange)' }}
            >
              Buy Bitcoin Now ↗
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

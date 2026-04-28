export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="/" className="nav-logo" aria-label="Firas Isa — Home">FI</a>
      <ul className="nav-links" role="list">
        <li><a href="/about">About</a></li>
        <li><a href="/mission">Mission</a></li>
        <li><a href="/crypto-dispensers">Company</a></li>
        <li><a href="/writing">Writing</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <a
        href="https://app.cryptodispensers.com/signup"
        className="nav-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Bitcoin
      </a>
    </nav>
  )
}

'use client'

import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="/" className="nav-logo" aria-label="Firas Isa, Home">FIRAS ISA</a>
      
      <ul className={`nav-links ${isOpen ? 'is-open' : ''}`} role="list">
        <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/mission" onClick={() => setIsOpen(false)}>Mission</a></li>
        <li><a href="/crypto-dispensers" onClick={() => setIsOpen(false)}>Company</a></li>
        <li><a href="/writing" onClick={() => setIsOpen(false)}>Writing</a></li>
        <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li className="mobile-cta">
          <a
            href="https://app.cryptodispensers.com/signup"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Bitcoin
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <a
          href="https://app.cryptodispensers.com/signup"
          className="nav-cta desktop-only"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Bitcoin
        </a>

        <button 
          className={`nav-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}


'use client'

import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Firas Isa, Home">FIRAS ISA</a>

        <ul className="nav-links desktop-nav" role="list">
          <li><a href="/about">About</a></li>
          <li><a href="/mission">Mission</a></li>
          <li><a href="/crypto-dispensers">Company</a></li>
          <li><a href="/writing">Writing</a></li>
          <li><a href="/contact">Contact</a></li>
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

      {/* Drawer lives outside <nav> so backdrop-filter doesn't trap its fixed position */}
      <div className={`mobile-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="mobile-drawer-header">
          <span className="nav-logo">FIRAS ISA</span>
        </div>
        <ul role="list" className="mobile-drawer-links">
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/mission" onClick={() => setIsOpen(false)}>Mission</a></li>
          <li><a href="/crypto-dispensers" onClick={() => setIsOpen(false)}>Company</a></li>
          <li><a href="/writing" onClick={() => setIsOpen(false)}>Writing</a></li>
          <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-drawer-cta">
          <a
            href="https://app.cryptodispensers.com/signup"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Buy Bitcoin →
          </a>
        </div>
      </div>
    </>
  )
}

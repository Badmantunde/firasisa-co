'use client'

import { useEffect } from 'react'

export default function Animations() {
  useEffect(() => {
    const ac  = new AbortController()
    const sig = ac.signal

    /* ── 1. SCROLL REVEAL ─────────────────────────────────── */
    const revealEls = document.querySelectorAll(
      '.about-header, .about-grid, ' +
      '.company-top, .service-card, ' +
      '.bitcoinpop-inner, .mission-title, .mission-body, ' +
      '.writing-top, .post-card, ' +
      '.footer-top, .stat-item, .timeline-row, ' +
      '.product-row, .belief-item, .faq-item, ' +
      '.page-hero-inner, .pull-quote, .two-col, ' +
      '.post-card-featured, .article-hero-inner'
    )

    revealEls.forEach((el) => {
      el.classList.add('reveal')
      const parent = el.parentElement
      if (
        parent?.classList.contains('services-grid') ||
        parent?.classList.contains('posts-grid') ||
        parent?.classList.contains('stats-grid')
      ) {
        const idx = Array.from(parent.children).indexOf(el)
        el.style.transitionDelay = `${idx * 80}ms`
      }
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    revealEls.forEach((el) => revealObserver.observe(el))

    /* ── 2. STAT COUNTERS ─────────────────────────────────── */
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el  = entry.target
          const original = el.dataset.original || el.textContent
          el.dataset.original = original
          const num = parseFloat(original.replace(/[^0-9.]/g, ''))
          const suffix = original.replace(/[0-9.,\s]/g, '')
          if (isNaN(num)) { countObserver.unobserve(el); return }
          const isDecimal = original.includes('.')
          const decimals  = isDecimal
            ? (original.split('.')[1]?.replace(/[^0-9]/g, '').length || 1)
            : 0
          const start = performance.now()
          const tick = (now) => {
            const p     = Math.min((now - start) / 1600, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent =
              (isDecimal ? (num * eased).toFixed(decimals) : Math.floor(num * eased)) + suffix
            if (p < 1) requestAnimationFrame(tick)
            else el.textContent = original
          }
          requestAnimationFrame(tick)
          countObserver.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('.stat-num').forEach((el) => countObserver.observe(el))

    /* ── 4. NAVBAR SCROLL ─────────────────────────────────── */
    const nav        = document.querySelector('.nav')
    const heroScroll = document.querySelector('.hero-scroll')
    let lastY = 0
    window.addEventListener(
      'scroll',
      () => {
        const y = window.scrollY
        nav?.classList.toggle('nav--scrolled', y > 60)
        nav?.classList.toggle('nav--hidden', y > lastY && y > 200)
        heroScroll?.classList.toggle('hero-scroll--hidden', y > 100)
        lastY = y
      },
      { passive: true, signal: sig }
    )

    /* ── 5. TICKER PAUSE ON HOVER ─────────────────────────── */
    const tickerTrack = document.querySelector('.ticker-track')
    const ticker      = document.querySelector('.ticker')
    if (ticker && tickerTrack) {
      ticker.addEventListener('mouseenter', () => { tickerTrack.style.animationPlayState = 'paused'  }, { signal: sig })
      ticker.addEventListener('mouseleave', () => { tickerTrack.style.animationPlayState = 'running' }, { signal: sig })
    }

    /* ── 6. MAGNETIC CTA ──────────────────────────────────── */
    document.querySelectorAll('.nav-cta, .btn-submit').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect()
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.18}px)`
      }, { signal: sig })
      btn.addEventListener('mouseleave', () => { btn.style.transform = '' }, { signal: sig })
    })

    /* ── 7. RIPPLE ON CLICK ───────────────────────────────── */
    document.querySelectorAll('.nav-cta, .btn-submit, .cta').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const r      = btn.getBoundingClientRect()
        const ripple = document.createElement('span')
        ripple.className  = 'ripple-effect'
        ripple.style.left = `${e.clientX - r.left}px`
        ripple.style.top  = `${e.clientY - r.top}px`
        btn.appendChild(ripple)
        setTimeout(() => ripple.remove(), 600)
      }, { signal: sig })
    })

    /* ── 8. CURSOR GLOW ───────────────────────────────────── */
    const cursor = document.createElement('div')
    cursor.className = 'cursor-glow'
    document.body.appendChild(cursor)
    let cx = 0, cy = 0, rafId = null
    document.addEventListener('mousemove', (e) => {
      cx = e.clientX; cy = e.clientY
      if (!rafId) rafId = requestAnimationFrame(() => {
        cursor.style.left = `${cx}px`
        cursor.style.top  = `${cy}px`
        rafId = null
      })
    }, { signal: sig })
    document.querySelectorAll('a, button, .service-card, .post-card, .tab-btn').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-glow--hover'),    { signal: sig })
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-glow--hover'), { signal: sig })
    })

    /* ── 9. HERO BG PARALLAX ──────────────────────────────── */
    const heroBg = document.querySelector('.hero-bg')
    window.addEventListener('scroll', () => {
      if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.22}px)`
    }, { passive: true, signal: sig })

    /* ── 10. ABOUT QUOTE BORDER DRAW ─────────────────────── */
    const aboutQuote = document.querySelector('.about-quote')
    if (aboutQuote && !aboutQuote.classList.contains('about-quote--animate')) {
      aboutQuote.classList.add('about-quote--animate')
      const qObs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('about-quote--visible'); qObs.unobserve(e.target) }
        })
      }, { threshold: 0.3 })
      qObs.observe(aboutQuote)
    }

    /* ── CLEANUP ──────────────────────────────────────────── */
    return () => {
      ac.abort() // removes all { signal: sig } listeners at once
      revealObserver.disconnect()
      countObserver.disconnect()
      cursor.remove()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}

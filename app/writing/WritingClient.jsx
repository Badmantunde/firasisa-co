'use client'

import { useState } from 'react'
import { CATEGORIES } from '@/lib/articles'

export default function WritingClient({ articles }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? articles
    : articles.filter((a) => a.tag === active)

  const featured = articles[0]
  const rest = filtered.filter((a) => a.slug !== featured.slug)
  const showFeatured = active === 'All'

  return (
    <>
      {/* ── CATEGORY TABS ─────────────────────────────────── */}
      <div className="tabs-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`tab-btn${active === cat ? ' tab-btn--active' : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── FEATURED (All view only) ───────────────────────── */}
      {showFeatured && (
        <a href={`/writing/${featured.slug}`} className="post-card-featured">
          <span className="post-tag">{featured.tag}</span>
          <h2 className="post-title-lg">{featured.title}</h2>
          <p className="featured-excerpt">{featured.excerpt}</p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span className="post-meta">{featured.date}</span>
            <span className="post-meta">· {featured.readTime}</span>
            <span className="post-read-cta">Read →</span>
          </div>
        </a>
      )}

      {/* ── POSTS GRID ────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="posts-empty">
          <p>No articles in this category yet.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {(showFeatured ? rest : filtered).map(({ slug, tag, title, excerpt, date, readTime }) => (
            <a key={slug} href={`/writing/${slug}`} className="post-card">
              <span className="post-tag">{tag}</span>
              <h3 className="post-title">{title}</h3>
              <p className="post-excerpt">{excerpt}</p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <span className="post-meta">{date}</span>
                <span className="post-meta">· {readTime}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  )
}

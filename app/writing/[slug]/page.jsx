import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ARTICLES } from '@/lib/articles'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `https://firasisa.com/writing/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      authors: ['Firas Isa'],
    },
  }
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const { title, tag, date, readTime, Content } = article
  const related = ARTICLES.filter((a) => a.slug !== params.slug && a.tag === tag).slice(0, 2)
  const fallback = ARTICLES.filter((a) => a.slug !== params.slug && a.tag !== tag).slice(0, 2 - related.length)
  const relatedPosts = [...related, ...fallback].slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: {
      '@type': 'Person',
      name: 'Firas Isa',
      url: 'https://firasisa.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'firasisa.com',
      url: 'https://firasisa.com',
    },
    datePublished: date,
    description: article.metaDescription,
    mainEntityOfPage: `https://firasisa.com/writing/${params.slug}`,
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="page-wrapper">

        {/* ── ARTICLE HERO ──────────────────────────────────── */}
        <header className="article-hero">
          <div className="wrap">
            <div className="article-hero-inner">
              <a href="/writing" className="article-back">
                ← Writing
              </a>
              <div className="article-hero-meta">
                <span className="post-tag" style={{ fontSize: '10px' }}>{tag}</span>
                <span className="article-hero-date">{date} · {readTime} read</span>
              </div>
              <h1 className="article-hero-title">{title}</h1>
              <div className="article-byline">
                <div className="article-author-photo" aria-hidden="true">
                  <img src="/founder.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div>
                  <p className="article-author-name">Firas Isa</p>
                  <p className="article-author-title">Founder &amp; CEO, Crypto Dispensers</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── ARTICLE BODY ──────────────────────────────────── */}
        <article className="article-body-wrap">
          <div className="article-body">
            <Content />
          </div>

          {/* Share / CTA strip */}
          <div className="article-cta-strip">
            <div className="wrap" style={{ maxWidth: '760px' }}>
              <hr style={{ border: 'none', borderTop: '1px solid var(--rule-light)', marginBottom: '40px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                <div>
                  <p className="t-label" style={{ color: 'var(--gray-600)', marginBottom: '6px' }}>Written by</p>
                  <p style={{ fontFamily: 'var(--f-hel)', fontSize: '16px', fontWeight: 600, color: 'var(--onyx)' }}>Firas Isa</p>
                  <p style={{ fontFamily: 'var(--f-inter)', fontSize: '13px', color: 'var(--gray-600)' }}>Founder &amp; CEO, Crypto Dispensers</p>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="https://www.linkedin.com/in/firas-isa/" className="cta dark" target="_blank" rel="noopener noreferrer">
                    LinkedIn <span className="cta-arrow">→</span>
                  </a>
                  <a href="https://app.cryptodispensers.com/signup" className="cta dark" target="_blank" rel="noopener noreferrer">
                    Buy Bitcoin <span className="cta-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ── RELATED POSTS ─────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <section style={{ background: 'var(--warm-white)', padding: 'var(--section-py) var(--pad)' }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: 'clamp(36px,5vw,60px)' }}>
                <span className="t-label" style={{ color: 'var(--gray-600)' }}>More Writing</span>
                <hr className="rule-light" style={{ flex: 1 }} />
                <a href="/writing" className="cta dark" style={{ fontSize: '9px' }}>All articles <span className="cta-arrow">→</span></a>
              </div>
              <div className="posts-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {relatedPosts.map(({ slug, tag: t, title: ttl, excerpt, date: d, readTime: rt }) => (
                  <a key={slug} href={`/writing/${slug}`} className="post-card">
                    <span className="post-tag">{t}</span>
                    <h3 className="post-title">{ttl}</h3>
                    <p className="post-excerpt">{excerpt}</p>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                      <span className="post-meta">{d}</span>
                      <span className="post-meta">· {rt}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}

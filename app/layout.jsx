import './globals.css'
import Animations from '@/components/Animations'

export const metadata = {
  title: {
    default: 'Firas Isa | Founder of Crypto Dispensers',
    template: '%s | Firas Isa',
  },
  description:
    'Firas Isa is the founder and CEO of Crypto Dispensers — the platform that lets you buy Bitcoin with cash at 16,000+ retail stores. No bank account required. Serving 1M+ users in 159 countries.',
  keywords:
    'Firas Isa, Crypto Dispensers founder, buy Bitcoin with cash, CDReload, cash to Bitcoin, Bitcoin ATM alternative, Bitcoin entrepreneur Chicago, buy Bitcoin at CVS, Bitcoin without bank account',
  metadataBase: new URL('https://firasisa.com'),
  openGraph: {
    title: 'Firas Isa | Founder of Crypto Dispensers',
    description:
      'Firas Isa built Crypto Dispensers to make Bitcoin accessible to every American — cash accepted at 16,000+ stores nationwide. No bank account needed.',
    url: 'https://firasisa.com',
    siteName: 'Firas Isa',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/thumbnail.png',
        width: 3274,
        height: 1684,
        alt: 'Firas Isa — Founder & CEO, Crypto Dispensers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firas Isa | Founder of Crypto Dispensers',
    description:
      'Firas Isa built Crypto Dispensers to make Bitcoin accessible to every American — cash accepted at 16,000+ stores. No bank account needed.',
    images: ['/thumbnail.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://firasisa.com' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Firas Isa',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'Crypto Dispensers',
    url: 'https://www.cryptodispensers.com',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Saint Xavier University',
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL' },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '205 N Michigan Ave, Suite 810',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '60601',
  },
  url: 'https://firasisa.com',
  sameAs: [
    'https://www.linkedin.com/in/firas-isa/',
    'https://www.cryptodispensers.com/team/firas-isa',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Animations />
        {children}
      </body>
    </html>
  )
}

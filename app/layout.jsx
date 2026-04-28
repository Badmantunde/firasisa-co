import './globals.css'

export const metadata = {
  title: 'Firas Isa | Founder of Crypto Dispensers | Cash to Bitcoin Pioneer',
  description:
    'Firas Isa founded Crypto Dispensers in 2017 — making it simple to buy Bitcoin with cash at 16,000+ retail stores, no bank account required. Serving 1M+ users across 159 countries.',
  keywords:
    'Firas Isa, Crypto Dispensers founder, how to buy Bitcoin with cash, CDReload Bitcoin, cash to Bitcoin, Bitcoin entrepreneur Chicago, buy Bitcoin at CVS, Bitcoin without bank account',
  metadataBase: new URL('https://firasisa.com'),
  openGraph: {
    title: 'Firas Isa | Founder, Crypto Dispensers',
    description:
      'The entrepreneur who made Bitcoin accessible to everyday Americans — cash in, Bitcoin out, no bank account needed.',
    url: 'https://firasisa.com',
    siteName: 'Firas Isa',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firas Isa | Crypto Dispensers Founder',
    description:
      'Making Bitcoin simple and accessible — cash accepted at 16,000+ stores nationwide.',
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
      <body>{children}</body>
    </html>
  )
}

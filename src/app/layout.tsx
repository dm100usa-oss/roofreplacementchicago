import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Roof Repair Chicago NOW — Top 10 Vetted Companies',
  description: 'We researched roof repair companies in Chicago and selected the top 10 — with same-day availability, free estimates, and a warranty on all work.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Roof Repair Chicago NOW',
    description: 'Top 10 vetted roof repair companies in Chicago. Same-day availability, free estimates, warranty on all work.',
    url: 'https://roofrepairchicagonow.com',
    siteName: 'Roof Repair Chicago NOW',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://roofrepairchicagonow.com',
    languages: { 'es': 'https://roofrepairchicagonow.com/es' },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Roof Repair Chicago NOW',
  url: 'https://roofrepairchicagonow.com',
  email: 'roofrepairchicagonow@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
  },
  description: 'Independent referral service ranking the top roof repair companies in Chicago.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

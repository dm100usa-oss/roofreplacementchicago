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
  title: 'Roof Replacement Chicago — 6 Verified Contractors',
  description: 'Expert guide to roof replacement in Chicago. Verified contractors, real pricing, insurance help. Find the right company for your home.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Roof Replacement Chicago',
    description: 'Expert guide to roof replacement in Chicago. Verified contractors, real pricing, insurance help.',
    url: 'https://www.roofreplacementchicago.com',
    siteName: 'Roof Replacement Chicago',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es' },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Roof Replacement Chicago',
  url: 'https://www.roofreplacementchicago.com',
  email: 'roofreplacementchicago@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
  },
  description: 'Independent expert resource ranking verified roof replacement contractors in Chicago, IL.',
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

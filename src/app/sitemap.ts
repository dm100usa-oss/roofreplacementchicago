import { MetadataRoute } from 'next'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'

const BASE = 'https://www.roofreplacementchicago.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const neighborhoodUrls = neighborhoods.flatMap(n => [
    { url: `${BASE}/neighborhoods/${n.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/es/neighborhoods/${n.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ])

  const serviceUrls = services.flatMap(s => [
    { url: `${BASE}/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/es/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ])

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/es`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/insurance-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/es/insurance-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/roofing-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/roofing-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/how-we-rank`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...serviceUrls,
    ...neighborhoodUrls,
  ]
}

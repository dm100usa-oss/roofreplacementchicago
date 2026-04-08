import { MetadataRoute } from 'next'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import { articles } from '@/lib/articles'

const BASE = 'https://www.roofrepairchicagonow.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/roofing-guide`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/es/roofing-guide`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), priority: 0.5 },
    { url: `${BASE}/how-it-works`, lastModified: new Date(), priority: 0.5 },
    { url: `${BASE}/how-we-rank`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), priority: 0.4 },
    { url: `${BASE}/disclosure`, lastModified: new Date(), priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: new Date(), priority: 0.3 },
  ]

  const neighborhoodPages = neighborhoods.map(n => ({
    url: `${BASE}/neighborhoods/${n.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  const servicePages = services.map(s => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }))

  const articlePages = articles.map(a => ({
    url: `${BASE}/articles/${a.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }))

  return [...staticPages, ...neighborhoodPages, ...servicePages, ...articlePages]
}

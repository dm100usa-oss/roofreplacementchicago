import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import InternalLinks from '@/components/InternalLinks'
import styles from './article.module.css'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const a = articles.find(a => a.slug === params.slug)
  if (!a) return {}
  return {
    title: `${a.title} — Roof Replacement Chicago`,
    description: a.metaDescription,
    alternates: { canonical: `https://www.roofreplacementchicago.com/articles/${a.slug}` },
  }
}

export default function ArticlePage({ params }: Props) {
  const a = articles.find(a => a.slug === params.slug)
  if (!a) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    publisher: { '@type': 'Organization', name: 'Roof Replacement Chicago', url: 'https://www.roofreplacementchicago.com' },
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <a href="/">Home</a> › <span>Articles</span>
        </div>
        <h1>{a.title}</h1>
        {a.sections.map(section => (
          <div key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}
        <div className={styles.cta}>
          <p>Have questions about roof replacement in Chicago?</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
          <span className={styles.ctaNote}>Free consultation. No obligation.</span>
        </div>
      </div>
      <InternalLinks type="article" />
    </div>
  )
}

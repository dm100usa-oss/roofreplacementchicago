import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { articles } from '@/lib/articles'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import InternalLinks from '@/components/InternalLinks'
import styles from './article.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang => articles.map(a => ({ lang, slug: a.slug })))
}

export function generateMetadata({ params }: Props): Metadata {
  const a = articles.find(a => a.slug === params.slug)
  if (!a) return {}
  return {
    title: `${a.title} — Roof Replacement Chicago`,
    description: a.metaDescription,
    alternates: { canonical: `https://www.roofreplacementchicago.com/es/articles/${a.slug}` },
  }
}

export default function LangArticlePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const a = articles.find(a => a.slug === params.slug)
  if (!a) notFound()

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <a href={lang === 'es' ? '/es' : '/'}>Home</a> › <span>Articles</span>
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
      <InternalLinks type="article" lang={params.lang} />
    </div>
  )
}

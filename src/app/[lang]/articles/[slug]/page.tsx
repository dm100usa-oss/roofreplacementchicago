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
    title: `${a.titleEs} — Reemplazo de Techo Chicago`,
    description: a.metaDescriptionEs,
    alternates: {
      canonical: `https://www.roofreplacementchicago.com/es/articles/${a.slug}`,
      languages: { 'en': `https://www.roofreplacementchicago.com/articles/${a.slug}` },
    },
  }
}

export default function LangArticlePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const a = articles.find(a => a.slug === params.slug)
  if (!a) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.roofreplacementchicago.com/es' },
          { '@type': 'ListItem', position: 2, name: 'Artículos', item: 'https://www.roofreplacementchicago.com/es/articles' },
          { '@type': 'ListItem', position: 3, name: a.titleEs },
        ],
      },
      {
        '@type': 'Article',
        headline: a.titleEs,
        description: a.metaDescriptionEs,
        datePublished: '2026-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Roof Replacement Chicago', url: 'https://www.roofreplacementchicago.com' },
      },
    ],
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <a href="/es">Inicio</a> › <span>Artículos</span>
        </div>
        <h1>{a.titleEs}</h1>
        {a.sectionsEs.map(section => (
          <div key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}
        <div className={styles.cta}>
          <p>¿Tiene preguntas sobre el reemplazo de techo en Chicago?</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            LLAMAR AHORA{'  '}{MAIN_PHONE_DISPLAY}
          </a>
          <span className={styles.ctaNote}>Consulta gratuita. Sin obligación.</span>
        </div>
      </div>
      <InternalLinks type="article" lang={params.lang} />
    </div>
  )
}

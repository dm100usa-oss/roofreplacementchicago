import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { services } from '@/lib/services'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import InternalLinks from '@/components/InternalLinks'
import styles from '../../../roofing-guide/roofing-guide.module.css'
import nbStyles from '../../neighborhoods/neighborhood.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang => services.map(s => ({ lang, slug: s.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = services.find(s => s.slug === params.slug)
  if (!s) return {}
  return {
    title: `${s.titleEs}`,
    description: s.metaDescriptionEs,
    alternates: {
      canonical: `https://www.roofreplacementchicago.com/es/services/${s.slug}`,
      languages: { 'en': `https://www.roofreplacementchicago.com/services/${s.slug}` },
    },
  }
}

export default function LangServicePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const s = services.find(s => s.slug === params.slug)
  if (!s) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.roofreplacementchicago.com/es' },
          { '@type': 'ListItem', position: 2, name: s.nameEs, item: `https://www.roofreplacementchicago.com/es/services/${s.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faqEs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={nbStyles.breadcrumb}>
            <a href="/es">Inicio</a> / {s.nameEs}
          </div>
          <h1 className={styles.h1}>{s.titleEs}</h1>
          <p className={styles.intro}>{s.introEs}</p>
          <p className={styles.p}>{s.bodyTextEs}</p>
          {s.faqEs.length > 0 && (
            <>
              <h2 className={styles.h2}>Preguntas frecuentes</h2>
              {s.faqEs.map(item => (
                <details key={item.q} className={nbStyles.faqItem}>
                  <summary className={nbStyles.faqQ}>{item.q}</summary>
                  <div className={nbStyles.faqA}>{item.a}</div>
                </details>
              ))}
            </>
          )}
          <div className={styles.ctaBlock}>
            <p>¿Tiene preguntas sobre {s.nameEs.toLowerCase()} en Chicago?</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
              LLAMAR AHORA{'     '}{MAIN_PHONE_DISPLAY}
            </a>
            <p className={styles.ctaNote}>Consulta gratuita. Sin obligación.</p>
          </div>
        </div>
      </div>
      <InternalLinks type="service" lang={lang} />
    </>
  )
}

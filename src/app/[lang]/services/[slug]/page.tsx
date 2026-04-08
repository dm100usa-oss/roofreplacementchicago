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
    title: `${s.name} Chicago`,
    description: s.metaDescription,
    alternates: { canonical: `https://www.roofreplacementchicago.com/es/services/${s.slug}` },
  }
}

export default function LangServicePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const s = services.find(s => s.slug === params.slug)
  if (!s) notFound()
  const isEs = lang === 'es'

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={nbStyles.breadcrumb}>
            <a href={isEs ? '/es' : '/'}>Home</a> / {s.name}
          </div>
          <h1 className={styles.h1}>{s.title}</h1>
          <p className={styles.intro}>{s.intro}</p>
          <p className={styles.p}>{s.bodyText}</p>
          {s.faq.length > 0 && (
            <>
              <h2 className={styles.h2}>{isEs ? 'Preguntas frecuentes' : 'Common questions'}</h2>
              {s.faq.map(item => (
                <details key={item.q} className={nbStyles.faqItem}>
                  <summary className={nbStyles.faqQ}>{item.q}</summary>
                  <div className={nbStyles.faqA}>{item.a}</div>
                </details>
              ))}
            </>
          )}
          <div className={styles.ctaBlock}>
            <p>{isEs ? `Tiene preguntas sobre ${s.name.toLowerCase()} en Chicago?` : `Have questions about ${s.name.toLowerCase()} in Chicago?`}</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
              {isEs ? 'LLAMAR AHORA' : 'CALL NOW'} — {MAIN_PHONE_DISPLAY}
            </a>
            <p className={styles.ctaNote}>{isEs ? 'Consulta gratuita. Sin obligación.' : 'Free consultation. No obligation.'}</p>
          </div>
        </div>
      </div>
      <InternalLinks type="service" lang={lang} />
    </>
  )
}

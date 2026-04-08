import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { neighborhoods } from '@/lib/neighborhoods'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../../neighborhoods/neighborhood.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang => neighborhoods.map(n => ({ lang, slug: n.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) return {}
  return {
    title: `Reemplazo de Techo en ${n.name} Chicago`,
    description: n.metaDescription,
    alternates: { canonical: `https://www.roofreplacementchicago.com/es/neighborhoods/${n.slug}` },
  }
}

export default function LangNeighborhoodPage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) notFound()
  const isEs = lang === 'es'

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.breadcrumb}>
            <a href={isEs ? '/es' : '/'}>Home</a> / {n.name}
          </div>
          <h1 className={styles.h1}>{isEs ? `Reemplazo de Techo en ${n.name} Chicago` : n.title}</h1>
          <p className={styles.intro}>{isEs ? n.introEs : n.intro}</p>
          <div className={styles.callBlock}>
            <p>{isEs ? `Hable con un asesor sobre su proyecto en ${n.name}. Gratis, sin obligación.` : `Speak with a roofing advisor about your ${n.name} project. Free, no obligation.`}</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
              {isEs ? 'LLAMAR AHORA' : 'CALL NOW'} — {MAIN_PHONE_DISPLAY}
            </a>
          </div>
          <div className={styles.areaText}>{isEs ? n.areaTextEs : n.areaText}</div>
          <div className={styles.companiesSection}>
            <div className={styles.companiesLabel}>
              {isEs ? `6 contratistas verificados en ${n.name}` : `6 verified contractors serving ${n.name}`}
            </div>
            {companies.map((company, i) => (
              <CompanyCard key={company.id} company={company} isFirst={i === 0} lang={lang} />
            ))}
          </div>
          {n.faq.length > 0 && (
            <div className={styles.faqSection}>
              <h2 className={styles.faqTitle}>
                {isEs ? `Preguntas sobre reemplazo de techo en ${n.name}` : `Questions about roof replacement in ${n.name}`}
              </h2>
              {(isEs ? n.faqEs : n.faq).map(item => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>{item.a}</div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
      <InternalLinks type="neighborhood" lang={lang} />
    </>
  )
}

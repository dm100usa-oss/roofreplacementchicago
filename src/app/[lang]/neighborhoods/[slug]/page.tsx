import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { neighborhoods } from '@/lib/neighborhoods'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../neighborhood.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang =>
    neighborhoods.map(n => ({ lang, slug: n.slug }))
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) return {}
  const isEs = params.lang === 'es'
  const titleEs = `${n.name} — Reparación de Techos Chicago NOW`
  return {
    title: isEs ? titleEs : `${n.title} — Roof Repair Chicago NOW`,
    description: n.metaDescription,
    alternates: {
      canonical: isEs
        ? `https://www.roofrepairchicagonow.com/es/neighborhoods/${n.slug}`
        : `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}`,
      languages: {
        'en': `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}`,
        'es': `https://www.roofrepairchicagonow.com/es/neighborhoods/${n.slug}`,
      },
    },
  }
}

export default function LangNeighborhoodPage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()

  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) notFound()

  const isEs = lang === 'es'
  const prefix = isEs ? '/es' : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: n.title,
        url: `https://www.roofrepairchicagonow.com${prefix}/neighborhoods/${n.slug}`,
        description: n.metaDescription,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isEs ? 'Inicio' : 'Home', item: `https://www.roofrepairchicagonow.com${prefix}` },
          { '@type': 'ListItem', position: 2, name: n.name, item: `https://www.roofrepairchicagonow.com${prefix}/neighborhoods/${n.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: n.faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href={`${prefix}/`}>{isEs ? 'Inicio' : 'Home'}</a> ›{' '}
            <a href={`${prefix}/neighborhoods`}>{isEs ? 'Barrios' : 'Neighborhoods'}</a> ›{' '}
            {n.name}
          </div>
          <h1>{isEs ? `Reparación de Techos en ${n.name} Chicago` : n.title}</h1>
          <p>{isEs ? n.introEs : n.intro}</p>
          <p className={styles.heroUrgency}>If you need help fast, call now and we&apos;ll connect you with a roofer in {n.name} right away.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            {isEs ? 'LLAMAR AHORA' : 'CALL NOW'} — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.sectionLabel}>
            {isEs ? '10 empresas clasificadas' : '10 companies ranked'}
          </div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} lang={lang} />
          ))}
        </div>
      </section>

      <section className={styles.areaInfo}>
        <div className={styles.areaInner}>
          <h2>{isEs ? `Techado en ${n.name}` : `About roofing in ${n.name}`}</h2>
          <p>{isEs ? n.areaTextEs : n.areaText}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>
            {isEs ? `Preguntas sobre reparación de techos en ${n.name}` : `Questions about roof repair in ${n.name}`}
          </div>
          {(isEs ? n.faqEs : n.faq).map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <InternalLinks type="neighborhood" currentSlug={n.slug} lang={lang} />

      <section className={styles.ctaBottom}>
        <div className={styles.ctaInner}>
          <h2>
            {isEs ? `¿Necesita un techero en ${n.name} hoy?` : `Need a roofer in ${n.name} today?`}
          </h2>
          <p>
            {isEs
              ? 'Llame a nuestro centro de despacho — lo conectaremos con un techero disponible rápidamente. Gratis, sin compromiso.'
              : "Call our dispatch center — we'll connect you with an available roofer fast. Free, no obligation."}
          </p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallDark}>
            {isEs ? 'LLAMAR AHORA' : 'CALL NOW'} — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}

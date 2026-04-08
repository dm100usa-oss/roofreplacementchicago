import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { neighborhoods } from '@/lib/neighborhoods'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../neighborhood.module.css'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return neighborhoods.map(n => ({ slug: n.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) return {}
  return {
    title: `${n.title} — Roof Repair Chicago NOW`,
    description: n.metaDescription,
    alternates: {
      canonical: `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}`,
      languages: {
        'en': `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}`,
        'es': `https://www.roofrepairchicagonow.com/es/neighborhoods/${n.slug}`,
      },
    },
  }
}

export default function NeighborhoodPage({ params }: Props) {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: n.title,
        url: `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}`,
        description: n.metaDescription,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.roofrepairchicagonow.com' },
          { '@type': 'ListItem', position: 2, name: n.name, item: `https://www.roofrepairchicagonow.com/neighborhoods/${n.slug}` },
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
            <a href="/">Home</a> › <a href="/neighborhoods">Neighborhoods</a> › {n.name}
          </div>
          <h1>{n.title}</h1>
          <p>{n.intro}</p>
          <p className={styles.heroUrgency}>If you need help fast, call now and we&apos;ll connect you with a roofer in {n.name} right away.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.sectionLabel}>10 companies ranked</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className={styles.areaInfo}>
        <div className={styles.areaInner}>
          <h2>About roofing in {n.name}</h2>
          <p>{n.areaText}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Questions about roof repair in {n.name}</div>
          {n.faq.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <InternalLinks type="neighborhood" currentSlug={n.slug} />

      <section className={styles.ctaBottom}>
        <div className={styles.ctaInner}>
          <h2>Need a roofer in {n.name} today?</h2>
          <p>Call our dispatch center — we'll connect you with an available roofer fast. Free, no obligation.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallDark}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}

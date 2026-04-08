import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../../neighborhoods/neighborhood.module.css'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const s = services.find(s => s.slug === params.slug)
  if (!s) return {}
  return {
    title: `${s.title} — Roof Repair Chicago NOW`,
    description: s.metaDescription,
    alternates: {
      canonical: `https://www.roofrepairchicagonow.com/services/${s.slug}`,
      languages: {
        'en': `https://www.roofrepairchicagonow.com/services/${s.slug}`,
        'es': `https://www.roofrepairchicagonow.com/es/services/${s.slug}`,
      },
    },
  }
}

export default function ServicePage({ params }: Props) {
  const s = services.find(s => s.slug === params.slug)
  if (!s) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: s.title,
        url: `https://www.roofrepairchicagonow.com/services/${s.slug}`,
        description: s.metaDescription,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.roofrepairchicagonow.com' },
          { '@type': 'ListItem', position: 2, name: s.name, item: `https://www.roofrepairchicagonow.com/services/${s.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faq.map(f => ({
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
            <a href="/">Home</a> › {s.name}
          </div>
          <h1>{s.title}</h1>
          <p>{s.intro}</p>
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
          <h2>About {s.name} in Chicago</h2>
          <p>{s.bodyText}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Questions about {s.name} in Chicago</div>
          {s.faq.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <InternalLinks type="service" currentSlug={s.slug} />

      <section className={styles.ctaBottom}>
        <div className={styles.ctaInner}>
          <h2>Need {s.name.toLowerCase()} in Chicago today?</h2>
          <p>Call our dispatch center — we'll connect you with an available roofer fast. Free, no obligation.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallDark}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { neighborhoods } from '@/lib/neighborhoods'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../neighborhood.module.css'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return neighborhoods.map(n => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = neighborhoods.find(x => x.slug === params.slug)
  if (!n) return {}
  return {
    title: n.title,
    description: n.metaDescription,
    alternates: {
      canonical: `https://www.roofreplacementchicago.com/neighborhoods/${n.slug}`,
      languages: { 'es': `https://www.roofreplacementchicago.com/es/neighborhoods/${n.slug}` },
    },
  }
}

export default function NeighborhoodPage({ params }: Props) {
  const n = neighborhoods.find(x => x.slug === params.slug)
  if (!n) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.roofreplacementchicago.com' },
          { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://www.roofreplacementchicago.com/neighborhoods' },
          { '@type': 'ListItem', position: 3, name: n.name, item: `https://www.roofreplacementchicago.com/neighborhoods/${n.slug}` },
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a> / <a href="/#companies">Contractors</a> / {n.name}
          </div>
          <h1 className={styles.h1}>{n.title}</h1>
          <p className={styles.intro}>{n.intro}</p>

          <div className={styles.callBlock}>
            <p>Speak with a roofing advisor about your {n.name} project. Free, no obligation.</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
              CALL NOW{'     '}{MAIN_PHONE_DISPLAY}
            </a>
          </div>

          <div className={styles.areaText}>{n.areaText}</div>

          <div className={styles.companiesSection}>
            <div className={styles.companiesLabel}>6 verified contractors serving {n.name}</div>
            {companies.map((company, i) => (
              <CompanyCard key={company.id} company={company} isFirst={i === 0} />
            ))}
          </div>

          {n.faq.length > 0 && (
            <div className={styles.faqSection}>
              <h2 className={styles.faqTitle}>Questions about roof replacement in {n.name}</h2>
              {n.faq.map(item => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>{item.a}</div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
      <InternalLinks type="neighborhood" />
    </>
  )
}

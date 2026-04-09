import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import InternalLinks from '@/components/InternalLinks'
import styles from '../../roofing-guide/roofing-guide.module.css'
import nbStyles from '../../neighborhoods/neighborhood.module.css'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = services.find(x => x.slug === params.slug)
  if (!s) return {}
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: {
      canonical: `https://www.roofreplacementchicago.com/services/${s.slug}`,
      languages: { 'es': `https://www.roofreplacementchicago.com/es/services/${s.slug}` },
    },
  }
}

export default function ServicePage({ params }: Props) {
  const s = services.find(x => x.slug === params.slug)
  if (!s) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.roofreplacementchicago.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.roofreplacementchicago.com/services' },
          { '@type': 'ListItem', position: 3, name: s.name, item: `https://www.roofreplacementchicago.com/services/${s.slug}` },
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={nbStyles.breadcrumb}>
            <a href="/">Home</a> / <a href="/#companies">Services</a> / {s.name}
          </div>
          <h1 className={styles.h1}>{s.title}</h1>
          <p className={styles.intro}>{s.intro}</p>
          <p className={styles.p}>{s.bodyText}</p>

          {s.faq.length > 0 && (
            <>
              <h2 className={styles.h2}>Common questions</h2>
              {s.faq.map(item => (
                <details key={item.q} className={nbStyles.faqItem}>
                  <summary className={nbStyles.faqQ}>{item.q}</summary>
                  <div className={nbStyles.faqA}>{item.a}</div>
                </details>
              ))}
            </>
          )}

          <div className={styles.ctaBlock}>
            <p>Have questions about {s.name.toLowerCase()} in Chicago? Our advisors can help.</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
              CALL NOW{'  '}{MAIN_PHONE_DISPLAY}
            </a>
            <p className={styles.ctaNote}>Free consultation. No obligation. Available 7 days a week.</p>
          </div>
        </div>
      </div>
      <InternalLinks type="service" />
    </>
  )
}

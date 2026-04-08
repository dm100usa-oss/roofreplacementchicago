import type { Metadata } from 'next'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import DateDisplay from '@/components/DateDisplay'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Roof Replacement Chicago — 6 Verified Contractors (2026)',
  description: 'Replacing your roof in Chicago? Get real cost estimates, insurance guidance, and verified licensed contractors. Expert resource for Chicago homeowners.',
  alternates: { canonical: 'https://www.roofreplacementchicago.com' },
}

const faqItems = [
  {
    q: 'How much does roof replacement cost in Chicago in 2026?',
    a: 'The average roof replacement in Chicago costs $8,000 to $25,000. Asphalt shingles run $8,000 to $14,000 for a typical 2,000 sq ft home. Metal roofing costs $15,000 to $25,000. Flat TPO or EPDM roofs average $10,000 to $20,000. The final price depends on roof size, pitch, material, and whether old layers need to be stripped.',
  },
  {
    q: 'When do you need a full replacement instead of a repair?',
    a: 'Replace your roof when it is 20 or more years old, when more than 30 percent of shingles are damaged, when you see daylight through the attic boards, or when repairs would cost more than 40 percent of a new roof. A single isolated leak on a roof under 10 years old is typically a repair. When in doubt, get a free inspection before deciding.',
  },
  {
    q: 'How long does roof replacement take in Chicago?',
    a: 'Most residential roofs in Chicago are replaced in one to two days. A 2,000 sq ft asphalt shingle roof typically takes one full day. Larger homes, complex roof shapes, or metal roofing may take two to three days. Weather can affect scheduling, especially November through March.',
  },
  {
    q: 'Will insurance pay for my roof replacement in Chicago?',
    a: 'Homeowner insurance covers roof replacement when damage is caused by a storm, hail, or wind. It does not cover normal wear and aging. Document damage within 48 hours of a storm, get a written assessment from a licensed contractor, and request that the contractor be present during the adjuster visit. Illinois homeowners typically have 12 to 24 months to file a hail damage claim.',
  },
  {
    q: 'Do I need a permit to replace my roof in Chicago?',
    a: 'Yes. The City of Chicago requires a building permit for full roof replacement. A reputable contractor pulls this permit as part of the job. It should be included in your contract at no extra charge. Skipping the permit creates problems when selling the home or filing an insurance claim.',
  },
  {
    q: 'What roofing material is best for Chicago winters?',
    a: 'Architectural asphalt shingles are the most practical choice for most Chicago homes. They handle freeze-thaw cycles and wind well and fit most budgets. Metal roofing lasts 40 to 70 years and is ideal if you plan to stay in the home long term. For flat roofs, TPO membrane is the code-preferred material in Chicago. Avoid basic 3-tab shingles as they rarely last long in the Chicago climate.',
  },
  {
    q: 'How do I verify a roofing contractor is licensed in Illinois?',
    a: 'Search the contractor name or license number on the IDFPR website at idfpr.com before signing any contract. Illinois issues two license types: Limited for residential buildings up to 8 units and Unlimited for all building types. Also confirm General Liability insurance of at least $250,000 and Workers Compensation coverage.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Roof Replacement Chicago',
        url: 'https://www.roofreplacementchicago.com',
        description: 'Expert guide to roof replacement in Chicago with verified contractors, real pricing, and insurance guidance.',
      },
      {
        '@type': 'ItemList',
        name: 'Top Roof Replacement Companies in Chicago',
        numberOfItems: companies.length,
        itemListElement: companies.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'LocalBusiness',
            name: c.name,
            telephone: c.phone,
            url: c.website,
            address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: c.googleRating, reviewCount: c.googleReviews },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
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

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1>Roof Replacement in Chicago: Expert Answers and Verified Contractors</h1>
              <p className={styles.heroSubtitle}>Everything a Chicago homeowner needs before replacing their roof: answers to the most important questions and our verified contractor ranking for 2026.</p>
              <p className={styles.heroExtra}>This resource was created to help you choose the most convenient and reliable option for your roof replacement.</p>
              <p className={styles.heroExtra}>Average project cost and timeline in Chicago today.</p>
              <p className={styles.heroCallout}>Need a free consultation right now? Call us. We'll help.</p>
            </div>
            <div className={styles.heroRight}>
              <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
                CALL NOW — {MAIN_PHONE_DISPLAY}
              </a>
              <div className={styles.btnCallNote}>
                <span className={styles.btnCallNoteItem}>No obligation</span>
                <span className={styles.btnCallNoteItem}>Real answers</span>
                <span className={styles.btnCallNoteItem}>Available 7 days a week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT SNAPSHOT */}
      <div className={styles.expertStrip}>
        <div className={styles.expertInner}>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}><DateDisplay /></div>
            <div className={styles.expertLabel}>Updated</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>1–3 days</div>
            <div className={styles.expertLabel}>Average project duration</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>$8K–$25K</div>
            <div className={styles.expertLabel}>Typical cost in Chicago</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>Permit</div>
            <div className={styles.expertLabel}>Required by City of Chicago</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>6</div>
            <div className={styles.expertLabel}>Verified contractors</div>
          </div>
        </div>
      </div>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>Why this resource</div>
          <div className={styles.whyTitle}>We research so you can decide with confidence.</div>
          <div className={styles.whyGrid}>
            {[
              { title: 'Verified licensing', text: 'Every contractor on our list holds an active Illinois roofing license. We check IDFPR records before any company makes the list.' },
              { title: 'Real Chicago expertise', text: 'Chicago has specific permit rules, climate demands, and flat roof requirements. We only include contractors who know this market.' },
              { title: 'Insurance claim experience', text: 'Storm damage and insurance claims are common in Chicago. We prioritize contractors with documented experience navigating this process.' },
              { title: 'No pressure approach', text: 'Roof replacement is a major investment. Our resource exists to inform, not to pressure. Call when you are ready.' },
            ].map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section id="companies" className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>6 verified contractors</div>
          <div className={styles.cardsGrid}>
            {companies.map((company, i) => (
              <CompanyCard key={company.id} company={company} isFirst={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Not sure where to start?</h2>
          <p>One call connects you with a roofing advisor who can answer your questions about cost, materials, permits, and insurance. Free, no commitment.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallCta}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>No obligation. Real answers. 7 days a week.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Chicago roof replacement — common questions</div>
          <p className={styles.faqSub}>Answers based on current Chicago market data, city permit requirements, and Illinois insurance regulations.</p>
          {faqItems.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* HOW WE RANK */}
      <section className={styles.howRank}>
        <div className={styles.howRankInner}>
          <div className={styles.sectionLabel}>How we rank</div>
          <div className={styles.whyTitle}>Our selection criteria</div>
          <p className={styles.howRankText}>
            We evaluate each contractor on active Illinois IDFPR license, Google rating and review volume, BBB accreditation, years in business, workmanship warranty length, and documented experience with Chicago building permits and insurance claims. Only companies that meet all criteria appear on our list.
          </p>
        </div>
      </section>

      <InternalLinks type="home" />
    </>
  )
}

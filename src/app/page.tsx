import type { Metadata } from 'next'
import Image from 'next/image'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { articles } from '@/lib/articles'
import { services } from '@/lib/services'
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
            <div className={styles.heroTextCol}>
              <div className={styles.heroLeft}>
                <h1>Roof Replacement in Chicago: Expert Answers and Verified Contractors</h1>
                <p className={styles.heroSubtitle}>Get the Best Price on Your New Roof Without Sacrificing Quality</p>
              </div>
              <div className={styles.heroRight}>
                <p className={styles.heroBody}>Start with a free expert consultation. Compare your options and take your time to make a confident, well-informed decision</p>
                <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
                  CALL NOW — {MAIN_PHONE_DISPLAY}
                </a>
                <div className={styles.btnCallNote}>
                  <span className={styles.btnCallNoteItem}>No pressure</span>
                  <span className={styles.btnCallNoteItem}>No obligation</span>
                  <span className={styles.btnCallNoteItem}>Just expert advice</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/foto1.png"
                alt="Chicago roofing contractor at work"
                width={700}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT SNAPSHOT */}
      <p className={styles.stripLabel}>Average project cost and timeline in Chicago today</p>
      <div className={styles.expertStrip}>
        <div className={styles.expertInner}>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}><DateDisplay /></div>
            <div className={styles.expertLabel}>Updated</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>1-3 days</div>
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
      <p className={styles.belowStrip}>This resource was created to help you choose the most convenient and reliable option for your roof replacement</p>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>Why this resource</div>
          <div className={styles.whyTitle}>We research so you can decide with confidence.</div>
          <div className={styles.whyGrid}>
            {[
              { title: 'Verified licensing', text: 'Every contractor on our list holds an active Illinois roofing license. We check IDFPR records before any company makes the list.', img: '/foto2.png' },
              { title: 'Real Chicago expertise', text: 'Chicago has specific permit rules, climate demands, and flat roof requirements. We only include contractors who know this market.', img: '/foto3.png' },
              { title: 'Insurance claim experience', text: 'Storm damage and insurance claims are common in Chicago. We prioritize contractors with documented experience navigating this process.', img: '/foto4.png' },
              { title: 'No pressure approach', text: 'Roof replacement is a major investment. Our resource exists to inform, not to pressure. Call when you are ready.', img: '/foto5.png' },
            ].map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyCardImgWrap}>
                  <Image src={item.img} alt={item.title} width={600} height={220} className={styles.whyCardImg} />
                </div>
                <div className={styles.whyCardBody}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
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

      {/* COST */}
      <section className={styles.cost}>
        <div className={styles.costInner}>
          <div className={styles.sectionLabel}>2026 pricing</div>
          <div className={styles.whyTitle}>How much does roof replacement cost in Chicago?</div>
          <p className={styles.costIntro}>Prices depend on roof size, pitch, and material. Here are typical ranges for Chicago homes in 2026.</p>
          <div className={styles.costGrid}>
            {[
              { type: 'Asphalt Shingle', range: '$8,000 – $16,000', note: 'Most common. Suits most Chicago single-family homes and bungalows.' },
              { type: 'Flat Roof (TPO / EPDM)', range: '$8,000 – $20,000', note: 'Standard for two-flats, three-flats, and courtyard buildings.' },
              { type: 'Metal Roof', range: '$15,000 – $30,000', note: 'Lasts 40–70 years. Best long-term value for owners staying long term.' },
              { type: 'Storm Damage', range: 'Often covered by insurance', note: 'Document damage within 48 hours. Illinois claim window: 12–24 months.' },
            ].map((item) => (
              <div key={item.type} className={styles.costCard}>
                <div className={styles.costType}>{item.type}</div>
                <div className={styles.costRange}>{item.range}</div>
                <div className={styles.costNote}>{item.note}</div>
              </div>
            ))}
          </div>
          <p className={styles.costSub}>All estimates include labor, materials, permits, and disposal. <a href="/roofing-guide" className={styles.costLink}>Full cost breakdown →</a></p>
        </div>
      </section>

      {/* INSURANCE */}
      <section className={styles.insSection}>
        <div className={styles.insInner}>
          <div className={styles.sectionLabel}>Insurance coverage</div>
          <div className={styles.whyTitle}>Will your insurance cover the replacement?</div>
          <div className={styles.insGrid}>
            {[
              { title: 'What is covered', text: 'Storm damage, hail, wind, and fallen tree limbs. If a weather event caused the damage, your homeowner policy likely covers full replacement.' },
              { title: 'What is not covered', text: "Normal wear, aging, and maintenance neglect. Insurance covers damage from events — not the natural end of a roof's life." },
              { title: 'Illinois claim window', text: 'Illinois homeowners have 12 to 24 months from the storm date to file a hail damage claim. Document everything immediately after the storm.' },
              { title: 'How to maximize your claim', text: 'Get a written contractor assessment before calling your insurer. Request that your contractor be present during the adjuster visit.' },
            ].map((item) => (
              <div key={item.title} className={styles.insCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a href="/insurance-guide" className={styles.insLink}>Full insurance guide →</a>
        </div>
      </section>

      {/* ARTICLES */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesInner}>
          <div className={styles.sectionLabel}>Guides for homeowners</div>
          <div className={styles.whyTitle}>Know before you decide</div>
          <div className={styles.articlesGrid}>
            {articles.slice(0, 4).map((article) => (
              <a key={article.slug} href={`/articles/${article.slug}`} className={styles.articleCard}>
                <div className={styles.articleTitle}>{article.title}</div>
                <div className={styles.articleExcerpt}>{article.sections[0].text.slice(0, 110)}…</div>
                <span className={styles.articleMore}>Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Not sure where to start?</h2>
          <p>One call connects you with a roofing advisor who can answer your questions about cost, materials, permits, and insurance. Free, no commitment</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallCta}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>No obligation. Real answers. 7 days a week</p>
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

      {/* MATERIALS */}
      <section className={styles.materials}>
        <div className={styles.materialsInner}>
          <div className={styles.sectionLabel}>Replacement types</div>
          <div className={styles.whyTitle}>Find the right solution for your home</div>
          <div className={styles.materialsGrid}>
            {services.slice(0, 4).map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`} className={styles.materialCard}>
                <div className={styles.materialName}>{service.name}</div>
                <div className={styles.materialIntro}>{service.intro.slice(0, 120)}…</div>
                <span className={styles.materialMore}>Learn more →</span>
              </a>
            ))}
          </div>
          <a href="/services/asphalt-shingle-replacement" className={styles.materialsAll}>See all replacement types →</a>
        </div>
      </section>

      <InternalLinks type="home" />
    </>
  )
}

import type { Metadata } from 'next'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Best Roofing Contractors in Chicago (2026) | Roof Repair Chicago NOW',
  description: 'Find the best roofing contractors in Chicago — verified licensing, same-day service, free estimates, and warranty on all work. Top 10 ranked by our team.',
  alternates: { canonical: 'https://www.roofrepairchicagonow.com' },
}

const faqItems = [
  {
    q: 'How quickly can a roofer come to my home in Chicago?',
    a: 'Most companies on our list offer same-day service for emergency repairs. After you call, a roofer can typically arrive within 2–4 hours depending on your location in Chicago.',
  },
  {
    q: 'How much does roof repair cost in Chicago?',
    a: 'Minor repairs start around $200–$350. Storm damage or full section replacement typically runs $400–$1,500+. Prices vary by project scope and materials — all companies on our list offer free on-site estimates before any work begins.',
  },
  {
    q: 'Are these roofing companies licensed and insured in Illinois?',
    a: 'Yes. We verify licensing and insurance for every company before ranking them. Only fully licensed and insured roofers make our list.',
  },
  {
    q: 'How do you rank roofing companies?',
    a: 'We evaluate each company on licensing, Google reviews, response time, warranty terms, and pricing transparency. Our expert score reflects all these factors combined. See our full methodology on the How We Rank page.',
  },
  {
    q: 'Is this service free to use?',
    a: 'Yes, completely free for homeowners. We may receive compensation from companies for referrals, but this does not affect our rankings. Full details in our Disclosure.',
  },
]

const guideFaqItems = [
  { section: 'Diagnosis', items: [
    { q: 'Do I need a full roof replacement or just a repair?', a: 'If your roof has 3 or more problem areas, is older than 15 years, or has lost granules across more than 30% of its surface — replacement is typically the right call. A single isolated leak on a roof under 10 years old is usually a repair. When in doubt, schedule a free inspection before deciding — patching a roof that needs full replacement will cost you more in the long run.' },
    { q: 'How long does a roof last in Chicago?', a: 'Asphalt shingles last 15–20 years in Chicago — shorter than the manufacturer\'s rated lifespan because extreme temperature swings between harsh winters and hot summers accelerate material fatigue. Metal roofing typically lasts 40–70 years. Flat TPO/EPDM systems generally last 20–30 years with proper maintenance. If your asphalt roof is over 15 years old, budget for replacement within the next few years even if it looks intact from the street.' },
  ]},
  { section: 'Cost', items: [
    { q: 'How much does roof replacement cost in Chicago in 2026?', a: 'The average total for a full roof replacement in Chicago in 2026 is around $18,900, with a typical range of $8,300–$29,400. Architectural asphalt shingles run $9.50–$13.00 per sq ft installed; metal roofing $15.00–$22.00; TPO or EPDM for flat roofs $10.00–$25.00. These are estimates — actual cost depends on your specific project. Always request a free on-site estimate before committing.' },
    { q: 'What factors drive the final roofing price up or down?', a: 'Four things move the price most: number of existing shingle layers, roof pitch, decking damage, and material class. Illinois code allows a maximum of 2 shingle layers — if you already have two, a full strip to bare decking is required, adding $1,000–$2,500. Steep pitches and multiple chimneys raise labor costs 20–30%. Rotted decking boards run $80–$120 per sheet to replace. Upgrading to Class 4 impact-resistant shingles costs more upfront but often pays back through lower insurance premiums.' },
  ]},
  { section: 'Materials', items: [
    { q: 'What is the best roofing material for Chicago\'s climate?', a: 'For pitched roofs, architectural asphalt shingles are the most practical starting point — they handle wind, freeze-thaw cycles, and most budgets. If you plan to stay in the home 20+ years, metal roofing lasts 40–70 years and sheds snow without forming ice dams. For flat roofs, TPO membrane is the code-preferred option in Chicago. Avoid basic 3-tab shingles — they rarely hold up long enough in Chicago winters to justify the savings.' },
  ]},
  { section: 'Winter & ice dams', items: [
    { q: 'I see large icicles on my roof. Do I have an ice dam?', a: 'Icicles longer than 12 inches on your eaves are a reliable sign that ice dams have already formed or will form soon. Do not climb on the roof yourself. Call a licensed contractor to safely remove the ice and inspect for water intrusion underneath — ice dam damage often does not show up as an interior leak until weeks later. Long-term fix: improve attic ventilation so the roof deck stays cold. Chicago code requires Ice & Water Shield underlayment extending at least 24 inches past the interior wall line.' },
  ]},
  { section: 'Insurance & hail', items: [
    { q: 'My roof was hit by hail. What should I do first?', a: 'Do not call your insurance company first. Get a free inspection from a licensed local contractor, then file the claim with their written damage assessment in hand, and request that the contractor be present when the insurance adjuster visits. Hail can knock off the protective granule layer without visibly puncturing shingles. In Illinois, homeowners typically have 12–24 months from the date of the storm to file a hail damage claim — check your specific policy for exact terms.' },
  ]},
  { section: 'Licensing & permits', items: [
    { q: 'How do I verify a roofing contractor is licensed in Illinois?', a: 'Search the contractor\'s name or license number on the IDFPR website (Illinois Department of Financial and Professional Regulation) before signing anything. Illinois issues two license types: Limited (104) for residential buildings up to 8 units, and Unlimited for all building types. Also confirm General Liability insurance (minimum $250,000) and Workers\' Compensation. Be cautious of out-of-state contractors who appear after storm events — verify Illinois licensing before proceeding.' },
    { q: 'Do I need a permit to replace my roof in Chicago?', a: 'Yes. The City of Chicago requires an official building permit for full roof replacement. A reputable contractor will obtain this permit as part of the job — it should be included in your contract at no extra charge. Skipping the permit can create problems when you sell the home or file an insurance claim.' },
  ]},
  { section: 'Warranties & financing', items: [
    { q: 'What warranties should I demand from a roofing contractor?', a: 'The contractor\'s labor warranty is the one that matters most — it covers installation quality. Demand at least 5 years in writing; 10 years is the mark of a quality contractor. If a contractor offers less than 5 years on workmanship, look elsewhere. The manufacturer\'s material warranty covers defective shingles but not installation errors, and can be voided if the install does not meet specifications.' },
    { q: 'What is the best financing option for a roof replacement?', a: 'If you have home equity, a HELOC typically offers the lowest interest rate. If not, many contractors offer 0% promotional financing for 12 months — only use this if you can pay the full balance before the period ends, as deferred interest applies to the original amount. The FHA Title I Home Improvement Loan is a government-backed option up to $25,000 regardless of equity. Get all financing terms in a separate written document before signing. Financing terms vary by lender — review all agreements carefully.' },
  ]},
]

export default function HomePage() {
  const allGuideFaq = guideFaqItems.flatMap(s => s.items)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Top-Rated Roofing Contractors in Chicago',
        url: 'https://www.roofrepairchicagonow.com',
        description: 'Find the best roofing contractors in Chicago — verified licensing, same-day service, free estimates, and warranty on all work.',
      },
      {
        '@type': 'ItemList',
        name: 'Top 10 Roof Repair Companies in Chicago',
        numberOfItems: companies.length,
        itemListElement: companies.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'LocalBusiness',
            name: c.name,
            telephone: c.phone,
            address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: c.googleRating, reviewCount: c.googleReviews },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: [...faqItems, ...allGuideFaq].map(f => ({
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
          <h1>Best Roofing Contractors in Chicago</h1>
          <div className={styles.heroSubBlock}>
            <p className={styles.heroP1}>Browse top-rated roofers below.</p>
            <p className={styles.heroP2}>If you need help fast, call now and we&apos;ll connect you with a roofer right away.</p>
          </div>
          <div className={styles.factors}>
            <div className={styles.factor}>Near you</div>
            <div className={styles.factor}>Free estimate</div>
            <div className={styles.factor}>Warranty on work</div>
          </div>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
          <div className={styles.btnCallNote}>
            <span className={styles.btnCallNoteItem}>Fast connection</span>
            <span className={styles.btnCallNoteItem}>Available today</span>
            <span className={styles.btnCallNoteItem}>Serving Chicago</span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>10</div>
            <div className={styles.trustLabel}>Companies ranked</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>24/7</div>
            <div className={styles.trustLabel}>Emergency service</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>Quality</div>
            <div className={styles.trustLabel}>Verified work</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>Affordable</div>
            <div className={styles.trustLabel}>Prices from $200</div>
          </div>
        </div>
      </div>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>Why this service</div>
          <div className={styles.whyTitle}>We don't list everyone. We rank the best.</div>
          <div className={styles.whyGrid}>
            {[
              { title: 'Independently researched', text: 'We evaluate licensing, reviews, warranties, and response time before any company makes our list.' },
              { title: 'Same-day response', text: 'Every company on our list offers same-day availability for emergency repairs in Chicago.' },
              { title: 'Warranty guaranteed', text: 'All companies provide written warranties on labor. We verify this before ranking.' },
              { title: 'Chicago only', text: 'We focus exclusively on local Chicago roofers who know your neighborhood, weather, and building types.' },
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
          <div className={styles.rankedLabel}>10 companies ranked</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} />
          ))}
        </div>
      </section>

      {/* URGENCY */}
      <section className={styles.urgency}>
        <div className={styles.urgencyInner}>
          <h2>Roof leaking right now?</h2>
          <p>Don't wait. Our dispatch team connects you with an available roofer in Chicago within minutes. Free, no obligation.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallUrgency}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Frequently asked questions</div>
          {faqItems.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
          <div className={styles.faqTitle} style={{marginTop: '1.75rem'}}>Chicago Roofing Guide</div>
          {guideFaqItems.map((section) => (
            <div key={section.section}>
              <div style={{fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:'var(--text-light)',margin:'1.25rem 0 0.5rem',paddingLeft:'2px'}}>{section.section}</div>
              {section.items.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>{item.a}</div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <InternalLinks type="home" />


    </>
  )
}

import type { Metadata } from 'next'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from './roofing-guide.module.css'

export const metadata: Metadata = {
  title: 'Chicago Roofing Guide: Questions & Answers (2026) — Roof Repair Chicago NOW',
  description: 'Practical answers to the most common roofing questions from Chicago homeowners — repair vs. replacement, costs, ice dams, hail claims, contractor licensing, and warranties.',
  alternates: { canonical: 'https://www.roofrepairchicagonow.com/roofing-guide' },
}

const faqItems = [
  {
    section: 'Diagnosis',
    items: [
      {
        q: 'Do I need a full roof replacement or just a repair?',
        a: 'If your roof has 3 or more problem areas, is older than 15 years, or has lost granules across more than 30% of its surface — replacement is typically the right call. A single isolated leak on a roof under 10 years old is usually a repair. When in doubt, schedule a free inspection before deciding — patching a roof that needs full replacement will cost you more in the long run.',
      },
      {
        q: 'How long does a roof last in Chicago?',
        a: 'Asphalt shingles last 15–20 years in Chicago — shorter than the manufacturer\'s rated lifespan because extreme temperature swings between harsh winters and hot summers accelerate material fatigue. Metal roofing typically lasts 40–70 years. Flat TPO/EPDM systems generally last 20–30 years with proper maintenance. If your asphalt roof is over 15 years old, budget for replacement within the next few years even if it looks intact from the street.',
      },
    ],
  },
  {
    section: 'Cost',
    items: [
      {
        q: 'How much does roof replacement cost in Chicago in 2026?',
        a: 'The average total for a full roof replacement in Chicago in 2026 is around $18,900, with a typical range of $8,300–$29,400 depending on house size, roof complexity, and material. Architectural asphalt shingles run $9.50–$13.00 per sq ft installed; metal roofing $15.00–$22.00; TPO or EPDM for flat roofs $10.00–$25.00. These are estimates — actual cost depends on your specific project. Always request a free on-site estimate before committing.',
        note: 'Prices are estimates and vary by project scope, materials, and location. Request a free on-site estimate for your specific project.',
      },
      {
        q: 'What factors drive the final roofing price up or down?',
        a: 'Four things move the price most: number of existing shingle layers, roof pitch, decking damage, and material class. Illinois code allows a maximum of 2 shingle layers — if you already have two, a full strip to bare decking is required, adding $1,000–$2,500. Steep pitches and multiple chimneys raise labor costs 20–30%. Rotted decking boards run $80–$120 per sheet to replace. Upgrading to Class 4 impact-resistant shingles costs more upfront but often pays back through lower insurance premiums.',
      },
    ],
  },
  {
    section: 'Materials',
    items: [
      {
        q: 'What is the best roofing material for Chicago\'s climate?',
        a: 'For pitched roofs, architectural asphalt shingles are the most practical starting point — they handle wind, freeze-thaw cycles, and most budgets. If you plan to stay in the home 20+ years, metal roofing lasts 40–70 years and sheds snow without forming ice dams. For flat roofs, TPO membrane is the code-preferred option in Chicago. Avoid basic 3-tab shingles — they rarely hold up long enough in Chicago winters to justify the savings over architectural shingles.',
      },
    ],
  },
  {
    section: 'Winter & ice dams',
    items: [
      {
        q: 'I see large icicles on my roof. Do I have an ice dam?',
        a: 'Icicles longer than 12 inches on your eaves are a reliable sign that ice dams have already formed or will form soon. Do not climb on the roof yourself. Call a licensed contractor to safely remove the ice and inspect for water intrusion underneath — ice dam damage often does not show up as an interior leak until weeks later. Long-term fix: improve attic ventilation so the roof deck stays cold and snow never melts and refreezes at the edge. Chicago code also requires Ice & Water Shield underlayment extending at least 24 inches past the interior wall line as a last-resort barrier.',
      },
    ],
  },
  {
    section: 'Insurance & hail',
    items: [
      {
        q: 'My roof was hit by hail. What should I do first?',
        a: 'Do not call your insurance company first. Get a free inspection from a licensed local contractor, then file the claim with their written damage assessment in hand, and request that the contractor be present when the insurance adjuster visits. Hail can knock off the protective granule layer without visibly puncturing shingles — damage that is easy for an adjuster to overlook without a knowledgeable contractor present. In Illinois, homeowners typically have 12–24 months from the date of the storm to file a hail damage claim, but timelines vary by policy — always check your specific coverage.',
        note: 'Consult your insurance policy or agent for exact claim deadlines and coverage terms.',
      },
    ],
  },
  {
    section: 'Licensing & permits',
    items: [
      {
        q: 'How do I verify a roofing contractor is licensed in Illinois?',
        a: 'Search the contractor\'s name or license number on the IDFPR website (Illinois Department of Financial and Professional Regulation) before signing anything. Illinois issues two roofing license types: Limited (104), which covers residential buildings up to 8 units, and Unlimited, which covers all building types. Also confirm the company carries General Liability insurance (minimum $250,000) and Workers\' Compensation. If an uninsured worker is injured on your property, liability may fall on you. Be cautious of out-of-state contractors who appear in your neighborhood after storm events — verify Illinois licensing before proceeding.',
      },
      {
        q: 'Do I need a permit to replace my roof in Chicago?',
        a: 'Yes. The City of Chicago requires an official building permit for full roof replacement. A reputable contractor will obtain this permit as part of the job — it should be included in your contract at no extra charge. Skipping the permit can create problems when you sell the home or file an insurance claim. If a contractor suggests bypassing the permit to save money, treat it as a red flag.',
      },
    ],
  },
  {
    section: 'Warranties & financing',
    items: [
      {
        q: 'What warranties should I demand from a roofing contractor?',
        a: 'The contractor\'s labor warranty is the one that matters most — it covers installation quality. Demand at least 5 years in writing; 10 years is the mark of a quality contractor. If a contractor offers less than 5 years on workmanship, look elsewhere. The manufacturer\'s material warranty (from brands like GAF, Owens Corning, or CertainTeed) covers defective shingles but not installation errors, and it can be voided if the install does not meet the manufacturer\'s specifications. Ask whether the installation will be certified by the manufacturer for enhanced coverage.',
      },
      {
        q: 'What is the best financing option for a roof replacement?',
        a: 'If you have home equity, a HELOC typically offers the lowest interest rate. If not, many contractors offer 0% promotional financing for 12 months — this works well only if you can pay the full balance before the promotional period ends, as deferred interest applies to the original amount if you do not. The FHA Title I Home Improvement Loan is a government-backed option available up to $25,000 regardless of equity. Get all financing terms in a separate written document before signing a roofing contract, and be cautious of financing arrangements offered by contractors you have just met following storm events.',
        note: 'Financing terms vary by lender and contractor. Review all agreements carefully before signing.',
      },
    ],
  },
]

const allFaqFlat = faqItems.flatMap(s => s.items)

export default function RoofingGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqFlat.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.page}>
        <div className={styles.inner}>
          <a href="/" className={styles.backLink}>← Back to top companies</a>
          <h1>Chicago Roofing Guide: Questions &amp; Answers (2026)</h1>
          <p className={styles.intro}>Practical answers to the most common roofing questions from Chicago homeowners — from repair vs. replacement to ice dams, costs, and contractor licensing.</p>

          {faqItems.map((section) => (
            <div key={section.section}>
              <div className={styles.sectionLabel}>{section.section}</div>
              {section.items.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>
                    {item.a}
                    {item.note && <span className={styles.faqNote}>{item.note}</span>}
                  </div>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaBlock}>
            <p>Need a licensed Chicago roofer today? We connect you with verified local companies — free, no obligation.</p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
              CALL NOW — {MAIN_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

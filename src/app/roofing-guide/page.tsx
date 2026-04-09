import type { Metadata } from 'next'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from './roofing-guide.module.css'

export const metadata: Metadata = {
  title: 'Chicago Roof Replacement Guide (2026) — Cost, Materials, Permits',
  description: 'Complete guide to roof replacement in Chicago. Real cost data, material comparisons, permit requirements, and how to avoid common mistakes.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/roofing-guide',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/roofing-guide' },
  },
}

export default function RoofingGuidePage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>Chicago Roof Replacement Guide 2026</h1>
        <p className={styles.intro}>
          Everything a Chicago homeowner needs to know before replacing a roof. Real costs, material comparisons for the Chicago climate, permit requirements, and how to choose a contractor you can trust.
        </p>

        <h2 className={styles.h2}>How much does roof replacement cost in Chicago?</h2>
        <div className={styles.expertBlock}>
          <strong>2026 Chicago averages:</strong> Asphalt shingles $8,000 to $16,000. Metal roofing $15,000 to $28,000. Flat TPO or EPDM $8,000 to $18,000. Most homeowners pay $10,000 to $14,000 for a standard 2,000 sq ft asphalt replacement.
        </div>
        <p className={styles.p}>Four factors move the price most significantly. First, the number of existing shingle layers. Illinois code allows a maximum of two layers. If you already have two, full tear-off to bare decking is required, adding $1,000 to $2,500. Second, roof pitch. Steep pitches add 20 to 30 percent to labor costs. Third, decking condition. Rotted boards cost $80 to $120 per sheet to replace and are common on roofs over 20 years old. Fourth, material choice. Architectural shingles cost more than 3-tab but last significantly longer in the Chicago climate.</p>

        <h2 className={styles.h2}>When do you need replacement instead of repair?</h2>
        <p className={styles.p}>Replace your roof when it is 20 or more years old with asphalt shingles, when more than 30 percent of shingles show damage or granule loss, when you see daylight through attic boards, when multiple leaks appear in different areas, or when the cost of repairs exceeds 40 percent of full replacement cost.</p>
        <p className={styles.p}>A single isolated leak on a roof under 10 years old is almost always a repair. A roof over 20 years with multiple problem areas is almost always a replacement. When in doubt, get a free inspection from a licensed contractor before committing to either option.</p>

        <h2 className={styles.h2}>Roofing materials for the Chicago climate</h2>
        <h3 className={styles.h3}>Architectural asphalt shingles</h3>
        <p className={styles.p}>The most practical starting point for most Chicago homes. Cost $9 to $13 per square foot installed. Last 20 to 25 years. Handle freeze-thaw cycles and moderate wind well. Class 4 impact-resistant versions cost 10 to 15 percent more but often qualify for insurance premium discounts. Avoid basic 3-tab shingles as they rarely hold up long enough in Chicago winters.</p>

        <h3 className={styles.h3}>Metal roofing</h3>
        <p className={styles.p}>The longest-lasting option at 40 to 70 years. Costs $15 to $22 per square foot installed. Sheds snow without forming ice dams. For homeowners planning to stay 15 or more years, metal is often the better long-term investment despite higher upfront cost. Standing seam is the premium option. Metal shingles provide a similar appearance to asphalt at slightly lower cost.</p>

        <h3 className={styles.h3}>Flat roof systems (TPO and EPDM)</h3>
        <p className={styles.p}>Required for the two-flats, three-flats, and courtyard buildings that make up much of Chicago's housing stock. TPO is the current code-preferred system and costs $10 to $18 per square foot installed. Lasts 20 to 30 years. EPDM is slightly less expensive and has a proven track record in Chicago cold weather. Both require annual inspection for seam and drain condition.</p>

        <h2 className={styles.h2}>Chicago permit requirements</h2>
        <div className={styles.expertBlock}>
          <strong>Required for every full replacement:</strong> The City of Chicago requires an official building permit for full roof replacement. A licensed contractor pulls this permit before work begins. It is included in the project cost, not a separate charge. Skipping the permit creates problems when selling or filing an insurance claim.
        </div>
        <p className={styles.p}>Chicago code also requires Ice and Water Shield underlayment extending at least 24 inches past the interior wall line at eaves. Synthetic underlayment is required over the full deck. Ventilation requirements must be met. A licensed contractor will handle all of this as part of a properly executed replacement.</p>

        <h2 className={styles.h2}>How to verify a contractor's license</h2>
        <p className={styles.p}>Search the contractor name or license number on the IDFPR website at idfpr.com before signing any contract. Illinois issues two license types: Limited for residential buildings up to 8 units, and Unlimited for all building types. Also confirm General Liability insurance of at least $250,000 and Workers Compensation coverage. Be cautious of storm chasers who appear after major weather events with out-of-state plates and no Illinois license.</p>

        <h2 className={styles.h2}>What a workmanship warranty should cover</h2>
        <p className={styles.p}>The contractor workmanship warranty is more important than the manufacturer material warranty. It covers installation quality, which is where most post-replacement problems originate. Require at least 5 years in writing. Ten years is the mark of a quality contractor. If a contractor offers less than 5 years on workmanship, look elsewhere. The manufacturer material warranty covers defective shingles but is void if installation does not meet specifications.</p>

        <div className={styles.ctaBlock}>
          <p>Ready to get estimates for your Chicago roof replacement? Our advisors can connect you with licensed contractors.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
            CALL NOW{'     '}{MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Free consultation. No obligation. 7 days a week.</p>
        </div>
      </div>
    </div>
  )
}

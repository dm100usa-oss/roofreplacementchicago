import type { Metadata } from 'next'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from '../roofing-guide/roofing-guide.module.css'

export const metadata: Metadata = {
  title: 'How to Get Insurance to Pay for Roof Replacement in Chicago',
  description: 'Step-by-step guide for Chicago homeowners on filing a roof replacement insurance claim after hail or storm damage. What to document, what to say, and how to get approved.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/insurance-guide',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/insurance-guide' },
  },
}

export default function InsuranceGuidePage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>How to Get Insurance to Pay for Roof Replacement in Chicago</h1>
        <p className={styles.intro}>
          Chicago gets hit by severe hailstorms and wind events every year. Most homeowner policies cover roof replacement after storm damage. But the process matters. Here is exactly what to do, step by step.
        </p>

        <div className={styles.expertBlock}>
          <strong>Key fact:</strong> Illinois homeowners typically have 12 to 24 months from the date of a storm to file a hail or wind damage claim. Check your specific policy for exact terms. Acting within 48 hours of a storm gives you the strongest position.
        </div>

        <h2 className={styles.h2}>Step 1. Document the damage before touching anything</h2>
        <p className={styles.p}>Within 48 hours of a storm, photograph every part of your roof from multiple angles. Photograph your gutters — hail knocks granules off shingles and they collect in gutters. Photograph any damaged vents, skylights, or flashing. Date-stamp your photos or use a phone that records metadata automatically.</p>
        <p className={styles.p}>Check your attic for daylight coming through, wet insulation, or new water stains on the ceiling. Document these too. The more evidence you gather before anyone touches the roof, the stronger your claim.</p>

        <h2 className={styles.h2}>Step 2. Get a written assessment from a licensed contractor first</h2>
        <p className={styles.p}>Do not call your insurance company first. Call a licensed Chicago roofing contractor and request a free storm damage inspection. Ask them to provide a written damage assessment that lists specific damage, affected areas, and the scope of work required.</p>
        <p className={styles.p}>A contractor who works with insurance claims regularly will know how to document damage in a way that supports your claim. This written assessment becomes your primary evidence when you contact your insurer.</p>

        <div className={styles.expertBlock}>
          <strong>Chicago specific:</strong> Hail damage to asphalt shingles often does not look dramatic from the ground. It shows up as small dark bruises or missing granule patches. An experienced inspector uses a ladder and sometimes drone footage to capture this. Invisible damage from the street is still covered damage.
        </div>

        <h2 className={styles.h2}>Step 3. File the claim with documentation in hand</h2>
        <p className={styles.p}>Contact your insurance company and file a claim. Provide the date of the storm, your photos, and the contractor written assessment. Ask for a copy of your policy declarations page if you do not have it — this shows your deductible, coverage limits, and whether you have ACV (actual cash value) or RCV (replacement cost value) coverage.</p>
        <p className={styles.p}>RCV coverage pays the full cost of replacement with current materials. ACV coverage pays the depreciated value of your old roof. If you have ACV, you will pay the difference. Know which you have before negotiating.</p>

        <h2 className={styles.h2}>Step 4. Have your contractor present during the adjuster visit</h2>
        <p className={styles.p}>When the insurance adjuster comes to inspect your roof, have your contractor there. The contractor can point out damage the adjuster might miss and answer technical questions about what needs to be replaced versus repaired. This step alone significantly improves claim approval rates.</p>
        <p className={styles.p}>Do not let the adjuster inspect alone if you can avoid it. You have the right to have a representative present.</p>

        <h2 className={styles.h2}>Step 5. Review the adjuster report carefully</h2>
        <p className={styles.p}>The adjuster will submit a report with an estimate for covered work. Compare this estimate with your contractor assessment. If items are missing or the scope is smaller than the contractor documented, you can dispute the findings. Ask your contractor to submit a supplemental estimate with photos backing each line item.</p>
        <p className={styles.p}>Most reputable Chicago roofing contractors who work with insurance claims do this routinely and at no additional charge as part of the project.</p>

        <h2 className={styles.h2}>What insurance does not cover</h2>
        <p className={styles.p}>Insurance does not cover normal wear, aging, or a roof that was already deteriorating before the storm. It does not cover damage that results from lack of maintenance. If your roof is 25 years old and a storm causes minor granule loss on already-worn shingles, you may not get a full replacement approved. This is why annual inspections matter.</p>

        <div className={styles.expertBlock}>
          <strong>Important:</strong> Do not sign any contract with a contractor before your claim is approved. Reputable contractors will begin work after claim approval. Be cautious of anyone who asks you to sign a full replacement contract before the adjuster visit.
        </div>

        <h2 className={styles.h2}>Questions to ask your contractor</h2>
        <p className={styles.p}>Do you work directly with insurance adjusters? Can you provide a line-item written estimate? Do you pull the required Chicago building permit as part of the project? What does your workmanship warranty cover? Do you have current Illinois licensing and general liability insurance?</p>

        <div className={styles.ctaBlock}>
          <p>Have questions about your specific situation? Our roofing advisors can help you understand what to expect from the insurance process.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
            CALL NOW{'  '}{MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Free consultation. No obligation.</p>
        </div>
      </div>
    </div>
  )
}

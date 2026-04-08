import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'How We Rank — Roof Replacement Chicago',
  description: 'Our methodology for ranking roof replacement contractors in Chicago. Transparent criteria based on licensing, reviews, experience, and warranty.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/how-we-rank',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/how-we-rank' },
  },
}

export default function HowWeRankPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1>How We Rank</h1>
        <p>Every contractor on our list is evaluated against the same set of verifiable criteria. We do not accept payment for rankings. Here is exactly how we assess each company.</p>
        <h2>Illinois IDFPR license</h2>
        <p>We verify active licensing through the Illinois Department of Financial and Professional Regulation database before any company appears on our list. We check for both Limited and Unlimited license types. Expired or suspended licenses result in immediate removal.</p>
        <h2>Google rating and review volume</h2>
        <p>We look for a minimum of 4.5 stars with at least 30 reviews. Volume matters because it indicates consistent performance across many projects. We read reviews for patterns around communication, permit handling, cleanup, and warranty follow-through.</p>
        <h2>BBB accreditation</h2>
        <p>We note BBB accreditation and rating as a secondary trust signal. We also check complaint history and resolution records.</p>
        <h2>Years in business</h2>
        <p>Roofing warranties are only as good as the company backing them. We prioritize contractors who have been in business long enough to honor a 5 to 10 year workmanship warranty. We note founding year for each company.</p>
        <h2>Workmanship warranty</h2>
        <p>We require a minimum 3 year workmanship warranty. Five years is our standard threshold. Ten years is the mark of exceptional confidence in installation quality.</p>
        <h2>Chicago permit and insurance experience</h2>
        <p>We favor contractors with documented experience pulling City of Chicago building permits and working with homeowner insurance companies on storm damage claims. These are specific to the Chicago market and distinguish experienced local operators from out-of-state contractors.</p>
        <h2>Compensation disclosure</h2>
        <p>We may receive compensation when homeowners contact contractors through our site. This compensation does not influence our rankings. Companies cannot pay to be ranked higher or included on our list.</p>
      </div>
    </div>
  )
}

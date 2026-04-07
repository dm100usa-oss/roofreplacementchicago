import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'About — Roof Replacement Chicago',
  description: 'About Roof Replacement Chicago. An independent expert resource for homeowners researching roof replacement contractors in Chicago, IL.',
  alternates: { canonical: 'https://www.roofreplacementchicago.com/about' },
}

export default function AboutPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1>About Roof Replacement Chicago</h1>
        <p>Roof Replacement Chicago is an independent editorial resource for homeowners in Chicago and the surrounding area who are researching full roof replacement.</p>
        <p>We created this resource because replacing a roof is one of the largest home improvement investments most homeowners make, typically $8,000 to $25,000, and the information available online is often vague, promotional, or outdated. We wanted to build something genuinely useful: real cost data, honest contractor evaluation, and practical guidance on insurance, permits, and materials for the Chicago climate specifically.</p>
        <p>We are not a roofing company. We do not do roofing work. We independently research and rank contractors based on verifiable criteria including active Illinois IDFPR licensing, Google review volume and rating, BBB accreditation, years in business, workmanship warranty terms, and documented experience with Chicago permit and insurance processes.</p>
        <p>We may receive compensation when homeowners contact contractors through our site. This compensation does not affect our rankings. Our methodology is described in full on the How We Rank page.</p>
        <p>Our goal is simple: help Chicago homeowners make a confident, informed decision about one of the most important investments in their home.</p>
      </div>
    </div>
  )
}

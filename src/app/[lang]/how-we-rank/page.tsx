import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'How We Rank Roof Repair Companies — Roof Replacement Chicago',
  description: 'Our methodology for ranking roof repair companies in Chicago. We evaluate licensing, reviews, response time, warranties, and pricing.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/es/how-we-rank',
    languages: { 'en': 'https://www.roofreplacementchicago.com/how-we-rank' },
  },
}

export default function HowWeRankPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>How we rank roof repair companies in Chicago</h1>
        <p>Every company on our list is evaluated against the same criteria. No company can pay to be ranked higher. Here is exactly what we look at.</p>
        <h2>1. Licensing and insurance</h2>
        <p>We verify that every company holds a valid Illinois contractor license and carries general liability insurance. Unlicensed or uninsured companies are excluded from our list entirely.</p>
        <h2>2. Google reviews</h2>
        <p>We look at the overall star rating and the number of reviews. A company with 200+ reviews at 4.8 stars carries more weight than one with 10 reviews at 5.0. We also read the reviews to spot patterns — good or bad.</p>
        <h2>3. Response time</h2>
        <p>For emergency roof repair, speed matters. We evaluate whether a company offers same-day or next-day service. Companies that clearly state 24/7 availability rank higher for emergency queries.</p>
        <h2>4. Warranty terms</h2>
        <p>We check whether the company offers a written warranty on labor and materials. Longer warranties and broader coverage improve a company's score.</p>
        <h2>5. Pricing transparency</h2>
        <p>We favor companies that are upfront about pricing — starting costs, what affects the final price, and whether estimates are free. Hidden fees or vague pricing lowers a company's ranking.</p>
        <h2>6. Our expert score</h2>
        <p>After evaluating all five factors, we assign an expert score from 1.0 to 5.0. This score, combined with the Google rating, determines the final ranking order.</p>
        <h2>How often we update</h2>
        <p>We review our rankings regularly. If a company's reviews drop, loses its license, or stops offering same-day service, it is removed or moved down the list.</p>
        <h2>Transparency</h2>
        <p>We may receive compensation when homeowners call or request quotes through our site. This compensation does not influence rankings. See our <a href="/disclosure">Disclosure</a>.</p>
      </div>
    </div>
  )
}

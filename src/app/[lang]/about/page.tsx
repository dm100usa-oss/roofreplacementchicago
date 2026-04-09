import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'About — Roof Replacement Chicago',
  description: 'Learn about Roof Replacement Chicago — an independent service that researches and ranks the best roof replacement contractors in Chicago.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/es/about',
    languages: { 'en': 'https://www.roofreplacementchicago.com/about' },
  },
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>About Roof Replacement Chicago</h1>
        <p>Roof Replacement Chicago is an independent referral service. We research, evaluate, and rank local roofing companies in Chicago so homeowners can make a confident decision fast — especially in emergencies.</p>
        <h2>What we do</h2>
        <p>We don't just list roofing companies. We rank them based on real criteria: licensing, insurance, Google reviews, response time, warranty terms, and pricing transparency. Only companies that meet our standards make the list.</p>
        <h2>Who we are</h2>
        <p>A small team focused on one city — Chicago. We believe local homeowners deserve a trustworthy resource, not a paid directory. Our rankings reflect editorial judgment, not advertising spend.</p>
        <h2>How we make money</h2>
        <p>We may receive compensation when homeowners call or request quotes through our site. This does not influence our rankings. Full details in our <a href="/disclosure">Disclosure</a>.</p>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:roofreplacementchicago@gmail.com">roofreplacementchicago@gmail.com</a></p>
      </div>
    </div>
  )
}

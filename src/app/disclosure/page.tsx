import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Disclosure — Roof Repair Chicago NOW',
  description: 'Advertising and referral disclosure for Roof Repair Chicago NOW.',
  alternates: { canonical: 'https://www.roofrepairchicagonow.com/disclosure' },
}

export default function DisclosurePage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Disclosure</h1>
        <p>Roof Repair Chicago NOW is an independent referral service. We may receive compensation for calls and referrals made through this website.</p>
        <h2>How compensation works</h2>
        <p>When a homeowner calls a roofing company through our site or requests a quote, we may receive a fee from the company. This is how we fund our research and keep this service free for homeowners.</p>
        <h2>Does compensation affect rankings?</h2>
        <p>No. Our rankings are based solely on editorial criteria: licensing, Google reviews, response time, warranty terms, and pricing transparency. Companies cannot pay to improve their ranking.</p>
        <h2>Not an endorsement</h2>
        <p>Inclusion on our list is not an endorsement of any company. We recommend getting multiple quotes and verifying license and insurance independently before hiring any contractor.</p>
        <h2>Accuracy</h2>
        <p>We make every effort to keep information accurate and up to date. However, ratings, reviews, pricing, and availability may change. Always confirm details directly with the company.</p>
        <h2>Questions</h2>
        <p>If you have questions about this disclosure, contact us at <a href="mailto:roofrepairchicagonow@gmail.com">roofrepairchicagonow@gmail.com</a>.</p>
      </div>
    </div>
  )
}

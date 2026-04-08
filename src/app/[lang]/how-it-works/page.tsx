import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'How It Works — Roof Replacement Chicago',
  description: 'See how Roof Replacement Chicago connects Chicago homeowners with top-rated local roofers — fast, free, and with no obligation.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/es/how-it-works',
    languages: { 'en': 'https://www.roofreplacementchicago.com/how-it-works' },
  },
}

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>How it works</h1>
        <p>Getting a trusted roofer in Chicago takes three simple steps — no forms, no waiting, no cost to you.</p>
        <h2>1. Browse our ranked list</h2>
        <p>We've done the research. Our list shows the top 10 roofing companies in Chicago, ranked by licensing, reviews, response time, and warranty. Each card shows what makes that company stand out.</p>
        <h2>2. Call or get a quote</h2>
        <p>Click CALL NOW to connect directly with the company. Or click GET QUOTE to visit their site and request an estimate. All companies on our list offer free estimates with no obligation.</p>
        <h2>3. Get your roof fixed</h2>
        <p>Most companies offer same-day service for emergencies. For non-urgent repairs, you can schedule at your convenience. All work comes with a written warranty.</p>
        <h2>Is this service free?</h2>
        <p>Yes, completely free for homeowners. We may receive a referral fee from companies, but this never affects our rankings. See our <a href="/disclosure">Disclosure</a> for full details.</p>
      </div>
    </div>
  )
}

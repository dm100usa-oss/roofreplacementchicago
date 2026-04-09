import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'How It Works — Roof Replacement Chicago',
  description: 'How Roof Replacement Chicago helps homeowners find verified roofing contractors. Free consultation, no pressure, no obligation.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/how-it-works',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/how-it-works' },
  },
}

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>How It Works</h1>
        <p>Replacing a roof is one of the most stressful decisions a homeowner can face. Big costs, unfamiliar contractors, insurance questions, city permits. Most people do not know where to start and are afraid of making the wrong choice. We understand that, and it is exactly why we built this site.</p>

        <h2>1. Browse our ranked list</h2>
        <p>We have already done the hard part for you. Every company on our list has been verified for an Illinois license, reviews, years in business, and warranty. You do not need to spend hours searching online. Just look through our list and choose the company that feels right for you.</p>

        <h2>2. Call for a free consultation</h2>
        <p>Not sure where to start? Call the number at the top of the page. A specialist will answer your questions, help you understand your situation, and guide you on next steps, including insurance questions. No obligation.</p>
        <p>Take your time and make a confident, independent decision.</p>

        <h2>3. Contact the company directly</h2>
        <p>Already found a company you like? Click VISIT SITE on their card and request a free estimate directly on their website. All companies on our list offer a free on-site inspection with no obligation.</p>
      </div>
    </div>
  )
}

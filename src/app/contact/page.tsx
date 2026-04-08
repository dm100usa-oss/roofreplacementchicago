import type { Metadata } from 'next'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY, EMAIL } from '@/lib/companies'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Contact — Roof Replacement Chicago',
  description: 'Contact Roof Replacement Chicago. Questions about our rankings, contractor listings, or roof replacement in Chicago.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/contact',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/contact' },
  },
}

export default function ContactPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1>Contact</h1>
        <p>For questions about our contractor rankings, content, or to request a contractor listing review, contact us by email.</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>To speak with a roofing advisor about your Chicago roof replacement project, call our main line:</p>
        <p><a href={`tel:${MAIN_PHONE}`}>{MAIN_PHONE_DISPLAY}</a></p>
        <p>Available 7 days a week. Free consultation, no obligation.</p>
      </div>
    </div>
  )
}

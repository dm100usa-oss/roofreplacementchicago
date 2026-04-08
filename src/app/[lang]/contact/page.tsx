import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Contact — Roof Repair Chicago NOW',
  description: 'Contact Roof Repair Chicago NOW with questions, feedback, or partnership inquiries.',
  alternates: { canonical: 'https://www.roofrepairchicagonow.com/contact' },
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Contact us</h1>
        <p>Have a question, found an error, or want to discuss a partnership? Reach out by email — we respond within one business day.</p>
        <h2>Email</h2>
        <p><a href="mailto:roofrepairchicagonow@gmail.com">roofrepairchicagonow@gmail.com</a></p>
        <h2>For roofing companies</h2>
        <p>If you represent a roofing company in Chicago and want to be considered for our list, email us with your company name, license number, service area, and Google Business Profile link. We review all submissions but cannot guarantee placement.</p>
        <h2>For homeowners</h2>
        <p>If you had a bad experience with a company on our list, please let us know. We take feedback seriously and use it to update our rankings.</p>
      </div>
    </div>
  )
}

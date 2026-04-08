import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy — Roof Replacement Chicago',
  description: 'Privacy policy for roofreplacementchicago.com.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/privacy',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/privacy' },
  },
}

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2025</p>
        <h2>What we collect</h2>
        <p>We do not collect personal information unless you voluntarily provide it by contacting us via email. We may collect anonymous usage data (pages visited, device type, location by city) through standard analytics tools.</p>
        <h2>Cookies</h2>
        <p>We may use cookies or similar technologies to understand how visitors use our site. You can disable cookies in your browser settings. This will not affect your ability to use the site.</p>
        <h2>Third parties</h2>
        <p>When you click CALL NOW or GET QUOTE, you are connecting directly with a third-party roofing company. Their privacy practices are their own. We recommend reviewing their privacy policy before sharing personal information.</p>
        <h2>Call tracking</h2>
        <p>Phone numbers on this site may be tracked to measure which pages generate calls. We use this data to improve our service. No personal information is stored beyond the call record.</p>
        <h2>Data sharing</h2>
        <p>We do not sell personal data. We do not share data with third parties except as needed to operate this site (analytics providers, hosting).</p>
        <h2>Contact</h2>
        <p>Questions about this policy: <a href="mailto:roofreplacementchicago@gmail.com">roofreplacementchicago@gmail.com</a></p>
      </div>
    </div>
  )
}

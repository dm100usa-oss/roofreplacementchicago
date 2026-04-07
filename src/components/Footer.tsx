import Link from 'next/link'
import { EMAIL } from '@/lib/companies'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/insurance-guide">Insurance Guide</Link>
          <Link href="/roofing-guide">Roofing Guide</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/how-we-rank">How we rank</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/disclosure">Disclosure</Link>
        </div>
        <p className={styles.disclaimer}>
          Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
        </p>
        <p className={styles.disclosure}>
          This website is an independent editorial resource. We may receive compensation for referrals. Rankings reflect independent research and do not constitute an endorsement. FTC Disclosure: We receive compensation from partners. Our rankings remain independent.
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Roof Replacement Chicago · {EMAIL}
        </p>
      </div>
    </footer>
  )
}

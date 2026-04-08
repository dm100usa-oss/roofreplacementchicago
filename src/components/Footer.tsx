import Link from 'next/link'
import { EMAIL } from '@/lib/companies'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/how-we-rank">How we rank</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/disclosure">Disclosure</Link>
        </div>
        <p className={styles.disclosure}>
          This website is an independent referral service. We may receive compensation for calls and referrals. Rankings are based on editorial research and do not constitute an endorsement.
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Roof Repair Chicago NOW · {EMAIL}
        </p>
      </div>
    </footer>
  )
}

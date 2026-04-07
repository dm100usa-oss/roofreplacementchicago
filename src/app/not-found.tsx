import styles from './static-page.module.css'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist. Try one of these:</p>
        <ul>
          <li><a href="/">Home — Top 10 roof repair companies in Chicago</a></li>
          <li><a href="/services/emergency-roof-repair">Emergency roof repair Chicago</a></li>
          <li><a href="/services/roof-leak-repair">Roof leak repair Chicago</a></li>
          <li><a href="/neighborhoods/north-side">Roof repair North Side Chicago</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>
          Or call us directly: <a href={`tel:${MAIN_PHONE}`}><strong>{MAIN_PHONE_DISPLAY}</strong></a>
        </p>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import styles from './InternalLinks.module.css'

type Props = {
  type: 'home' | 'neighborhood' | 'service' | 'article'
  currentSlug?: string
  lang?: string
}

export default function InternalLinks({ type }: Props) {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {(type === 'home' || type === 'service') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>Replacement by type</div>
            <div className={styles.links}>
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={styles.link}>{s.name}</Link>
              ))}
            </div>
          </div>
        )}
        {(type === 'home' || type === 'neighborhood') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>Serving Chicago neighborhoods</div>
            <div className={styles.links}>
              {neighborhoods.map(n => (
                <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className={styles.link}>{n.name}</Link>
              ))}
            </div>
          </div>
        )}
        <div className={styles.group}>
          <div className={styles.groupTitle}>Resources</div>
          <div className={styles.links}>
            <Link href="/insurance-guide" className={styles.link}>Insurance Guide</Link>
            <Link href="/roofing-guide" className={styles.link}>Roofing Guide</Link>
            <Link href="/how-we-rank" className={styles.link}>How We Rank</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

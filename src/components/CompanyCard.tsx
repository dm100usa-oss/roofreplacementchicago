import { Company } from '@/lib/companies'
import { type Locale } from '@/lib/i18n'
import styles from './CompanyCard.module.css'

type Props = {
  company: Company
  isFirst?: boolean
  lang?: Locale
}

// Изменение 1 — звёзды заполняются пропорционально expertRating (из 5)
function StarRating({ rating }: { rating: number }) {
  const pct = (rating / 5) * 100
  return (
    <span style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
      <span style={{ color: '#d1d5db', letterSpacing: '1px' }}>★★★★★</span>
      <span style={{
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        width: `${pct}%`,
        color: '#f59e0b',
        letterSpacing: '1px',
        whiteSpace: 'nowrap',
      }}>★★★★★</span>
    </span>
  )
}

export default function CompanyCard({ company, isFirst, lang = 'en' }: Props) {
  const isEs = lang === 'es'
  return (
    <div className={`${styles.card} ${isFirst ? styles.cardFirst : ''}`}>
      <div className={styles.top}>
        <div className={`${styles.num} ${isFirst ? styles.numLeader : ''}`}>
          {company.id}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{company.name}</div>
          <div className={styles.metaRow}>
            <StarRating rating={company.expertRating} />
            <span className={styles.dot}>·</span>
            <span className={styles.expertRatingInline}>{company.expertRating}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.expertLabel}>{isEs ? 'Puntuación experta' : 'Expert score'}</span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.desc}>{isEs ? company.descEs : company.desc}</div>
        <div className={styles.desc}>{isEs ? company.warrantyEs : company.warranty}</div>
        <div className={styles.btnRow}>
          <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.btnCall}>
            {isEs ? 'VER SITIO' : 'VISIT SITE'}
          </a>
        </div>

      </div>
    </div>
  )
}

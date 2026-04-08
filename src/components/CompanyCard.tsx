import { Company, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { type Locale } from '@/lib/i18n'
import styles from './CompanyCard.module.css'

type Props = {
  company: Company
  isFirst?: boolean
  lang?: Locale
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
            <span className={styles.stars}>{company.stars}</span>
            <span className={styles.price}>{company.price}</span>
            <span className={styles.dot}>·</span>
            <span className={`${styles.tag} ${company.tag === 'Emergency' ? styles.tagEmergency : styles.tagBook}`}>
              {isEs ? company.tagEs : company.tag}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.desc}>{isEs ? company.descEs : company.desc}</div>
        <div className={styles.desc}>{isEs ? company.warrantyEs : company.warranty}</div>
        <div className={styles.ratingsRow}>
          <div className={styles.ratingItem}>
            <span className={styles.ratingLabel}>{isEs ? 'Calificación experta' : 'Expert rating'}</span>
            {' · '}
            <span className={styles.ratingStar}>★</span>
            {' '}{company.expertRating}
          </div>
          <span className={styles.ratingDivider}>|</span>
          <div className={styles.ratingItem}>
            <span className={styles.ratingLabel}>Google ({company.googleReviews} {isEs ? 'reseñas' : 'reviews'})</span>
            {' · '}
            <span className={styles.ratingStar}>★</span>
            {' '}{company.googleRating}
          </div>
        </div>
        <div className={styles.btnRow}>
          <a href={`tel:${company.phone}`} className={styles.btnCall}>
            {isEs ? 'LLAMAR AHORA' : 'CALL NOW'}
          </a>
          <a href={company.website} className={styles.btnQuote}>
            {isEs ? 'COTIZAR' : 'GET QUOTE'}
          </a>
        </div>
        <div className={styles.btnNote}>
          {isEs ? 'Presupuesto gratis · Disponible hoy' : 'Free estimate · Same-day available'}
        </div>
      </div>
    </div>
  )
}

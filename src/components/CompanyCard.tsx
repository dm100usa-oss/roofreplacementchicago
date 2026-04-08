import { Company } from '@/lib/companies'
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
            <span className={styles.dot}>·</span>
            <span className={`${styles.tag} ${company.tag === 'Top Pick' ? styles.tagTop : styles.tagRated}`}>
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
            <span className={styles.ratingLabel}>{isEs ? 'Puntuación experta' : 'Expert score'}</span>
            {' · '}
            <span className={styles.ratingStar}>★</span>
            {' '}{company.expertRating}
          </div>
        </div>
        <div className={styles.btnRow}>
          <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.btnCall}>
            {isEs ? 'VER SITIO' : 'VISIT SITE'}
          </a>
        </div>
        <div className={styles.btnNote}>
          {isEs ? 'Estimado gratis · Sin obligación' : 'Free estimate · No obligation'}
        </div>
      </div>
    </div>
  )
}

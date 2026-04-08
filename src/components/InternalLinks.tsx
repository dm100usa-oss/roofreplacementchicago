import Link from 'next/link'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import { articles } from '@/lib/articles'
import styles from './InternalLinks.module.css'

type Props = {
  type: 'home' | 'neighborhood' | 'service' | 'article'
  currentSlug?: string
  lang?: string
}

export default function InternalLinks({ type, lang }: Props) {
  const isEs = lang === 'es'
  const prefix = isEs ? '/es' : ''

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {(type === 'home' || type === 'service') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>
              {isEs ? 'Reemplazo por tipo' : 'Replacement by type'}
            </div>
            <div className={styles.links}>
              {services.map(s => (
                <Link key={s.slug} href={`${prefix}/services/${s.slug}`} className={styles.link}>
                  {isEs ? s.nameEs : s.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {(type === 'home' || type === 'neighborhood') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>
              {isEs ? 'Barrios de Chicago' : 'Serving Chicago neighborhoods'}
            </div>
            <div className={styles.links}>
              {neighborhoods.map(n => (
                <Link key={n.slug} href={`${prefix}/neighborhoods/${n.slug}`} className={styles.link}>
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className={styles.group}>
          <div className={styles.groupTitle}>
            {isEs ? 'Guías para propietarios' : 'Guides for homeowners'}
          </div>
          <div className={styles.links}>
            {articles.map(a => (
              <Link key={a.slug} href={`${prefix}/articles/${a.slug}`} className={styles.link}>
                {isEs ? a.titleEs : a.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupTitle}>
            {isEs ? 'Recursos' : 'Resources'}
          </div>
          <div className={styles.links}>
            <Link href={`${prefix}/insurance-guide`} className={styles.link}>
              {isEs ? 'Guía de seguros' : 'Insurance Guide'}
            </Link>
            <Link href={`${prefix}/roofing-guide`} className={styles.link}>
              {isEs ? 'Guía de techos' : 'Roofing Guide'}
            </Link>
            <Link href={`${prefix}/how-we-rank`} className={styles.link}>
              {isEs ? 'Cómo clasificamos' : 'How We Rank'}
            </Link>
            <Link href={`${prefix}/about`} className={styles.link}>
              {isEs ? 'Acerca de' : 'About'}
            </Link>
            <Link href={`${prefix}/contact`} className={styles.link}>
              {isEs ? 'Contacto' : 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

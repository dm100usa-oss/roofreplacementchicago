import Link from 'next/link'
import styles from './InternalLinks.module.css'

type Props = {
  type: 'home' | 'neighborhood' | 'service' | 'article'
  currentSlug?: string
  lang?: string
}

const serviceLinks = [
  { href: '/services/emergency-roof-repair', label: 'Emergency Roof Repair Chicago', labelEs: 'Reparación de Techo de Emergencia Chicago' },
  { href: '/services/roof-leak-repair', label: 'Roof Leak Repair Chicago', labelEs: 'Reparación de Goteras Chicago' },
  { href: '/services/flat-roof-repair', label: 'Flat Roof Repair Chicago', labelEs: 'Reparación de Techo Plano Chicago' },
  { href: '/services/roof-repair-after-storm', label: 'Roof Repair After Storm', labelEs: 'Reparación de Techo Después de Tormenta' },
  { href: '/services/same-day-roof-repair', label: 'Same Day Roof Repair Chicago', labelEs: 'Reparación de Techo el Mismo Día Chicago' },
  { href: '/services/roof-replacement', label: 'Roof Replacement Chicago', labelEs: 'Reemplazo de Techo Chicago' },
  { href: '/services/roof-inspection', label: 'Roof Inspection Chicago', labelEs: 'Inspección de Techo Chicago' },
]

const neighborhoodLinks = [
  { href: '/neighborhoods/north-side', label: 'North Side', labelEs: 'North Side' },
  { href: '/neighborhoods/south-side', label: 'South Side', labelEs: 'South Side' },
  { href: '/neighborhoods/west-side', label: 'West Side', labelEs: 'West Side' },
  { href: '/neighborhoods/lincoln-park', label: 'Lincoln Park', labelEs: 'Lincoln Park' },
  { href: '/neighborhoods/logan-square', label: 'Logan Square', labelEs: 'Logan Square' },
  { href: '/neighborhoods/wicker-park', label: 'Wicker Park', labelEs: 'Wicker Park' },
  { href: '/neighborhoods/hyde-park', label: 'Hyde Park', labelEs: 'Hyde Park' },
  { href: '/neighborhoods/pilsen', label: 'Pilsen', labelEs: 'Pilsen' },
  { href: '/neighborhoods/bucktown', label: 'Bucktown', labelEs: 'Bucktown' },
  { href: '/neighborhoods/andersonville', label: 'Andersonville', labelEs: 'Andersonville' },
  { href: '/neighborhoods/lakeview', label: 'Lakeview', labelEs: 'Lakeview' },
  { href: '/neighborhoods/river-north', label: 'River North', labelEs: 'River North' },
  { href: '/neighborhoods/gold-coast', label: 'Gold Coast', labelEs: 'Gold Coast' },
  { href: '/neighborhoods/old-town', label: 'Old Town', labelEs: 'Old Town' },
  { href: '/neighborhoods/streeterville', label: 'Streeterville', labelEs: 'Streeterville' },
  { href: '/neighborhoods/roscoe-village', label: 'Roscoe Village', labelEs: 'Roscoe Village' },
  { href: '/neighborhoods/west-loop', label: 'West Loop', labelEs: 'West Loop' },
  { href: '/neighborhoods/fulton-market', label: 'Fulton Market', labelEs: 'Fulton Market' },
  { href: '/neighborhoods/south-loop', label: 'South Loop', labelEs: 'South Loop' },
  { href: '/neighborhoods/ukrainian-village', label: 'Ukrainian Village', labelEs: 'Ukrainian Village' },
  { href: '/neighborhoods/lincoln-square', label: 'Lincoln Square', labelEs: 'Lincoln Square' },
  { href: '/neighborhoods/edgewater', label: 'Edgewater', labelEs: 'Edgewater' },
  { href: '/neighborhoods/beverly', label: 'Beverly', labelEs: 'Beverly' },
  { href: '/neighborhoods/ravenswood', label: 'Ravenswood', labelEs: 'Ravenswood' },
]

const articleLinks = [
  { href: '/articles/how-to-choose', label: 'How to choose a roof repair company', labelEs: 'Cómo elegir una empresa de reparación de techos' },
  { href: '/articles/average-cost', label: 'Average cost of roof repair in Chicago', labelEs: 'Costo promedio de reparación de techos en Chicago' },
  { href: '/articles/signs-your-roof', label: 'Signs your roof needs immediate repair', labelEs: 'Señales de que su techo necesita reparación urgente' },
  { href: '/articles/after-storm-damage', label: 'What to do after storm damage', labelEs: 'Qué hacer después de daños por tormenta' },
  { href: '/articles/how-we-rank-companies', label: 'How we rank companies', labelEs: 'Cómo clasificamos las empresas' },
]

export default function InternalLinks({ type, currentSlug, lang }: Props) {
  const isEs = lang === 'es'
  const prefix = isEs ? '/es' : ''

  const serviceGroupTitle = isEs ? 'Servicios' : 'Services'
  const neighborhoodGroupTitle = isEs ? 'Áreas de servicio' : 'Service areas'
  const articleGroupTitle = isEs ? 'Guías de techado' : 'Roofing guides'

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {(type === 'home' || type === 'neighborhood' || type === 'article') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>{serviceGroupTitle}</div>
            <div className={styles.links}>
              {serviceLinks.map(l => (
                <Link key={l.href} href={`${prefix}${l.href}`} className={styles.link}>
                  {isEs ? l.labelEs : l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {(type === 'home' || type === 'service' || type === 'article') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>{neighborhoodGroupTitle}</div>
            <div className={styles.links}>
              {neighborhoodLinks.map(l => (
                <Link key={l.href} href={`${prefix}${l.href}`} className={styles.link}>
                  {isEs ? l.labelEs : l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {(type === 'home' || type === 'neighborhood' || type === 'service') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>{articleGroupTitle}</div>
            <div className={styles.links}>
              {articleLinks.map(l => (
                <Link key={l.href} href={`${prefix}${l.href}`} className={styles.link}>
                  {isEs ? l.labelEs : l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

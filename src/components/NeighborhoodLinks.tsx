'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './InternalLinks.module.css'
import nbStyles from './NeighborhoodLinks.module.css'

type Neighborhood = { slug: string; name: string }

type Props = {
  neighborhoods: Neighborhood[]
  prefix: string
  labelTitle: string
  labelMore: string
  labelLess: string
  initialCount?: number
}

export default function NeighborhoodLinks({
  neighborhoods,
  prefix,
  labelTitle,
  labelMore,
  labelLess,
  initialCount = 10,
}: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.group}>
      <div className={styles.groupTitle}>{labelTitle}</div>
      <div className={styles.links}>
        {neighborhoods.map((n, i) => (
          <Link
            key={n.slug}
            href={`${prefix}/neighborhoods/${n.slug}`}
            className={`${styles.link} ${!expanded && i >= initialCount ? nbStyles.hidden : ''}`}
            aria-hidden={!expanded && i >= initialCount ? 'true' : undefined}
            tabIndex={!expanded && i >= initialCount ? -1 : undefined}
          >
            {n.name}
          </Link>
        ))}
      </div>
      {neighborhoods.length > initialCount && (
        <button
          className={nbStyles.toggleBtn}
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
        >
          {expanded
            ? labelLess
            : `${labelMore} (${neighborhoods.length - initialCount})`}
        </button>
      )}
    </div>
  )
}

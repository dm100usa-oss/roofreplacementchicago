import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, dict, type Locale } from '@/lib/i18n'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from './page.module.css'

type Props = { params: { lang: string } }

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) return {}
  const isEs = lang === 'es'
  return {
    title: isEs
      ? 'Los Mejores Contratistas de Techos en Chicago (2026) | Roof Repair Chicago NOW'
      : 'Best Roofing Contractors in Chicago (2026) | Roof Repair Chicago NOW',
    description: isEs
      ? 'Encuentre los mejores contratistas de techos en Chicago — licencias verificadas, servicio el mismo día, presupuestos gratuitos y garantía en todos los trabajos.'
      : 'Find the best roofing contractors in Chicago — verified licensing, same-day service, free estimates, and warranty on all work. Top 10 ranked by our team.',
    alternates: {
      canonical: isEs ? 'https://www.roofrepairchicagonow.com/es' : 'https://www.roofrepairchicagonow.com',
      languages: {
        'en': 'https://www.roofrepairchicagonow.com',
        'es': 'https://www.roofrepairchicagonow.com/es',
      },
    },
  }
}

export default function LangHomePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const t = dict[lang]
  const isEs = lang === 'es'

  const faqItems = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
    { q: t.faq5q, a: t.faq5a },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>{t.heroH1}</h1>
          <h2 className={styles.heroH2}>{t.heroH2}</h2>
          <p className={styles.heroDesc}>{t.heroDesc}</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            {t.callNow} — {MAIN_PHONE_DISPLAY}
          </a>
          <div className={styles.btnCallNote}>
            <span className={styles.btnCallNoteItem}>{t.noteNoPress}</span>
            <span className={styles.btnCallNoteItem}>{t.noteNoObligation}</span>
            <span className={styles.btnCallNoteItem}>{t.noteAdvice}</span>
          </div>
        </div>
      </section>

      <div className={styles.statsHeader}>
        <div className={styles.statsHeaderText}>{t.statsHeader}</div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <div className={`${styles.statNum} ${styles.statDate}`}>Apr 7, 2026</div>
            <div className={styles.statLabel}>{t.statsUpdated}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>1–3 days</div>
            <div className={styles.statLabel}>{t.statsDuration}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$8K–$25K</div>
            <div className={styles.statLabel}>{t.statsCost}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>Permit</div>
            <div className={styles.statLabel}>{t.statsPermit}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>6</div>
            <div className={styles.statLabel}>{t.statsContractors}</div>
          </div>
        </div>
      </div>

      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>{t.whyLabel}</div>
          <div className={styles.whyTitle}>{t.whyTitle}</div>
          <div className={styles.whyGrid}>
            {[
              { title: t.why1Title, text: t.why1Text },
              { title: t.why2Title, text: t.why2Text },
              { title: t.why3Title, text: t.why3Text },
              { title: t.why4Title, text: t.why4Text },
            ].map(item => (
              <div key={item.title} className={styles.whyCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="companies" className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>{t.companiesLabel}</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} lang={lang} />
          ))}
        </div>
      </section>

      <section className={styles.urgency}>
        <div className={styles.urgencyInner}>
          <h2>{t.urgencyH2}</h2>
          <p>{t.urgencyText}</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallUrgency}>
            {t.callNow} — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>{t.faqTitle}</div>
          {faqItems.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
          <div className={styles.faqTitle} style={{marginTop: '1.75rem'}}>{t.guideTitle}</div>
          {[
            { label: isEs ? 'Diagnóstico' : 'Diagnosis', items: [{ q: t.gfaq1q, a: t.gfaq1a }, { q: t.gfaq2q, a: t.gfaq2a }] },
            { label: isEs ? 'Costo' : 'Cost', items: [{ q: t.gfaq3q, a: t.gfaq3a }, { q: t.gfaq4q, a: t.gfaq4a }] },
            { label: isEs ? 'Materiales' : 'Materials', items: [{ q: t.gfaq5q, a: t.gfaq5a }] },
            { label: isEs ? 'Invierno y diques de hielo' : 'Winter & ice dams', items: [{ q: t.gfaq6q, a: t.gfaq6a }] },
            { label: isEs ? 'Seguro y granizo' : 'Insurance & hail', items: [{ q: t.gfaq7q, a: t.gfaq7a }] },
            { label: isEs ? 'Licencias y permisos' : 'Licensing & permits', items: [{ q: t.gfaq8q, a: t.gfaq8a }, { q: t.gfaq9q, a: t.gfaq9a }] },
            { label: isEs ? 'Garantías y financiamiento' : 'Warranties & financing', items: [{ q: t.gfaq10q, a: t.gfaq10a }, { q: t.gfaq11q, a: t.gfaq11a }] },
          ].map((section) => (
            <div key={section.label}>
              <div style={{fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:'var(--text-light)',margin:'1.25rem 0 0.5rem',paddingLeft:'2px'}}>{section.label}</div>
              {section.items.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>{item.a}</div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <InternalLinks type="home" lang={lang} />


    </>
  )
}

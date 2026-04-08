import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, dict, type Locale } from '@/lib/i18n'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from '../../roofing-guide/roofing-guide.module.css'

type Props = { params: { lang: string } }

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) return {}
  const t = dict[lang]
  const isEs = lang === 'es'
  return {
    title: `${t.guideTitle} — Roof Repair Chicago NOW`,
    description: t.guideDesc,
    alternates: {
      canonical: isEs
        ? 'https://www.roofrepairchicagonow.com/es/roofing-guide'
        : 'https://www.roofrepairchicagonow.com/roofing-guide',
      languages: {
        en: 'https://www.roofrepairchicagonow.com/roofing-guide',
        es: 'https://www.roofrepairchicagonow.com/es/roofing-guide',
      },
    },
  }
}

export default function LangRoofingGuidePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const t = dict[lang]
  const isEs = lang === 'es'

  const sections = [
    {
      label: isEs ? 'Diagnóstico' : 'Diagnosis',
      items: [
        { q: t.gfaq1q, a: t.gfaq1a },
        { q: t.gfaq2q, a: t.gfaq2a },
      ],
    },
    {
      label: isEs ? 'Costo' : 'Cost',
      items: [
        { q: t.gfaq3q, a: t.gfaq3a, note: isEs ? 'Los precios son estimados y varían según el alcance del proyecto y los materiales. Solicite un presupuesto gratuito en el lugar.' : 'Prices are estimates and vary by project scope and materials. Request a free on-site estimate for your specific project.' },
        { q: t.gfaq4q, a: t.gfaq4a },
      ],
    },
    {
      label: isEs ? 'Materiales' : 'Materials',
      items: [
        { q: t.gfaq5q, a: t.gfaq5a },
      ],
    },
    {
      label: isEs ? 'Invierno y diques de hielo' : 'Winter & ice dams',
      items: [
        { q: t.gfaq6q, a: t.gfaq6a },
      ],
    },
    {
      label: isEs ? 'Seguro y granizo' : 'Insurance & hail',
      items: [
        { q: t.gfaq7q, a: t.gfaq7a, note: isEs ? 'Consulte su póliza o agente de seguros para conocer los plazos exactos de reclamo y los términos de cobertura.' : 'Consult your insurance policy or agent for exact claim deadlines and coverage terms.' },
      ],
    },
    {
      label: isEs ? 'Licencias y permisos' : 'Licensing & permits',
      items: [
        { q: t.gfaq8q, a: t.gfaq8a },
        { q: t.gfaq9q, a: t.gfaq9a },
      ],
    },
    {
      label: isEs ? 'Garantías y financiamiento' : 'Warranties & financing',
      items: [
        { q: t.gfaq10q, a: t.gfaq10a },
        { q: t.gfaq11q, a: t.gfaq11a, note: isEs ? 'Los términos de financiamiento varían según el prestamista y el contratista. Revise todos los acuerdos cuidadosamente antes de firmar.' : 'Financing terms vary by lender and contractor. Review all agreements carefully before signing.' },
      ],
    },
  ]

  const allFlat = sections.flatMap(s => s.items)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFlat.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.page}>
        <div className={styles.inner}>
          <a href={isEs ? '/es' : '/'} className={styles.backLink}>{t.guideBackLink}</a>
          <h1>{t.guideTitle}</h1>
          <p className={styles.intro}>{t.guideIntro}</p>

          {sections.map((section) => (
            <div key={section.label}>
              <div className={styles.sectionLabel}>{section.label}</div>
              {section.items.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{item.q}</summary>
                  <div className={styles.faqA}>
                    {item.a}
                    {item.note && <span className={styles.faqNote}>{item.note}</span>}
                  </div>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaBlock}>
            <p>
              {isEs
                ? '¿Necesita un techero con licencia en Chicago hoy? Lo conectamos con empresas locales verificadas — gratis, sin compromiso.'
                : 'Need a licensed Chicago roofer today? We connect you with verified local companies — free, no obligation.'}
            </p>
            <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
              {t.callNow} — {MAIN_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

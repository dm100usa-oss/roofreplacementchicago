import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from './page.module.css'

type Props = { params: { lang: string } }

export async function generateStaticParams() {
  return [{ lang: 'es' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.lang !== 'es') return {}
  return {
    title: 'Reemplazo de Techo en Chicago — 6 Contratistas Verificados',
    description: 'Reemplazar su techo en Chicago es una decisión importante. Contratistas verificados, precios reales, guía de seguros. Recurso experto para propietarios en Chicago.',
    alternates: { canonical: 'https://www.roofreplacementchicago.com/es' },
  }
}

export default function LangHomePage({ params }: Props) {
  if (params.lang !== 'es') notFound()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Reemplazo de Techo en Chicago</h1>
          <div className={styles.heroSubBlock}>
            <p className={styles.heroP1}>Reemplazar su techo es una de las decisiones más importantes que toma un propietario. Lo entendemos.</p>
            <p className={styles.heroP2}>Llámenos primero. Obtenga respuestas honestas, sin presión, sin obligación.</p>
          </div>
          <div className={styles.factors}>
            <div className={styles.factor}>Consulta gratuita</div>
            <div className={styles.factor}>Contratistas con licencia</div>
            <div className={styles.factor}>Sin obligación</div>
          </div>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            LLAMAR AHORA — {MAIN_PHONE_DISPLAY}
          </a>
          <div className={styles.btnCallNote}>
            <span className={styles.btnCallNoteItem}>Sin obligación</span>
            <span className={styles.btnCallNoteItem}>Respuestas reales</span>
            <span className={styles.btnCallNoteItem}>Disponible 7 días a la semana</span>
          </div>
        </div>
      </section>

      <div className={styles.expertStrip}>
        <div className={styles.expertInner}>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>$8K–$25K</div>
            <div className={styles.expertLabel}>Costo típico en Chicago</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>1–2 días</div>
            <div className={styles.expertLabel}>Duración promedio del proyecto</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>Permiso</div>
            <div className={styles.expertLabel}>Requerido por la Ciudad de Chicago</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>6</div>
            <div className={styles.expertLabel}>Contratistas verificados</div>
          </div>
        </div>
      </div>

      <section id="companies" className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>6 contratistas verificados</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} lang="es" />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>No sabe por dónde empezar?</h2>
          <p>Una llamada lo conecta con un asesor de techado que puede responder sus preguntas sobre costos, materiales, permisos y seguros. Gratis, sin compromiso.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallCta}>
            LLAMAR AHORA — {MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Sin obligación. Respuestas reales. 7 días a la semana.</p>
        </div>
      </section>

      <InternalLinks type="home" />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import DateDisplay from '@/components/DateDisplay'
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
          <div className={styles.heroContent}>
            <div className={styles.heroTextCol}>
              <div className={styles.heroLeft}>
                <h1>Reemplazo de Techo en Chicago: Respuestas Profesionales y Contratistas Verificados</h1>
                <p className={styles.heroSubtitle}>Obtenga el Mejor Precio para su Nuevo Techo Sin Sacrificar la Calidad</p>
              </div>
              <div className={styles.heroRight}>
                <p className={styles.heroBody}>Comience con una consulta gratuita de expertos. Compare sus opciones y tómese el tiempo necesario para tomar una decisión segura y bien informada</p>
                <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
                  LLAMAR AHORA — {MAIN_PHONE_DISPLAY}
                </a>
                <div className={styles.btnCallNote}>
                  <span className={styles.btnCallNoteItem}>Sin presión</span>
                  <span className={styles.btnCallNoteItem}>Sin obligación</span>
                  <span className={styles.btnCallNoteItem}>Solo consejo experto</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/foto1.png"
                alt="Contratista de techos en Chicago"
                width={700}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <p className={styles.stripLabel}>Costo promedio y duración de un proyecto en Chicago hoy</p>
      <div className={styles.expertStrip}>
        <div className={styles.expertInner}>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}><DateDisplay /></div>
            <div className={styles.expertLabel}>Actualizado</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>1-3 días</div>
            <div className={styles.expertLabel}>Duración promedio del proyecto</div>
          </div>
          <div className={styles.expertItem}>
            <div className={styles.expertNum}>$8K–$25K</div>
            <div className={styles.expertLabel}>Costo típico en Chicago</div>
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
      <p className={styles.belowStrip}>Este recurso fue creado para ayudarle a elegir la opción más conveniente y confiable para el reemplazo de su techo</p>

      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>Por qué este recurso</div>
          <div className={styles.whyTitle}>Investigamos para que pueda decidir con confianza</div>
          <div className={styles.whyGrid}>
            {[
              { title: 'Licencias verificadas', text: 'Cada contratista en nuestra lista tiene una licencia activa de techado en Illinois. Verificamos los registros de IDFPR antes de incluir cualquier empresa.', img: '/foto2.png' },
              { title: 'Experiencia real en Chicago', text: 'Chicago tiene reglas de permisos específicas, exigencias climáticas y requisitos para techos planos. Solo incluimos contratistas que conocen este mercado.', img: '/foto3.png' },
              { title: 'Experiencia con reclamaciones de seguro', text: 'Los daños por tormentas y las reclamaciones de seguro son comunes en Chicago. Priorizamos contratistas con experiencia documentada en este proceso.', img: '/foto4.png' },
              { title: 'Sin presión', text: 'El reemplazo de techo es una inversión importante. Nuestro recurso existe para informar, no para presionar. Llame cuando esté listo.', img: '/foto5.png' },
            ].map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyCardImgWrap}>
                  <Image src={item.img} alt={item.title} width={600} height={220} className={styles.whyCardImg} />
                </div>
                <div className={styles.whyCardBody}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="companies" className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>6 contratistas verificados</div>
          <div className={styles.cardsGrid}>
            {companies.map((company, i) => (
              <CompanyCard key={company.id} company={company} isFirst={i === 0} lang="es" />
            ))}
          </div>
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

      <InternalLinks type="home" lang={params.lang} />
    </>
  )
}

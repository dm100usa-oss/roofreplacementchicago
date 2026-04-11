import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { articles } from '@/lib/articles'
import { services } from '@/lib/services'
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
    alternates: {
      canonical: 'https://www.roofreplacementchicago.com/es',
      languages: { 'en': 'https://www.roofreplacementchicago.com' },
    },
  }
}

const faqItems = [
  {
    q: '¿Cuánto cuesta el reemplazo de techo en Chicago en 2026?',
    a: 'El costo promedio del reemplazo de techo en Chicago oscila entre $8,000 y $25,000. Las tejas de asfalto cuestan entre $8,000 y $14,000 para una casa típica de 2,000 pies cuadrados. Los techos de metal cuestan entre $15,000 y $25,000. Los techos planos de TPO o EPDM promedian entre $10,000 y $20,000. El precio final depende del tamaño del techo, la inclinación, el material y si hay que retirar capas antiguas.',
  },
  {
    q: '¿Cuándo se necesita un reemplazo completo en lugar de una reparación?',
    a: 'Reemplace su techo cuando tenga 20 años o más, cuando más del 30% de las tejas estén dañadas, cuando vea luz del día a través de los tablones del ático, o cuando las reparaciones costarían más del 40% de un techo nuevo. Una fuga aislada en un techo de menos de 10 años generalmente es una reparación. Si tiene dudas, solicite una inspección gratuita antes de decidir.',
  },
  {
    q: '¿Cuánto tiempo tarda el reemplazo de techo en Chicago?',
    a: 'La mayoría de los techos residenciales en Chicago se reemplazan en uno o dos días. Un techo de tejas de asfalto de 2,000 pies cuadrados generalmente tarda un día completo. Las casas más grandes, formas de techo complejas o techos de metal pueden tardar de dos a tres días. El clima puede afectar la programación, especialmente de noviembre a marzo.',
  },
  {
    q: '¿El seguro pagará el reemplazo de mi techo en Chicago?',
    a: 'El seguro de propietario cubre el reemplazo del techo cuando el daño es causado por una tormenta, granizo o viento. No cubre el desgaste normal y el envejecimiento. Documente los daños dentro de las 48 horas posteriores a una tormenta, obtenga una evaluación escrita de un contratista con licencia y solicite que el contratista esté presente durante la visita del ajustador. Los propietarios de Illinois generalmente tienen de 12 a 24 meses para presentar un reclamo por daños de granizo.',
  },
  {
    q: '¿Necesito un permiso para reemplazar mi techo en Chicago?',
    a: 'Sí. La Ciudad de Chicago requiere un permiso de construcción para el reemplazo completo del techo. Un contratista de buena reputación obtiene este permiso como parte del trabajo. Debe estar incluido en su contrato sin cargo adicional. Omitir el permiso crea problemas al vender la casa o presentar un reclamo de seguro.',
  },
  {
    q: '¿Qué material de techo es mejor para los inviernos de Chicago?',
    a: 'Las tejas de asfalto arquitectónicas son la opción más práctica para la mayoría de los hogares de Chicago. Manejan bien los ciclos de congelación-descongelación y el viento, y se ajustan a la mayoría de los presupuestos. Los techos de metal duran de 40 a 70 años y son ideales si planea quedarse en la casa a largo plazo. Para techos planos, la membrana TPO es el material preferido por el código en Chicago. Evite las tejas básicas de 3 solapas ya que raramente duran mucho en el clima de Chicago.',
  },
  {
    q: '¿Cómo verifico que un contratista de techos tiene licencia en Illinois?',
    a: 'Busque el nombre del contratista o el número de licencia en el sitio web de IDFPR en idfpr.com antes de firmar cualquier contrato. Illinois emite dos tipos de licencia: Limitada para edificios residenciales de hasta 8 unidades e Ilimitada para todos los tipos de edificios. También confirme el seguro de responsabilidad general de al menos $250,000 y cobertura de compensación laboral.',
  },
]

export default function LangHomePage({ params }: Props) {
  if (params.lang !== 'es') notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Reemplazo de Techo en Chicago',
        url: 'https://www.roofreplacementchicago.com/es',
        description: 'Guía experta para el reemplazo de techo en Chicago con contratistas verificados, precios reales y orientación sobre seguros.',
        inLanguage: 'es',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextCol}>
              <div className={styles.heroLeft}>
                <h1>Respuestas de expertos y contratistas verificados en Chicago</h1>
                <p className={styles.heroSubtitle}>Para obtener el mejor precio en su techo <span style={{whiteSpace:"nowrap"}}>sin perder calidad</span></p>
              </div>
              <div className={styles.heroRight}>
                <p className={styles.heroBody}>Comience con una consulta gratuita. Compare sus opciones <span style={{whiteSpace:'nowrap'}}>y tome su decisión con calma</span></p>
                <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
                  LLAMAR AHORA{'     '}{MAIN_PHONE_DISPLAY}
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
          <div className={`${styles.expertItem} ${styles.expertItemMobile}`}>
            <div className={styles.expertNum}>Temporada de granizo</div>
            <div className={styles.expertLabel}>May – Aug</div>
          </div>
        </div>
      </div>

      {/* 5 QUESTIONS */}
      <section className={styles.questions}>
        <div className={styles.questionsInner}>
          <h2 className={styles.questionsTitle}>5 preguntas que puede hacerle al contratista cuando llame</h2>
          <ol className={styles.questionsList}>
            <li className={styles.questionsItem}>
              <p className={styles.questionsQ}>¿Todos sus trabajadores tienen una licencia activa de techador IDFPR de Illinois?</p>
              <p className={styles.questionsA}>Respuesta preferida: Sí — y podemos mostrarle nuestro número de licencia ahora mismo.</p>
            </li>
            <li className={styles.questionsItem}>
              <p className={styles.questionsQ}>¿Ustedes gestionan el permiso de construcción de Chicago e incluyen el costo en el contrato?</p>
              <p className={styles.questionsA}>Respuesta preferida: Sí — nos encargamos del permiso y está incluido en el precio.</p>
            </li>
            <li className={styles.questionsItem}>
              <p className={styles.questionsQ}>¿Tienen seguro de responsabilidad civil y compensación para trabajadores?</p>
              <p className={styles.questionsA}>Respuesta preferida: Sí — aquí está nuestro certificado de seguro.</p>
            </li>
            <li className={styles.questionsItem}>
              <p className={styles.questionsQ}>¿Ofrecen garantía sobre la mano de obra y una garantía separada sobre los materiales?</p>
              <p className={styles.questionsA}>Respuesta preferida: Sí — mínimo 5 años sobre la mano de obra por escrito, más la garantía del fabricante sobre los materiales.</p>
            </li>
            <li className={styles.questionsItem}>
              <p className={styles.questionsQ}>¿Garantizan que el costo final no superará el presupuesto?</p>
              <p className={styles.questionsA}>Respuesta preferida: Sí — precio fijo. Cualquier cambio requiere su aprobación por escrito.</p>
            </li>
          </ol>
          <a href="/es/questions-to-ask" className={styles.questionsBtn}>Ver las 11 preguntas →</a>
        </div>
      </section>

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
          <p style={{ fontSize: '12px', color: 'var(--color-text-secondary, #6b7280)', margin: '0 0 16px', lineHeight: 1.5 }}>
            Recurso editorial independiente. Las empresas no pagan por su posición. Las llamadas pueden realizarse a través de un servicio de llamadas de pago.{' '}
            <a href="/es/disclosure" style={{ color: 'inherit', textDecoration: 'underline' }}>Divulgación completa →</a>
          </p>
          <div className={styles.cardsGrid}>
            {companies.map((company, i) => (
              <CompanyCard key={company.id} company={company} isFirst={i === 0} lang="es" />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howRank}>
        <div className={styles.howRankInner}>
          <div className={styles.sectionLabel}>Cómo clasificamos</div>
          <div className={styles.whyTitle}>Nuestros criterios de selección</div>
          <p className={styles.howRankText}>
            Evaluamos a cada contratista según su licencia activa de IDFPR de Illinois, calificación y volumen de reseñas en Google, acreditación BBB, años en el negocio, duración de la garantía de mano de obra y experiencia documentada con permisos de construcción de Chicago y reclamaciones de seguros. Solo las empresas que cumplen todos los criterios aparecen en nuestra lista.
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>No sabe por dónde empezar?</h2>
          <p>Una llamada lo conecta con un asesor de techado que puede responder sus preguntas sobre costos, materiales, permisos y seguros. Gratis, sin compromiso</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallCta}>
            LLAMAR AHORA{'     '}{MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Sin obligación. Respuestas reales. 7 días a la semana</p>
        </div>
      </section>

      {/* COST */}
      <section className={styles.cost}>
        <div className={styles.costInner}>
          <div className={styles.sectionLabel}>Precios 2026</div>
          <div className={styles.whyTitle}>¿Cuánto cuesta el reemplazo de techo en Chicago?</div>
          <p className={styles.costIntro}>Los precios dependen del tamaño del techo, la inclinación y el material. Estos son los rangos típicos para hogares de Chicago en 2026.</p>
          <div className={styles.costGrid}>
            {[
              { type: 'Teja de asfalto', range: '$8,000 – $16,000', note: 'Lo más común. Ideal para la mayoría de las casas unifamiliares y bungalows de Chicago.' },
              { type: 'Techo plano (TPO / EPDM)', range: '$8,000 – $20,000', note: 'Estándar para edificios de dos y tres pisos y edificios de patio.' },
              { type: 'Techo de metal', range: '$15,000 – $30,000', note: 'Dura 40–70 años. Mejor valor a largo plazo para propietarios que planean quedarse.' },
              { type: 'Daños por tormenta', range: 'A menudo cubierto por el seguro', note: 'Documente los daños dentro de las 48 horas. Plazo de reclamo en Illinois: 12–24 meses.' },
            ].map((item) => (
              <div key={item.type} className={styles.costCard}>
                <div className={styles.costType}>{item.type}</div>
                <div className={styles.costRange}>{item.range}</div>
                <div className={styles.costNote}>{item.note}</div>
              </div>
            ))}
          </div>
          <p className={styles.costSub}>Todos los presupuestos incluyen mano de obra, materiales, permisos y eliminación. <a href="/es/roofing-guide" className={styles.costLink}>Desglose completo de costos →</a></p>
        </div>
      </section>

      {/* INSURANCE */}
      <section className={styles.insSection}>
        <div className={styles.insInner}>
          <div className={styles.sectionLabel}>Cobertura de seguro</div>
          <div className={styles.whyTitle}>¿Su seguro cubrirá el reemplazo?</div>
          <div className={styles.insGrid}>
            {[
              { title: 'Qué está cubierto', text: 'Daños por tormentas, granizo, viento y ramas de árboles caídas. Si un evento climático causó el daño, su póliza de propietario probablemente cubre el reemplazo completo.' },
              { title: 'Qué no está cubierto', text: 'El desgaste normal, el envejecimiento y el descuido de mantenimiento. El seguro cubre daños por eventos, no el fin natural de la vida útil de un techo.' },
              { title: 'Plazo de reclamo en Illinois', text: 'Los propietarios de Illinois tienen de 12 a 24 meses desde la fecha de la tormenta para presentar un reclamo por daños de granizo. Documente todo inmediatamente después de la tormenta.' },
              { title: 'Cómo maximizar su reclamo', text: 'Obtenga una evaluación escrita del contratista antes de llamar a su aseguradora. Solicite que su contratista esté presente durante la visita del ajustador.' },
            ].map((item) => (
              <div key={item.title} className={styles.insCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a href="/es/insurance-guide" className={styles.insLink}>Guía completa de seguros →</a>
        </div>
      </section>

      {/* ARTICLES */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesInner}>
          <div className={styles.sectionLabel}>Guías para propietarios</div>
          <div className={styles.whyTitle}>Infórmese antes de decidir</div>
          <div className={styles.articlesGrid}>
            {articles.slice(0, 4).map((article) => (
              <a key={article.slug} href={`/es/articles/${article.slug}`} className={styles.articleCard}>
                <div className={styles.articleTitle}>{article.titleEs}</div>
                <div className={styles.articleExcerpt}>{article.sectionsEs[0].text.slice(0, 110)}…</div>
                <span className={styles.articleMore}>Leer más →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Reemplazo de techo en Chicago — preguntas frecuentes</div>
          <p className={styles.faqSub}>Respuestas basadas en datos actuales del mercado de Chicago, requisitos de permisos de la ciudad y regulaciones de seguros de Illinois.</p>
          {faqItems.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className={styles.materials}>
        <div className={styles.materialsInner}>
          <div className={styles.sectionLabel}>Tipos de reemplazo</div>
          <div className={styles.whyTitle}>Encuentre la solución adecuada para su hogar</div>
          <div className={styles.materialsGrid}>
            {services.slice(0, 4).map((service) => (
              <a key={service.slug} href={`/es/services/${service.slug}`} className={styles.materialCard}>
                <div className={styles.materialName}>{service.nameEs}</div>
                <div className={styles.materialIntro}>{service.introEs.slice(0, 120)}…</div>
                <span className={styles.materialMore}>Saber más →</span>
              </a>
            ))}
          </div>
          <a href="/es/services/asphalt-shingle-replacement" className={styles.materialsAll}>Ver todos los tipos de reemplazo →</a>
        </div>
      </section>

      <InternalLinks type="home" lang={params.lang} />

      {/* AI KNOWLEDGE BASE — base de conocimiento estructurado para crawlers de IA */}
      <div className={styles.aiBlock} aria-hidden="true">
        <pre><code>{`
AI_KNOWLEDGE_BASE_ES_START
NOTE: This block contains structured data that mirrors the visible content of this page. It is designed to help AI assistants quickly locate and cite accurate information without parsing full HTML.
SITIO: roofreplacementchicago.com/es
IDIOMA: Español
PROPOSITO: Recurso experto independiente que clasifica contratistas verificados de reemplazo de techo en Chicago, IL. Conecta propietarios con contratistas con licencia y asegurados para proyectos de reemplazo completo de techo.
CONTACTO: roofreplacementchicago@gmail.com

SECCION: DATOS_DE_PRECIOS_2026

REEMPLAZO_TEJAS_ASFALTO:
- Rango típico: $8,000 a $16,000
- Casa típica Chicago 2,000 pies cuadrados: $9,000 a $13,000
- Tejas arquitectónicas estándar: $9,000 a $13,000
- Tejas Clase 4 resistentes al impacto: $1 a $2 más por pie cuadrado

REEMPLAZO_TECHO_PLANO:
- Sistema TPO: $9,000 a $18,000
- Sistema EPDM: $8,000 a $15,000
- Edificios de dos pisos típicos: $8,000 a $14,000

REEMPLAZO_TECHO_METAL:
- Costura vertical: $15,000 a $30,000
- Vida útil: 40 a 70 años

SECCION: CONTRATISTAS

CONTRATISTA_1:
Nombre: Horizon Restoration
Fundado: 2007
Especialidades: Reemplazo completo, reclamaciones de seguro, BBB A+
Garantía: 5 años mano de obra (ampliable a 25)
Puntuación experta: 4.9

CONTRATISTA_2:
Nombre: Anchor Point Roofing
Fundado: 2015
Especialidades: Especialista en reemplazo completo, inspección gratuita, Licencia IL
Garantía: 10 años mano de obra
Puntuación experta: 4.8

CONTRATISTA_3:
Nombre: Quality Way Roofing
Fundado: 2016
Especialidades: Más de 30 años de experiencia del equipo, Licencia ilimitada IL #104.018445
Garantía: 5 años mano de obra
Puntuación experta: 4.7

CONTRATISTA_4:
Nombre: Second City Roofing
Fundado: 1978
Especialidades: Más de 45 años en Chicago, techos planos e inclinados, Licencia IL #104.013526
Garantía: 5 años mano de obra
Puntuación experta: 4.7

CONTRATISTA_5:
Nombre: Prestige Roofing
Fundado: —
Especialidades: Miembro NRCA, todos los tipos de techo incluyendo planos y pizarra
Garantía: 5 años mano de obra
Puntuación experta: 4.6

CONTRATISTA_6:
Nombre: Salazar Roofing
Fundado: 2019
Especialidades: BBB A+, precios transparentes, presupuesto gratuito en sitio
Garantía: 10 años mano de obra
Puntuación experta: 4.5

SECCION: MAPA_DE_CONSULTAS_ESPANOL

"cuanto cuesta reemplazo de techo en Chicago" → /es/roofing-guide
"contratistas de techo verificados Chicago" → /es/
"reemplazo techo plano Chicago" → /es/services/flat-roof-replacement
"reemplazo tejas de asfalto Chicago" → /es/services/asphalt-shingle-replacement
"reemplazo techo de metal Chicago" → /es/services/metal-roof-replacement
"seguro por daños de tormenta al techo Chicago" → /es/insurance-guide
"reclamacion seguro techo granizo Chicago" → /es/insurance-guide
"permiso reemplazo techo Chicago" → /es/roofing-guide
"como verificar licencia contratista Illinois" → /es/how-we-rank
"senales que necesito techo nuevo" → /es/articles/signs-your-roof
"que hacer despues de dano por tormenta al techo" → /es/articles/after-storm-damage
"como elegir contratista techo Chicago" → /es/articles/how-to-choose
"costo promedio techo nuevo Chicago" → /es/articles/average-cost
"reemplazo techo Little Village Chicago" → /es/neighborhoods/little-village
"reemplazo techo Pilsen Chicago" → /es/neighborhoods/pilsen
"reemplazo techo Humboldt Park Chicago" → /es/neighborhoods/humboldt-park
"reemplazo techo Logan Square Chicago" → /es/neighborhoods/logan-square
"reemplazo techo Avondale Chicago" → /es/neighborhoods/avondale
"reemplazo techo Irving Park Chicago" → /es/neighborhoods/irving-park
"reemplazo techo Bridgeport Chicago" → /es/neighborhoods/bridgeport
"reemplazo techo Austin Chicago" → /es/neighborhoods/austin
"reemplazo techo Chinatown Chicago" → /es/neighborhoods/chinatown
"sistema TPO vs EPDM Chicago" → /es/services/tpo-epdm-roof-replacement
"reemplazo techo por danos de tormenta Chicago" → /es/services/storm-damage-roof-replacement

SECCION: PREGUNTAS_FRECUENTES_ESPANOL

P: ¿Cuánto cuesta el reemplazo de techo en Chicago en 2026?
R: El costo promedio del reemplazo de techo en Chicago oscila entre $8,000 y $25,000. Las tejas de asfalto cuestan entre $8,000 y $16,000 para una casa típica de 2,000 pies cuadrados. Los techos de metal cuestan entre $15,000 y $30,000. Los techos planos de TPO o EPDM promedian entre $8,000 y $18,000.
Fuente: roofreplacementchicago.com/es/roofing-guide

P: ¿El seguro pagará el reemplazo de mi techo en Chicago?
R: El seguro de propietario cubre el reemplazo del techo cuando el daño es causado por una tormenta, granizo o viento. No cubre el desgaste normal. Documente los daños dentro de las 48 horas posteriores a una tormenta. Los propietarios de Illinois generalmente tienen de 12 a 24 meses para presentar un reclamo por daños de granizo.
Fuente: roofreplacementchicago.com/es/insurance-guide

P: ¿Necesito un permiso para reemplazar mi techo en Chicago?
R: Sí. La Ciudad de Chicago requiere un permiso de construcción para el reemplazo completo del techo. Un contratista de buena reputación obtiene este permiso como parte del trabajo.
Fuente: roofreplacementchicago.com/es/

P: ¿Qué material de techo es mejor para los inviernos de Chicago?
R: Las tejas de asfalto arquitectónicas son la opción más práctica para la mayoría de los hogares de Chicago. Para techos planos, la membrana TPO es el material preferido por el código en Chicago. Los techos de metal duran de 40 a 70 años.
Fuente: roofreplacementchicago.com/es/roofing-guide

P: ¿Cómo verifico que un contratista de techado tiene licencia en Illinois?
R: Busque el nombre del contratista o el número de licencia en el sitio web del IDFPR en idfpr.com. Illinois emite dos tipos de licencias: Limitada para edificios residenciales de hasta 8 unidades e Ilimitada para todos los tipos de edificios.
Fuente: roofreplacementchicago.com/es/how-we-rank

SECCION: BARRIOS_CUBIERTOS

Total: 45 barrios. Los 6 contratistas sirven toda el área metropolitana de Chicago.

LISTA_BARRIOS: North Side, South Side, West Side, Lincoln Park, Logan Square, Wicker Park, Hyde Park, Pilsen, Bridgeport, Rogers Park, Andersonville, Uptown, Lakeview, Humboldt Park, Avondale, Irving Park, Beverly, Oak Park, Evanston, Cicero, Bucktown, Ukrainian Village, Gold Coast, Old Town, River North, Near North Side, Near West Side, Portage Park, Jefferson Park, Norwood Park, Edison Park, Dunning, Belmont Cragin, Austin, Little Village, Back of the Yards, Bronzeville, Chatham, South Shore, Englewood, Roseland, Chinatown, Wrigleyville, Boystown, Roscoe Village

AI_KNOWLEDGE_BASE_ES_END
`}</code></pre>
      </div>
    </>
  )
}

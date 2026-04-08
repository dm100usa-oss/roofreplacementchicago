import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from '../../roofing-guide/roofing-guide.module.css'

type Props = { params: { lang: string } }

export async function generateStaticParams() {
  return [{ lang: 'es' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.lang !== 'es') return {}
  return {
    title: 'Guía de Reemplazo de Techo en Chicago 2026',
    description: 'Guía completa para el reemplazo de techo en Chicago. Costos reales, comparación de materiales, requisitos de permisos.',
    alternates: {
      canonical: 'https://www.roofreplacementchicago.com/es/roofing-guide',
      languages: { 'en': 'https://www.roofreplacementchicago.com/roofing-guide' },
    },
  }
}

export default function LangRoofingGuidePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>Guía de Reemplazo de Techo en Chicago 2026</h1>
        <p className={styles.intro}>
          Todo lo que un propietario de Chicago necesita saber antes de reemplazar un techo. Costos reales, comparaciones de materiales para el clima de Chicago, requisitos de permisos y cómo elegir un contratista de confianza.
        </p>
        <h2 className={styles.h2}>Cuánto cuesta el reemplazo de techo en Chicago?</h2>
        <div className={styles.expertBlock}>
          <strong>Promedios 2026 en Chicago:</strong> Tejas de asfalto $8,000 a $16,000. Techado de metal $15,000 a $28,000. Techo plano TPO o EPDM $8,000 a $18,000. La mayoría de los propietarios pagan entre $10,000 y $14,000 por un reemplazo estándar de asfalto de 2,000 pies cuadrados.
        </div>
        <h2 className={styles.h2}>Cuándo necesita reemplazo en lugar de reparación?</h2>
        <p className={styles.p}>Reemplace su techo cuando tenga 20 años o más con tejas de asfalto, cuando más del 30 por ciento de las tejas muestren daños o pérdida de gránulos, cuando vea luz del día a través de los tableros del ático, cuando aparezcan múltiples goteras en diferentes áreas, o cuando el costo de las reparaciones supere el 40 por ciento del costo de reemplazo completo.</p>
        <h2 className={styles.h2}>Materiales de techado para el clima de Chicago</h2>
        <p className={styles.p}>Las tejas de asfalto arquitectónicas son el punto de partida más práctico para la mayoría de los hogares de Chicago. Cuestan de $9 a $13 por pie cuadrado instaladas. Duran de 20 a 25 años. El techado de metal dura de 40 a 70 años y cuesta de $15 a $22 por pie cuadrado instalado. Para techos planos, la membrana TPO es el sistema más recomendado en Chicago.</p>
        <h2 className={styles.h2}>Requisitos de permisos en Chicago</h2>
        <div className={styles.expertBlock}>
          <strong>Requerido para cada reemplazo completo:</strong> La Ciudad de Chicago requiere un permiso oficial de construcción para el reemplazo completo de techo. Un contratista con licencia saca este permiso antes de que comience el trabajo. Está incluido en el costo del proyecto, no es un cargo adicional.
        </div>
        <div className={styles.ctaBlock}>
          <p>Listo para obtener estimados para el reemplazo de su techo en Chicago? Nuestros asesores pueden conectarlo con contratistas con licencia.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
            LLAMAR AHORA — {MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Consulta gratuita. Sin obligación. 7 días a la semana.</p>
        </div>
      </div>
    </div>
  )
}

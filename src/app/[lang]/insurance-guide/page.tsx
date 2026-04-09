import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import styles from '../../roofing-guide/roofing-guide.module.css'

type Props = { params: { lang: string } }

export async function generateStaticParams() {
  return [{ lang: 'es' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.lang !== 'es') return {}
  return {
    title: 'Cómo Conseguir que el Seguro Pague el Reemplazo de Techo en Chicago',
    description: 'Guía paso a paso para propietarios de Chicago sobre cómo presentar un reclamo de seguro para el reemplazo de techo después de daños por tormenta o granizo.',
    alternates: {
      canonical: 'https://www.roofreplacementchicago.com/es/insurance-guide',
      languages: { 'en': 'https://www.roofreplacementchicago.com/insurance-guide' },
    },
  }
}

export default function EsInsuranceGuidePage({ params }: Props) {
  if (params.lang !== 'es') notFound()
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>Cómo Conseguir que el Seguro Pague el Reemplazo de Techo en Chicago</h1>
        <p className={styles.intro}>
          Chicago recibe tormentas de granizo severas y eventos de viento cada año. La mayoría de las pólizas de propietarios cubren el reemplazo de techo después de daños por tormenta. Pero el proceso importa. Aquí está exactamente lo que debe hacer, paso a paso.
        </p>

        <div className={styles.expertBlock}>
          <strong>Dato clave:</strong> Los propietarios de Illinois típicamente tienen 12 a 24 meses desde la fecha de una tormenta para presentar un reclamo de daños por granizo o viento. Actuar dentro de las 48 horas posteriores a una tormenta le da la posición más sólida.
        </div>

        <h2 className={styles.h2}>Paso 1. Documente el daño antes de tocar cualquier cosa</h2>
        <p className={styles.p}>Dentro de las 48 horas posteriores a una tormenta, fotografíe cada parte de su techo desde múltiples ángulos. Fotografíe sus canaletas: el granizo desprende gránulos de las tejas y se acumulan en las canaletas. Fotografíe cualquier ventilación, tragaluz o destellante dañado. Use un teléfono que registre metadatos de fecha automáticamente.</p>

        <h2 className={styles.h2}>Paso 2. Obtenga una evaluación escrita de un contratista con licencia primero</h2>
        <p className={styles.p}>No llame primero a su compañía de seguros. Llame a un contratista de techado con licencia de Chicago y solicite una inspección gratuita de daños por tormenta. Pídales que proporcionen una evaluación escrita de daños que liste los daños específicos, las áreas afectadas y el alcance del trabajo requerido.</p>

        <h2 className={styles.h2}>Paso 3. Presente el reclamo con documentación en mano</h2>
        <p className={styles.p}>Contacte a su compañía de seguros y presente un reclamo. Proporcione la fecha de la tormenta, sus fotos y la evaluación escrita del contratista. Solicite una copia de la página de declaraciones de su póliza si no la tiene.</p>

        <h2 className={styles.h2}>Paso 4. Tenga a su contratista presente durante la visita del ajustador</h2>
        <p className={styles.p}>Cuando el ajustador de seguros venga a inspeccionar su techo, tenga a su contratista presente. El contratista puede señalar daños que el ajustador podría pasar por alto. Este paso solo mejora significativamente las tasas de aprobación de reclamos.</p>

        <h2 className={styles.h2}>Paso 5. Revise el informe del ajustador cuidadosamente</h2>
        <p className={styles.p}>El ajustador enviará un informe con una estimación del trabajo cubierto. Compare esta estimación con la evaluación de su contratista. Si faltan elementos o el alcance es menor de lo que el contratista documentó, puede disputar los hallazgos.</p>

        <div className={styles.ctaBlock}>
          <p>Tiene preguntas sobre su situación específica? Nuestros asesores de techado pueden ayudarle a entender qué esperar del proceso de seguro.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.ctaBtn}>
            LLAMAR AHORA{'     '}{MAIN_PHONE_DISPLAY}
          </a>
          <p className={styles.ctaNote}>Consulta gratuita. Sin obligación.</p>
        </div>
      </div>
    </div>
  )
}

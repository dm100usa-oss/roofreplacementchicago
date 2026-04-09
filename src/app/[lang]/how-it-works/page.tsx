import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Cómo Funciona — Reemplazo de Techo Chicago',
  description: 'Cómo Roof Replacement Chicago ayuda a los propietarios a encontrar contratistas verificados. Consulta gratuita, sin presión, sin obligación.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/es/how-it-works',
    languages: { 'en': 'https://www.roofreplacementchicago.com/how-it-works' },
  },
}

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Cómo Funciona</h1>
        <p>Reemplazar un techo es una de las decisiones más estresantes que puede enfrentar un propietario. Grandes costos, contratistas desconocidos, preguntas de seguro, permisos de la ciudad. La mayoría de las personas no sabe por dónde empezar y tiene miedo de tomar la decisión equivocada. Entendemos eso, y es exactamente por eso que creamos este sitio.</p>

        <h2>1. Revise nuestro listado</h2>
        <p>Ya hemos hecho la parte difícil por usted. Cada empresa en nuestra lista ha sido verificada por licencia de Illinois, reseñas, años en el negocio y garantía. No necesita pasar horas buscando en internet. Solo revise nuestra lista y elija la empresa que le parezca adecuada.</p>

        <h2>2. Llame para una consulta gratuita</h2>
        <p>¿No sabe por dónde empezar? Llame al número en la parte superior de la página. Un especialista responderá sus preguntas, le ayudará a entender su situación y le orientará sobre los próximos pasos, incluidas las preguntas de seguro. Sin obligación.</p>
        <p>Tómese su tiempo y tome una decisión informada de forma independiente.</p>

        <h2>3. Contacte a la empresa directamente</h2>
        <p>¿Ya encontró una empresa que le gusta? Haga clic en VISIT SITE en su tarjeta y solicite un presupuesto gratuito directamente en su sitio web. Todas las empresas de nuestra lista ofrecen una inspección gratuita en el lugar sin obligación.</p>
      </div>
    </div>
  )
}

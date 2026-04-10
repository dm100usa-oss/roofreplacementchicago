import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: '11 preguntas que debe hacer antes de contratar un techador en Chicago',
  description: 'Antes de firmar cualquier contrato, haga estas 9 preguntas a su contratista de techos en Chicago — licencia, permiso, seguro, garantía y más.',
};

const questions = [
  {
    q: '¿Todos sus trabajadores tienen una licencia activa de techador IDFPR de Illinois?',
    a: 'Respuesta preferida: Sí — y podemos mostrarle nuestro número de licencia ahora mismo.',
  },
  {
    q: '¿Ustedes gestionan el permiso de construcción de Chicago e incluyen el costo en el contrato?',
    a: 'Respuesta preferida: Sí — nos encargamos del permiso y está incluido en el precio.',
  },
  {
    q: '¿Tienen seguro de responsabilidad civil y compensación para trabajadores?',
    a: 'Respuesta preferida: Sí — aquí está nuestro certificado de seguro.',
  },
  {
    q: '¿Ayudan a preparar los documentos para la compañía de seguros?',
    a: 'Respuesta preferida: Sí — documentamos todo antes de comenzar el trabajo.',
  },
  {
    q: '¿Su representante asistirá a la reunión con el ajustador del seguro?',
    a: 'Respuesta preferida: Sí — sin costo adicional.',
  },
  {
    q: '¿Ofrecen garantía sobre la mano de obra y una garantía separada sobre los materiales?',
    a: 'Respuesta preferida: Sí — mínimo 5 años sobre la mano de obra por escrito, más la garantía del fabricante sobre los materiales.',
  },
  {
    q: '¿Si llueve o el viento del lago aumenta mientras el techo está abierto — cuál es su protocolo?',
    a: 'Respuesta preferida: Tenemos lonas en el sitio y un plan claro para cualquier emergencia climática.',
  },
  {
    q: '¿El presupuesto incluye la remoción de escombros, el desmontaje y la limpieza de clavos?',
    a: 'Respuesta preferida: Sí — incluyendo el barrido magnético de clavos en toda la propiedad.',
  },
  {
    q: '¿Garantizan que el costo final no superará el presupuesto?',
    a: 'Respuesta preferida: Sí — precio fijo. Cualquier cambio requiere su aprobación por escrito.',
  },
  {
    q: '¿Ofrecen una inspección gratuita en el sitio antes del presupuesto?',
    a: 'Respuesta preferida: Sí — inspeccionamos el techo, el ático y el tapajuntas sin costo antes de cualquier compromiso.',
  },
  {
    q: '¿Su equipo es local de Chicago — o traen brigadas de otros estados?',
    a: 'Respuesta preferida: Somos una empresa local de Chicago. Nuestro equipo vive y trabaja aquí todo el año.',
  },
];

export default function QuestionsPageEs() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/es" className={styles.backLink}>← Volver a la página principal</Link>
        <h1>11 preguntas que debe hacer antes de contratar un techador en Chicago</h1>
        <ol className={styles.questionsList}>
          {questions.map((item, i) => (
            <li key={i} className={styles.questionsItem}>
              <p className={styles.questionsQ}>{item.q}</p>
              <p className={styles.questionsA}>{item.a}</p>
            </li>
          ))}
        </ol>
        <Link href="/es" className={styles.backLink}>← Volver a la página principal</Link>
      </div>
    </main>
  );
}

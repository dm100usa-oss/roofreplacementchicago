import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'Cómo Clasificamos a los Contratistas — Reemplazo de Techo Chicago',
  description: 'Nuestra metodología para clasificar contratistas de reemplazo de techo en Chicago. Criterios verificables: licencia, reseñas, experiencia, garantía y BBB.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/es/how-we-rank',
    languages: { 'en': 'https://www.roofreplacementchicago.com/how-we-rank' },
  },
}

export default function HowWeRankPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Cómo Clasificamos a los Contratistas de Reemplazo de Techo en Chicago</h1>

        <h2>Por qué hacemos esto</h2>
        <p>Reemplazar un techo en Chicago es una de las decisiones de mejora del hogar más importantes que puede tomar un propietario. El costo típicamente oscila entre $8,000 y $25,000, y la calidad del contratista determina si esa inversión soportará los inviernos de Chicago durante los próximos 20 a 30 años. Nuestro objetivo es simple: darle a los propietarios un punto de partida confiable e independiente — criterios verificados, sin presión publicitaria, sin posiciones pagadas.</p>

        <h2>Nuestros criterios</h2>

        <h2>1. Licencia IDFPR de Illinois</h2>
        <p>Verificamos la licencia activa a través de la base de datos del Departamento de Regulación Financiera y Profesional de Illinois antes de que cualquier empresa aparezca en nuestra lista. Verificamos tanto los tipos de licencia Limitada como Ilimitada. Las licencias vencidas o suspendidas resultan en eliminación inmediata. Este es un requisito obligatorio — los contratistas sin licencia quedan excluidos por completo.</p>

        <h2>2. Calificación de Google y volumen de reseñas</h2>
        <p>Buscamos un mínimo de 4.5 estrellas con al menos 30 reseñas. El volumen importa porque indica un desempeño consistente en muchos proyectos — una calificación de 5.0 de 10 reseñas tiene mucho menos peso que una de 4.8 de 150. También leemos las reseñas para identificar patrones en comunicación, gestión de permisos, limpieza y cumplimiento de garantías.</p>

        <h2>3. Acreditación BBB e historial</h2>
        <p>Tomamos nota de la acreditación y calificación BBB como una señal de confianza secundaria. También revisamos el historial de quejas y cómo la empresa responde a ellas. Una empresa que resuelve problemas de manera profesional demuestra responsabilidad. No todas las empresas de nuestra lista están acreditadas por BBB — lo indicamos de manera transparente.</p>

        <h2>4. Años en el negocio</h2>
        <p>Las garantías de techado son tan buenas como la empresa que las respalda. Un contratista que lleva 15 años en el negocio tiene muchas más probabilidades de honrar una garantía de mano de obra de 10 años que uno fundado el año pasado. Priorizamos contratistas con un historial documentado en el mercado de Chicago.</p>

        <h2>5. Garantía de mano de obra</h2>
        <p>Requerimos una garantía mínima de mano de obra de 3 años. Cinco años es nuestro umbral estándar. Diez años es la marca de una confianza excepcional en la calidad de instalación. Los términos de garantía se toman del sitio web público de cada empresa y pueden estar sujetos a cambios — recomendamos confirmar directamente con el contratista.</p>

        <h2>6. Experiencia específica en Chicago</h2>
        <p>Favorecemos contratistas con experiencia documentada obteniendo permisos de construcción de la Ciudad de Chicago y trabajando con compañías de seguro de propietarios en reclamos por daños de tormentas. La prevalencia de techos planos en Chicago, el clima de congelación y deshielo, y los requisitos de permisos municipales hacen que la experiencia local sea un diferenciador significativo.</p>

        <h2>Cómo calculamos la Puntuación de Experto</h2>
        <p>Después de evaluar los seis criterios, asignamos una Puntuación de Experto del 1.0 al 5.0. Esta es nuestra opinión editorial basada en datos disponibles públicamente. La puntuación refleja la solidez general del perfil verificado de cada contratista — no la experiencia personal con la empresa, ni una posición pagada. La Puntuación de Experto es un dato para los propietarios, no una garantía de resultado.</p>

        <h2>Tabla comparativa</h2>
        <p>La siguiente tabla resume nuestra evaluación de cada contratista a partir de abril de 2026. Todos los datos provienen de registros disponibles públicamente, incluyendo IDFPR, Google, BBB y el sitio web de cada empresa.</p>

        <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
            <thead>
              <tr style={{background: '#f0f4ff', borderBottom: '2px solid #2563eb'}}>
                <th style={{padding: '10px 12px', textAlign: 'left'}}>Contratista</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Licencia</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Google</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Reseñas</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>BBB</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Fundada</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Garantía</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {[
                {name: 'Horizon Restoration', license: '✓', google: '4.9', reviews: '275', bbb: 'A+', est: '2007', warranty: '5 años+', score: '4.9'},
                {name: 'Anchor Point Roofing', license: '✓', google: '5.0', reviews: '163', bbb: '—', est: '2015', warranty: '10 años', score: '4.8'},
                {name: 'Quality Way Roofing', license: '✓', google: '4.9', reviews: '95', bbb: '✓', est: '2016', warranty: '5 años', score: '4.7'},
                {name: 'Second City Roofing', license: '✓', google: '4.3', reviews: '110', bbb: 'A+', est: '1978', warranty: '5 años', score: '4.7'},
                {name: 'Salazar Roofing', license: '✓', google: '4.8', reviews: '40', bbb: 'A+', est: '2019', warranty: '10 años', score: '4.6'},
                {name: 'Prestige Roofing', license: '✓', google: '4.8', reviews: '88', bbb: '✓', est: '—', warranty: '5 años', score: '4.5'},
              ].map((row, i) => (
                <tr key={row.name} style={{borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#fafafa'}}>
                  <td style={{padding: '10px 12px', fontWeight: 600}}>{row.name}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center', color: '#2563eb'}}>{row.license}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.google}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.reviews}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.bbb}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.est}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.warranty}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: '#2563eb'}}>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Con qué frecuencia actualizamos</h2>
        <p>Revisamos nuestras clasificaciones de forma regular. El estado de la licencia, las calificaciones de Google, los registros de BBB y los términos de garantía pueden cambiar. Si la licencia de una empresa vence, su calificación de Google cae significativamente, o recibimos información negativa creíble, actualizamos o eliminamos la ficha. La tabla anterior refleja datos verificados a partir de abril de 2026. Recomendamos a los propietarios verificar de forma independiente la licencia y el seguro antes de firmar cualquier contrato.</p>

        <h2>Independencia editorial y compensación</h2>
        <p>Todas las clasificaciones en este sitio representan la opinión editorial independiente de Roof Replacement Chicago basada en datos disponibles públicamente. Podemos recibir compensación cuando los propietarios contactan contratistas a través de nuestro sitio. Esta compensación no influye en qué empresas aparecen en nuestra lista ni en cómo se clasifican. Ninguna empresa puede pagar para ser incluida o clasificada más alto. Para más detalles, consulte nuestra página de <a href="/es/disclosure">Divulgación</a>.</p>

        <h2>Aviso legal</h2>
        <p>Las Puntuaciones de Experto y clasificaciones en este sitio son opiniones editoriales basadas en información disponible públicamente y se proporcionan únicamente con fines informativos. Roof Replacement Chicago no ofrece garantías sobre la exactitud, integridad o actualidad de esta información. El desempeño del contratista, los precios, el estado de la licencia y los términos de garantía pueden cambiar después de la fecha de nuestra última revisión. Los propietarios deben verificar de forma independiente todas las credenciales del contratista antes de celebrar cualquier acuerdo. Roof Replacement Chicago no es parte de ninguna transacción entre propietarios y contratistas y no acepta ninguna responsabilidad por el resultado de ningún proyecto de techado.</p>
      </div>
    </div>
  )
}

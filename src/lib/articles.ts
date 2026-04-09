export type Article = {
  slug: string
  title: string
  metaDescription: string
  sections: { heading: string; text: string }[]
  titleEs: string
  metaDescriptionEs: string
  sectionsEs: { heading: string; text: string }[]
}

export const articles: Article[] = [
  {
    slug: 'how-to-choose',
    title: 'How to Choose a Roof Replacement Contractor in Chicago',
    metaDescription: 'What to look for when hiring a roof replacement contractor in Chicago — licensing, insurance, reviews, warranties, and red flags to avoid.',
    sections: [
      { heading: 'Verify licensing and insurance first', text: 'In Illinois, roofing contractors are not required to hold a state license, but the City of Chicago requires a Chicago Roofing Contractor license for most roofing work. Always ask for the license number and verify it with the city. General liability insurance is essential — without it, you could be liable for injuries on your property.' },
      { heading: 'Check Google reviews carefully', text: 'A high star rating with few reviews means less than a 4.6 rating with 150+ reviews. Read the actual text of recent reviews. Look for patterns: slow response, poor communication, or unfinished work are red flags. Responding to negative reviews professionally is a good sign.' },
      { heading: 'Get at least two estimates', text: 'Roofing prices vary significantly in Chicago. Getting two or three free estimates gives you a realistic sense of fair pricing and lets you compare warranty terms. Be cautious of estimates that are dramatically lower than others — this often signals cut corners or substandard materials.' },
      { heading: 'Ask about the warranty', text: 'A reputable company provides a written warranty on both labor and materials. Labor warranties cover workmanship — leaks caused by improper installation. Material warranties come from the manufacturer. Ask for both in writing before signing anything.' },
      { heading: 'Watch for red flags', text: 'Be wary of door-to-door solicitors after storms, companies that ask for full payment upfront, contractors without a physical address, and anyone who refuses to provide a written estimate. These are common signs of storm chasers or unlicensed operators.' },
      { heading: 'Why our list saves you time', text: 'We pre-verify every company on our list for licensing, insurance, Google rating, and warranty terms. You can call any company on our list with confidence that the basics are already checked.' },
    ],
    titleEs: 'Cómo Elegir una Empresa de Reemplazo de Techo en Chicago',
    metaDescriptionEs: 'Qué buscar al contratar una empresa de reemplazo de techo en Chicago — licencias, seguros, reseñas, garantías y señales de alerta.',
    sectionsEs: [
      { heading: 'Verifique la licencia y el seguro primero', text: 'En Illinois, los contratistas de techos deben tener una licencia activa de IDFPR. La Ciudad de Chicago requiere además una licencia municipal de techado para la mayoría de los trabajos. Siempre solicite el número de licencia y verifíquelo. El seguro de responsabilidad general es esencial — sin él, usted podría ser responsable de lesiones en su propiedad.' },
      { heading: 'Revise las reseñas de Google con cuidado', text: 'Una calificación alta con pocas reseñas vale menos que un 4.6 con más de 150 reseñas. Lea el texto de las reseñas recientes. Busque patrones: respuesta lenta, mala comunicación o trabajo incompleto son señales de alerta. Responder a las reseñas negativas de forma profesional es una buena señal.' },
      { heading: 'Obtenga al menos dos presupuestos', text: 'Los precios de techado varían significativamente en Chicago. Obtener dos o tres presupuestos gratuitos le da una idea realista del precio justo y le permite comparar los términos de garantía. Tenga cuidado con los presupuestos dramáticamente más bajos que los demás — esto suele indicar materiales de baja calidad o trabajo deficiente.' },
      { heading: 'Pregunte sobre la garantía', text: 'Una empresa de buena reputación proporciona una garantía escrita tanto de mano de obra como de materiales. Las garantías de mano de obra cubren la instalación — filtraciones causadas por instalación incorrecta. Las garantías de materiales vienen del fabricante. Pida ambas por escrito antes de firmar cualquier cosa.' },
      { heading: 'Tenga cuidado con las señales de alerta', text: 'Desconfíe de quienes van puerta a puerta después de tormentas, empresas que piden el pago completo por adelantado, contratistas sin dirección física y cualquiera que se niegue a dar un presupuesto escrito. Estas son señales comunes de operadores sin licencia o cazadores de tormentas.' },
      { heading: 'Por qué nuestra lista le ahorra tiempo', text: 'Verificamos previamente cada empresa de nuestra lista en cuanto a licencia, seguro, calificación en Google y términos de garantía. Puede llamar a cualquier empresa de nuestra lista con la confianza de que los aspectos básicos ya han sido comprobados.' },
    ],
  },
  {
    slug: 'average-cost',
    title: 'Average Cost of Roof Replacement in Chicago',
    metaDescription: 'How much does roof replacement cost in Chicago in 2026? A breakdown of prices by material, roof type, and size.',
    sections: [
      { heading: 'Asphalt shingle replacement: $8,000–$14,000', text: 'A full asphalt shingle replacement on a typical Chicago single-family home (1,500–2,500 sq ft) runs $8,000–$14,000. Architectural shingles are the most common choice — they handle Chicago\'s freeze-thaw cycles well and come with 30-year manufacturer warranties. The final price depends on roof size, pitch, and whether the old layers need full tear-off.' },
      { heading: 'Metal roofing: $15,000–$25,000', text: 'Metal roofing lasts 40–70 years and is an increasingly popular choice for Chicago homeowners who plan to stay long term. Standing seam metal runs $15,000–$25,000 for a typical home. The higher upfront cost is offset by lower maintenance and a longer lifespan than asphalt.' },
      { heading: 'Flat roof replacement (TPO/EPDM): $10,000–$20,000', text: 'Flat roofs are common on Chicago two-flats, three-flats, and courtyard buildings. TPO membrane is the preferred material under the Chicago building code. A typical flat roof replacement runs $10,000–$20,000 depending on square footage and the existing system being removed.' },
      { heading: 'What affects the price', text: 'Key factors include roof size (measured in squares — 100 sq ft each), pitch (steep roofs cost more to work on), material choice, number of layers being removed, chimney or skylight flashing work, and whether permits are required. The City of Chicago requires a building permit for full replacement — a reputable contractor includes this in the contract.' },
      { heading: 'Insurance may cover part or all of the cost', text: 'If your roof was damaged by hail, wind, or storm, your homeowner insurance policy may cover replacement — minus your deductible. Document damage within 48 hours of a storm and get a written assessment from a licensed contractor before filing. See our Insurance Guide for a full walkthrough.' },
      { heading: 'How to get an accurate estimate', text: 'All companies on our list offer free on-site estimates. The estimate should be written, itemized, and include labor, materials, disposal, permit costs, and warranty terms. Do not accept verbal estimates only. Getting two estimates is a reasonable starting point for a project of this size.' },
    ],
    titleEs: 'Costo Promedio del Reemplazo de Techo en Chicago',
    metaDescriptionEs: 'Cuánto cuesta el reemplazo de techo en Chicago en 2026. Desglose de precios por tipo de material y tamaño del techo.',
    sectionsEs: [
      { heading: 'Reemplazo de tejas de asfalto: $8,000–$14,000', text: 'Un reemplazo completo de tejas de asfalto en una casa unifamiliar típica de Chicago (1,500–2,500 pies cuadrados) cuesta entre $8,000 y $14,000. Las tejas arquitectónicas son la opción más común — soportan bien los ciclos de congelación y deshielo de Chicago y vienen con garantías del fabricante de 30 años. El precio final depende del tamaño del techo, la inclinación y si se necesita retirar las capas antiguas.' },
      { heading: 'Techado de metal: $15,000–$25,000', text: 'El techado de metal dura entre 40 y 70 años y es una opción cada vez más popular para los propietarios de Chicago que planean quedarse a largo plazo. El metal de costura continua cuesta entre $15,000 y $25,000 para una casa típica. El mayor costo inicial se compensa con menor mantenimiento y una vida útil más larga que el asfalto.' },
      { heading: 'Reemplazo de techo plano (TPO/EPDM): $10,000–$20,000', text: 'Los techos planos son comunes en los edificios de dos y tres pisos de Chicago. La membrana TPO es el material preferido según el código de construcción de Chicago. Un reemplazo típico de techo plano cuesta entre $10,000 y $20,000 según los metros cuadrados y el sistema existente que se retira.' },
      { heading: 'Qué afecta el precio', text: 'Los factores clave incluyen el tamaño del techo (medido en cuadrados — 100 pies cuadrados cada uno), la inclinación, la elección de material, el número de capas que se retiran, el trabajo de tapajuntas en chimeneas o claraboyas y si se requieren permisos. La Ciudad de Chicago requiere un permiso de construcción para el reemplazo completo — un contratista de buena reputación lo incluye en el contrato.' },
      { heading: 'El seguro puede cubrir parte o todo el costo', text: 'Si su techo fue dañado por granizo, viento o tormenta, su póliza de seguro de propietario puede cubrir el reemplazo, menos su deducible. Documente los daños dentro de las 48 horas posteriores a una tormenta y obtenga una evaluación escrita de un contratista con licencia antes de presentar la reclamación. Consulte nuestra Guía de Seguros para un recorrido completo.' },
      { heading: 'Cómo obtener un presupuesto preciso', text: 'Todas las empresas de nuestra lista ofrecen presupuestos gratuitos en sitio. El presupuesto debe ser escrito, detallado e incluir mano de obra, materiales, eliminación, costos de permisos y términos de garantía. No acepte solo presupuestos verbales. Obtener dos presupuestos es un punto de partida razonable para un proyecto de este tamaño.' },
    ],
  },
  {
    slug: 'signs-your-roof',
    title: 'Signs Your Roof Needs Replacement in Chicago',
    metaDescription: 'How to tell if your roof needs full replacement. Warning signs Chicago homeowners should not ignore.',
    sections: [
      { heading: 'Water stains on ceilings or walls', text: 'Brown or yellow stains on your ceiling are a strong indicator of an active or recent roof leak. The stain may appear far from the actual entry point — water travels along rafters and insulation. Act immediately, especially before rain.' },
      { heading: 'Missing or curling shingles', text: 'Shingles that are missing, cracked, curling at the edges, or covered in moss have reached the end of their lifespan. Even a few compromised shingles can allow water to enter the roof deck and cause rot.' },
      { heading: 'Granules in gutters', text: 'Asphalt shingles lose granules as they age. If you notice black, sand-like granules in your gutters or downspouts, your shingles are deteriorating and likely need replacement soon.' },
      { heading: 'Sagging sections', text: 'A roof that appears to sag or bow in sections indicates structural damage — often rotted decking or compromised rafters. This is a serious safety issue and requires immediate professional assessment.' },
      { heading: 'Daylight in the attic', text: 'If you can see light coming through the roof boards when standing in your attic, water and pests can get in too. Check your attic after dark with a flashlight for the same signs.' },
      { heading: 'Flashing damage', text: 'Flashing — the metal strips around chimneys, skylights, and vents — is a common failure point. Cracked, lifted, or rusted flashing allows water to seep into the home. This is often invisible from the ground but shows up as ceiling stains.' },
      { heading: 'When to call immediately', text: 'Call for emergency service if you see active water entry during rain, large sections of missing shingles after a storm, visible structural damage, or mold forming on interior walls or ceilings. These situations worsen rapidly and should not wait.' },
    ],
    titleEs: 'Señales de que su Techo Necesita Reemplazo Urgente',
    metaDescriptionEs: 'Cómo saber si su techo necesita atención urgente. Señales de advertencia que los propietarios de Chicago no deben ignorar.',
    sectionsEs: [
      { heading: 'Manchas de agua en techos o paredes', text: 'Las manchas marrones o amarillas en su techo interior son un fuerte indicador de una filtración activa o reciente. La mancha puede aparecer lejos del punto de entrada real — el agua viaja por las vigas y el aislamiento. Actúe de inmediato, especialmente antes de que llueva.' },
      { heading: 'Tejas faltantes o curvadas', text: 'Las tejas que faltan, están agrietadas, curvadas en los bordes o cubiertas de musgo han llegado al final de su vida útil. Incluso unas pocas tejas en mal estado pueden permitir que el agua entre al tablero del techo y cause pudrición.' },
      { heading: 'Gránulos en las canaletas', text: 'Las tejas de asfalto pierden gránulos con el tiempo. Si nota gránulos negros con apariencia de arena en sus canaletas o bajantes, sus tejas se están deteriorando y probablemente necesitan reemplazo pronto.' },
      { heading: 'Secciones hundidas', text: 'Un techo que parece hundirse o arquearse en secciones indica daño estructural — generalmente tableros podridos o vigas comprometidas. Este es un problema de seguridad grave que requiere evaluación profesional inmediata.' },
      { heading: 'Luz del día en el ático', text: 'Si puede ver luz entrando por los tablones del techo cuando está en su ático, el agua y las plagas también pueden entrar. Revise su ático de noche con una linterna para detectar las mismas señales.' },
      { heading: 'Daños en los tapajuntas', text: 'Los tapajuntas — las tiras de metal alrededor de chimeneas, claraboyas y ventilaciones — son un punto de falla común. Los tapajuntas agrietados, levantados u oxidados permiten que el agua se filtre al hogar. Esto suele ser invisible desde el suelo pero aparece como manchas en el techo interior.' },
      { heading: 'Cuándo llamar de inmediato', text: 'Llame para servicio de emergencia si ve entrada activa de agua durante la lluvia, grandes secciones de tejas faltantes después de una tormenta, daño estructural visible o moho formándose en paredes o techos interiores. Estas situaciones empeoran rápidamente y no deben esperar.' },
    ],
  },
  {
    slug: 'after-storm-damage',
    title: 'What to Do After Storm Damage to Your Roof in Chicago',
    metaDescription: 'Step-by-step guide for Chicago homeowners after a storm damages their roof. Insurance tips, temporary fixes, and how to find a trusted roofer.',
    sections: [
      { heading: 'Step 1: Stay safe and assess from the ground', text: 'Do not climb onto a storm-damaged roof. Assess the exterior from the ground or through an attic window. Look for missing shingles, damaged flashing, fallen debris, or dented gutters. Take photos immediately for insurance documentation.' },
      { heading: 'Step 2: Stop interior damage', text: 'If water is actively entering the home, place buckets to catch drips and move valuables away from wet areas. Lay down towels or plastic sheeting to protect flooring. Do not turn on overhead lights if there is water near the fixture.' },
      { heading: 'Step 3: Document everything', text: 'Photograph all exterior damage, interior staining, and any debris from the storm. Note the date and time. This documentation is essential for your insurance claim. Do not discard any damaged materials until your adjuster has seen them.' },
      { heading: 'Step 4: Call your insurance company', text: 'Report the damage to your homeowner insurance company as soon as possible. Most policies require timely reporting after a storm event. Your insurer will send an adjuster to assess the damage.' },
      { heading: 'Step 5: Get a temporary repair to prevent further damage', text: 'Before your insurance adjuster arrives, you can authorize a contractor to place a temporary tarp or cover over damaged areas to prevent further water entry. This is covered by most policies and does not affect your claim.' },
      { heading: 'Step 6: Get a professional estimate', text: 'Once the adjuster has been, get a written estimate from a licensed contractor before committing to any permanent repair. Compare the estimate to what your insurer offers. If there is a significant discrepancy, you can negotiate or hire a public adjuster.' },
      { heading: 'Beware of storm chasers', text: 'After major Chicago storms, out-of-town contractors flood the area offering quick, cheap repairs. Many are unlicensed, uninsured, and do poor work. Use only local, verified contractors — like those on our list.' },
    ],
    titleEs: 'Qué Hacer Después de Daños por Tormenta en su Techo en Chicago',
    metaDescriptionEs: 'Guía paso a paso para propietarios de Chicago después de que una tormenta dañe su techo. Consejos de seguro, reparaciones temporales y cómo encontrar un techador de confianza.',
    sectionsEs: [
      { heading: 'Paso 1: Manténgase seguro y evalúe desde el suelo', text: 'No suba a un techo dañado por una tormenta. Evalúe el exterior desde el suelo o a través de una ventana del ático. Busque tejas faltantes, tapajuntas dañados, escombros caídos o canaletas abolladas. Tome fotos de inmediato para la documentación del seguro.' },
      { heading: 'Paso 2: Detenga los daños interiores', text: 'Si el agua está entrando activamente al hogar, coloque cubos para recoger las gotas y mueva los objetos de valor lejos de las áreas mojadas. Coloque toallas o lona de plástico para proteger los pisos. No encienda las luces del techo si hay agua cerca del accesorio.' },
      { heading: 'Paso 3: Documente todo', text: 'Fotografíe todos los daños exteriores, las manchas interiores y cualquier escombro de la tormenta. Anote la fecha y la hora. Esta documentación es esencial para su reclamo de seguro. No descarte ningún material dañado hasta que su ajustador lo haya visto.' },
      { heading: 'Paso 4: Llame a su compañía de seguros', text: 'Reporte el daño a su compañía de seguro de propietario lo antes posible. La mayoría de las pólizas requieren un reporte oportuno después de un evento de tormenta. Su aseguradora enviará un ajustador para evaluar el daño.' },
      { heading: 'Paso 5: Obtenga una reparación temporal para prevenir más daños', text: 'Antes de que llegue el ajustador de su seguro, puede autorizar a un contratista a colocar una lona temporal sobre las áreas dañadas para evitar más entrada de agua. Esto está cubierto por la mayoría de las pólizas y no afecta su reclamo.' },
      { heading: 'Paso 6: Obtenga un presupuesto profesional', text: 'Una vez que el ajustador haya visitado, obtenga un presupuesto escrito de un contratista con licencia antes de comprometerse con cualquier reparación permanente. Compare el presupuesto con lo que ofrece su aseguradora. Si hay una discrepancia significativa, puede negociar o contratar a un ajustador público.' },
      { heading: 'Cuidado con los cazadores de tormentas', text: 'Después de las grandes tormentas de Chicago, contratistas de fuera de la ciudad inundan el área ofreciendo reparaciones rápidas y baratas. Muchos no tienen licencia ni seguro y hacen un trabajo deficiente. Use solo contratistas locales verificados — como los de nuestra lista.' },
    ],
  },
  {
    slug: 'how-we-rank-companies',
    title: 'How We Rank Roof Replacement Contractors in Chicago',
    metaDescription: 'Our methodology for evaluating and ranking roof replacement contractors in Chicago — transparent, editorial, and never pay-to-play.',
    sections: [
      { heading: 'Our goal', text: 'We built this ranking to solve a real problem: when a Chicago homeowner needs a roofer fast, they should not have to sort through paid ads, fake reviews, and unlicensed operators. Our list gives homeowners a starting point they can trust.' },
      { heading: 'Factor 1: Illinois IDFPR license', text: 'We verify active licensing through the Illinois Department of Financial and Professional Regulation database before any company appears on our list. Expired or suspended licenses result in immediate removal. This is a hard requirement — unlicensed contractors are excluded entirely.' },
      { heading: 'Factor 2: Google rating and review volume', text: 'We look for a minimum of 4.5 stars with at least 30 reviews. Volume matters — a 5.0 with 8 reviews is far less reliable than a 4.7 with 200 reviews. We also read the text of reviews to identify recurring patterns around communication, cleanup, and warranty follow-through.' },
      { heading: 'Factor 3: BBB accreditation and history', text: 'We note BBB accreditation and rating as a secondary trust signal. We also check complaint history and how the company responds to complaints. Not all companies on our list are BBB accredited — we note this transparently.' },
      { heading: 'Factor 4: Years in business', text: 'Roofing warranties are only as good as the company backing them. We prioritize contractors with a documented track record in the Chicago market who are likely to still be in business when a warranty claim is needed.' },
      { heading: 'Factor 5: Workmanship warranty', text: 'We require a minimum 3-year workmanship warranty. Five years is our standard threshold. Ten years is the mark of exceptional confidence in installation quality.' },
      { heading: 'Factor 6: Chicago-specific experience', text: 'We favor contractors with documented experience pulling City of Chicago building permits and working with homeowner insurance companies on storm damage claims. Chicago\'s flat roof prevalence and freeze-thaw climate make local experience a meaningful differentiator.' },
      { heading: 'What does not affect ranking', text: 'Companies cannot pay to be ranked higher. We do not accept sponsored placement. Our compensation comes from referral fees, which are disclosed separately and do not influence rankings.' },
      { heading: 'How often we update', text: 'We review rankings regularly. If a company\'s license lapses, its Google rating drops significantly, or we receive credible negative information, we update or remove the listing immediately.' },
    ],
    titleEs: 'Cómo Clasificamos los Contratistas de Reemplazo de Techo en Chicago',
    metaDescriptionEs: 'Nuestra metodología para evaluar y clasificar contratistas de reemplazo de techo en Chicago — transparente, editorial y sin pago por posición.',
    sectionsEs: [
      { heading: 'Nuestro objetivo', text: 'Creamos esta clasificación para resolver un problema real: cuando un propietario de Chicago necesita un techador rápido, no debería tener que filtrar anuncios pagados, reseñas falsas y operadores sin licencia. Nuestra lista da a los propietarios un punto de partida en el que pueden confiar.' },
      { heading: 'Factor 1: Licencia IDFPR de Illinois', text: 'Verificamos la licencia activa a través de la base de datos del Departamento de Regulación Financiera y Profesional de Illinois antes de que cualquier empresa aparezca en nuestra lista. Las licencias vencidas o suspendidas resultan en eliminación inmediata. Este es un requisito obligatorio — los contratistas sin licencia quedan excluidos por completo.' },
      { heading: 'Factor 2: Calificación de Google y volumen de reseñas', text: 'Buscamos un mínimo de 4.5 estrellas con al menos 30 reseñas. El volumen importa — un 5.0 con 8 reseñas es mucho menos confiable que un 4.7 con 200 reseñas. También leemos el texto de las reseñas para identificar patrones recurrentes sobre comunicación, limpieza y cumplimiento de garantías.' },
      { heading: 'Factor 3: Acreditación BBB e historial', text: 'Tomamos nota de la acreditación y calificación BBB como señal de confianza secundaria. También revisamos el historial de quejas y cómo la empresa responde a ellas. No todas las empresas de nuestra lista están acreditadas por BBB — lo indicamos de manera transparente.' },
      { heading: 'Factor 4: Años en el negocio', text: 'Las garantías de techado son tan buenas como la empresa que las respalda. Priorizamos contratistas con un historial documentado en el mercado de Chicago que probablemente sigan en el negocio cuando se necesite una reclamación de garantía.' },
      { heading: 'Factor 5: Garantía de mano de obra', text: 'Requerimos una garantía mínima de mano de obra de 3 años. Cinco años es nuestro umbral estándar. Diez años es la marca de una confianza excepcional en la calidad de instalación.' },
      { heading: 'Factor 6: Experiencia específica en Chicago', text: 'Favorecemos contratistas con experiencia documentada obteniendo permisos de construcción de la Ciudad de Chicago y trabajando con compañías de seguro en reclamos por daños de tormentas. La prevalencia de techos planos y el clima de congelación y deshielo de Chicago hacen que la experiencia local sea un diferenciador significativo.' },
      { heading: 'Qué no afecta la clasificación', text: 'Las empresas no pueden pagar para obtener una clasificación más alta. No aceptamos posicionamiento patrocinado. Nuestra compensación proviene de honorarios de referencia, que se divulgan por separado y no influyen en las clasificaciones.' },
      { heading: 'Con qué frecuencia actualizamos', text: 'Revisamos las clasificaciones regularmente. Si la licencia de una empresa vence, su calificación de Google cae significativamente o recibimos información negativa creíble, actualizamos o eliminamos la ficha de inmediato.' },
    ],
  },
]

export type Locale = 'en' | 'es'
export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

export const dict = {
  en: {
    // Header
    alsoAvailableIn: 'Also available in',
    langSwitch: 'Español',
    langSwitchHref: '/es',

    // Hero
    heroH1: 'Best Roofing Contractors in Chicago',
    heroSub: 'Browse top-rated roofers below.',
    heroP2: 'If you need help fast, call now and we\'ll connect you with a roofer today.',
    factor1: 'Same-day availability',
    factor2: 'Free estimate',
    factor3: 'Warranty on work',
    callNow: 'CALL NOW',
    callNote: 'Free · No obligation · Available 24/7',

    // Trust strip
    companiesRanked: 'Companies ranked',
    emergencyService: 'Emergency service',
    response: 'Response',
    sameDay: 'Same day',
    inspection: 'Inspection',
    free: 'Free',

    // Why us
    whyLabel: 'Why this service',
    whyTitle: "We don't list everyone. We rank the best.",
    why1Title: 'Independently researched',
    why1Text: 'We evaluate licensing, reviews, warranties, and response time before any company makes our list.',
    why2Title: 'Same-day response',
    why2Text: 'Every company on our list offers same-day availability for emergency repairs in Chicago.',
    why3Title: 'Warranty guaranteed',
    why3Text: 'All companies provide written warranties on labor. We verify this before ranking.',
    why4Title: 'Chicago only',
    why4Text: "We focus exclusively on local Chicago roofers who know your neighborhood, weather, and building types.",

    // Companies
    companiesLabel: '6 verified contractors',
    expertRating: 'Expert rating',
    getQuote: 'GET QUOTE',
    freeEstimate: 'Free estimate · Same-day available',
    emergency: 'Emergency',
    bookAhead: 'Book ahead',

    // Urgency
    urgencyH2: 'Roof leaking right now?',
    urgencyText: "Don't wait. Our dispatch team connects you with an available roofer in Chicago within minutes. Free, no obligation.",

    // FAQ — main page (5 items)
    faqTitle: 'Frequently asked questions',
    faq1q: 'How quickly can a roofer come to my home in Chicago?',
    faq1a: 'Most companies on our list offer same-day service for emergency repairs. After you call, a roofer can typically arrive within 2–4 hours depending on your location in Chicago.',
    faq2q: 'How much does roof replacement cost in Chicago?',
    faq2a: 'A full roof replacement in Chicago typically costs $8,000–$14,000 for asphalt shingles, $15,000–$25,000 for metal roofing, and $10,000–$20,000 for flat TPO or EPDM systems. Final price depends on roof size, pitch, material, and whether old layers need full tear-off. All companies on our list offer free on-site estimates.',
    faq3q: 'Are these roofing companies licensed and insured in Illinois?',
    faq3a: 'Yes. We verify licensing and insurance for every company before ranking them. Only fully licensed and insured roofers make our list.',
    faq4q: 'How do you rank roofing companies?',
    faq4a: 'We evaluate each company on licensing, Google reviews, response time, warranty terms, and pricing transparency. Our expert score reflects all these factors combined. See our full methodology on the How We Rank page.',
    faq5q: 'Is this service free to use?',
    faq5a: 'Yes, completely free for homeowners. We may receive compensation from companies for referrals, but this does not affect our rankings. Full details in our Disclosure.',

    // Roofing Guide — 11 FAQ items
    guideTitle: 'Chicago Roofing Guide: Questions & Answers (2026)',
    guideDesc: 'Practical answers to the most common roofing questions from Chicago homeowners — from repair vs. replacement to ice dams, costs, and contractor licensing.',
    guideIntro: 'Everything Chicago homeowners ask about roofs — answered directly.',
    guideBackLink: '← Back to top companies',

    gfaq1q: 'Do I need a full roof replacement or just a repair?',
    gfaq1a: 'If your roof has 3 or more problem areas, is older than 15 years, or has lost granules across more than 30% of its surface — replacement is typically the right call. A single isolated leak on a roof under 10 years old is usually a repair. When in doubt, schedule a free inspection before deciding — patching a roof that needs full replacement will cost you more in the long run.',

    gfaq2q: 'How long does a roof last in Chicago?',
    gfaq2a: 'Asphalt shingles last 15–20 years in Chicago — shorter than the manufacturer\'s rated lifespan because extreme temperature swings between harsh winters and hot summers accelerate material fatigue. Metal roofing typically lasts 40–70 years. Flat TPO/EPDM systems generally last 20–30 years with proper maintenance. If your asphalt roof is over 15 years old, budget for replacement within the next few years even if it looks intact from the street.',

    gfaq3q: 'How much does roof replacement cost in Chicago in 2026?',
    gfaq3a: 'The average total for a full roof replacement in Chicago in 2026 is around $18,900, with a typical range of $8,300–$29,400 depending on house size, roof complexity, and material. Architectural asphalt shingles run $9.50–$13.00 per sq ft installed; metal roofing $15.00–$22.00; TPO or EPDM for flat roofs $10.00–$25.00. These are estimates — actual cost depends on your specific project. Always request a free on-site estimate before committing.',

    gfaq4q: 'What factors drive the final roofing price up or down?',
    gfaq4a: 'Four things move the price most: number of existing shingle layers, roof pitch, decking damage, and material class. Illinois code allows a maximum of 2 shingle layers — if you already have two, a full strip to bare decking is required, adding $1,000–$2,500. Steep pitches and multiple chimneys raise labor costs 20–30%. Rotted decking boards run $80–$120 per sheet to replace. Upgrading to Class 4 impact-resistant shingles costs more upfront but often pays back through lower insurance premiums.',

    gfaq5q: 'What is the best roofing material for Chicago\'s climate?',
    gfaq5a: 'For pitched roofs, architectural asphalt shingles are the most practical starting point — they handle wind, freeze-thaw cycles, and most budgets. If you plan to stay in the home 20+ years, metal roofing lasts 40–70 years and sheds snow without forming ice dams. For flat roofs, TPO membrane is the code-preferred option in Chicago. Avoid basic 3-tab shingles — they rarely hold up long enough in Chicago winters to justify the savings over architectural shingles.',

    gfaq6q: 'I see large icicles on my roof. Do I have an ice dam?',
    gfaq6a: 'Icicles longer than 12 inches on your eaves are a reliable sign that ice dams have already formed or will form soon. Do not climb on the roof yourself. Call a licensed contractor to safely remove the ice and inspect for water intrusion underneath — ice dam damage often does not show up as an interior leak until weeks later. Long-term fix: improve attic ventilation so the roof deck stays cold and snow never melts and refreezes at the edge. Chicago code also requires Ice & Water Shield underlayment extending at least 24 inches past the interior wall line as a last-resort barrier.',

    gfaq7q: 'My roof was hit by hail. What should I do first?',
    gfaq7a: 'Do not call your insurance company first. Get a free inspection from a licensed local contractor, then file the claim with their written damage assessment in hand, and request that the contractor be present when the insurance adjuster visits. Hail can knock off the protective granule layer without visibly puncturing shingles — damage that is easy for an adjuster to overlook without a knowledgeable contractor present. In Illinois, homeowners typically have 12–24 months from the date of the storm to file a hail damage claim, but timelines vary by policy — always check your specific coverage.',

    gfaq8q: 'How do I verify a roofing contractor is licensed in Illinois?',
    gfaq8a: 'Search the contractor\'s name or license number on the IDFPR website (Illinois Department of Financial and Professional Regulation) before signing anything. Illinois issues two roofing license types: Limited (104), which covers residential buildings up to 8 units, and Unlimited, which covers all building types. Also confirm the company carries General Liability insurance (minimum $250,000) and Workers\' Compensation. If an uninsured worker is injured on your property, liability may fall on you. Be cautious of out-of-state contractors who appear in your neighborhood after storm events — verify Illinois licensing before proceeding.',

    gfaq9q: 'Do I need a permit to replace my roof in Chicago?',
    gfaq9a: 'Yes. The City of Chicago requires an official building permit for full roof replacement. A reputable contractor will obtain this permit as part of the job — it should be included in your contract at no extra charge. Skipping the permit can create problems when you sell the home or file an insurance claim. If a contractor suggests bypassing the permit to save money, treat it as a red flag.',

    gfaq10q: 'What warranties should I demand from a roofing contractor?',
    gfaq10a: 'The contractor\'s labor warranty is the one that matters most — it covers installation quality. Demand at least 5 years in writing; 10 years is the mark of a quality contractor. If a contractor offers less than 5 years on workmanship, look elsewhere. The manufacturer\'s material warranty (from brands like GAF, Owens Corning, or CertainTeed) covers defective shingles but not installation errors, and it can be voided if the install does not meet the manufacturer\'s specifications. Ask whether the installation will be certified by the manufacturer for enhanced coverage.',

    gfaq11q: 'What is the best financing option for a roof replacement?',
    gfaq11a: 'If you have home equity, a HELOC typically offers the lowest interest rate. If not, many contractors offer 0% promotional financing for 12 months — this works well only if you can pay the full balance before the promotional period ends, as deferred interest applies to the original amount if you do not. The FHA Title I Home Improvement Loan is a government-backed option available up to $25,000 regardless of equity. Get all financing terms in a separate written document before signing a roofing contract, and be cautious of financing arrangements offered by contractors you have just met following storm events.',

    // Reviews
    reviewsTitle: 'What our users say',
    reviewsSub: 'Real reviews from Chicago homeowners who found their roofer here.',
    reviewsPlaceholder: 'Reviews coming soon — this section will be filled with verified user experiences.',

    // Footer
    about: 'About',
    howItWorks: 'How it works',
    contact: 'Contact',
    howWeRank: 'How we rank',
    privacyPolicy: 'Privacy Policy',
    disclosure: 'Disclosure',
    disclosureText: 'This website is an independent referral service. We may receive compensation for calls and referrals. Rankings are based on editorial research and do not constitute an endorsement.',
  },
  es: {
    alsoAvailableIn: 'También disponible en',
    langSwitch: 'English',
    langSwitchHref: '/',

    heroH1: 'Los mejores contratistas de techos en Chicago',
    heroSub: 'Explore los mejores techeros a continuación.',
    heroP2: 'Si necesita ayuda rápido, llame ahora y lo conectaremos con un techero hoy.',
    factor1: 'Disponibilidad el mismo día',
    factor2: 'Presupuesto gratuito',
    factor3: 'Garantía en el trabajo',
    callNow: 'LLAMAR AHORA',
    callNote: 'Gratis · Sin compromiso · Disponible 24/7',

    companiesRanked: 'Empresas clasificadas',
    emergencyService: 'Servicio de emergencia',
    response: 'Respuesta',
    sameDay: 'Mismo día',
    inspection: 'Inspección',
    free: 'Gratis',

    whyLabel: 'Por qué este servicio',
    whyTitle: 'No listamos a todos. Clasificamos a los mejores.',
    why1Title: 'Investigado de forma independiente',
    why1Text: 'Evaluamos licencias, reseñas, garantías y tiempos de respuesta antes de incluir cualquier empresa.',
    why2Title: 'Respuesta el mismo día',
    why2Text: 'Cada empresa en nuestra lista ofrece disponibilidad el mismo día para reparaciones de emergencia en Chicago.',
    why3Title: 'Garantía asegurada',
    why3Text: 'Todas las empresas proporcionan garantías escritas sobre la mano de obra. Lo verificamos antes de clasificar.',
    why4Title: 'Solo Chicago',
    why4Text: 'Nos enfocamos exclusivamente en techeros locales de Chicago que conocen tu barrio, el clima y los tipos de edificios.',

    companiesLabel: '6 contratistas verificados',
    expertRating: 'Calificación experta',
    getQuote: 'COTIZAR',
    freeEstimate: 'Presupuesto gratis · Disponible hoy',
    emergency: 'Emergencia',
    bookAhead: 'Reservar',

    urgencyH2: '¿Su techo está goteando ahora mismo?',
    urgencyText: 'No espere. Nuestro equipo de despacho lo conecta con un techero disponible en Chicago en minutos. Gratis, sin compromiso.',

    // FAQ — main page (5 items)
    faqTitle: 'Preguntas frecuentes',
    faq1q: '¿Qué tan rápido puede venir un techero a mi casa en Chicago?',
    faq1a: 'La mayoría de las empresas en nuestra lista ofrecen servicio el mismo día para reparaciones de emergencia. Después de llamar, un techero puede llegar en 2–4 horas según su ubicación en Chicago.',
    faq2q: '¿Cuánto cuesta el reemplazo de techo en Chicago?',
    faq2a: 'Un reemplazo completo de techo en Chicago cuesta típicamente entre $8,000 y $14,000 para tejas de asfalto, entre $15,000 y $25,000 para techado de metal, y entre $10,000 y $20,000 para sistemas planos de TPO o EPDM. El precio final depende del tamaño del techo, la inclinación, el material y si se necesita retirar las capas antiguas. Todas las empresas de nuestra lista ofrecen presupuestos gratuitos en el lugar.',
    faq3q: '¿Estas empresas de techado tienen licencia y seguro en Illinois?',
    faq3a: 'Sí. Verificamos la licencia y el seguro de cada empresa antes de clasificarla. Solo los techeros con licencia y seguro completos aparecen en nuestra lista.',
    faq4q: '¿Cómo clasifican a las empresas de techado?',
    faq4a: 'Evaluamos cada empresa en licencias, reseñas de Google, tiempo de respuesta, términos de garantía y transparencia de precios. Nuestra puntuación experta refleja todos estos factores combinados.',
    faq5q: '¿Este servicio es gratuito?',
    faq5a: 'Sí, completamente gratuito para los propietarios. Podemos recibir compensación de las empresas por referencias, pero esto no afecta nuestras clasificaciones. Detalles completos en nuestra Declaración.',

    // Roofing Guide — 11 FAQ items
    guideTitle: 'Guía de Techos en Chicago: Preguntas y Respuestas (2026)',
    guideDesc: 'Respuestas prácticas a las preguntas más comunes de los propietarios de Chicago sobre techos: desde reparación vs. reemplazo hasta diques de hielo, costos y licencias de contratistas.',
    guideIntro: 'Todo lo que los propietarios de Chicago preguntan sobre techos — respondido directamente.',
    guideBackLink: '← Volver a las mejores empresas',

    gfaq1q: '¿Necesito un reemplazo completo del techo o solo una reparación?',
    gfaq1a: 'Si su techo tiene 3 o más áreas problemáticas, tiene más de 15 años o ha perdido gránulos en más del 30% de su superficie, el reemplazo es generalmente la decisión correcta. Una sola gotera en un techo de menos de 10 años suele ser una reparación. En caso de duda, programe una inspección gratuita antes de decidir — reparar un techo que necesita reemplazo total le costará más a largo plazo.',

    gfaq2q: '¿Cuánto dura un techo en Chicago?',
    gfaq2a: 'Las tejas de asfalto duran 15–20 años en Chicago, menos que la vida útil indicada por el fabricante, porque los cambios extremos de temperatura entre inviernos rigurosos y veranos calurosos aceleran el desgaste del material. Los techos de metal duran entre 40 y 70 años. Los sistemas planos de TPO/EPDM generalmente duran 20–30 años con mantenimiento adecuado. Si su techo de asfalto tiene más de 15 años, presupueste el reemplazo en los próximos años aunque se vea bien desde la calle.',

    gfaq3q: '¿Cuánto cuesta reemplazar un techo en Chicago en 2026?',
    gfaq3a: 'El costo promedio total de un reemplazo completo de techo en Chicago en 2026 es de aproximadamente $18,900, con un rango típico de $8,300–$29,400 según el tamaño de la casa, la complejidad del techo y el material. Las tejas de asfalto arquitectónicas cuestan $9.50–$13.00 por pie cuadrado instalado; los techos de metal $15.00–$22.00; TPO o EPDM para techos planos $10.00–$25.00. Estos son estimados — el costo real depende de su proyecto específico. Siempre solicite un presupuesto gratuito en el lugar antes de comprometerse.',

    gfaq4q: '¿Qué factores aumentan o reducen el precio final del techo?',
    gfaq4a: 'Cuatro factores mueven más el precio: número de capas de tejas existentes, inclinación del techo, daños en el entablado y clase del material. El código de Illinois permite un máximo de 2 capas de tejas — si ya tiene dos, se requiere retirar todo hasta el entablado, lo que agrega $1,000–$2,500. Las pendientes empinadas y las múltiples chimeneas aumentan los costos de mano de obra un 20–30%. Las tablas de entablado podridas cuestan $80–$120 por hoja para reemplazar. Actualizar a tejas resistentes al impacto Clase 4 cuesta más por adelantado pero frecuentemente se recupera mediante descuentos en el seguro.',

    gfaq5q: '¿Cuál es el mejor material de techo para el clima de Chicago?',
    gfaq5a: 'Para techos inclinados, las tejas de asfalto arquitectónicas son el punto de partida más práctico — soportan el viento, los ciclos de congelación-descongelación y la mayoría de los presupuestos. Si planea vivir en la casa 20 años o más, los techos de metal duran 40–70 años y desprenden la nieve sin formar diques de hielo. Para techos planos, la membrana TPO es la opción preferida por el código en Chicago. Evite las tejas básicas de 3 capas — raramente duran lo suficiente en los inviernos de Chicago para justificar el ahorro sobre las tejas arquitectónicas.',

    gfaq6q: 'Veo carámbanos grandes en mi techo. ¿Tengo un dique de hielo?',
    gfaq6a: 'Los carámbanos de más de 30 centímetros en sus aleros son una señal confiable de que los diques de hielo ya se han formado o se formarán pronto. No suba al techo usted mismo. Llame a un contratista con licencia para retirar el hielo de forma segura e inspeccionar si hay agua infiltrada por debajo — el daño por diques de hielo a menudo no se manifiesta como una gotera interior hasta semanas después. Solución a largo plazo: mejore la ventilación del ático para que el entablado permanezca frío y la nieve nunca se derrita y vuelva a congelarse en el borde. El código de Chicago también requiere una capa de barrera Ice & Water Shield que se extienda al menos 24 pulgadas más allá de la línea de la pared interior como barrera de último recurso.',

    gfaq7q: 'Mi techo fue golpeado por granizo. ¿Qué debo hacer primero?',
    gfaq7a: 'No llame a su compañía de seguros primero. Obtenga una inspección gratuita de un contratista local con licencia, luego presente el reclamo con su evaluación escrita de daños en mano, y solicite que el contratista esté presente cuando el ajustador del seguro visite. El granizo puede desprender la capa protectora de gránulos sin perforar visiblemente las tejas — daño que es fácil que un ajustador pase por alto sin un contratista experto señalándolo. En Illinois, los propietarios generalmente tienen 12–24 meses desde la fecha de la tormenta para presentar un reclamo por daños de granizo, pero los plazos varían según la póliza — siempre verifique su cobertura específica.',

    gfaq8q: '¿Cómo verifico que un contratista de techos tiene licencia en Illinois?',
    gfaq8a: 'Busque el nombre o número de licencia del contratista en el sitio web de IDFPR (Departamento de Regulación Financiera y Profesional de Illinois) antes de firmar cualquier documento. Illinois emite dos tipos de licencias de techado: Limitada (104), que cubre edificios residenciales de hasta 8 unidades, y Unlimited, que cubre todos los tipos de edificios. También confirme que la empresa tiene Seguro de Responsabilidad Civil General (mínimo $250,000) y Compensación para Trabajadores. Si un trabajador sin seguro se lesiona en su propiedad, la responsabilidad puede recaer sobre usted. Sea cauteloso con los contratistas de otros estados que aparecen en su vecindario después de eventos de tormenta — verifique la licencia de Illinois antes de proceder.',

    gfaq9q: '¿Necesito un permiso para reemplazar mi techo en Chicago?',
    gfaq9a: 'Sí. La Ciudad de Chicago requiere un permiso oficial de construcción para el reemplazo completo del techo. Un contratista de confianza obtendrá este permiso como parte del trabajo — debe estar incluido en su contrato sin cargo adicional. Omitir el permiso puede crear problemas cuando venda la casa o presente un reclamo de seguro. Si un contratista sugiere omitir el permiso para ahorrar dinero, trátelo como una señal de alerta.',

    gfaq10q: '¿Qué garantías debo exigir a un contratista de techos?',
    gfaq10a: 'La garantía de mano de obra del contratista es la que más importa — cubre la calidad de la instalación. Exija al menos 5 años por escrito; 10 años es el estándar de un contratista de calidad. Si un contratista ofrece menos de 5 años en mano de obra, busque otro. La garantía de material del fabricante (de marcas como GAF, Owens Corning o CertainTeed) cubre las tejas defectuosas pero no los errores de instalación, y puede anularse si la instalación no cumple las especificaciones del fabricante. Pregunte si la instalación será certificada por el fabricante para obtener cobertura ampliada.',

    gfaq11q: '¿Cuál es la mejor opción de financiamiento para el reemplazo de techo?',
    gfaq11a: 'Si tiene capital en su casa, una línea de crédito HELOC generalmente ofrece la tasa de interés más baja. Si no, muchos contratistas ofrecen financiamiento promocional al 0% durante 12 meses — esto funciona bien solo si puede pagar el saldo completo antes de que termine el período promocional, ya que se aplican intereses diferidos sobre el monto original si no lo hace. El Préstamo de Mejoras para el Hogar FHA Título I es una opción respaldada por el gobierno disponible hasta $25,000 independientemente del capital. Obtenga todos los términos de financiamiento en un documento escrito separado antes de firmar un contrato de techo, y sea cauteloso con los acuerdos de financiamiento ofrecidos por contratistas que acaba de conocer después de eventos de tormenta.',

    reviewsTitle: 'Lo que dicen nuestros usuarios',
    reviewsSub: 'Reseñas reales de propietarios de Chicago que encontraron su techero aquí.',
    reviewsPlaceholder: 'Reseñas próximamente — esta sección se llenará con experiencias verificadas de usuarios.',

    about: 'Acerca de',
    howItWorks: 'Cómo funciona',
    contact: 'Contacto',
    howWeRank: 'Cómo clasificamos',
    privacyPolicy: 'Política de privacidad',
    disclosure: 'Declaración',
    disclosureText: 'Este sitio web es un servicio de referencia independiente. Podemos recibir compensación por llamadas y referencias. Las clasificaciones se basan en investigación editorial y no constituyen un respaldo.',
  },
}

export type Dict = typeof dict.en

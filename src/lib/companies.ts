export type Company = {
  id: number
  name: string
  stars: string
  starsNum: number
  founded: string
  tag: 'Top Pick' | 'Highly Rated'
  tagEs: string
  desc: string
  descEs: string
  warranty: string
  warrantyEs: string
  expertRating: number
  googleRating: number
  googleReviews: number
  phone: string
  website: string
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'Horizon Restoration',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 2007',
    tag: 'Top Pick',
    tagEs: 'Mejor opción',
    desc: 'Est. 2007, Licensed, BBB A+. In our opinion, one of Chicago\'s most experienced teams for roof replacement and insurance claims.',
    descEs: 'Est. 2007, Con licencia, BBB A+. En nuestra opinión, uno de los equipos más experimentados de Chicago para reemplazo de techo y reclamaciones de seguro.',
    warranty: 'Workmanship warranty: 5 years (extendable to 25)',
    warrantyEs: 'Garantía de mano de obra: 5 años (ampliable a 25)',
    expertRating: 4.9,
    googleRating: 4.9,
    googleReviews: 275,
    phone: '+18445780719',
    website: 'https://www.horizonrestoration.com',
  },
  {
    id: 2,
    name: 'Anchor Point Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 2015',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Est. 2015, Licensed. In our opinion, a top-rated Chicago roofer known for precision, clear communication, and quality workmanship on every project.',
    descEs: 'Est. 2015, Con licencia. En nuestra opinión, una empresa de techado muy valorada en Chicago, conocida por su precisión y excelente comunicación.',
    warranty: 'Workmanship warranty: 10 years',
    warrantyEs: 'Garantía de mano de obra: 10 años',
    expertRating: 4.8,
    googleRating: 5.0,
    googleReviews: 163,
    phone: '+18445780719',
    website: 'https://www.anchorpointroofing.com',
  },
  {
    id: 3,
    name: 'Quality Way Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 2016',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Est. 2016, Licensed, BBB Accredited. In our opinion, a reliable Chicago team with deep roofing and masonry expertise and strong owner involvement.',
    descEs: 'Est. 2016, Con licencia, Acreditado BBB. En nuestra opinión, un equipo confiable con amplia experiencia en techado y mampostería en Chicago.',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.7,
    googleRating: 4.9,
    googleReviews: 95,
    phone: '+18445780719',
    website: 'https://qwchicagoroof.com',
  },
  {
    id: 4,
    name: 'Second City Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 1978',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Est. 1978, Licensed, BBB A+. In our opinion, one of Chicago\'s most established roofers — family-owned and serving Chicagoland for over 45 years.',
    descEs: 'Est. 1978, Con licencia, BBB A+. En nuestra opinión, una de las empresas de techado más consolidadas de Chicago, familiar y con más de 45 años de servicio.',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.7,
    googleRating: 4.3,
    googleReviews: 110,
    phone: '+18445780719',
    website: 'https://www.secondcityconstruction.com',
  },
  {
    id: 5,
    name: 'Prestige Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: '',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Licensed, BBB Accredited. In our opinion, a dedicated residential roofing team with strong attention to detail and a focus on clean, efficient installations.',
    descEs: 'Con licencia, Acreditado BBB. En nuestra opinión, un equipo residencial dedicado con gran atención al detalle e instalaciones limpias y eficientes.',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.5,
    googleRating: 4.8,
    googleReviews: 88,
    phone: '+18445780719',
    website: 'https://chicagoprestigeroofing.com',
  },
  {
    id: 6,
    name: 'Salazar Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 2019',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Est. 2019, Licensed, BBB A+. In our opinion, an excellent value option in Chicago — family-owned with transparent pricing and one of the longest warranties in the city.',
    descEs: 'Est. 2019, Con licencia, BBB A+. En nuestra opinión, una excelente relación calidad-precio en Chicago: empresa familiar con precios transparentes y una de las mejores garantías.',
    warranty: 'Workmanship warranty: 10 years',
    warrantyEs: 'Garantía de mano de obra: 10 años',
    expertRating: 4.6,
    googleRating: 4.8,
    googleReviews: 40,
    phone: '+18445780719',
    website: 'https://salazarroofing.com',
  },
]

export const MAIN_PHONE = '+18445780719'
export const MAIN_PHONE_DISPLAY = '(844) 578-0719'
export const EMAIL = 'roofreplacementchicago@gmail.com'

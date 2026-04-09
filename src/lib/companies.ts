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
    desc: 'Est. 2007 · Full roof replacement · Insurance claims · BBB A+',
    descEs: 'Est. 2007 · Reemplazo completo de techo · Reclamaciones de seguro · BBB A+',
    warranty: 'Workmanship warranty: 5 years (extendable to 25)',
    warrantyEs: 'Garantía de mano de obra: 5 años (ampliable a 25)',
    expertRating: 4.9,
    googleRating: 4.9,
    googleReviews: 275,
    phone: '3120000000',
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
    desc: 'Est. 2015 · Full replacement specialist · Free inspection · Licensed IL',
    descEs: 'Est. 2015 · Especialista en reemplazo completo · Inspección gratuita · Licencia IL',
    warranty: 'Workmanship warranty: 10 years',
    warrantyEs: 'Garantía de mano de obra: 10 años',
    expertRating: 4.8,
    googleRating: 5.0,
    googleReviews: 230,
    phone: '3120000000',
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
    desc: 'Est. 2016 · 30+ years team experience · Unlimited IL license #104.018445',
    descEs: 'Est. 2016 · 30+ años de experiencia del equipo · Licencia ilimitada IL',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.8,
    googleRating: 4.9,
    googleReviews: 95,
    phone: '3120000000',
    website: 'https://qwchicagoroof.com',
  },
  {
    id: 4,
    name: 'Second City Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 1979',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: '45+ years in Chicago · Flat and pitched roofs · IL license #104.013526',
    descEs: '45+ años en Chicago · Techos planos e inclinados · Licencia IL #104.013526',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.7,
    googleRating: 4.8,
    googleReviews: 110,
    phone: '3120000000',
    website: 'https://www.secondcityconstruction.com',
  },
  {
    id: 5,
    name: 'Prestige Roofing',
    stars: '★★★★★',
    starsNum: 5,
    founded: 'Est. 1997',
    tag: 'Highly Rated',
    tagEs: 'Muy valorado',
    desc: 'Est. 1997 · NRCA member · All roof types including flat and slate',
    descEs: 'Est. 1997 · Miembro de NRCA · Todos los tipos de techo incluyendo planos',
    warranty: 'Workmanship warranty: 5 years',
    warrantyEs: 'Garantía de mano de obra: 5 años',
    expertRating: 4.6,
    googleRating: 4.8,
    googleReviews: 88,
    phone: '3120000000',
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
    desc: 'Est. 2019 · BBB A+ · Transparent pricing · Free on-site estimate',
    descEs: 'Est. 2019 · BBB A+ · Precios transparentes · Presupuesto gratuito',
    warranty: 'Workmanship warranty: 3 years',
    warrantyEs: 'Garantía de mano de obra: 3 años',
    expertRating: 4.5,
    googleRating: 4.8,
    googleReviews: 40,
    phone: '3120000000',
    website: 'https://salazarroofing.com',
  },
]

export const MAIN_PHONE = '3120000000'
export const MAIN_PHONE_DISPLAY = '(312) 000-0000'
export const EMAIL = 'roofreplacementchicago@gmail.com'

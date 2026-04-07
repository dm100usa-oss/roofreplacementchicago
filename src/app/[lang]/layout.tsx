import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Reemplazo de Techo Chicago',
  description: 'Recurso experto para el reemplazo de techo en Chicago. Contratistas verificados, precios reales, guía de seguros.',
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (params.lang !== 'es') notFound()
  return <>{children}</>
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, dict } from '@/lib/i18n'

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export default function LangLayout({ children, params }: Props) {
  if (!locales.includes(params.lang as any)) notFound()
  return <>{children}</>
}

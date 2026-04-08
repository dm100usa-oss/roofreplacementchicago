'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { EMAIL } from '@/lib/companies'
import styles from './Footer.module.css'

export default function Footer() {
  const pathname = usePathname()
  const isEs = pathname.startsWith('/es')
  const prefix = isEs ? '/es' : ''

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href={`${prefix}/about`}>{isEs ? 'Acerca de' : 'About'}</Link>
          <Link href={`${prefix}/insurance-guide`}>{isEs ? 'Guía de seguros' : 'Insurance Guide'}</Link>
          <Link href={`${prefix}/roofing-guide`}>{isEs ? 'Guía de techos' : 'Roofing Guide'}</Link>
          <Link href={`${prefix}/how-it-works`}>{isEs ? 'Cómo funciona' : 'How it works'}</Link>
          <Link href={`${prefix}/how-we-rank`}>{isEs ? 'Cómo clasificamos' : 'How we rank'}</Link>
          <Link href={`${prefix}/contact`}>{isEs ? 'Contacto' : 'Contact'}</Link>
          <Link href={`${prefix}/privacy`}>{isEs ? 'Política de privacidad' : 'Privacy Policy'}</Link>
          <Link href={`${prefix}/disclosure`}>{isEs ? 'Declaración' : 'Disclosure'}</Link>
        </div>
        <p className={styles.disclaimer}>
          {isEs
            ? 'Aviso legal: roofreplacementchicago.com es un servicio gratuito para ayudar a los propietarios a conectarse con proveedores de servicios locales. Todos los contratistas/proveedores son independientes y roofreplacementchicago.com no garantiza ningún trabajo realizado. Es responsabilidad del propietario verificar que el contratista contratado cuente con la licencia y el seguro necesarios para el trabajo. Todas las personas en fotos o videos son actores o modelos y no contratistas listados en roofreplacementchicago.com.'
            : 'Disclaimer: roofreplacementchicago.com is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and roofreplacementchicago.com does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on roofreplacementchicago.com.'}
        </p>
        <p className={styles.disclosure}>
          {isEs
            ? 'Este sitio web es también un recurso editorial independiente. Podemos recibir compensación por referencias. Las clasificaciones reflejan investigación independiente y no constituyen un respaldo.'
            : 'This website is also an independent editorial resource. We may receive compensation for referrals. Rankings reflect independent research and do not constitute an endorsement.'}
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Roof Replacement Chicago · {EMAIL}
        </p>
      </div>
    </footer>
  )
}

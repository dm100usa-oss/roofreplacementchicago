'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const isEs = pathname.startsWith('/es')
  const togglePath = isEs ? pathname.replace(/^\/es/, '') || '/' : `/es${pathname}`
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = isEs
    ? [
        { href: '/es', label: 'Inicio' },
        { href: '/es/services/flat-roof-replacement', label: 'Servicios' },
        { href: '/es/roofing-guide', label: 'Guía' },
        { href: '/es/insurance-guide', label: 'Seguro' },
        { href: '/es/about', label: 'Acerca de' },
        { href: '/es/how-we-rank', label: 'Cómo clasificamos' },
        { href: '/es/contact', label: 'Contacto' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/services/asphalt-shingle-replacement', label: 'Services' },
        { href: '/articles/how-to-choose', label: 'Articles' },
        { href: '/insurance-guide', label: 'Insurance' },
        { href: '/roofing-guide', label: 'Roofing Guide' },
        { href: '/about', label: 'About' },
        { href: '/how-we-rank', label: 'How We Rank' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logoWrap}>
            <div>
              <Link href={isEs ? '/es' : '/'} className={styles.logo}>
                Roof Replacement <span>Chicago</span>
              </Link>
              <div style={{ fontSize: '12px', fontWeight: 400, color: '#9ca3af', marginTop: '4px' }}>
                {isEs ? 'Orientación experta para propietarios' : 'Expert guidance for homeowners'}
              </div>
            </div>
            <Link href={togglePath} className={isEs ? styles.langBtnEng : styles.langBtnEsp}>
              {isEs ? 'ENG' : 'ESP'}
            </Link>
          </div>
          <nav className={styles.desktopNav}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.navLink}>{l.label}</Link>
            ))}
          </nav>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  )
}

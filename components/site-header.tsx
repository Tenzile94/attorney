'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { services } from '@/lib/services-data'
import { useLanguage, type Lang } from '@/lib/i18n'

/* ─── Language Switcher ─── */
function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center gap-0.5 bg-white/[0.06] border border-white/[0.10] rounded-md p-0.5">
      {(['az', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded transition-all duration-200 ${
            lang === l
              ? 'bg-accent text-black'
              : 'text-muted-foreground hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.home,    href: '/' },
    { label: t.nav.about,   href: '/about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/[0.06]">

      {/* Top contact bar */}
      <div className="border-b border-white/[0.06] bg-background/40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+994124989595" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              +994 12 498 95 95
            </a>
            <a href="tel:+994502115474" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              +994 50 211 54 74
            </a>
            <a href="mailto:abbas.karimbayli@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              abbas.karimbayli@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-accent font-medium">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              {t.nav.hours}
            </span>
            <LangSwitcher />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="text-accent font-serif font-bold text-lg leading-none">V</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-serif font-bold text-base leading-tight">Kərimbəyli Abbas</div>
              <div className="text-accent text-[10px] uppercase tracking-[0.2em] leading-tight">Vəkil • Hüquqçu</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">

            {navLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1.5 px-4 py-3 text-sm transition-colors duration-200 group ${servicesOpen ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                {t.nav.services}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-accent' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-4 right-4 h-px bg-accent transition-transform duration-200 origin-left ${servicesOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              {servicesOpen && <div className="absolute top-full left-0 right-0 h-3 z-50" />}

              {servicesOpen && (
                <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-72 bg-primary border border-white/[0.08] rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden z-50">
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary border-l border-t border-white/[0.08] rotate-45" />

                  <div className="p-2">
                    <p className="px-3 py-2 text-[10px] text-muted-foreground uppercase tracking-widest">{t.services.label}</p>
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover/item:border-accent/30 group-hover/item:bg-accent/10 transition-colors">
                          <Image
                            src={`/services/${svc.iconFile}.svg`}
                            alt={svc.title}
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain brightness-0 invert opacity-60 group-hover/item:opacity-100 transition-opacity"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors">{svc.title}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-white/[0.06] p-2">
                    <Link
                      href="#services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs text-accent hover:bg-accent/10 rounded-lg transition-colors"
                    >
                      {t.nav.allServices}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="tel:+994502115474" className="hidden lg:flex items-center gap-2 px-4 py-2 border border-accent/40 text-accent text-sm font-medium rounded hover:bg-accent/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              {t.nav.call}
            </a>
            <Link href="#contact" className="hidden md:block px-5 py-2 bg-accent text-black text-sm font-semibold hover:opacity-90 transition rounded">
              {t.nav.consultation}
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden text-muted-foreground hover:text-white transition p-1"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-primary">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">

            {navLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {t.nav.services}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-accent' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 mt-1 border-l border-white/[0.08] pl-4 flex flex-col gap-0.5">
                  {services.map(svc => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Image
                        src={`/services/${svc.iconFile}.svg`}
                        alt={svc.title}
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 object-contain brightness-0 invert opacity-50"
                      />
                      {svc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              {/* Language switcher for mobile */}
              <div className="flex items-center justify-center py-1">
                <LangSwitcher />
              </div>
              <a href="tel:+994502115474" className="flex items-center justify-center gap-2 py-3 border border-accent/40 text-accent text-sm font-medium rounded-lg hover:bg-accent/10 transition-colors">
                {t.nav.call}
              </a>
              <a
                href="https://wa.me/994502115474"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3 bg-accent text-black text-sm font-semibold text-center rounded-lg hover:opacity-90 transition"
              >
                {t.nav.consultation}
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

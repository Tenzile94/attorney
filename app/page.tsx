'use client'
import Image from 'next/image'
import { HeroSection, AboutSection, ServicesSection, WhyChooseSection, PracticeSection, FAQSection, MapSection, ContactSection } from '@/components/lawyer-sections'
import { FadeUp, FadeIn, StaggerList, StaggerItem } from '@/components/motion'

export default function Home() {
  const testimonials = [
    { name: 'Rəfael Quliyev', role: 'Sahibkar', text: 'Ayəzbay Ahmadov müəssisəmin hüquqi məsələlərində dəqiqliyi və peşəkarlığı göstərdi.' },
    { name: 'Nazim Həsənov', role: 'Biznesmen', text: 'Çox çətin kontraktı uğurla həll etdi. Məişət və peşəkarlığı özündə toplayır.' },
    { name: 'Fatimə Səfərova', role: 'Müdirə', text: 'Ailə məsələlərində hakim olmaq, ədalətli nəticə əldə etmişdi.' },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Sticky Social Icons */}
      <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-3 pr-4">
        {[
          { href: 'https://wa.me/994512000000',  file: 'whatsapp',  label: 'WhatsApp' },
          { href: 'https://facebook.com',         file: 'facebook',  label: 'Facebook' },
          { href: 'https://t.me',                 file: 'telegram',  label: 'Telegram' },
          { href: 'https://instagram.com',        file: 'instagram', label: 'Instagram' },
        ].map(s => (
          <a key={s.file} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
            className="w-11 h-11 bg-card border border-white/[0.08] rounded-xl flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 hover:scale-110 transition-all duration-200 shadow-lg">
            <Image src={`/${s.file}.svg`} alt={s.label} width={22} height={22} className="w-5 h-5 object-contain brightness-0 invert" />
          </a>
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/[0.06]">
        {/* Top contact bar */}
        <div className="border-b border-white/[0.06] bg-background/40">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:+994124966666" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                +994 12 496 66 66
              </a>
              <a href="mailto:ayazbay@huquqcu.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                ayazbay@huquqcu.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-accent font-medium">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              B.e–Cümə: 09:00–18:00
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4 flex items-center justify-between gap-8">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <span className="text-accent font-serif font-bold text-lg leading-none">V</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-serif font-bold text-base leading-tight">Ayazbay Ahmadov</div>
                <div className="text-accent text-[10px] uppercase tracking-[0.2em] leading-tight">Vəkil • Hüquqçu</div>
              </div>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: 'Haqqımda', href: '#about' },
                { label: 'Xidmətlər', href: '#services' },
                { label: 'Müştərilər', href: '#testimonials' },
                { label: 'SSS', href: '#faq' },
                { label: 'Əlaqə', href: '#contact' }
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a href="tel:+994124966666" className="hidden lg:flex items-center gap-2 px-4 py-2 border border-accent/40 text-accent text-sm font-medium rounded hover:bg-accent/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Zəng Et
              </a>
              <a href="#contact" className="hidden md:block px-5 py-2 bg-accent text-black text-sm font-semibold hover:opacity-90 transition rounded">
                Konsultasiya Al
              </a>
              <button className="md:hidden text-muted-foreground hover:text-white transition p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      <HeroSection />

      {/* Stats bar */}
      <section className="bg-gold-gradient text-black py-0">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerList className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/15" baseDelay={0.1} staggerDelay={0.1}>
            {[
              { value: '25+', label: 'İl Təcrübə' },
              { value: '500+', label: 'Məmnun Müştəri' },
              { value: '8', label: 'Hüquq Sahəsi' },
              { value: '98%', label: 'Uğur Nisbəti' },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="py-7 px-6 text-center">
                  <div className="text-3xl font-serif font-bold">{stat.value}</div>
                  <div className="text-sm font-semibold uppercase tracking-widest mt-1 opacity-70">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />

      {/* Testimonials */}
      <section className="py-32 bg-background" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp className="text-center mb-20">
            <p className="text-base text-accent uppercase tracking-widest mb-3">Rəylər</p>
            <h2 className="text-4xl font-serif font-bold text-white">Müştərilərin Rəyləri</h2>
          </FadeUp>
          <StaggerList className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <StaggerItem key={i}>
                <div className="p-8 bg-card rounded-xl border border-white/[0.07] card-glow card-glow-hover transition-all duration-300 flex flex-col h-full">
                  <div className="text-accent text-xl mb-4 tracking-widest">★★★★★</div>
                  <p className="text-muted-foreground text-base mb-6 italic leading-relaxed flex-1">"{test.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-base">
                      {test.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">{test.name}</p>
                      <p className="text-sm text-muted-foreground">{test.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <PracticeSection />
      <FAQSection id="faq" />
      <MapSection />

      {/* Footer */}
      <footer className="bg-card border-t border-white/[0.06]">

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-serif font-bold text-base leading-none">V</span>
                </div>
                <div>
                  <div className="text-white font-serif font-bold text-sm leading-tight">Ayazbay Ahmadov</div>
                  <div className="text-accent text-[9px] uppercase tracking-[0.18em]">Vəkil • Hüquqçu</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                25 ildən artıq hüquqi xidmət göstərən, Azərbaycan Vəkillər Kollegiyasının üzvü olan peşəkar vəkil.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base text-white mb-5">Xidmətlər</h4>
              <ul className="text-muted-foreground text-sm space-y-3">
                <li><a href="/services/kommersiya-huququ" className="hover:text-accent transition-colors">Kommersiya Hüququ</a></li>
                <li><a href="/services/cinayat-huququ" className="hover:text-accent transition-colors">Cinayət Hüququ</a></li>
                <li><a href="/services/ailə-huququ" className="hover:text-accent transition-colors">Ailə Hüququ</a></li>
                <li><a href="/services/mulk-huququ" className="hover:text-accent transition-colors">Mülk Hüququ</a></li>
                <li><a href="/services/amak-huququ" className="hover:text-accent transition-colors">Əmək Hüququ</a></li>
                <li><a href="/services/idari-huquq" className="hover:text-accent transition-colors">İdari Hüquq</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-base text-white mb-5">Əlaqə</h4>
              <ul className="text-muted-foreground text-sm space-y-3">
                <li>
                  <a href="tel:+994124966666" className="hover:text-accent transition-colors flex items-start gap-2">
                    <span className="text-accent mt-0.5">📞</span>+994 12 496 66 66
                  </a>
                </li>
                <li>
                  <a href="mailto:ayazbay@huquqcu.com" className="hover:text-accent transition-colors flex items-start gap-2">
                    <span className="text-accent mt-0.5">✉</span>ayazbay@huquqcu.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">📍</span>Bakı, Aziz Ələkbərov 201
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">🕐</span>B.e–Cümə: 09:00–18:00
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-base text-white mb-5">Sosial Şəbəkə</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Facebook',  href: 'https://facebook.com',          file: 'facebook'  },
                  { label: 'Instagram', href: 'https://instagram.com',          file: 'instagram' },
                  { label: 'Telegram',  href: 'https://t.me',                   file: 'telegram'  },
                  { label: 'WhatsApp',  href: 'https://wa.me/994512000000',     file: 'whatsapp'  },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                    <span className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.07] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                      <Image src={`/${s.file}.svg`} alt={s.label} width={16} height={16} className="w-4 h-4 object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                    </span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Official organisations strip */}
          <div className="border-t border-white/[0.06] pt-10 pb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest text-center mb-7">
              Rəsmi Qurumlar və Üzv Olduğum Təşkilatlar
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { file: 'attorney',  label: 'Azərbaycan Vəkillər Kollegiyası', src:"/footer-icons/attorney.png", href: 'https://barassociation.az/' },
                { file: 'justije',   label: 'Ədliyyə Nazirliyi',                  src:"/footer-icons/justije.png", href: 'https://www.justice.gov.az' },
                { file: 'parlament', label: 'Milli Məclis',                        src:"/footer-icons/parlament.png", href: 'https://www.meclis.gov.az' },
                { file: 'mediation', label: 'Mediasiya Mərkəzi',                   src:"/footer-icons/mediation.svg", href: 'https://courts.gov.az/' },
                { file: 'e-law',     label: 'E-Qanun Portalı',                    src:"/footer-icons/e-law.png", href: 'https://e-qanun.az' },
              ].map(org => (
                <a
                  key={org.file}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={org.label}
                  className=" flex items-center justify-center "
                >
                  <Image
                    src={org.src}
                    alt={org.label}
                    width={110}
                    height={40}
                    className="h-14 w-auto object-contain "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/[0.04] bg-background/40">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <p>&copy; 2026  Vəkil Ayazbay Ahmadov. Bütün hüquqlar qorunur.</p>
            <div className="flex items-center gap-5">
                <a href="#" className="hover:text-accent transition-colors">Məxfilik Siyasəti</a>
              <span className="text-white/10">|</span>
              <a href="#" className="hover:text-accent transition-colors">İstifadə Şərtləri</a>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

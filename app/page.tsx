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
      <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-4 pr-4">
        <a href="https://wa.me/994512000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:scale-110 transition shadow-lg" title="WhatsApp">
          <span className="text-xl">💬</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:scale-110 transition shadow-lg" title="Facebook">
          <span className="text-xl">f</span>
        </a>
        <a href="https://telegram.me" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:scale-110 transition shadow-lg" title="Telegram">
          <span className="text-xl">✈️</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:scale-110 transition shadow-lg" title="Instagram">
          <span className="text-xl">📷</span>
        </a>
      </div>

      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-2 text-center text-sm text-accent border-b border-border/20">
            📞 +994 12 496 66 66 • 📧 ayazbay@huquqcu.com
          </div>
          <div className="py-4 flex items-center justify-between">
            <div className="text-3xl font-serif font-bold text-accent">VA</div>
            <nav className="hidden md:flex gap-8 text-base">
              {[
                { label: 'Haqqımda', href: '#about' },
                { label: 'Xidmətlər', href: '#services' },
                { label: 'Müştərilər', href: '#testimonials' },
                { label: 'SSS', href: '#faq' },
                { label: 'Kontakt', href: '#contact' }
              ].map(item => (
                <a key={item.label} href={item.href} className="hover:text-accent transition">{item.label}</a>
              ))}
            </nav>
            <button className="hidden md:block px-6 py-2 bg-accent text-primary font-semibold hover:bg-opacity-90 transition rounded">Əlaqə</button>
            <button className="md:hidden text-accent">☰</button>
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
      <footer className="bg-card border-t border-white/[0.06] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg text-accent mb-4">Haqqında</h4>
              <p className="text-muted-foreground text-base">25 ildən artıq hüquqi xidmət göstərən peşəkar vəkil</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-accent mb-4">Xidmətlər</h4>
              <ul className="text-muted-foreground text-base space-y-2">
                <li>Kommersiya Hüququ</li>
                <li>Ailə Hüququ</li>
                <li>Cinayət Hüququ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-accent mb-4">Əlaqə</h4>
              <ul className="text-muted-foreground text-base space-y-2">
                <li>+994 12 496 66 66</li>
                <li>ayazbay@huquqcu.com</li>
                <li>Bakı, Aziz Ələkbərov 201</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-accent mb-4">Sosial Şəbəkə</h4>
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:text-accent transition">f</a>
                <a href="#" className="hover:text-accent transition">📷</a>
                <a href="#" className="hover:text-accent transition">✈️</a>
                <a href="#" className="hover:text-accent transition">💬</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-base">
            <p>&copy; 2024 Vəkil Ayəzbay Ahmadov. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

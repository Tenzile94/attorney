'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Award, BookOpen, Briefcase } from 'lucide-react'
import SiteHeader from '@/components/site-header'
import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLanguage()
  const ap = t.aboutPage as {
    heroTitle: string; heroSub: string; whoTitle: string; whoPs: readonly string[]
    eduTitle: string; expTitle: string; specTitle: string
    ctaTitle: string; ctaSub: string; ctaCall: string; ctaEmail: string
    specs: readonly { icon: string; title: string; desc: string }[]
    experience: readonly { years: string; org: string; role: string; desc: string }[]
  }

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4 text-center">{ap.heroTitle}</h1>
          <p className="text-center text-muted-foreground text-lg">{ap.heroSub}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-accent">{ap.whoTitle}</h2>
              <div className="space-y-4 text-muted-foreground">
                {ap.whoPs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image src="/lawyer-profile.jpg" alt="About" fill className="object-cover rounded-lg" />
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent flex items-center gap-3">
              <BookOpen className="w-8 h-8" /> {ap.eduTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border/50 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.practice.education[0].title}</h3>
                    <p className="text-muted-foreground text-sm">{t.practice.education[0].sub}</p>
                    <p className="text-accent text-sm font-semibold mt-1">1995 – 1999</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{t.practice.education[0].desc}</p>
              </div>
              <div className="p-8 bg-card border border-accent/30 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.practice.education[1].title}</h3>
                    <p className="text-muted-foreground text-sm">{t.practice.education[1].sub}</p>
                    <p className="text-accent text-sm font-semibold mt-1">2010</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{t.practice.education[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent flex items-center gap-3">
              <Briefcase className="w-8 h-8" /> {ap.expTitle}
            </h2>
            <div className="space-y-6">
              {ap.experience.map((item, i) => (
                <div key={i} className={`p-8 bg-primary/20 border ${i === 2 ? 'border-accent/30' : 'border-border/50'} rounded-lg flex gap-6`}>
                  <div className="text-accent font-semibold text-lg flex-shrink-0 w-24">{item.years}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.org}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent">{ap.specTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ap.specs.map((spec, i) => (
                <div key={i} className="p-6 bg-card border border-border/50 rounded-lg hover:border-accent/50 transition">
                  <div className="text-4xl mb-3">{spec.icon}</div>
                  <h3 className="font-semibold text-accent mb-2">{spec.title}</h3>
                  <p className="text-muted-foreground text-sm">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">{ap.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{ap.ctaSub}</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+994502115474" className="px-8 py-3 bg-accent text-primary font-semibold hover:opacity-90 transition rounded">{ap.ctaCall}</a>
            <a href="mailto:ayazbay@huquqcu.com" className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition rounded">{ap.ctaEmail}</a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">{t.contact.phone}</p>
                <a href="https://wa.me/994502115474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-accent transition-colors">
                  +994 50 211 54 74
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={13} height={13} className="w-3 h-3 brightness-0 invert opacity-60" />
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">{t.contact.email}</p>
                <p className="text-muted-foreground text-sm">ayazbay@huquqcu.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">{t.contact.address}</p>
                <p className="text-muted-foreground text-sm">Bakı, Aziz Ələkbərov 201</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">{t.contact.hours}</p>
                <p className="text-muted-foreground text-sm">{t.nav.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 {t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

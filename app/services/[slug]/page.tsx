import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { services, getServiceBySlug } from '@/lib/services-data'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} | Vəkil Kərimbəyli Abbas Yaqub oğlu`,
    description: service.heroDesc,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-2 text-center text-xs text-accent border-b border-border/20">
            📞 +994 50 211 54 74 • 📧 ayazbay@huquqcu.com
          </div>
          <div className="py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-serif font-bold text-accent">VA</a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="/" className="hover:text-accent transition">Ana Səhifə</a>
              <a href="/#services" className="hover:text-accent transition text-accent">Xidmətlər</a>
              <a href="/about" className="hover:text-accent transition">Haqqımda</a>
              <a href="/#contact" className="hover:text-accent transition">Kontakt</a>
            </nav>
            <a href="/#contact" className="hidden md:block px-6 py-2 bg-accent text-primary font-semibold hover:opacity-90 transition rounded">Əlaqə</a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-accent transition">Ana Səhifə</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/#services" className="hover:text-accent transition">Xidmətlər</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-accent">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src={`/services/${service.iconFile}.svg`}
                  alt={service.title}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-sm text-accent uppercase tracking-widest mb-3">Hüquqi Xidmət</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">{service.title}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-semibold hover:opacity-90 transition rounded"
              >
                Pulsuz Məsləhət Al <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+994502115474"
                className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition rounded"
              >
                📞 Zəng Et
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left — main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Description */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-accent">Xidmət Haqqında</h2>
                <div className="space-y-4">
                  {service.fullDesc.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* What we offer */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-accent">Nə Təklif Edirik?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.whatWeOffer.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-accent">İş Prosesimiz</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-5 p-6 bg-card rounded-xl border border-border/50 hover:border-accent/40 transition">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-serif font-bold text-accent text-lg">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.step}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sticky sidebar */}
            <div className="space-y-6">

              {/* Contact card */}
              <div className="bg-card border border-border/50 rounded-xl p-7 sticky top-24">
                <h3 className="font-serif font-bold text-xl mb-2">Məsləhət Alın</h3>
                <p className="text-muted-foreground text-sm mb-6">Bu xidmət haqqında ilk məsləhətiniz pulsuz</p>
                <div className="space-y-3 mb-6">
                  <a href="tel:+994502115474" className="flex items-center gap-3 text-sm hover:text-accent transition">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    +994 50 211 54 74
                  </a>
                  <a href="mailto:ayazbay@huquqcu.com" className="flex items-center gap-3 text-sm hover:text-accent transition">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    ayazbay@huquqcu.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    B.e – Cümə: 09:00–18:00
                  </div>
                </div>
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-primary font-semibold hover:opacity-90 transition rounded"
                >
                  Müraciət Et <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Other services */}
              <div className="bg-card border border-border/50 rounded-xl p-7">
                <h3 className="font-semibold mb-4">Digər Xidmətlər</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-accent/5 hover:text-accent transition text-sm group"
                    >
                      <span>{s.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                  <a
                    href="/#services"
                    className="flex items-center gap-1 pt-2 text-xs text-accent hover:opacity-80 transition"
                  >
                    Bütün xidmətlər <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">{service.title} üzrə Kömək Lazımdır?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            İlk konsultasiya pulsuz keçirilir. Bu gün əlaqə saxlayın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#contact" className="px-8 py-3 bg-accent text-primary font-semibold hover:opacity-90 transition rounded inline-flex items-center gap-2">
              Pulsuz Konsultasiya Al <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+994502115474" className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition rounded">
              +994 50 211 54 74
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-serif font-bold text-accent mb-3">VA</div>
              <p className="text-muted-foreground text-sm">25 ildən artıq hüquqi xidmət göstərən peşəkar vəkil</p>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Əlaqə</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +994 50 211 54 74</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> ayazbay@huquqcu.com</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Bakı, Aziz Ələkbərov 201</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Xidmətlər</h4>
              <div className="grid grid-cols-2 gap-1">
                {services.slice(0, 6).map((s) => (
                  <a key={s.slug} href={`/services/${s.slug}`} className="text-muted-foreground text-xs hover:text-accent transition py-0.5">
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
            <p>© 2026  Vəkil Kərimbəyli Abbas Yaqub oğlu. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

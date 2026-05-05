'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Plus, Minus, Zap, Handshake, Lock, Scale, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { services } from '@/lib/services-data'
import { FadeUp, SlideIn, StaggerList, StaggerItem } from '@/components/motion'
import { useLanguage } from '@/lib/i18n'

const WA_LINK = 'https://wa.me/994502115474'

/** Desktop → scroll to #contact  |  Mobile → WhatsApp */
const CtaButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <>
    <Link href="#contact" className={`hidden md:inline-flex items-center gap-2 ${className}`}>
      {children}
    </Link>
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`inline-flex md:hidden items-center gap-2 ${className}`}>
      {children}
    </a>
  </>
)

export const HeroSection = () => {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Hero" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-16 pb-14 md:py-20 grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="text-center md:text-left">

          <FadeUp delay={0.05}>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent border border-accent/40 rounded-full px-4 py-1 mb-5">
              {t.hero.badge}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white leading-snug mb-4">
              {t.hero.titlePre}
              <span className="text-accent">{t.hero.titleAccent}</span>
              {t.hero.titlePost}
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="hidden sm:block text-base md:text-lg text-white/70 mb-6 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {t.hero.pills.map((tag: string) => (
                <span key={tag} className="text-xs font-medium text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <CtaButton className="px-7 py-3.5 bg-accent text-black font-semibold hover:opacity-90 transition rounded text-sm">
                {t.hero.cta}
              </CtaButton>
              <Link href="/about" className="px-7 py-3.5 border border-white/30 text-white font-medium hover:bg-white/10 transition rounded text-sm">
                {t.hero.about}
              </Link>
            </div>

            <a href="tel:+994502115474" className="inline-flex items-center gap-2 mt-5 text-sm text-white/60 hover:text-accent transition-colors">
              <span className="text-accent">📞</span> +994 50 211 54 74
            </a>
          </FadeUp>
        </div>

        <SlideIn from="right" delay={0.2} className="relative hidden md:block h-[500px]">
          <Image src="/lawyer-profile.jpg" alt="Lawyer" fill className="object-cover rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.6)]" />
        </SlideIn>
      </div>
    </section>
  )
}

export const AboutSection = () => {
  const { t } = useLanguage()
  return (
    <section className="py-32 bg-card" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SlideIn from="left">
            <div className="relative rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <Image src="/lawyer-profile.jpg" alt="About" width={400} height={500} className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </SlideIn>
          <SlideIn from="right" delay={0.1}>
            <div>
              <p className="text-base text-accent mb-3 uppercase tracking-widest">{t.about.label}</p>
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">
                {t.about.title}
              </h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t.about.p1}</p>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t.about.p2}</p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">{t.about.p3}</p>
              <div className="space-y-4 mb-10">
                {(t.about.bullets as readonly string[]).map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm">✔</span>
                    </div>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block px-8 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
                {t.about.btn}
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

export const ServicesSection = () => {
  const { t } = useLanguage()
  return (
    <section className="py-32 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <FadeUp className="text-center mb-20">
          <p className="text-base text-accent uppercase tracking-widest mb-3">{t.services.label}</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">{t.services.subtitle}</p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </FadeUp>

        <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <StaggerItem key={svc.slug}>
              <Link
                href={`/services/${svc.slug}`}
                className="group relative flex flex-col bg-card border border-white/[0.07] rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(188,152,68,0.15)]"
              >
                <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent group-hover:via-accent transition-all duration-300" />

                <div className="flex flex-col items-start p-8 h-full">
                  <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-7 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 flex-shrink-0">
                    <div className="relative w-8 h-8">
                      <Image
                        src={`/services/${svc.iconFile}.svg`}
                        alt={svc.title}
                        fill
                        className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                    {svc.title}
                  </h3>

                  <div className="w-8 h-px bg-accent/40 mb-4 group-hover:w-14 transition-all duration-500" />

                  <p className="text-muted-foreground text-base leading-relaxed flex-1">
                    {svc.shortDesc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-accent/60 group-hover:text-accent transition-colors duration-300">
                    <span>{t.services.more}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>

        <FadeUp delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground text-base mb-4">{t.services.question}</p>
          <CtaButton className="px-8 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
            {t.services.cta} <ArrowRight className="w-4 h-4" />
          </CtaButton>
        </FadeUp>
      </div>
    </section>
  )
}

export const WhyChooseSection = () => {
  const { t } = useLanguage()

  const icons = [
    <Zap className="w-8 h-8 text-accent" key="zap" />,
    <Handshake className="w-8 h-8 text-accent" key="handshake" />,
    <Lock className="w-8 h-8 text-accent" key="lock" />,
    <Scale className="w-8 h-8 text-accent" key="scale" />,
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      <Image src="/office-interior.jpg" alt="Office interior" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative max-w-7xl mx-auto px-4">
        <FadeUp className="text-center mb-20">
          <p className="text-base text-accent uppercase tracking-widest mb-3">{t.why.label}</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">{t.why.title}</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </FadeUp>

        <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {(t.why.reasons as readonly { title: string; desc: string }[]).map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mb-5">
                  {icons[i]}
                </div>
                <div className="w-8 h-px bg-accent/50 mb-4" />
                <h3 className="font-serif font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <FadeUp delay={0.3} className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12">
          <div>
            <p className="font-serif font-bold text-2xl text-white mb-1">{t.why.ctaTitle}</p>
            <p className="text-muted-foreground text-base">{t.why.ctaSub}</p>
          </div>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <CtaButton className="px-10 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
              {t.why.ctaBtn}
            </CtaButton>
            <p className="text-xs text-muted-foreground">{t.why.ctaNote}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export const PracticeSection = () => {
  const { t } = useLanguage()
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <FadeUp><h2 className="text-4xl font-serif font-bold text-center mb-20 text-white">{t.practice.title}</h2></FadeUp>

        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-8 text-accent">{t.practice.eduTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(t.practice.education as readonly { icon: string; title: string; sub: string; desc: string }[]).map((item, i) => (
              <div key={i} className="p-8 bg-card border border-white/[0.07] card-glow rounded-xl flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-xl mb-1 text-white">{item.title}</h4>
                  <p className="text-accent text-base mb-1">{item.sub}</p>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold mb-8 text-accent">{t.practice.workTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {(t.practice.work as readonly { year: string; place: string; role: string }[]).map((item, i) => (
              <div key={i} className="p-6 bg-card border border-accent/20 card-glow rounded-xl">
                <div className="text-accent font-semibold text-base mb-2">{item.year}</div>
                <h4 className="font-semibold text-lg text-white mb-1">{item.place}</h4>
                <p className="text-muted-foreground text-base">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const FAQSection = ({ id }: { id?: string } = {}) => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-card" id={id}>
      <div className="max-w-3xl mx-auto px-4">
        <FadeUp><h2 className="text-4xl font-serif font-bold text-center mb-20 text-white">{t.faq.title}</h2></FadeUp>
        <div className="space-y-3">
          {(t.faq.items as readonly { q: string; a: string }[]).map((faq, i) => (
            <div key={i} className="bg-background border border-white/[0.07] card-glow rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/[0.03] transition"
              >
                <h3 className="font-semibold text-white text-left text-base">{faq.q}</h3>
                <div className="text-accent flex-shrink-0 ml-4">{expanded === i ? <Minus size={18} /> : <Plus size={18} />}</div>
              </button>
              {expanded === i && (
                <div className="px-6 pb-6 pt-0 text-muted-foreground text-base border-t border-white/[0.05] animate-fade-in leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type ContactFormData = {
  name: string
  email: string
  phone: string
  whatsapp?: string
  subject: string
  message: string
}

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const contactSchema = useMemo(() => z.object({
    name: z.string().min(2, t.contact.nameErr),
    email: z.string().email(t.contact.emailErr),
    phone: z.string().min(7, t.contact.phoneErr),
    whatsapp: z.string().optional(),
    subject: z.string().min(3, t.contact.subjectErr),
    message: z.string().min(10, t.contact.messageErr),
  }), [t])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-black/30 backdrop-blur-sm border ${hasError ? 'border-red-400' : 'border-white/[0.15]'} rounded-lg focus:outline-none focus:border-accent text-base text-white placeholder:text-white/40 transition-colors`

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <Image src="/consultation.jpg" alt="Consultation" fill className="object-cover object-center" priority={false} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.84), rgba(0,0,0,0.88))' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <p className="text-base text-accent uppercase tracking-widest mb-3">{t.contact.label}</p>
          <h2 className="text-4xl font-serif font-bold text-white">{t.contact.title}</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <SlideIn from="left">
            <div className="space-y-8">
              <p className="text-white/70 text-base leading-relaxed">{t.contact.subtitle}</p>
              {[
                {
                  icon: <Phone className="w-6 h-6 text-accent" />,
                  label: t.contact.phone,
                  lines: [
                    <a key="wa" href="https://wa.me/994502115474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                      +994 50 211 54 74
                      <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} className="w-3.5 h-3.5 brightness-0 invert opacity-70" />
                    </a>
                  ] as React.ReactNode[],
                },
                { icon: <Mail className="w-6 h-6 text-accent" />, label: t.contact.email, lines: ['ayazbay@huquqcu.com'] },
                { icon: <MapPin className="w-6 h-6 text-accent" />, label: t.contact.address, lines: t.contact.addrLines as readonly string[] },
                { icon: <Clock className="w-6 h-6 text-accent" />, label: t.contact.hours, lines: t.contact.hoursLines as readonly string[] },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-accent text-base mb-1">{item.label}</p>
                    {(item.lines as (string | React.ReactNode)[]).map((l, idx) => (
                      <div key={idx} className="text-white/70 text-base">{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>

          {/* Right — contact form */}
          <SlideIn from="right" delay={0.1}>
            <div className="bg-black/40 backdrop-blur-md border border-white/[0.12] rounded-2xl p-8">
              <h3 className="font-serif font-bold text-xl text-white mb-6">{t.contact.formTitle}</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register('name')} placeholder={t.contact.namePh} className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register('phone')} placeholder={t.contact.phonePh} className={inputClass(!!errors.phone)} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register('email')} type="email" placeholder={t.contact.emailPh} className={inputClass(!!errors.email)} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4 brightness-0 invert opacity-50" />
                    </div>
                    <input {...register('whatsapp')} placeholder={t.contact.waPh} className={`${inputClass(false)} pl-9`} />
                  </div>
                </div>
                <div>
                  <input {...register('subject')} placeholder={t.contact.subjectPh} className={inputClass(!!errors.subject)} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    placeholder={t.contact.messagePh}
                    rows={5}
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {t.contact.success}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {t.contact.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-black font-semibold hover:opacity-90 disabled:opacity-60 transition rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> {t.contact.sending}</>
                  ) : (
                    <>{t.contact.send} <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

export const MapSection = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'tour'>('map')
  const { t } = useLanguage()

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <FadeUp className="text-center py-16">
          <p className="text-base text-accent uppercase tracking-widest mb-3">{t.map.label}</p>
          <h2 className="text-4xl font-serif font-bold text-white">{t.map.title}</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </FadeUp>

        {/* Tab switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-card border border-white/[0.07] rounded-xl p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'map' ? 'bg-accent text-black shadow' : 'text-muted-foreground hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              {t.map.mapTab}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'tour' ? 'bg-accent text-black shadow' : 'text-muted-foreground hover:text-white'
              }`}
            >
              <span className="text-base leading-none">360°</span>
              {t.map.tourTab}
            </button>
          </div>
        </div>

        {/* Panel — key forces full unmount/remount when tab changes so the iframe reloads */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{ height: '480px' }}>
          {activeTab === 'map' ? (
            <iframe
              key="map"
              src="https://maps.google.com/maps?q=40.375759,49.837082&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <iframe
              key="tour"
              src="http://www.azerbaijan360.az/what-to-see/vekil-burolari/fides-v-kil-burosu-1/"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={t.map.tourTab}
            />
          )}
        </div>

        {/* Info strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <a
            href="https://maps.app.goo.gl/MrmZxopm51esYh66A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <MapPin className="w-4 h-4 text-accent" />
            {t.map.address}
          </a>
          <a href="https://wa.me/994502115474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            +994 50 211 54 74
            <Image src="/whatsapp.svg" alt="WhatsApp" width={13} height={13} className="w-3 h-3 brightness-0 invert opacity-60" />
          </a>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            {t.nav.hours}
          </span>
        </div>
      </div>
    </section>
  )
}

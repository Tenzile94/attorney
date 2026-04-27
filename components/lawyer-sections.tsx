'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Plus, Minus, Zap, Handshake, Lock, Scale, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { services } from '@/lib/services-data'
import { FadeUp, SlideIn, StaggerList, StaggerItem } from '@/components/motion'

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

export const HeroSection = () => (
  <section className="relative h-screen min-h-[640px] flex items-center justify-between overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image src="/hero-bg.jpg" alt="Hero" fill className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
      <div>
        <FadeUp delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Hüquqlarınızı qorumaq üçün güclü hüquqi dəstək
          </h1>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            25 ildən artıq təcrübə ilə cinayət, mülki və ailə hüququ sahələrində etibarlı hüquqi həllər təqdim edirəm
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <div className="flex gap-2 text-base text-accent mb-10 flex-wrap">
            <span>📞 +994 50 211 54 74</span>
            <span>•</span>
            <span>📧 ayazbay@huquqcu.com</span>
            <span>•</span>
            <span>✔ İlk konsultasiya mümkündür</span>
          </div>
          <div className="flex gap-4">
            <CtaButton className="px-8 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
              Pulsuz Konsultasiya Al
            </CtaButton>
            <Link href="/about" className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition rounded">
              Mənim Haqqımda
            </Link>
          </div>
        </FadeUp>
      </div>
      <SlideIn from="right" delay={0.2} className="relative h-96 md:h-[500px]">
        <Image src="/lawyer-profile.jpg" alt="Lawyer" fill className="object-cover rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.6)]" />
      </SlideIn>
    </div>
  </section>
)

export const AboutSection = () => (
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
            <p className="text-base text-accent mb-3 uppercase tracking-widest">Haqqımda</p>
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">
              Vəkil Kərimbəyli Abbas Yaqub oğlu haqqında
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              25 ildən artıq peşəkar hüquqi təcrübəyə malik olaraq, müştərilərimin hüquqlarını qorumaq və onların problemlərinə effektiv həllər təqdim etmək əsas məqsədimdir.
            </p>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Fəaliyyətim ərzində cinayət, mülki və ailə hüququ sahələrində yüzlərlə iş üzrə uğurlu nəticələr əldə etmişəm. Azərbaycan Respublikasının Vəkillər Kollegiyasının üzvü olaraq rəsmi fəaliyyət göstərirəm.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Mənim yanaşmam yalnız hüquqi biliklərlə deyil, eyni zamanda məsuliyyət, etika və hər bir müştəriyə fərdi diqqət prinsipləri ilə formalaşır.
            </p>
            <div className="space-y-4 mb-10">
              {['24 saat ərzində operativ cavab', 'İlk konsultasiya imkanı', 'Məhkəmə işlərində yüksək uğur göstəricisi'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm">✔</span>
                  </div>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-block px-8 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
              Haqqımda Ətraflı
            </Link>
          </div>
        </SlideIn>
      </div>
    </div>
  </section>
)

export const ServicesSection = () => (
  <section className="py-32 bg-background" id="services">
    <div className="max-w-7xl mx-auto px-4">
      <FadeUp className="text-center mb-20">
        <p className="text-base text-accent uppercase tracking-widest mb-3">Xidmətlərim</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Hüquqi Xidmətlər</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          25 ildən artıq təcrübə ilə hüququn müxtəlif sahələrində peşəkar xidmət göstərirəm
        </p>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
      </FadeUp>

      <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <StaggerItem key={svc.slug}>
            <Link
              href={`/services/${svc.slug}`}
              className="group relative flex flex-col bg-card border border-white/[0.07] rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(188,152,68,0.15)]"
            >
              {/* Top gold bar that expands on hover */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent group-hover:via-accent transition-all duration-300" />

              <div className="flex flex-col items-start p-8 h-full">
                {/* Icon container */}
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

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-white mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  {svc.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-accent/40 mb-4 group-hover:w-14 transition-all duration-500" />

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed flex-1">
                  {svc.shortDesc}
                </p>

                {/* Read more indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm text-accent/60 group-hover:text-accent transition-colors duration-300">
                  <span>Ətraflı</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>

      <FadeUp delay={0.3} className="mt-16 text-center">
        <p className="text-muted-foreground text-base mb-4">Xidmətlər haqqında sualınız var?</p>
        <CtaButton className="px-8 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
          Pulsuz Məsləhət Al <ArrowRight className="w-4 h-4" />
        </CtaButton>
      </FadeUp>
    </div>
  </section>
)

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Sürətli Cavab',
      desc: '24 saat ərzində cavab verilir. Təcili hallarda dərhal əlaqə.',
    },
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: 'Fərdi Yanaşma',
      desc: 'Hər müştərinin işi unikal qiymətləndirilir. Şablona uyğun deyil, sizin üçün strategiya hazırlanır.',
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: 'Tam Məxfilik',
      desc: 'Vəkil-müştəri sirri qanunla qorunur. Məlumatlarınız heç vaxt üçüncü şəxslərə verilmir.',
    },
    {
      icon: <Scale className="w-8 h-8 text-accent" />,
      title: 'Təcrübəli Məhkəmə Müdafiəsi',
      desc: '25 ildən artıq məhkəmə zalında təcrübə. Mürəkkəb davalarda güclü hüquqi müdafiə.',
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/office-interior.jpg"
        alt="Office interior"
        fill
        className="object-cover object-center"
      />
      {/* Gradient overlay — dark navy bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <FadeUp className="text-center mb-20">
          <p className="text-base text-accent uppercase tracking-widest mb-3">Üstünlüklərim</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Niyə Məni Seçməlisiniz?</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </FadeUp>

        {/* Reasons — no boxes, open layout */}
        <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {reasons.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                {/* Gold divider */}
                <div className="w-8 h-px bg-accent/50 mb-4" />
                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-white mb-3">{item.title}</h3>
                {/* Desc */}
                <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        {/* CTA */}
        <FadeUp delay={0.3} className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12">
          <div>
            <p className="font-serif font-bold text-2xl text-white mb-1">Hüquqi probleminizi gecikdirməyin</p>
            <p className="text-muted-foreground text-base">Bu gün müraciət edin və ilkin konsultasiya əldə edin.</p>
          </div>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <CtaButton className="px-10 py-3 bg-accent text-black font-semibold hover:opacity-90 transition rounded">
              Pulsuz Konsultasiya Al
            </CtaButton>
            <p className="text-xs text-muted-foreground">✔ Məxfi • ✔ Öhdəliksiz • ✔ Sürətli cavab</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export const PracticeSection = () => (
  <section className="py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <FadeUp><h2 className="text-4xl font-serif font-bold text-center mb-20 text-white">Təcrübə Sahələri</h2></FadeUp>

      <div className="mb-16">
        <h3 className="text-2xl font-serif font-bold mb-8 text-accent">Tədris Yeri</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '🎓', title: 'Bakı Dövlət Universiteti', sub: 'Hüquq Fakültəsi, 1995-1999', desc: 'Beynəlxalq Hüquq ixtisasını öyrəndim' },
            { icon: '📚', title: 'Hüquq Kolegiası', sub: 'Vəkil Sertifikası, 2010', desc: 'Fərdi Hüquq Kateqoriyası müsələmə' },
          ].map((item, i) => (
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
        <h3 className="text-2xl font-serif font-bold mb-8 text-accent">İşlədiyi Yerlər</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: '1999–2005', place: 'Gənc Vəkillərin Assosiasiyası', role: 'Junior Vəkil' },
            { year: '2005–2010', place: 'Bakı Hüquq Şirkəti', role: 'Senior Vəkil' },
            { year: '2010–İndiki', place: 'Fərdi Praktika', role: 'Sərbəst Vəkil' },
          ].map((item, i) => (
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

export const FAQSection = ({ id }: { id?: string } = {}) => {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    { q: 'Ilk məsləhət necə olur?', a: 'Telefon, video yaxud şəxsən görüş üzrə ilk konsultasiya 30 dəqiqə ərzində pulsuz keçirilir.' },
    { q: 'Honorar necə hesablanır?', a: 'Honorar məsələnin mürəkkəbliyinə, vaxt sərf etməsinə və nəticəsinə görə hesablanır.' },
    { q: 'Davaya nə qədər vaxt tələ olur?', a: 'Sadə davalar 1-3 ay, mürəkkəb davalar 6-12 ay və daha çox vaxta tələ ola bilər.' },
    { q: 'Gizlilik qorunur mu?', a: 'Bəli, vəkil-müştəri münasibətində tam gizlilik qanunla təmin edilir.' },
    { q: 'Online xidmət göstərirsiniz?', a: 'Bəli, email, WhatsApp, Zoom üzərindən məsləhət və bəzi proseduralar keçirilə bilər.' },
  ]

  return (
    <section className="py-32 bg-card" id={id}>
      <div className="max-w-3xl mx-auto px-4">
        <FadeUp><h2 className="text-4xl font-serif font-bold text-center mb-20 text-white">Tez-tez Soruşulan Suallar</h2></FadeUp>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
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

const contactSchema = z.object({
  name: z.string().min(2, 'Ad ən az 2 simvol olmalıdır'),
  email: z.string().email('Düzgün e-mail ünvanı daxil edin'),
  phone: z.string().min(7, 'Telefon nömrəsi tələb olunur'),
  subject: z.string().min(3, 'Mövzu tələb olunur'),
  message: z.string().min(10, 'Mesaj ən az 10 simvol olmalıdır'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      {/* Background image */}
      <Image
        src="/consultation.jpg"
        alt="Consultation"
        fill
        className="object-cover object-center"
        priority={false}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.84), rgba(0,0,0,0.88))' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <p className="text-base text-accent uppercase tracking-widest mb-3">Əlaqə</p>
          <h2 className="text-4xl font-serif font-bold text-white">Mənimlə  Əlaqə Saxlayın</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <SlideIn from="left">
            <div className="space-y-8">
              <div>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  Hüquqi məsələniz üçün Mənimlə  əlaqə saxlayın. 24 saat ərzində cavab veririk.
                </p>
              </div>
              {[
                { icon: <Phone className="w-6 h-6 text-accent" />, label: 'Telefon', lines: [
                  <a key="wa" href="https://wa.me/994502115474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    +994 50 211 54 74
                    <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} className="w-3.5 h-3.5 brightness-0 invert opacity-70" />
                  </a>
                ] as React.ReactNode[] },
                { icon: <Mail className="w-6 h-6 text-accent" />, label: 'E-mail', lines: ['ayazbay@huquqcu.com'] },
                { icon: <MapPin className="w-6 h-6 text-accent" />, label: 'Ünvan', lines: ['Bakı, Nəsimi rayonu, Aziz Ələkbərov küçəsi 201', 'Həmrəy-Ələkbərov Biznes Mərkəzi, 7-ci mərtəbə'] },
                { icon: <Clock className="w-6 h-6 text-accent" />, label: 'İş Saatları', lines: ['Bazar ertəsi – Cümə: 09:00 – 18:00', 'Şənbə: 09:00 – 14:00'] },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-accent text-base mb-1">{item.label}</p>
                    {item.lines.map((l, idx) => (
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
              <h3 className="font-serif font-bold text-xl text-white mb-6">Mesaj Göndərin</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register('name')} placeholder="Adınız *" className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register('phone')} placeholder="Telefon *" className={inputClass(!!errors.phone)} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <input {...register('email')} type="email" placeholder="E-mail *" className={inputClass(!!errors.email)} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input {...register('subject')} placeholder="Mövzu *" className={inputClass(!!errors.subject)} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Mesajınız *"
                    rows={5}
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Göndərilmə zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-black font-semibold hover:opacity-90 disabled:opacity-60 transition rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Göndərilir...</>
                  ) : (
                    <>Göndər <ArrowRight className="w-4 h-4" /></>
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

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <FadeUp className="text-center py-16">
          <p className="text-base text-accent uppercase tracking-widest mb-3">Ünvanımız</p>
          <h2 className="text-4xl font-serif font-bold text-white">Ofisimizi Tapın</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </FadeUp>

        {/* Tab switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-card border border-white/[0.07] rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'map'
                  ? 'bg-accent text-black shadow'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Xəritə
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'tour'
                  ? 'bg-accent text-black shadow'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              <span className="text-base leading-none">360°</span>
              Virtual Tur
            </button>
          </div>
        </div>

        {/* Panel */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{ height: '480px' }}>
          {activeTab === 'map' ? (
            <iframe
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
              src="http://www.azerbaijan360.az/what-to-see/vekil-burolari/fides-v-kil-burosu-1/"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Virtual Tur"
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
            47 Füzuli küçəsi, Fuzuli Residence, Bakı
          </a>
          <a href="https://wa.me/994502115474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            +994 50 211 54 74
            <Image src="/whatsapp.svg" alt="WhatsApp" width={13} height={13} className="w-3 h-3 brightness-0 invert opacity-60" />
          </a>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            B.e–Cümə: 09:00–18:00
          </span>
        </div>
      </div>
    </section>
  )
}

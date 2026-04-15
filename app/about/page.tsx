'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Award, BookOpen, Briefcase } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold text-accent">VA</a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/" className="hover:text-accent transition">Ana Səhifə</a>
            <a href="/#services" className="hover:text-accent transition">Xidmətlər</a>
            <a href="/#contact" className="hover:text-accent transition">Kontakt</a>
          </nav>
          <a href="/#contact" className="hidden md:block px-6 py-2 bg-accent text-primary font-semibold hover:bg-opacity-90 transition rounded">Əlaqə</a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4 text-center">Vəkil Ayəzbay Ahmadov</h1>
          <p className="text-center text-muted-foreground text-lg">25 ildən artıq peşəkar hüquqi xidmət</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-accent">Mən kimim?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Azərbaycanda 25 ildən artıq hüquqi xidmət sahəsində fəaliyyət göstərən peşəkar vəkil Ayəzbay Ahmadovdur.</p>
                <p>1995-1999 yıllarında Bakı Dövlət Universitetinin Hüquq Fakültəsində Beynəlxalq Hüquq ixtisasını öyrənmişəm. Məyyit dərslərə əlavə olaraq, hüquq sahəsində müəssir nəticə almaq üçün praktik biliklərlə cəhizlənmişəm.</p>
                <p>2010-cu ildə Azərbaycanda Hüquq Kolegiasından Fərdi Hüquq Kateqoriyasında vəkil sertifikatı almış və rəsmi olaraq qeydiyyatdan keçmişəm. Bu müsələmə məni müştərilərin tam hüquqi nümayəndəliyi etməyə səlahiyyət verir.</p>
                <p>Hər yeni məsələ üzərində işləyərkən, qanunun mahiyyətini, etikanı və ən mühümü, müştərilərimizin mənafelərini yüksək tuturum. Bununla yanaşı, hüquq sisteminə fərdi töhfə vermək mənim böyük məqsədidir.</p>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image src="/lawyer-profile.jpg" alt="About" fill className="object-cover rounded-lg" />
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent flex items-center gap-3">
              <BookOpen className="w-8 h-8" /> Təhsil
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border/50 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bakı Dövlət Universiteti</h3>
                    <p className="text-muted-foreground text-sm">Hüquq Fakültəsi</p>
                    <p className="text-accent text-sm font-semibold mt-1">1995 - 1999</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Beynəlxalq Hüquq ixtisası. Universitetdə təhsil dövründə komandasına dəstək vermiş vətəndaşlığımı göstərməyə çalışmışam. Hüquq sahəsində fundamentəl bilik aldığım bu institutdan minnətdar qalıram.</p>
              </div>
              <div className="p-8 bg-card border border-accent/30 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Azərbaycanda Hüquq Kolegiası</h3>
                    <p className="text-muted-foreground text-sm">Vəkil Sertifikası</p>
                    <p className="text-accent text-sm font-semibold mt-1">2010</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Fərdi Hüquq Kateqoriyasında sertifikasiya. Bu sertifikat məni müştərilərin hüquqlayını və maraqlarını tam olaraq müdafiə etməyə səlahiyyət verirlər. Etika və peşəkarlıq standartlarına əməl etmişəm.</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent flex items-center gap-3">
              <Briefcase className="w-8 h-8" /> Peşəkar Təcrübə
            </h2>
            <div className="space-y-6">
              <div className="p-8 bg-primary/20 border border-border/50 rounded-lg flex gap-6">
                <div className="text-accent font-semibold text-lg flex-shrink-0 w-24">1999-2005</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Gənc Vəkillərin Assosiasiyası</h3>
                  <p className="text-muted-foreground">Junior Vəkil kimi çalışaraq, kompleks hüquqi məsələlərin həllində iştirak etmişəm. Baş vəkillərin yanında böyük praktik bilik qazanmışam. Kommersiya hüququ, ailə hüququ və cinayət hüququ sahəsində gəlmə təcrübə əldə etmişəm.</p>
                </div>
              </div>
              <div className="p-8 bg-primary/20 border border-border/50 rounded-lg flex gap-6">
                <div className="text-accent font-semibold text-lg flex-shrink-0 w-24">2005-2010</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bakı Hüquq Şirkəti</h3>
                  <p className="text-muted-foreground">Senior Vəkil pozisiyasında qoruyucu məsuliyyətdə işlə etmişəm. Korporativ məsləhət, kontraktlar və beynəlxalq hüquq məsələlərində xidmət göstərmişəm. Bir neçə böyük kompaniyayla ləng müddətli müştəri əlaqələri qurmuşam.</p>
                </div>
              </div>
              <div className="p-8 bg-primary/20 border border-accent/30 rounded-lg flex gap-6">
                <div className="text-accent font-semibold text-lg flex-shrink-0 w-24">2010-İndiki</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fərdi Hüquqi Praktika</h3>
                  <p className="text-muted-foreground">2010-cu ildən fərdi hüquqi praktika əsasında sərbəst vəkil kimi çalışırım. Bu dövrədə müştərilərimə daha spesifik və xüsusi yanaşma göstərə biləcəyim, təcrübəm səviyyəsində keyfiyyətli xidmət təqdim etmişəm. 500-dən artıq məmnun müştərilərlə ləng müddətli münasibət qurmuşam.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-12 text-accent">Mütəxəssislik Sahələri</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '📋', title: 'Kommersiya Hüququ', desc: 'Kontraktlar, B2B münasibətləri, şirkət qurulması' },
                { icon: '👨‍👩‍👧', title: 'Ailə Hüququ', desc: 'Nikah, boşanma, övlad yetiştirmə, vəsiyyət' },
                { icon: '⚖️', title: 'Cinayət Hüququ', desc: 'Müdafiə xidməti, timsil, təqsir mübahasəsi' },
                { icon: '🏠', title: 'Mülk Hüququ', desc: 'Daş mülk, inşaat, torpaq münasibətləri' },
                { icon: '💼', title: 'Əmək Hüququ', desc: 'İş müqavilələri, işçi-işəgötürən münasibətləri' },
                { icon: '🌍', title: 'Beynəlxalq Hüquq', desc: 'Beynəlxalq müqavilələr, eksport-import' },
              ].map((spec, i) => (
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
          <h2 className="text-4xl font-serif font-bold mb-6">Məyə Etibar Edin</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Hüquqi məsələləriniz üzrə məsləhət almaq üçün indi müraciət edin. İlk konsultasiya pulsuz keçirilir.</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+994124966666" className="px-8 py-3 bg-accent text-primary font-semibold hover:opacity-90 transition rounded">Telefon Etmə</a>
            <a href="mailto:ayazbay@huquqcu.com" className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition rounded">E-mail Yolla</a>
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
                <p className="font-semibold text-accent mb-2">Telefon</p>
                <p className="text-muted-foreground text-sm">+994 12 496 66 66</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">E-mail</p>
                <p className="text-muted-foreground text-sm">ayazbay@huquqcu.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">Ünvan</p>
                <p className="text-muted-foreground text-sm">Bakı, Aziz Ələkbərov 201</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent mb-2">İş Saatları</p>
                <p className="text-muted-foreground text-sm">9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2026  Vəkil Ayəzbay Ahmadov. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </div>
  )
}

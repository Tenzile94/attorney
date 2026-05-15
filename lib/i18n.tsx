'use client'
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'az' | 'en'

/* ─────────────────────────── TRANSLATIONS ─────────────────────────── */
export const translations = {
  az: {
    nav: {
      home: 'Ana Səhifə',
      about: 'Haqqımda',
      contact: 'Əlaqə',
      services: 'Xidmətlər',
      allServices: 'Bütün xidmətlərə bax',
      consultation: 'Konsultasiya Al',
      call: 'Zəng Et',
      hours: 'B.e–Cümə: 09:00–18:00',
    },
    hero: {
      badge: 'Peşəkar Hüquqi Xidmət',
      titlePre: 'Hüquqlarınızı ',
      titleAccent: 'qorumaq',
      titlePost: ' üçün güclü dəstək',
      subtitle: '19 ildən artıq təcrübə ilə cinayət, mülki və ailə hüququ sahələrində etibarlı hüquqi həllər',
      pills: ['19+ İl Təcrübə', '98% Uğur', 'Pulsuz Konsultasiya'],
      cta: 'Pulsuz Konsultasiya Al',
      about: 'Haqqımda',
    },
    about: {
      label: 'Haqqımda',
      title: 'Vəkil Kərimbəyli Abbas Yaqub oğlu haqqında',
      p1: '19 ildən artıq peşəkar hüquqi təcrübəyə malik olaraq, müştərilərimin hüquqlarını qorumaq və onların problemlərinə effektiv həllər təqdim etmək əsas məqsədimdir.',
      p2: 'Fəaliyyətim ərzində cinayət, əmlak və əşya hüququ , vərəsəlik hüququ və ailə hüququ sahələrində yüzlərlə iş üzrə uğurlu nəticələr əldə etmişəm. Azərbaycan Respublikasının Vəkillər Kollegiyasının intizam komissiyasının üzvü olaraq rəsmi fəaliyyət göstərirəm.',
      p3: 'Mənim yanaşmam yalnız hüquqi biliklərlə deyil, eyni zamanda məsuliyyət, etika və hər bir müştəriyə fərdi diqqət prinsipləri ilə formalaşır.',
      bullets: ['24 saat ərzində operativ cavab', 'İlk konsultasiya imkanı', 'Məhkəmə işlərində yüksək uğur göstəricisi'],
      btn: 'Haqqımda Ətraflı',
    },
    services: {
      label: 'Xidmətlərim',
      title: 'Hüquqi Xidmətlər',
      subtitle: '19 ildən artıq təcrübə ilə hüququn müxtəlif sahələrində peşəkar xidmət göstərirəm',
      question: 'Xidmətlər haqqında sualınız var?',
      cta: 'Pulsuz Məsləhət Al',
      more: 'Ətraflı',
    },
    why: {
      label: 'Üstünlüklərim',
      title: 'Niyə Məni Seçməlisiniz?',
      reasons: [
        { title: 'Sürətli Cavab', desc: '24 saat ərzində cavab verilir. Təcili hallarda dərhal əlaqə.' },
        { title: 'Fərdi Yanaşma', desc: 'Hər müştərinin işi unikal qiymətləndirilir. Şablona uyğun deyil, sizin üçün strategiya hazırlanır.' },
        { title: 'Tam Məxfilik', desc: 'Vəkil-müştəri sirri qanunla qorunur. Məlumatlarınız heç vaxt üçüncü şəxslərə verilmir.' },
        { title: 'Təcrübəli Məhkəmə Müdafiəsi', desc: '19 ildən artıq məhkəmə zalında təcrübə. Mürəkkəb davalarda güclü hüquqi müdafiə.' },
      ],
      ctaTitle: 'Hüquqi probleminizi gecikdirməyin',
      ctaSub: 'Bu gün müraciət edin və ilkin konsultasiya əldə edin.',
      ctaBtn: 'Pulsuz Konsultasiya Al',
      ctaNote: '✔ Məxfi • ✔ Öhdəliksiz • ✔ Sürətli cavab',
    },
    testimonials: {
      label: 'Rəylər',
      title: 'Müştərilərin Rəyləri',
      items: [
        { name: 'Rəfael Quliyev', role: 'Sahibkar', text: 'Kərimbəyli Abbas müəssisəmin hüquqi məsələlərində dəqiqliyi və peşəkarlığı göstərdi.' },
        { name: 'Nazim Həsənov', role: 'Biznesmen', text: 'Çox çətin kontraktı uğurla həll etdi. Məişət və peşəkarlığı özündə toplayır.' },
        { name: 'Fatimə Səfərova', role: 'Müdirə', text: 'Ailə məsələlərində hakim olmaq, ədalətli nəticə əldə etmişdi.' },
      ],
    },
    practice: {
      title: 'Təcrübə Sahələri',
      eduTitle: 'Tədris Yeri',
      workTitle: 'İşlədiyi Yerlər',
      education: [
        { icon: '🎓', title: 'Azərbaycan Respublikası Prezidenti yanında Dövlət İdarəçiliyi Akademiyası', sub: 'Hüquq Fakültəsi', desc: 'Beynəlxalq Hüquq ixtisasını öyrəndim' },
        { icon: '📚', title: 'Hüquq Kolegiası', sub: 'Vəkil Sertifikası, 2010', desc: 'Fərdi Hüquq Kateqoriyası müsələmə' },
      ],
      work: [
        { year: '1999–2005', place: 'Gənc Vəkillərin Assosiasiyası', role: 'Junior Vəkil' },
        { year: '2005–2010', place: 'Bakı Hüquq Şirkəti', role: 'Senior Vəkil' },
        { year: '2010–İndiki', place: 'Fərdi Praktika', role: 'Sərbəst Vəkil' },
      ],
    },
    faq: {
      title: 'Tez-tez Soruşulan Suallar',
      items: [
        { q: 'Ilk məsləhət necə olur?', a: 'Telefon, video yaxud şəxsən görüş üzrə ilk konsultasiya 30 dəqiqə ərzində pulsuz keçirilir.' },
        { q: 'Honorar necə hesablanır?', a: 'Honorar məsələnin mürəkkəbliyinə, vaxt sərf etməsinə və nəticəsinə görə hesablanır.' },
        { q: 'Davaya nə qədər vaxt tələ olur?', a: 'Sadə davalar 1-3 ay, mürəkkəb davalar 6-12 ay və daha çox vaxta tələ ola bilər.' },
        { q: 'Gizlilik qorunur mu?', a: 'Bəli, vəkil-müştəri münasibətində tam gizlilik qanunla təmin edilir.' },
        { q: 'Online xidmət göstərirsiniz?', a: 'Bəli, email, WhatsApp, Zoom üzərindən məsləhət və bəzi proseduralar keçirilə bilər.' },
      ],
    },
    contact: {
      label: 'Əlaqə',
      title: 'Mənimlə Əlaqə Saxlayın',
      subtitle: 'Hüquqi məsələniz üçün Mənimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.',
      officePhone: 'İş nömrəsi',
      phone: 'Telefon',
      email: 'E-mail',
      address: 'Ünvan',
      hours: 'İş Saatları',
      addrLines: ['AZ1014, Bakı şəhəri, Nəsimi rayonu, Füzuli küçəsi, 47 saylı bina', 'Füzuli Residents Biznes Centr. 3-cü mərtəbə. Fides Vəkil Bürosu'],
      hoursLines: ['Bazar ertəsi – Cümə: 09:00 – 18:00', 'Şənbə: 09:00 – 14:00'],
      formTitle: 'Mesaj Göndərin',
      namePh: 'Adınız *',
      phonePh: 'Telefon *',
      emailPh: 'E-mail *',
      waPh: 'WhatsApp nömrəsi',
      subjectPh: 'Mövzu *',
      messagePh: 'Mesajınız *',
      send: 'Göndər',
      sending: 'Göndərilir...',
      success: 'Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.',
      error: 'Göndərilmə zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.',
      nameErr: 'Ad ən az 2 simvol olmalıdır',
      emailErr: 'Düzgün e-mail ünvanı daxil edin',
      phoneErr: 'Telefon nömrəsi tələb olunur',
      subjectErr: 'Mövzu tələb olunur',
      messageErr: 'Mesaj ən az 10 simvol olmalıdır',
    },
    map: {
      label: 'Ünvanımız',
      title: 'Ofisimizi Tapın',
      mapTab: 'Xəritə',
      tourTab: 'Virtual Tur',
      address: 'AZ1014, Bakı, Nəsimi r., Füzuli küçəsi 47, Fides Vəkil Bürosu',
    },
    aboutPage: {
      heroTitle: 'Vəkil Kərimbəyli Abbas Yaqub oğlu',
      heroSub: '19 ildən artıq peşəkar hüquqi xidmət',
      whoTitle: 'Mən kimim?',
      whoPs: [
        'Azərbaycanda 19 ildən artıq hüquqi xidmət sahəsində fəaliyyət göstərən peşəkar vəkil Kərimbəyli Abbas Yaqub oğludur.',
        'Azərbaycan Respublikası Prezidenti yanında Dövlət İdarəçiliyi Akademiyasının Hüquq Fakültəsini bitirmişəm.',
        '2010-cu ildə Azərbaycanda Hüquq Kolegiasından Fərdi Hüquq Kateqoriyasında vəkil sertifikatı almış və rəsmi olaraq qeydiyyatdan keçmişəm.',
        'Hər yeni məsələ üzərində işləyərkən, qanunun mahiyyətini, etikanı və ən mühümü, müştərilərimizin mənafelərini yüksək tuturum.',
      ],
      eduTitle: 'Təhsil',
      expTitle: 'Peşəkar Təcrübə',
      specTitle: 'Mütəxəssislik Sahələri',
      ctaTitle: 'Məyə Etibar Edin',
      ctaSub: 'Hüquqi məsələləriniz üzrə məsləhət almaq üçün indi müraciət edin. İlk konsultasiya pulsuz keçirilir.',
      ctaCall: 'Telefon Etmə',
      ctaEmail: 'E-mail Yolla',
      specs: [
        { icon: '📋', title: 'Kommersiya Hüququ', desc: 'Kontraktlar, B2B münasibətləri, şirkət qurulması' },
        { icon: '👨‍👩‍👧', title: 'Ailə Hüququ', desc: 'Nikah, boşanma, övlad yetiştirmə, vəsiyyət' },
        { icon: '⚖️', title: 'Cinayət Hüququ', desc: 'Müdafiə xidməti, timsil, təqsir mübahasəsi' },
        { icon: '🏠', title: 'Mülk Hüququ', desc: 'Daş mülk, inşaat, torpaq münasibətləri' },
        { icon: '💼', title: 'Əmək Hüququ', desc: 'İş müqavilələri, işçi-işəgötürən münasibətləri' },
        { icon: '🌍', title: 'Beynəlxalq Hüquq', desc: 'Beynəlxalq müqavilələr, eksport-import' },
      ],
      experience: [
        { years: '1999–2005', org: 'Gənc Vəkillərin Assosiasiyası', role: 'Junior Vəkil', desc: 'Junior Vəkil kimi çalışaraq, kompleks hüquqi məsələlərin həllində iştirak etmişəm. Kommersiya hüququ, ailə hüququ və cinayət hüququ sahəsində gəlmə təcrübə əldə etmişəm.' },
        { years: '2005–2010', org: 'Bakı Hüquq Şirkəti', role: 'Senior Vəkil', desc: 'Senior Vəkil pozisiyasında korporativ məsləhət, kontraktlar və beynəlxalq hüquq məsələlərində xidmət göstərmişəm.' },
        { years: '2010–İndiki', org: 'Fərdi Hüquqi Praktika', role: 'Sərbəst Vəkil', desc: '2010-cu ildən fərdi hüquqi praktika əsasında sərbəst vəkil kimi çalışırım. 500-dən artıq məmnun müştərilərlə ləng müddətli münasibət qurmuşam.' },
      ],
      awardsTitle: 'Təltif və Fəxri Adlar',
      awards: [
        { date: '06.09.2018', text: 'Vəkillər Kollegiyası Rəyasət Heyətinin qərarına əsasən Fəxri Fərmanla təltif edilmişdir.' },
        { date: '24.12.2019', text: 'Vəkillər Kollegiyası Rəyasət Heyətinin qərarı ilə "Azərbaycan Vəkilliyinin 100 illiyi (1919–2019)" yubiley döş nişanı ilə təltif edilmişdir.' },
        { date: '21.07.2023', text: 'Vəkillər Kollegiyası Rəyasət Heyətinin qərarı ilə Fəxri Hüquq Doktoru adı ilə təltif edilmişdir.' },
      ],
      galleryTitle: 'Ofis və Fəaliyyət',
      gallery: [
        { src: '/office-interior.jpg', alt: 'Fides Vəkil Bürosu — ofis' },
        { src: '/consultation.jpg', alt: 'Hüquqi konsultasiya' },
        { src: '/courtroom.jpg', alt: 'Məhkəmə zalı' },
      ],
    },
    stats: [
      { value: '25+', label: 'İl Təcrübə' },
      { value: '500+', label: 'Məmnun Müştəri' },
      { value: '8', label: 'Hüquq Sahəsi' },
      { value: '98%', label: 'Uğur Nisbəti' },
    ],
    footer: {
      desc: '19 ildən artıq hüquqi xidmət göstərən, Azərbaycan Vəkillər Kollegiyasının üzvü olan peşəkar vəkil.',
      services: 'Xidmətlər',
      contact: 'Əlaqə',
      social: 'Sosial Şəbəkə',
      orgs: 'Rəsmi Qurumlar və Üzv Olduğum Təşkilatlar',
      privacy: 'Məxfilik Siyasəti',
      terms: 'İstifadə Şərtləri',
      copyright: 'Vəkil Kərimbəyli Abbas Yaqub oğlu. Bütün hüquqlar qorunur.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      services: 'Services',
      allServices: 'View all services',
      consultation: 'Get Consultation',
      call: 'Call',
      hours: 'Mon–Fri: 09:00–18:00',
    },
    hero: {
      badge: 'Professional Legal Service',
      titlePre: 'Strong legal support to ',
      titleAccent: 'protect',
      titlePost: ' your rights',
      subtitle: 'Reliable legal solutions in criminal, civil and family law with over 25 years of experience',
      pills: ['19+ Years Experience', '98% Success Rate', 'Free Consultation'],
      cta: 'Get Free Consultation',
      about: 'About Me',
    },
    about: {
      label: 'About',
      title: 'About Lawyer Abbas Kərimbəyli',
      p1: 'With over 25 years of professional legal experience, my main goal is to protect my clients\' rights and provide effective solutions to their problems.',
      p2: 'During my career, I have achieved successful results in hundreds of cases in criminal, civil and family law. I am officially registered as a member of the Bar Association of the Republic of Azerbaijan.',
      p3: 'My approach is shaped not only by legal knowledge, but also by the principles of responsibility, ethics and individual attention to each client.',
      bullets: ['24-hour rapid response', 'Initial consultation available', 'High success rate in court cases'],
      btn: 'Learn More About Me',
    },
    services: {
      label: 'My Services',
      title: 'Legal Services',
      subtitle: 'I provide professional services in various fields of law with over 25 years of experience',
      question: 'Have a question about our services?',
      cta: 'Get Free Advice',
      more: 'Details',
    },
    why: {
      label: 'My Advantages',
      title: 'Why Choose Me?',
      reasons: [
        { title: 'Fast Response', desc: 'Response within 24 hours. Immediate contact in urgent cases.' },
        { title: 'Individual Approach', desc: 'Each client\'s case is uniquely evaluated. Not template-based — a strategy is prepared for you.' },
        { title: 'Full Confidentiality', desc: 'Attorney-client privilege is protected by law. Your information is never shared with third parties.' },
        { title: 'Experienced Court Defense', desc: 'Over 25 years of courtroom experience. Strong legal defense in complex cases.' },
      ],
      ctaTitle: "Don't delay your legal problem",
      ctaSub: 'Contact us today and get an initial consultation.',
      ctaBtn: 'Get Free Consultation',
      ctaNote: '✔ Confidential • ✔ No obligation • ✔ Fast response',
    },
    testimonials: {
      label: 'Reviews',
      title: 'Client Reviews',
      items: [
        { name: 'Rafail Guliyev', role: 'Entrepreneur', text: 'Abbas Kərimbəyli demonstrated precision and professionalism in my company\'s legal matters.' },
        { name: 'Nazim Hasanov', role: 'Businessman', text: 'He successfully resolved a very difficult contract. He combines personal care and professionalism.' },
        { name: 'Fatima Safarova', role: 'Director', text: 'He handled my family matter with expertise and achieved a fair outcome.' },
      ],
    },
    practice: {
      title: 'Practice Areas',
      eduTitle: 'Education',
      workTitle: 'Work Experience',
      education: [
        { icon: '🎓', title: 'State Administration Academy under the President of the Republic of Azerbaijan', sub: 'Faculty of Law', desc: 'Studied International Law' },
        { icon: '📚', title: 'Bar Association', sub: 'Attorney Certificate, 2010', desc: 'Individual Law Category certification' },
      ],
      work: [
        { year: '1999–2005', place: 'Young Lawyers Association', role: 'Junior Lawyer' },
        { year: '2005–2010', place: 'Baku Law Firm', role: 'Senior Lawyer' },
        { year: '2010–Present', place: 'Individual Practice', role: 'Independent Lawyer' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does the first consultation work?', a: 'The first consultation is free, lasting 30 minutes, via phone, video or in-person meeting.' },
        { q: 'How is the fee calculated?', a: 'The fee is calculated based on the complexity of the case, time spent and the outcome.' },
        { q: 'How long does a case take?', a: 'Simple cases may take 1–3 months, complex cases 6–12 months or more.' },
        { q: 'Is confidentiality maintained?', a: 'Yes, full confidentiality in the attorney-client relationship is guaranteed by law.' },
        { q: 'Do you provide online services?', a: 'Yes, consultations and some procedures can be conducted via email, WhatsApp or Zoom.' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Contact us for your legal matters. We respond within 24 hours.',
      officePhone: 'Office',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working Hours',
      addrLines: ['AZ1014, Baku, Nasimi district, Fuzuli street, building 47', 'Fuzuli Residents Business Center, 3rd floor. Fides Law Office'],
      hoursLines: ['Monday – Friday: 09:00 – 18:00', 'Saturday: 09:00 – 14:00'],
      formTitle: 'Send a Message',
      namePh: 'Your Name *',
      phonePh: 'Phone *',
      emailPh: 'Email *',
      waPh: 'WhatsApp number',
      subjectPh: 'Subject *',
      messagePh: 'Your Message *',
      send: 'Send',
      sending: 'Sending...',
      success: 'Your message was sent successfully. We will contact you soon.',
      error: 'An error occurred while sending. Please try again.',
      nameErr: 'Name must be at least 2 characters',
      emailErr: 'Please enter a valid email address',
      phoneErr: 'Phone number is required',
      subjectErr: 'Subject is required',
      messageErr: 'Message must be at least 10 characters',
    },
    map: {
      label: 'Our Location',
      title: 'Find Our Office',
      mapTab: 'Map',
      tourTab: 'Virtual Tour',
      address: 'AZ1014, Baku, Nasimi, Fuzuli St. 47, Fides Law Office',
    },
    aboutPage: {
      heroTitle: 'Lawyer Abbas Kərimbəyli',
      heroSub: 'Over 25 years of professional legal service',
      whoTitle: 'Who am I?',
      whoPs: [
        'Abbas Kərimbəyli is a professional lawyer with over 25 years of legal service experience in Azerbaijan.',
        'I graduated from the Faculty of Law of the State Administration Academy under the President of the Republic of Azerbaijan.',
        'In 2010, I obtained an attorney certificate in the Individual Law Category from the Bar Association of Azerbaijan and officially registered.',
        'In every new case I work on, I hold the essence of law, ethics and most importantly, the interests of my clients in the highest regard.',
      ],
      eduTitle: 'Education',
      expTitle: 'Professional Experience',
      specTitle: 'Specialization Areas',
      ctaTitle: 'Trust Me',
      ctaSub: 'Apply now to get advice on your legal matters. The first consultation is free.',
      ctaCall: 'Call Now',
      ctaEmail: 'Send Email',
      specs: [
        { icon: '📋', title: 'Commercial Law', desc: 'Contracts, B2B relations, company formation' },
        { icon: '👨‍👩‍👧', title: 'Family Law', desc: 'Marriage, divorce, child custody, inheritance' },
        { icon: '⚖️', title: 'Criminal Law', desc: 'Defense service, representation, plea' },
        { icon: '🏠', title: 'Property Law', desc: 'Real estate, construction, land relations' },
        { icon: '💼', title: 'Labor Law', desc: 'Employment contracts, employer-employee relations' },
        { icon: '🌍', title: 'International Law', desc: 'International agreements, export-import' },
      ],
      experience: [
        { years: '1999–2005', org: 'Young Lawyers Association', role: 'Junior Lawyer', desc: 'Participated in resolving complex legal issues as a Junior Lawyer. Gained practical experience in commercial law, family law and criminal law.' },
        { years: '2005–2010', org: 'Baku Law Firm', role: 'Senior Lawyer', desc: 'Provided services in corporate consulting, contracts and international law matters as a Senior Lawyer.' },
        { years: '2010–Present', org: 'Individual Legal Practice', role: 'Independent Lawyer', desc: 'Since 2010, I have been working as an independent lawyer on an individual legal practice basis. I have built long-term relationships with over 500 satisfied clients.' },
      ],
      awardsTitle: 'Awards & Honorary Titles',
      awards: [
        { date: '06.09.2018', text: 'Awarded the Honorary Certificate by decision of the Presidium of the Bar Association.' },
        { date: '24.12.2019', text: 'Awarded the jubilee badge "100th Anniversary of the Azerbaijan Bar (1919–2019)" by decision of the Presidium of the Bar Association.' },
        { date: '21.07.2023', text: 'Awarded the title of Honorary Doctor of Law by decision of the Presidium of the Bar Association.' },
      ],
      galleryTitle: 'Office & Practice',
      gallery: [
        { src: '/office-interior.jpg', alt: 'Fides Law Office — interior' },
        { src: '/consultation.jpg', alt: 'Legal consultation' },
        { src: '/courtroom.jpg', alt: 'Courtroom' },
      ],
    },
    stats: [
      { value: '25+', label: 'Years Experience' },
      { value: '500+', label: 'Happy Clients' },
      { value: '8', label: 'Legal Areas' },
      { value: '98%', label: 'Success Rate' },
    ],
    footer: {
      desc: 'A professional lawyer with over 25 years of legal service, member of the Azerbaijan Bar Association.',
      services: 'Services',
      contact: 'Contact',
      social: 'Social Media',
      orgs: 'Official Bodies & Member Organizations',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      copyright: 'Lawyer Abbas Kərimbəyli. All rights reserved.',
    },
  },
} as const

/* ─────────────────────────── CONTEXT ─────────────────────────── */
type I18nContext = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof translations)[Lang]
}

const Ctx = createContext<I18nContext | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('az')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'az' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}

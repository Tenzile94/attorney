export type Service = {
  slug: string
  title: string
  shortDesc: string
  iconFile: string        // filename inside /public/services/ without .svg
  heroDesc: string
  fullDesc: string[]
  whatWeOffer: string[]
  process: { step: string; desc: string }[]
  en?: {
    title: string
    shortDesc: string
    heroDesc: string
    fullDesc: string[]
    whatWeOffer: string[]
    process: { step: string; desc: string }[]
  }
}

export const services: Service[] = [
  {
    slug: 'kommersiya-huququ',
    title: 'Kommersiya Hüququ',
    shortDesc: 'Kontraktlar, şirkət qurulması, biznes münasibətləri və korporativ idarəetmə',
    iconFile: 'business',
    heroDesc: 'Biznesinizi hüquqi cəhətdən qorumaq üçün peşəkar kommersiya hüququ xidmətləri',
    fullDesc: [
      'Kommersiya hüququ sahəsində 19 ildən artıq təcrübəmizlə şirkətlərə və sahibkarlara kompleks hüquqi dəstək göstəririk. Biznesdə hər addım hüquqi risklərlə müşayiət olunur — biz bu riskləri minimuma endiririk.',
      'Şirkətin qurulmasından tutmuş mürəkkəb kommersiya kontraktlarına qədər bütün mərhələlərdə yanınızdayıq. Hər müştəriyə fərdi yanaşma ilə biznesinizin spesifik ehtiyaclarına uyğun həllər hazırlayırıq.',
    ],
    whatWeOffer: [
      'Şirkət qurulması və tənzimlənməsi',
      'Kommersiya kontraktlarının hazırlanması və yoxlanması',
      'B2B müqavilə münasibətləri',
      'Ortaqlıq sazişləri',
      'Birləşmə və satınalma əməliyyatları',
      'Korporativ idarəetmə məsləhəti',
      'Ticarət mübahisələrinin həlli',
      'İntellektual mülkiyyətin qorunması',
    ],
    process: [
      { step: 'İlkin Məsləhət', desc: 'Biznesinizin ehtiyaclarını öyrənirik, mövcud riskləri qiymətləndiririk.' },
      { step: 'Strategiya', desc: 'Hüquqi strategiya hazırlayır, addım-addım plan müəyyənləşdiririk.' },
      { step: 'Sənədləşmə', desc: 'Bütün lazımi sənədləri hazırlayır, hüquqi çərçivəni formalaşdırırıq.' },
      { step: 'İcra və Nəzarət', desc: 'Prosesi sonuna kimi izləyir, hər mərhələdə dəstək veririk.' },
    ],
    en: {
      title: 'Commercial Law',
      shortDesc: 'Contracts, company formation, business relations and corporate governance',
      heroDesc: 'Professional commercial law services to legally protect your business',
      fullDesc: [
        'With over 25 years of experience in commercial law, we provide comprehensive legal support to companies and entrepreneurs. Every step in business is accompanied by legal risks — we minimize these risks.',
        'We are by your side at every stage, from company formation to complex commercial contracts. We prepare solutions tailored to the specific needs of your business with an individual approach to each client.',
      ],
      whatWeOffer: [
        'Company formation and regulation',
        'Drafting and reviewing commercial contracts',
        'B2B contractual relations',
        'Partnership agreements',
        'Mergers and acquisitions',
        'Corporate governance consulting',
        'Commercial dispute resolution',
        'Intellectual property protection',
      ],
      process: [
        { step: 'Initial Consultation', desc: 'We learn about your business needs and assess existing risks.' },
        { step: 'Strategy', desc: 'We develop a legal strategy and establish a step-by-step plan.' },
        { step: 'Documentation', desc: 'We prepare all necessary documents and form the legal framework.' },
        { step: 'Execution & Oversight', desc: 'We monitor the process to the end and provide support at every stage.' },
      ],
    },
  },
  {
    slug: 'cinayat-huququ',
    title: 'Cinayət Hüququ',
    shortDesc: 'Cinayət işlərində müdafiə, istintaq mərhələsindən məhkəməyə qədər tam dəstək',
    iconFile: 'crime-icon',
    heroDesc: 'Hər cinayət işində güclü müdafiə hüququnuzu qorumaq bizim birinci prioritetimizdir',
    fullDesc: [
      'Cinayət hüququ sahəsində peşəkar müdafiə xidməti həyatı dəyişdirən qərarlara ciddi təsir göstərir. Təqsirkar olmayan şəxslərin azadlığını qorumaq, günahı azaltmaq və ədalətli prosesin təmin edilməsi üçün yorulmadan çalışırıq.',
      'Hər cinayət işi unikaldır. Dəlilləri diqqətlə təhlil edir, müdafiə strategiyasını fərdi olaraq hazırlayır və bütün prosesdə yanınızda oluruq.',
    ],
    whatWeOffer: [
      'Cinayət işlərində müdafiə',
      'İstintaq mərhələsində hüquqi yardım',
      'Həbs zamanı dərhal hüquqi dəstək',
      'Məhkəmədə nümayəndəlik',
      'Apellyasiya şikayəti',
      'Cəzanın yüngülləşdirilməsi',
      'Hüquqlarınızın qorunması',
      'Şahid kimi dindirilərkən dəstək',
    ],
    process: [
      { step: 'Dərhal Müdaxilə', desc: 'Həbs və ya ittiham anından etibarən yanınızdayıq.' },
      { step: 'Dəlillərin Analizi', desc: 'Bütün dəlilləri, ifadələri və sənədləri ətraflı öyrənirik.' },
      { step: 'Müdafiə Strategiyası', desc: 'Güclü müdafiə xətti hazırlayır, hər ehtimala hazırlaşırıq.' },
      { step: 'Məhkəmə Prosesi', desc: 'Məhkəmədə güclü, qətiyyətli nümayəndəlik edirik.' },
    ],
    en: {
      title: 'Criminal Law',
      shortDesc: 'Defense in criminal cases, full support from investigation to trial',
      heroDesc: 'In every criminal case, protecting your right to a strong defense is our first priority',
      fullDesc: [
        'Professional defense service in criminal law has a serious impact on life-changing decisions. We work tirelessly to protect the freedom of innocent people, reduce guilt and ensure a fair process.',
        'Every criminal case is unique. We carefully analyze evidence, individually prepare a defense strategy and stand by your side throughout the entire process.',
      ],
      whatWeOffer: [
        'Defense in criminal cases',
        'Legal assistance during the investigation phase',
        'Immediate legal support upon arrest',
        'Court representation',
        'Appeals',
        'Sentence reduction',
        'Protection of your rights',
        'Support during witness questioning',
      ],
      process: [
        { step: 'Immediate Intervention', desc: 'We are by your side from the moment of arrest or charge.' },
        { step: 'Evidence Analysis', desc: 'We thoroughly examine all evidence, statements and documents.' },
        { step: 'Defense Strategy', desc: 'We prepare a strong line of defense and are prepared for every contingency.' },
        { step: 'Court Process', desc: 'We provide strong, decisive representation in court.' },
      ],
    },
  },
  {
    slug: 'aile-huququ',
    title: 'Ailə Hüququ',
    shortDesc: 'Nikah, boşanma, uşaq hüquqları, miras və ailə münasibətlərinin tənzimlənməsi',
    iconFile: 'civil',
    heroDesc: 'Ailə münasibətlərinizdə hüquqi məsələləri həssaslıq və peşəkarlıqla həll edirik',
    fullDesc: [
      'Ailə hüququ məsələləri emosional cəhətdən çox ağır olur. Biz hüquqi biliklərimizi həssaslıq və anlayışla birləşdirərək bu çətin dövrlərdə yanınızda oluruq.',
      'Boşanma, uşaqların himayəsi, əmlak bölgüsü və vəsiyyət kimi məsələlərdə sizi qorumaq üçün güclü hüquqi nümayəndəlik təqdim edirik. Hər məsələni gizlilik çərçivəsində yüksək etika ilə idarə edirik.',
    ],
    whatWeOffer: [
      'Boşanma prosesinin idarə edilməsi',
      'Uşaqların himayəsi və görüş hüququ',
      'Nikah müqaviləsinin hazırlanması',
      'Əmlakın bölgüsü',
      'Alimentin müəyyənləşdirilməsi',
      'Övladlığa götürmə prosesləri',
      'Vəsiyyətnamənin hazırlanması',
      'Miras hüququ məsələləri',
    ],
    process: [
      { step: 'Gizli Məsləhət', desc: 'Vəziyyətinizi tam məxfilik şəraitində dinləyirik.' },
      { step: 'Hüquqi Qiymətləndirmə', desc: 'Mövcud seçimləri və hüquqi mövqeyinizi izah edirik.' },
      { step: 'Danışıqlar', desc: 'Mümkün olduqda məhkəməsiz razılaşma yolunu axtarırıq.' },
      { step: 'Məhkəmə Müdafiəsi', desc: 'Lazım gəldikdə məhkəmədə güclü nümayəndəlik edirik.' },
    ],
    en: {
      title: 'Family Law',
      shortDesc: 'Marriage, divorce, children\'s rights, inheritance and regulation of family relations',
      heroDesc: 'We resolve legal matters in your family relations with sensitivity and professionalism',
      fullDesc: [
        'Family law matters can be emotionally very heavy. We combine our legal knowledge with sensitivity and understanding to be by your side during these difficult times.',
        'We provide strong legal representation to protect you in matters such as divorce, child custody, property division and inheritance. We handle each matter with high ethics within the framework of confidentiality.',
      ],
      whatWeOffer: [
        'Divorce process management',
        'Child custody and visitation rights',
        'Drafting prenuptial agreements',
        'Property division',
        'Alimony determination',
        'Adoption processes',
        'Will preparation',
        'Inheritance law matters',
      ],
      process: [
        { step: 'Confidential Consultation', desc: 'We listen to your situation in complete confidentiality.' },
        { step: 'Legal Assessment', desc: 'We explain your available options and legal position.' },
        { step: 'Negotiation', desc: 'We seek an out-of-court settlement whenever possible.' },
        { step: 'Court Defense', desc: 'We provide strong court representation when necessary.' },
      ],
    },
  },
  {
    slug: 'mulk-huququ',
    title: 'Mülk Hüququ',
    shortDesc: 'Daşınmaz əmlak əməliyyatları, torpaq hüquqları və mülkiyyət mübahisələri',
    iconFile: 'commersion-icon',
    heroDesc: 'Əmlak əməliyyatlarınızda hüquqi riskləri aradan qaldırır, mülkiyyətinizi qoruyuruq',
    fullDesc: [
      'Daşınmaz əmlak əməliyyatları böyük maliyyə qoyuluşu tələb edir. Ev alqı-satqısından tutmuş kommersiya əmlakı müqavilələrinə qədər hər addımda hüquqi dəstək göstəririk.',
      'Mülkiyyət mübahisələri, torpaq hüquqları, icarə münasibətləri və inşaat müqavilələri sahəsində geniş təcrübəmizlə əmlak hüquqlarınızı etibarlı şəkildə qoruyuruq.',
    ],
    whatWeOffer: [
      'Alqı-satqı müqavilələrinin hazırlanması',
      'Əmlak mübahisələrinin həlli',
      'Torpaq hüququ məsələləri',
      'İcarə müqavilələri',
      'İnşaat hüququ',
      'Girov və ipoteka işləri',
      'Kadastr qeydiyyatı məsələləri',
      'Mülkiyyət hüququnun qorunması',
    ],
    process: [
      { step: 'Hüquqi Due Diligence', desc: 'Əmlakın hüquqi statusunu tam yoxlayırıq.' },
      { step: 'Müqavilə Hazırlığı', desc: 'Sizi qoruyan, bütün detalları əhatə edən müqavilə hazırlayırıq.' },
      { step: 'Danışıqlar', desc: 'Sizin adınızdan ən əlverişli şərtləri müzakirə edirik.' },
      { step: 'Qeydiyyat', desc: 'Bütün hüquqi prosedurların düzgün icrasını təmin edirik.' },
    ],
    en: {
      title: 'Property Law',
      shortDesc: 'Real estate transactions, land rights and property disputes',
      heroDesc: 'We eliminate legal risks in your property transactions and protect your ownership',
      fullDesc: [
        'Real estate transactions require large financial investment. We provide legal support at every step, from home purchases and sales to commercial property contracts.',
        'We reliably protect your property rights with our extensive experience in property disputes, land rights, lease relations and construction contracts.',
      ],
      whatWeOffer: [
        'Drafting purchase and sale agreements',
        'Property dispute resolution',
        'Land rights matters',
        'Lease agreements',
        'Construction law',
        'Mortgage and collateral matters',
        'Cadastral registration matters',
        'Protection of ownership rights',
      ],
      process: [
        { step: 'Legal Due Diligence', desc: 'We fully verify the legal status of the property.' },
        { step: 'Contract Preparation', desc: 'We prepare a contract that protects you and covers all details.' },
        { step: 'Negotiation', desc: 'We discuss the most favorable terms on your behalf.' },
        { step: 'Registration', desc: 'We ensure the correct execution of all legal procedures.' },
      ],
    },
  },
  {
    slug: 'amak-huququ',
    title: 'Əmək Hüququ',
    shortDesc: 'İş müqavilələri, işçi-işəgötürən münasibətləri, işdən çıxarılma mübahisələri',
    iconFile: 'contact',
    heroDesc: 'İşəgötürən və işçilərin hüquqlarını qorumaq üçün hərtərəfli əmək hüququ xidməti',
    fullDesc: [
      'Əmək münasibətlərindəki hüquqi çətinliklər həm işçilər, həm də işəgötürənlər üçün ciddi nəticələrə yol aça bilər. Hər iki tərəfin maraqlarını anlayır, ədalətli həllər tapırıq.',
      'İş müqavilələrinin hazırlanmasından işdən çıxarılma mübahisələrinə qədər əmək hüququ sahəsinin bütün aspektlərini əhatə edən xidmət göstəririk.',
    ],
    whatWeOffer: [
      'İş müqavilələrinin hazırlanması',
      'İşdən çıxarılma mübahisələri',
      'Əmək şəraiti hüquqları',
      'Diskriminasiya iddialarına qarşı müdafiə',
      'Əmək haqqı mübahisələri',
      'Kollektiv müqavilə danışıqları',
      'İş yerindəki pozuntuların həlli',
      'İşəgötürənlər üçün HR hüquqi məsləhəti',
    ],
    process: [
      { step: 'Vəziyyətin Qiymətləndirilməsi', desc: 'Əmək münasibətinin hüquqi çərçivəsini analiz edirik.' },
      { step: 'Sənəd Yoxlaması', desc: 'Müqavilə, əmr və yazışmaları hüquqi cəhətdən yoxlayırıq.' },
      { step: 'Danışıqlar', desc: 'Tərəflər arasında razılaşma əldə etmək üçün vasitəçilik edirik.' },
      { step: 'Hüquqi Müdafiə', desc: 'Lazım gəldikdə məhkəmə müdafiəsi göstəririk.' },
    ],
    en: {
      title: 'Labor Law',
      shortDesc: 'Employment contracts, employer-employee relations, wrongful dismissal disputes',
      heroDesc: 'Comprehensive labor law service to protect the rights of employers and employees',
      fullDesc: [
        'Legal difficulties in labor relations can lead to serious consequences for both employees and employers. We understand the interests of both parties and find fair solutions.',
        'We provide services covering all aspects of labor law, from drafting employment contracts to wrongful dismissal disputes.',
      ],
      whatWeOffer: [
        'Drafting employment contracts',
        'Wrongful dismissal disputes',
        'Working conditions rights',
        'Defense against discrimination claims',
        'Wage disputes',
        'Collective bargaining negotiations',
        'Workplace violation resolution',
        'HR legal consulting for employers',
      ],
      process: [
        { step: 'Situation Assessment', desc: 'We analyze the legal framework of the labor relationship.' },
        { step: 'Document Review', desc: 'We legally review contracts, orders and correspondence.' },
        { step: 'Negotiation', desc: 'We mediate to reach an agreement between the parties.' },
        { step: 'Legal Defense', desc: 'We provide court defense when necessary.' },
      ],
    },
  },
  {
    slug: 'idari-huquq',
    title: 'İdari Hüquq',
    shortDesc: 'Dövlət orqanları ilə münasibətlər, lisenziyalar, inzibati şikayətlər',
    iconFile: 'license',
    heroDesc: 'Dövlət orqanları ilə münasibətlərdə hüquqlarınızı qorumaq üçün professional dəstək',
    fullDesc: [
      'Dövlət orqanları ilə qarşıdurmalar ciddi hüquqi bilgi tələb edir. İdari orqanların qərarlarına etiraz, lisenziya məsələləri və dövlət tenderləri sahəsində geniş təcrübəyə malikik.',
      'Vətəndaşların və şirkətlərin dövlət orqanları qarşısında hüquqlarını qorumaq üçün inzibati məhkəmə proseslərindən tutmuş danışıqlara qədər bütün mərhələlərdə xidmət edirik.',
    ],
    whatWeOffer: [
      'İnzibati qərarların ləğvi üçün şikayətlər',
      'Lisenziya və icazə məsələləri',
      'Dövlət tender prosesləri',
      'Dövlət orqanları ilə danışıqlar',
      'İnzibati cəzalara etiraz',
      'Dövlət müəssisələri ilə münasibətlər',
      'İnzibati məhkəmədə nümayəndəlik',
      'Normativ aktların şərhi üzrə məsləhət',
    ],
    process: [
      { step: 'Qərarın Analizi', desc: 'İdari orqanın qərarını hüquqi cəhətdən qiymətləndiririk.' },
      { step: 'Etiraz Strategiyası', desc: 'Ən effektiv etiraz yolunu müəyyənləşdiririk.' },
      { step: 'Şikayət Hazırlığı', desc: 'Güclü hüquqi arqumentlərə əsaslanan şikayət yazırıq.' },
      { step: 'Prosesin İzlənməsi', desc: 'Bütün mərhələlərdə nümayəndəlik edib nəticəyə çatırıq.' },
    ],
    en: {
      title: 'Administrative Law',
      shortDesc: 'Relations with government bodies, licenses, administrative complaints',
      heroDesc: 'Professional support to protect your rights in relations with government bodies',
      fullDesc: [
        'Confrontations with government bodies require serious legal knowledge. We have extensive experience in challenging decisions of administrative bodies, licensing matters and government tenders.',
        'We provide services at all stages to protect the rights of citizens and companies before government bodies, from administrative court processes to negotiations.',
      ],
      whatWeOffer: [
        'Complaints for annulment of administrative decisions',
        'Licensing and permit matters',
        'Government tender processes',
        'Negotiations with government bodies',
        'Challenging administrative penalties',
        'Relations with state enterprises',
        'Representation in administrative court',
        'Consulting on interpretation of regulatory acts',
      ],
      process: [
        { step: 'Decision Analysis', desc: 'We legally evaluate the decision of the administrative body.' },
        { step: 'Challenge Strategy', desc: 'We determine the most effective route for challenge.' },
        { step: 'Complaint Preparation', desc: 'We write a complaint based on strong legal arguments.' },
        { step: 'Process Monitoring', desc: 'We represent at all stages and achieve results.' },
      ],
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

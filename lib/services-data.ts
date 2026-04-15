export type Service = {
  slug: string
  title: string
  shortDesc: string
  iconName: string
  heroDesc: string
  fullDesc: string[]
  whatWeOffer: string[]
  process: { step: string; desc: string }[]
}

export const services: Service[] = [
  {
    slug: 'kommersiya-huququ',
    title: 'Kommersiya Hüququ',
    shortDesc: 'Kontraktlar, şirkət qurulması, biznes münasibətləri',
    iconName: 'Briefcase',
    heroDesc: 'Biznesinizi hüquqi cəhətdən qorumaq üçün peşəkar kommersiya hüququ xidmətləri',
    fullDesc: [
      'Kommersiya hüququ sahəsində 25 ildən artıq təcrübəmizlə şirkətlərə və sahibkarlara kompleks hüquqi dəstək göstəririk. Biznesdə hər addım hüquqi risklərlə müşayiət olunur — biz bu riskləri minimuma endiririk.',
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
      { step: 'İlkin Məsləhət', desc: 'Biznesinitizin ehtiyaclarını öyrənirik, mövcud riskləri qiymətləndiririk.' },
      { step: 'Strategiya', desc: 'Hüquqi strategiya hazırlayır, addım-addım plan müəyyənləşdiririk.' },
      { step: 'Sənədləşmə', desc: 'Bütün lazımi sənədləri hazırlayır, hüquqi çərçivəni formalaşdırırıq.' },
      { step: 'İcra və Nəzarət', desc: 'Prosesi sonuna kimi izləyir, hər mərhələdə dəstək veririk.' },
    ],
  },
  {
    slug: 'aile-huququ',
    title: 'Ailə Hüququ',
    shortDesc: 'Nikah, boşanma, vəsiyyət, uşaq hüquqları',
    iconName: 'Heart',
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
  },
  {
    slug: 'cinayat-huququ',
    title: 'Cinayət Hüququ',
    shortDesc: 'Cinayət işlərində müdafiə, hüquqi nümayəndəlik',
    iconName: 'Shield',
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
  },
  {
    slug: 'mulk-huququ',
    title: 'Mülk Hüququ',
    shortDesc: 'Daşınmaz əmlak, inşaat, torpaq münasibətləri',
    iconName: 'Home',
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
  },
  {
    slug: 'amak-huququ',
    title: 'Əmək Hüququ',
    shortDesc: 'İş müqavilələri, işçi-işəgötürən münasibətləri',
    iconName: 'UserCheck',
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
  },
  {
    slug: 'vergi-huququ',
    title: 'Vergi Hüququ',
    shortDesc: 'Vergi planlaşdırması, audit, vergi mübahisələri',
    iconName: 'Receipt',
    heroDesc: 'Vergi öhdəliklərini optimallaşdırmaq və vergi orqanları ilə mübahisələri həll etmək',
    fullDesc: [
      'Vergi qanunvericiliyi mürəkkəb və dəyişkəndir. Düzgün vergi planlaşdırması şirkətin maliyyə sağlamlığı üçün kritik əhəmiyyət kəsb edir.',
      'Vergi orqanları ilə mübahisələrdə güclü müdafiə, vergi yoxlamalarında dəstək və vergi öhdəliklərinin qanuni çərçivədə optimallaşdırılması üçün peşəkar xidmət göstəririk.',
    ],
    whatWeOffer: [
      'Vergi planlaşdırması və məsləhəti',
      'Vergi yoxlamalarında nümayəndəlik',
      'Vergi orqanları ilə mübahisələrin həlli',
      'ƏDV məsələləri',
      'Korporativ vergi optimizasiyası',
      'Vergi şikayətlərinin hazırlanması',
      'Beynəlxalq vergi məsələləri',
      'Vergi cinayətləri üzrə müdafiə',
    ],
    process: [
      { step: 'Vergi Auditi', desc: 'Mövcud vergi öhdəliklərini və riskləri qiymətləndiririk.' },
      { step: 'Optimallaşdırma', desc: 'Qanuni çərçivədə vergi yükünü azaltmaq üçün strategiya hazırlayırıq.' },
      { step: 'Sənədləşmə', desc: 'Bütün vergi sənədlərini düzgün hazırlayır, risksizlik təmin edirik.' },
      { step: 'Mübahisə Həlli', desc: 'Vergi orqanları ilə mübahisələrdə güclü nümayəndəlik edirik.' },
    ],
  },
  {
    slug: 'idari-huquq',
    title: 'İdari Hüquq',
    shortDesc: 'Dövlət orqanları ilə münasibətlər, lisenziyalar',
    iconName: 'Landmark',
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
      'Normativ aktların şərhini üzrə məsləhət',
    ],
    process: [
      { step: 'Qərarın Analizi', desc: 'İdari orqanın qərarını hüquqi cəhətdən qiymətləndiririk.' },
      { step: 'Etiraz Strategiyası', desc: 'Ən effektiv etiraz yolunu müəyyənləşdiririk.' },
      { step: 'Şikayət Hazırlığı', desc: 'Güclü hüquqi arqumentlərə əsaslanan şikayət yazırıq.' },
      { step: 'Prosesin İzlənməsi', desc: 'Bütün mərhələlərdə nümayəndəlik edib nəticəyə çatırıq.' },
    ],
  },
  {
    slug: 'beynalxalq-huquq',
    title: 'Beynəlxalq Hüquq',
    shortDesc: 'Beynəlxalq müqavilələr, xarici investisiyalar',
    iconName: 'Globe',
    heroDesc: 'Beynəlxalq biznes münasibətlərinizdə hüquqi riskləri idarə edir, maraqlarınızı qoruyuruq',
    fullDesc: [
      'Beynəlxalq ticarət və investisiya mühiti mürəkkəb hüquqi çərçivəni əhatə edir. Müxtəlif ölkələrin qanunvericiliyini, beynəlxalq müqavilələri və arbitraj proseslərini yaxından bilirik.',
      'Xarici şirkətlərlə müqavilələr, investisiya uyuşmazlıqları, beynəlxalq ticarət məsələləri və xarici arbitrajda nümayəndəlik sahəsində geniş təcrübəmiz var.',
    ],
    whatWeOffer: [
      'Beynəlxalq ticarət müqavilələri',
      'Xarici investisiya hüquqi dəstəyi',
      'Beynəlxalq arbitraj',
      'İkitərəfli müqavilə şərhləri',
      'Eksport-import hüququ',
      'Beynəlxalq mülkiyyət hüququ',
      'Diplomatik qoruma məsələləri',
      'Xarici şirkətin Azərbaycanda qeydiyyatı',
    ],
    process: [
      { step: 'Hüquqi Analiz', desc: 'Beynəlxalq hüquqi çərçivəni və tərəflərin öhdəliklərini analiz edirik.' },
      { step: 'Strategiya', desc: 'Müqavilə strukturunu və hüquqi mühafizə mexanizmlərini müəyyənləşdiririk.' },
      { step: 'Danışıqlar', desc: 'Beynəlxalq standartlara uyğun müzakirələr aparırıq.' },
      { step: 'Arbitraj/Məhkəmə', desc: 'Mübahisə yaranan halda beynəlxalq arbitrajda nümayəndəlik edirik.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

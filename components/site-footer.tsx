"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 overflow-hidden border border-white/[0.08] bg-background/10">
                <Image
                  src="/logo-main.png"
                  alt="Kərimbəyli Abbas logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-serif font-bold text-sm leading-tight">
                  Kərimbəyli Abbas
                </div>
                <div className="text-accent text-[9px] uppercase tracking-[0.18em]">
                  Vəkil • Hüquqçu
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base text-white mb-5">
              {t.footer.services}
            </h4>
            <ul className="text-muted-foreground text-sm space-y-3">
              <li>
                <Link
                  href="/services/kommersiya-huququ"
                  className="hover:text-accent transition-colors"
                >
                  Kommersiya Hüququ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cinayat-huququ"
                  className="hover:text-accent transition-colors"
                >
                  Cinayət Hüququ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aile-huququ"
                  className="hover:text-accent transition-colors"
                >
                  Ailə Hüququ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mulk-huququ"
                  className="hover:text-accent transition-colors"
                >
                  Mülk Hüququ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/amak-huququ"
                  className="hover:text-accent transition-colors"
                >
                  Əmək Hüququ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/idari-huquq"
                  className="hover:text-accent transition-colors"
                >
                  İdari Hüquq
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-white mb-5">
              {t.footer.contact}
            </h4>
            <ul className="text-muted-foreground text-sm space-y-3">
              <li>
                <a
                  href="tel:+994124989595"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Image
                    src="/phone.svg"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  +994 12 498 95 95
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/994502115474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Image
                    src="/whatsapp-white.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  +994 50 211 54 74
                </a>
              </li>
              <li>
                <a
                  href="mailto:abbas.karimbayli@gmail.com"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Image
                    src="/envelope.svg"
                    alt="Email"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  abbas.karimbayli@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Füzuli küç.,45A Bakı, Azərbaycan, Baku 47 sayli bina, Fides
                Fides Vəkil Bürosu
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">🕐</span>
                {t.nav.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-white mb-5">
              {t.footer.social}
            </h4>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1EyB2LiMJ2/?mibextid=wwXIfr",
                  file: "facebook",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/abbaskarimbayli?igsh=MTZ1Mmt4MjE4dnl5aw==",
                  file: "instagram",
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@abbas_karimbayli?_r=1&_t=ZS-97yPyIud8QS",
                  file: "tiktok",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/abbas-karimbayli-3b546417b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                  file: "linkedin",
                },
                { label: "Telegram", href: "https://t.me", file: "telegram" },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/994502115474",
                  file: "whatsapp-white",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-muted-foreground hover:text-accent transition-colors group"
                >
                  <span className="w-6 h-6 rounded bg-white/[0.05] border border-white/[0.07] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <Image
                      src={`/${s.file}.svg`}
                      alt={s.label}
                      width={14}
                      height={14}
                      className="w-3 h-3 object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-10 pb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-widest text-center mb-7">
            {t.footer.orgs}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              {
                label: "Azərbaycan Vəkillər Kollegiyası",
                src: "/footer-icons/attorney.png",
                href: "https://barassociation.az/",
              },
              {
                label: "Ədliyyə Nazirliyi",
                src: "/footer-icons/justije.png",
                href: "https://www.justice.gov.az",
              },
              {
                label: "Milli Məclis",
                src: "/footer-icons/parlament.png",
                href: "https://www.meclis.gov.az",
              },
              {
                label: "Mediasiya Mərkəzi",
                src: "/footer-icons/mediation.svg",
                href: "https://courts.gov.az/",
              },
              {
                label: "E-Qanun Portalı",
                src: "/footer-icons/e-law.png",
                href: "https://e-qanun.az",
              },
            ].map((org) => (
              <a
                key={org.label}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                title={org.label}
                className="flex items-center justify-center"
              >
                <Image
                  src={org.src}
                  alt={org.label}
                  width={110}
                  height={40}
                  className="h-14 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-background/40">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={t.footer.domainOneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {t.footer.domainOne}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={t.footer.domainTwoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {t.footer.domainTwo}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

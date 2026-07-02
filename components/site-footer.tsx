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
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-serif font-bold text-base leading-none">
                  V
                </span>
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
                  className="hover:text-accent transition-colors flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">📞</span>+994 12 498 95
                  95
                </a>
              </li>
              <li>
                <a
                  href="tel:+994502115474"
                  className="hover:text-accent transition-colors flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">📞</span>+994 50 211 54
                  74
                </a>
              </li>
              <li>
                <a
                  href="mailto:abbas.karimbayli@gmail.com"
                  className="hover:text-accent transition-colors flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">✉</span>
                  abbas.karimbayli@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">📍</span>Füzuli küçəsi 47,
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
                  href: "https://facebook.com",
                  file: "facebook",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  file: "instagram",
                },
                { label: "Telegram", href: "https://t.me", file: "telegram" },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/994502115474",
                  file: "whatsapp",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <span className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.07] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <Image
                      src={`/${s.file}.svg`}
                      alt={s.label}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
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

      <div className="border-t border-white/[0.04] bg-background/40">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; 2026 {t.footer.copyright}</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-accent transition-colors">
              {t.footer.privacy}
            </Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="hover:text-accent transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

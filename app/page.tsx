"use client";
import Image from "next/image";
import Link from "next/link";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  WhyChooseSection,
  PracticeSection,
  FAQSection,
  MapSection,
  ContactSection,
} from "@/components/lawyer-sections";
import { FadeUp, StaggerList, StaggerItem } from "@/components/motion";
import SiteHeader from "@/components/site-header";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground">
      {/* Sticky Social Icons */}
      <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-3 pr-4">
        {[
          {
            href: "https://wa.me/994502115474",
            file: "whatsapp",
            label: "WhatsApp",
          },
          { href: "https://facebook.com", file: "facebook", label: "Facebook" },
          { href: "https://t.me", file: "telegram", label: "Telegram" },
          {
            href: "https://instagram.com",
            file: "instagram",
            label: "Instagram",
          },
        ].map((s) => (
          <a
            key={s.file}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="w-11 h-11 bg-card border border-white/[0.08] rounded-xl flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <Image
              src={`/${s.file}.svg`}
              alt={s.label}
              width={22}
              height={22}
              className="w-5 h-5 object-contain brightness-0 invert"
            />
          </a>
        ))}
      </div>

      <SiteHeader />

      <HeroSection />

      {/* Stats bar */}
      <section className="bg-gold-gradient text-black py-0">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerList
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/15"
            baseDelay={0.1}
            staggerDelay={0.1}
          >
            {(t.stats as readonly { value: string; label: string }[]).map(
              (stat, i) => (
                <StaggerItem key={i}>
                  <div className="py-5 px-4 text-center md:py-7 md:px-6">
                    <div className="text-xl lg:text-2xl font-serif font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm font-semibold uppercase tracking-widest mt-1 opacity-70">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ),
            )}
          </StaggerList>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />

      {/* Testimonials */}
      <section className="py-32 bg-background" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp className="text-center mb-20">
            <p className="text-base text-accent uppercase tracking-widest mb-3">
              {t.testimonials.label}
            </p>
            <h2 className="text-4xl font-serif font-bold text-white">
              {t.testimonials.title}
            </h2>
          </FadeUp>
          <StaggerList className="grid md:grid-cols-3 gap-6">
            {(
              t.testimonials.items as readonly {
                name: string;
                role: string;
                text: string;
              }[]
            ).map((test, i) => (
              <StaggerItem key={i}>
                <div className="p-8 bg-card rounded-xl border border-white/[0.07] card-glow card-glow-hover transition-all duration-300 flex flex-col h-full">
                  <div className="text-accent text-xl mb-4 tracking-widest">
                    ★★★★★
                  </div>
                  <p className="text-muted-foreground text-base mb-6 italic leading-relaxed flex-1">
                    &ldquo;{test.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-base">
                      {test.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">
                        {test.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {test.role}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <PracticeSection />
      <FAQSection id="faq" />
      <ContactSection />
      <MapSection />
    </div>
  );
}

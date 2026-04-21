"use client";

import { ArrowRight } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const DONATION_OPTIONS = [
  { amount: "25 €", label: "Ein Stein", description: "Baumaterial" },
  { amount: "50 €", label: "Ein Fenster", description: "Verglasung" },
  { amount: "100 €", label: "Eine Tür", description: "Innenausbau" },
  { amount: "250 €", label: "Ein Raum", description: "Renovierung" },
];

export default function BauSpenden() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tag */}
        <BlurFade>
          <p className="text-xs font-medium text-accent uppercase tracking-[0.25em] mb-12 sm:mb-16 text-center">
            Ihre Unterstützung
          </p>
        </BlurFade>

        {/* Heading */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-tight">
              So können Sie <span className="italic">helfen</span>
            </h2>
            <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-lg mx-auto font-light">
              Wählen Sie einen symbolischen Beitrag oder spenden Sie einen
              individuellen Betrag.
            </p>
          </div>
        </BlurFade>

        {/* Donation tiers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-20 sm:mb-24">
          {DONATION_OPTIONS.map((option, idx) => (
            <BlurFade key={option.label} delay={0.15 + idx * 0.08}>
              <a
                href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-center py-8 sm:py-10 px-4 rounded-2xl border border-transparent hover:border-accent/20 transition-all duration-500 hover:bg-accent/[0.03]"
              >
                <span className="block text-3xl sm:text-4xl font-serif text-primary tracking-tight mb-2 group-hover:text-accent transition-colors duration-500">
                  {option.amount}
                </span>
                <span className="block text-sm font-semibold text-primary/80 mb-0.5">
                  {option.label}
                </span>
                <span className="block text-[11px] text-gray-400 uppercase tracking-wider">
                  {option.description}
                </span>
              </a>
            </BlurFade>
          ))}
        </div>

        {/* Hadith quote — the emotional anchor */}
        <BlurFade delay={0.4}>
          <div className="text-center mb-20 sm:mb-24 max-w-xl mx-auto">
            <div className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl sm:text-2xl font-serif text-primary/80 italic leading-relaxed">
              „Wer für Allah eine Moschee baut, dem baut Allah ein Haus im
              Paradies."
            </p>
            <p className="mt-3 text-xs text-gray-400 tracking-wide">
              Hadith — Bukhari &amp; Muslim
            </p>
            <div className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>
        </BlurFade>

        {/* Bank transfer — clean, centered */}
        <BlurFade delay={0.5}>
          <div className="max-w-md mx-auto text-center mb-12">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.25em] mb-8">
              Banküberweisung
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
                  Empfänger
                </p>
                <p className="text-base font-semibold text-primary">
                  Marokkanischer Kulturverein Lüdenscheid e.V.
                </p>
              </div>

              <div className="w-12 h-px bg-gray-100 mx-auto" />

              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
                  IBAN
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-primary font-mono tracking-wider">
                  DE00 0000 0000 0000 0000 00
                </p>
              </div>

              <div className="w-12 h-px bg-gray-100 mx-auto" />

              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
                  Verwendungszweck
                </p>
                <p className="text-base font-semibold text-primary">
                  Spende Neubau
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* PayPal CTA */}
        <BlurFade delay={0.6}>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">
              Oder direkt online
            </p>
            <a
              href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:scale-105 active:scale-[0.97] transition-all duration-300 shadow-[0_4px_24px_rgba(1,61,39,0.2)]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.77.77 0 01.757-.654h6.34c2.104 0 3.58.562 4.39 1.67.38.52.63 1.084.763 1.725.14.68.14 1.49-.01 2.47l-.013.07v.61l.476.264c.4.196.72.424.97.686.39.41.64.93.74 1.547.1.636.07 1.373-.1 2.19a7.12 7.12 0 01-.83 2.1 4.93 4.93 0 01-1.33 1.44c-.52.37-1.13.65-1.82.83-.67.17-1.43.26-2.25.26h-.535a1.62 1.62 0 00-1.6 1.37l-.04.22-.64 4.07-.03.16a.163.163 0 01-.16.14H7.076z" />
              </svg>
              Mit PayPal spenden
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-4 text-xs text-gray-400">
              Sicher &amp; schnell. Spendenquittung wird automatisch erstellt.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

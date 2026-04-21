"use client";

import { Check } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const PHASES = [
  {
    year: "2023",
    title: "Objektsuche & Kauf",
    description:
      "Geeignetes Objekt in Lüdenscheid gefunden und erfolgreich erworben. Ein wichtiger erster Schritt für unsere Gemeinde.",
    status: "done" as const,
  },
  {
    year: "2024",
    title: "Planung & Genehmigung",
    description:
      "Architekturplanung abgeschlossen, Bauanträge eingereicht und behördliche Genehmigungen erfolgreich eingeholt.",
    status: "done" as const,
  },
  {
    year: "2025",
    title: "Rohbau & Kernsanierung",
    description:
      "Entkernung, Statik, Dach und Fassade — die grundlegende Gebäudestruktur wird hergestellt und saniert.",
    status: "current" as const,
  },
  {
    year: "2025",
    title: "Innenausbau",
    description:
      "Gebetshalle, Sanitäranlagen, Heizung, Elektrik und Schallisolierung werden eingebaut.",
    status: "upcoming" as const,
  },
  {
    year: "2026",
    title: "Bildungs- & Gemeinderäume",
    description:
      "Unterrichtsräume, Bibliothek, Küche und Mehrzweckräume einrichten und ausstatten.",
    status: "upcoming" as const,
  },
  {
    year: "2026",
    title: "Eröffnung",
    description:
      "Feierliche Eröffnung und Einweihung unserer neuen Moschee für die gesamte Gemeinde, inshallah.",
    status: "upcoming" as const,
  },
];

export default function BauRoadmap() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Sticky Header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <BlurFade direction="left">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Roadmap
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif leading-tight">
              Der Weg zu unserer
              <br />
              neuen <span className="italic">Moschee</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed max-w-md">
              Von der ersten Idee bis zur Eröffnung — ein Überblick über alle
              Meilensteine unseres Moscheebau-Projekts.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:scale-105 active:scale-[0.97] transition-all duration-300"
              >
                Jetzt unterstützen
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Right: Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-16">
            {PHASES.map((item, idx) => (
              <BlurFade key={`${item.year}-${item.title}`} delay={idx * 0.1} direction="right">
                <div className="relative pl-10">
                  {/* Dot on line */}
                  <div className="absolute left-0 -translate-x-1/2 top-1">
                    {item.status === "done" ? (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(1,61,39,0.2)]">
                        <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                    ) : item.status === "current" ? (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-[0_2px_8px_rgba(242,167,82,0.3)] relative">
                        <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-30" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200" />
                    )}
                  </div>

                  {/* Content */}
                  <span
                    className={`text-sm font-semibold block mb-1 ${
                      item.status === "current"
                        ? "text-accent"
                        : item.status === "done"
                          ? "text-primary/60"
                          : "text-gray-300"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl font-semibold mb-3 ${
                      item.status === "upcoming" ? "text-gray-300" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed max-w-md ${
                      item.status === "upcoming" ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

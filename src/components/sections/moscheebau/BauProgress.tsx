"use client";

import { useEffect, useRef, useState } from "react";
import BlurFade from "@/components/ui/BlurFade";

// Platzhalter-Werte — später mit echten Daten ersetzen
const GOAL = 250000;
const RAISED = 148000;
const DONORS = 312;
const PERCENTAGE = Math.round((RAISED / GOAL) * 100);

export default function BauProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade>
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="text-center sm:text-left">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                Gesammelt
              </p>
              <p className="text-3xl sm:text-4xl font-normal text-primary font-serif tracking-tight">
                {RAISED.toLocaleString("de-DE")} €
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                Spendenziel
              </p>
              <p className="text-3xl sm:text-4xl font-normal text-primary font-serif tracking-tight">
                {GOAL.toLocaleString("de-DE")} €
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                Unterstützer
              </p>
              <p className="text-3xl sm:text-4xl font-normal text-primary font-serif tracking-tight">
                {DONORS}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div ref={barRef}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">Fortschritt</span>
              <span className="text-sm font-semibold text-accent">{PERCENTAGE}%</span>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-[2000ms] ease-out"
                style={{ width: animated ? `${PERCENTAGE}%` : "0%" }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Jede Spende bringt uns dem Ziel näher — egal wie groß oder klein.
            </p>
            <a
              href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-primary font-semibold text-sm hover:scale-105 active:scale-[0.97] transition-all duration-300"
            >
              Jetzt spenden
            </a>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

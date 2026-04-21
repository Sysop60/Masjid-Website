"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Users, Calendar } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const GOAL = 250000;
const RAISED = 148000;
const DONORS = 312;
const PERCENTAGE = Math.round((RAISED / GOAL) * 100);

function useCountUp(target: number, running: boolean, duration = 2200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!running) return;
    let start: number | null = null;
    let frame: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [running, target, duration]);

  return value;
}

export default function BauProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) setAnimated(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.25 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onIntersect]);

  const displayAmount = useCountUp(RAISED, animated);
  const displayDonors = useCountUp(DONORS, animated, 1800);

  return (
    <section ref={ref} className="py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <BlurFade>
          <p className="text-xs font-medium text-accent uppercase tracking-[0.25em] mb-12 sm:mb-16">
            Spendenfortschritt
          </p>
        </BlurFade>

        {/* Giant Amount — the hero element */}
        <BlurFade delay={0.1}>
          <p className="text-6xl sm:text-7xl md:text-[5.5rem] font-serif text-primary tracking-tight leading-none">
            {displayAmount.toLocaleString("de-DE")}
            <span className="text-accent"> €</span>
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            von {GOAL.toLocaleString("de-DE")} € Spendenziel
          </p>
        </BlurFade>

        {/* Progress line with glow dot */}
        <BlurFade delay={0.2}>
          <div className="relative my-12 sm:my-16 mx-auto max-w-2xl">
            {/* Track */}
            <div className="h-[2px] w-full bg-gray-100 rounded-full" />

            {/* Gradient fill */}
            <div
              className="absolute top-0 left-0 h-[2px] rounded-full transition-all duration-[2500ms] ease-out"
              style={{
                width: animated ? `${PERCENTAGE}%` : "0%",
                background: "linear-gradient(90deg, #013d27 0%, #f2a752 100%)",
              }}
            />

            {/* Glow dot at current position */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-[2500ms] ease-out"
              style={{ left: animated ? `${PERCENTAGE}%` : "0%" }}
            >
              <div className="w-3.5 h-3.5 -ml-[7px] rounded-full bg-accent shadow-[0_0_16px_rgba(242,167,82,0.6),0_0_4px_rgba(242,167,82,0.9)]" />
            </div>

            {/* Percentage floating above the dot */}
            <div
              className="absolute -top-8 transition-all duration-[2500ms] ease-out"
              style={{ left: animated ? `${PERCENTAGE}%` : "0%" }}
            >
              <span className="text-xs font-semibold text-accent -ml-5 tabular-nums">
                {PERCENTAGE}%
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Stats — minimal, two items */}
        <BlurFade delay={0.3}>
          <div className="inline-flex items-center gap-8 sm:gap-12 mb-14">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/[0.04] flex items-center justify-center mx-auto mb-2.5">
                <Users className="w-4 h-4 text-primary/40" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-primary tabular-nums">
                {displayDonors}
              </p>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">
                Unterstützer
              </p>
            </div>

            <div className="w-px h-14 bg-gray-100" />

            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/[0.04] flex items-center justify-center mx-auto mb-2.5">
                <Calendar className="w-4 h-4 text-primary/40" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-primary">
                2023
              </p>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">
                Projekt-Start
              </p>
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.4}>
          <div>
            <a
              href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-accent text-primary font-semibold hover:scale-105 active:scale-[0.97] transition-all duration-300 shadow-[0_4px_24px_rgba(242,167,82,0.25)]"
            >
              Jetzt unterstützen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-5 text-xs text-gray-400">
              Jede Spende bringt uns dem Ziel näher — egal wie groß oder klein.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

export default function ProgrammCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <BlurFade>
        <div className="bg-primary rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,167,82,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight font-serif">
              Haben Sie Fragen zum{" "}
              <span className="italic">Programm</span>?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
              Wir freuen uns über Ihr Interesse und helfen Ihnen gerne bei
              Fragen zu unseren Vorträgen, Kursen und Veranstaltungen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-semibold hover:scale-105 active:scale-[0.97] transition-all duration-300"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Spenden
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

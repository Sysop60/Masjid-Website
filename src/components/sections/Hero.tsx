import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import moscheeHero from "@/assets/images/moschee-hero.png";
import BlurFade from "@/components/ui/blur-fade";

export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 mb-16">
        <BlurFade direction="left" className="flex-1">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-normal text-primary tracking-tight leading-[0.9] font-serif">
            Abdulkarim <br />Al-Khattabi
          </h1>
        </BlurFade>

        <div className="hidden lg:block w-px h-44 bg-gray-200 flex-shrink-0" />

        <BlurFade direction="right" delay={0.2} className="flex-1">
          <h3 className="text-2xl font-normal text-primary mb-5 italic font-serif">
            Die Abdulkarim Alkhattabi Moschee in Lüdenscheid
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed font-light">
            Ein Ort der Begegnung, des Gebets und des Lernens im Herzen von
            Lüdenscheid. Wir laden Sie ein, Teil unserer lebendigen
            Gemeinschaft zu werden und gemeinsam spirituelles Wachstum zu
            erfahren.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="#gebetszeiten"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:gap-3 transition-all"
            >
              Gebetszeiten ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurFade>
      </div>

      {/* Hero Image */}
      <BlurFade delay={0.4} duration={1}>
      <div className="relative w-full h-[400px] sm:h-[600px] rounded-[25px] overflow-hidden group">
        <Image
          src={moscheeHero}
          alt="Moschee"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-3xl sm:text-5xl font-normal text-white mb-3 tracking-tight font-serif">
              Spirituelle Heimat in Lüdenscheid
            </h4>
            <p className="text-white/80 text-sm sm:text-base font-normal max-w-md">
              Entdecken Sie unsere täglichen Gebete, Bildungskurse und
              sozialen Projekte, die unsere Gemeinschaft stärken.
            </p>
          </div>
          <Link
            href="/spenden"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-b from-[#f5b96b] to-[#e8943f] text-primary font-semibold ring-1 ring-white/20 hover:scale-105 active:scale-[0.97] transition-all duration-300"
          >
            Jetzt unterstützen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      </BlurFade>
    </main>
  );
}

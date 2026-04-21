import Image from "next/image";
import BlurFade from "@/components/ui/BlurFade";
import moscheeHero from "@/assets/images/moschee-hero.png";

export default function BauHero() {
  return (
    <section className="relative h-[55vh] min-h-[450px] flex items-end overflow-hidden">
      <Image
        src={moscheeHero}
        alt="Neuer Moscheebau"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <BlurFade direction="left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Aktuelles Projekt
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight font-serif">
            Unser neuer <span className="italic">Moscheebau</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl font-light">
            Ein neues Zuhause für unsere Gemeinde entsteht. Das Grundstück ist
            gesichert — jetzt brauchen wir Ihre Unterstützung für den Umbau.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

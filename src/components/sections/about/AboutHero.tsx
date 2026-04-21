import Image from "next/image";
import moscheeHero from "@/assets/images/moschee-hero.png";
import BlurFade from "@/components/ui/BlurFade";

export default function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <Image
        src={moscheeHero}
        alt="Moschee"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <BlurFade direction="left">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Marokkanischer Kulturverein Lüdenscheid e.V.
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight font-serif">
            Über <span className="italic">uns</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

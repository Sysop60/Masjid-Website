import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import imgGebete from "@/assets/images/muslim-praying-sujud-posture.jpg";
import imgQuran from "@/assets/images/muslims-reading-from-quran.jpg";
import imgFreitag from "@/assets/images/matin-firouzabadi-vqiYsMeNJOo-unsplash.jpg";
import imgFeste from "@/assets/images/Happy Eid 🙏🏻.jpeg";

const OFFERINGS = [
  {
    title: "Tägliche Gebete",
    meta1: "Täglich, 5x am Tag",
    meta2: "Gebetshalle",
    image: imgGebete,
  },
  {
    title: "Qur'an- & Islamunterricht",
    meta1: "Wöchentlich",
    meta2: "Bildungsräume",
    image: imgQuran,
  },
  {
    title: "Freitagspredigten & Vorträge",
    meta1: "Jeden Freitag",
    meta2: "Gebetshalle",
    image: imgFreitag,
  },
  {
    title: "Jugend- & Familienarbeit",
    meta1: "Regelmäßig",
    meta2: "Gemeinderäume",
    image: "https://images.unsplash.com/photo-1536437075651-01d675529a3b?q=80&w=800&h=800&auto=format&fit=crop",
  },
  {
    title: "Soziale Projekte & Hilfe",
    meta1: "Laufend",
    meta2: "Gemeinde & Stadt",
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=800&h=800&auto=format&fit=crop",
  },
  {
    title: "Feste & Feiertage",
    meta1: "Eid, Ramadan & mehr",
    meta2: "Gesamte Moschee",
    image: imgFeste,
  },
];

export default function EventCalendar() {
  return (
    <section id="angebote" className="relative py-32 overflow-hidden bg-primary">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <BlurFade className="mb-10">
          <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-4 font-serif">
            Unsere <span className="italic">Angebote</span> und{" "}
            <span className="italic">Aktivitäten</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md">
            Entdecken Sie, was unsere Moschee für die Gemeinschaft bereithält.
          </p>
        </BlurFade>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {OFFERINGS.map((item, idx) => (
            <BlurFade key={item.title} delay={0.1 + idx * 0.1}>
              <div className="group flex items-start gap-5">
                {/* Arch-shaped Image */}
                <div className="relative w-40 h-52 flex-shrink-0 overflow-hidden bg-white/10 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center min-h-[9rem]">
                  <h3 className="text-base font-semibold text-white leading-snug mb-3">
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.meta1}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.meta2}</span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-accent transition-colors cursor-pointer">
                    Mehr erfahren →
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

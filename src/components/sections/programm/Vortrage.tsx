import Image from "next/image";
import { Mic, BookOpen, Star, MessageCircle, Clock, MapPin } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";

const VORTRAGE = [
  {
    icon: Mic,
    title: "Freitagspredigt (Khutba)",
    description:
      "Die wöchentliche Freitagspredigt in arabischer Sprache mit deutscher Zusammenfassung zu aktuellen und spirituellen Themen.",
    schedule: "Jeden Freitag, 13:00 Uhr",
    location: "Gebetshalle",
  },
  {
    icon: BookOpen,
    title: "Islamische Ethik & Lebensführung",
    description:
      "Vortragsreihe über islamische Werte, Ethik und deren Anwendung im Alltag — offen für alle Interessierten.",
    schedule: "Jeden Samstag, 18:00 Uhr",
    location: "Gemeinderaum",
  },
  {
    icon: Star,
    title: "Seerah — Prophetenbiographie",
    description:
      "Einblicke in das Leben des Propheten Muhammad ﷺ, seine Lehren und deren Bedeutung für die heutige Zeit.",
    schedule: "Jeden Sonntag, 10:00 Uhr",
    location: "Gemeinderaum",
  },
  {
    icon: MessageCircle,
    title: "Themenabend",
    description:
      "Monatlicher Vortrag zu wechselnden Themen mit anschließender Diskussion und Austausch in der Gemeinde.",
    schedule: "1× monatlich, 19:30 Uhr",
    location: "Gebetshalle",
  },
];

export default function Vortrage() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mosaic Pattern Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-16 -right-32 w-[500px] h-[500px] object-contain opacity-[0.08]"
          style={{
            maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade className="mb-16">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
            Wissen & Inspiration
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Vorträge & <span className="italic">Predigten</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            Regelmäßige Vorträge und Predigten zu verschiedenen Themen des
            islamischen Wissens — für die ganze Gemeinde.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VORTRAGE.map((item, idx) => (
            <BlurFade key={item.title} delay={idx * 0.12}>
              <div
                className="group rounded-[2rem] p-8 sm:p-10 border border-white/30 ring-1 ring-white/40 h-full transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
                  backdropFilter: "blur(40px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                  boxShadow:
                    "0 4px 16px rgba(1,61,39,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-primary/70">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.schedule}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-primary/70">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

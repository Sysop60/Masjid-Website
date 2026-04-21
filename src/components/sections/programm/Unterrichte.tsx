import Image from "next/image";
import { BookOpen, GraduationCap, Languages, Users, Clock, MapPin } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";

const UNTERRICHTE = [
  {
    icon: BookOpen,
    title: "Qur'an-Unterricht für Kinder",
    description:
      "Spielerisches Erlernen des Qur'an-Lesens mit Tajweed-Grundlagen für Kinder ab 6 Jahren.",
    schedule: "Mo & Mi, 16:00–17:30",
    location: "Bildungsräume",
    audience: "Kinder (6–12 J.)",
  },
  {
    icon: GraduationCap,
    title: "Qur'an-Unterricht für Erwachsene",
    description:
      "Vertiefung der Qur'an-Rezitation und Auseinandersetzung mit Tafsir (Exegese) ausgewählter Suren.",
    schedule: "Di & Do, 19:00–20:30",
    location: "Gemeinderaum",
    audience: "Erwachsene",
  },
  {
    icon: BookOpen,
    title: "Tajweed-Kurs (Fortgeschrittene)",
    description:
      "Verfeinerung der Ausspracheregeln für fortgeschrittene Qur'an-Leser mit praktischen Übungen.",
    schedule: "Samstag, 10:00–11:30",
    location: "Bildungsräume",
    audience: "Fortgeschrittene",
  },
  {
    icon: Languages,
    title: "Arabisch für Anfänger",
    description:
      "Grundlagen der arabischen Sprache — Alphabet, Lesen, Schreiben und einfache Konversation.",
    schedule: "Sonntag, 11:00–12:30",
    location: "Bildungsräume",
    audience: "Alle Niveaus",
  },
  {
    icon: Users,
    title: "Islamwissen für Jugendliche",
    description:
      "Altersgerechte Vermittlung islamischer Grundlagen, Werte und Identität in der modernen Gesellschaft.",
    schedule: "Freitag, 17:00–18:30",
    location: "Jugendraum",
    audience: "Jugendliche (13–18 J.)",
  },
];

export default function Unterrichte() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mosaic Pattern Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-24 -left-36 w-[600px] h-[600px] object-contain opacity-[0.06]"
          style={{
            maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade className="mb-16">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
            Bildung & Entwicklung
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Unterrichte & <span className="italic">Kurse</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            Wöchentliche Kurse für Kinder, Jugendliche und Erwachsene — von
            Qur'an-Unterricht bis Arabisch-Kurse.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNTERRICHTE.map((item, idx) => (
            <BlurFade key={item.title} delay={idx * 0.1}>
              <div
                className="group rounded-[2rem] p-8 border border-white/30 ring-1 ring-white/40 h-full transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
                  backdropFilter: "blur(40px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                  boxShadow:
                    "0 4px 16px rgba(1,61,39,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-primary/80 px-3 py-1 rounded-full">
                    {item.audience}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-primary/70">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium">{item.schedule}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary/70">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
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

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PRAYER_TIMES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-normal text-primary tracking-tight max-w-xl leading-[0.9] font-serif">
            Glaube &amp; <br /> Gemeinschaft
          </h1>

          <div className="hidden lg:block w-px h-44 bg-gray-200 self-center" />

          <div className="max-w-xl">
            <h3 className="text-2xl font-normal text-primary mb-5 italic font-serif">
              Die Abdulkarim Alkhattabi Moschee
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed font-normal">
              Ein Ort der Begegnung, des Gebets und des Lernens im Herzen von
              Lüdenscheid. Wir laden Sie ein, Teil unserer lebendigen
              Gemeinschaft zu werden und gemeinsam spirituelles Wachstum zu
              erfahren.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="#gebetszeiten"
                className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all"
              >
                Gebetszeiten ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[600px] rounded-[25px] overflow-hidden group">
          <div className="absolute inset-0 bg-primary">
            <Image
              src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop"
              alt="Moschee"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
          </div>
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
              className="px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:scale-105 transition-transform active:scale-95 text-center"
            >
              Jetzt unterstützen
            </Link>
          </div>
        </div>
      </main>

      {/* Prayer Times Bar */}
      <section
        id="gebetszeiten"
        className="bg-white border-y border-gray-100 py-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {PRAYER_TIMES.map((prayer) => (
              <div
                key={prayer.name}
                className={`flex flex-col border-l-2 pl-4 ${
                  prayer.active
                    ? "border-accent"
                    : "border-accent/20"
                }`}
              >
                <span
                  className={`text-xs font-medium uppercase tracking-widest ${
                    prayer.active ? "text-accent" : "text-gray-400"
                  }`}
                >
                  {prayer.name}
                </span>
                <span className="text-2xl font-medium text-primary font-serif">
                  {prayer.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col gap-8">
          {/* Top Large Feature */}
          <div className="relative group h-[500px] md:h-[700px] w-full rounded-[32px] overflow-hidden bg-white border border-gray-100 flex flex-col md:flex-row">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold mb-6 w-fit">
                <Star className="w-3.5 h-3.5" />
                <span>Bildung &amp; Werte</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-normal text-primary tracking-tight mb-6 leading-tight font-serif">
                Wissen für die <br /> nächste Generation.
              </h2>
              <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
                Unsere Programme bieten tiefgreifendes Verständnis des Glaubens
                kombiniert mit modernen pädagogischen Ansätzen für Kinder und
                Erwachsene.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold hover:shadow-xl transition-all">
                  Kursprogramm 2024
                </button>
                <button className="px-8 py-3.5 border border-gray-200 text-gray-600 rounded-full font-semibold hover:bg-gray-50 transition-all">
                  Mehr erfahren
                </button>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1964&auto=format&fit=crop"
                alt="Bildung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block" />
            </div>
          </div>

          {/* Bottom Wide Banner */}
          <div className="relative w-full rounded-[32px] overflow-hidden bg-primary p-8 md:p-16 text-white min-h-[350px] flex items-center">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
            </div>

            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-normal tracking-tight mb-4 font-serif">
                  Ein Ort der Vielfalt und des Miteinanders.
                </h3>
                <p className="text-white/60 text-lg">
                  Von interkulturellen Begegnungen bis hin zu humanitärer Hilfe
                  – wir engagieren uns für ein starkes Lüdenscheid.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <Image
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Mitglied"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                    alt="Mitglied"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                    alt="Mitglied"
                    width={48}
                    height={48}
                  />
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-primary text-xs font-bold">
                    +2k
                  </div>
                </div>
                <div className="h-10 w-px bg-white/20 mx-4 hidden sm:block" />
                <Link href="#" className="flex items-center gap-3 group/link">
                  <span className="font-semibold text-sm">
                    Mitglied werden
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-primary transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

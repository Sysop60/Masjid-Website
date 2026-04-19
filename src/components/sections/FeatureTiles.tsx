import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function FeatureTiles() {
  return (
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
                Von interkulturellen Begegnungen bis hin zu humanitärer Hilfe –
                wir engagieren uns für ein starkes Lüdenscheid.
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
                <span className="font-semibold text-sm">Mitglied werden</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-primary transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

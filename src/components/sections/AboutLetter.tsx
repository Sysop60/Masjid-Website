import Image from "next/image";
import { Leaf } from "lucide-react";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";
import BlurFade from "@/components/ui/blur-fade";

export default function AboutLetter() {
  return (
    <section
      id="ueber-uns"
      className="relative py-32 bg-warm-white overflow-hidden"
    >
      {/* Islamic mosaic pattern - large behind the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Oben rechts */}
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-16 -right-32 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        {/* Unten links */}
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-24 -left-36 w-[600px] h-[600px] object-contain opacity-15"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        {/* Oben links */}
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-20 -left-32 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        {/* Unten rechts */}
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-20 -right-28 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <BlurFade duration={1} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-gray-100 rounded-tr-[64px] rounded-bl-[64px] p-10 md:p-20 relative shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          {/* Minimalist Ornament / Fold lines */}
          <div className="absolute top-0 right-16 w-[1px] h-24 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50 hidden md:block" />
          <div className="absolute bottom-0 left-16 w-[1px] h-24 bg-gradient-to-t from-transparent via-accent to-transparent opacity-50 hidden md:block" />

          <div className="relative z-10 flex flex-col gap-10">
            {/* Salutation Header */}
            <div className="space-y-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Eine Botschaft an euch
              </p>
              <h2 className="text-3xl md:text-7xl font-normal text-primary tracking-tight leading-snug font-arabic" dir="rtl" lang="ar">
                بِسْمِ السَّلَامِوَالرَّحْمَةِ
              </h2>
            </div>

            {/* Letter Body */}
            <div className="space-y-8 text-lg text-gray-500 leading-[2] font-normal max-w-2xl">
              <p>
                Liebe Geschwister, liebe Freunde und Nachbarn in Lüdenscheid,
              </p>
              <p>
                wie eine Karawane, die nach langer Reise einen Ort der Rast findet,
                so haben wir diese Räume als spirituelle Heimstätte gegründet. Die
                Abdulkarim Alkhattabi Moschee ist mehr als nur ein Gebäude; sie ist
                ein aufgeschlagenes Buch unserer gemeinsamen Geschichte.
              </p>
              <p>
                Unsere Wände bewahren die Stille des Gebets, während unsere Türen
                der Zukunft weit offen stehen. Wir pflegen die alte Tradition der
                Gastfreundschaft und verbinden sie mit unserem gegenwärtigen Leben
                in der Mitte der Gesellschaft. Ein Ort, an dem Wissen
                weitergegeben, Nachbarschaft gelebt und Herzen verbunden werden.
              </p>
              <p>
                Tretet ein. Lest in unseren Zeilen, lauscht den Worten und werdet
                Teil dieser Geschichte, die wir jeden Tag aufs Neue gemeinsam
                schreiben.
              </p>
            </div>

            {/* Sign-off / "Seal" */}
            <div className="pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-gray-50 mt-4">
              <div className="text-left md:text-right">
                <p className="text-2xl text-primary mb-1 tracking-tight font-serif">
                  In friedvoller Verbundenheit,
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Die Gemeinde
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

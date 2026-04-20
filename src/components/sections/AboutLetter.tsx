import Image from "next/image";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";
import BlurFade from "@/components/ui/blur-fade";

export default function AboutLetter() {
  return (
    <section
      id="ueber-uns"
      className="relative py-24 sm:py-32 bg-warm-white overflow-hidden"
    >
      {/* Islamic mosaic pattern - large behind the card (UNCHANGED) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-16 -right-32 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-24 -left-36 w-[600px] h-[600px] object-contain opacity-15"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-20 -left-32 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-20 -right-28 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <BlurFade duration={1} className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* The Letter Container */}
        <div
          className="rounded-2xl sm:rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #FCFBF9 100%)",
            boxShadow:
              "0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.02), 0 20px 40px -10px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(231,229,228,0.5)",
          }}
        >
          {/* Inner Oriental Frame */}
          <div className="absolute inset-3 sm:inset-6 border border-gray-200/60 rounded-xl sm:rounded-2xl pointer-events-none">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border border-gray-300 bg-gray-50 rounded-sm" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border border-gray-300 bg-gray-50 rounded-sm" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-gray-300 bg-gray-50 rounded-sm" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-gray-300 bg-gray-50 rounded-sm" />
          </div>

          {/* Content Area */}
          <div className="relative p-8 sm:p-16 md:p-24 flex flex-col gap-12 sm:gap-16">
            {/* Header */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-gray-200 flex-1 max-w-[60px]" />
              <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] text-center">
                Eine Botschaft an euch
              </p>
              <div className="h-px bg-gray-200 flex-1 max-w-[60px]" />
            </div>

            {/* Arabic Salutation */}
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary tracking-tight font-arabic"
                  dir="rtl"
                  lang="ar"
                  style={{ lineHeight: 1.4 }}
                >
                  بِسْمِ السَّلَامِ وَالرَّحْمَةِ
                </h2>
              </div>
            </BlurFade>

            {/* Letter Body */}
            <BlurFade delay={0.3}>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-500 leading-[2.2] sm:leading-[2.4] font-light max-w-2xl mx-auto relative">
                {/* Decorative quote line */}
                <div className="absolute -left-4 sm:-left-8 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

                <p className="text-primary font-medium">
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
            </BlurFade>

            {/* Footer / Seal */}
            <BlurFade delay={0.4}>
              <div className="mt-8 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 sm:gap-12">
                <div className="text-center sm:text-left space-y-3">
                  <p className="text-xl sm:text-2xl text-primary tracking-tight font-serif italic">
                    In friedvoller Verbundenheit,
                  </p>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.15em]">
                    Die Gemeinde
                  </p>
                </div>

                <span className="text-3xl sm:text-4xl font-arabic text-primary/50 leading-none select-none flex-shrink-0" dir="rtl" lang="ar">سلام</span>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Ambient shadow below the letter */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
      </BlurFade>
    </section>
  );
}

import Image from "next/image";
import BlurFade from "@/components/ui/BlurFade";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";

const DONATION_OPTIONS = [
  { amount: "25 €", label: "Ein Stein", description: "Baumaterial" },
  { amount: "50 €", label: "Ein Fenster", description: "Verglasung" },
  { amount: "100 €", label: "Eine Tür", description: "Innenausbau" },
  { amount: "250 €", label: "Ein Raum", description: "Renovierung" },
];

export default function BauSpenden() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mosaic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-16 -right-32 w-[500px] h-[500px] object-contain opacity-[0.08]"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-24 -left-36 w-[600px] h-[600px] object-contain opacity-[0.06]"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            So können Sie <span className="italic">helfen</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Wählen Sie einen symbolischen Beitrag oder spenden Sie einen
            individuellen Betrag.
          </p>
        </BlurFade>

        {/* Donation Tiers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {DONATION_OPTIONS.map((option, idx) => (
            <BlurFade key={option.label} delay={idx * 0.1}>
              <a
                href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 text-center hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(242,167,82,0.1)] transition-all duration-500"
              >
                <span className="text-3xl sm:text-4xl font-normal text-primary font-serif block mb-2">
                  {option.amount}
                </span>
                <span className="text-sm font-semibold text-primary block mb-1">
                  {option.label}
                </span>
                <span className="text-xs text-gray-400">
                  {option.description}
                </span>
              </a>
            </BlurFade>
          ))}
        </div>

        {/* Baustein-Spende Card */}
        <BlurFade delay={0.4}>
          <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Green Header */}
            <div className="bg-primary px-8 py-12 sm:px-16 sm:py-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,167,82,0.12),transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight font-serif italic mb-3">
                  Baustein-Spende
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto">
                  „Wer für Allah eine Moschee baut, dem baut Allah ein Haus im Paradies."
                </p>
                <p className="text-white/40 text-xs mt-1">
                  (Hadith: Bukhari &amp; Muslim)
                </p>
              </div>
            </div>

            {/* White Body */}
            <div className="bg-white px-8 py-12 sm:px-16 sm:py-14">
              {/* Bank Transfer - Dashed Border Card */}
              <div className="max-w-md mx-auto border-2 border-dashed border-gray-200 rounded-2xl px-8 py-8 relative mb-10">
                {/* Label */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                    Banküberweisung
                  </span>
                </div>

                <div className="space-y-6 text-center">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Empfänger</p>
                    <p className="text-base font-semibold text-primary">
                      Marokkanischer Kulturverein Lüdenscheid e.V.
                    </p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div>
                    <p className="text-xs text-gray-400 mb-1">IBAN</p>
                    <p className="text-xl sm:text-2xl font-semibold text-primary font-mono tracking-wider">
                      DE00 0000 0000 0000 0000 00
                    </p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Verwendungszweck</p>
                    <p className="text-base font-semibold text-primary">
                      Spende Neubau
                    </p>
                  </div>
                </div>
              </div>

              {/* PayPal Button */}
              <div className="text-center">
                <a
                  href="https://www.paypal.com/donate?business=mkv-lued%40gmx.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:scale-105 active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(1,61,39,0.3)]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.77.77 0 01.757-.654h6.34c2.104 0 3.58.562 4.39 1.67.38.52.63 1.084.763 1.725.14.68.14 1.49-.01 2.47l-.013.07v.61l.476.264c.4.196.72.424.97.686.39.41.64.93.74 1.547.1.636.07 1.373-.1 2.19a7.12 7.12 0 01-.83 2.1 4.93 4.93 0 01-1.33 1.44c-.52.37-1.13.65-1.82.83-.67.17-1.43.26-2.25.26h-.535a1.62 1.62 0 00-1.6 1.37l-.04.22-.64 4.07-.03.16a.163.163 0 01-.16.14H7.076z" />
                  </svg>
                  Mit PayPal spenden
                </a>
                <p className="mt-4 text-xs text-gray-400">
                  Sicher &amp; schnell. Spendenquittung wird automatisch erstellt.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";
import BlurFade from "@/components/ui/BlurFade";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const ANGEBOTE = [
  { label: "Tägliche Gebete", href: "#gebetszeiten" },
  { label: "Qur'an-Unterricht", href: "#angebote" },
  { label: "Freitagspredigten", href: "#angebote" },
  { label: "Jugendarbeit", href: "#angebote" },
  { label: "Soziale Projekte", href: "#angebote" },
];

const LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Spenden", href: "/spenden" },
];

export default function Footer() {
  return (
    <footer className="relative bg-warm-white overflow-hidden">
      {/* Mosaic Pattern - like AboutLetter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] object-contain opacity-15"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
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
          className="absolute -top-20 -left-32 w-[500px] h-[500px] object-contain opacity-20"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Tagline + Social */}
          <BlurFade direction="left" className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-normal text-primary tracking-tight leading-tight font-arabic text-left" dir="rtl" lang="ar">
              مسجد عبد الكريم الخطابي
            </h3>
            <p className="text-sm text-gray-400 mt-2 font-sans" dir="ltr">
              Abdel Karim Al-Khattabi Moschee, Lüdenscheid
            </p>
          </BlurFade>

          {/* Angebote */}
          <BlurFade delay={0.1} className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Angebote
            </h4>
            <ul className="space-y-3">
              {ANGEBOTE.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>

          {/* Navigation */}
          <BlurFade delay={0.2} className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>

          {/* Links */}
          <BlurFade delay={0.3} className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Links
            </h4>
            <ul className="space-y-3">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>

        {/* Bottom Bar */}
        <BlurFade delay={0.4}>
          <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name},{" "}
              {SITE_CONFIG.location}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <Link href="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <span className="text-gray-200">|</span>
              <Link href="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}

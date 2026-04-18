import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-medium tracking-tight text-primary font-serif">
                {SITE_CONFIG.shortName}
              </span>
              <div>
                <div className="text-sm font-medium">{SITE_CONFIG.name}</div>
                <div className="text-xs text-gray-500">
                  {SITE_CONFIG.location}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-3 flex items-center gap-3 text-gray-600">
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-gray-200 hover:ring-primary/40 transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-gray-200 hover:ring-primary/40 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-gray-200 hover:ring-primary/40 transition"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Schnellzugriff */}
          <div>
            <div className="text-sm font-semibold">Schnellzugriff</div>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <div className="text-sm font-semibold">Rechtliches</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}{" "}
              {SITE_CONFIG.location}. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

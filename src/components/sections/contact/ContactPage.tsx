"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hagedornskamp 17\n58507 Lüdenscheid",
    href: "https://www.google.com/maps/dir/?api=1&destination=51.22405,7.60195",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 (0) 2351 21260",
    href: "tel:+49235121260",
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Täglich zu den fünf Gebetszeiten",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <BlurFade>
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Kontakt
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-primary tracking-tight font-serif">
            Schreiben Sie <span className="italic">uns</span>
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            Haben Sie Fragen, Anregungen oder möchten Sie uns besuchen?
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </BlurFade>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {INFO_ITEMS.map((item, idx) => (
              <BlurFade key={item.label} delay={idx * 0.1} direction="left">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <item.icon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary mb-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-gray-500 hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}

            {/* Map */}
            <BlurFade delay={0.3} direction="left">
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-[220px]">
                <iframe
                  title="Karte"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9994.91893987735!2d7.6019516587257385!3d51.22405420031056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b949ccd8b81653%3A0x6cb985f92b0a1cb2!2sMarokkanischer%20Kulturverein%20L%C3%BCdenscheid%20e.V.!5e0!3m2!1sde!2sde!4v1776541778814!5m2!1sde!2sde"
                />
              </div>
            </BlurFade>
          </div>

          {/* Right: Form */}
          <BlurFade delay={0.2} direction="right" className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col"
            >
              <h2 className="text-2xl font-normal text-primary tracking-tight font-serif mb-8">
                Nachricht <span className="italic">senden</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5 ml-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5 ml-1">
                    E-Mail
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-1.5 ml-1">
                  Betreff
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  placeholder="Worum geht es?"
                />
              </div>

              <div className="mb-6 flex-grow">
                <label className="block text-sm text-gray-500 mb-1.5 ml-1">
                  Nachricht
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-full min-h-[160px] px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              <div className="flex items-center justify-between pt-4 mt-2">
                <p className="text-xs text-gray-400 hidden sm:block">
                  Wir antworten in der Regel innerhalb von 48 Stunden.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:scale-105 active:scale-[0.97] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Absenden
                </button>
              </div>
            </form>
          </BlurFade>
        </div>
      </section>
    </>
  );
}

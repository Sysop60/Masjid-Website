"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Clock, Navigation, Phone, Send } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

export default function ContactLocation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="kontakt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <BlurFade className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight mb-4 font-serif">
          Kontakt &amp; <span className="italic">Anfahrt</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Wir freuen uns auf Ihren Besuch und Ihre Nachrichten.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Liquid Glass Contact Card */}
        <BlurFade direction="left" delay={0.2} className="lg:col-span-2">
          <div
            className="rounded-[32px] p-8 md:p-12 flex flex-col justify-between border border-white/25 shadow-[0_8px_32px_rgba(1,61,39,0.1),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.05)] h-full"
            style={{
              background: "linear-gradient(145deg, rgba(1,61,39,0.55) 0%, rgba(2,88,57,0.45) 50%, rgba(1,61,39,0.6) 100%)",
              backdropFilter: "blur(60px) saturate(2)",
              WebkitBackdropFilter: "blur(60px) saturate(2)",
            }}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">Adresse</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Musterstraße 123<br />
                    58507 Lüdenscheid
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">E-Mail</h4>
                  <p className="text-white/80 text-sm">info@aam-luedenscheid.de</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">Telefon</h4>
                  <p className="text-white/80 text-sm">+49 (0) 2351 123456</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">Öffnungszeiten</h4>
                  <p className="text-white/80 text-sm">Täglich zu den fünf Gebetszeiten</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=51.22405,7.60195"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-center text-sm inline-flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                <Navigation className="w-4 h-4" />
                Route planen
              </a>
            </div>
          </div>
        </BlurFade>

        {/* Right column: Map + Contact Form */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Google Maps */}
          <BlurFade direction="right" delay={0.3}>
            <div className="rounded-[32px] overflow-hidden min-h-[300px] h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9994.91893987735!2d7.6019516587257385!3d51.22405420031056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b949ccd8b81653%3A0x6cb985f92b0a1cb2!2sMarokkanischer%20Kulturverein%20L%C3%BCdenscheid%20e.V.!5e0!3m2!1sde!2sde!4v1776541778814!5m2!1sde!2sde"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort der Moschee"
              />
            </div>
          </BlurFade>

          {/* Contact Form */}
          <BlurFade delay={0.4}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 font-serif">
                Nachricht senden
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
              </div>

              <textarea
                placeholder="Ihre Nachricht..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none mb-4"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:scale-[1.02] active:scale-95 transition-transform inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Absenden
              </button>
            </form>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

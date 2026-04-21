"use client";

import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

export default function ContactLocation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="kontakt" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Wrapper */}
        <BlurFade duration={1}>
          <div
            className="relative overflow-hidden rounded-[2.5rem] ring-1 ring-white/10 border border-white/10 p-8 sm:p-10 lg:p-12"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(80px) saturate(1.6)",
              WebkitBackdropFilter: "blur(80px) saturate(1.6)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {/* Top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10">
              {/* Left: Info + Form */}
              <div>
                <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight font-serif">
                  Kontakt &amp; <span className="italic">Anfahrt</span>
                </h2>
                <p className="mt-2 text-white/60">
                  Besuche uns, schreibe uns oder folge unseren Kanälen.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-[18px] h-[18px] text-white/50 mt-0.5 flex-shrink-0" />
                    <p className="text-white/70">
                      Hagedornskamp 17, 58507 Lüdenscheid
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-[18px] h-[18px] text-white/50 mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:+49235121260"
                      className="text-white font-medium hover:text-accent transition-colors"
                    >
                      +49 (0) 2351 21260
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a aria-label="YouTube" href="https://www.youtube.com/@MesjidAbdelkarimAlKhattabi" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 border border-white/5 hover:bg-white/20 transition-colors">
                      <svg className="w-[18px] h-[18px] text-white/70" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 grid grid-cols-1 gap-4 max-w-lg"
                >
                  <div>
                    <label className="block text-sm text-white/60 mb-1 ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white ring-1 ring-white/15 border border-white/10 focus:outline-none focus:bg-white/15 focus:ring-accent/40 focus:border-accent/30 transition-all placeholder:text-white/30"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1 ml-1">
                      E-Mail
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white ring-1 ring-white/15 border border-white/10 focus:outline-none focus:bg-white/15 focus:ring-accent/40 focus:border-accent/30 transition-all placeholder:text-white/30"
                      placeholder="dein@mail.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1 ml-1">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white ring-1 ring-white/15 border border-white/10 focus:outline-none focus:bg-white/15 focus:ring-accent/40 focus:border-accent/30 transition-all placeholder:text-white/30 resize-none"
                      placeholder="Wie können wir helfen?"
                    />
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary hover:scale-105 active:scale-[0.97] transition-all duration-300"
                    >
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Map */}
              <div className="h-full min-h-[420px] rounded-2xl overflow-hidden ring-1 ring-white/10 border border-white/10 bg-white/5 p-1.5">
                <iframe
                  title="Karte"
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9994.91893987735!2d7.6019516587257385!3d51.22405420031056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b949ccd8b81653%3A0x6cb985f92b0a1cb2!2sMarokkanischer%20Kulturverein%20L%C3%BCdenscheid%20e.V.!5e0!3m2!1sde!2sde!4v1776541778814!5m2!1sde!2sde"
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

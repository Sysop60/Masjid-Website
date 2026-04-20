"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, Globe } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

export default function ContactLocation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Liquid Glass Wrapper */}
        <BlurFade duration={1}>
          <div
            className="relative overflow-hidden rounded-[2.5rem] ring-1 ring-white/50 border border-white/30 p-8 sm:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,253,250,0.2) 50%, rgba(255,255,255,0.3) 100%)",
              backdropFilter: "blur(80px) saturate(1.6)",
              WebkitBackdropFilter: "blur(80px) saturate(1.6)",
              boxShadow: "0 8px 32px rgba(1,61,39,0.08), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(1,61,39,0.03)",
            }}
          >
            {/* Decorative liquid orbs */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none rounded-[2.5rem]" />
            {/* Top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10">
              {/* Left: Info + Form */}
              <div>
                <h2 className="text-3xl tracking-tight font-semibold text-primary font-serif">
                  Kontakt &amp; <span className="italic">Anfahrt</span>
                </h2>
                <p className="mt-2 text-primary/70">
                  Besuche uns, schreibe uns oder folge unseren Kanälen.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-[18px] h-[18px] text-primary/70 mt-0.5 flex-shrink-0" />
                    <p className="text-primary/80">
                      Musterstraße 123, 58507 Lüdenscheid
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-[18px] h-[18px] text-primary/70 mt-0.5 flex-shrink-0" />
                    <a
                      href="mailto:info@aam-luedenscheid.de"
                      className="text-primary font-medium hover:underline"
                    >
                      info@aam-luedenscheid.de
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-[18px] h-[18px] text-primary/70 mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:+492351123456"
                      className="text-primary font-medium hover:underline"
                    >
                      +49 (0) 2351 123456
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a aria-label="Facebook" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/50 border border-primary/5 hover:bg-white/60 transition-colors shadow-sm">
                      <svg className="w-[18px] h-[18px] text-primary/80" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                    </a>
                    <a aria-label="Instagram" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/50 border border-primary/5 hover:bg-white/60 transition-colors shadow-sm">
                      <svg className="w-[18px] h-[18px] text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a aria-label="YouTube" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/50 border border-primary/5 hover:bg-white/60 transition-colors shadow-sm">
                      <svg className="w-[18px] h-[18px] text-primary/80" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                    </a>
                    <a aria-label="Website" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/50 border border-primary/5 hover:bg-white/60 transition-colors shadow-sm">
                      <Globe className="w-[18px] h-[18px] text-primary/80" />
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 grid grid-cols-1 gap-4 max-w-lg"
                >
                  <div>
                    <label className="block text-sm text-primary/80 mb-1 ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white/40 backdrop-blur-xl px-4 py-2.5 text-sm ring-1 ring-white/50 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] focus:outline-none focus:bg-white/70 focus:ring-primary/30 focus:border-primary/20 transition-all placeholder:text-primary/35"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-primary/80 mb-1 ml-1">
                      E-Mail
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white/40 backdrop-blur-xl px-4 py-2.5 text-sm ring-1 ring-white/50 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] focus:outline-none focus:bg-white/70 focus:ring-primary/30 focus:border-primary/20 transition-all placeholder:text-primary/35"
                      placeholder="dein@mail.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-primary/80 mb-1 ml-1">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white/40 backdrop-blur-xl px-4 py-2.5 text-sm ring-1 ring-white/50 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] focus:outline-none focus:bg-white/70 focus:ring-primary/30 focus:border-primary/20 transition-all placeholder:text-primary/35 resize-none"
                      placeholder="Wie können wir helfen?"
                    />
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary/85 backdrop-blur-xl px-5 py-3 text-sm font-medium text-white hover:bg-primary transition-colors shadow-[0_4px_16px_rgba(1,61,39,0.25)] ring-1 ring-white/15"
                    >
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Map */}
              <div className="h-full min-h-[420px] rounded-2xl overflow-hidden ring-1 ring-white/50 border border-white/30 bg-white/30 backdrop-blur-xl shadow-[0_4px_16px_rgba(1,61,39,0.06),inset_0_1px_0_rgba(255,255,255,0.4)] p-1.5">
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

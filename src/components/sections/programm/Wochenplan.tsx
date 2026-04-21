"use client";

import { Calendar } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

type EventType = "vortrag" | "unterricht";

interface ScheduleEntry {
  time: string;
  title: string;
  type: EventType;
}

const WOCHENPLAN: Record<string, ScheduleEntry[]> = {
  Montag: [
    { time: "16:00–17:30", title: "Qur'an (Kinder)", type: "unterricht" },
  ],
  Dienstag: [
    {
      time: "19:00–20:30",
      title: "Qur'an (Erwachsene)",
      type: "unterricht",
    },
  ],
  Mittwoch: [
    { time: "16:00–17:30", title: "Qur'an (Kinder)", type: "unterricht" },
  ],
  Donnerstag: [
    {
      time: "19:00–20:30",
      title: "Qur'an (Erwachsene)",
      type: "unterricht",
    },
  ],
  Freitag: [
    { time: "13:00", title: "Freitagspredigt", type: "vortrag" },
    { time: "17:00–18:30", title: "Islamwissen (Jugend)", type: "unterricht" },
  ],
  Samstag: [
    { time: "10:00–11:30", title: "Tajweed-Kurs", type: "unterricht" },
    { time: "18:00", title: "Ethik-Vortrag", type: "vortrag" },
  ],
  Sonntag: [
    { time: "10:00", title: "Seerah-Vortrag", type: "vortrag" },
    { time: "11:00–12:30", title: "Arabisch-Kurs", type: "unterricht" },
  ],
};

const TYPE_STYLES: Record<EventType, string> = {
  vortrag: "bg-accent/15 text-accent border-accent/30",
  unterricht: "bg-primary/10 text-primary border-primary/20",
};

export default function Wochenplan() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-accent" />
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              Auf einen Blick
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Wochen<span className="italic">plan</span>
          </h2>
          <div className="flex items-center gap-6 mt-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent/40 border border-accent/50" />
              <span className="text-xs text-gray-500">Vorträge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />
              <span className="text-xs text-gray-500">Unterrichte</span>
            </div>
          </div>
        </BlurFade>

        {/* Desktop: 7-column grid */}
        <BlurFade delay={0.15}>
          <div
            className="hidden lg:block rounded-[2rem] p-8 border border-white/30 ring-1 ring-white/40 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
              backdropFilter: "blur(40px) saturate(1.6)",
              WebkitBackdropFilter: "blur(40px) saturate(1.6)",
              boxShadow:
                "0 4px 16px rgba(1,61,39,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <div className="grid grid-cols-7 gap-4">
              {Object.entries(WOCHENPLAN).map(([day, entries]) => (
                <div key={day} className="min-h-[180px]">
                  <div className="text-sm font-semibold text-primary mb-4 pb-3 border-b border-gray-100">
                    {day}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {entries.map((entry) => (
                      <div
                        key={`${day}-${entry.title}`}
                        className={`rounded-xl p-3 border text-[11px] leading-snug ${TYPE_STYLES[entry.type]}`}
                      >
                        <div className="font-semibold mb-0.5">
                          {entry.title}
                        </div>
                        <div className="opacity-70">{entry.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Mobile: Stacked list by day */}
        <div className="lg:hidden flex flex-col gap-4">
          {Object.entries(WOCHENPLAN).map(([day, entries], dayIdx) => (
            <BlurFade key={day} delay={0.1 + dayIdx * 0.06}>
              <div
                className="rounded-2xl p-5 border border-white/30 ring-1 ring-white/40"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
                  backdropFilter: "blur(40px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                  boxShadow:
                    "0 4px 16px rgba(1,61,39,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                <div className="text-sm font-semibold text-primary mb-3">
                  {day}
                </div>
                <div className="flex flex-col gap-2">
                  {entries.map((entry) => (
                    <div
                      key={`${day}-${entry.title}-mobile`}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 border text-xs ${TYPE_STYLES[entry.type]}`}
                    >
                      <span className="font-semibold">{entry.title}</span>
                      <span className="opacity-70 ml-3 flex-shrink-0">
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

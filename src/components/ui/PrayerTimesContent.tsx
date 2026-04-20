"use client";

import { Calendar } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import type { PrayerTime } from "@/lib/mawaqit";

interface Props {
  prayers: PrayerTime[];
  jumua: string | null;
  date: string;
  address: string;
}

export default function PrayerTimesContent({ prayers, jumua, date }: Props) {
  return (
    <>
      {/* Header: Date & Jumu'ah */}
      <BlurFade>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-gray-50">
          {/* Date Info */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-primary font-serif">
              Aktuelle <span className="italic">Gebetszeiten</span>
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Gültig für:</span>
              <span className="font-medium text-primary/80">{date}</span>
            </div>
          </div>

          {/* Friday Prayer Highlight - Liquid Glass */}
          {jumua && (
            <div
              className="rounded-xl p-4 flex items-center gap-4 min-w-[280px] border border-white/30 ring-1 ring-white/40"
              style={{
                background: "linear-gradient(135deg, rgba(1,61,39,0.12) 0%, rgba(2,88,57,0.08) 100%)",
                backdropFilter: "blur(40px) saturate(1.6)",
                WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                boxShadow: "0 4px 16px rgba(1,61,39,0.06), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-primary/60 mb-0.5">
                  صلاة الجمعة — Freitagsgebet
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-normal font-serif text-primary">{jumua}</span>
                  <span className="text-xs text-primary/50 font-medium">Uhr</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </BlurFade>

      {/* Times Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
        {prayers.map((prayer, idx) => (
          <BlurFade key={prayer.name} delay={idx * 0.08}>
            <div
              className={`flex flex-col border-l-2 pl-4 transition-colors duration-300 ${
                prayer.active
                  ? "border-accent"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className={`text-xs font-medium uppercase tracking-widest block ${
                    prayer.active ? "text-accent" : "text-gray-400"
                  }`}
                >
                  {prayer.name}
                </span>
                <span className="text-[10px] text-gray-300 font-arabic" dir="rtl">
                  {prayer.arabic}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">
                    {prayer.iqama ? "Adhan" : "Zeit"}
                  </span>
                  <span className="text-3xl font-normal text-primary font-serif tracking-tight block leading-none">
                    {prayer.adhan}
                  </span>
                </div>
                {prayer.iqama ? (
                  <div className="pt-3 border-t border-gray-50">
                    <span className="text-xs text-gray-400 block mb-0.5">Iqama</span>
                    <span className="text-lg font-medium text-primary/70 font-serif block leading-none">
                      {prayer.iqama}
                    </span>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-transparent">
                    <span className="text-xs text-gray-300 block mb-0.5">—</span>
                    <span className="text-lg text-transparent block leading-none">-</span>
                  </div>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </>
  );
}

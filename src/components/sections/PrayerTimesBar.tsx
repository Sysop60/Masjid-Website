import { PRAYER_TIMES } from "@/lib/constants";
import BlurFade from "@/components/ui/blur-fade";

export default function PrayerTimesBar() {
  return (
    <section
      id="gebetszeiten"
      className="bg-white border-y border-gray-100 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {PRAYER_TIMES.map((prayer, idx) => (
            <BlurFade key={prayer.name} delay={idx * 0.1}>
              <div
                className={`flex flex-col border-l-2 pl-4 ${
                  prayer.active ? "border-accent" : "border-accent/20"
                }`}
              >
                <span
                  className={`text-xs font-medium uppercase tracking-widest ${
                    prayer.active ? "text-accent" : "text-gray-400"
                  }`}
                >
                  {prayer.name}
                </span>
                <span className="text-2xl font-medium text-primary font-serif">
                  {prayer.time}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Suspense } from "react";
import { fetchMosqueData, parsePrayerTimes } from "@/lib/mawaqit";
import PrayerTimesContent from "./PrayerTimesContent";
import PrayerTimesSkeleton from "./PrayerTimesSkeleton";

export default function PrayerTimesBar() {
  return (
    <section id="gebetszeiten" className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<PrayerTimesSkeleton />}>
          <PrayerTimesData />
        </Suspense>
      </div>
    </section>
  );
}

async function PrayerTimesData() {
  const data = await fetchMosqueData();

  if (!data) {
    return (
      <p className="text-center text-gray-400 py-8">
        Gebetszeiten konnten nicht geladen werden.
      </p>
    );
  }

  const prayers = parsePrayerTimes(data);

  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <PrayerTimesContent
      prayers={prayers}
      jumua={data.jumua}
      date={today}
      address={data.localisation}
    />
  );
}

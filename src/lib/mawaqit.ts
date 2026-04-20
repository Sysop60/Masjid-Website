/**
 * Mawaqit API Integration
 *
 * Public endpoint (no auth required):
 *   GET https://mawaqit.net/api/2.0/mosque/search?word=khattabi+ludenscheid
 *
 * Returns JSON array. Filter by slug === "khataby-ludenscheid".
 *
 * Field mapping:
 *   times[0..5] = Fajr, Shuruk, Dhuhr, Asr, Maghrib, Isha  (format "HH:MM")
 *   iqama[0..4] = Fajr, Dhuhr, Asr, Maghrib, Isha           (no Shuruk)
 *   iqama format: "+15" (relative) or "05:30" (absolute)
 *   jumua: Friday prayer time (e.g. "14:30")
 */

const MOSQUE_SLUG = "khataby-ludenscheid";
const SEARCH_URL = "https://mawaqit.net/api/2.0/mosque/search?word=khattabi+ludenscheid";

export interface MosqueData {
  uuid: string;
  name: string;
  slug: string;
  times: string[];
  iqama: string[];
  jumua: string | null;
  jumua2: string | null;
  jumua3: string | null;
  jumuaAsDuhr: boolean;
  iqamaEnabled: boolean;
  localisation: string;
  image: string;
}

export interface PrayerTime {
  name: string;
  arabic: string;
  adhan: string;
  iqama: string | null;
  active: boolean;
}

const PRAYER_NAMES: { name: string; arabic: string }[] = [
  { name: "Fajr", arabic: "الفجر" },
  { name: "Shuruk", arabic: "الشروق" },
  { name: "Dhuhr", arabic: "الظهر" },
  { name: "Asr", arabic: "العصر" },
  { name: "Maghrib", arabic: "المغرب" },
  { name: "Isha", arabic: "العشاء" },
];

function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const newH = Math.floor(total / 60) % 24;
  const newM = total % 60;
  return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")}`;
}

function calcIqama(adhan: string, offset: string): string {
  if (offset.startsWith("+")) {
    return addMinutes(adhan, parseInt(offset.slice(1), 10));
  }
  return offset;
}

function getActivePrayer(times: string[]): number {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (let i = times.length - 1; i >= 0; i--) {
    const [h, m] = times[i].split(":").map(Number);
    if (nowMinutes >= h * 60 + m) {
      return i;
    }
  }
  return 0;
}

export function parsePrayerTimes(data: MosqueData): PrayerTime[] {
  const activeIdx = getActivePrayer(data.times);
  // iqama has 5 values (no Shuruk), so map: prayer index → iqama index
  // Fajr=0→0, Shuruk=1→skip, Dhuhr=2→1, Asr=3→2, Maghrib=4→3, Isha=5→4
  const iqamaMap = [0, -1, 1, 2, 3, 4];

  return PRAYER_NAMES.map((prayer, i) => {
    const adhan = data.times[i];
    const iqamaIdx = iqamaMap[i];
    let iqama: string | null = null;

    if (iqamaIdx >= 0 && data.iqamaEnabled && data.iqama[iqamaIdx]) {
      iqama = calcIqama(adhan, data.iqama[iqamaIdx]);
    }

    return {
      name: prayer.name,
      arabic: prayer.arabic,
      adhan,
      iqama,
      active: i === activeIdx,
    };
  });
}

export async function fetchMosqueData(): Promise<MosqueData | null> {
  try {
    const res = await fetch(SEARCH_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const results: MosqueData[] = await res.json();
    return results.find((m) => m.slug === MOSQUE_SLUG) ?? null;
  } catch {
    return null;
  }
}

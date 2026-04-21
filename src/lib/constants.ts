import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Programm", href: "/programm" },
  { label: "Moscheebau", href: "/moscheebau" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SITE_CONFIG = {
  name: "Abdulkarim Alkhattabi Moschee",
  shortName: "AAM",
  location: "Lüdenscheid",
  description: "Ein Ort der Begegnung, des Gebets und des Lernens im Herzen von Lüdenscheid.",
  address: "Beispielstraße 12, 58511 Lüdenscheid",
  phone: "+49 000 000000",
  email: "",
} as const;

export const PRAYER_TIMES: readonly { name: string; time: string; active?: boolean }[] = [
  { name: "Fajr", time: "04:12" },
  { name: "Shuruq", time: "05:48" },
  { name: "Dhuhr", time: "13:24", active: true },
  { name: "Asr", time: "17:15" },
  { name: "Maghrib", time: "21:02" },
  { name: "Isha", time: "22:45" },
];

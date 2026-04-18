import type { LucideIcon } from "lucide-react";

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Gebetszeiten
export interface PrayerTime {
  name: string;
  time: string;
}

// Veranstaltung
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
}

// Kontaktformular
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Werte-Karte (Über uns)
export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Aktivitäten-Karte (Über uns)
export interface Activity {
  icon: LucideIcon;
  title: string;
  description: string;
}

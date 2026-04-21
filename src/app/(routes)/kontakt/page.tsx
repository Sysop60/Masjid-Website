import type { Metadata } from "next";
import ContactPage from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie den Marokkanischen Kulturverein Lüdenscheid e.V. — wir freuen uns auf Ihre Nachricht.",
};

export default function KontaktPage() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}

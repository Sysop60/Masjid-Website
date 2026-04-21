import type { Metadata } from "next";
import ContactPage from "@/components/sections/contact/ContactPage";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie den Marokkanischen Kulturverein Lüdenscheid e.V. — wir freuen uns auf Ihre Nachricht.",
};

export default function KontaktPage() {
  return (
    <>
      <main>
        <ContactPage />
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

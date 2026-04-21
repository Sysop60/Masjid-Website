import type { Metadata } from "next";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Veranstaltungen",
  description: "Aktuelle Veranstaltungen und Events unserer Moschee",
};

export default function VeranstaltungenPage() {
  return (
    <>
      <main>
        {/* TODO: Veranstaltungen-Seite implementieren */}
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

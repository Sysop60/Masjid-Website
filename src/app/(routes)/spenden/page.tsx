import type { Metadata } from "next";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Spenden",
  description: "Unterstützen Sie unsere Moschee mit einer Spende",
};

export default function SpendenPage() {
  return (
    <>
      <main>
        {/* TODO: Spenden-Seite implementieren */}
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

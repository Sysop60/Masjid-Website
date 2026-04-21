import type { Metadata } from "next";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Bilder und Eindrücke aus unserer Moschee",
};

export default function GaleriePage() {
  return (
    <>
      <main>
        {/* TODO: Galerie-Seite implementieren */}
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

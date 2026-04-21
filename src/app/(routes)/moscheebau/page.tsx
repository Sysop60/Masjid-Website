import type { Metadata } from "next";
import BauHero from "@/components/sections/moscheebau/BauHero";
import BauProgress from "@/components/sections/moscheebau/BauProgress";
import BauInfo from "@/components/sections/moscheebau/BauInfo";
import BauRoadmap from "@/components/sections/moscheebau/BauRoadmap";
import BauSpenden from "@/components/sections/moscheebau/BauSpenden";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Moscheebau",
  description:
    "Unterstützen Sie den Bau unserer neuen Moschee in Lüdenscheid — das Grundstück ist gesichert, jetzt fehlt Ihre Hilfe für den Umbau.",
};

export default function MoscheebauPage() {
  return (
    <>
      <main>
        <BauHero />
        <BauProgress />
        <BauInfo />
        <BauRoadmap />
        <BauSpenden />
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

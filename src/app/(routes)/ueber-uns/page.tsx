import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import Timeline from "@/components/sections/about/Timeline";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import AboutCTA from "@/components/sections/about/AboutCTA";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über die Abdulkarim Alkhattabi Moschee und den Marokkanischen Kulturverein Lüdenscheid e.V.",
};

export default function UeberUnsPage() {
  return (
    <>
      <main>
        <AboutHero />
        <WhoWeAre />
        <Values />
        <Team />
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

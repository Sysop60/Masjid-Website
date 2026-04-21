import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import Timeline from "@/components/sections/about/Timeline";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über die Abdulkarim Alkhattabi Moschee und den Marokkanischen Kulturverein Lüdenscheid e.V.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <Timeline />
      <Values />
      <Team />
      <AboutCTA />
    </main>
  );
}

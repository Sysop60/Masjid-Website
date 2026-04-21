import type { Metadata } from "next";
import ProgrammHero from "@/components/sections/programm/ProgrammHero";
import Vortrage from "@/components/sections/programm/Vortrage";
import Unterrichte from "@/components/sections/programm/Unterrichte";
import Wochenplan from "@/components/sections/programm/Wochenplan";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Programm",
  description:
    "Vorträge, Unterrichte und Veranstaltungen der Abdulkarim Alkhattabi Moschee in Lüdenscheid.",
};

export default function ProgrammPage() {
  return (
    <>
      <main>
        <ProgrammHero />
        <Vortrage />
        <Unterrichte />
        <Wochenplan />
      </main>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

import Hero from "@/components/sections/Hero";
import PrayerTimesBar from "@/components/sections/PrayerTimesBar";
import AboutLetter from "@/components/sections/AboutLetter";
import FeatureTiles from "@/components/sections/FeatureTiles";
import EventCalendar from "@/components/sections/EventCalendar";
import Gallery from "@/components/sections/Gallery";
import ContactLocation from "@/components/sections/ContactLocation";
import { Agentation } from "agentation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrayerTimesBar />
      <AboutLetter />
      <EventCalendar />
      <Gallery />
      <ContactLocation />
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

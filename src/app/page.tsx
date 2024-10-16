import FeaturedCourses from "@/components/Featured-courses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import { InfiniMovingCardsDemo } from "@/components/Movingcards";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import UpcomingWebinar from "@/components/Upcoming-webinar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <StickyScrollRevealDemo />
      <InfiniMovingCardsDemo/>
      <UpcomingWebinar/>
      < Instructors />
      <Footer />
    </main>
  );
}

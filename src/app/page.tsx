import FeaturedSection from "@/components/FeaturedSection";
import BackgroundBoxesDemo from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedSection />
      <StickyScroll />
      <BackgroundBoxesDemo/>
    </div>
  );
}

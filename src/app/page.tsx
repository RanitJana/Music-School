import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedSection />
      <StickyScroll />
    </div>
  );
}

import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedSection/>
    </div>
  );
}

import React from "react";
import { SpotlightPreview } from "./Spotlight";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="relative min-h-dvh min-w-[100%] flex flex-col justify-center items-center overflow-hidden p-4 pt-[5rem] space-y-4">
      <SpotlightPreview />
      <h1 className="lg:text-[5rem] md:text-[4.5rem] text-[3rem] leading-none font-black text-center text-wrap">
        Master the Art of Music
      </h1>
      <p className="text-[1.3rem] text-center max-w-screen-sm text-gray-400">
        Dive into our comprehensive music courses and transform your musical
        journey today. Whether you&apos;re a beginner or looking to refine your
        skills, join us to unlock your true potential.
      </p>
      <Button text="Explore Courses" />
    </div>
  );
}

export default HeroSection;

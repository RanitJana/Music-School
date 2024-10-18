/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | string | number;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // Uncomment the line below to use the entire page scroll instead of just the container scroll.
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (ref.current) {
      // Get the bounding rectangles for each card
      const cardElements = ref.current.querySelectorAll(".card");
      const viewportCenter = window.innerHeight / 2;

      // Calculate the distances of each card's center from the viewport center
      const distances = Array.from(cardElements).map((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        return Math.abs(cardCenter - viewportCenter);
      });

      // Find the index of the card with the smallest distance to the center
      const closestCardIndex = distances.indexOf(Math.min(...distances));

      // Update the active card
      setActiveCard(closestCardIndex);
    }
  });

  const backgroundColors = [
    "#0a0a0a",
    "var(--slate-900)",
    "var(--neutral-900)",
    "#0a0a0a",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex px-4 top-20">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 card">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-48" />
        </div>
      </div>
      <div
        style={{
          background: backgroundGradient,
          transform: "translate(-50%,-50%)",
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky left-3/4 top-1/2 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};

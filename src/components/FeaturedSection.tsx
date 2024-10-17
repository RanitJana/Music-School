/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Card from "./Card";
import data from "../data/details.json";
import { useEffect, useState } from "react";

function FeaturedSection() {
  interface infoStructure {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image?: string;
  }
  const [info, _] = useState<Array<infoStructure> | undefined>(data?.courses);

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-4">
      <h1 className="text-[1.2rem] text-sky-500 uppercase">Featured courses</h1>
      <h1 className="text-[2rem] font-bold">Learn with the best</h1>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  gap-5">
        {info?.map((value) => {
          return (
            <Card
              key={value.id}
              id={value.id}
              title={value.title}
              slug={value.slug}
              description={value.description}
              price={value.price}
              instructor={value.instructor}
              isFeatured={value.isFeatured}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedSection;

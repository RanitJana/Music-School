/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Card from "./Card";
import data from "../data/details.json";
import { useState } from "react";

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
  const [info, _]: [undefined | Array<infoStructure>, unknown] = useState<
    Array<infoStructure> | undefined
  >(data?.courses);

  const [length, setLength] = useState(Math.min(5, info ? info.length : 0));

  if (!info) return;

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center py-10 px-4 ">
      <h1 className="text-[1.2rem] text-sky-500 uppercase">Featured courses</h1>
      <h1 className="text-[2rem] font-bold">Learn with the best</h1>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  gap-6">
        {info.map((value, index) => {
          if (index + 1 > length) return "";
          else
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
      {length < info.length ? (
        <button onClick={()=>setLength(info.length)} className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] mt-10">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,black_30%,white_50%,black_70%)]" />
          <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white backdrop-blur-3xl">
            Show more
          </span>
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default FeaturedSection;

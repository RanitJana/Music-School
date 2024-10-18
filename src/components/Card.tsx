/* eslint-disable @typescript-eslint/no-unused-vars */
import { BackgroundGradient } from "./ui/background-gradient";

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

function Card({
  id,
  title,
  slug,
  description,
  price,
  instructor,
  isFeatured,
}: Partial<infoStructure>) {
  return (
    <div className="rounded-[22px] w-full p-10 bg-zinc-900 h-full hover:cursor-pointer flex flex-col justify-between">
      <div>
        <p className="text-[1.2rem] text-white font-black">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button className="w-fit rounded-full h-10 p-1 pl-4 text-white flex items-center gap-2 space-x-1 bg-black mt-4 text-xs font-bold">
        <span>Buy now</span>
        <span className="bg-zinc-700 rounded-full h-full px-4 text-white grid place-items-center">
          {price}
        </span>
      </button>
    </div>
  );
}

export default Card;

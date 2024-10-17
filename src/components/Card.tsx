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
}: infoStructure) {
  return (
    <BackgroundGradient className="rounded-[22px] w-full p-10 bg-zinc-900 h-full">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span>Buy now</span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          {price}
        </span>
      </button>
    </BackgroundGradient>
  );
}

export default Card;

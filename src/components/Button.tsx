import React from "react";

function Button({
  text = "Click Me",
}: {
  text: string | number | React.ReactNode | undefined;
}) {
  return (
    <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,black_30%,white_50%,black_70%)]" />
      <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
}

export default Button;

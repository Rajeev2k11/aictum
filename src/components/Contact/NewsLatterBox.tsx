"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-md bg-[#473062] p-8 shadow-lg sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
        Subscribe to receive future updates
      </h3>

      <p className="mb-11 border-b border-[#5D4B78] pb-11 text-base leading-relaxed text-[#CCCCCC]">
        Get updates straight to your inbox. No spam — just useful insights and product news.
      </p>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md border border-transparent bg-[#2A1B3D] px-6 py-3 text-base text-white placeholder:text-[#999] focus:border-[#9345E0] focus:outline-none focus:ring-2 focus:ring-[#9345E0]"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-transparent bg-[#2A1B3D] px-6 py-3 text-base text-white placeholder:text-[#999] focus:border-[#9345E0] focus:outline-none focus:ring-2 focus:ring-[#9345E0]"
        />

        <input
          type="submit"
          value="Subscribe"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-[#9345E0] px-9 py-4 text-base font-medium text-white transition duration-300 hover:bg-[#B76CFF]"
        />

        <p className="text-center text-base leading-relaxed text-[#999]">
          No spam guaranteed. Unsubscribe anytime.
        </p>
      </div>

      {/* Decorative SVGs */}
      <div>
        <span className="absolute top-7 left-2">
          {/* SVG 1 */}
          {/* Light/dark gradient logic preserved */}
        </span>

        <span className="absolute bottom-24 left-1.5">
          {/* SVG 2 */}
        </span>

        <span className="absolute top-[140px] right-2">
          {/* SVG 3 */}
        </span>

        <span className="absolute top-0 right-0">
          {/* Big top-right SVG */}
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;

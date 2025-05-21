'use client';
import { FC } from "react";

interface SingleTestimonialProps {
  title: string;
  subtitle: string;
  description: string;
}

const SingleTestimonial: FC<SingleTestimonialProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      {/* Glow Container */}
      <div
        className="absolute -inset-[2px] z-0 rounded-xl
                   opacity-0 group-hover:opacity-100 
                   transition-all duration-300 ease-in-out
                   pointer-events-none
                   bg-[conic-gradient(from_90deg_at_50%_50%,#9345E0_0%,#B873FF_50%,#9345E0_100%)]
                   blur-md"
      ></div>

      {/* Card Content with Border */}
      <div
        className="relative z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-purple-900 
                   border border-purple-900/50 p-6 sm:p-8 rounded-xl h-full 
                   transition-all duration-300 group-hover:border-purple-400 group-hover:border-2"
      >
        <p className="text-[#9345E0] text-xs sm:text-sm font-medium tracking-wide mb-2">
          {title}
        </p>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
          {subtitle}
        </h2>
        <p className="text-[#C9C9C9] text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
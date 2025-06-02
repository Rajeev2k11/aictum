'use client';
import Link from "next/link";

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import FadedToBold from "../Common/FadeToBold";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        fontVariationSettings: "'wght' 800",
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [inView]);

  return (
    <section
      id="features"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white"
    >
      <div className="container px-4 mx-auto">
        <FadedToBold text="Our Services" />

        <motion.h1
          ref={ref}
          initial={{
            opacity: 0,
            scale: 0.98,
            fontVariationSettings: "'wght' 300",
          }}
          animate={controls}
          className="text-center text-xl md:text-3xl max-w-4xl mx-auto py-6 mb-10 text-gray-200"
          style={{
            fontFamily: '"InterVariable", sans-serif',
            fontVariationSettings: "'wght' 300",
          }}
        >
          W3X brings personalization to digitalization. Feasible, grounded in
          reality, and tied to the client’s business goals, our digital strategy
          services generate commercial value with custom-tailored digital
          transformation strategies.
        </motion.h1>

        {/* Feature Cards Grid - original style retained */}
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-end">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#9345E0] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#9345E0] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#9345E0] transition-all duration-300 transform group-hover:translate-x-full ease">
              → Explore all services
            </span>
            <span className="relative invisible">→ Explore all services</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

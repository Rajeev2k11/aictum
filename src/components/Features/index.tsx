'use client';
import Link from "next/link";

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import FadedToBold from "../Common/FadeToBold";
import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

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
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <FadedToBold text="Our Services" />
          <div className="text-xl">
          <motion.h1
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.98,
        fontVariationSettings: "'wght' 300",
      }}
      animate={controls}
      className="text-center text-xl md:text-3xl max-w-3xl mx-auto py-6 mb-4"
      style={{
        fontFamily: '"InterVariable", sans-serif',
        fontVariationSettings: "'wght' 300",
      }}
    >
     W3X brings personalization to digitalization. Feasible, grounded in reality, and tied to the client’s business goals, our digital strategy services generate commercial value with custom-tailored digital transformation strategies.
    </motion.h1>
          
          </div>

          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="mt-10 flex justify-end">
        
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
     <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">  → Explore all services</span>
     <span className="relative invisible">  → Explore all services</span>
 </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

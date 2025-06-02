'use client';
import React from "react";
import { motion } from "framer-motion";

// SVG Icons for each step (now matching your exact titles 1-7)
const icons = {
  "1": ( // Discovery & Research
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  ),
  "2": ( // Planning & Strategy
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 17 1.4 1.4" />
      <path d="m4.6 19.4 1.4-1.4" />
      <path d="M22 12h-2" />
      <path d="M2 12h2" />
      <path d="m7 7 1.4-1.4" />
      <path d="m18.4 5.6-1.4 1.4" />
    </svg>
  ),
  "3": ( // Design & Prototyping
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  "4": ( // Development
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "5": ( // Testing & Quality Assurance
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9.5 9.5 5 5" />
      <path d="m14.5 9.5-5 5" />
    </svg>
  ),
  "6": ( // Launch & Deployment
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  "7": ( // Support & Growth
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
};

function OurProcessCard({ title, text, index }) {
  // Extract the number from the title (e.g., "1. Discovery" → "1")
  const titleNumber = title.split('.')[0].trim();
  
  return (
    <motion.div
      className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-[180px] sm:min-h-[220px] md:min-h-[250px] flex flex-col items-center justify-center border border-white/10 rounded-lg p-6 my-4 shadow-md transition duration-300 ${
        index % 2 === 0
          ? "self-end bg-[#572b7dcc]"
          : "self-start bg-[#572b7dcc]"
      } hover:shadow-purple-600/30`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="text-[#ffffff] mb-4">
        {icons[titleNumber]}
      </div>
      <h3 className="text-[#d8a7ef] text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
        {title}
      </h3>
      <p className="text-white text-sm sm:text-base md:text-lg text-center leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

export default OurProcessCard;
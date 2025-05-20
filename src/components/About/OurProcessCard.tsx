'use client';
import React from "react";
import { motion } from "framer-motion";

function OurProcessCard({ title, text, index }) {
  return (
    <motion.div
      className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-[180px] sm:min-h-[220px] md:min-h-[250px] flex flex-col items-center justify-center border border-white/10 rounded-lg p-6 my-4 shadow-md transition duration-300 ${
        index % 2 === 0
          ? "self-end bg-[#1F1531]"
          : "self-start bg-[#1F1531]"
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
      <h3 className="text-purple-400 text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

export default OurProcessCard;

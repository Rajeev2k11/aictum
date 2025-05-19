'use client'
import React from "react";
import { motion } from "framer-motion";

function OurProcessCard({ text, index }) {
  return (
    <motion.div
      className={`w-full md:w-[35vw] h-[25vh] md:h-[35vh] flex items-center justify-center border rounded-lg px-2 pb-2 mt-5 mb-5 shadow-md ${
        index % 2 === 0 ? "self-end bg-white" : "self-start bg-white"
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50, // Slide from left or right
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
      <p className="text-black text-lg md:text-2xl">{text}</p>
    </motion.div>
  );
}

export default OurProcessCard;
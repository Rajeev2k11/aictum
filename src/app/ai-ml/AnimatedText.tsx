import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0.5,
  stagger = 0.08,
  duration = 1,
  once = true,
}) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: stagger,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: once }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + "-" + index}
          className="inline-block"
          variants={child}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
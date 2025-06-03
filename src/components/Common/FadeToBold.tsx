'use client';

import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function FadedToBold({ text }: { text: string }) {
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
  }, [inView, controls]);

  return (
    <motion.h1
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.98,
        fontVariationSettings: "'wght' 300",
      }}
      animate={controls}
      className="text-center text-3xl md:text-7xl"
      style={{
        fontFamily: '"InterVariable", sans-serif',
        fontVariationSettings: "'wght' 300",
      }}
    >
      {text}
    </motion.h1>
  );
}

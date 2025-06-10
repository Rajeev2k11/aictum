import * as motion from 'motion/react-client';
import React, { useEffect, useRef, useState } from "react";

const useAnimatedNumber = (value: string) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    let end = parseInt(value.replace(/\D/g, "")) || 0;
    let suffix = value.replace(/\d/g, ""); // <-- Only remove digits, keep '+'
    let frame: number;
    let startTime: number | null = null;
    let duration = 900;

    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    let observer: IntersectionObserver | null = null;
    if (ref.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(animate);
            observer?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [value]);

  return { display, ref };
};

const StatItem = ({ stat }: { stat: { value: string; label: string } }) => {
  const { display, ref } = useAnimatedNumber(stat.value);
  const match = display.match(/(\d[\d,]*)(\+?)(.*)$/);

  return (
    <div className="text-center p-3 sm:p-4">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
        <span ref={ref}>
          {match ? (
            <>
              <span className="text-white">{match[1]}</span>
              {match[2] && <span className="text-white">{match[2]}</span>}
              {match[3] && <span>{match[3]}</span>}
            </>
          ) : display}
        </span>
      </p>
      <p className="text-xs sm:text-sm md:text-md text-purple-300 leading-tight sm:leading-normal">
        {stat.label}
      </p>
    </div>
  );
};

export const WhoWeAre = () => {
  const stats = [
    { value: "20+", label: "Years in Business" },
    { value: "50+", label: "Global Offices" },
    { value: "150+", label: "Products Launched" },
    { value: "500+", label: "Team Members" },
    { value: "2000+", label: "Satisfied Clients" },
    { value: "10M+", label: "Users Worldwide" },
  ];

  // Split stats into 3 rows of 2 items each
  const rows = [
    stats.slice(0, 2),
    stats.slice(2, 4),
    stats.slice(4, 6),
  ];

  return (
    <section className="mb-16 md:mb-24 lg:mb-32 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-purple-300 border-b border-purple-900 pb-2 md:pb-3"
      >
        Who We Are
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="mb-12 md:mb-16"
      >
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 gap-4 sm:gap-6">
            {row.map((stat) => {
              const { display, ref } = useAnimatedNumber(stat.value);
              const match = display.match(/(\d[\d,])(\+?)(.)$/);
              return (
                <div className="text-center p-3 sm:p-4" key={stat.label}>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                    <span ref={ref}>
                      {match ? (
                        <>
                          <span className="text-white">{match[1]}</span>
                          {match[2] && <span className="text-white">{match[2]}</span>}
                          {match[3] && <span>{match[3]}</span>}
                        </>
                      ) : display}
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm md:text-md text-purple-300 leading-tight sm:leading-normal">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 3 items */}
          <div className="grid grid-cols-3 gap-6">
            {stats.slice(3, 6).map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

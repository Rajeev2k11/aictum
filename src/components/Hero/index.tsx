'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented, trying with muted:", error);
        videoRef.current!.muted = true;
        videoRef.current!.play();
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden relative h-screen">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.5]" // Reduced brightness here
      >
        <source src="/images/video/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-40 z-1"></div>

      <motion.section
        style={{ opacity, scale }}
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 w-full mx-auto text-white relative z-10 h-full flex flex-col justify-center"
      >
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build the Future with <span className="text-[#9345E0]">AI & Web3</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From smart automation to decentralized solutions — we help startups and enterprises 
            launch cutting-edge products using AI and Blockchain technology.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#9345E0] text-white text-lg font-medium hover:bg-[#7d35c4] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Have a Vision? Let&rsquo;s Build It
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
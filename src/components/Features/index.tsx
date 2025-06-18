'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import FadedToBold from "../Common/FadeToBold";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Improved smooth scroll handler
  const scrollByOffset = (offset: number) => {
    if (!scrollContainerRef.current) return;
    
    const start = scrollContainerRef.current.scrollLeft;
    const startTime = performance.now();
    const duration = 500; // milliseconds
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 0.5 * (1 - Math.cos(Math.PI * progress)); // Smooth easing function
      
      scrollContainerRef.current!.scrollLeft = start + offset * easeProgress;
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        checkScrollPosition();
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    checkScrollPosition();
  };

  // Initialize arrow visibility
  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScrollPosition);
    return () => container?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <section
      id="features"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white"
    >
      <div className="container px-4 mx-auto">
        {/* <FadedToBold text="Ready-to-Run Web3 & AI Platforms for Growth" /> */}
        <h1 className='text-center text-4xl md:text-4xl font-bold mb-6'>Ready-to-Run <span className='text-[#9345E0]'>Web3 & AI </span> Platforms for Growth</h1>

        <motion.h1
          ref={ref}
          initial={{
            opacity: 0,
            scale: 0.98,
            fontVariationSettings: "'wght' 300",
          }}
          animate={controls}
          className="text-center text-xl md:text-1xl max-w-3xl mx-auto py-6 mb-10 text-gray-300"
          style={{
            fontFamily: '"InterVariable", sans-serif',
            fontVariationSettings: "'wght' 300",
          }}
        >
          Explore our suite of customizable, ready-to-deploy platforms designed to accelerate your Web3 and AI initiatives. From AI agent builders to tokenization solutions, we provide the tools you need to innovate and scale.
        </motion.h1>

        {/* Scrollable Carousel */}
        <div className="relative group">
          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-scroll no-scrollbar px-4 py-6"
            style={{ cursor: isDown ? 'grabbing' : 'grab' }}
          >
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* Combined Navigation and CTA Section */}
        <div className="flex justify-between items-center mt-8">
          {/* Navigation Arrows - Now with partial visibility when inactive */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => scrollByOffset(-300)}
              className={`bg-[#9345E0] hover:bg-[#a55af0] p-3 rounded-full shadow-lg transition-all duration-300 ${
                showLeftArrow ? 'opacity-100' : 'opacity-20 hover:opacity-50'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: showLeftArrow ? 1 : 0.2,
                x: showLeftArrow ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
              disabled={!showLeftArrow}
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={() => scrollByOffset(300)}
              className={`bg-[#9345E0] hover:bg-[#a55af0] p-3 rounded-full shadow-lg transition-all duration-300 ${
                showRightArrow ? 'opacity-100' : 'opacity-20 hover:opacity-50'
              }`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: showRightArrow ? 1 : 0.2,
                x: showRightArrow ? 0 : 10
              }}
              transition={{ duration: 0.3 }}
              disabled={!showRightArrow}
            >
              <ChevronRight className="text-white w-6 h-6" />
            </motion.button>
          </div>

          {/* CTA Button - Now on the same line */}
          <a
            href="/all-service"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#9345E0] rounded-full shadow-md group hover:shadow-[0_0_15px_2px_rgba(147,69,224,0.4)]"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#9345E0] group-hover:translate-x-0 ease">
              <ChevronRight className="w-6 h-6" />
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
'use client';
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { useMediaQuery } from "react-responsive";

const features = [
   {
    title: "AI Platform-as-a-Service",
    subtitle: "Launch Smart AI Solutions",
    image: "/images/testnomialImg/ai1.jpg",
    description: "Build, deploy, and monetize AI agents and copilots for real-world use cases with ease. Designed for teams needing speed, control, and scalability in one platform. Perfect for developers, startups, and enterprises looking to create internal tools, customer solutions, or commercial AI products without sacrificing flexibility or development speed.",
  },
  {
    title: "NIL-Powered Blockchain Platform",
    subtitle: "Monetize NIL with Blockchain",
    image: "https://img.freepik.com/free-photo/futuristic-technology-hologram_23-2151917444.jpg?uid=R200268884&ga=GA1.1.352842097.1750174499&semt=ais_hybrid&w=740",
    description: "Unlock new opportunities at the intersection of Name, Image, and Likeness (NIL) and blockchain technology. This platform enables athletes, creators, and brands to securely tokenize NIL rights, manage digital assets, and create transparent, verifiable revenue streams—all backed by the trust and immutability of blockchain infrastructure.",
  },
  {
    title: "Real-World Assets on Blockchain",
    subtitle: "Tokenize Real Assets with Ease",
    image: "/images/testnomialImg/real-assest.jpg",
    description: "Unlock liquidity and accessibility by tokenizing real-world assets (RWA) like real estate, art, or commodities. This platform enables secure, transparent, and compliant asset tokenization, making it easy to fractionalize ownership and trade globally. Bring traditional assets into the digital age with blockchain-powered efficiency, security, and market reach.",
  },
  {
    title: "Ordinals on Bitcoin: NFTs Reimagined",
    subtitle: "NFTs on Bitcoin, Reinvented",
    image: "/images/testnomialImg/bitcoin2.jpg",
    description: "Discover a new era of digital ownership with Bitcoin Ordinals—NFTs inscribed directly on the Bitcoin blockchain. This innovation allows users to create, trade, and preserve digital artifacts on the world’s most secure network. Empowering artists, collectors, and developers with decentralized, immutable, and censorship-resistant digital assets built on Bitcoin.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTouchDevice = useMediaQuery({ maxWidth: 1024 }); // Applies to tablets and mobiles

  // Auto-rotate slides for touch devices
  useEffect(() => {
    if (!isTouchDevice) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isTouchDevice, currentSlide]);

  const goToPrev = () => {
    setCurrentSlide(prev => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Empowering the Digital Future with Innovation and Excellence"
          paragraph="At Aictum, we are committed to delivering cutting-edge solutions that redefine the digital landscape. Our expertise spans AI, blockchain, and more, ensuring your business stays ahead in a rapidly evolving world."
          center
        />

        {/* Desktop Version (Hover Effect - for large screens) */}
        {!isTouchDevice ? (
          <div className="relative mt-12 w-full h-[400px] overflow-hidden">
            <div className="flex h-full">
              {features.map((feature, index) => (
                <SingleTestimonial
                  key={index}
                  {...feature}
                  isActive={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          // Mobile/Tablet Version (Carousel)
          <div className="mt-12 w-full h-[400px] overflow-hidden relative">
            {/* Navigation Buttons */}
            <button 
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 hover:bg-[#9345E0] transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 hover:bg-[#9345E0] transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slides Container */}
            <div className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full relative">
                  <SingleTestimonial
                    {...feature}
                    isActive={true} // Always show full content on touch devices
                    onHover={() => {}}
                    onLeave={() => {}}
                    index={index}
                  />
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#9345E0] w-6' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
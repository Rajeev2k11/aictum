"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Updated services data to match our service pages
const services = {
  "AI & ML Solutions": {
    id: "ai-ml",
    items: [
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Generative AI & Chatbots",
      "Predictive Analytics & Data-driven decision making"
    ]
  },
  "Blockchain & Web3 Solutions": {
    id: "blockchain",
    items: [
      "Smart Contract Development",
      "Decentralized Applications (dApps)",
      "NFT Marketplaces & Tokenization",
      "Blockchain Consulting & Strategy"
    ]
  },
  "Product Development": {
    id: "web-mobile",
    items: [
      "Full-stack application development",
      "UX/UI Design",
      "Mobile & Web Application Development",
      "Cloud Infrastructure & Scalability"
    ]
  },
  "Technical Consulting": {
    id: "tech-consulting",
    items: [
      "Technology assessment and strategy",
      "Architecture design & integration",
      "Performance optimization",
      "Training & support"
    ]
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  // Function to generate service link
  const getServiceLink = (category: string, item: string) => {
    const serviceId = services[category as keyof typeof services]?.id || '';
    return `/services/${serviceId}?service=${encodeURIComponent(item)}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "backdrop-blur-md bg-[#1A1325]/80 border-[#473062]"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Aictum</span>
          <span className="text-2xl font-bold text-white">W3X</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-white hover:text-[#9345E0] transition-colors duration-300 hover:bg-transparent group"
            >
              Services
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-300",
                isServicesHovered ? "rotate-180" : ""
              )} />
            </Button>

            {/* Custom Dropdown */}
            {isServicesHovered && (
              <div 
                className="absolute -left-12 top-full bg-[#2B1D40] backdrop-blur-sm border border-[#9345E0]/40 shadow-xl rounded-xl p-4 mt-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: 'translateX(-50%)',
                  width: 'calc(100vw - 2rem)',
                  maxWidth: '1200px'
                }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(services).map(([category, data]) => (
                    <div key={category} className="space-y-3">
                      <Link 
                        href={`/services/${data.id}`}
                        className="text-[#9345E0] font-semibold text-lg mb-3 pb-2 border-b border-[#9345E0]/30 block hover:text-[#b36ef7]"
                      >
                        {category}
                      </Link>
                      <ul className="space-y-3">
                        {data.items.map((item) => (
                          <li key={item}>
                            <Link 
                              href={getServiceLink(category, item)}
                              className="block rounded-lg px-3 py-2 hover:bg-[#9345E0]/30 text-white transition-colors duration-200 hover:translate-x-1 hover:shadow-[2px_0_0_0_#9345E0]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {['About', 'Contact', 'Blog', 'Team'].map((label) => (
            <Button
              key={label}
              variant="ghost"
              className="text-white hover:text-[#9345E0] transition-colors duration-300"
              asChild
            >
              <Link href={`/${label.toLowerCase()}`}>{label}</Link>
            </Button>
          ))}

          <div className="ml-4">
            <Button
              variant="default"
              className="bg-[#9345E0] hover:bg-[#9345E0]/90 text-white shadow-lg shadow-[#9345E0]/30"
              asChild
            >
              <Link href="/demo">Call us</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-[#9345E0]/20 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[320px] bg-[#1A1325] border-l border-[#9345E0]/30 p-0 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center px-5 pt-5 pb-4 border-b border-[#9345E0]/20">
                  <span className="text-2xl font-bold text-white">W3X</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col space-y-1 px-5 py-6 overflow-y-auto">
                  {/* Services Dropdown */}
                  <div className="mb-4 border-b border-[#9345E0]/10 pb-4">
                    <button
                      className="flex items-center justify-between w-full text-base font-semibold text-white hover:text-[#9345E0] transition-colors"
                      onClick={toggleMobileServices}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          mobileServicesOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-4 space-y-4">
                        {Object.entries(services).map(([category, data]) => (
                          <div key={category}>
                            <Link
                              href={`/services/${data.id}`}
                              className="text-sm font-semibold text-[#9345E0] mb-2 block hover:text-[#b36ef7]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {category}
                            </Link>
                            <ul className="space-y-1 ml-3 border-l border-[#9345E0]/10 pl-3">
                              {data.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={getServiceLink(category, item)}
                                    className="block text-sm text-gray-300 hover:text-white transition-all py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Links */}
                  {['About', 'Contact', 'Blog', 'Team'].map((label) => (
                    <Link
                      key={label}
                      href={`/${label.toLowerCase()}`}
                      className="block text-base font-medium text-white hover:text-[#9345E0] transition-colors py-2 border-b border-[#9345E0]/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>

                {/* Call to Action */}
                <div className="px-5 pt-4 pb-6 border-t border-[#9345E0]/20">
                  <Button
                    className="w-full bg-[#9345E0] hover:bg-[#9345E0]/90 text-white shadow-lg shadow-[#9345E0]/30"
                    asChild
                  >
                    <Link href="/demo">Call us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
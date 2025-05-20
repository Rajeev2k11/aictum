"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Blockchain", href: "/agenti-ai-voce" },
      { label: "Ai", href: "/agenti-ai-chat" },
      { label: "Web3", href: "/agenti-ai-email" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "backdrop-blur-md bg-[#1A1325]/80 border-[#473062]"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">W3X</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            link.submenu ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-white hover:bg-[#9345E0]/20">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-[#473062] border-[#9345E0]">
                  {link.submenu.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="hover:bg-[#9345E0]">
                      <Link href={item.href} className="cursor-pointer text-white">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={link.label} variant="ghost" className="text-white hover:bg-[#9345E0]/20" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            )
          ))}
          <div className="ml-4">
            <Button variant="default" className="bg-[#9345E0] hover:bg-[#9345E0]/90 text-white" asChild>
              <Link href="/demo">Call us</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#9345E0]/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-[#1A1325] border-l-[#9345E0]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold text-white">W3X</span>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-[#9345E0]/20" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.submenu ? (
                        <div className="flex flex-col">
                          <button className="text-lg font-medium mb-2 text-white">
                            {link.label}
                          </button>
                          <div className="flex flex-col space-y-2 pl-4">
                            {link.submenu.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="text-[#C9C9C9] hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto mb-8">
                  <Button className="w-full bg-[#9345E0] hover:bg-[#9345E0]/90 text-white" asChild>
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
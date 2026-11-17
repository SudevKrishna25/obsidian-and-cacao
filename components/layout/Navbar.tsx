"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-obsidian/92 backdrop-blur-md py-4 border-b border-gold/15 shadow-luxury"
            : "bg-transparent py-6 md:py-8 border-b border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Obsidian and Cacao Home"
          >
            <span className="font-serif text-base sm:text-lg md:text-2xl tracking-[0.16em] sm:tracking-[0.22em] text-ivory group-hover:text-gold transition-colors duration-300">
              OBSIDIAN <span className="font-serif italic text-gold font-normal">&amp;</span> CACAO
            </span>
            <span className="font-sans text-[7.5px] sm:text-[8px] md:text-[9px] uppercase tracking-ritual text-ash/80 group-hover:text-champagne transition-colors duration-300">
              ATELIER DE CHOCOLAT NOIR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-sans text-xs uppercase tracking-ritual py-1 transition-colors duration-300 group",
                    isActive ? "text-gold font-medium" : "text-ivory/80 hover:text-ivory"
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Private Tasting or Concierge CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/contact"
              className="border border-gold/40 px-5 py-2 text-[10px] uppercase tracking-ritual text-champagne hover:border-gold hover:text-ivory hover:bg-gold/10 transition-all duration-300 rounded-sm"
            >
              Private Enquiry
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex items-center justify-center p-2 text-ivory hover:text-gold focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

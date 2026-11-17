"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-[100] flex flex-col bg-obsidian-deep/98 backdrop-blur-xl px-8 py-10 transition-all duration-500 overflow-y-auto"
    >
      {/* Header inside overlay */}
      <div className="flex items-center justify-between border-b border-gold/15 pb-6">
        <div>
          <span className="font-serif text-lg tracking-[0.2em] text-ivory">
            OBSIDIAN <span className="font-serif italic text-gold font-normal">&amp;</span> CACAO
          </span>
          <p className="font-sans text-[8px] uppercase tracking-ritual text-ash">
            ATELIER DE CHOCOLAT NOIR
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-colors focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-12 flex flex-col space-y-6" aria-label="Mobile Navigation Links">
        {NAV_ITEMS.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-baseline justify-between border-b border-white/5 pb-4 transition-all duration-300",
                isActive ? "text-gold" : "text-ivory hover:text-champagne"
              )}
            >
              <div>
                <span className="text-[10px] font-sans text-ash/60 tracking-widest mr-4">
                  0{index + 1}
                </span>
                <span className="font-serif text-2xl tracking-wide">
                  {item.label}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Footer Info */}
      <div className="pt-6 border-t border-gold/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs">
        <div>
          <p className="font-sans text-[9px] uppercase tracking-ritual text-ash">
            Private Atelier Enquiries
          </p>
          <p className="font-sans text-xs text-champagne mt-0.5">
            concierge@obsidiancacao.com
          </p>
        </div>
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-block border border-gold/40 px-6 py-2.5 text-center font-sans text-[10px] uppercase tracking-ritual text-ivory hover:border-gold hover:bg-gold/10 transition-colors"
        >
          Request Private Tasting
        </Link>
      </div>
    </div>
  );
}

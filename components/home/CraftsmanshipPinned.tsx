"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

interface CraftChapter {
  roman: string;
  step: string;
  title: string;
  tagline: string;
  narrative: string;
  spec: string;
  image: string;
}

const CHAPTERS: CraftChapter[] = [
  {
    roman: "I",
    step: "01",
    title: "ORIGIN",
    tagline: "The beginning of every extraordinary expression.",
    narrative:
      "Ancestral Criollo trees thrive beneath wild rainforest canopies. Sun-fermented in tiered cedar cascades, the natural tannins soften into an austere yet deeply rewarding profile, free from chemical intervention.",
    spec: "Single-Estate Terroir • Wild Canopy",
    image: "/images/craft-origin.jpg",
  },
  {
    roman: "II",
    step: "02",
    title: "COMPOSITION",
    tagline: "An exploration of balance, texture and depth.",
    narrative:
      "The cracked nibs meet antique granite melangeurs. Over ninety-six continuous hours of porphyry roller friction, the particle size is refined below twelve microns—an ethereal texture undetectable as grain on the human palate.",
    spec: "Granite Melangeur • 96-Hour Conche",
    image: "/images/craft-composition.jpg",
  },
  {
    roman: "III",
    step: "03",
    title: "REFINEMENT",
    tagline: "Precision expressed through restraint.",
    narrative:
      "On chilled slabs of Italian nero marquina marble, molten chocolate is worked with palette knives to guide cocoa butter into crystal Form V. The reward is a crystalline, musical snap and a satin sheen of polished obsidian.",
    spec: "Form V Crystal Matrix • Manual Temper",
    image: "/images/craft-refinement.jpg",
  },
  {
    roman: "IV",
    step: "04",
    title: "EXPERIENCE",
    tagline: "The final expression of an unfinished pursuit.",
    narrative:
      "Each creation rests in humidity-controlled cedar vaults for fourteen days to equilibrate lipid lattices. Wrapped by hand in embossed brass foil, it awaits a solitary ritual of mindful degustation.",
    spec: "14-Day Cedar Maturation • Hand-Sealed",
    image: "/images/craft-experience.jpg",
  },
];

export default function CraftsmanshipPinned() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isReducedMotion()) return;

    const container = containerRef.current;
    const pinSection = pinSectionRef.current;
    if (!container || !pinSection) return;

    const isDesktop = window.innerWidth >= 1024;
    const activeRef = { current: 0 };

    const ctx = gsap.context(() => {
      if (isDesktop) {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=120%",
          pin: pinSection,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              CHAPTERS.length - 1,
              Math.floor(progress * CHAPTERS.length)
            );
            if (newIndex !== activeRef.current) {
              activeRef.current = newIndex;
              setActiveIndex(newIndex);
            }
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const current = CHAPTERS[activeIndex];

  return (
    <div ref={containerRef} className="relative bg-obsidian text-ivory">
      {/* Desktop Pinned Section */}
      <section
        ref={pinSectionRef}
        className="hidden lg:flex min-h-screen flex-col justify-center px-12 xl:px-20 py-16"
      >
        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full mb-10 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
              THE ART OF CRAFT
            </span>
            <h2 className="font-serif text-3xl xl:text-4xl text-ivory mt-1">
              THE ART IS IN WHAT YOU CANNOT SEE.
            </h2>
          </div>

          {/* Chapter Progression Indicators */}
          <div className="flex items-center space-x-6 text-xs font-sans">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.roman}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 transition-all duration-300 focus:outline-none ${idx === activeIndex
                    ? "text-gold font-medium scale-105"
                    : "text-ash/60 hover:text-ash"
                  }`}
              >
                <span className="font-serif text-base">{ch.roman}</span>
                <span className="text-[9px] uppercase tracking-ritual">
                  {ch.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Pinned Presentation */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Chapter Narrative & Roman Numeral */}
          <div className="col-span-5 flex flex-col justify-center pr-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-5xl text-gold/70 font-light">
                {current.roman}
              </span>
              <span className="h-[1px] w-8 bg-gold/40" />
              <span className="font-sans text-[10px] uppercase tracking-ritual text-champagne">
                CHAPTER {current.step}
              </span>
            </div>

            <h3 className="font-serif text-4xl xl:text-5xl text-ivory tracking-wide leading-tight">
              {current.title}
            </h3>

            <p className="mt-3 font-serif italic text-lg text-champagne/90">
              &ldquo;{current.tagline}&rdquo;
            </p>

            <p className="mt-6 font-sans text-sm text-ash leading-relaxed font-light">
              {current.narrative}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold block">
                Disciplinary Standard
              </span>
              <span className="font-serif text-sm text-ivory mt-1 block">
                {current.spec}
              </span>
            </div>
          </div>

          {/* Right Column: Layered Cinematic Imagery */}
          <div className="col-span-7 relative">
            <div className="relative h-[520px] w-full overflow-hidden rounded-sm border border-gold/30 bg-espresso-dark shadow-luxury">
              {CHAPTERS.map((ch, idx) => (
                <div
                  key={ch.step}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${idx === activeIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                >
                  <Image
                    src={ch.image}
                    alt={`${ch.title} — ${ch.tagline}`}
                    fill
                    sizes="(max-width: 1200px) 60vw, 800px"
                    className="object-cover object-center filter brightness-[0.85] contrast-[1.12]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
                </div>
              ))}

              <div className="absolute bottom-6 left-6 z-20 bg-obsidian/85 backdrop-blur-md px-4 py-2 border border-gold/25 rounded">
                <span className="font-serif text-xs text-champagne">
                  Obsidian &amp; Cacao Atelier • Stage {current.step} of 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stacked Storytelling Layout (Clean & Touch-friendly) */}
      <section className="lg:hidden px-4 sm:px-6 py-16 sm:py-20 space-y-12">
        <div className="border-b border-white/10 pb-5">
          <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-ritual text-gold">
            THE ART OF CRAFT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory mt-1 leading-snug">
            THE ART IS IN WHAT YOU CANNOT SEE.
          </h2>
          <p className="mt-2 font-sans text-xs text-ash leading-relaxed">
            From wild canopy harvest to manual Form V crystallization, our four-stage discipline of perfection.
          </p>
        </div>

        <div className="space-y-8">
          {CHAPTERS.map((ch) => (
            <article
              key={ch.step}
              className="relative p-5 sm:p-7 bg-charcoal/30 border border-gold/25 rounded-sm space-y-5 shadow-luxury"
            >
              {/* Corner Gold Accent */}
              <div className="absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-gold/50 pointer-events-none" />
              <div className="absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-gold/50 pointer-events-none" />

              <div className="relative h-52 sm:h-64 w-full overflow-hidden rounded bg-espresso">
                <Image
                  src={ch.image}
                  alt={ch.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-obsidian/90 backdrop-blur-sm px-2.5 py-1 border border-gold/20 rounded text-[9px] font-sans text-champagne uppercase tracking-wider">
                  Stage {ch.step} of 04
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gold">
                  <span className="font-serif text-2xl">{ch.roman}</span>
                  <span className="h-[1px] w-4 bg-gold/40" />
                  <span className="font-sans text-[9px] uppercase tracking-ritual">
                    CHAPTER {ch.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory mt-1">{ch.title}</h3>
                <p className="font-serif italic text-xs sm:text-sm text-champagne mt-1">
                  &ldquo;{ch.tagline}&rdquo;
                </p>
                <p className="mt-3 font-sans text-xs text-ash leading-relaxed font-light">
                  {ch.narrative}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                  <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-ritual text-gold">
                    Disciplinary Standard
                  </span>
                  <span className="font-serif text-xs text-ivory font-light">
                    {ch.spec}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

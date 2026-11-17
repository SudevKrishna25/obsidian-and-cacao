"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function TypographicImmersion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const wordLessRef = useRef<HTMLSpanElement>(null);
  const wordButRef = useRef<HTMLSpanElement>(null);
  const wordExtraRef = useRef<HTMLSpanElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const container = containerRef.current;
    const bgImg = bgImgRef.current;
    const wordLess = wordLessRef.current;
    const wordBut = wordButRef.current;
    const wordExtra = wordExtraRef.current;
    const goldLine = goldLineRef.current;
    const subtext = subtextRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      // Differential Parallax Scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Background image scales and deepens
      tl.to(bgImg, { scale: 1.2, opacity: 0.45, ease: "none" }, 0);

      // Words move at different parallax velocities
      tl.to(wordLess, { y: -90, ease: "none" }, 0)
        .to(wordBut, { y: -40, ease: "none" }, 0)
        .to(wordExtra, { y: -140, ease: "none" }, 0);

      // Gold line expansion
      tl.to(goldLine, { scaleX: 1, opacity: 0.9, ease: "power2.out" }, 0.2);

      // Subtext gentle float
      tl.to(subtext, { y: -30, opacity: 1, ease: "none" }, 0.1);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-obsidian py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Macro Photography with Differential Scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgImgRef} className="relative h-full w-full opacity-20 scale-105 will-change-transform">
          <Image
            src="/images/texture-shards.jpg"
            alt="Dark chocolate macro details"
            fill
            sizes="100vw"
            className="object-cover object-center filter contrast-[1.25]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-radial-highlight opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold mb-6 block">
          THE ART OF REDUCTION
        </span>

        {/* Monumental Typographic Composition */}
        <div className="space-y-2 sm:space-y-4 w-full">
          <div className="overflow-hidden">
            <span
              ref={wordLessRef}
              className="block font-serif text-5xl sm:text-8xl md:text-9xl lg:text-[13rem] text-ivory tracking-tight leading-[0.88] will-change-transform"
            >
              LESS.
            </span>
          </div>

          {/* Gold Hairline Divider */}
          <div className="h-[1px] w-36 min-[380px]:w-48 sm:w-80 md:w-[480px] mx-auto overflow-hidden my-3 sm:my-6 md:my-8">
            <div
              ref={goldLineRef}
              className="h-full w-full origin-center scale-x-0 opacity-0 bg-gradient-to-r from-transparent via-gold to-transparent will-change-transform"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 overflow-hidden">
            <span
              ref={wordButRef}
              className="font-serif italic font-light text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-ash will-change-transform"
            >
              BUT
            </span>
            <span
              ref={wordExtraRef}
              className="font-serif italic text-gold-gradient font-normal text-3xl min-[380px]:text-4xl min-[480px]:text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] tracking-tight leading-[0.95] will-change-transform break-words"
            >
              EXTRAORDINARY.
            </span>
          </div>
        </div>

        {/* Subtext */}
        <div
          ref={subtextRef}
          className="mt-12 sm:mt-16 max-w-xl mx-auto text-ash font-sans text-xs sm:text-sm uppercase tracking-ritual leading-relaxed font-light will-change-transform"
        >
          Zero artificial additives • No industrial shear • Pure crystalline expression
        </div>
      </div>
    </section>
  );
}

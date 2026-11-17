"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, isReducedMotion } from "@/lib/gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const ampersandRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const submarkRef = useRef<HTMLParagraphElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Respect reduced motion and session cache safely
    try {
      if (isReducedMotion() || sessionStorage.getItem("oc_preloader_seen")) {
        setIsDone(true);
        return;
      }
    } catch {
      setIsDone(true);
      return;
    }

    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    const line = lineRef.current;
    const wordmark = wordmarkRef.current;
    const ampersand = ampersandRef.current;
    const tagline = taglineRef.current;
    const submark = submarkRef.current;

    // Guaranteed safety release so site NEVER gets stuck or blocked
    const safetyRelease = setTimeout(() => {
      setIsDone(true);
    }, 1400);

    if (!container) return;

    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem("oc_preloader_seen", "true");
        } catch {}
        setIsDone(true);
      },
    });

    // 01. Initial setup
    gsap.set(container, { opacity: 1 });
    gsap.set(spotlight, { scale: 0.8, opacity: 0 });
    gsap.set(line, { scaleX: 0, opacity: 0 });
    gsap.set(submark, { opacity: 0, y: 10 });
    gsap.set(wordmark, { opacity: 0, y: 15 });
    gsap.set(ampersand, { scale: 0.8, opacity: 0 });
    gsap.set(tagline, { opacity: 0, y: 8 });

    // 02. Snappy luxury reveal (fast and fluid)
    tl.to(spotlight, {
      opacity: 0.9,
      scale: 1.1,
      duration: 0.45,
      ease: "power2.out",
    })
      .to(
        [submark, wordmark, ampersand],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        line,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.4,
          ease: "expo.out",
        },
        "-=0.2"
      )
      .to(
        tagline,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.15"
      )
      .to({}, { duration: 0.2 })
      // Smooth dissolve
      .to(container, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
        onStart: () => {
          if (container) container.style.pointerEvents = "none";
        },
      });

    return () => {
      clearTimeout(safetyRelease);
      tl.kill();
    };
  }, []);

  const handleSkip = () => {
    try {
      sessionStorage.setItem("oc_preloader_seen", "true");
    } catch {}
    setIsDone(true);
  };

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Welcome to Obsidian & Cacao"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-obsidian text-ivory overflow-hidden transition-opacity duration-300 pointer-events-none"
    >
      {/* Distant warm directional light */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-radial-highlight blur-[100px]"
      />

      {/* Atmospheric Film Texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pointer-events-auto">
        {/* Subtle submark */}
        <p
          ref={submarkRef}
          className="font-sans text-[8px] sm:text-[9px] md:text-xs uppercase tracking-ritual text-gold/80 mb-3 sm:mb-4"
        >
          ATELIER DE CHOCOLAT NOIR • GENÈVE
        </p>

        {/* Wordmark with Animated Ampersand */}
        <h1
          ref={wordmarkRef}
          className="font-serif text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] sm:tracking-widest text-ivory leading-tight"
        >
          OBSIDIAN{" "}
          <span
            ref={ampersandRef}
            className="inline-block font-serif italic text-gold font-normal px-1 transition-all"
          >
            &amp;
          </span>{" "}
          CACAO
        </h1>

        {/* Narrow gold line */}
        <div className="relative my-4 sm:my-5 h-[1px] w-36 min-[380px]:w-48 sm:w-80 md:w-96 overflow-hidden">
          <div
            ref={lineRef}
            className="h-full w-full origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* Statement */}
        <p
          ref={taglineRef}
          className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-ritual text-champagne/90"
        >
          A DARKER KIND OF INDULGENCE.
        </p>

        {/* Immediate access button */}
        <button
          onClick={handleSkip}
          className="mt-6 sm:mt-8 font-sans text-[9px] uppercase tracking-widest text-ash/60 hover:text-gold transition-colors duration-200 focus:outline-none"
        >
          Enter Atelier &rarr;
        </button>
      </div>
    </div>
  );
}

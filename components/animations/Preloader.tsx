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
    // Respect reduced motion and session cache
    if (isReducedMotion() || sessionStorage.getItem("oc_preloader_seen")) {
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

    if (!container) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("oc_preloader_seen", "true");
        setIsDone(true);
      },
    });

    // 01. Near-total blackness initial state
    gsap.set(container, { opacity: 1 });
    gsap.set(spotlight, { scale: 0.5, opacity: 0 });
    gsap.set(line, { scaleX: 0, opacity: 0 });
    gsap.set(submark, { opacity: 0, y: 15 });
    gsap.set(wordmark, { opacity: 0, y: 25, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" });
    gsap.set(ampersand, { scale: 0.7, opacity: 0, rotate: -15 });
    gsap.set(tagline, { opacity: 0, y: 10 });

    // 02. Distant warm light gradually illuminates
    tl.to(spotlight, {
      opacity: 0.85,
      scale: 1.2,
      duration: 1.1,
      ease: "power2.out",
    })
      // Submark reveals
      .to(
        submark,
        {
          opacity: 0.8,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      )
      // 03. Narrow gold line appears and extends horizontally
      .to(
        line,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.85,
          ease: "expo.out",
        },
        "-=0.3"
      )
      // 04. Obsidian & Cacao wordmark emerges through clip-path mask
      .to(
        wordmark,
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // 05. Ampersand distinctive illuminated treatment
      .to(
        ampersand,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          color: "#D4B37F",
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.6"
      )
      // 06. Statement appears: "A DARKER KIND OF INDULGENCE."
      .to(
        tagline,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.2"
      )
      // Subtle hold
      .to({}, { duration: 0.4 })
      // 07 & 08. Curtain dissolve revealing hero
      .to(container, {
        opacity: 0,
        duration: 0.85,
        ease: "power2.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("oc_preloader_seen", "true");
    setIsDone(true);
  };

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Welcome to Obsidian & Cacao"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-obsidian text-ivory overflow-hidden"
    >
      {/* 02. Distant warm directional light */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-radial-highlight blur-[120px]"
      />

      {/* Atmospheric Film Texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        {/* Subtle submark */}
        <p
          ref={submarkRef}
          className="font-sans text-[8px] sm:text-[9px] md:text-xs uppercase tracking-ritual text-gold/80 mb-3 sm:mb-4"
        >
          ATELIER DE CHOCOLAT NOIR • GENÈVE
        </p>

        {/* 04 & 05. Wordmark with Animated Ampersand */}
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

        {/* 03. Narrow gold line expanding horizontally */}
        <div className="relative my-4 sm:my-6 h-[1px] w-36 min-[380px]:w-48 sm:w-80 md:w-96 overflow-hidden">
          <div
            ref={lineRef}
            className="h-full w-full origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* 06. The statement */}
        <p
          ref={taglineRef}
          className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-ritual text-champagne/90"
        >
          A DARKER KIND OF INDULGENCE.
        </p>

        {/* Skip button for immediate access */}
        <button
          onClick={handleSkip}
          className="mt-10 sm:mt-14 font-sans text-[9px] uppercase tracking-widest text-ash/50 hover:text-gold transition-colors duration-300 focus:outline-none"
        >
          Press to Enter
        </button>
      </div>
    </div>
  );
}

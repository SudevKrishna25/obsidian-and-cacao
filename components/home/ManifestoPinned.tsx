"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function ManifestoPinned() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const word4Ref = useRef<HTMLSpanElement>(null);
  const word5Ref = useRef<HTMLSpanElement>(null);
  const word6Ref = useRef<HTMLSpanElement>(null);
  const word7Ref = useRef<HTMLSpanElement>(null);
  const word8Ref = useRef<HTMLSpanElement>(null);
  const lineAccentRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const container = containerRef.current;
    const pinSection = pinSectionRef.current;
    const bgImg = bgImgRef.current;
    const w1 = word1Ref.current; // NOT
    const w2 = word2Ref.current; // MADE
    const w3 = word3Ref.current; // TO
    const w4 = word4Ref.current; // BE
    const w5 = word5Ref.current; // RUSHED.
    const w6 = word6Ref.current; // MADE
    const w7 = word7Ref.current; // TO BE
    const w8 = word8Ref.current; // REMEMBERED.
    const lineAccent = lineAccentRef.current;
    const narrative = narrativeRef.current;

    if (!container || !pinSection) return;

    // Only pin on screens above 768px for optimal mobile touch usability
    const isDesktop = window.innerWidth >= 768;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=180%",
            pin: pinSection,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Background subtle zoom & brightness
        tl.to(bgImg, { scale: 1.15, filter: "brightness(0.55)", ease: "none" }, 0);

        // Stage 1: Line 1 words entrance staggered
        tl.fromTo(w1, { y: 60, opacity: 0 }, { y: 0, opacity: 0.4, ease: "power2.out" }, 0.05)
          .fromTo(w2, { y: 60, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, 0.1)
          .fromTo(w3, { y: 60, opacity: 0 }, { y: 0, opacity: 0.4, ease: "power2.out" }, 0.15)
          .fromTo(w4, { y: 60, opacity: 0 }, { y: 0, opacity: 0.4, ease: "power2.out" }, 0.2)
          .fromTo(w5, { y: 60, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, 0.25);

        // Stage 2: Fine gold line appears
        tl.fromTo(lineAccent, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 0.8, ease: "power2.out" }, 0.35);

        // Stage 3: Line 2 words reveal
        tl.fromTo(w6, { y: 70, opacity: 0 }, { y: 0, opacity: 0.6, ease: "power2.out" }, 0.4)
          .fromTo(w7, { y: 70, opacity: 0 }, { y: 0, opacity: 0.6, ease: "power2.out" }, 0.45)
          .fromTo(
            w8,
            { y: 80, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, color: "#D4B37F", ease: "power3.out" },
            0.55
          );

        // Stage 4: Supporting narrative appears
        tl.fromTo(narrative, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power2.out" }, 0.7);

        // Slight hold at peak
        tl.to({}, { duration: 0.2 });
      } else {
        // Mobile fallback reveal
        gsap.fromTo(
          [w1, w2, w3, w4, w5, w6, w7, w8, narrative],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="manifesto-pinned"
      ref={containerRef}
      className="relative bg-obsidian text-ivory overflow-hidden"
    >
      <section
        ref={pinSectionRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24"
      >
        {/* Cinematic Backdrop with low-key lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div ref={bgImgRef} className="relative h-full w-full scale-100 will-change-transform">
            <Image
              src="/images/hero-sculpture.jpg"
              alt="Sculptural dark chocolate bar fractured along tempered lines"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.4] contrast-[1.25]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
        </div>

        {/* Center Editorial Manifesto Presentation */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-gold/60" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-ritual text-gold font-medium">
              THE OBSIDIAN MANIFESTO
            </span>
            <span className="h-[1px] w-8 bg-gold/60" />
          </div>

          {/* Monumental Pinned Typography Reveal */}
          <div className="space-y-2 sm:space-y-4">
            {/* Line 1 */}
            <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight leading-none overflow-hidden">
              <span ref={word1Ref} className="inline-block mx-1.5 sm:mx-3 text-ash">
                NOT
              </span>
              <span ref={word2Ref} className="inline-block mx-1.5 sm:mx-3 text-ivory">
                MADE
              </span>
              <span ref={word3Ref} className="inline-block mx-1.5 sm:mx-3 text-ash font-light">
                TO
              </span>
              <span ref={word4Ref} className="inline-block mx-1.5 sm:mx-3 text-ash font-light">
                BE
              </span>
              <span ref={word5Ref} className="inline-block mx-1.5 sm:mx-3 text-ivory italic">
                RUSHED.
              </span>
            </div>

            {/* Fine gold expanding line */}
            <div className="my-4 sm:my-6 h-[1px] w-48 sm:w-80 md:w-96 mx-auto overflow-hidden">
              <div
                ref={lineAccentRef}
                className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
              />
            </div>

            {/* Line 2 */}
            <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight leading-none overflow-hidden">
              <span ref={word6Ref} className="inline-block mx-1.5 sm:mx-3 text-champagne/80 font-light">
                MADE
              </span>
              <span ref={word7Ref} className="inline-block mx-1.5 sm:mx-3 text-ash font-light">
                TO BE
              </span>
              <span
                ref={word8Ref}
                className="inline-block mx-1.5 sm:mx-3 text-gold-gradient font-normal italic"
              >
                REMEMBERED.
              </span>
            </div>
          </div>

          {/* Supporting Philosophy Narrative */}
          <div
            ref={narrativeRef}
            className="mt-10 sm:mt-14 max-w-2xl mx-auto text-ash font-sans text-xs sm:text-base leading-relaxed font-light"
          >
            <p>
              Obsidian &amp; Cacao is built upon absolute botanical restraint. We work exclusively with ancient wild-harvested cacao, stone-conched for up to ninety-six hours on granite melangeurs.
            </p>
            <p className="mt-3 text-champagne/80 font-serif italic text-sm sm:text-lg">
              &ldquo;Where darkness ceases to be an absence, and becomes desire.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

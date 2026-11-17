"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";
import { Sparkles } from "lucide-react";

export default function ChocolateTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinFrameRef = useRef<HTMLDivElement>(null);
  const visualPortalRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const container = containerRef.current;
    const pinFrame = pinFrameRef.current;
    const portal = visualPortalRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const glow = glowRef.current;
    const title = titleRef.current;
    const caption = captionRef.current;

    if (!container || !pinFrame || !portal) return;

    const isDesktop = window.innerWidth >= 768;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=200%",
            pin: pinFrame,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // 1. Portal expands from small focal point to full screen
        tl.fromTo(
          portal,
          { width: "50vw", height: "55vh", borderRadius: "8px", borderColor: "rgba(179, 145, 84, 0.4)" },
          { width: "100vw", height: "100vh", borderRadius: "0px", borderColor: "rgba(179, 145, 84, 0)", ease: "power2.inOut" },
          0
        );

        // 2. Image 1 scales deeper as if moving closer to physical sculpture
        tl.fromTo(img1, { scale: 1 }, { scale: 1.35, ease: "none" }, 0);

        // 3. Lighting intensifies subtly
        tl.fromTo(glow, { opacity: 0.1, scale: 0.7 }, { opacity: 0.45, scale: 1.4, ease: "power2.out" }, 0.2);

        // 4. Image 2 crossfades in
        tl.fromTo(img2, { opacity: 0, scale: 1.15 }, { opacity: 0.85, scale: 1, ease: "power2.inOut" }, 0.4);

        // 5. Editorial title appears over the transformed scene
        tl.fromTo(
          title,
          { opacity: 0, y: 50, letterSpacing: "0.05em" },
          { opacity: 1, y: 0, letterSpacing: "0.15em", ease: "power3.out" },
          0.6
        );

        tl.fromTo(
          caption,
          { opacity: 0, y: 20 },
          { opacity: 0.9, y: 0, ease: "power2.out" },
          0.7
        );

        // Slight hold at peak
        tl.to({}, { duration: 0.2 });
      } else {
        // Mobile fallback
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-obsidian text-ivory">
      <section
        ref={pinFrameRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Expanding Visual Portal Frame */}
        <div
          ref={visualPortalRef}
          className="relative overflow-hidden border border-gold/40 shadow-2xl bg-espresso-dark will-change-transform flex items-center justify-center"
          style={{ width: "85vw", height: "65vh" }}
        >
          {/* Layer 1: Macro Chocolate Texture */}
          <div ref={img1Ref} className="absolute inset-0 z-0 will-change-transform">
            <Image
              src="/images/hero-sculpture.jpg"
              alt="Macro dark chocolate shards"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.75] contrast-[1.2]"
            />
          </div>

          {/* Layer 2: Molten Tempered Chocolate Ribbon Transition */}
          <div ref={img2Ref} className="absolute inset-0 z-1 opacity-0 will-change-transform">
            <Image
              src="/images/craft-composition.jpg"
              alt="Molten cacao ribbon on marble"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.75] contrast-[1.25]"
            />
          </div>

          {/* Dynamic Light Gradient Highlight */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-gold/20 blur-[130px] opacity-10"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/60" />

          {/* Overlaid Editorial Title */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold">
                THE GEOLOGY OF CACAO
              </span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </div>

            <h2
              ref={titleRef}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory tracking-wide leading-tight drop-shadow-2xl"
            >
              CRAFTED IN{" "}
              <span className="font-serif italic text-gold-gradient font-normal">
                SHADOW.
              </span>
            </h2>

            <p
              ref={captionRef}
              className="mt-6 font-sans text-xs md:text-sm uppercase tracking-ritual text-champagne/90 max-w-xl mx-auto"
            >
              An intimate study in Form V crystalline perfection and slow granite friction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

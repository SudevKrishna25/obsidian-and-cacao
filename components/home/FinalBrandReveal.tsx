"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { Sparkles } from "lucide-react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function FinalBrandReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const brandWordmarkRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const section = sectionRef.current;
    const l1 = headlineLine1Ref.current;
    const l2 = headlineLine2Ref.current;
    const brand = brandWordmarkRef.current;
    const line = goldLineRef.current;
    const cta = ctaContainerRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
        },
      });

      tl.fromTo(
        l1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          l2,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          brand,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex flex-col justify-center items-center bg-obsidian-deep py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background low-key macro image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-specimen.jpg"
          alt="Dark chocolate blocks in deep shadows"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/80 to-obsidian" />
        <div className="absolute inset-0 bg-radial-highlight opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold font-medium">
            THE FINAL DISPATCH
          </span>
          <Sparkles className="h-3.5 w-3.5 text-gold" />
        </div>

        {/* Final Message */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory tracking-tight leading-[1.05]">
          <span ref={headlineLine1Ref} className="block will-change-transform">
            THE NIGHT
          </span>
          <span
            ref={headlineLine2Ref}
            className="block font-serif italic text-gold-gradient font-normal will-change-transform mt-1"
          >
            BELONGS TO CACAO.
          </span>
        </h2>

        {/* Subtle gold line extending horizontally */}
        <div className="my-8 sm:my-10 h-[1px] w-48 sm:w-80 md:w-96 overflow-hidden">
          <div
            ref={goldLineRef}
            className="h-full w-full origin-center bg-gradient-to-r from-transparent via-gold to-transparent will-change-transform"
          />
        </div>

        {/* Brand Wordmark */}
        <div ref={brandWordmarkRef} className="will-change-transform mb-8">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-ivory">
            OBSIDIAN <span className="font-serif italic text-gold font-normal">&amp;</span> CACAO
          </span>
          <p className="font-sans text-[9px] uppercase tracking-ritual text-ash mt-1">
            ATELIER DE CHOCOLAT NOIR • GENÈVE
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaContainerRef}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto will-change-transform"
        >
          <MagneticButton href="/collection" variant="primary" size="lg" className="w-full sm:w-auto">
            EXPLORE THE EDITIONS
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary" size="lg" icon={false} className="w-full sm:w-auto">
            PRIVATE ENQUIRY
          </MagneticButton>
        </div>

        <p className="mt-12 font-sans text-[9px] uppercase tracking-ritual text-ash/60">
          GENEVA • ZURICH • PRIVATE ATELIER DE LUXE
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Compass, Sparkles, Award } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleAmpRef = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rightShowcaseRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const hero = heroRef.current;
    const imgContainer = imageContainerRef.current;
    const bgImg = bgImageRef.current;
    const line1 = titleLine1Ref.current;
    const amp = titleAmpRef.current;
    const line2 = titleLine2Ref.current;
    const statement = statementRef.current;
    const cta = ctaRef.current;
    const overlay = overlayRef.current;
    const rightCard = rightShowcaseRef.current;
    const scrollInd = scrollIndicatorRef.current;

    if (!hero || !imgContainer) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        imgContainer,
        { scale: 1.15, filter: "brightness(0.3)" },
        { scale: 1, filter: "brightness(0.55)", duration: 1.8, ease: "power3.inOut" }
      )
        .fromTo(
          line1,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1.1"
        )
        .fromTo(
          amp,
          { scale: 0.5, opacity: 0, rotate: -20 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(2)" },
          "-=0.8"
        )
        .fromTo(
          line2,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          statement,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          cta,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          rightCard,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          scrollInd,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );

      // 2. High-performance mouse parallax depth using quickTo (zero tween churn)
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) {
        const setBgX = bgImg ? gsap.quickTo(bgImg, "x", { duration: 0.8, ease: "power2.out" }) : null;
        const setBgY = bgImg ? gsap.quickTo(bgImg, "y", { duration: 0.8, ease: "power2.out" }) : null;
        const setCardX = rightCard ? gsap.quickTo(rightCard, "x", { duration: 1.0, ease: "power2.out" }) : null;
        const setCardY = rightCard ? gsap.quickTo(rightCard, "y", { duration: 1.0, ease: "power2.out" }) : null;

        const handleMouseMove = (e: MouseEvent) => {
          const xFactor = (e.clientX / window.innerWidth - 0.5) * 14;
          const yFactor = (e.clientY / window.innerHeight - 0.5) * 14;

          if (setBgX && setBgY) {
            setBgX(xFactor);
            setBgY(yFactor);
          }
          if (setCardX && setCardY) {
            setCardX(-xFactor * 0.7);
            setCardY(-yFactor * 0.7);
          }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
      }

      // 3. SCROLL SEQUENCE A — THE HERO COLLAPSE
      const collapseTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      collapseTl
        // Headline separates into layers
        .to(line1, { y: -80, opacity: 0.2, ease: "none" }, 0)
        .to(amp, { y: -120, scale: 0.8, opacity: 0.1, ease: "none" }, 0)
        .to(line2, { y: -160, opacity: 0, ease: "none" }, 0)
        .to(statement, { y: -60, opacity: 0, ease: "none" }, 0)
        .to(cta, { y: -40, opacity: 0, ease: "none" }, 0)
        .to(rightCard, { y: -100, opacity: 0.1, scale: 0.92, ease: "none" }, 0)
        // Image expands beyond initial frame & zooms
        .to(imgContainer, { scale: 1.18, ease: "none" }, 0)
        // Dark cinematic overlay deepens
        .to(overlay, { opacity: 0.85, ease: "none" }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden bg-obsidian pt-24 sm:pt-28 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12"
      aria-label="Obsidian & Cacao Hero"
    >
      {/* Background Architectural Macro Chocolate Image */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        <div ref={bgImageRef} className="relative h-full w-full scale-105">
          <Image
            src="/images/hero-sculpture.jpg"
            alt="Monumental dark chocolate sculpture in architectural low-key lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter contrast-[1.25]"
          />
        </div>

        {/* Cinematic Vignettes and dynamic warm directional light */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-obsidian/60" />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-obsidian-deep opacity-35 pointer-events-none transition-opacity"
        />

        {/* Ambient warm radial spotlights */}
        <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-gold/15 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-cacao/30 blur-[130px] pointer-events-none" />
      </div>

      {/* Top Tagline / Atelier Origin */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-ash/80 text-[10px] uppercase tracking-ritual pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-gold" />
          <span>Haute Chocolaterie • Atelier de Genève</span>
        </div>
        <div className="hidden sm:block text-champagne/80 font-medium">
          Vintage MMXXV • Micro-Lot Curation
        </div>
      </div>

      {/* Center Grand Two-Column Editorial Hero Layout (Filling Free Space On The Right) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Monumental Brand Typography & Philosophy */}
          <div className="col-span-12 lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-gold/80" />
              <span className="font-sans text-xs md:text-sm uppercase tracking-ritual text-gold font-medium">
                AN ART OF CACAO
              </span>
            </div>

            {/* Monumental Typography */}
            <h1 className="font-serif text-[2.5rem] min-[390px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-ivory leading-[0.96]">
              <span ref={titleLine1Ref} className="block will-change-transform">
                OBSIDIAN
              </span>
              <div className="flex items-center gap-2 sm:gap-3 my-1 sm:my-2">
                <span
                  ref={titleAmpRef}
                  className="font-serif italic text-gold font-normal text-2xl min-[390px]:text-4xl sm:text-5xl md:text-6xl lg:text-8xl will-change-transform"
                >
                  &amp;
                </span>
                <span
                  ref={titleLine2Ref}
                  className="block text-gold-gradient font-normal will-change-transform"
                >
                  CACAO
                </span>
              </div>
            </h1>

            {/* Main Statement & Supporting text */}
            <div ref={statementRef} className="mt-4 sm:mt-6 md:mt-7 will-change-transform max-w-xl">
              <h2 className="font-serif text-lg min-[390px]:text-xl sm:text-2xl md:text-3xl text-ivory/95 tracking-wide italic font-light">
                &ldquo;AN OBSESSION WITH DARKNESS.&rdquo;
              </h2>
              <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm md:text-base text-ash leading-relaxed font-light">
                The extraordinary art of cacao, reimagined through the language of refinement. Savor pure unadulterated botanical depth and patient stone conching.
              </p>
            </div>

            {/* CTA actions */}
            <div
              ref={ctaRef}
              className="mt-6 sm:mt-8 md:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 will-change-transform w-full sm:w-auto"
            >
              <MagneticButton href="/collection" variant="primary" size="lg" className="w-full sm:w-auto text-center justify-center">
                EXPLORE THE COLLECTION
              </MagneticButton>
              <MagneticButton href="/atelier" variant="secondary" size="lg" icon={false} className="w-full sm:w-auto text-center justify-center">
                <span className="flex items-center justify-center gap-2">
                  <Compass className="h-3.5 w-3.5 text-gold/80" />
                  <span>ENTER THE ATELIER</span>
                </span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Architectural Luxury Focal Showcase (Fills the Free Space!) */}
          <div
            ref={rightShowcaseRef}
            className="col-span-12 lg:col-span-5 will-change-transform mt-6 lg:mt-0"
          >
            <div className="relative group p-4 sm:p-7 md:p-8 rounded-sm bg-charcoal/40 border border-gold/30 backdrop-blur-md shadow-luxury hover:border-gold/60 transition-all duration-500 overflow-hidden">
              {/* Corner Antique Gold Flourishes */}
              <div className="absolute top-2 left-2 h-3 w-3 border-t border-l border-gold/60 pointer-events-none" />
              <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-gold/60 pointer-events-none" />
              <div className="absolute bottom-2 left-2 h-3 w-2 border-b border-l border-gold/60 pointer-events-none" />
              <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-gold/60 pointer-events-none" />

              {/* Header inside showcase */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-gold" />
                  <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-ritual text-gold font-medium">
                    ATELIER SIGNATURE SPECIMEN
                  </span>
                </div>
                <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-ash">
                  Nº 01 / 480
                </span>
              </div>

              {/* Showcase Image Frame */}
              <div className="relative h-48 sm:h-64 md:h-72 w-full my-4 sm:my-5 overflow-hidden rounded bg-espresso-dark border border-gold/20">
                <Image
                  src="/images/hero-specimen.jpg"
                  alt="Obsidian & Cacao Signature Obscura 92% Specimen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center filter brightness-[0.9] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-75" />

                {/* Floating Wax Seal Watermark */}
                <div className="absolute top-3 right-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-espresso/90 border border-gold/50 shadow-gold-subtle text-[8px] font-serif text-champagne text-center leading-none">
                  92%<br />PURE
                </div>

                {/* Terroir Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between bg-obsidian/90 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 border border-gold/20 rounded text-[8px] sm:text-[9px] font-sans text-ash uppercase tracking-wider">
                  <span className="truncate">Alto Huallaga Valley</span>
                  <span className="text-gold font-medium flex-none ml-2">Harvest 2025</span>
                </div>
              </div>

              {/* Product Info & Direct Exploration Link */}
              <div className="pt-1 sm:pt-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-ivory tracking-wide group-hover:text-gold transition-colors">
                      OBSCURA 92%
                    </h3>
                    <p className="font-serif italic text-xs text-champagne">
                      The Deep Expression
                    </p>
                  </div>
                  <Link
                    href="/collection/obscura"
                    className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-ritual text-gold hover:text-champagne transition-colors"
                  >
                    <span>View Piece</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* Tasting Notes Chips */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {["Black Mission Fig", "Smoked Cedar", "Mineral Earth", "Dark Soil"].map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] sm:text-[9px] font-sans uppercase tracking-wider text-champagne/90 bg-obsidian/80 px-2 py-0.5 rounded border border-white/5"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Metrics & Continuous Discreet Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-white/10">
        <div className="grid grid-cols-3 sm:flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-0 sm:space-x-8 md:space-x-10 text-xs text-ash text-center sm:text-left">
          <div>
            <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory">92%</span>
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-ash/80">Alto Huallaga</span>
          </div>
          <div className="hidden sm:block h-6 w-[1px] bg-white/10" />
          <div>
            <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory">96h</span>
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-ash/80">Stone Conched</span>
          </div>
          <div className="hidden sm:block h-6 w-[1px] bg-white/10" />
          <div>
            <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory">Form V</span>
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-ash/80">Beta Crystal</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          ref={scrollIndicatorRef}
          href="#manifesto-pinned"
          className="group flex items-center gap-3 text-xs uppercase tracking-ritual text-ash hover:text-gold transition-colors focus:outline-none"
        >
          <span className="text-[10px] font-sans">SCROLL TO DESCEND</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
            <ArrowDown className="h-3.5 w-3.5 text-gold animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}

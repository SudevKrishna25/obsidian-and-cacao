"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function HorizontalCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const isDesktop = window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const totalWidth = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-obsidian-surface text-ivory overflow-hidden"
    >
      {/* Desktop Horizontal Exhibition Track */}
      <div
        ref={trackRef}
        className="hidden lg:flex items-center h-screen will-change-transform pl-16 xl:pl-24 pr-32"
        style={{ width: "max-content" }}
      >
        {/* Intro Exhibition Title Monument */}
        <div className="flex-none w-[420px] xl:w-[480px] mr-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
              THE PORTFOLIO
            </span>
          </div>

          <h2 className="font-serif text-5xl xl:text-7xl text-ivory tracking-tight leading-[1.05]">
            THE <br />
            <span className="font-serif italic text-gold-gradient font-normal">
              COLLECTION.
            </span>
          </h2>

          <p className="mt-6 font-sans text-sm text-ash leading-relaxed font-light max-w-sm">
            Traverse our six signature creations. Each tablet represents an unyielding study in ancestral terroir, slow granite conching, and crystalline precision.
          </p>

          <div className="mt-8">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-ritual text-champagne hover:text-gold transition-colors"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold" />
            </Link>
          </div>
        </div>

        {/* 6 Individual Architectural Product Worlds */}
        {PRODUCTS.map((product, idx) => (
          <article
            key={product.id}
            data-cursor-text="EXPLORE"
            className="flex-none w-[520px] xl:w-[580px] mr-12 h-[75vh] flex flex-col justify-between bg-charcoal/30 border border-gold/25 hover:border-gold/60 transition-all duration-500 rounded-sm overflow-hidden shadow-luxury p-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold font-medium">
                EDITION Nº 0{idx + 1}
              </span>
              <div className="flex items-center gap-1.5 font-serif text-xs text-champagne">
                <Sparkles className="h-3 w-3 text-gold/80" />
                <span>{product.cacaoPercentage}% Cacao</span>
              </div>
            </div>

            {/* Dominant Product Photography */}
            <div className="relative h-[360px] xl:h-[400px] w-full my-auto overflow-hidden rounded bg-espresso-dark">
              <Image
                src={product.heroImage}
                alt={`${product.name} — ${product.subtitle}`}
                fill
                sizes="600px"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.12] transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-ash bg-obsidian/90 backdrop-blur-sm px-3 py-1.5 border border-gold/20 rounded">
                <span className="truncate">{product.origin}</span>
                <span className="text-gold">{product.vintage}</span>
              </div>
            </div>

            {/* Editorial Product Narrative */}
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl text-ivory tracking-wide">
                  {product.name}
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-widest text-ash">
                  {product.subtitle}
                </span>
              </div>

              <p className="mt-2 font-sans text-xs text-ash line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>

              {/* Action */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-sans text-[9px] uppercase tracking-ritual text-gold/70">
                  {product.priceNote}
                </span>
                <Link
                  href={`/collection/${product.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-champagne hover:text-gold transition-colors"
                >
                  <span>Explore Piece</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile Vertical Exhibition Presentation (Touch-Friendly) */}
      <div className="lg:hidden px-6 py-20 space-y-12">
        <div className="border-b border-white/10 pb-6">
          <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
            THE PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl text-ivory mt-1">
            THE COLLECTION.
          </h2>
          <p className="mt-3 font-sans text-xs text-ash leading-relaxed">
            Traverse our six signature creations. Each tablet represents an unyielding study in ancestral terroir.
          </p>
        </div>

        <div className="space-y-8">
          {PRODUCTS.map((product, idx) => (
            <article
              key={product.id}
              className="bg-charcoal/30 border border-gold/20 rounded-sm p-6 space-y-4 shadow-luxury"
            >
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="font-sans text-[9px] uppercase tracking-ritual text-gold">
                  EDITION Nº 0{idx + 1}
                </span>
                <span className="font-serif text-champagne">
                  {product.cacaoPercentage}% Cacao
                </span>
              </div>

              <div className="relative h-60 w-full overflow-hidden rounded bg-espresso">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.1]"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ivory">{product.name}</h3>
                <span className="font-sans text-[10px] uppercase tracking-widest text-ash block mt-0.5">
                  {product.subtitle}
                </span>
                <p className="mt-2 font-sans text-xs text-ash line-clamp-2">
                  {product.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="font-sans text-[9px] uppercase tracking-ritual text-ash">
                  {product.priceNote}
                </span>
                <Link
                  href={`/collection/${product.slug}`}
                  className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-ritual text-gold"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

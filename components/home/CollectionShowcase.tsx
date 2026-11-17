"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import { PRODUCTS } from "@/data/products";

export default function CollectionShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredProducts = PRODUCTS.slice(0, 4);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-obsidian-surface py-28 md:py-36 border-t border-white/5 overflow-hidden">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SIGNATURE CREATIONS"
            title="THE ART OF CACAO"
            subtitle="Discover an expression of depth, texture and refined indulgence. Handcrafted in numbered seasonal allocations."
            align="left"
            className="mb-0"
          />

          {/* Controls & Full View Link */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left in collection"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-ivory hover:border-gold hover:text-gold transition-colors focus:outline-none"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right in collection"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-ivory hover:border-gold hover:text-gold transition-colors focus:outline-none"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <GoldButton href="/collection" variant="secondary" size="md">
              View All Editions
            </GoldButton>
          </div>
        </div>
      </div>

      {/* Horizontal Editorial Showcase */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-8 pt-4 px-6 md:px-12 no-scrollbar scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {featuredProducts.map((product, index) => (
          <article
            key={product.id}
            data-cursor-text="DISCOVER"
            className="group relative flex-none w-[300px] sm:w-[380px] md:w-[420px] rounded-sm bg-charcoal/40 border border-gold/20 hover:border-gold/60 transition-all duration-500 overflow-hidden shadow-luxury flex flex-col justify-between"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Top Bar with Number & Percentage */}
            <div className="p-6 flex items-center justify-between border-b border-white/5 bg-obsidian/40">
              <span className="font-sans text-[10px] uppercase tracking-ritual text-gold font-medium">
                EDITION Nº 0{index + 1}
              </span>
              <div className="flex items-center gap-1.5 font-serif text-sm text-champagne">
                <Sparkles className="h-3 w-3 text-gold/80" />
                <span>{product.cacaoPercentage}% Cacao</span>
              </div>
            </div>

            {/* Product Image Frame */}
            <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-espresso-dark">
              <Image
                src={product.heroImage}
                alt={`${product.name} — ${product.subtitle}`}
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Terroir / Origin badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-ash bg-obsidian/85 backdrop-blur-sm px-3.5 py-1.5 border border-gold/20 rounded">
                <span className="truncate">{product.origin}</span>
                <span className="text-gold font-medium">{product.vintage}</span>
              </div>
            </div>

            {/* Editorial Content Block */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-obsidian-surface">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-ash">
                    {product.subtitle}
                  </span>
                </div>

                <p className="mt-3 font-sans text-xs md:text-sm text-ash line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Tasting Notes Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.tastingNotes.slice(0, 3).map((note, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-[9px] uppercase tracking-wider text-champagne bg-charcoal/60 px-2.5 py-1 rounded-sm border border-white/5"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-ritual text-gold/80">
                  {product.priceNote}
                </span>
                <Link
                  href={`/collection/${product.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-ivory group-hover:text-gold transition-colors"
                >
                  <span>Explore Piece</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

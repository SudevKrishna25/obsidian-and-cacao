"use client";

import { useState } from "react";
import ProductCard from "@/components/collection/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/data/products";

export default function CollectionPage() {
  const [filter, setFilter] = useState<"all" | "pure-dark" | "confection" | "speciality">("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === "pure-dark") return product.cacaoPercentage >= 85;
    if (filter === "confection") return product.cacaoPercentage < 85 && product.id !== "nocturne";
    if (filter === "speciality") return product.id === "nocturne" || product.id === "solstice";
    return true;
  });

  return (
    <div className="bg-obsidian min-h-screen pt-36 pb-32 px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            eyebrow="THE COLLECTION"
            title="THE EDITIONS DE CACAO"
            subtitle="Each tablet and confection represents an uncompromising study in single-origin genetics, 96-hour stone conching, and crystalline precision. Hand-cast in numbered micro-batches."
            align="left"
            className="mb-8"
          />

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {[
              { id: "all", label: "All Creations" },
              { id: "pure-dark", label: "Pure Dark (85% — 100%)" },
              { id: "confection", label: "Silken & Enrobed (78%)" },
              { id: "speciality", label: "Truffes & Pure Botanical" },
            ].map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as typeof filter)}
                  className={`font-sans text-[10px] md:text-xs uppercase tracking-ritual px-4 py-2 rounded-sm border transition-all duration-300 focus:outline-none ${
                    active
                      ? "bg-espresso border-gold text-ivory shadow-gold-subtle"
                      : "bg-charcoal/30 border-white/10 text-ash hover:border-gold/40 hover:text-champagne"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-24 p-8 md:p-12 border border-gold/20 bg-charcoal/20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl md:text-2xl text-ivory">
              Seeking a Bespoke Atelier Tasting?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ash mt-1 max-w-xl">
              Our master chocolatiers curate private cellar allocations for collectors, sommeliers, and private residences.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-none font-sans text-xs uppercase tracking-ritual border border-gold px-6 py-3 text-champagne hover:text-ivory hover:bg-gold/15 transition-all"
          >
            Inquire With Concierge
          </a>
        </div>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Compass, Sparkles, Wine } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";
import SensoryNotes from "@/components/collection/SensoryNotes";
import ProductCard from "@/components/collection/ProductCard";
import { PRODUCTS } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-32 px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-[550px] w-[550px] rounded-full bg-gold/5 blur-[170px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-ash hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-gold" />
            <span>Return to Collection</span>
          </Link>
          <span className="font-sans text-[10px] uppercase tracking-ritual text-gold/80">
            {product.edition}
          </span>
        </div>

        {/* Top Product Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Visual Gallery of Product */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-[420px] sm:h-[560px] w-full overflow-hidden rounded-sm border border-gold/30 bg-espresso-dark shadow-luxury">
              <Image
                src={product.heroImage}
                alt={`${product.name} — ${product.subtitle}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter brightness-[0.9] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-80" />

              {/* Watermark badge */}
              <div className="absolute top-6 left-6 bg-obsidian/90 backdrop-blur-md px-4 py-2 border border-gold/30 rounded text-xs">
                <span className="font-serif text-gold text-lg mr-2 font-light">
                  {product.cacaoPercentage}%
                </span>
                <span className="font-sans text-[9px] uppercase tracking-ritual text-ivory">
                  CACAO NOIR
                </span>
              </div>
            </div>

            {/* Secondary Macro Details Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded border border-white/10 bg-charcoal">
                <Image
                  src={product.secondaryImage}
                  alt="Texture close up"
                  fill
                  sizes="30vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.15]"
                />
                <span className="absolute bottom-2 left-2 text-[9px] font-sans uppercase tracking-widest text-ash/80 bg-obsidian/80 px-2 py-0.5 rounded">
                  Tempered Fracture
                </span>
              </div>
              <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded border border-white/10 bg-charcoal">
                <Image
                  src={product.detailImage}
                  alt="Raw ingredient details"
                  fill
                  sizes="30vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.15]"
                />
                <span className="absolute bottom-2 left-2 text-[9px] font-sans uppercase tracking-widest text-ash/80 bg-obsidian/80 px-2 py-0.5 rounded">
                  Terroir Specimen
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Product Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-3 w-3 text-gold" />
                <span className="font-sans text-[10px] uppercase tracking-ritual text-gold font-medium">
                  {product.edition} • {product.origin}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-none">
                {product.name}
              </h1>
              <p className="font-serif italic text-xl text-champagne mt-2 font-normal">
                {product.subtitle}
              </p>

              {/* Tagline */}
              <p className="mt-4 font-sans text-xs uppercase tracking-ritual text-ash">
                &ldquo;{product.tagline}&rdquo;
              </p>

              {/* Gold divider */}
              <div className="my-6 h-[1px] w-full bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                {product.description}
              </p>

              {/* Sommelier & Tasting Ritual Box */}
              <div className="mt-8 bg-charcoal/40 border border-gold/15 p-6 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-sans text-gold uppercase tracking-ritual mb-3">
                  <Wine className="h-4 w-4 text-gold" />
                  <span>Curated Pairings &amp; Sommelier Notes</span>
                </div>
                <ul className="space-y-2 font-sans text-xs text-ivory/80 font-light">
                  {product.pairingSuggestions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <GoldButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Request Atelier Allocation
                </GoldButton>
                <GoldButton href="/atelier" variant="secondary" size="lg" icon={false} className="w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    <Compass className="h-3.5 w-3.5 text-gold/80" />
                    <span>The Craft Story</span>
                  </span>
                </GoldButton>
              </div>

              <p className="mt-4 font-sans text-[10px] uppercase tracking-widest text-ash/60">
                {product.priceNote} • Direct allocation via Private Concierge
              </p>
            </div>
          </div>
        </div>

        {/* Sensory Profile & Craftsmanship Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
          <div className="lg:col-span-7">
            <SensoryNotes
              scores={product.sensoryScores}
              tastingNotes={product.tastingNotes}
              aromaNotes={product.aromaNotes}
            />
          </div>

          {/* Technical Specifications */}
          <div className="lg:col-span-5 bg-charcoal/30 border border-gold/20 p-6 md:p-8 rounded-sm">
            <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold mb-6 font-medium">
              Atelier Technical Specifications
            </h4>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Terroir &amp; Origin</span>
                <span className="text-ivory text-right">{product.origin}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Harvest Vintage</span>
                <span className="text-champagne text-right">{product.vintage}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Conching Protocol</span>
                <span className="text-ivory text-right">{product.roastProfile}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Net Weight</span>
                <span className="text-ivory text-right">{product.netWeight}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Tablet Geometry</span>
                <span className="text-ivory text-right">{product.dimensions}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-ash">Degustation</span>
                <span className="text-champagne text-right">{product.servings}</span>
              </div>
            </div>

            {/* Standards Checklist */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
              {product.craftNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-ash">
                  <Check className="h-3 w-3 text-gold mt-0.5 flex-none" />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 font-sans text-[9px] uppercase tracking-wider text-ash/60 pt-4 border-t border-white/5">
              *Technical metrics and sensory profiles reflect creative atelier concept curation.
            </p>
          </div>
        </div>

        {/* Botanical Narrative Story */}
        <div className="mb-28 p-8 md:p-14 bg-espresso/20 border border-gold/25 rounded-sm">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
              Origin Chronicles
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory mt-3">
              The Genesis of {product.name}
            </h3>
            <p className="mt-6 font-sans text-sm md:text-base text-ash leading-relaxed font-light">
              {product.story}
            </p>
          </div>
        </div>

        {/* Related Creations */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
                The Portfolio
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory">
                Companion Editions
              </h3>
            </div>
            <Link
              href="/collection"
              className="font-sans text-xs uppercase tracking-ritual text-champagne hover:text-gold transition-colors"
            >
              View Full Vault
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

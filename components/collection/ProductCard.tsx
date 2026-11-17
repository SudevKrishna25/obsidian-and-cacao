import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      data-cursor-text="DISCOVER"
      className="group relative flex flex-col justify-between bg-charcoal/30 border border-gold/15 hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 shadow-luxury"
    >
      <div>
        {/* Top Header */}
        <div className="p-5 flex items-center justify-between border-b border-white/5 bg-obsidian/60 text-xs">
          <span className="font-sans text-[9px] uppercase tracking-ritual text-gold font-medium">
            EDITION Nº 0{index + 1}
          </span>
          <div className="flex items-center gap-1.5 font-serif text-champagne text-xs">
            <Sparkles className="h-3 w-3 text-gold/80" />
            <span>{product.cacaoPercentage}% Cacao</span>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative h-[280px] min-[390px]:h-[320px] sm:h-[400px] w-full overflow-hidden bg-espresso-dark">
          <Image
            src={product.heroImage}
            alt={`${product.name} — ${product.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center filter brightness-[0.88] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-75" />

          {/* Terroir & Vintage Tag */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-wider text-ash bg-obsidian/90 backdrop-blur-sm px-3 py-1.5 border border-gold/20 rounded">
            <span className="truncate">{product.origin}</span>
            <span className="text-gold font-medium ml-2 flex-none">{product.vintage}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory tracking-wide group-hover:text-gold transition-colors">
              <Link href={`/collection/${product.slug}`}>{product.name}</Link>
            </h3>
            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-ash">
              {product.subtitle}
            </span>
          </div>

          <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm text-ash line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Tasting notes chips */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
            {product.tastingNotes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="inline-block text-[8px] sm:text-[9px] uppercase tracking-wider text-champagne bg-obsidian px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm border border-white/5"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-4 sm:p-6 md:p-8 pt-0 border-t border-white/5 flex items-center justify-between mt-3 sm:mt-4">
        <span className="font-sans text-[10px] uppercase tracking-ritual text-ash/80">
          {product.priceNote}
        </span>
        <Link
          href={`/collection/${product.slug}`}
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-champagne group-hover:text-gold transition-colors"
        >
          <span>Explore Piece</span>
          <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

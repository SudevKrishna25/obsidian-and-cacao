import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/siteContent";

export default function PhilosophySection() {
  const { philosophySection } = SITE_CONTENT;

  return (
    <section className="relative bg-obsidian py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gold/5 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-gold" />
          <span className="font-sans text-xs uppercase tracking-ritual text-gold font-medium">
            {philosophySection.eyebrow}
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory tracking-tight leading-[1.05] max-w-4xl">
          {philosophySection.title}
        </h2>

        {/* Highlight quote */}
        <p className="mt-8 font-serif text-xl sm:text-2xl md:text-3xl italic text-champagne max-w-3xl leading-relaxed">
          &ldquo;{philosophySection.quote}&rdquo;
        </p>

        {/* The 3 Core Pillars */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {philosophySection.principles.map((pillar) => (
            <div
              key={pillar.roman}
              className="group relative p-8 md:p-10 rounded-sm bg-charcoal/30 border border-gold/15 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl md:text-4xl text-gold/60 group-hover:text-gold transition-colors block">
                  {pillar.roman}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory mt-4 tracking-wide">
                  {pillar.name}
                </h3>
                <p className="mt-4 font-sans text-xs sm:text-sm text-ash leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-[10px] uppercase tracking-ritual text-champagne/60 group-hover:text-gold transition-colors">
                <span>The Obsidian Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read Full Philosophy Link */}
        <div className="mt-14 flex items-center justify-start">
          <Link
            href="/philosophy"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-ritual text-champagne hover:text-gold transition-colors"
          >
            <span>Read Our Complete Philosophical Manifesto</span>
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

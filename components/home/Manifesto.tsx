import Image from "next/image";
import { SITE_CONTENT } from "@/data/siteContent";

export default function Manifesto() {
  const { manifesto } = SITE_CONTENT;

  return (
    <section
      id="manifesto"
      className="relative bg-obsidian py-24 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background directional light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-espresso/40 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-8 bg-gold" />
          <span className="font-sans text-xs uppercase tracking-ritual text-gold font-medium">
            {manifesto.eyebrow}
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory tracking-tight leading-[1.08]">
            CHOCOLATE IS NOT MERELY TASTED.{" "}
            <span className="font-serif italic font-normal text-gold-gradient block mt-2">
              IT IS EXPERIENCED.
            </span>
          </h2>
        </div>

        {/* Asymmetrical Content Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Macro Still-Life with restrained Gold Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group overflow-hidden border border-gold/25 rounded-sm bg-charcoal/40 shadow-luxury">
              <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85"
                  alt="Sculptural dark chocolate bar fractured along tempered lines"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-obsidian-surface/90 border-t border-gold/15">
                <p className="font-serif text-sm italic text-champagne">
                  &ldquo;{manifesto.highlightQuote}&rdquo;
                </p>
                <span className="mt-2 block font-sans text-[9px] uppercase tracking-ritual text-ash">
                  The Obsidian Principle • Geneva Atelier
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Body & Philosophical Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
            <div className="space-y-6 text-ash font-sans text-base md:text-lg leading-relaxed font-light">
              {manifesto.paragraphs.map((p, idx) => (
                <p key={idx} className="first-of-type:text-ivory first-of-type:text-lg first-of-type:md:text-xl first-of-type:font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Atelier Key Quantitative Metrics */}
            <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {manifesto.stats.map((stat, idx) => (
                <div key={idx} className="border-l border-gold/30 pl-4">
                  <span className="block font-serif text-2xl md:text-3xl text-ivory tracking-wide">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-ritual text-ash mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

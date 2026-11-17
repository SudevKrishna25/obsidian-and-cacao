import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import { SITE_CONTENT } from "@/data/siteContent";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  const { finalCta } = SITE_CONTENT;

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-obsidian py-24 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background full-width image with dark luxury grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=2000&q=85"
          alt="Dark chocolate blocks and cacao beans in low key lighting"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.35] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-radial-highlight opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold font-medium">
            {finalCta.eyebrow}
          </span>
          <Sparkles className="h-3.5 w-3.5 text-gold" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory tracking-tight leading-[1.08]">
          INDULGENCE,{" "}
          <span className="font-serif italic text-gold-gradient font-normal block sm:inline">
            WITHOUT COMPROMISE.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 md:mt-8 font-sans text-sm sm:text-base md:text-lg text-ash max-w-xl mx-auto leading-relaxed font-light">
          {finalCta.subtitle}
        </p>

        {/* Gold hairline accent */}
        <div className="my-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <GoldButton href="/collection" variant="primary" size="lg" className="w-full sm:w-auto">
            {finalCta.primaryCta}
          </GoldButton>
          <GoldButton href="/contact" variant="secondary" size="lg" icon={false} className="w-full sm:w-auto">
            {finalCta.secondaryCta}
          </GoldButton>
        </div>

        <p className="mt-8 font-sans text-[10px] uppercase tracking-ritual text-ash/70">
          GENEVA • ZURICH • PRIVATE ATELIER DE LUXE
        </p>
      </div>
    </section>
  );
}

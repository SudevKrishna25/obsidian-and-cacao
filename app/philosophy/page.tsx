import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import { Sparkles, Quote } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-36 pb-32 px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-[550px] w-[550px] rounded-full bg-gold/5 blur-[170px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold font-medium">
              THE OBSIDIAN CANON
            </span>
            <Sparkles className="h-3 w-3 text-gold" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory tracking-tight leading-[1.05]">
            THE BEAUTY OF{" "}
            <span className="font-serif italic text-gold-gradient font-normal block sm:inline">
              RESTRAINT.
            </span>
          </h1>

          <p className="mt-8 font-serif text-lg sm:text-2xl italic text-champagne leading-relaxed">
            &ldquo;In a culture governed by excess, luxury is not the addition of embellishment; it is the courage to strip away everything non-essential until only truth remains.&rdquo;
          </p>
        </div>

        {/* Hero Image Manifesto Banner */}
        <div className="relative h-[360px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury mb-24">
          <Image
            src="/images/product-noir.jpg"
            alt="Dark chocolate blocks on black marble"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.7] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end sm:justify-between text-xs text-ivory">
            <span className="font-serif text-lg text-champagne">
              Atelier Principle Nº 01
            </span>
            <span className="font-sans text-[10px] uppercase tracking-ritual text-ash">
              Darkness, Refined • MMXXV
            </span>
          </div>
        </div>

        {/* Four Deep Philosophical Pillars */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
            <div className="md:col-span-3">
              <span className="font-serif text-5xl text-gold/60 block">I</span>
              <span className="font-sans text-[10px] uppercase tracking-ritual text-ash mt-2 block">
                Pillar One
              </span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
                The Asceticism of Taste
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                Modern confectionery conceals inferior cacao beneath layers of refined cane sugar, dairy fats, and artificial vanilla. We practice sensory asceticism. In our pure dark expressions, we include nothing beyond single-origin cacao liquor, wild cacao butter, and minimal unrefined coconut nectar.
              </p>
              <p className="mt-3 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                When you taste Obscura 92%, you are not consuming an artisan flavor formulation; you are experiencing the geological mineral composition of Peruvian river soil and centuries of fallen leaves.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
            <div className="md:col-span-3">
              <span className="font-serif text-5xl text-gold/60 block">II</span>
              <span className="font-sans text-[10px] uppercase tracking-ritual text-ash mt-2 block">
                Pillar Two
              </span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
                Shadow as Materiality
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                Western luxury often equates light with clarity and goodness. In ancient Mesoamerican cosmology, the cacao tree belonged to the underworld—a sacred fruit formed in the fertile shadow of the jungle canopy.
              </p>
              <p className="mt-3 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                We celebrate shadow not as the negation of light, but as its sanctuary. Darkness allows the palate to sharpen. Freed from visual clutter and chromatic noise, the senses turn inward to observe the quiet drama of melting fat and aromatic volatility.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
            <div className="md:col-span-3">
              <span className="font-serif text-5xl text-gold/60 block">III</span>
              <span className="font-sans text-[10px] uppercase tracking-ritual text-ash mt-2 block">
                Pillar Three
              </span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
                Slowness as Sovereignty
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                Speed is the currency of mass production. It accelerates roasting, abbreviates conching, and ships chocolate before its crystalline structure has matured.
              </p>
              <p className="mt-3 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                In our atelier, slowness is our sovereign law. We conche for up to 96 hours because certain aromatic esters only release after three days of gentle friction. We rest our tablets for fourteen days in Spanish cedar vaults because crystallization requires stillness. We refuse to compromise time for scale.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
            <div className="md:col-span-3">
              <span className="font-serif text-5xl text-gold/60 block">IV</span>
              <span className="font-sans text-[10px] uppercase tracking-ritual text-ash mt-2 block">
                Pillar Four
              </span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
                The Degustation as Meditation
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                To chew chocolate mindlessly is to squander a miracle. We engineer each piece for a conscious tasting ritual.
              </p>
              <p className="mt-3 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
                First, the acoustic snap: Form V crystals breaking with musical resonance. Second, the thermal threshold: letting the body heat melt the cocoa butter over twenty unbroken seconds. Third, the progression: from bright fruit acids to smoke, peat, and velvety earth.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Callout */}
        <div className="mt-28 p-10 md:p-16 border border-gold/30 bg-charcoal/30 rounded-sm text-center max-w-4xl mx-auto shadow-luxury">
          <h3 className="font-serif text-3xl sm:text-4xl text-ivory">
            Experience the Philosophy in Person
          </h3>
          <p className="mt-4 font-sans text-sm text-ash max-w-xl mx-auto leading-relaxed font-light">
            Explore our curated signature portfolio or connect with our concierge for private allocations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton href="/collection" variant="primary" size="lg">
              Explore The Editions
            </GoldButton>
            <GoldButton href="/contact" variant="secondary" size="lg" icon={false}>
              Private Enquiries
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";

export default function AtelierPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-32">
      {/* Hero Showcase of the Atelier */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-specimen.jpg"
            alt="The Obsidian & Cacao Atelier workshop in low directional light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.45] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pt-16">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold font-medium">
              SANCTUARY OF CRAFT • GENEVA
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory tracking-tight leading-[1.05]">
            WHERE DARKNESS{" "}
            <span className="font-serif italic text-gold-gradient font-normal block sm:inline">
              BECOMES DISCIPLINE.
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm sm:text-base md:text-lg text-ash max-w-2xl leading-relaxed font-light">
            Step behind the veil of industrial confectionery. The Obsidian &amp; Cacao Atelier is a temple of patient friction, ancient stone rollers, and manual crystallization.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <GoldButton href="/contact" variant="primary" size="lg">
              Request Private Atelier Visit
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Chapter Storytelling Journey */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 space-y-32">
        {/* Chapter 01 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury">
              <Image
                src="/images/craft-origin.jpg"
                alt="Ancient wild cacao harvest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-obsidian-surface border border-gold/30 p-4 rounded shadow-xl hidden sm:block">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold block">
                Source Standard
              </span>
              <span className="font-serif text-sm text-ivory">
                100% Wild Amazonian Canopy
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-ritual text-gold font-semibold mb-2">
              CHAPTER I
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-wide leading-tight">
              The Terroir of the Ancients
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              We do not cultivate monoculture plantations. Our beans are harvested from centuries-old Criollo trees rooted in uncultivated river valleys. Shaded by towering cedar and mahogany canopies, the trees draw mineral depth from primeval humus.
            </p>
            <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              Harvest takes place strictly at dusk. The pods are cracked using wooden mallets, and the seeds ferment inside tiered cedar boxes for six days. Wild yeasts native to the valley orchestrate the fermentation, transforming harsh tannins into deep aromatic precursors.
            </p>
          </div>
        </section>

        {/* Chapter 02 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-ritual text-gold font-semibold mb-2">
              CHAPTER II
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-wide leading-tight">
              The Granite Melangeur
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              The soul of our texture is the melangeur. Heavy granite stone rollers rotate against a solid porphyry base. We refuse the high-velocity metal blades common in modern confectionery.
            </p>
            <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              Over 96 continuous hours, the stone strokes the cacao mass. Natural friction maintains a low, gentle temperature of 44°C, dissipating volatile acetic acids without burning the delicate floral notes. The particle size is refined below twelve microns—an ethereal texture undetectable as grit upon the human palate.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury">
              <Image
                src="/images/craft-composition.jpg"
                alt="Molten cacao ribbon stone refining"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-obsidian-surface border border-gold/30 p-4 rounded shadow-xl hidden sm:block">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold block">
                Particle Dimension
              </span>
              <span className="font-serif text-sm text-ivory">
                Refined to &lt; 12 Microns
              </span>
            </div>
          </div>
        </section>

        {/* Chapter 03 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury">
              <Image
                src="/images/craft-refinement.jpg"
                alt="Manual obsidian table tempering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-obsidian-surface border border-gold/30 p-4 rounded shadow-xl hidden sm:block">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold block">
                Polymorphic Matrix
              </span>
              <span className="font-serif text-sm text-ivory">
                100% Pure Beta Form V
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-ritual text-gold font-semibold mb-2">
              CHAPTER III
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-wide leading-tight">
              The Obsidian Slab
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              Tempering is an act of thermodynamic alchemy. On massive slabs of Italian nero marquina and volcanic obsidian marble, molten chocolate is poured and agitated with hand spatulas.
            </p>
            <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              By controlling the rate of heat dissipation, the chocolatier guides the fatty acids into crystal Form V. This crystalline geometry yields the clean, resonant snap when broken and the mirror-like satin finish that distinguishes authentic haute chocolaterie from ordinary confections.
            </p>
          </div>
        </section>

        {/* Chapter 04 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-ritual text-gold font-semibold mb-2">
              CHAPTER IV
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-wide leading-tight">
              The Cedar Vault of Maturation
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              Unlike commercial candy which is consumed days after casting, our creations are laid to rest inside humidity-stabilized Spanish cedar vaults for fourteen days prior to dispatch.
            </p>
            <p className="mt-4 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              During this maturation rest, the crystalline lattice relaxes, the lipids equilibrate, and the aromatic bouquet deepens. Each tablet is then inspected under directional raking light, wrapped in airtight antique brass foil, and numbered by hand.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury">
              <Image
                src="/images/hero-sculpture.jpg"
                alt="Maturation and packaging ritual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-obsidian-surface border border-gold/30 p-4 rounded shadow-xl hidden sm:block">
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold block">
                Rest Protocol
              </span>
              <span className="font-serif text-sm text-ivory">
                14-Day Cedar Maturation
              </span>
            </div>
          </div>
        </section>

        {/* Private Atelier Invitation Card */}
        <section className="bg-charcoal/40 border border-gold/30 p-8 sm:p-14 rounded-sm text-center max-w-4xl mx-auto shadow-luxury">
          <ShieldCheck className="h-8 w-8 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-4xl text-ivory tracking-wide">
            Private Degustation by Appointment
          </h3>
          <p className="mt-4 font-sans text-xs sm:text-sm text-ash max-w-xl mx-auto leading-relaxed font-light">
            We welcome collectors, sommeliers, and private parties for private guided tastings within our Geneva atelier. Each session is tailored around vintage micro-lot pairings.
          </p>
          <div className="mt-8 flex justify-center">
            <GoldButton href="/contact" variant="primary" size="lg">
              Reserve Private Degustation
            </GoldButton>
          </div>
        </section>
      </div>
    </div>
  );
}

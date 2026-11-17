"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { CRAFT_STAGES } from "@/data/craftsmanship";
import { Sparkles, Check } from "lucide-react";

export default function Craftsmanship() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = CRAFT_STAGES[activeStageIndex];

  return (
    <section className="relative bg-obsidian py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cacao/20 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="THE ART OF CRAFT"
          title="PRECISION IN EVERY DETAIL."
          subtitle="From ancestral canopy to hand-sealed obsidian casket, explore our four-stage discipline of perfection."
          align="left"
        />

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {CRAFT_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-4 md:p-6 rounded-sm border transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-charcoal/60 border-gold shadow-gold-subtle"
                    : "bg-obsidian-surface border-white/5 hover:border-gold/40 text-ash"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-sans text-[10px] uppercase tracking-ritual font-semibold ${
                    isActive ? "text-gold" : "text-ash/60"
                  }`}>
                    STAGE {stage.step}
                  </span>
                  {isActive && <Sparkles className="h-3 w-3 text-gold animate-pulse" />}
                </div>
                <h3 className={`font-serif text-lg md:text-xl tracking-wide ${
                  isActive ? "text-ivory" : "text-ash"
                }`}>
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Presentation (Cinematic Image + Narrative) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-charcoal/30 border border-gold/20 rounded-sm p-6 sm:p-10 md:p-12 shadow-luxury">
          {/* Left Column: Visual Window */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[480px] w-full overflow-hidden rounded border border-gold/20 bg-espresso-dark">
              <Image
                key={currentStage.image}
                src={currentStage.image}
                alt={`${currentStage.title} — ${currentStage.subtitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.12] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />

              {/* Material Spec Watermark */}
              <div className="absolute bottom-4 left-4 right-4 bg-obsidian/85 backdrop-blur-md p-3.5 border border-gold/25 rounded flex items-center justify-between text-xs">
                <span className="font-sans text-[9px] uppercase tracking-ritual text-ash">
                  Technical Standard
                </span>
                <span className="font-serif text-xs text-champagne">
                  {currentStage.materialSpec}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Narrative & Craft Disciplinary Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif text-4xl text-gold font-light">{currentStage.step}</span>
              <span className="h-[1px] w-8 bg-gold/50" />
              <span className="font-sans text-[10px] uppercase tracking-ritual text-champagne">
                {currentStage.subtitle}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide mt-2">
              {currentStage.title}
            </h3>

            <p className="mt-5 font-sans text-sm sm:text-base text-ash leading-relaxed font-light">
              {currentStage.narrative}
            </p>

            {/* Stage Standards Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <span className="font-sans text-[10px] uppercase tracking-ritual text-gold block">
                Atelier Standards
              </span>
              {currentStage.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/90">
                  <div className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="font-sans font-light">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

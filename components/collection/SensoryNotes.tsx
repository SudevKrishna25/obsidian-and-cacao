import React from "react";
import { Sparkles } from "lucide-react";

interface SensoryScores {
  intensity: number;
  roast: number;
  fruitiness: number;
  bitterness: number;
  silkenMouthfeel: number;
  lingeringFinish: number;
}

interface SensoryNotesProps {
  scores: SensoryScores;
  tastingNotes: string[];
  aromaNotes: string[];
}

export default function SensoryNotes({
  scores,
  tastingNotes,
  aromaNotes,
}: SensoryNotesProps) {
  const metrics = [
    { label: "Sensory Intensity", value: scores.intensity },
    { label: "Wood-Fired Roast", value: scores.roast },
    { label: "Botanical Fruitiness", value: scores.fruitiness },
    { label: "Noble Bitterness", value: scores.bitterness },
    { label: "Silken Mouthfeel", value: scores.silkenMouthfeel },
    { label: "Lingering Finish", value: scores.lingeringFinish },
  ];

  return (
    <div className="bg-charcoal/30 border border-gold/20 p-5 sm:p-6 md:p-8 rounded-sm shadow-luxury">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-4 w-4 text-gold" />
        <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold font-medium">
          Sensory Architecture &amp; Palate Spectrum
        </h4>
      </div>

      {/* Metrics Bars */}
      <div className="space-y-4 mb-8">
        {metrics.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs font-sans text-ash mb-1.5">
              <span>{item.label}</span>
              <span className="font-serif text-champagne">{item.value}/100</span>
            </div>
            <div className="h-1.5 w-full bg-obsidian rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-gold/50 via-gold to-champagne rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flavor and Aroma notes */}
      <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-ritual text-ash block mb-2">
            Palate Progression
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tastingNotes.map((note, idx) => (
              <span
                key={idx}
                className="text-[10px] font-sans text-ivory bg-espresso/80 border border-gold/20 px-2.5 py-1 rounded"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="font-sans text-[10px] uppercase tracking-ritual text-ash block mb-2">
            Aroma Bouquet
          </span>
          <div className="flex flex-wrap gap-1.5">
            {aromaNotes.map((note, idx) => (
              <span
                key={idx}
                className="text-[10px] font-sans text-champagne bg-obsidian border border-white/10 px-2.5 py-1 rounded"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

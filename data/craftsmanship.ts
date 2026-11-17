export interface CraftStage {
  step: string;
  title: string;
  subtitle: string;
  narrative: string;
  details: string[];
  image: string;
  materialSpec: string;
}

export const CRAFT_STAGES: CraftStage[] = [
  {
    step: "01",
    title: "THE CACAO",
    subtitle: "A celebration of wild terroir and ancestral genetics",
    narrative:
      "We source solely from ancestral Criollo and heirloom Nacional groves shaded beneath virgin rainforest canopies. Each pod is harvested by hand at peak lunar maturity, when the sap concentrates the highest density of aromatic precursors. Fermentation occurs in fragrant cedar boxes over six precise days, allowing indigenous yeasts to unlock complex floral and mineral notes without acrid bitterness.",
    details: [
      "Pure heirloom Criollo and Nacional varietals",
      "Tiered wild cedar box aerobic fermentation",
      "Sun-dried on raised bamboo beds beneath mountain air",
      "Traceability to singular coordinates within pristine canopies"
    ],
    image: "/images/craft-origin.jpg",
    materialSpec: "Single Origin Heirloom Micro-Lots"
  },
  {
    step: "02",
    title: "THE COMPOSITION",
    subtitle: "The patient alchemy of stone, heat, and air",
    narrative:
      "Roasting is an intuitive art form conducted over wood-fired ceramic roasters. Temperatures never exceed 118°C, protecting delicate fruit esters and terroir signatures. The cracked nibs are transferred to granite stone melangeurs, where heavy porphyry rollers rotate without pause for up to 96 continuous hours, transforming jagged mineral cacao into a silken liquid suspension.",
    details: [
      "Low-temperature convection roasting preserving volatile terpenes",
      "96-hour continuous granite stone melangeur refinement",
      "Particle size reduced below 12 microns (finer than silk)",
      "Zero emulsifiers, soy lecithin, or industrial additives"
    ],
    image: "/images/craft-composition.jpg",
    materialSpec: "Italian Granite Melangeurs / 96-Hour Conche"
  },
  {
    step: "03",
    title: "THE CRAFT",
    subtitle: "Hand tempering on polished obsidian marble",
    narrative:
      "Tempering represents the master chocolatier's crucible. On chilled slabs of black Italian marble, molten chocolate is worked with palette knives in sweeping, hypnotic arcs. By manipulating the rate of cooling and kinetic agitation, the artisan guides the cocoa butter into crystal Form V. The resulting chocolate boasts an unblemished satin sheen and an unmistakably resonant, musical snap.",
    details: [
      "Hand-worked on genuine polished obsidian & nero marquina marble",
      "Strict kinetic agitation achieving pure Beta-5 crystalline matrix",
      "Hand-cast into custom architectural relief moulds",
      "Aged in dark, humidity-stabilized cedar vaults for 14 days"
    ],
    image: "/images/craft-refinement.jpg",
    materialSpec: "Nero Marquina Marble / Crystal Form V"
  },
  {
    step: "04",
    title: "THE EXPERIENCE",
    subtitle: "A meditative ritual engineered to be savoured",
    narrative:
      "Every creation is wrapped by hand in embossed bronze foil and encased in rigid ebony boxes bound with wax seals. Designed not for mindless consumption, but for deliberate, solitary savoring. As the tablet meets the warmth of your fingers, the aroma releases; as it melts on the tongue, time contracts into a moment of pure, uninterrupted elegance.",
    details: [
      "Custom hand-crafted ebony paperboard packaging",
      "Airtight antique gold foil preserving delicate volatile aromas",
      "Accompanied by a bespoke tasting guide and harvest certificate",
      "Engineered for sensory progression across distinct temperature thresholds"
    ],
    image: "/images/craft-experience.jpg",
    materialSpec: "Hand-Embossed Brass Foil / Artisan Box"
  }
];

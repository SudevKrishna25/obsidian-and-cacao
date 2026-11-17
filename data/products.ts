export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  edition: string;
  cacaoPercentage: number;
  origin: string;
  vintage: string;
  roastProfile: string;
  priceNote: string;
  tagline: string;
  heroImage: string;
  secondaryImage: string;
  detailImage: string;
  description: string;
  story: string;
  tastingNotes: string[];
  aromaNotes: string[];
  pairingSuggestions: string[];
  sensoryScores: {
    intensity: number;
    roast: number;
    fruitiness: number;
    bitterness: number;
    silkenMouthfeel: number;
    lingeringFinish: number;
  };
  craftNotes: string[];
  dimensions: string;
  netWeight: string;
  servings: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "obscura",
    slug: "obscura",
    name: "OBSCURA",
    subtitle: "The Deep Expression",
    edition: "Private Reserve Nº 01",
    cacaoPercentage: 92,
    origin: "Alto Huallaga Valley, Peru",
    vintage: "Solstice Harvest 2025",
    roastProfile: "Slow Charcoal Conche (72 Hours)",
    priceNote: "Presented in Custom Ebony Box",
    tagline: "An unyielding exploration into the depths of unadorned cacao.",
    heroImage: "/images/product-obscura.jpg",
    secondaryImage: "/images/hero-specimen.jpg",
    detailImage: "/images/texture-shards.jpg",
    description:
      "OBSCURA is our most profound meditation on pure cacao. Sourced from ancient criollo trees shaded beneath Amazonian rainforest canopies, this 92% single-origin creation releases nuanced notes of black fig, charred cedarwood, and mineral earth. A clean, crystalline snap gives way to a velvety slow melt.",
    story:
      "The beans for Obscura are gathered exclusively from wild-growing cacao along the riverbanks of Alto Huallaga. Sun-fermented in tiered cedar cascades, the natural tannins soften into an austere yet deeply rewarding profile. We grind each batch over granite stones for three complete days, never rushing the communion between butter and bean.",
    tastingNotes: ["Black Mission Fig", "Smoked Cedar", "Dark Soil", "Tobacco Leaf", "Unsweetened Espresso"],
    aromaNotes: ["Wild Moss", "Aged Leather", "Burnt Vanilla Pod", "Roasted Cocoa Husk"],
    pairingSuggestions: ["Single Malt Islay Scotch", "Aged Pu-erh Tea", "Vintage Port 1997", "Espresso Macchiato"],
    sensoryScores: {
      intensity: 95,
      roast: 88,
      fruitiness: 45,
      bitterness: 75,
      silkenMouthfeel: 85,
      lingeringFinish: 98,
    },
    craftNotes: [
      "Stone conched for 72 continuous hours at 44°C",
      "Tempered by hand on polished obsidian slabs",
      "Wrapped in hand-embossed brass foil",
      "Limited yield of 480 numbered bars per seasonal press"
    ],
    dimensions: "160mm × 80mm × 11mm",
    netWeight: "85 grams (2.99 oz)",
    servings: "Intended for 8 mindful tasting rituals",
  },
  {
    id: "noir",
    slug: "noir",
    name: "NOIR",
    subtitle: "The Midnight Collection",
    edition: "Atelier Signature Nº 02",
    cacaoPercentage: 85,
    origin: "Sambirano Valley, Madagascar",
    vintage: "Monsoon Release 2025",
    roastProfile: "Medium Wood-Fired Roast",
    priceNote: "Hand-Numbered Atelier Edition",
    tagline: "Bright red fruit undertones enveloped in mysterious nocturnal shadows.",
    heroImage: "/images/product-noir.jpg",
    secondaryImage: "/images/texture-macro.jpg",
    detailImage: "/images/hero-specimen.jpg",
    description:
      "NOIR captures the enigmatic tension between darkness and vibrant luminescence. Madagascar's volcanic terroir imparts sudden bursts of tart raspberry, blood orange zest, and blackcurrant, harmonized with a restrained 85% cacao matrix that lingers with oceanic minerality.",
    story:
      "Crafted from heritage Trinitario cacao grown along the mineral-laden floodplains of Northern Madagascar, NOIR undergoes an extended aerobic fermentation. The resulting chocolate possesses an electric acidity that cuts through the dense dark chocolate fats, offering a theatrical, evolving tasting experience on the palate.",
    tastingNotes: ["Macerated Blackcurrant", "Blood Orange Zest", "Raw Honeycomb", "Charred Oak", "Sea Salt Crystal"],
    aromaNotes: ["Wild Cranberry", "Warm Cardamom", "Balsamic Reduction", "Dark Amber"],
    pairingSuggestions: ["Grand Cru Champagne", "Mezcal Añejo", "Rare Rwandan Peaberry Coffee", "Cabernet Sauvignon"],
    sensoryScores: {
      intensity: 88,
      roast: 70,
      fruitiness: 92,
      bitterness: 60,
      silkenMouthfeel: 90,
      lingeringFinish: 92,
    },
    craftNotes: [
      "Extended 6-day micro-lot fermentation",
      "Aerated slow conching preserving volatilized fruit esters",
      "Finished with rare Breton hand-harvested grey salt",
      "Architectural ridged geometric mold design"
    ],
    dimensions: "160mm × 80mm × 10mm",
    netWeight: "80 grams (2.82 oz)",
    servings: "Intended for 6 mindful tasting rituals",
  },
  {
    id: "velvet",
    slug: "velvet",
    name: "VELVET",
    subtitle: "The Silken Experience",
    edition: "Couture Release Nº 03",
    cacaoPercentage: 78,
    origin: "Chuao Village, Venezuela",
    vintage: "Spring Harvest 2025",
    roastProfile: "Gentle Radiant Conche (96 Hours)",
    priceNote: "Presented with Antique Gold Seal",
    tagline: "An immaculate, weightless melt crafted from legendary Chuao beans.",
    heroImage: "/images/product-velvet.jpg",
    secondaryImage: "/images/craft-experience.jpg",
    detailImage: "/images/product-obscura.jpg",
    description:
      "VELVET is a tribute to pure textural opulence. Sourced from the secluded, roadless enclave of Chuao, where beans are sun-dried on the church plaza cobblestones, this 78% chocolate boasts an ultra-fine particle size below 12 microns, yielding an emulsion that glides across the tongue like warm liquid silk.",
    story:
      "The microclimate of Chuao is unique on earth—hemmed in by cloud forests on three sides and the Caribbean Sea on the fourth. Our master chocolatiers subject the beans to a gentle low-temperature roast to preserve the delicate jasmine and toasted hazelnut nuances, elevating chocolate from sustenance to ethereal sensory couture.",
    tastingNotes: ["Toasted Brioche", "Tahitian Vanilla Bean", "Hazelnut Praline", "Blonde Caramel", "Silken Ganache"],
    aromaNotes: ["Jasmine Blossoms", "Warm Butter", "Almond Marzipan", "Sweet Sandalwood"],
    pairingSuggestions: ["Aged Calvados", "Matcha Ceremonial Grade", "Vintage Cognac XO", "Imperial Stout"],
    sensoryScores: {
      intensity: 75,
      roast: 55,
      fruitiness: 65,
      bitterness: 48,
      silkenMouthfeel: 100,
      lingeringFinish: 86,
    },
    craftNotes: [
      "Particle size refined below 12 microns",
      "Cold-pressed single-source heirloom cacao butter infusion",
      "Air-cured in temperature-controlled cedar vaults",
      "Hand-polished with raw silk cloths"
    ],
    dimensions: "160mm × 80mm × 9mm",
    netWeight: "85 grams (2.99 oz)",
    servings: "Intended for 8 serene tasting moments",
  },
  {
    id: "eclat",
    slug: "eclat",
    name: "ÉCLAT",
    subtitle: "The Signature Creation",
    edition: "Grand Cru Selection Nº 04",
    cacaoPercentage: 88,
    origin: "Los Ríos Province, Ecuador",
    vintage: "Winter Solstice 2025",
    roastProfile: "Artisan Smoke & Ember Conche",
    priceNote: "Presented in Hand-Finished Charcoal Box",
    tagline: "Floral Nacional cacao kissed by smoked black tea and raw cacao nibs.",
    heroImage: "/images/product-eclat.jpg",
    secondaryImage: "/images/hero-sculpture.jpg",
    detailImage: "/images/hero-specimen.jpg",
    description:
      "ÉCLAT is our crowning architectural statement. Pure heirloom Nacional cacao is harmoniously fused with slow-smoked pine needle tea and encrusted with crystallized roasted cacao nibs for an electrifying textural contrast. It represents the pinnacle of modern luxury pastry design.",
    story:
      "Nacional cacao from Ecuador is celebrated for its elusive 'Arriba' floral bouquet. In ÉCLAT, our atelier embraces both light and shadow: the delicate floral top notes dance against the deep smoky warmth of pine-ember conching, capped with fractured roasted nibs that provide a satisfying tactile crunch before dissolving.",
    tastingNotes: ["Dark Orchid", "Lapsang Souchong Smoke", "Roasted Cocoa Crunch", "Black Truffle", "Warm Clove"],
    aromaNotes: ["Wood Smoke", "Night-Blooming Jasmine", "Star Anise", "Dark Molasses"],
    pairingSuggestions: ["Highland Peated Whisky", "Oolong Da Hong Pao", "Dry Vermouth", "Espresso Ristretto"],
    sensoryScores: {
      intensity: 92,
      roast: 82,
      fruitiness: 58,
      bitterness: 70,
      silkenMouthfeel: 80,
      lingeringFinish: 95,
    },
    craftNotes: [
      "Heritage Nacional genetics certified through botanical analysis",
      "Infused with rare Wuyi Mountain pine-smoked tea leaves",
      "Hand-sprinkled with caramelised roasted bean nibs",
      "Numbered certificate of creation included"
    ],
    dimensions: "160mm × 80mm × 12mm",
    netWeight: "90 grams (3.17 oz)",
    servings: "Intended for 8 discerning tastings",
  },
  {
    id: "nocturne",
    slug: "nocturne",
    name: "NOCTURNE",
    subtitle: "Truffes Noires",
    edition: "Private Vault Nº 05",
    cacaoPercentage: 82,
    origin: "Sierra Nevada de Santa Marta, Colombia",
    vintage: "Reserve 2025",
    roastProfile: "Slow Micro-Batch Infusion",
    priceNote: "Chest of 12 Hand-Sculpted Spheres",
    tagline: "Spheres of pure nocturnal indulgence dusted with mineral ash and gold.",
    heroImage: "/images/product-nocturne.jpg",
    secondaryImage: "/images/craft-experience.jpg",
    detailImage: "/images/texture-macro.jpg",
    description:
      "NOCTURNE is a collection of 12 hand-sculpted chocolate spheres. Beneath an impossibly thin dark shell lies a ganache of single-estate Colombian cacao, wild mountain honey, and a whisper of botanical smoke, hand-finished in 24-karat gold dust.",
    story:
      "Conceived as an evening ritual to be shared in silence, NOCTURNE demands to be enjoyed at precisely 21°C. Each sphere breaks cleanly against the roof of the mouth, releasing a cascade of warm aromatic oils that coat the senses in a quiet reverie of pure indulgence.",
    tastingNotes: ["Dark Wild Honey", "Cardamom Cream", "Subtle Peat", "Bitter Cocoa Dust", "Raw Vanilla"],
    aromaNotes: ["Beeswax", "Forest Pine", "Bourbon Cask", "Dark Chocolate"],
    pairingSuggestions: ["Armagnac Hors d'Âge", "Japanese Green Gyokuro", "Aged Tawny Port"],
    sensoryScores: {
      intensity: 85,
      roast: 75,
      fruitiness: 60,
      bitterness: 65,
      silkenMouthfeel: 98,
      lingeringFinish: 90,
    },
    craftNotes: [
      "Hand-rolled by senior chocolatiers in limited sets",
      "Infused with rare unheated forest honey",
      "Coated in 24-karat edible antique gold leaf",
      "Kept in humidity-controlled obsidian glass containers"
    ],
    dimensions: "12 Spheres / 220mm × 140mm casket",
    netWeight: "140 grams (4.93 oz)",
    servings: "12 individual private indulgences",
  },
  {
    id: "solstice",
    slug: "solstice",
    name: "SOLSTICE",
    subtitle: "The Pure Cacao Tablet",
    edition: "Botanical Series Nº 06",
    cacaoPercentage: 100,
    origin: "Beni River Basin, Bolivia",
    vintage: "Wild Harvest 2025",
    roastProfile: "Zero-Sugar Raw Stone Grind",
    priceNote: "Presented in Custom Black Linen Folio",
    tagline: "The raw, unadulterated essence of cacao in its ultimate philosophical form.",
    heroImage: "/images/product-solstice.jpg",
    secondaryImage: "/images/hero-specimen.jpg",
    detailImage: "/images/product-obscura.jpg",
    description:
      "SOLSTICE is for the purist who seeks the untamed botanical truth of the cacao tree. Formulated without a single gram of added sugar, its richness stems entirely from natural heirloom cacao fats and 120 hours of continuous stone conching.",
    story:
      "Gathered by indigenous river communities from wild Beniano cacao trees accessible only by dugout canoes during high-water season, Solstice is chocolate stripped of all commercial distraction. It is a profound, grounding taste of the prehistoric earth.",
    tastingNotes: ["Roasted Walnuts", "Dried Sour Cherries", "Charred Sourdough", "Mineral Slate", "Bitter Espresso Crema"],
    aromaNotes: ["Wet Granite", "Cacao Husk", "Earth after Rain", "Dark Cocoa Butter"],
    pairingSuggestions: ["Double Espresso", "Smoky Laphroaig 10", "Aged Barolo"],
    sensoryScores: {
      intensity: 100,
      roast: 90,
      fruitiness: 50,
      bitterness: 90,
      silkenMouthfeel: 78,
      lingeringFinish: 100,
    },
    craftNotes: [
      "100% pure cacao liquor and wild cacao butter",
      "Zero added sugar, lecithin, or artificial essences",
      "Conched 120 hours to naturally aerate volatile acids",
      "Sealed in vacuum-grade Japanese washi paper"
    ],
    dimensions: "160mm × 80mm × 10mm",
    netWeight: "75 grams (2.64 oz)",
    servings: "Intended for small, measured tasting rituals",
  },
];

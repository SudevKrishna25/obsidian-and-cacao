export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  excerpt: string;
  leadParagraph: string;
  sections: {
    heading: string;
    content: string[];
    quote?: string;
  }[];
  relatedSlugs: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "the-language-of-dark-chocolate",
    slug: "the-language-of-dark-chocolate",
    title: "The Language of Dark Chocolate",
    subtitle: "Deconstructing the sensory lexicon of high-percentage cacao",
    category: "Terroir & Tasting",
    date: "November 2025",
    readTime: "6 min read",
    author: "Atelier Tasting Council",
    heroImage: "/images/journal-language.jpg",
    excerpt:
      "To taste exceptional chocolate is not to consume sweetness; it is to decipher the geological memory of soil, sunlight, and careful fermentation.",
    leadParagraph:
      "For centuries, commercial confectionery conditioned the world to understand chocolate through the prism of sugar and milk solids. When one strips away these additions, chocolate reveals itself as one of the most chemically complex botanical substances on earth—harbouring over six hundred volatile aromatic compounds, far eclipsing even the finest vintage wines.",
    sections: [
      {
        heading: "The Three Thresholds of Melting",
        content: [
          "Human body temperature rests at 37°C, while cocoa butter begins its crystalline breakdown at precisely 34°C. This three-degree margin is where luxury happens. When a square of tempered chocolate is placed upon the tongue, it should never be immediately chewed.",
          "As the cocoa butter yields, the primary top notes—bright acetic acidity and high floral volatiles—awaken first. Within five seconds, the secondary mid-palate unfolds: roasted hazelnuts, dark forest honey, tobacco leaf, and mineral earth. Finally, as the fat coats the palate, the tertiary finish emerges, lingering for minutes with comforting bitterness and resonant cacao depth."
        ],
        quote: "True chocolate does not ask to be consumed; it invites you to pause time itself."
      },
      {
        heading: "Terroir and the Micro-Ecosystem",
        content: [
          "Just as Pinot Noir takes its soul from Burgundian limestone, the Criollo bean of the Peruvian Amazon takes its soul from centuries of fallen leaves, river sediments, and dense rainforest canopies.",
          "When cacao grows beneath shade trees like cedar and wild fig, the subterranean mycorrhizal networks transfer botanical nuances directly to the developing pod. What the palate detects as subtle cedar smoke or dried dark fruits is not an artisan infusion—it is the literal voice of the forest."
        ]
      },
      {
        heading: "The Ritual of Restraint",
        content: [
          "In our atelier, we advocate for the Japanese aesthetic concept of 'Shibui'—subtle, unobtrusive beauty. A single piece of 85% or 92% dark chocolate, enjoyed in quiet contemplative silence alongside pure water or an austere tea, produces a sensory satisfaction that an entire box of standard confections cannot rival."
        ]
      }
    ],
    relatedSlugs: ["a-study-in-texture-and-taste", "the-ritual-of-indulgence"]
  },
  {
    id: "a-study-in-texture-and-taste",
    slug: "a-study-in-texture-and-taste",
    title: "A Study in Texture and Taste",
    subtitle: "The thermodynamics of crystallization and granite conching",
    category: "Craftsmanship & Science",
    date: "October 2025",
    readTime: "8 min read",
    author: "Master Chocolatier H. Vance",
    heroImage: "/images/journal-science.jpg",
    excerpt:
      "A deep examination into why crystal Form V separates magnificent chocolate from the ordinary, and how ninety-six hours of stone friction creates silken perfection.",
    leadParagraph:
      "The distinction between pleasant chocolate and unforgettable chocolate lies not merely in the selection of the bean, but in the micro-physics of crystallization. To master chocolate is to become a student of polymorphism.",
    sections: [
      {
        heading: "The Quest for Form V Crystals",
        content: [
          "Cocoa butter can crystallize into six distinct polymorphic arrangements, denoted by Roman numerals I through VI. Only Form V—the beta crystal—possesses the precise molecular symmetry required for the audible, clean snap and mirror-like satin sheen characteristic of haute chocolaterie.",
          "Achieving Form V requires exact thermodynamic choreography: elevating the molten mass to 45°C to erase all prior crystal memory, dropping the temperature rapidly to 27°C while agitating the emulsion on cold obsidian slabs to initiate seed crystals, and gently warming it back to 31.5°C before casting."
        ],
        quote: "A single degree of error in tempering is the difference between dull chalk and polished obsidian."
      },
      {
        heading: "The Alchemy of 96-Hour Conching",
        content: [
          "Invented in 1879 by Rodolphe Lindt, the conche machine transforms grainy cocoa mass into an ethereal emulsion. However, modern industrial production reduces this crucial phase to a hurried four hours under high shear.",
          "In our atelier, we retain granite roller melangeurs that stroke the cacao mass continuously for up to 96 hours. Over these four days, harsh volatile acetic acids evaporate into the atmosphere, while the cocoa particles are ground down below 12 microns—smaller than the threshold of human tactile perception on the tongue."
        ]
      }
    ],
    relatedSlugs: ["the-language-of-dark-chocolate", "the-ritual-of-indulgence"]
  },
  {
    id: "the-ritual-of-indulgence",
    slug: "the-ritual-of-indulgence",
    title: "The Ritual of Indulgence",
    subtitle: "Rediscovering quiet luxury in an accelerated world",
    category: "Philosophy",
    date: "September 2025",
    readTime: "5 min read",
    author: "Obsidian Editorial Board",
    heroImage: "/images/journal-ritual.jpg",
    excerpt:
      "In a culture obsessed with speed and volume, true luxury is the deliberate slowing of perception. An essay on ritual, darkness, and solitary pleasure.",
    leadParagraph:
      "We live in an era of relentless sensory saturation. Every screen demands attention; every moment is monetized for urgency. In such a landscape, the ancient Aztec veneration of cacao as 'xocolātl'—a sacred, introspective elixir—assumes profound contemporary urgency.",
    sections: [
      {
        heading: "The Architecture of a Moment",
        content: [
          "Consider the physical space in which one experiences fine chocolate. The lighting should be low and warm, casting long ambient shadows. The air should be still. The hands, freed from digital devices, hold a piece of cool, dark chocolate.",
          "Before the piece reaches the lips, one breaks it near the ear. The crystalline snap reports the integrity of the temper. Next, one inhales the bouquet: notes of dried violet, toasted cedar, and dark earth rise into the olfactory channels. Only then does the chocolate touch the tongue."
        ],
        quote: "Indulgence is not consumption; it is presence."
      },
      {
        heading: "Darkness as a Sanctuary",
        content: [
          "Darkness in luxury is often misunderstood as absence. In reality, darkness is presence—it is the velvet canvas against which light and flavor become incandescent. By eliminating the blinding glare of sugary distraction, Obsidian & Cacao invites you into a sanctuary of deep, warm contemplation."
        ]
      }
    ],
    relatedSlugs: ["the-language-of-dark-chocolate", "a-study-in-texture-and-taste"]
  }
];

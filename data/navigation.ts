export interface NavItem {
  label: string;
  href: string;
  subtitle?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "The Collection", href: "/collection", subtitle: "Signature Editions" },
  { label: "The Atelier", href: "/atelier", subtitle: "Our Sanctuary of Craft" },
  { label: "Our Philosophy", href: "/philosophy", subtitle: "The Beauty of Restraint" },
  { label: "Journal", href: "/journal", subtitle: "Notes on Cacao" },
  { label: "Private Enquiries", href: "/contact", subtitle: "Bespoke & Concierge" },
];

export const FOOTER_LINKS = {
  collection: [
    { label: "Obscura 92%", href: "/collection/obscura" },
    { label: "Noir 85%", href: "/collection/noir" },
    { label: "Velvet 78%", href: "/collection/velvet" },
    { label: "Éclat 88%", href: "/collection/eclat" },
    { label: "Nocturne Truffes", href: "/collection/nocturne" },
    { label: "Solstice 100%", href: "/collection/solstice" },
  ],
  atelier: [
    { label: "The Cacao Groves", href: "/atelier" },
    { label: "Granite Conching", href: "/atelier" },
    { label: "Obsidian Tempering", href: "/atelier" },
    { label: "Private Tastings", href: "/contact" },
  ],
  journal: [
    { label: "The Language of Dark Chocolate", href: "/journal/the-language-of-dark-chocolate" },
    { label: "A Study in Texture and Taste", href: "/journal/a-study-in-texture-and-taste" },
    { label: "The Ritual of Indulgence", href: "/journal/the-ritual-of-indulgence" },
  ],
  privateConcierge: [
    { label: "Bespoke Curation", href: "/contact" },
    { label: "Private Atelier Visits", href: "/contact" },
    { label: "Corporate Gifting", href: "/contact" },
    { label: "Collector's Vault", href: "/contact" },
  ],
};

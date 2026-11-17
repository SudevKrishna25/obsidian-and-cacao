import Hero from "@/components/home/Hero";
import ManifestoPinned from "@/components/home/ManifestoPinned";
import ChocolateTransformation from "@/components/home/ChocolateTransformation";
import CraftsmanshipPinned from "@/components/home/CraftsmanshipPinned";
import HorizontalCollection from "@/components/home/HorizontalCollection";
import TypographicImmersion from "@/components/home/TypographicImmersion";
import EditorialGallery from "@/components/home/EditorialGallery";
import JournalPreview from "@/components/home/JournalPreview";
import FinalBrandReveal from "@/components/home/FinalBrandReveal";

export default function HomePage() {
  return (
    <>
      {/* Scroll Sequence A: The Hero & Collapse */}
      <Hero />

      {/* Scroll Sequence B: The Pinned Manifesto Reveal */}
      <ManifestoPinned />

      {/* Scroll Sequence C: The Chocolate Transformation */}
      <ChocolateTransformation />

      {/* Scroll Sequence D: Pinned Craftsmanship Story (4 Chapters) */}
      <CraftsmanshipPinned />

      {/* Scroll Sequence E: Horizontal Collection Experience */}
      <HorizontalCollection />

      {/* Scroll Sequence F: Typographic Immersion */}
      <TypographicImmersion />

      {/* Scroll Sequence G: The Editorial Gallery with Custom Clip Paths */}
      <EditorialGallery />

      {/* Gazette Dispatches */}
      <JournalPreview />

      {/* Scroll Sequence H: The Final Brand Reveal */}
      <FinalBrandReveal />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageLightbox from "@/components/animations/ImageLightbox";
import { SITE_CONTENT } from "@/data/siteContent";
import { Maximize2 } from "lucide-react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

export default function EditorialGallery() {
  const { gallery } = SITE_CONTENT;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
    title: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll(".gallery-item");

      items.forEach((item, index) => {
        const speed = 20 + (index % 3) * 15;

        gsap.fromTo(
          item,
          { y: speed },
          {
            y: -speed * 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.4,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-obsidian-surface py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="VISUAL CAMPAIGN"
          title="SHADOW &amp; SUBSTANCE"
          subtitle="An intimate photographic study in texture, gloss, mineral fracture, and the deep aesthetics of cacao."
          align="left"
        />

        {/* Asymmetrical Editorial Gallery Grid with Custom Clip Path & Parallax */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() =>
                setActiveImage({
                  src: item.image,
                  alt: item.title,
                  title: item.title,
                  caption: item.caption,
                })
              }
              data-cursor-text="VIEW"
              className={`gallery-item group relative overflow-hidden rounded-sm bg-charcoal/40 border border-gold/15 hover:border-gold/50 transition-all duration-500 cursor-pointer shadow-luxury will-change-transform ${item.span}`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-espresso-dark`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-50 transition-opacity" />

                {/* Touch-Friendly & Hover Reveal Overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-xs text-gold">0{idx + 1}</span>
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-obsidian/80 text-gold border border-gold/30">
                      <Maximize2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </div>

                  <div className="bg-obsidian/60 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-2 md:p-0 rounded">
                    <h3 className="font-serif text-base sm:text-lg md:text-xl text-ivory">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-champagne/85 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <ImageLightbox
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          imageSrc={activeImage.src}
          imageAlt={activeImage.alt}
          title={activeImage.title}
          caption={activeImage.caption}
        />
      )}
    </section>
  );
}

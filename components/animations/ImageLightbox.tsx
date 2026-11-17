"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  caption,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Lightbox"}
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold/30 bg-obsidian/90 text-ivory hover:border-gold hover:text-gold transition-colors focus:outline-none"
      >
        <X className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div
        className="relative max-h-[85vh] max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[72vh] overflow-hidden rounded border border-gold/20 shadow-2xl bg-espresso-dark">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {(title || caption) && (
          <div className="mt-4 text-center max-w-xl">
            {title && (
              <h4 className="font-serif text-lg tracking-widest text-ivory">
                {title}
              </h4>
            )}
            {caption && (
              <p className="mt-1 font-sans text-xs tracking-wider text-ash">
                {caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If caused by stale chunks after a new deployment, auto-reload to fetch fresh assets
    if (
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Failed to fetch") ||
      error?.message?.includes("dynamically imported module")
    ) {
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center p-6 text-center text-ivory relative overflow-hidden">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="font-sans text-[10px] uppercase tracking-ritual text-gold font-medium">
            ATELIER DE CHOCOLAT NOIR • GENÈVE
          </span>
          <Sparkles className="h-3.5 w-3.5 text-gold" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide leading-tight mb-4">
          A MOMENTARY CACAO CALIBRATION
        </h1>

        <p className="font-sans text-xs sm:text-sm text-ash leading-relaxed mb-8 max-w-md font-light">
          Our digital atelier experienced a temporary connection anomaly. Please refresh to restore the sensory experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              } else {
                reset();
              }
            }}
            className="w-full sm:w-auto font-sans text-xs uppercase tracking-ritual px-7 py-3.5 bg-espresso border border-gold/40 text-ivory hover:border-gold hover:bg-cacao-dark transition-all rounded-sm shadow-gold-subtle"
          >
            Refresh Atelier
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto font-sans text-xs uppercase tracking-ritual px-7 py-3.5 border border-ivory/20 text-champagne hover:text-ivory hover:border-gold/60 transition-all rounded-sm"
          >
            Return to Sanctuary
          </Link>
        </div>
      </div>
    </div>
  );
}

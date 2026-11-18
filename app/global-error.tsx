"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
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
    <html lang="en">
      <body className="bg-[#100F0E] text-[#EAE1D5] min-h-screen flex flex-col items-center justify-center p-6 text-center font-serif">
        <h1 className="text-3xl sm:text-4xl mb-4 tracking-wide">
          Obsidian &amp; Cacao
        </h1>
        <p className="text-sm text-[#898075] max-w-md mb-8 leading-relaxed font-sans">
          The digital atelier encountered an unexpected condition. Please reload to resume the session.
        </p>
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.reload();
            } else {
              reset();
            }
          }}
          className="font-sans text-xs uppercase tracking-widest px-7 py-3.5 bg-[#39271F] border border-[#B39154] text-[#EAE1D5] rounded-sm"
        >
          Reload Session
        </button>
      </body>
    </html>
  );
}

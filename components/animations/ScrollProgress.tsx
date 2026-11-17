"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (windowHeight > 0 && barRef.current) {
            const progressRatio = Math.min(1, Math.max(0, totalScroll / windowHeight));
            barRef.current.style.transform = `scaleX(${progressRatio})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-gold/40 via-gold to-champagne origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

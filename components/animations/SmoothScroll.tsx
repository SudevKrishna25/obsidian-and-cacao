"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if in browser and respect reduced motion safely
    if (typeof window === "undefined") return;

    try {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const lenis = new Lenis({
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        syncTouch: false,
      });
      lenisRef.current = lenis;

      // Safely synchronize Lenis with GSAP ScrollTrigger
      const onLenisScroll = () => {
        try {
          ScrollTrigger.update();
        } catch {}
      };
      lenis.on("scroll", onLenisScroll);

      const updateTicker = (time: number) => {
        try {
          lenis.raf(time * 1000);
        } catch {}
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      const handleResize = () => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      };
      window.addEventListener("resize", handleResize, { passive: true });

      const initTimer = setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 200);

      return () => {
        clearTimeout(initTimer);
        window.removeEventListener("resize", handleResize);
        gsap.ticker.remove(updateTicker);
        try {
          lenis.destroy();
        } catch {}
        lenisRef.current = null;
      };
    } catch {
      // In case of unsupported browser features, fallback smoothly to native scrolling
    }
  }, []);

  // When pathname changes (route navigation), safely reset scroll to top and refresh ScrollTrigger
  useEffect(() => {
    try {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);

      const routeTimer = setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 150);

      return () => clearTimeout(routeTimer);
    } catch {}
  }, [pathname]);

  return <>{children}</>;
}

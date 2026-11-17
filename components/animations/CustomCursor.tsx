"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch screen or reduced motion
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchDevice || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if target has interactive parent or custom cursor text
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
        );
        const cursorDataEl = target.closest("[data-cursor-text]");
        const text = cursorDataEl?.getAttribute("data-cursor-text");

        setIsHovering(!!interactive);
        setCursorText(text || null);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const animateRing = () => {
      // Smooth lerp for ring follower
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold transition-opacity duration-300 ${
          isVisible ? "opacity-90" : "opacity-0"
        } ${cursorText ? "scale-0" : "scale-100"}`}
        style={{ willChange: "transform" }}
      />

      {/* Atmospheric Trailing Ring & Contextual Badge */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText
            ? "-ml-9 -mt-9 h-[72px] w-[72px] border border-gold/60 bg-obsidian/90 backdrop-blur-sm"
            : isHovering
            ? "-ml-5 -mt-5 h-10 w-10 border border-gold/50 bg-gold/10"
            : "-ml-3 -mt-3 h-6 w-6 border border-gold/30 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="font-sans text-[9px] uppercase tracking-widest text-ivory font-medium">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}

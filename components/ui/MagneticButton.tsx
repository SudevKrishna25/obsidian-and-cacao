"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { isReducedMotion } from "@/lib/gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  strength = 0.28,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || isReducedMotion()) return;

    // Only apply on fine pointer devices (desktop)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let contentTargetX = 0;
    let contentTargetY = 0;
    let contentCurrentX = 0;
    let contentCurrentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      targetX = deltaX * strength;
      targetY = deltaY * strength;
      contentTargetX = deltaX * (strength * 0.4);
      contentTargetY = deltaY * (strength * 0.4);
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      contentTargetX = 0;
      contentTargetY = 0;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      contentCurrentX += (contentTargetX - contentCurrentX) * 0.15;
      contentCurrentY += (contentTargetY - contentCurrentY) * 0.15;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(${contentCurrentX}px, ${contentCurrentY}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-ritual",
    md: "px-7 py-3.5 text-xs tracking-ritual",
    lg: "px-9 py-4 text-xs tracking-ritual",
  }[size];

  const variantClasses = {
    primary:
      "bg-espresso border border-gold/40 text-ivory hover:border-gold hover:bg-cacao-dark hover:shadow-gold-subtle active:scale-[0.98]",
    secondary:
      "bg-transparent border border-ivory/25 text-ivory hover:border-gold/80 hover:text-gold active:scale-[0.98]",
    outline:
      "bg-obsidian/80 backdrop-blur-sm border border-gold/30 text-champagne hover:border-gold hover:text-ivory active:scale-[0.98]",
    text: "p-0 bg-transparent text-champagne hover:text-ivory underline-offset-8 hover:underline active:opacity-80",
  }[variant];

  const content = (
    <span
      ref={contentRef}
      className="relative z-10 flex items-center justify-center gap-3 transition-transform duration-200"
    >
      <span className="font-sans font-medium uppercase">{children}</span>
      {icon && (
        <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </span>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-sans cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold/50",
    variant !== "text" && sizeClasses,
    variantClasses,
    disabled && "opacity-50 pointer-events-none",
    className
  );

  return (
    <div ref={buttonRef} className="inline-block will-change-transform">
      {href ? (
        <Link href={href} className={baseClasses} target={target} rel={rel}>
          {content}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClasses}
        >
          {content}
        </button>
      )}
    </div>
  );
}

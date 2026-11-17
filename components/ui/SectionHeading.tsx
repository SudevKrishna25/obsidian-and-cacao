import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "asymmetric";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "asymmetric" && "items-start text-left md:max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-6 bg-gold/60" />
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-ritual text-gold/90 font-medium">
            {eyebrow}
          </span>
          {align === "center" && <span className="h-[1px] w-6 bg-gold/60" />}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-ivory tracking-wide leading-[1.15]",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 font-sans text-sm md:text-base text-ash leading-relaxed max-w-xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

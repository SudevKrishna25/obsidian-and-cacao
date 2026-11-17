import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
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
}

export default function GoldButton({
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
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-ritual",
    md: "px-7 py-3.5 text-xs tracking-ritual",
    lg: "px-9 py-4 text-xs tracking-ritual",
  }[size];

  const variantClasses = {
    primary:
      "bg-espresso border border-gold/40 text-ivory hover:border-gold hover:bg-cacao-dark hover:shadow-gold-subtle active:scale-[0.98]",
    secondary:
      "bg-transparent border border-ivory/20 text-ivory hover:border-gold/80 hover:text-gold active:scale-[0.98]",
    outline:
      "bg-obsidian/70 backdrop-blur-sm border border-gold/30 text-champagne hover:border-gold hover:text-ivory active:scale-[0.98]",
    text: "p-0 bg-transparent text-champagne hover:text-ivory underline-offset-8 hover:underline active:opacity-80",
  }[variant];

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
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

  if (href) {
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}

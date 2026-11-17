"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FOOTER_LINKS } from "@/data/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid private address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <footer className="relative bg-obsidian-deep border-t border-gold/15 text-ivory pt-20 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Section: Wordmark and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block focus:outline-none">
                <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-ivory block">
                  OBSIDIAN <span className="font-serif italic text-gold font-normal">&amp;</span> CACAO
                </span>
                <span className="font-sans text-[9px] uppercase tracking-ritual text-gold/70 mt-1 block">
                  ATELIER DE CHOCOLAT NOIR • GENÈVE
                </span>
              </Link>
              <p className="mt-6 font-sans text-xs md:text-sm text-ash leading-relaxed max-w-md">
                Obsidian &amp; Cacao represents the darker, richer side of indulgence. Crafted in shadow,
                stone-conched with patience, and presented as an art form for design-conscious connoisseurs.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6 text-[10px] uppercase tracking-ritual text-champagne/70">
              <span>Single Origin</span>
              <span>•</span>
              <span>Granite Conched</span>
              <span>•</span>
              <span>Hand Tempered</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-charcoal/30 border border-gold/20 p-8 md:p-10 rounded">
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold">
              Private Gazette
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-ivory mt-2">
              Receive Seasonal Harvest Dispatches
            </h3>
            <p className="font-sans text-xs text-ash mt-2 max-w-lg">
              Subscribers receive private notifications prior to seasonal vintage releases, rare micro-lot allocations,
              and private atelier tasting invitations.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6">
              {status === "success" ? (
                <div className="flex items-center gap-3 py-3 px-4 bg-espresso/60 border border-gold/50 rounded text-xs text-champagne">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>You have been entered into the private dispatch registry.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter private email address"
                      aria-label="Private email address"
                      className="w-full bg-obsidian border border-white/10 px-4 py-3 text-xs text-ivory placeholder-ash/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 border border-gold/40 bg-espresso px-6 py-3 font-sans text-[10px] uppercase tracking-ritual text-ivory hover:border-gold hover:bg-cacao transition-colors duration-300 disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Entering..." : "Subscribe"}</span>
                    <ArrowRight className="h-3 w-3 text-gold" />
                  </button>
                </div>
              )}
              {status === "error" && (
                <p className="mt-2 font-sans text-xs text-red-400">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/5">
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold mb-5">
              The Collection
            </h4>
            <ul className="space-y-3 font-sans text-xs text-ash">
              {FOOTER_LINKS.collection.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold mb-5">
              The Atelier
            </h4>
            <ul className="space-y-3 font-sans text-xs text-ash">
              {FOOTER_LINKS.atelier.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold mb-5">
              Journal Notes
            </h4>
            <ul className="space-y-3 font-sans text-xs text-ash">
              {FOOTER_LINKS.journal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-ritual text-gold mb-5">
              Private Concierge
            </h4>
            <ul className="space-y-3 font-sans text-xs text-ash">
              {FOOTER_LINKS.privateConcierge.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-ash/60">
          <p>© {new Date().getFullYear()} OBSIDIAN &amp; CACAO. ALL RIGHTS RESERVED. ATELIER DE LUXE CONCEPT PORTFOLIO.</p>
          <div className="flex items-center space-x-6">
            <span className="text-gold/80">GENEVA • ZURICH • PARIS</span>
            <span>•</span>
            <Link href="/philosophy" className="hover:text-champagne transition-colors">
              Brand Philosophy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-champagne transition-colors">
              Private Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

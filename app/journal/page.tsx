"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Terroir & Tasting", "Craftsmanship & Science", "Philosophy"];

  const filteredArticles = JOURNAL_ARTICLES.filter((article) => {
    if (filter === "all") return true;
    return article.category === filter;
  });

  const featured = JOURNAL_ARTICLES[0];
  const rest = filteredArticles.filter((a) => a.id !== featured.id);

  return (
    <div className="bg-obsidian min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-[550px] w-[550px] rounded-full bg-gold/5 blur-[170px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <SectionHeading
            eyebrow="OBSIDIAN GAZETTE"
            title="NOTES FROM THE WORLD OF CACAO"
            subtitle="Essays, sensory dispatches, and botanical investigations into the darker dimensions of chocolate, craft, and sensory presence."
            align="left"
            className="mb-6 sm:mb-8"
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-sans text-[10px] md:text-xs uppercase tracking-ritual px-3.5 sm:px-4 py-2 rounded-sm border transition-all duration-300 focus:outline-none ${
                    active
                      ? "bg-espresso border-gold text-ivory shadow-gold-subtle"
                      : "bg-charcoal/30 border-white/10 text-ash hover:border-gold/40 hover:text-champagne"
                  }`}
                >
                  {cat === "all" ? "All Dispatches" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead Featured Article */}
        {filter === "all" && (
          <article
            data-cursor-text="READ"
            className="group mb-14 sm:mb-20 bg-charcoal/30 border border-gold/25 hover:border-gold/60 rounded-sm overflow-hidden transition-all duration-500 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            <div className="lg:col-span-7 relative h-[260px] min-[390px]:h-[320px] sm:h-[480px] w-full overflow-hidden bg-espresso-dark">
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 sm:top-6 sm:left-6 font-sans text-[8px] sm:text-[9px] uppercase tracking-ritual text-champagne bg-obsidian/90 backdrop-blur-sm px-3 sm:px-3.5 py-1.5 border border-gold/30 rounded">
                Lead Dispatch • {featured.category}
              </span>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-ash/80 mb-3 sm:mb-4">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold/60" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-wide group-hover:text-gold transition-colors leading-snug">
                  <Link href={`/journal/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>
                <p className="font-serif italic text-sm sm:text-base text-champagne/90 mt-1.5 sm:mt-2">
                  {featured.subtitle}
                </p>

                <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-ash line-clamp-3 leading-relaxed font-light">
                  {featured.excerpt}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                <Link
                  href={`/journal/${featured.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-gold hover:text-champagne transition-colors"
                >
                  <span>Read Complete Essay</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Articles Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(filter === "all" ? rest : filteredArticles).map((article) => (
            <article
              key={article.id}
              data-cursor-text="READ"
              className="group flex flex-col justify-between bg-charcoal/30 border border-gold/15 hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 shadow-luxury"
            >
              <div>
                <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden bg-espresso-dark">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center filter brightness-[0.85] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
                  <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 font-sans text-[8px] sm:text-[9px] uppercase tracking-ritual text-champagne bg-obsidian/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 border border-gold/25 rounded">
                    {article.category}
                  </span>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-2.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-ash/80 mb-2 sm:mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gold/60" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory tracking-wide group-hover:text-gold transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-2 sm:mt-3 font-sans text-xs sm:text-sm text-ash line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 pt-2">
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-champagne group-hover:text-gold transition-colors"
                >
                  <span>Read Essay</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

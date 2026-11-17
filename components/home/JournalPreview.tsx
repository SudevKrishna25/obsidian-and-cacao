import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalPreview() {
  const articles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="relative bg-obsidian py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="OBSIDIAN GAZETTE"
            title="NOTES FROM THE WORLD OF CACAO."
            subtitle="Essays, sensory dispatches, and botanical investigations into the darker dimensions of chocolate."
            align="left"
            className="mb-0"
          />

          <GoldButton href="/journal" variant="secondary" size="md">
            View All Essays
          </GoldButton>
        </div>

        {/* 3-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <article
              key={article.id}
              data-cursor-text="READ"
              className="group flex flex-col justify-between bg-charcoal/30 border border-gold/15 hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 shadow-luxury"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-espresso-dark">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center filter brightness-[0.85] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 font-sans text-[9px] uppercase tracking-ritual text-champagne bg-obsidian/90 backdrop-blur-sm px-3 py-1 border border-gold/25 rounded">
                    {article.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-ash/80 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gold/60" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ivory tracking-wide group-hover:text-gold transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 font-sans text-xs sm:text-sm text-ash line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Story link */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2">
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
    </section>
  );
}

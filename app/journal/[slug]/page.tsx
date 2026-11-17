import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Sparkles, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function JournalArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const currentIndex = JOURNAL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? JOURNAL_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < JOURNAL_ARTICLES.length - 1 ? JOURNAL_ARTICLES[currentIndex + 1] : null;

  const related = JOURNAL_ARTICLES.filter((a) => article.relatedSlugs.includes(a.slug));

  return (
    <article className="bg-obsidian min-h-screen pt-32 pb-32 px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[550px] w-[700px] rounded-full bg-gold/5 blur-[170px]"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-ritual text-ash hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-gold" />
            <span>Return to Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-gold/60" />
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold font-medium">
              {article.category}
            </span>
            <span className="h-[1px] w-6 bg-gold/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-[1.1]">
            {article.title}
          </h1>

          <p className="mt-4 font-serif italic text-lg sm:text-xl text-champagne max-w-2xl mx-auto">
            {article.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-ash">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-gold/60" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[360px] sm:h-[500px] w-full overflow-hidden rounded-sm border border-gold/25 bg-espresso shadow-luxury mb-14">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-center filter brightness-[0.88] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none">
          {/* Lead Paragraph */}
          <p className="font-serif text-xl sm:text-2xl text-ivory leading-relaxed font-light mb-10 pb-8 border-b border-white/10">
            {article.leadParagraph}
          </p>

          {/* Structured Sections */}
          <div className="space-y-12">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
                  {section.heading}
                </h2>

                {section.content.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-sm sm:text-base text-ash leading-relaxed font-light"
                  >
                    {p}
                  </p>
                ))}

                {section.quote && (
                  <blockquote className="my-8 p-6 md:p-8 bg-charcoal/40 border-l-2 border-gold rounded-r-sm">
                    <p className="font-serif italic text-lg sm:text-xl text-champagne">
                      &ldquo;{section.quote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Article Author Footer Note */}
        <div className="mt-16 p-8 bg-charcoal/30 border border-gold/20 rounded-sm flex items-center gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-espresso border border-gold/40 text-gold">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase tracking-ritual text-gold block">
              Published by {article.author}
            </span>
            <p className="font-sans text-xs text-ash mt-0.5">
              The Obsidian Tasting Council meets in Geneva to catalog seasonal vintage harvests and analyze volatile flavour compounds.
            </p>
          </div>
        </div>

        {/* Prev / Next Article Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          {prevArticle ? (
            <Link
              href={`/journal/${prevArticle.slug}`}
              className="group flex flex-col text-left text-xs text-ash hover:text-ivory transition-colors"
            >
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold">
                &larr; Previous Dispatch
              </span>
              <span className="font-serif text-base text-ivory group-hover:text-gold transition-colors mt-1 line-clamp-1">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle && (
            <Link
              href={`/journal/${nextArticle.slug}`}
              className="group flex flex-col text-right text-xs text-ash hover:text-ivory transition-colors"
            >
              <span className="font-sans text-[9px] uppercase tracking-ritual text-gold">
                Next Dispatch &rarr;
              </span>
              <span className="font-serif text-base text-ivory group-hover:text-gold transition-colors mt-1 line-clamp-1">
                {nextArticle.title}
              </span>
            </Link>
          )}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <h3 className="font-serif text-2xl text-ivory mb-8">
              Companion Essays
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/journal/${item.slug}`}
                  className="group block p-6 bg-charcoal/20 border border-gold/15 hover:border-gold/50 rounded transition-all"
                >
                  <span className="font-sans text-[9px] uppercase tracking-ritual text-gold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors mt-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-ash mt-2 line-clamp-2">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { journalEntries } from '@/data/journal';
import { localizeJournalEntry } from '@/lib/localize-journal';
import JournalFeature from '@/components/JournalFeature';
import type { Locale } from '@/types';

export default function TravelJournalPage() {
  const t = useTranslations('journal');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  const featured = localizeJournalEntry(journalEntries[0], locale);
  const rest = journalEntries.slice(1);

  return (
    <div className="bg-kr-bg">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] flex items-end overflow-hidden">
        <Image
          src={featured.coverImage}
          alt={featured.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />

        <div className="relative container-editorial pb-14 lg:pb-20 w-full">
          <nav className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6">
            <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">{tCommon('breadcrumbHome')}</Link>
            <span>/</span>
            <span className="text-white/70">{t('title')}</span>
          </nav>

          <p className="section-label text-white/50 mb-4 tracking-[0.25em]">
            {t('heroLabel')}
          </p>
          <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="text-white/60 text-base lg:text-lg max-w-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5">
              {t('articlesCount', { count: journalEntries.length })}
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5">
              {t('fieldNotes')}
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5">
              {t('practicalGuides')}
            </span>
          </div>
        </div>
      </section>

      {/* ── ÖNE ÇIKAN YAZI ─────────────────────────────────── */}
      <section className="py-0 bg-white">
        <div className="container-editorial py-10 lg:py-14">
          <p className="section-label mb-6">{t('featuredStory')}</p>
        </div>
        <JournalFeature entry={featured} featured />
      </section>

      {/* ── DİĞER YAZILAR ──────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-kr-bg">
        <div className="container-editorial">
          <p className="section-label mb-10">{t('allArticles')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-kr-border">
            {rest.map((entry) => (
              <JournalFeature key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ETİKETLER ──────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-kr-border">
        <div className="container-editorial">
          <p className="section-label mb-6">{t('topics')}</p>
          <div className="flex flex-wrap gap-2">
            {(t.raw('tags') as string[]).map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-kr-border text-xs font-medium text-kr-muted hover:border-kr-charcoal hover:text-kr-charcoal transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

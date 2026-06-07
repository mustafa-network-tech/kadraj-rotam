import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getJournalEntryBySlug, journalEntries } from '@/data/journal';
import { localizeJournalEntry } from '@/lib/localize-journal';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string; locale: string };
}

const dateLocales: Record<string, string> = {
  tr: 'tr-TR',
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
};

export async function generateStaticParams() {
  return journalEntries.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = getJournalEntryBySlug(params.slug);
  if (!entry) return {};
  const localized = localizeJournalEntry(entry, params.locale as Locale);
  return {
    title: localized.title,
    description: localized.excerpt,
  };
}

export default function JournalDetailPage({ params }: Props) {
  const entry = getJournalEntryBySlug(params.slug);
  if (!entry) notFound();

  const locale = useLocale() as Locale;
  const t = useTranslations('journal');
  const tNav = useTranslations('nav');
  const localized = localizeJournalEntry(entry, locale);

  const relatedEntries = journalEntries
    .filter((e) => e.slug !== entry.slug)
    .slice(0, 3)
    .map((e) => localizeJournalEntry(e, locale));

  const formattedDate = new Date(entry.date).toLocaleDateString(
    dateLocales[locale] ?? 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="bg-white">
      <div className="relative h-[65vh] min-h-[440px] max-h-[760px] overflow-hidden">
        <Image
          src={localized.coverImage}
          alt={localized.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 container-editorial pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-white/55 text-xs uppercase tracking-widest">
              <span>{localized.location}</span>
              <span>·</span>
              <span>{localized.readTime} {t('readTime')}</span>
              <span>·</span>
              <span>{formattedDate}</span>
            </div>
            <h1 className="editorial-heading text-3xl lg:text-5xl xl:text-6xl text-white leading-tight">
              {localized.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-editorial pt-8">
        <Link
          href={`/${locale}/travel-journal`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-kr-muted hover:text-kr-charcoal uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
          </svg>
          {tNav('travelJournal')}
        </Link>
      </div>

      <article className="container-editorial py-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-kr-slate text-lg lg:text-xl leading-relaxed font-medium mb-10 italic border-l-2 border-kr-amber pl-6">
            {localized.excerpt}
          </p>

          <div className="prose prose-slate max-w-none">
            {localized.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={i} className="editorial-heading text-xl text-kr-charcoal mt-10 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-kr-slate text-base leading-relaxed mb-5">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-kr-border flex flex-wrap gap-2">
            {localized.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium text-kr-muted border border-kr-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="py-16 lg:py-20 bg-kr-bg">
        <div className="container-editorial">
          <p className="section-label mb-10">{t('relatedArticles')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedEntries.map((e) => (
              <Link
                key={e.slug}
                href={`/${locale}/travel-journal/${e.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/2] overflow-hidden mb-4">
                  <Image
                    src={e.coverImage}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <p className="section-label mb-2">{e.location}</p>
                <p className="text-sm font-semibold text-kr-charcoal group-hover:text-kr-blue transition-colors line-clamp-2">
                  {e.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

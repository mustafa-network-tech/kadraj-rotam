import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { localizeJournalEntry } from '@/lib/localize-journal';
import type { JournalEntry, Locale } from '@/types';

interface JournalFeatureProps {
  entry: JournalEntry;
  featured?: boolean;
}

export default function JournalFeature({ entry, featured = false }: JournalFeatureProps) {
  const t = useTranslations('journal');
  const locale = useLocale() as Locale;
  const localized = localizeJournalEntry(entry, locale);

  if (featured) {
    return (
      <Link
        href={`/${locale}/travel-journal/${localized.slug}`}
        className="group block relative overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-kr-charcoal"
      >
        <Image
          src={localized.coverImage}
          alt={localized.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-overlay-full" />

        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label text-white/50">{localized.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="section-label text-white/50">
              {localized.readTime} {t('readTime')}
            </span>
          </div>
          <h2 className="editorial-heading text-2xl lg:text-4xl xl:text-5xl text-white max-w-3xl mb-4">
            {localized.title}
          </h2>
          <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-2xl line-clamp-2">
            {localized.excerpt}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
            {t('readMore')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${locale}/travel-journal/${localized.slug}`}
      className="group flex flex-col gap-0 overflow-hidden"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-kr-charcoal">
        <Image
          src={localized.coverImage}
          alt={localized.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="pt-5 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="section-label">{localized.location}</span>
          <span className="w-1 h-1 rounded-full bg-kr-border" />
          <span className="section-label">
            {localized.readTime} {t('readTime')}
          </span>
        </div>
        <h3 className="editorial-heading text-lg lg:text-xl text-kr-charcoal mb-3 line-clamp-2">
          {localized.title}
        </h3>
        <p className="text-kr-muted text-sm leading-relaxed line-clamp-2">
          {localized.excerpt}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-kr-charcoal uppercase tracking-widest group-hover:text-kr-blue transition-colors duration-200">
          {t('readMore')}
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { localizeJournalEntry } from '@/lib/localize-journal';
import type { JournalEntry, Locale } from '@/types';

interface JournalStoryPairProps {
  entries: JournalEntry[];
}

export default function JournalStoryPair({ entries }: JournalStoryPairProps) {
  const t = useTranslations('journal');
  const locale = useLocale() as Locale;

  const [primary, secondary] = entries.map((e) => localizeJournalEntry(e, locale));

  if (!primary) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
      <Link
        href={`/${locale}/travel-journal/${primary.slug}`}
        className="group relative block h-[55vh] min-h-[420px] lg:h-[65vh] lg:min-h-[520px] overflow-hidden"
      >
        <Image
          src={primary.coverImage}
          alt={primary.title}
          fill
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14">
          <p className="section-label text-white/45 mb-4">{primary.location}</p>
          <h3 className="editorial-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4 max-w-2xl leading-tight">
            {primary.title}
          </h3>
          <p className="text-white/65 text-sm lg:text-base leading-relaxed max-w-xl line-clamp-2 mb-6">
            {primary.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-widest">
            {t('readMore')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>

      {secondary && (
        <Link
          href={`/${locale}/travel-journal/${secondary.slug}`}
          className="group relative block h-[45vh] min-h-[360px] lg:h-[65vh] lg:min-h-[520px] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10"
        >
          <Image
            src={secondary.coverImage}
            alt={secondary.title}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            <p className="section-label text-white/45 mb-3">{secondary.location}</p>
            <h3 className="editorial-heading text-xl lg:text-2xl text-white mb-3 leading-tight">
              {secondary.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-5">
              {secondary.excerpt}
            </p>
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
              {secondary.readTime} {t('readTime')}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}

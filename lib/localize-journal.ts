import type { JournalEntry, Locale } from '@/types';
import { journalTranslations } from '@/data/journal-translations';

export function localizeJournalEntry(entry: JournalEntry, locale: Locale): JournalEntry {
  if (locale === 'tr') return entry;

  const t = journalTranslations[entry.slug]?.[locale];
  if (!t) return entry;

  return {
    ...entry,
    title: t.title ?? entry.title,
    excerpt: t.excerpt ?? entry.excerpt,
    content: t.content ?? entry.content,
    location: t.location ?? entry.location,
    tags: t.tags ?? entry.tags,
  };
}

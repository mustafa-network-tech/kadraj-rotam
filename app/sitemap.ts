import type { MetadataRoute } from 'next';
import { routes } from '@/data/routes';
import { journalEntries } from '@/data/journal';

const baseUrl = 'https://www.kadrajrotam.com.tr';
const locales = ['tr', 'en', 'de', 'fr'];

const staticPaths = [
  '',
  '/routes',
  '/premium-routes',
  '/destinations',
  '/photography-spots',
  '/travel-journal',
  '/about',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }

    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}/routes/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    for (const entry of journalEntries) {
      entries.push({
        url: `${baseUrl}/${locale}/travel-journal/${entry.slug}`,
        lastModified: entry.date ? new Date(entry.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}

import type { Locale, Route } from '@/types';
import { routeTranslations } from '@/data/route-translations';

const countryNames: Record<string, Record<Locale, string>> = {
  Türkiye: { tr: 'Türkiye', en: 'Turkey', de: 'Türkei', fr: 'Turquie' },
  Nepal: { tr: 'Nepal', en: 'Nepal', de: 'Nepal', fr: 'Népal' },
  Şili: { tr: 'Şili', en: 'Chile', de: 'Chile', fr: 'Chili' },
  İzlanda: { tr: 'İzlanda', en: 'Iceland', de: 'Island', fr: 'Islande' },
  Norveç: { tr: 'Norveç', en: 'Norway', de: 'Norwegen', fr: 'Norvège' },
  Brezilya: { tr: 'Brezilya', en: 'Brazil', de: 'Brasilien', fr: 'Brésil' },
  Mısır: { tr: 'Mısır', en: 'Egypt', de: 'Ägypten', fr: 'Égypte' },
  Moğolistan: { tr: 'Moğolistan', en: 'Mongolia', de: 'Mongolei', fr: 'Mongolie' },
  Çin: { tr: 'Çin', en: 'China', de: 'China', fr: 'Chine' },
};

export function localizeRoute(route: Route, locale: Locale): Route {
  if (locale === 'tr') return route;

  const t = routeTranslations[route.slug]?.[locale];
  if (!t) return route;

  return {
    ...route,
    shortDescription: t.shortDescription ?? route.shortDescription,
    description: t.description ?? route.description,
    season: t.season ?? route.season,
    duration: t.duration ?? route.duration,
    country: countryNames[route.country]?.[locale] ?? route.country,
    region: t.region ?? route.region,
    location: t.location ?? route.location,
    fieldNotes: t.fieldNotes ?? route.fieldNotes,
    spots: t.spots ?? route.spots,
    premiumFeatures: t.premiumFeatures ?? route.premiumFeatures,
  };
}

export function localizeCountry(country: string, locale: Locale): string {
  return countryNames[country]?.[locale] ?? country;
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { getRouteBySlug, routes } from '@/data/routes';
import { localizeRoute } from '@/lib/localize-route';
import type { Locale } from '@/types';
import PhotographyScore from '@/components/PhotographyScore';
import SpotFeature from '@/components/SpotFeature';
import GalleryGrid from '@/components/GalleryGrid';
import RouteCard from '@/components/RouteCard';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string; locale: string };
}

export async function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = getRouteBySlug(params.slug);
  if (!route) return {};
  return {
    title: route.title,
    description: route.shortDescription,
  };
}

export default function RouteDetailPage({ params }: Props) {
  const route = getRouteBySlug(params.slug);
  if (!route) notFound();

  const t = useTranslations('routeDetail');
  const tRoutes = useTranslations('routes');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  const localized = localizeRoute(route, locale);

  const relatedRouteObjects = route.relatedRoutes
    .map((slug) => routes.find((r) => r.slug === slug))
    .filter(Boolean);

  const difficultyColors = {
    easy: 'text-green-600 bg-green-50',
    moderate: 'text-yellow-600 bg-yellow-50',
    challenging: 'text-orange-600 bg-orange-50',
    expert: 'text-red-600 bg-red-50',
  };

  return (
    <div className="bg-kr-bg">
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[800px] flex items-end overflow-hidden">
        <Image
          src={route.heroImage}
          alt={route.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0">
          <div className="container-editorial">
            <Link
              href={`/${locale}/routes`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
              </svg>
              {tNav('routes')}
            </Link>
          </div>
        </div>

        <div className="relative container-editorial pb-12 lg:pb-16 w-full">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {route.status === 'premium' ? (
              <span className="badge-premium">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {tCommon('premiumBadge')}
              </span>
            ) : (
              <span className="badge-free">{tCommon('freeBadge')}</span>
            )}
            <span
              className={`text-xs font-semibold px-2.5 py-1 ${
                difficultyColors[route.difficulty]
              }`}
            >
              {tRoutes(`difficultyLevels.${route.difficulty}`)}
            </span>
          </div>

          <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
            {route.title}
          </h1>
          <p className="text-white/60 text-base flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {localized.location}
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────── */}
      <section className="bg-white border-b border-kr-border">
        <div className="container-editorial py-10 lg:py-12">
          <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
            {[
              { label: t('country'), value: localized.country },
              { label: t('region'), value: localized.region },
              { label: tRoutes('season'), value: localized.season },
              { label: tRoutes('duration'), value: localized.duration },
              { label: tRoutes('difficulty'), value: tRoutes(`difficultyLevels.${route.difficulty}`) },
              { label: t('status'), value: route.status === 'premium' ? t('premium') : t('free') },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kr-muted mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-kr-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              {/* Description */}
              <div>
                <p className="section-label mb-4">{t('overview')}</p>
                <p className="text-kr-slate text-base lg:text-lg leading-relaxed">
                  {localized.description}
                </p>
              </div>

              {/* Photography Spots */}
              <div>
                <p className="section-label mb-2">{t('bestSpots')}</p>
                <div className="divide-y divide-kr-border">
                  {localized.spots.map((spot, index) => (
                    <SpotFeature key={spot.name} spot={spot} index={index} />
                  ))}
                </div>
              </div>

              {/* Golden Hour */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-kr-charcoal" />
                <div className="relative p-8 lg:p-12 space-y-8">
                  <p className="section-label text-white/40">{t('goldenHour')}</p>
                  <div className="space-y-6 max-w-2xl">
                    <div>
                      <p className="text-sm font-semibold text-white mb-2">{t('sunrise')}</p>
                      <p className="text-sm text-white/55 leading-relaxed">
                        {t('sunriseTip', { season: localized.season })}
                      </p>
                    </div>
                    <div className="w-12 h-px bg-white/15" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-2">{t('sunset')}</p>
                      <p className="text-sm text-white/55 leading-relaxed">
                        {t('sunsetTip', { region: localized.region })}
                      </p>
                    </div>
                    <div className="w-12 h-px bg-white/15" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-2">{t('weatherNote')}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{t('weatherTip')}</p>
                    </div>
                    <div className="w-12 h-px bg-white/15" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-2">{t('shootingTip')}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{t('shootingAdvice')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Field Notes */}
              <div>
                <p className="section-label mb-6">{t('fieldNotes')}</p>
                <div className="border-l-2 border-kr-amber pl-6 lg:pl-8">
                  <p className="text-kr-slate text-sm lg:text-base leading-relaxed">
                    {localized.fieldNotes}
                  </p>
                  <p className="mt-4 text-xs text-kr-muted">
                    {t('signedBy', { location: localized.location })}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Photography Score */}
              <div className="bg-white border border-kr-border p-6 lg:p-8">
                <p className="section-label mb-6">{t('photographyScore')}</p>
                <PhotographyScore scores={route.photographyScores} />
              </div>

              {/* Premium Preview */}
              {route.status === 'premium' && (
                <div className="relative overflow-hidden border border-kr-amber/30 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                  <div className="p-6">
                    <p className="section-label text-kr-amber mb-4">{t('premiumPreview')}</p>
                    <div className="space-y-3">
                      {localized.premiumFeatures.map((feature, i) => (
                        <div key={i} className={`flex items-center gap-3 ${i > 1 ? 'blur-sm opacity-50' : ''}`}>
                          <div className="w-5 h-5 rounded-full bg-kr-amber/20 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-kr-amber" />
                          </div>
                          <span className="text-sm text-kr-slate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-6 pt-6 border-t border-kr-border">
                      <Link
                        href={`/${locale}/premium-routes`}
                        className="btn-primary w-full justify-center"
                      >
                        {t('getPremium')}
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick info */}
              <div className="bg-white border border-kr-border p-6">
                <p className="section-label mb-5">{t('quickInfo')}</p>
                <div className="space-y-4">
                  {[
                    { label: t('coordinates'), value: `${route.coordinates.lat.toFixed(4)}, ${route.coordinates.lng.toFixed(4)}` },
                    { label: t('bestSeason'), value: localized.season },
                    { label: tRoutes('duration'), value: localized.duration },
                    { label: tRoutes('difficulty'), value: tRoutes(`difficultyLevels.${route.difficulty}`) },
                    { label: t('category'), value: tRoutes(`categories.${route.category}`) },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-kr-muted">{item.label}</span>
                      <span className="font-medium text-kr-charcoal text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-editorial">
          <p className="section-label mb-8">{t('gallery')}</p>
          <GalleryGrid images={route.gallery} title={route.title} />
        </div>
      </section>

      {/* ── RELATED ROUTES ────────────────────────── */}
      {relatedRouteObjects.length > 0 && (
        <section className="py-16 lg:py-20 bg-kr-bg">
          <div className="container-editorial">
            <p className="section-label mb-8">{t('relatedRoutes')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {relatedRouteObjects.map(
                (r) => r && <RouteCard key={r.slug} route={r} size="large" />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';
import { routes, getLocalRoutes, getGlobalRoutes } from '@/data/routes';
import CinematicRouteBlock from '@/components/CinematicRouteBlock';
import RouteCard from '@/components/RouteCard';
import type { Route } from '@/types';

type FilterType = 'all' | 'local' | 'global' | 'premium' | 'free';

export default function RoutesPage() {
  const t = useTranslations('routes');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = routes.filter((route) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'local') return route.type === 'local';
    if (activeFilter === 'global') return route.type === 'global';
    if (activeFilter === 'premium') return route.status === 'premium';
    if (activeFilter === 'free') return route.status === 'free';
    return true;
  });

  const localRoutes = getLocalRoutes();
  const globalRoutes = getGlobalRoutes();

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('all') },
    { key: 'local', label: t('local') },
    { key: 'global', label: t('global') },
    { key: 'premium', label: t('premium') },
    { key: 'free', label: t('free') },
  ];

  const countFor = (key: FilterType) =>
    key === 'all'
      ? routes.length
      : routes.filter((r) =>
          key === 'local'
            ? r.type === 'local'
            : key === 'global'
            ? r.type === 'global'
            : key === 'premium'
            ? r.status === 'premium'
            : r.status === 'free'
        ).length;

  const renderEditorialSection = (
    title: string,
    desc: string,
    sectionRoutes: Route[],
    startIndex: number
  ) => (
    <div className="space-y-0">
      <div className="container-editorial py-12 lg:py-16 border-b border-kr-border">
        <p className="section-label mb-2">{title}</p>
        <p className="text-kr-muted text-sm max-w-xl">{desc}</p>
      </div>
      {sectionRoutes[0] && (
        <CinematicRouteBlock route={sectionRoutes[0]} index={startIndex} />
      )}
      {sectionRoutes.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {sectionRoutes.slice(1).map((route) => (
            <RouteCard key={route.slug} route={route} size="large" />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-kr-bg">
      <section className="relative h-[65vh] min-h-[480px] max-h-[720px] flex items-end overflow-hidden">
        <Image
          src={IMG.patagonia}
          alt={t('title')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

        <div className="relative container-editorial pb-14 lg:pb-20 w-full">
          <nav className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6">
            <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">
              {tCommon('breadcrumbHome')}
            </Link>
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
        </div>
      </section>

      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-kr-border">
        <div className="container-editorial">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex-shrink-0 px-5 py-4 text-xs font-semibold uppercase tracking-widest border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeFilter === filter.key
                    ? 'border-kr-charcoal text-kr-charcoal'
                    : 'border-transparent text-kr-muted hover:text-kr-charcoal'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-[10px] opacity-50">{countFor(filter.key)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-kr-muted text-lg">{t('noRoutesFound')}</p>
        </div>
      ) : activeFilter === 'all' ? (
        <div>
          {renderEditorialSection(
            t('localSection'),
            t('localSectionDesc'),
            localRoutes,
            0
          )}
          {renderEditorialSection(
            t('globalSection'),
            t('globalSectionDesc'),
            globalRoutes,
            1
          )}
        </div>
      ) : (
        <section>
          {filtered[0] && (
            <CinematicRouteBlock route={filtered[0]} index={0} />
          )}
          {filtered.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {filtered.slice(1).map((route) => (
                <RouteCard key={route.slug} route={route} size="large" />
              ))}
            </div>
          )}
        </section>
      )}

      <div className="container-editorial py-10">
        <p className="text-xs text-kr-muted uppercase tracking-widest">
          {t('routesShowing', { count: filtered.length })}
        </p>
      </div>
    </div>
  );
}

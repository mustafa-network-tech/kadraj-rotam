import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';
import { routes } from '@/data/routes';
import { journalEntries } from '@/data/journal';
import CinematicRouteBlock from '@/components/CinematicRouteBlock';
import PremiumCTA from '@/components/PremiumCTA';
import JournalStoryPair from '@/components/JournalStoryPair';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const featuredSlugs = ['gokcada', 'kapadokya', 'patagonia'] as const;
  const featuredRoutes = featuredSlugs
    .map((slug) => routes.find((r) => r.slug === slug))
    .filter(Boolean);

  const journalPreview = journalEntries.slice(0, 2);

  return (
    <div className="bg-kr-bg">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[680px] max-h-[960px] flex items-end overflow-hidden">
        <Image
          src={IMG.kapadokya}
          alt={t('hero.headline')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/85" />

        <div className="relative container-editorial pb-20 lg:pb-28 w-full">
          <div className="max-w-3xl">
            <p className="section-label text-white/55 mb-5 tracking-[0.25em]">
              {t('hero.tagline')}
            </p>
            <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.05]">
              {t('hero.headline')}
            </h1>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/routes`} className="btn-primary">
                {t('hero.ctaExplore')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={`/${locale}/premium-routes`} className="btn-ghost">
                {t('hero.ctaPremium')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platform — editorial split */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-[70vh]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
            <p className="section-label mb-5">{t('home.platformLabel')}</p>
            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-kr-charcoal leading-[1.08] mb-8">
              {t('home.platformTitle')}
            </h2>
            <p className="text-kr-slate text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
              {t('home.platformDesc')}
            </p>
            <ul className="space-y-4 border-l-2 border-kr-amber pl-6">
              {[
                t('home.platformPoint1'),
                t('home.platformPoint2'),
                t('home.platformPoint3'),
                t('home.platformPoint4'),
              ].map((point) => (
                <li key={point} className="text-sm lg:text-base text-kr-slate leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[50vh] min-h-[400px] lg:h-auto lg:min-h-full">
            <Image
              src={IMG.patagonia}
              alt={t('home.platformImageAlt')}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-black/10" />
          </div>
        </div>
      </section>

      {/* 3. Featured routes — cinematic blocks */}
      <section>
        <div className="container-editorial py-16 lg:py-20">
          <p className="section-label mb-3">{t('home.featuredRoutes')}</p>
          <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal max-w-2xl">
            {t('home.featuredRoutesTitle')}
          </h2>
        </div>
        <div>
          {featuredRoutes.map((route, i) =>
            route ? (
              <CinematicRouteBlock
                key={route.slug}
                route={route}
                reverse={i % 2 === 1}
                index={i}
              />
            ) : null
          )}
        </div>
      </section>

      {/* 4. Premium short intro */}
      <PremiumCTA variant="home" />

      {/* 5. Travel journal — 2 stories */}
      <section className="bg-kr-charcoal">
        <div className="container-editorial py-16 lg:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="section-label text-white/40 mb-3">{t('home.journalPreview')}</p>
            <h2 className="editorial-heading text-3xl lg:text-4xl text-white max-w-xl">
              {t('home.journalTitle')}
            </h2>
          </div>
          <Link
            href={`/${locale}/travel-journal`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            {t('home.viewAllArticles')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <JournalStoryPair entries={journalPreview} />
      </section>
    </div>
  );
}

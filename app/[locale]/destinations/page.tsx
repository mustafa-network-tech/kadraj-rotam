import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { destinations } from '@/data/destinations';
import { IMG } from '@/data/images';
import { routes } from '@/data/routes';
import { localizeCountry } from '@/lib/localize-route';
import type { Locale } from '@/types';

export default function DestinationsPage() {
  const t = useTranslations('destinations');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  const turkeyDests = destinations.filter((d) => d.country === 'Türkiye');
  const globalDests = destinations.filter((d) => d.country !== 'Türkiye');

  return (
    <div className="bg-kr-bg">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] flex items-end overflow-hidden">
        <Image
          src={IMG.norvec}
          alt={t('title')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

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

          {/* Stat chips */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: t('statDestination'), value: destinations.length },
              { label: t('statTurkey'), value: turkeyDests.length },
              { label: t('statGlobal'), value: globalDests.length },
              { label: t('statContinent'), value: 4 },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="text-lg font-bold text-white">{s.value}</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÜRKİYE DESTİNASYONLARI ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-editorial">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-2">{t('turkey')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal">
                {t('turkeyTitle')}
              </h2>
            </div>
          </div>

          <div className="space-y-px">
            {turkeyDests.map((dest, index) => {
              const featuredRoute = routes.find((r) => r.slug === dest.featuredRoutes[0]);
              return (
                <div
                  key={dest.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 group ${
                    index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Görsel */}
                  <div
                    className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${
                      index % 2 === 1 ? 'lg:[direction:ltr]' : ''
                    }`}
                  >
                    <Image
                      src={dest.heroImage}
                      alt={dest.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>

                  {/* İçerik */}
                  <div
                    className={`flex flex-col justify-center bg-kr-bg p-8 lg:p-12 xl:p-16 ${
                      index % 2 === 1 ? 'lg:[direction:ltr]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="section-label">{localizeCountry(dest.country, locale)} · {dest.region}</span>
                      <span className="text-xs text-kr-muted bg-white border border-kr-border px-2.5 py-1">
                        {dest.routeCount} {t('routeCount')}
                      </span>
                    </div>
                    <h3 className="editorial-heading text-2xl lg:text-3xl xl:text-4xl text-kr-charcoal mb-4">
                      {dest.title}
                    </h3>
                    <p className="text-kr-slate text-sm lg:text-base leading-relaxed mb-8">
                      {dest.description}
                    </p>

                    {featuredRoute && (
                      <Link
                        href={`/${locale}/routes/${featuredRoute.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kr-charcoal hover:text-kr-blue transition-colors group/link w-fit"
                      >
                        {featuredRoute.title}
                        <svg
                          className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KÜRESEL DESTİNASYONLAR ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-kr-charcoal">
        <div className="container-editorial">
          <div className="mb-12">
            <p className="section-label text-white/40 mb-2">{t('global')}</p>
            <h2 className="editorial-heading text-3xl lg:text-4xl text-white">
              {t('globalTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {globalDests.map((dest) => (
              <div key={dest.slug} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={dest.heroImage}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="section-label text-white/40 mb-1.5">
                    {dest.continent} · {dest.routeCount} {t('routeCount')}
                  </p>
                  <h3 className="editorial-heading text-xl text-white mb-1">
                    {dest.title}
                  </h3>
                  <p className="text-xs text-white/40">{localizeCountry(dest.country, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

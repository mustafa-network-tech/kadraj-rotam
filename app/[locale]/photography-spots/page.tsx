import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';
import { routes } from '@/data/routes';
import { localizeRoute } from '@/lib/localize-route';
import type { Locale } from '@/types';

export default function PhotographySpotsPage() {
  const t = useTranslations('photographySpots');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  const sunriseRoutes = routes
    .filter((r) => r.photographyScores.sunrise >= 4)
    .sort((a, b) => b.photographyScores.sunrise - a.photographyScores.sunrise)
    .slice(0, 4);

  const sunsetRoutes = routes
    .filter((r) => r.photographyScores.sunset >= 4)
    .sort((a, b) => b.photographyScores.sunset - a.photographyScores.sunset)
    .slice(0, 4);

  const droneRoutes = routes
    .filter((r) => r.photographyScores.drone >= 4)
    .sort((a, b) => b.photographyScores.drone - a.photographyScores.drone)
    .slice(0, 4);

  const wildlifeRoutes = routes
    .filter((r) => r.photographyScores.wildlife >= 4)
    .sort((a, b) => b.photographyScores.wildlife - a.photographyScores.wildlife)
    .slice(0, 4);

  const landscapeRoutes = routes
    .filter((r) => r.photographyScores.landscape >= 4)
    .sort((a, b) => b.photographyScores.landscape - a.photographyScores.landscape)
    .slice(0, 6);

  const categories = [
    { key: 'sunrise', label: t('sunrise'), icon: '🌅', desc: t('sunriseDesc'), routes: sunriseRoutes },
    { key: 'sunset', label: t('sunset'), icon: '🌇', desc: t('sunsetDesc'), routes: sunsetRoutes },
    { key: 'drone', label: t('drone'), icon: '🚁', desc: t('droneDesc'), routes: droneRoutes },
    { key: 'wildlife', label: t('wildlife'), icon: '🦅', desc: t('wildlifeDesc'), routes: wildlifeRoutes },
  ];

  return (
    <div className="bg-kr-bg">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] flex items-end overflow-hidden">
        <Image
          src={IMG.izlanda}
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

          {/* Kategori chips */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              `🌅 ${t('sunrise')}`,
              `🌇 ${t('sunset')}`,
              `🏔️ ${t('landscape')}`,
              `🚁 ${t('drone')}`,
              `🦅 ${t('wildlife')}`,
              `🏛️ ${t('street')}`,
            ].map((cat) => (
              <span key={cat} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape – hero section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-editorial">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl">🏔️</span>
            <div>
              <p className="section-label">{t('landscape')}</p>
              <p className="text-sm text-kr-muted mt-1">
                {t('landscapeDesc')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-kr-border">
            {landscapeRoutes.map((route, i) => (
              <Link
                key={route.slug}
                href={`/${locale}/routes/${route.slug}`}
                className={`group relative overflow-hidden ${
                  i < 2 ? 'col-span-2 md:col-span-1 lg:col-span-2' : 'col-span-1'
                } aspect-square bg-kr-charcoal`}
              >
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">{localizeRoute(route, locale).country}</p>
                  <p className="text-sm font-semibold text-white">{route.title}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={`w-1.5 h-1.5 rounded-full ${
                          s <= route.photographyScores.landscape
                            ? 'bg-kr-amber'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.key}
          className={`py-16 lg:py-20 ${catIndex % 2 === 0 ? 'bg-kr-bg' : 'bg-white'}`}
        >
          <div className="container-editorial">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{cat.icon}</span>
                <div>
                  <p className="section-label">{cat.label}</p>
                  <p className="text-sm text-kr-muted mt-1 max-w-md">{cat.desc}</p>
                </div>
              </div>
              <Link
                href={`/${locale}/routes`}
                className="flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-kr-muted hover:text-kr-charcoal transition-colors inline-flex items-center gap-2"
              >
                {t('viewAll')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-kr-border">
              {cat.routes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/${locale}/routes/${route.slug}`}
                  className="group relative aspect-[3/4] overflow-hidden bg-kr-charcoal block"
                >
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 gradient-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                      {localizeRoute(route, locale).country}
                    </p>
                    <p className="text-sm font-semibold text-white mb-2">{route.title}</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div
                          key={s}
                          className={`w-1.5 h-1.5 rounded-full ${
                            s <=
                            (cat.key === 'sunrise'
                              ? route.photographyScores.sunrise
                              : cat.key === 'sunset'
                              ? route.photographyScores.sunset
                              : cat.key === 'drone'
                              ? route.photographyScores.drone
                              : route.photographyScores.wildlife)
                              ? 'bg-kr-amber'
                              : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Street photography info */}
      <section className="py-16 lg:py-20 bg-kr-charcoal text-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-4xl block mb-5">🏛️</span>
              <p className="section-label text-white/40 mb-4">{t('street')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-white mb-5">
                {t('streetTitle')}
              </h2>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-8">
                {t('streetDesc')}
              </p>
              <Link
                href={`/${locale}/routes`}
                className="btn-ghost"
              >
                {t('exploreHistorical')}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {routes
                .filter((r) => r.category === 'landscape' || r.slug.includes('piramit') || r.slug.includes('seddi'))
                .slice(0, 4)
                .map((route) => (
                  <Link
                    key={route.slug}
                    href={`/${locale}/routes/${route.slug}`}
                    className="group relative aspect-square overflow-hidden block"
                  >
                    <Image
                      src={route.image}
                      alt={route.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="20vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white">
                      {route.title}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

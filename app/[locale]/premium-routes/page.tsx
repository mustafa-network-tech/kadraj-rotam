import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';
import { getPremiumRoutes } from '@/data/routes';
import RouteCard from '@/components/RouteCard';
import SectionHeading from '@/components/SectionHeading';

export default function PremiumRoutesPage() {
  const t = useTranslations('premiumRoutes');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const premiumRoutes = getPremiumRoutes();

  const features = [
    {
      icon: '📍',
      title: t('feature2'),
      desc: t('feature2Desc'),
    },
    {
      icon: '🗺️',
      title: t('feature1'),
      desc: t('feature1Desc'),
    },
    {
      icon: '📄',
      title: t('feature3'),
      desc: t('feature3Desc'),
    },
    {
      icon: '📷',
      title: t('feature4'),
      desc: t('feature4Desc'),
    },
    {
      icon: '☀️',
      title: t('feature5'),
      desc: t('feature5Desc'),
    },
    {
      icon: '📅',
      title: t('feature6'),
      desc: t('feature6Desc'),
    },
  ];

  return (
    <div className="bg-kr-bg">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[700px] flex items-end overflow-hidden">
        <Image
          src={IMG.himalaya}
          alt={t('heroImageAlt')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark + amber gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-kr-amber/20 to-transparent" />

        <div className="relative container-editorial pb-16 lg:pb-24 w-full">
          <nav className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6">
            <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">{tCommon('breadcrumbHome')}</Link>
            <span>/</span>
            <span className="text-kr-amber">{tCommon('premiumBadge')}</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-kr-amber" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-kr-amber">
              {t('earlyAccess')}
            </span>
          </div>

          <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.05]">
            {t('hero')}
          </h1>
          <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="btn-primary !bg-kr-amber hover:!bg-kr-amber/90 text-white"
            >
              {t('waitlistCTA')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href={`/${locale}/routes`} className="btn-ghost !border-white/30 !text-white hover:!border-white hover:!text-white">
              {t('viewAllRoutes')}
            </Link>
          </div>
        </div>
      </section>

      {/* Premium routes */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-editorial">
          <SectionHeading
            label={t('title')}
            title={t('routesListTitle', { count: premiumRoutes.length })}
            subtitle={t('routesListDesc')}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-kr-border">
            {premiumRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-kr-bg">
        <div className="container-editorial">
          <SectionHeading
            label={t('featuresLabel')}
            title={t('featuresTitle')}
            subtitle={t('featuresDesc')}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white border border-kr-border p-7 hover:border-kr-amber/50 transition-colors duration-200"
              >
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-base font-semibold text-kr-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-kr-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4">{t('previewLabel')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal mb-5">
                {t('previewTitle')}
              </h2>
              <p className="text-kr-slate text-sm lg:text-base leading-relaxed mb-6">
                {t('previewDesc')}
              </p>

              {/* Mock guide preview */}
              <div className="bg-kr-bg border border-kr-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-kr-muted">
                      {t('previewGuideTitle')}
                    </p>
                    <p className="text-sm font-semibold text-kr-charcoal mt-0.5">
                      {t('previewPage', { current: 14, total: 48 })}
                    </p>
                  </div>
                  <span className="badge-premium">{tCommon('premiumBadge')}</span>
                </div>

                <div className="space-y-3">
                  {[
                    t('previewLine1'),
                    t('previewLine2'),
                    t('previewLine3'),
                    t('previewLine4'),
                  ].map((line, i) => (
                    <div
                      key={i}
                      className={`text-xs p-3 border border-kr-border ${
                        i > 1 ? 'blur-sm opacity-40 select-none' : ''
                      } text-kr-slate`}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-kr-charcoal/5 text-center">
                  <p className="text-xs text-kr-muted">
                    {t('previewLocked')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={IMG.kapadokyaG1}
                alt={t('previewGuideTitle')}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="badge-premium mb-2 inline-block">{tCommon('premiumBadge')}</span>
                <p className="text-white font-semibold text-lg">{t('previewRouteName')}</p>
                <p className="text-white/60 text-sm">{t('previewRouteMeta')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-16 lg:py-24 bg-kr-charcoal text-white">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label text-white/40 mb-4">{t('comingSoon')}</p>
            <h2 className="editorial-heading text-3xl lg:text-4xl text-white mb-5">
              {t('waitlistTitle')}
            </h2>
            <p className="text-white/60 mb-10">
              {t('waitlistDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3 text-sm focus:outline-none focus:border-kr-amber transition-colors"
              />
              <button className="bg-kr-amber text-white px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-kr-amber/90 transition-colors flex-shrink-0">
                {t('join')}
              </button>
            </div>

            <p className="mt-4 text-xs text-white/30">
              {t('noSpam')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

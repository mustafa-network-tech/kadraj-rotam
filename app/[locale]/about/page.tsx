import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';

export default function AboutPage() {
  const t = useTranslations('about');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="bg-white">
      <section className="relative h-[55vh] min-h-[400px] max-h-[580px] flex items-end overflow-hidden">
        <Image
          src={IMG.kaz}
          alt={t('title')}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

        <div className="relative container-editorial pb-14 lg:pb-20 w-full">
          <nav className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6">
            <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">{tCommon('breadcrumbHome')}</Link>
            <span>/</span>
            <span className="text-white/70">{t('title')}</span>
          </nav>

          <p className="section-label text-white/50 mb-4 tracking-[0.25em]">{tCommon('brand')}</p>
          <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="text-white/60 text-base lg:text-lg max-w-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">{t('story')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal mb-6">
                {t('storyTitle')}
              </h2>
              <div className="space-y-4 text-kr-slate text-sm lg:text-base leading-relaxed">
                <p>{t('storyP1')}</p>
                <p>{t('storyP2')}</p>
                <p>{t('storyP3')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMG.kapadokyaG1}
                  alt={t('story')}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-kr-amber p-6 max-w-[220px]">
                <p className="text-white text-2xl font-semibold leading-tight">13+</p>
                <p className="text-white/70 text-xs uppercase tracking-widest mt-1">
                  {t('globalRoutesStat')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-kr-charcoal text-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="section-label text-white/40 mb-4">{t('mission')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-white">
                {t('missionTitle')}
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8">
                {t('missionDesc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { number: '4', label: t('statLanguages'), desc: 'TR · EN · DE · FR' },
                  { number: '13', label: t('statRoutes'), desc: t('statLocalGlobal') },
                  { number: '4', label: t('statContinents'), desc: t('statContinentList') },
                ].map((stat) => (
                  <div key={stat.label} className="border border-white/10 p-5">
                    <p className="text-3xl font-semibold text-white mb-1">{stat.number}</p>
                    <p className="text-sm font-semibold text-white/70">{stat.label}</p>
                    <p className="text-xs text-white/40 mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={IMG.patagoniaG1}
                alt={t('vision')}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="section-label mb-4">{t('vision')}</p>
              <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal mb-6">
                {t('visionTitle')}
              </h2>
              <div className="space-y-4 text-kr-slate text-sm lg:text-base leading-relaxed">
                <p>{t('visionP1')}</p>
                <p>{t('visionP2')}</p>
                <p>{t('visionP3')}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 border border-kr-border px-4 py-3">
                  <svg className="w-5 h-5 text-kr-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="text-xs font-semibold text-kr-charcoal">{t('iosApp')}</span>
                  <span className="text-[10px] text-kr-muted bg-kr-bg px-2 py-0.5">{t('soon')}</span>
                </div>
                <div className="flex items-center gap-2 border border-kr-border px-4 py-3">
                  <svg className="w-5 h-5 text-kr-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-kr-charcoal">{t('androidApp')}</span>
                  <span className="text-[10px] text-kr-muted bg-kr-bg px-2 py-0.5">{t('soon')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-kr-bg border-t border-kr-border">
        <div className="container-editorial text-center">
          <p className="section-label mb-4">{t('ctaLabel')}</p>
          <h2 className="editorial-heading text-3xl lg:text-4xl text-kr-charcoal mb-5">
            {t('ctaTitle')}
          </h2>
          <p className="text-kr-muted text-sm lg:text-base mb-8 max-w-lg mx-auto">
            {t('ctaDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/routes`} className="btn-primary">
              {t('ctaExplore')}
            </Link>
            <Link href={`/${locale}/premium-routes`} className="btn-secondary">
              {tNav('premiumRoutes')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

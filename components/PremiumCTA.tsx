import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { IMG } from '@/data/images';

interface PremiumCTAProps {
  variant?: 'banner' | 'section' | 'home';
}

export default function PremiumCTA({ variant = 'section' }: PremiumCTAProps) {
  const t = useTranslations('premiumRoutes');
  const tHome = useTranslations('home');
  const locale = useLocale();

  if (variant === 'home') {
    const features = [
      tHome('premiumFeat1'),
      tHome('premiumFeat2'),
      tHome('premiumFeat3'),
      tHome('premiumFeat4'),
      tHome('premiumFeat5'),
    ];

    return (
      <section className="relative overflow-hidden h-[70vh] min-h-[520px] flex items-center">
        <Image
          src={IMG.himalaya}
          alt={tHome('premiumShortTitle')}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

        <div className="relative container-editorial py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <p className="section-label text-kr-amber mb-4">{tHome('premiumShortLabel')}</p>
            <h2 className="editorial-heading text-3xl lg:text-5xl text-white mb-6 leading-tight">
              {tHome('premiumShortTitle')}
            </h2>
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-10">
              {tHome('premiumShortDesc')}
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-1 h-1 rounded-full bg-kr-amber flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <Link href={`/${locale}/premium-routes`} className="btn-primary !bg-kr-amber hover:!bg-kr-amber/90">
              {t('waitlistCTA')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'banner') {
    return (
      <section className="relative overflow-hidden bg-kr-charcoal min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.07]">
          <Image
            src={IMG.kapadokya}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative container-editorial py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <p className="section-label text-kr-amber mb-4">{t('title')}</p>
            <h2 className="editorial-heading text-3xl lg:text-5xl text-white mb-5 leading-tight">
              {t('hero')}
            </h2>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              {t('heroDesc')}
            </p>
            <Link href={`/${locale}/premium-routes`} className="btn-ghost">
              {t('waitlistCTA')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-kr-blue">
      <div className="container-editorial py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
            {t('title')}
          </p>
          <h3 className="editorial-heading text-2xl lg:text-3xl text-white">
            {t('hero')}
          </h3>
          <p className="text-white/60 text-sm mt-2 max-w-lg">
            {t('heroDesc')}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link href={`/${locale}/premium-routes`} className="btn-ghost whitespace-nowrap">
            {t('waitlistCTA')}
          </Link>
        </div>
      </div>
    </div>
  );
}

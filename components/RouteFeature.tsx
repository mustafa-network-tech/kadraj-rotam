import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { localizeRoute } from '@/lib/localize-route';
import type { Route, Locale } from '@/types';

interface RouteFeatureProps {
  route: Route;
  reverse?: boolean;
  large?: boolean;
}

export default function RouteFeature({
  route,
  reverse = false,
  large = false,
}: RouteFeatureProps) {
  const t = useTranslations('routes');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  const localized = localizeRoute(route, locale);

  return (
    <div
      className={`group grid grid-cols-1 ${
        large ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-2'
      } ${reverse ? 'lg:[direction:rtl]' : ''} gap-0 overflow-hidden`}
    >
      <div
        className={`relative overflow-hidden ${
          large ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[520px]' : 'aspect-[4/3] lg:aspect-auto lg:min-h-[440px]'
        } ${reverse ? 'lg:[direction:ltr]' : ''}`}
      >
        <Image
          src={route.heroImage}
          alt={route.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

        {route.status === 'premium' && (
          <div className="absolute top-5 left-5">
            <span className="badge-premium">{tCommon('premiumBadge')}</span>
          </div>
        )}
      </div>

      <div
        className={`relative flex flex-col justify-center bg-white p-8 lg:p-12 xl:p-16 ${
          reverse ? 'lg:[direction:ltr]' : ''
        }`}
      >
        <p className="section-label mb-3">
          {localized.country} · {localized.region}
        </p>

        <h3
          className={`editorial-heading text-kr-charcoal mb-4 ${
            large ? 'text-3xl lg:text-4xl xl:text-5xl' : 'text-2xl lg:text-3xl'
          }`}
        >
          {route.title}
        </h3>

        <p className="text-kr-slate leading-relaxed mb-6 text-sm lg:text-base line-clamp-3">
          {localized.description}
        </p>

        <div className="flex flex-wrap gap-5 mb-8 text-sm">
          <div>
            <p className="text-xs text-kr-muted uppercase tracking-wider mb-1">{t('season')}</p>
            <p className="font-medium text-kr-charcoal">{localized.season}</p>
          </div>
          <div>
            <p className="text-xs text-kr-muted uppercase tracking-wider mb-1">{t('duration')}</p>
            <p className="font-medium text-kr-charcoal">{localized.duration}</p>
          </div>
          <div>
            <p className="text-xs text-kr-muted uppercase tracking-wider mb-1">{t('photography')}</p>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`w-2 h-2 rounded-full ${
                    star <= route.photographyScores.landscape
                      ? 'bg-kr-amber'
                      : 'bg-kr-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <Link
          href={`/${locale}/routes/${route.slug}`}
          className="inline-flex items-center gap-2 text-kr-charcoal text-sm font-semibold uppercase tracking-widest hover:text-kr-blue transition-colors duration-200 group/link"
        >
          {t('viewRoute')}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

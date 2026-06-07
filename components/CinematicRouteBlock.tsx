import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { localizeRoute } from '@/lib/localize-route';
import type { Route, Locale } from '@/types';

interface CinematicRouteBlockProps {
  route: Route;
  reverse?: boolean;
  index?: number;
}

export default function CinematicRouteBlock({
  route,
  reverse = false,
  index = 0,
}: CinematicRouteBlockProps) {
  const t = useTranslations('routes');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  const localized = localizeRoute(route, locale);

  return (
    <Link
      href={`/${locale}/routes/${route.slug}`}
      className={`group relative block w-full overflow-hidden ${
        index === 1 ? 'h-[70vh] min-h-[520px]' : 'h-[60vh] min-h-[480px]'
      }`}
    >
      <Image
        src={route.heroImage}
        alt={route.title}
        fill
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        sizes="100vw"
        priority={index === 0}
      />
      <div
        className={`absolute inset-0 ${
          reverse
            ? 'bg-gradient-to-l from-black/80 via-black/40 to-black/20'
            : 'bg-gradient-to-r from-black/80 via-black/40 to-black/20'
        }`}
      />

      <div
        className={`absolute inset-0 flex items-end ${
          reverse ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`container-editorial pb-14 lg:pb-20 pt-32 w-full ${
            reverse ? 'text-right' : 'text-left'
          }`}
        >
          <div className={`max-w-xl ${reverse ? 'ml-auto' : ''}`}>
            <div
              className={`flex items-center gap-3 mb-4 ${
                reverse ? 'justify-end' : 'justify-start'
              }`}
            >
              {route.status === 'premium' ? (
                <span className="badge-premium">{tCommon('premiumBadge')}</span>
              ) : (
                <span className="badge-free">{tCommon('freeBadge')}</span>
              )}
              <span className="section-label text-white/50">
                {localized.country} · {localized.region}
              </span>
            </div>

            <h3 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-[1.05]">
              {route.title}
            </h3>

            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-6 line-clamp-2">
              {localized.shortDescription}
            </p>

            <div
              className={`flex flex-wrap items-center gap-5 text-xs text-white/50 ${
                reverse ? 'justify-end' : 'justify-start'
              }`}
            >
              <span>{localized.season}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{localized.duration}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-2 text-white/80 font-semibold uppercase tracking-widest group-hover:gap-3 transition-all">
                {t('viewRoute')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { localizeRoute } from '@/lib/localize-route';
import type { Route, Locale } from '@/types';

interface RouteCardProps {
  route: Route;
  size?: 'default' | 'large' | 'small';
}

export default function RouteCard({ route, size = 'default' }: RouteCardProps) {
  const t = useTranslations('routes');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  const localized = localizeRoute(route, locale);

  const difficultyLabel = t(`difficultyLevels.${route.difficulty}`);

  const aspectClass = {
    large: 'aspect-[3/4]',
    default: 'aspect-[4/3]',
    small: 'aspect-[3/2]',
  }[size];

  return (
    <Link
      href={`/${locale}/routes/${route.slug}`}
      className={`group relative block overflow-hidden ${aspectClass} bg-kr-charcoal`}
    >
      <Image
        src={route.image}
        alt={route.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 gradient-overlay" />

      <div className="absolute top-4 left-4 flex items-center gap-2">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <p className="section-label text-white/50 mb-1.5">
          {localized.country} · {localized.region}
        </p>
        <h3 className="editorial-heading text-xl lg:text-2xl text-white mb-3">
          {route.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-white/60">
          <span>{difficultyLabel}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{localized.duration}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{localized.season.split(' – ')[0]}</span>
        </div>

        <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-widest">
            {t('viewRoute')}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

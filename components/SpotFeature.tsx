import { useTranslations } from 'next-intl';
import type { PhotoSpot } from '@/types';

interface SpotFeatureProps {
  spot: PhotoSpot;
  index: number;
}

export default function SpotFeature({ spot, index }: SpotFeatureProps) {
  const t = useTranslations('routeDetail');

  return (
    <div className="border-t border-kr-border pt-8 pb-8">
      <div className="flex gap-6 lg:gap-10">
        {/* Number */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-kr-border">
          <span className="text-sm font-semibold text-kr-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="editorial-heading text-xl text-kr-charcoal mb-3">
            {spot.name}
          </h4>
          <p className="text-kr-slate text-sm leading-relaxed mb-5">
            {spot.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kr-muted mb-1.5">
                {t('bestTime')}
              </p>
              <p className="text-sm font-medium text-kr-charcoal">{spot.bestTime}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kr-muted mb-1.5">
                {t('recommendedLens')}
              </p>
              <p className="text-sm font-medium text-kr-charcoal">{spot.recommendedLens}</p>
            </div>
            <div className="col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kr-muted mb-1.5">
                {t('coordinates')}
              </p>
              <p className="text-sm font-mono text-kr-muted">
                {spot.coordinates.lat.toFixed(4)}°N, {spot.coordinates.lng.toFixed(4)}°E
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

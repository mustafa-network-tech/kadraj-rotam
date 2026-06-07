import { useTranslations } from 'next-intl';
import type { PhotographyScores } from '@/types';

interface PhotographyScoreProps {
  scores: PhotographyScores;
}

export default function PhotographyScore({ scores }: PhotographyScoreProps) {
  const t = useTranslations('routeDetail');

  const items = [
    { key: 'landscape', label: t('landscape'), value: scores.landscape },
    { key: 'sunrise', label: t('sunrise'), value: scores.sunrise },
    { key: 'sunset', label: t('sunset'), value: scores.sunset },
    { key: 'drone', label: t('drone'), value: scores.drone },
    { key: 'wildlife', label: t('wildlife'), value: scores.wildlife },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.key}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-kr-slate">{item.label}</span>
            <span className="text-sm font-semibold text-kr-charcoal">{item.value}/5</span>
          </div>
          <div className="h-1.5 bg-kr-border rounded-full overflow-hidden">
            <div
              className="h-full bg-kr-amber rounded-full transition-all duration-500"
              style={{ width: `${(item.value / 5) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

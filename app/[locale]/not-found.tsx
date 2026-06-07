import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center bg-kr-bg">
      <div className="text-center px-6">
        <p className="text-8xl font-semibold text-kr-border mb-4">404</p>
        <h1 className="editorial-heading text-3xl text-kr-charcoal mb-4">
          {t('notFound')}
        </h1>
        <p className="text-kr-muted mb-8">
          {t('notFoundDesc')}
        </p>
        <Link href={`/${locale}`} className="btn-primary">
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}

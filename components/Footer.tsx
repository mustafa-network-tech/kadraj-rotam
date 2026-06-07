import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/routes`, label: tNav('routes') },
    { href: `/${locale}/destinations`, label: tNav('destinations') },
    { href: `/${locale}/photography-spots`, label: tNav('photographySpots') },
    { href: `/${locale}/premium-routes`, label: tNav('premiumRoutes') },
    { href: `/${locale}/travel-journal`, label: tNav('travelJournal') },
    { href: `/${locale}/about`, label: tNav('about') },
  ];

  const languages = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
  ];

  const resourceLinks = [
    { href: `/${locale}/premium-routes`, label: tNav('premiumRoutes') },
    { href: `/${locale}/travel-journal`, label: tNav('travelJournal') },
    { href: `/${locale}/photography-spots`, label: tNav('photographySpots') },
    { href: `/${locale}/about`, label: tNav('about') },
  ];

  return (
    <footer className="bg-kr-charcoal text-white">
      <div className="border-b border-white/10">
        <div className="container-editorial py-10 lg:py-14">
          <p className="text-2xl lg:text-3xl font-semibold tracking-tight text-white/90 max-w-3xl">
            &ldquo;{t('philosophy')}&rdquo;
          </p>
        </div>
      </div>

      <div className="container-editorial py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-lg font-semibold tracking-tight">KADRAJ</div>
              <div className="text-[10px] tracking-[0.25em] text-kr-amber uppercase mt-0.5">
                ROTAM
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              {t('navigation')}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              {t('languages')}
            </h4>
            <ul className="flex flex-col gap-3">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <Link
                    href={`/${lang.code}`}
                    className={`text-sm transition-colors duration-200 ${
                      lang.code === locale
                        ? 'text-kr-amber'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              {t('resources')}
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kadraj Rotam. {t('rights')}
          </p>
          <p className="text-xs text-white/20 tracking-widest uppercase">
            kadrajrotam.com.tr
          </p>
        </div>
      </div>
    </footer>
  );
}

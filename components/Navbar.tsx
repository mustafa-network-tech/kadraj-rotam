'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isDark = isHome && !scrolled;

  const navLinks = [
    { href: `/${locale}/routes`, label: t('routes') },
    { href: `/${locale}/destinations`, label: t('destinations') },
    { href: `/${locale}/photography-spots`, label: t('photographySpots') },
    { href: `/${locale}/premium-routes`, label: t('premiumRoutes') },
    { href: `/${locale}/travel-journal`, label: t('travelJournal') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md border-b border-kr-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className={`flex items-center gap-3 transition-colors duration-200 ${
                isDark ? 'text-white' : 'text-kr-charcoal'
              }`}
            >
              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-tight">
                  KADRAJ
                </span>
                <span
                  className={`text-[10px] tracking-[0.25em] uppercase font-medium ${
                    isDark ? 'text-white/70' : 'text-kr-amber'
                  }`}
                >
                  ROTAM
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? isDark
                          ? 'text-white'
                          : 'text-kr-charcoal'
                        : isDark
                        ? 'text-white/70 hover:text-white'
                        : 'text-kr-muted hover:text-kr-charcoal'
                    } ${
                      link.href.includes('premium')
                        ? isDark
                          ? 'text-kr-amber hover:text-kr-amber/80'
                          : 'text-kr-amber hover:text-kr-amber/80'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher dark={isDark} />

              {/* Mobile menu toggle */}
              <button
                className={`lg:hidden p-2 transition-colors ${
                  isDark ? 'text-white' : 'text-kr-charcoal'
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      mobileOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      mobileOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      mobileOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex flex-col pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-1">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="py-4 text-xl font-semibold text-kr-charcoal border-b border-kr-border/50"
            >
              {t('home')}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-xl font-semibold border-b border-kr-border/50 transition-colors ${
                  link.href.includes('premium')
                    ? 'text-kr-amber'
                    : 'text-kr-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-4">
            {['tr', 'en', 'de', 'fr'].map((l) => (
              <Link
                key={l}
                href={pathname.replace(`/${locale}`, `/${l}`)}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold uppercase tracking-widest ${
                  l === locale ? 'text-kr-blue' : 'text-kr-muted'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en', 'de', 'fr'],
  defaultLocale: 'tr',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|_vercel|api|.*\\..*).*)'],
};

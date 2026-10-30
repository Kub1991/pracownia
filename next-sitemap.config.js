/** @type {import('next-sitemap').IConfig} */
const INDEXABLE_CITY_SLUGS = new Set(['zlotow', 'krajenka', 'czluchow', 'jastrowie']);
const LOCAL_SERVICE_SLUGS = new Set([
  'naprawa-protez',
  'protezy-zebowe',
  'dopasowanie-protez',
  'konsultacje-protetyczne',
]);

function withTrailingSlash(path) {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function normalizePath(path) {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
}

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://protetyka-zakrzewo.pl',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: 'out',
  sitemapSize: 7000,
  // Omit lastmod until a reliable per-page content modification date is available.
  autoLastmod: false,
  // robots.txt has a single source of truth: app/robots.txt.
  exclude: ['/api/*', '/admin/*', '/_next/*', '/robots.txt', '/sitemap.xml', '/sitemap-*.xml', '/_not-found'],
  
  // Custom transformation for specific pages
  transform: async (config, path) => {
    const normalizedPath = normalizePath(path);
    const localPathMatch = normalizedPath.match(
      /^\/(naprawa-protez|protezy-zebowe|dopasowanie-protez|konsultacje-protetyczne)\/([a-z0-9-]+)$/
    );

    if (localPathMatch) {
      const [, serviceSlug, citySlug] = localPathMatch;
      if (LOCAL_SERVICE_SLUGS.has(serviceSlug) && !INDEXABLE_CITY_SLUGS.has(citySlug)) {
        return null;
      }
    }

    return {
      loc: withTrailingSlash(normalizedPath),
    }
  },
}

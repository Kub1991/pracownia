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
  changefreq: 'weekly',
  priority: 0.7,
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

    // Set higher priority for main pages
    if (normalizedPath === '/') {
      return {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    // Default return
    return {
      loc: withTrailingSlash(normalizedPath),
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://protetyka-zakrzewo.pl/sitemap.xml',
    ],
  },
}

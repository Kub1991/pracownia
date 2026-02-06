/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://protetyka-zakrzewo.pl',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: 'out',
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  
  // Custom transformation for specific pages
  transform: async (config, path) => {
    // Set higher priority for main pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    // Default return
    return {
      loc: path,
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

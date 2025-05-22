import {SitemapStream, streamToPromise}from "sitemap"
import {createWriteStream}from "fs"

const hostname = 'https://www.trbakingequipments.com';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./dist/sitemap.xml');
  sitemap.pipe(writeStream);

  // Static pages
  const staticRoutes = [
    '/',
    '/equipment',
    '/about',
    '/contact',
  ];

  staticRoutes.forEach(route => {
    sitemap.write({
      url: route,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Product categories with query string
  const categoryLinks = [
    { name: 'OVENS', category: 'rotary+rack+oven' },
    { name: 'MIXERS', category: 'spiral+mixer' },
    { name: 'SLICERS', category: 'toast+bread+slicer' },
    { name: 'SHEETERS', category: 'dough+sheeter' },
  ];

  categoryLinks.forEach(({ category }) => {
    sitemap.write({
      url: `/equipment?category=${category}`,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated at dist/sitemap.xml');
}

generateSitemap();

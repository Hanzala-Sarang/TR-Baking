const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.trbakingequipments.com' });
  const writeStream = createWriteStream('./dist/sitemap.xml');
  sitemap.pipe(writeStream);

  const staticRoutes = ['/', '/equipment', '/about', '/contact'];

  staticRoutes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });

  const categoryLinks = [
    'rotary+rack+oven',
    'spiral+mixer',
    'toast+bread+slicer',
    'dough+sheeter'
  ];

  categoryLinks.forEach(category => {
    const encodedCategory = encodeURIComponent(category);
    sitemap.write({
      url: `/equipment?category=${encodedCategory}`,
      changefreq: 'monthly',
      priority: 0.9
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated at dist/sitemap.xml');
}

generateSitemap();

import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { products } from "./src/data/products";

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.trbakingequipments.com",
  });

  const writeStream = createWriteStream(
    path.resolve(__dirname, "./dist/sitemap.xml")
  );
  sitemap.pipe(writeStream);

  // Static routes
  const staticRoutes = ["/", "/equipment", "/about", "/contact"];
  staticRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "monthly", priority: 0.8 });
  });

  // Dynamic product pages
  products.forEach((product) => {
    sitemap.write({
      url: `/equipment/${product.slug}`,
      changefreq: "monthly",
      priority: 1.0,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated at dist/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});

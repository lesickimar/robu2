// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// site/base sterowane env, żeby działać na różnych hostingach z jednego repo.
// Domyślnie produkcja (root domeny, np. robu2.pl na Cloudflare): site=robu2.pl, base=/.
// Podgląd GitHub Pages ustawia BASE_PATH=/robu2 + SITE_URL w .github/workflows/deploy.yml.
export default defineConfig({
  site: process.env.SITE_URL || 'https://robu2.pl',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// GitHub Pages preview: https://lesickimar.github.io/robu2/
// Produkcja (robu2.pl): site: 'https://robu2.pl', base: '/'
export default defineConfig({
  site: 'https://lesickimar.github.io',
  base: '/robu2',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

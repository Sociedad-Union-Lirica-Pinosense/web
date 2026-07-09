import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.unionliricapinosense.com',
  base: '/',
  integrations: [sitemap()],
  compressHTML: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'va', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: 'always',
});

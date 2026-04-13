import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sociedad-union-lirica-pinosense.github.io',
  base: '/web',
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

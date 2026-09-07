// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site + base form the public URL. base is the ONE base-path setting:
// "/site-astro" while this is a project site; delete the line once the repo
// is renamed to siddharthshekharr.github.io.
export default defineConfig({
  site: 'https://siddharthshekharr.github.io',
  base: '/site-astro',
  trailingSlash: 'always',
  compressHTML: false, // keep view-source readable; negligible size cost
  integrations: [sitemap()],
});

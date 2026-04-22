// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url));
const GITHUB_PAGES_REPO = 'idle-greengrocers';
const isGithubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_REPOSITORY === `openclawed-007/${GITHUB_PAGES_REPO}`;

// Update this to the final production URL before deploying.
const SITE_URL = isGithubPagesBuild ? 'https://openclawed-007.github.io' : 'https://idlegreengrocers.co.uk';
const BASE_PATH = isGithubPagesBuild ? `/${GITHUB_PAGES_REPO}` : '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
    }),
  ],
  image: {
    // Use the Sharp service for responsive image generation.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [
      {
        // When tailwind.config.mjs changes, Vite doesn't normally know it's
        // a dependency (it's consumed by PostCSS, not imported). This plugin
        // restarts the Vite dev server on change so Tailwind re-reads the
        // config and regenerates utility classes immediately.
        name: 'tailwind-config-hmr',
        configureServer(server) {
          server.watcher.add(tailwindConfigPath);
          server.watcher.on('change', (file) => {
            if (file === tailwindConfigPath) {
              server.config.logger.info('↻ tailwind.config.mjs changed — restarting dev server');
              server.restart();
            }
          });
        },
      },
    ],
  },
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://dreamteamsingers.co.uk",

  integrations: [react({
    // experimentalReactChildren: true,
  }), tailwind(), icon(), sitemap()],

  output: "hybrid",
  adapter: cloudflare()
});
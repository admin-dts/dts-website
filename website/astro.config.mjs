import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    // experimentalReactChildren: true,
  }), tailwind(), icon()],
  output: "server",
  adapter: netlify()
});
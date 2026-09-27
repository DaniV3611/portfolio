// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://daniel-velasco.vercel.app',
  // Astro 7 defaults to 'jsx' whitespace rules, which would collapse spaces
  // between inline text and elements across lines (and inside the hero <pre>).
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), icon()]
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio-beatriz-vidal.vercel.app',
  output: 'static',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
});

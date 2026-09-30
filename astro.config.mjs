import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-beatriz-vidal.vercel.app',
  output: 'static',
  build: {
    format: 'file',
  },
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

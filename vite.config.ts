import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteOrigin = (env.VITE_SITE_URL ?? '').replace(/\/$/, '');

  return {
    // Rutas relativas: el CSS/JS carga bien al abrir dist local, en subcarpetas y en GitHub Pages sin dominio raíz.
    base: './',
    plugins: [
      react(),
      {
        // Sustituye metadatos absolutos (OG, canonical) cuando existe VITE_SITE_URL en .env
        name: 'hof-index-meta',
        transformIndexHtml(html) {
          const ogImage = siteOrigin
            ? `${siteOrigin}/og/hof-og-1200x630.jpg`
            : './og/hof-og-1200x630.jpg';
          const canonicalTag = siteOrigin
            ? `<link rel="canonical" href="${siteOrigin}/" />`
            : '';
          const ogUrlMeta = siteOrigin
            ? `<meta property="og:url" content="${siteOrigin}/" />`
            : '';
          return html
            .replace('__CANONICAL_TAG__', canonicalTag)
            .replace('__OG_URL_META__', ogUrlMeta)
            .replaceAll('__OG_IMAGE__', ogImage);
        },
      },
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
  };
});

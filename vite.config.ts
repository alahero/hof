import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteOrigin = (env.VITE_SITE_URL ?? '').replace(/\/$/, '');

  return {
    // Rutas relativas: assets con rutas relativas. Para GitHub Pages en subruta (user.github.io/repo/),
    // usa base: '/repo/' y redeploy para que las rutas de la SPA resuelvan bien con el servidor + React Router.
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
      /**
       * GitHub Pages: ante rutas inexistentes sirve 404.html; duplicar index.html permite que
       * rutas del cliente (React Router) carguen la SPA.
       */
      {
        name: 'hof-spa-404-fallback',
        closeBundle() {
          const outDir = path.resolve(__dirname, 'dist');
          const indexHtml = path.join(outDir, 'index.html');
          const notFoundHtml = path.join(outDir, '404.html');
          if (fs.existsSync(indexHtml)) {
            fs.copyFileSync(indexHtml, notFoundHtml);
          }
        },
      },
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
  };
});

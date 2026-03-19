/**
 * URL de un archivo en `public/`, respetando `base` de Vite (subcarpeta, GitHub Pages, etc.).
 */
export function publicUrl(pathFromPublic: string): string {
  const trimmed = pathFromPublic.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${trimmed}`;
}

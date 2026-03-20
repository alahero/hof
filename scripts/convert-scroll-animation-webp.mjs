/**
 * Convierte la secuencia PNG de Scroll-Animation a WebP en Scroll-Animation-webp.
 * Busca la mayor calidad posible con tamaño <= maxBytes por frame.
 */
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'public', 'images', 'Scroll-Animation');
const outDir = path.join(root, 'public', 'images', 'Scroll-Animation-webp');
const MAX_BYTES = 200 * 1024;

async function webpBestQualityUnderLimit(inputPath) {
  const input = await sharp(inputPath).ensureAlpha();
  let low = 35;
  let high = 92;
  let bestBuf = null;
  let bestQ = low;

  while (low <= high) {
    const q = Math.floor((low + high) / 2);
    const buf = await input
      .clone()
      .webp({ quality: q, alphaQuality: q, effort: 4 })
      .toBuffer();
    if (buf.length <= MAX_BYTES) {
      bestBuf = buf;
      bestQ = q;
      low = q + 1;
    } else {
      high = q - 1;
    }
  }

  if (!bestBuf) {
    bestBuf = await input
      .webp({ quality: 35, alphaQuality: 35, effort: 4 })
      .toBuffer();
    bestQ = 35;
  }
  return { buf: bestBuf, quality: bestQ };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(sourceDir))
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .sort();

  let over = 0;
  for (const name of files) {
    const inputPath = path.join(sourceDir, name);
    const { buf, quality } = await webpBestQualityUnderLimit(inputPath);
    const outName = name.replace(/\.png$/i, '.webp');
    await writeFile(path.join(outDir, outName), buf);
    if (buf.length > MAX_BYTES) over++;
    const kb = (buf.length / 1024).toFixed(1);
    console.log(`${outName}  ${kb} KB  q=${quality}`);
  }
  console.log(`\nListo: ${files.length} archivos → ${outDir}`);
  if (over) console.warn(`Aviso: ${over} frame(s) siguen por encima de ${MAX_BYTES / 1024} KB (reduce resolución o el límite).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Convierte PNG de public/images/source a WEBP en public/images.
 * Preserva canal alpha (transparencia). Para fondos negros transparentes, usar PNG con alpha previo.
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'public', 'images', 'source');
const outDir = path.join(root, 'public', 'images');

const ASSETS = [
  { in: 'HOF_RED_CUP.png', out: 'hof-red-cup.webp' },
  { in: 'HOF_FOOTBALL.png', out: 'hof-football.webp' },
];

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const { in: name, out: outName } of ASSETS) {
    const inputPath = path.join(sourceDir, name);
    const outputPath = path.join(outDir, outName);
    await sharp(inputPath)
      .webp({ quality: 85, alphaQuality: 90 })
      .toFile(outputPath);
    console.log(`Converted ${name} → ${outName}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const ROOT = path.resolve(process.cwd());
const INPUT_SVG = path.join(ROOT, 'public', 'RJ.svg');

async function ensureInputExists() {
  try {
    await fs.access(INPUT_SVG);
  } catch {
    throw new Error(`Missing input SVG: ${INPUT_SVG}`);
  }
}

async function renderPng(size) {
  const svg = await fs.readFile(INPUT_SVG);
  return sharp(svg, { density: 1200 })
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
}

async function writePublicFile(fileName, buffer) {
  const outPath = path.join(ROOT, 'public', fileName);
  await fs.writeFile(outPath, buffer);
  // eslint-disable-next-line no-console
  console.log(`wrote public/${fileName}`);
}

async function main() {
  await ensureInputExists();

  const png16 = await renderPng(16);
  const png32 = await renderPng(32);
  const png48 = await renderPng(48);
  const png180 = await renderPng(180);
  const png192 = await renderPng(192);
  const png512 = await renderPng(512);

  await writePublicFile('favicon-16x16.png', png16);
  await writePublicFile('favicon-32x32.png', png32);
  await writePublicFile('apple-touch-icon.png', png180);
  await writePublicFile('android-chrome-192x192.png', png192);
  await writePublicFile('android-chrome-512x512.png', png512);

  const ico = await pngToIco([png16, png32, png48]);
  await writePublicFile('favicon.ico', ico);
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

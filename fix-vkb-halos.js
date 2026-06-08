// fix-vkb-halos.js — Weiße JPEG-Halos entlang roter Linien entfernen
// Verbesserter Filter: G < 100 AND B < 100 als zusätzliche Bedingung für Rot,
// damit aufgehellte Halo-Pixel (z.B. R=255, G=120, B=120) nicht mehr als "Rot" gelten.
// Anschließend: 2-Pass-Halo-Dilation — helle Pixel neben roten werden ebenfalls entfernt.

const { Jimp } = require('jimp');
const path = require('path');

const IMAGES = [
  'assets/vkb-gladiator-nxt.png',
  'assets/vkb-gladiator-nxt-l.png',
  'assets/vkb-gladiator-scg-l.png',
  'assets/vkb-gladiator-scg-r.png',
];

function getSat(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function shouldKeep(r, g, b) {
  const max = Math.max(r, g, b);

  // Dunkel: Joystick-Gehäuse, schwarze Linien
  if (max <= 80) return true;

  // Dunkelgrau: Joystick-Körper, Schatten
  const sat = getSat(r, g, b);
  if (max < 175 && sat < 0.18) return true;

  // Rot: echte rote Linien/Punkte
  // Strenger als vorher: G < 100 UND B < 100 verhindert rosa Halo-Pixel
  if (r >= 2 * g && r >= 2 * b && g < 100 && b < 100) return true;

  // Reinweiß: z.B. weiße Label-Kästen auf dem Template
  if (r >= 242 && g >= 242 && b >= 242) return true;

  return false;
}

async function processImage(filePath) {
  console.log(`Verarbeite: ${filePath}`);
  const image = await Jimp.read(filePath);
  const { width, height, data } = image.bitmap;

  // Pass 1: Pixel-Filter
  const keepMask = new Uint8Array(width * height); // 1 = behalten, 0 = transparent
  const isRedPixel = new Uint8Array(width * height);

  image.scan(0, 0, width, height, (x, y, idx) => {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    if (shouldKeep(r, g, b)) {
      keepMask[y * width + x] = 1;
      // Rot-Pixel für Pass 2 markieren
      if (r >= 2 * g && r >= 2 * b && g < 100 && b < 100 && Math.max(r,g,b) > 80) {
        isRedPixel[y * width + x] = 1;
      }
    }
  });

  // Pass 2: Halo-Dilation — helle Pixel in Radius 2 um rote Pixel entfernen
  const haloMask = new Uint8Array(width * height);
  const RADIUS = 2;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!isRedPixel[y * width + x]) continue;
      for (let dy = -RADIUS; dy <= RADIUS; dy++) {
        for (let dx = -RADIUS; dx <= RADIUS; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const ni = ny * width + nx;
          if (!isRedPixel[ni]) haloMask[ni] = 1;
        }
      }
    }
  }

  // Pass 2 anwenden: helle Pixel (Luminanz > 160) in der Halo-Zone transparent machen
  image.scan(0, 0, width, height, (x, y, idx) => {
    const i = y * width + x;
    if (!keepMask[i]) {
      data[idx + 3] = 0;
      return;
    }
    if (haloMask[i]) {
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      if (luminance > 160) {
        data[idx + 3] = 0;
        return;
      }
    }
    data[idx + 3] = 255;
  });

  await image.write(filePath);
  console.log(`  ✓ gespeichert`);
}

(async () => {
  for (const img of IMAGES) {
    await processImage(img);
  }
  console.log('\nAlle Bilder fertig.');
})();

// fix-vkb-halos.js — Entfernt JPEG-Artefakte neben roten Linien in VKB-Bildern
// Pass 1: pinkliche Halos (r>=2g, r>=2b, g>100 oder b>100)
// Pass 2: weiße/hellgraue Artefaktpixel direkt neben echten roten Pixeln

const { Jimp } = require('jimp');

const IMAGES = [
  'assets/vkb-gladiator-nxt.png',
  'assets/vkb-gladiator-nxt-l.png',
  'assets/vkb-gladiator-scg-l.png',
  'assets/vkb-gladiator-scg-r.png',
];

function isHalo(r, g, b) {
  return r >= 2 * g && r >= 2 * b && (g > 100 || b > 100);
}

async function processImage(filePath) {
  console.log(`Verarbeite: ${filePath}`);
  const image = await Jimp.read(filePath);
  const { width, height, data } = image.bitmap;

  // Pass 1: pinkliche Halos
  let pass1 = 0;
  image.scan(0, 0, width, height, (x, y, idx) => {
    if (data[idx + 3] === 0) return;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    if (isHalo(r, g, b)) {
      data[idx + 3] = 0;
      pass1++;
    }
  });

  // Pass 2: weiße Artefakte neben echten roten Pixeln
  // Erst rote Pixel markieren (nach Pass 1)
  const isRed = new Uint8Array(width * height);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a > 0 && r >= 2 * g && r >= 2 * b && g < 100 && b < 100 && Math.max(r, g, b) > 80)
      isRed[i / 4] = 1;
  }

  let pass2 = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      if (data[idx + 3] === 0) continue;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (!(r > 200 && g > 200 && b > 200)) continue; // kein heller Pixel
      // Hat dieser Pixel einen roten 4-Nachbarn?
      const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
      const adjRed = neighbors.some(([nx, ny]) =>
        nx >= 0 && nx < width && ny >= 0 && ny < height && isRed[ny * width + nx]
      );
      if (adjRed) {
        data[idx + 3] = 0;
        pass2++;
      }
    }
  }

  await image.write(filePath);
  console.log(`  ✓ Pass 1: ${pass1} pinklich, Pass 2: ${pass2} weiß — gespeichert`);
}

(async () => {
  for (const img of IMAGES) {
    await processImage(img);
  }
  console.log('\nAlle Bilder fertig.');
})();

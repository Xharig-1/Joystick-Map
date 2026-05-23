import { Jimp } from 'jimp';

const TOLERANCE = 8;

function isWhite(data, i4) {
  return data[i4]   >= 255 - TOLERANCE &&
         data[i4+1] >= 255 - TOLERANCE &&
         data[i4+2] >= 255 - TOLERANCE;
}

async function removeBg(filePath, largeArea) {
  console.log(`\nVerarbeite: ${filePath} (largeArea=${largeArea})`);
  const img = await Jimp.read(filePath);
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const d = img.bitmap.data;
  const visited = new Uint8Array(w * h);
  let totalRemoved = 0;

  for (let sy = 0; sy < h; sy++) {
    for (let sx = 0; sx < w; sx++) {
      const si = sy * w + sx;
      if (visited[si] || !isWhite(d, si * 4)) continue;

      // BFS: Region sammeln
      const indices = [];
      const queue = [sx, sy];
      visited[si] = 1;
      let touchesEdge = (sx === 0 || sy === 0 || sx === w - 1 || sy === h - 1);
      let qi = 0;

      while (qi < queue.length) {
        const cx = queue[qi++], cy = queue[qi++];
        const ci = cy * w + cx;
        indices.push(ci);

        for (const [nx, ny] of [[cx-1,cy],[cx+1,cy],[cx,cy-1],[cx,cy+1]]) {
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          const ni = ny * w + nx;
          if (!visited[ni] && isWhite(d, ni * 4)) {
            visited[ni] = 1;
            if (nx === 0 || ny === 0 || nx === w-1 || ny === h-1) touchesEdge = true;
            queue.push(nx, ny);
          }
        }
      }

      if (touchesEdge || indices.length >= largeArea) {
        for (const idx of indices) d[idx * 4 + 3] = 0;
        totalRemoved += indices.length;
        if (!touchesEdge)
          console.log(`  Innere Region entfernt: ${indices.length} px`);
      }
    }
  }

  console.log(`  Gesamt entfernt: ${totalRemoved} px`);
  await img.write(filePath);
  console.log(`  Gespeichert: ${filePath}`);
}

// Titelbereich gezielt per Koordinaten entfernen (Virpil — Hintergrund ist hellgrau, nicht reinweiß)
function clearLightRect(d, imgW, x1, y1, x2, y2, minBrightness) {
  let count = 0;
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      const i = (y * imgW + x) * 4;
      if (d[i+3] > 0 && d[i] >= minBrightness && d[i+1] >= minBrightness && d[i+2] >= minBrightness) {
        d[i+3] = 0; count++;
      }
    }
  }
  console.log(`  Titelbox-Rect entfernt: ${count} px (minBrightness=${minBrightness})`);
}

async function fixVirpilTitleBox(filePath) {
  const img = await Jimp.read(filePath);
  const scale = 2.083333;
  // Titelbox-Bereich: Titel+Untertitel-Felder + Rand (Koordinaten in PDF-Punkten)
  const x1 = Math.round(98  * scale), y1 = Math.round(6  * scale);
  const x2 = Math.round(292 * scale), y2 = Math.round(86 * scale);
  // Hellgrau (≥180) entfernen — dunkle Text/Rahmen-Pixel bleiben erhalten
  clearLightRect(img.bitmap.data, img.bitmap.width, x1, y1, x2, y2, 180);
  await img.write(filePath);
  console.log(`  Titelbox-Fix gespeichert: ${filePath}`);
}

await removeBg('assets/alpha-l-template.png', 50000);
await fixVirpilTitleBox('assets/alpha-l-template.png');
await removeBg('assets/alpha-r-template.png', 1);
await fixVirpilTitleBox('assets/alpha-r-template.png');
await removeBg('assets/vkb-gladiator-scg-l.png', 1);
await removeBg('assets/vkb-gladiator-scg-r.png', 1);

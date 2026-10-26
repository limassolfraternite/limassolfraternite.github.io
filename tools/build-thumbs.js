/* =============================================================================
   build-thumbs.js  —  small copies of photos for fast-loading tiles and cards
   =============================================================================
   For every photo in assets/img/gallery/ and assets/img/posters/ this makes a
   "-sm" copy, at most 800px wide (photo.webp → photo-sm.webp). Gallery tiles,
   project cards and video covers load the small copy; the full photo is only
   downloaded when someone opens it in the viewer.

   Runs on every deploy. Needs ImageMagick (`convert`); if it is missing the
   site still works — main.js falls back to the full-size photo.
   (To run locally: `node tools/build-thumbs.js`.)
   ============================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DIRS = ['assets/img/gallery', 'assets/img/posters'];
const IMG = /\.(webp|jpe?g|png)$/i;

try {
  execFileSync('convert', ['-version'], { stdio: 'ignore' });
} catch (e) {
  console.log('build-thumbs: ImageMagick not found — skipping (full-size photos will be used).');
  process.exit(0);
}

let made = 0, kept = 0;
DIRS.forEach((dir) => {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return;
  const files = fs.readdirSync(abs);
  files.forEach((f) => {
    if (!IMG.test(f) || /-sm\.[a-z]+$/i.test(f)) return;
    const src = path.join(abs, f);
    const out = path.join(abs, f.replace(IMG, '-sm.webp'));
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) { kept++; return; }
    execFileSync('convert', [src, '-resize', '800x800>', '-strip', '-quality', '72', '-define', 'webp:method=6', out]);
    made++;
  });
  /* remove small copies whose original was deleted */
  files.forEach((f) => {
    const m = f.match(/^(.*)-sm\.webp$/i);
    if (m && !files.some((o) => o !== f && IMG.test(o) && o.replace(IMG, '') === m[1])) {
      fs.unlinkSync(path.join(abs, f));
    }
  });
});
console.log('build-thumbs: ' + made + ' made, ' + kept + ' already up to date.');

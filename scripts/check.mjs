// Self-check: node scripts/check.mjs   (no deps)
// Catches the class of breakage that silently kills main.js: a referenced
// id/class renamed in index.html or style.css but not in main.js.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (p) => readFileSync(new URL(p, import.meta.url), 'utf8');
const html = read('../index.html');
const css = read('../css/style.css');
const js = read('../js/main.js');

// 1. every id main.js looks up exists in the markup
const ids = [...js.matchAll(/getElementById\('([^']+)'\)/g)].map((m) => m[1]);
assert.ok(ids.length >= 4, 'expected several id lookups');
for (const id of ids) assert.ok(html.includes(`id="${id}"`), `missing #${id} in index.html`);

// 2. every class main.js toggles or queries is styled
const classes = [...js.matchAll(/classList\.(?:add|remove|toggle)\('([^']+)'/g)].map((m) => m[1]);
for (const c of classes) assert.ok(css.includes(`.${c}`), `class .${c} toggled by js but not in css`);

// 3. narrative + a11y invariants
assert.match(html, /<html lang="id">/);
assert.equal((html.match(/<!-- \d\./g) || []).length, 9, 'nine story sections');
assert.ok(!/<audio[^>]*\bautoplay\b/.test(html), 'audio must never autoplay');
assert.ok(!/<audio[^>]*\bloop\b/.test(html), 'audio must not loop');
assert.match(css, /prefers-reduced-motion/, 'reduced motion handled');
assert.match(css, /\.js \[data-reveal\]/, 'reveal only hidden when js runs');
assert.ok(!/position:\s*fixed/.test(css.replace(/body::after[\s\S]*?\}/, '')), 'no sticky layers');

// 4. no personal fact invented: placeholders survive as written in CONTENT.md
for (const p of ['[TITLE]', '[DATE]', '[DESCRIPTION]', '[CAPTION]', '[HAL YANG KAMU SUKA DARI CHELSY]'])
  assert.ok(html.includes(p), `placeholder ${p} should remain until real content exists`);

console.log(`ok — ${ids.length} id refs, ${classes.length} class toggles verified`);

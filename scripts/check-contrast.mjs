// Checks the colour tokens in src/app/globals.css against WCAG 2.2 AA.
// Text pairs need 4.5:1; focus rings and control borders need 3:1.
// Run with: npm run check:contrast
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");

/** Reads `--name: #hex;` declarations from the first block that follows `selector`. */
function tokens(selector) {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`Block not found: ${selector}`);
  const open = css.indexOf("{", start);
  const body = css.slice(open + 1, css.indexOf("}", open));
  return Object.fromEntries(
    [...body.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)].map((m) => [m[1], m[2]]),
  );
}

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// [foreground, background, minimum ratio]
const pairs = [
  ["ink", "canvas", 4.5],
  ["ink", "surface", 4.5],
  ["ink", "surface-raised", 4.5],
  ["ink", "highlight", 4.5],
  ["muted", "canvas", 4.5],
  ["muted", "surface", 4.5],
  ["muted", "surface-raised", 4.5],
  ["link", "canvas", 4.5],
  ["link", "surface", 4.5],
  ["link", "surface-raised", 4.5],
  ["on-accent", "accent", 4.5],
  ["on-accent", "accent-hover", 4.5],
  ["accent", "on-accent", 4.5],
  ["success", "success-surface", 4.5],
  ["danger", "danger-surface", 4.5],
  ["focus", "canvas", 3],
  ["focus", "surface", 3],
  ["line-strong", "canvas", 3],
  ["line-strong", "surface", 3],
  ["accent", "canvas", 3],
];

const light = tokens(":root {");
const dark = tokens('[data-theme="dark"] {');
const systemDark = tokens(":root:not([data-theme]) {");

let failures = 0;

for (const [name, theme] of [["light", light], ["dark", { ...light, ...dark }]]) {
  console.log(`\n${name} theme`);
  for (const [fg, bg, min] of pairs) {
    const value = ratio(theme[fg], theme[bg]);
    const ok = value >= min;
    if (!ok) failures += 1;
    console.log(
      `  ${ok ? "pass" : "FAIL"}  ${value.toFixed(2).padStart(5)}:1 (needs ${min})  ${fg} on ${bg}`,
    );
  }
}

// The no-JavaScript fallback must stay identical to the dark theme.
const drift = Object.keys(dark).filter((key) => dark[key] !== systemDark[key]);
if (drift.length > 0) {
  failures += drift.length;
  console.log(`\nFAIL  system-dark fallback differs from the dark theme: ${drift.join(", ")}`);
}

console.log(failures === 0 ? "\nAll colour pairs pass." : `\n${failures} problem(s) found.`);
process.exit(failures === 0 ? 0 : 1);

// Build script replacing gulp.
// 1. Compiles assets/scss/index.scss -> assets/css/index.min.css (compressed)
// 2. Concatenates every assets/js/*.js file and minifies -> assets/js/dist/bundle-min.js
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import * as sass from "sass";
import { transform } from "esbuild";

// --- CSS ---
const { css } = sass.compile("assets/scss/index.scss", {
  style: "compressed",
  silenceDeprecations: ["import"],
});
mkdirSync("assets/css", { recursive: true });
writeFileSync("assets/css/index.min.css", css);
console.log("✓ built assets/css/index.min.css");

// --- JS ---
const jsFiles = readdirSync("assets/js")
  .filter((f) => f.endsWith(".js"))
  .sort(); // alphabetical, same order gulp used
const bundle = jsFiles
  .map((f) => readFileSync(`assets/js/${f}`, "utf8"))
  .join("\n");
const { code } = await transform(bundle, { minify: true });
mkdirSync("assets/js/dist", { recursive: true });
writeFileSync("assets/js/dist/bundle-min.js", code);
console.log(`✓ built assets/js/dist/bundle-min.js (from ${jsFiles.join(", ")})`);

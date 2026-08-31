import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";
import path from "node:path";

// Cloudflare Pages may invoke `next build` directly and therefore skip npm
// lifecycle scripts. Generate any newly published Signal artwork before the
// App Router reads content so direct builds and `npm run build` stay equivalent.
if (process.argv.includes("build")) {
  execFileSync(process.execPath, [path.join(__dirname, "scripts/generate-signal-heroes.mjs"), "--missing=true"], {
    cwd: __dirname,
    stdio: "inherit",
  });

  // Direct `next build` can also skip npm's postbuild lifecycle. Keep exported
  // zh-Hant documents correct in both build paths.
  process.once("exit", (exitCode) => {
    if (exitCode !== 0) return;
    execFileSync(process.execPath, [path.join(__dirname, "scripts/postprocess-static-html.mjs")], {
      cwd: __dirname,
      stdio: "inherit",
    });
  });
}

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;

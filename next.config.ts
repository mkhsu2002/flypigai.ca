import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";
import path from "node:path";

// Cloudflare Pages may invoke `next build` directly and therefore skip npm's
// postbuild lifecycle. Keep exported zh-Hant documents correct in both paths.
if (process.argv.includes("build")) {
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

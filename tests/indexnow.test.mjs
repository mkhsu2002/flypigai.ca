import assert from "node:assert/strict";
import test from "node:test";
import { buildIndexNowPayload, parseCanonicalUrls, requireIndexNowConfig } from "../scripts/submit-indexnow.mjs";

test("parses, deduplicates and validates changed canonical URLs", () => {
  const urls = parseCanonicalUrls(`
    # release URLs
    https://flypigai.ca/services
    https://flypigai.ca/services
    https://flypigai.ca/technologies/edge-ai-compute
  `);
  assert.deepEqual(urls, ["https://flypigai.ca/services", "https://flypigai.ca/technologies/edge-ai-compute"]);
  assert.throws(() => parseCanonicalUrls("https://example.com/not-owned"), /flypigai\.ca/);
  assert.throws(() => parseCanonicalUrls("http://flypigai.ca/insecure"), /HTTPS/);
});

test("refuses missing or unsafe IndexNow ownership configuration", () => {
  assert.throws(() => requireIndexNowConfig({}), /INDEXNOW_KEY/);
  assert.throws(() => requireIndexNowConfig({ INDEXNOW_KEY: "abc12345" }), /INDEXNOW_KEY_LOCATION/);
  assert.throws(() => requireIndexNowConfig({ INDEXNOW_KEY: "abc12345", INDEXNOW_KEY_LOCATION: "https://example.com/key.txt" }), /flypigai\.ca/);
});

test("builds an IndexNow payload without exposing configuration outside the request body", () => {
  const config = requireIndexNowConfig({ INDEXNOW_KEY: "abc12345", INDEXNOW_KEY_LOCATION: "https://flypigai.ca/indexnow-key.txt" });
  assert.deepEqual(buildIndexNowPayload(["https://flypigai.ca/services"], config), {
    host: "flypigai.ca",
    key: "abc12345",
    keyLocation: "https://flypigai.ca/indexnow-key.txt",
    urlList: ["https://flypigai.ca/services"],
  });
});

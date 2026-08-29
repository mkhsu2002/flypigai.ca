import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

test("primary and footer navigation expose the commercial owner", () => {
  const chrome = read("components/SiteChrome.tsx");
  assert.match(chrome, /href:\s*services/);
  assert.match(chrome, /How We Help/);
  assert.match(chrome, /合作方式/);
  assert.match(chrome, /href=\{services\}/);
});

test("both paying audiences have dedicated owner pages", () => {
  for (const route of [
    "app/services/canadian-product-teams/page.tsx",
    "app/services/taiwan-technology-companies/page.tsx",
    "app/zh/services/taiwan-technology-companies/page.tsx",
  ]) {
    assert.equal(existsSync(join(root, route)), true, `${route} should exist`);
  }
});

test("public inquiry copy uses the company address and never a personal Gmail", () => {
  const publicSources = [
    "components/ContactForm.tsx",
    "app/contact/page.tsx",
    "app/zh/contact/page.tsx",
  ].map(read).join("\n");
  assert.doesNotMatch(publicSources, /mkhsu2002@gmail\.com/i);
  assert.match(publicSources, /info@flypigai\.ca/i);
});

test("services lead with the two bounded commercial paths", () => {
  const services = `${read("app/services/page.tsx")}\n${read("app/zh/services/page.tsx")}`;
  assert.match(services, /Edge AI Technology Route & Qualification/);
  assert.match(services, /Canada Application & Design-In Readiness/);
  assert.match(services, /Edge AI 技術路徑與資格評估/);
  assert.match(services, /加拿大應用與 Design-In 準備度/);
});

test("Physical AI and the opening essay describe intelligence, not deployment delivery", () => {
  const physicalAi = read("app/physical-ai/page.tsx");
  const essay = read("app/insights/canada-needs-physical-ai-integrators/page.tsx");
  assert.match(physicalAi, /Physical AI Deployment Readiness in Canada/);
  assert.doesNotMatch(physicalAi, /Discuss a deployment/);
  assert.doesNotMatch(physicalAi, /We define measurable success criteria/);
  assert.match(essay, /design intelligence, requirement clarification and technology qualification/i);
  assert.doesNotMatch(essay, /local representation and commercialization support/i);
});

import type { Metadata } from "next";
import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { technologyItems } from "../../../atlas/browseData";
import { makeMetadata } from "../../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大 Physical AI 技術地圖",
  description: "探索加拿大機器視覺、導航、機器人軟體、自主平台與關鍵技術。",
  path: "/zh/atlas/technologies",
  enPath: "/atlas/technologies",
  zhPath: "/zh/atlas/technologies",
  locale: "zh_TW",
});

export default function ZhTechnologiesPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by technology" eyebrowZh="依技術瀏覽" title="Physical AI Technologies" titleZh="Physical AI 技術地圖" lead="Explore the technologies that enable robots, drones and autonomous systems to perceive, decide, move and operate." leadZh="探索讓機器人、無人機與自主系統得以感知、決策、移動及執行任務的關鍵技術。" items={technologyItems} />;
}

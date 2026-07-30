import type { Metadata } from "next";
import AtlasBrowsePage from "../AtlasBrowsePage";
import { technologyItems } from "../browseData";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "Physical AI Technologies in Canada",
  description: "Explore Canada's machine vision, navigation, robotics software, autonomous platforms and enabling technologies.",
  path: "/atlas/technologies",
  enPath: "/atlas/technologies",
  zhPath: "/zh/atlas/technologies",
});

export default function TechnologiesPage() {
  return <AtlasBrowsePage eyebrow="Browse by technology" eyebrowZh="依技術瀏覽" title="Physical AI Technologies" titleZh="Physical AI 技術地圖" lead="Explore the technologies that enable robots, drones and autonomous systems to perceive, decide, move and operate." leadZh="探索讓機器人、無人機與自主系統得以感知、決策、移動及執行任務的關鍵技術。" items={technologyItems} />;
}

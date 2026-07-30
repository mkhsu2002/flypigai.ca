import type { Metadata } from "next";
import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { industryItems } from "../../../atlas/browseData";
import { makeMetadata } from "../../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大 Physical AI 產業與應用",
  description: "探索加拿大正在採用機器人、無人機、自動化與自主系統的主要產業。",
  path: "/zh/atlas/industries",
  enPath: "/atlas/industries",
  zhPath: "/zh/atlas/industries",
  locale: "zh_TW",
});

export default function ZhIndustriesPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by industry" eyebrowZh="依產業瀏覽" title="Industries & Applications" titleZh="產業與應用地圖" lead="See where robotics, drones and autonomous systems are being applied across Canada's economy and infrastructure." leadZh="掌握機器人、無人機與自主系統在加拿大經濟及基礎建設中的主要應用場景。" items={industryItems} />;
}

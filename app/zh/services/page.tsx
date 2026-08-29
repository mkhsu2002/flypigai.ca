import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大與台灣 Edge AI 技術資格評估",
  description: "FlyPig AI 以兩條明確合作路徑，協助加拿大產品團隊評估台灣技術，並協助台灣科技業者準備加拿大應用與 Design-In 對話。",
  path: "/zh/services",
  enPath: "/services",
  zhPath: "/zh/services",
  locale: "zh_TW",
});

const paths = [
  { audience: "加拿大產品團隊", title: "Edge AI 技術路徑與資格評估", body: "把產品目標與場域限制整理成架構選項、台灣技術候選、適配風險，以及仍待驗證的問題。", outputs: ["需求與限制簡報", "架構選項", "候選技術適配與風險矩陣", "待驗證問題"], href: "/services/canadian-product-teams" },
  { audience: "台灣科技業者", title: "加拿大應用與 Design-In 準備度", body: "把產品能力轉譯成加拿大應用情境，辨識證據缺口與導入摩擦，再準備可信的技術對話。", outputs: ["加拿大應用適配簡報", "目標組織類型", "Design-In 摩擦檢視", "合格機會路徑"], href: "/zh/services/taiwan-technology-companies" },
];

export default function ZhServicesPage() {
  return <main lang="zh-Hant">
    <JsonLd data={breadcrumbJsonLd([{ name: "首頁", path: "/zh" }, { name: "合作方式", path: "/zh/services" }])} />
    <SiteHeader locale="zh" languageHref="/services" />
    <section className="hero shell"><p className="eyebrow">合作方式 · 加拿大 ↔ 台灣</p><h1>用兩條聚焦路徑，把技術不確定性轉成可判斷的下一步。</h1><p className="lead">FlyPig AI 是連結加拿大與台灣的 Edge AI／Physical AI 設計情報公司。我們協助加拿大產品團隊評估台灣技術路徑，也協助台灣科技業者準備加拿大應用與 Design-In 對話。</p><div className="actions"><a className="pill primary" href="/zh/contact">討論一個具體問題</a><a className="pill secondary" href="/editorial-policy" lang="en">編輯獨立政策</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">選擇合作路徑</p><h2>先確認誰要做出技術決策。</h2></div><p className="section-copy">兩條路徑的輸入與產出不同，但都從明確的產品或應用問題開始，而不是泛泛尋找名單。</p></div><div className="grid2">{paths.map((path) => <article className="card" key={path.title}><span className="num">適合：{path.audience}</span><h3>{path.title}</h3><p>{path.body}</p><ul>{path.outputs.map((output) => <li key={output}>{output}</li>)}</ul><div className="actions"><a className="pill secondary" href={path.href}>查看完整合作範圍</a></div></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">合作邊界</p><h2>研究、資格評估與引介不等於正式授權。</h2></div><p className="section-copy">FlyPig AI 不取代工程驗證、法律意見、認證或場域安全審查。公開研究、資格評估或技術引介，也不代表代理、經銷、部署承包或供應商關係；任何進一步關係都必須另有書面依據與明確範圍。</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">從一個決策開始</p><h2>告訴我們需要釐清的產品需求或加拿大應用問題。</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">開始具體對話</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}

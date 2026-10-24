import type { Metadata } from "next";
import JsonLd from "../../../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../../../components/SiteChrome";
import { socialImageUrl } from "../../../../../lib/socialImages";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../../../seo";
import { seriesPath, seriesTitle } from "../../../../insights/physical-ai-modularization/series";
import { forecast } from "../../../../insights/physical-ai-modularization/beyond-the-robot-operating-system/article";
import { forecastZh, forecastLayersZh, forecastSourcesZh, forecastTestsZh } from "../../../../insights/physical-ai-modularization/beyond-the-robot-operating-system/article.zh";
import "../../../../insights/physical-ai-modularization/beyond-the-robot-operating-system/forecast.css";

export const metadata: Metadata = makeMetadata({
  title: forecastZh.seoTitle,
  socialTitle: forecastZh.title,
  description: forecastZh.description,
  path: forecastZh.path,
  enPath: forecast.path,
  zhPath: forecastZh.path,
  locale: "zh_TW",
  type: "article",
  image: { url: forecastZh.socialImage, width: 1200, height: 630, alt: forecastZh.imageAlt },
  article: {
    publishedTime: forecastZh.date,
    modifiedTime: forecastZh.date,
    authors: ["FlyPig AI"],
    section: seriesTitle,
    tags: ["Physical AI", "機器人", "科技趨勢預測", "機器人作業系統", "世界模型", "能力介面"],
  },
});

function Reference({ id }: { id: string }) {
  const source = forecastSourcesZh.find((item) => item.id === id)!;
  return <a href={`#source-${id}`} aria-label={`參考來源：${source.name}`}>[{forecastSourcesZh.indexOf(source) + 1}]</a>;
}

export default function ZhPhysicalAiNextDecadePage() {
  const articleUrl = `${siteUrl}${forecastZh.path}`;
  return <main lang="zh-Hant">
    <JsonLd data={breadcrumbJsonLd([{ name: "首頁", path: "/zh" }, { name: "產業分析", path: "/insights" }, { name: seriesTitle, path: seriesPath }, { name: "Physical AI 的下一個十年", path: forecastZh.path }])} />
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "Article", "@id": `${articleUrl}#article`,
      headline: forecastZh.title, description: forecastZh.description,
      datePublished: forecastZh.date, dateModified: forecastZh.date,
      author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "FlyPig AI" },
      publisher: { "@id": `${siteUrl}/#organization` },
      image: { "@type": "ImageObject", url: socialImageUrl(forecastZh.socialImage), width: 1200, height: 630, caption: "FlyPig AI 原創預測架構，並非已成立的產業標準。" },
      mainEntityOfPage: articleUrl,
      isPartOf: { "@type": "CreativeWorkSeries", name: seriesTitle, url: `${siteUrl}${seriesPath}` },
      articleSection: seriesTitle, inLanguage: "zh-Hant", genre: "科技趨勢預測",
      citation: forecastSourcesZh.map((source) => source.url),
      translationOfWork: { "@type": "Article", "@id": `${siteUrl}${forecast.path}#article`, url: `${siteUrl}${forecast.path}`, inLanguage: "en-CA" },
    }} />
    <SiteHeader locale="zh" languageHref={forecast.path} />
    <article className="article-shell shell">
      <nav className="article-breadcrumb" aria-label="麵包屑導覽"><a href="/zh">首頁</a><span>/</span><a href={seriesPath}>研究系列（英文）</a><span>/</span><span aria-current="page">下一個十年</span></nav>
      <header className="article-header">
        <p className="eyebrow">FlyPig AI 科技趨勢預測 · 2026 年 10 月</p>
        <h1>{forecastZh.title}</h1>
        <p className="article-deck">下一個機器人平台，可能圍繞資料、模擬、學習、驗證與營運的完整循環形成。共通作業系統可以是這個生態中的一層，但光有作業系統，還不足以讓整個生態運作。</p>
        <div className="article-meta"><span>作者：FlyPig AI 研究團隊</span><span>發布：<time dateTime={forecastZh.date}>2026 年 10 月 24 日</time></span><span>預測期間：{forecastZh.horizon}</span><span>獨立研究 · 繁中譯本</span></div>
        <nav className="article-language" aria-label="文章語言"><a href={forecast.path} hrefLang="en-CA" lang="en">English</a><a href={forecastZh.path} hrefLang="zh-Hant" lang="zh-Hant" aria-current="page">繁體中文</a></nav>
      </header>

      <figure className="article-hero-visual">
        <img src={forecastZh.image} width="1600" height="1000" alt={forecastZh.imageAlt} fetchPriority="high" />
        <figcaption>FlyPig AI 原創編輯架構圖。圖中的分層與生命週期是預測模型，不是廠商架構、經認證的安全系統或已成立的產業標準。<a href="#forecast-framework">下方提供可閱讀的分層文字說明。</a></figcaption>
      </figure>

      <div className="article-lead-card"><span className="mono">FlyPig 預測 · 並非已確認的產業結果</span><p>未來五至十年，Physical AI 可能形成數個共通層，讓不同機器人更容易成為應用開發的基礎。最有競爭力的平台，可能把可呼叫能力與持續學習、持續營運的生命週期連接起來。市場不一定由一家公司、一個模型或一套機器人作業系統統一。</p></div>

      <div className="article-body">
        <section>
          <h2>機器人展示背後的平台問題</h2>
          <p>看著人形機器人行走，或機器狗爬樓梯，我們自然會問：這台機器有什麼用？但更具影響力的問題，可能是什麼條件能讓成千上萬的開發者、製造商與企業，在它的基礎上建立實際有用的工作。</p>
          <p>這正是 FlyPig AI 的 <a href={seriesPath}>Physical AI Goes Modular 研究系列（英文）</a>持續探討的問題：誰會成為 Physical AI 的 Android？我們在這份十月預測中，進一步提出一種具體可能性：能夠長期發揮價值的平台，可能是連結機器整個生命週期中資料、模擬、學習、驗證、部署、營運與再學習的技術生態。</p>
          <p>這是一項市場結構假說。現有公告讓它值得檢驗，但還沒有確立贏家。證據同時容許另一種情境：數個彼此競爭、部分相容的生態並存，而硬體企業仍保有重要價值。</p>
        </section>

        <section>
          <h2>智慧型手機的類比，能解釋什麼，又止步於何處？</h2>
          <p>智慧型手機透過可重複使用的軟體、晶片參考設計、開發工具、應用分發與製造能力相互配合，逐步擴大規模。Android 為不同裝置製造商提供共同軟體基礎，也讓開發者可以面向更廣泛的裝置，而不必一次只支援一款手機。</p>
          <p>對機器人而言，這個類比的價值在於減少重複的工程工作。它不代表所有機器人本體都會變得可以互換，也不代表硬體製造商將不再獲利。具差異化的零組件、製造能力與高度整合的系統，仍可能保有可觀價值。</p>
          <p>機器人還面臨更困難的相容性問題。能在兩款手機上執行的軟體，不需要讓不同重量的物體在共用實體空間中移動。一套能在某支機械手臂上運作的控制策略，可能因觸及範圍、負載、感測器、致動方式、接觸動力學或安全限制不同，而無法在另一支手臂上使用。Physical AI 平台必須銜接這些差異，同時清楚揭露每項能力可以安全使用的條件。</p>
        </section>

        <section>
          <h2>證據：可重複使用的機器人軟體，正成為策略資產</h2>
          <p><strong>廠商公告。</strong>9 月 22 日，Intrinsic 發布 Intrinsic Core。這套採用 Apache 2.0 授權、與 ROS 相容的機器人能力集合，涵蓋即時控制、動作與抓取規劃、感知、校準及模擬。關鍵承諾是可組合性：開發者能透過硬體抽象介面重複使用能力，而不必重新建立每一項整合。但支援哪些硬體，以及是否完成生產環境資格驗證，仍然重要。<Reference id="intrinsic" /></p>
          <p>隔天，Qualcomm 宣布同意收購長期維護 MoveIt 的 PickNik。Qualcomm 表示，MoveIt 將維持開源，並持續支援第三方硬體。收購協議不等於交易已完成，而這項未來承諾，也不能證明通用互通性已經成立。<Reference id="picknik" /></p>
          <p><strong>FlyPig 判讀。</strong>中介軟體、動作規劃與開發工具，正在成為潛在的平台控制點。開源授權可以降低採用門檻，但相容性還需要持續維護的介面、受支援的裝置、可預期的行為，以及獨立的開發者生態。僅僅取得原始碼，並不能保證這些條件。</p>
        </section>

        <section>
          <h2>證據：競爭正在超越執行環境</h2>
          <p><strong>廠商公告。</strong>AWS 於 10 月 7 日推出 Physical AI Toolchain，透過參考架構與部署自動化，串接資料匯入、模擬、訓練及邊緣部署。它整合 AWS 服務與 NVIDIA 技術，包括 Isaac Sim、GR00T、Cosmos 和 OSMO。AWS 強調可攜格式與不限定機器人本體的工作流程，但已公布的做法，仍與 AWS 基礎設施及 NVIDIA 技術堆疊緊密相連。<Reference id="aws" /></p>
          <p>較新的十月證據，讓執行環境與生命週期之間的差異更加具體。10 月 21 日，NVIDIA 宣布以 Holoscan 為基礎的開源 Isaac OS 執行環境，以及已正式提供的 Isaac Lab 3.0。同一天，CoreWeave 推出 Physical AI Launchables，提供涉及 Isaac Sim、CARLA 與 MuJoCo 等工具、可重複執行的工程工作流程。這些是彼此相關的平台投資，並非各自獨立證明供應商中立機器人應用標準的成果。<Reference id="isaac" /> <Reference id="coreweave" /></p>
          <p><strong>FlyPig 判讀。</strong>機器人作業系統處理的是部分執行問題；生命週期平台則處理團隊如何收集資料、訓練策略、測試變更、進行部署，以及從後續營運中繼續學習。策略控制力可能同時累積在這兩個邊界。能夠執行某項工作負載，不代表其中的模型、資料、應用邏輯或安全證據，就能以低成本移轉到另一家供應商。</p>
        </section>

        <section>
          <h2>證據：世界模型讓「機器人 App 商店」變得更複雜</h2>
          <p><strong>廠商公告。</strong>Odyssey 於 10 月 8 日發表 Odyssey-3，展示涉及機器人、人形機器人與車輛的世界模型應用。針對不同領域進行適配，仍然需要資料，以及動作解碼器或控制策略。第一方展示不能證明，它已能可靠控制任意不同的機器人本體。<Reference id="odyssey" /></p>
          <p>世界模型可能協助系統預測場景如何變化、產生訓練情境，或支援規劃。但看似合理的預測場景，不等於經過驗證的馬達控制指令。要銜接兩者，仍需要合適的控制策略、機體適配，以及在預定實體條件下的評估。</p>
          <p><strong>FlyPig 判讀。</strong>我們先前提出的<a href={`${seriesPath}/robot-skills-as-the-next-app-ecosystem`}>機器人技能作為應用基本單位（英文）</a>，必須持續接受修正。一套應用仍可能提出「巡檢這項設備」或「放置這個物品」的請求，但底層行為由通用模型與機體專屬控制器共同產生。能夠長期沿用的單位，可能是一份具有權限規範的能力契約，而不是為每一種動作分別安裝的套件。</p>
          <p>有用的能力契約，應該明確宣告輸入、輸出、前置條件、運作限制與失敗狀態。它不會讓新的機體或場地免除安全驗證。類似 App 商店的分發市場，只是可能的結果之一；更強的基礎模型，尚未證明這樣的市場必然形成。</p>
        </section>

        <section id="forecast-framework">
          <h2>FlyPig 預測：分層生態，可能存在多個控制點</h2>
          <p>我們對未來五至十年的基本情境，是可重複使用的技術層逐漸增加，但不同機器人類別的可攜程度不一。下表整理可能形成的產業角色。它不是既定標準，不是軟體必須遵循的相依順序，也不代表每家供應商只會占據一層。</p>
          <div className="forecast-table-scroll" role="region" aria-label="Physical AI 預測分層架構" tabIndex={0}>
            <table className="forecast-table"><caption>FlyPig AI 提出的平台分層 · 2026–2036 年預測</caption><thead><tr><th scope="col">層次</th><th scope="col">可能形成的產業角色</th></tr></thead><tbody>{forecastLayersZh.map((layer) => <tr key={layer.name}><th scope="row">{layer.name}</th><td>{layer.role}</td></tr>)}</tbody></table>
          </div>
          <p>當應用程式或 AI 代理，可以透過明確宣告的能力，以明顯較低的整合成本在合適的不同機體上運作，才可能迎來類似 Android 的時刻。這需要可觀察的工程投入、可靠性與部署經濟性改善，而不只是大家都採用「開放」這個詞。</p>
          <p>另一種競爭情境，是形成數個垂直整合的生態，可能圍繞 NVIDIA、Qualcomm、Google、AWS 或其他供應商建立。它們可能共用格式與中介軟體，卻保留專有的運算路徑、訓練服務、控制策略與分發方式。在這個世界裡，可能有數個有用的平台，卻沒有單一 Android。</p>
        </section>

        <section>
          <h2>反方情境：硬體與整合能力仍可能保有議價權</h2>
          <p>致動器、精密減速機、高效率晶片、感測、電池、控制系統與安全機構，都會影響機器人能否以可接受的總成本完成有用工作。模型無法消除能源、材料、機械結構或維護所帶來的限制。</p>
          <p><strong>廠商公告。</strong>Agile Robots 於 10 月 21 日宣布 Agile ONE SN 研究參考平台，預計於 2027 年初供應。預先配置的開發技術堆疊支持參考機器人的假說，但預定供應不等於已交付的數量，也不等於經證明的跨世代重複使用。10 月 22 日，Agility 表示，NVIDIA IGX Thor 將成為 Digit 5 正式供應版本的獨家機載運算平台。這項選擇也顯示，重要的硬體與平台依賴，仍可能集中在少數供應商手上。<Reference id="agile" /> <Reference id="agility" /></p>
          <p><strong>FlyPig 判讀。</strong>標準化可能壓縮那些只靠日益相近的規格競爭的企業，同時讓關鍵實體技術、可靠整合與客戶工作流程保有價值。控制點可能層層累積，而不是單純從硬體轉移到軟體。</p>
          <p>目前還沒有足夠且可比較的經濟證據，讓我們判定任何平台已掌握長期利潤。開發者活動、展示與產品公告，不能取代客戶留存、經常性收入、毛利，以及支援真實部署所需成本的資料。</p>
        </section>

        <section>
          <h2>這對加拿大與台灣的技術決策有什麼意義？</h2>
          <p>對加拿大產品團隊而言，實際的起點是一項營運任務，以及可衡量的基準。應該詢問：所提出的技術堆疊中，哪些部分可以更換，而不必重寫應用、重新訓練整套控制策略，或重做完整安全論證？也應要求提出在預定環境中的人工介入率、復原行為、維護需求與支援責任證據。</p>
          <p>對台灣科技公司而言，機會可能在於讓關鍵子系統更容易完成資格評估與整合：提供受支援的介面、可重現的參考配置、生命週期內的供應保障，以及清楚的運作限制。更好的感測器、運算模組或控制器，只要能降低整體工程與營運負擔，就仍然可以創造價值。</p>
          <p>這些是資格評估問題，不代表 FlyPig AI 已經提供機器人平台，也不代表我們代理本文討論的供應商。<a href="/zh/atlas">加拿大 Atlas</a> 與 <a href="/Solutions">Taiwan Solutions（英文）</a>，提供以公開來源研究技術適配的起點。</p>
        </section>

        <section className="article-verification" id="forecast-tests">
          <h2>六項可以驗證，也可以推翻預測的觀察</h2>
          <p>這項假說的考驗，在於哪些事物變得可以重複使用、需要多少成本，以及誰能以此建立長期業務。我們會追蹤以下證據，而不是只計算新機器人的發布數量。</p>
          <ol className="forecast-tests">{forecastTestsZh.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.measure}</p><p><strong>可能挑戰這項假說的證據：</strong>{item.falsifier}</p></li>)}</ol>
          <p>這份展望延伸既有系列的平台、參考機體與價值掌握假說。它不會重新設定原始預測日期，也不會抹去那些削弱「個別封裝的機器人技能」假說的證據。判斷基準是有實質意義的相容性與持續獲利能力，而不是事後挑選一家勝出的廠商。</p>
        </section>

        <section>
          <h2>追蹤讓智慧真正發揮用途的條件</h2>
          <p>機器人的身體界定它在物理上能做什麼；模型影響它能辨識、預測與學習什麼；應用與服務，則把這些能力連結到可靠、持續且可衡量的工作。</p>
          <p>因此，FlyPig AI 現在沒有理由急著宣布誰是 Android 贏家。更有價值的研究問題是：誰建立共通介面？誰降低開發與營運成本？誰能運用真實世界的回饋？當架構改變時，又是誰能保有客戶關係？</p>
          <p>有用的預測會保留可能證明自己錯誤的證據。未來十年，應該會給我們一再檢驗這項預測的機會。</p>
        </section>
      </div>

      <aside className="source-note" aria-labelledby="forecast-sources">
        <p className="eyebrow">來源與研究聲明</p>
        <h2 id="forecast-sources">第一手參考來源</h2>
        <ol>{forecastSourcesZh.map((source) => <li id={`source-${source.id}`} key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a> · {source.date}</li>)}</ol>
        <p>本文為 FlyPig AI 的獨立科技趨勢分析與預測，由 ICareU Global Trading Ltd. 營運。廠商公告、展示與路線圖屬於第一方證據，並非可攜性、安全性、部署規模或財務表現的獨立驗證。文中提及的公司，不因此成為 FlyPig AI 的合作夥伴、背書者或代理供應商。未來結果仍具有不確定性。</p>
        <p>原創架構圖由 FlyPig AI 擁有。本篇未使用製造商圖稿、第三方標誌或產品照片。</p>
        <div className="source-links"><a href={seriesPath}>Physical AI Goes Modular 系列（英文） →</a><a href={`${seriesPath}/who-becomes-android-for-physical-ai`}>原始 Android 問題（英文） →</a><a href={`${seriesPath}/where-value-moves-in-modular-physical-ai`}>價值往哪裡移動（英文） →</a></div>
      </aside>
      <div className="article-cta"><div><p className="eyebrow">延伸研究</p><h2>看見機器背後的技術分層。</h2></div><div className="actions"><a className="pill primary" href={seriesPath}>閱讀研究系列（英文）</a><a className="pill secondary" href="/technologies">技術情報（英文）</a></div></div>
    </article>
    <SiteFooter locale="zh" />
  </main>;
}

/**
 * 口袋星球圖鑑攻略頁：以固定問題導覽、可搜尋卡片與圖鑑表格呈現，不讓長資料變成文字牆。
 */
import CharacterParade from "@/components/CharacterParade";
import SiteShell from "@/components/SiteShell";
import { categories, fieldBranches, growthStages, guideSections, planetLevels, sources, versionRows } from "@/data/guideData";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Info, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

const sourceMap = new Map(sources.map((source) => [source.id, source]));

function SourceLinks({ ids }: { ids: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 border-t border-[#193a34]/15 pt-5">
      {ids.map((id) => {
        const source = sourceMap.get(id);
        if (!source) return null;
        return (
          <a key={id} href={source.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-lg bg-[#f1ead8] px-2.5 py-2 text-[11px] font-bold text-[#49645e] hover:bg-[#e4dcc8]">
            {source.level} · {source.publisher} <ArrowUpRight className="h-3 w-3" />
          </a>
        );
      })}
    </div>
  );
}

export default function Guide() {
  const params = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return guideSections.filter((section) => {
      const categoryMatch = activeCategory === "全部" || section.category === activeCategory;
      const text = [section.title, section.summary, section.category, ...section.points].join(" ").toLowerCase();
      return categoryMatch && (!needle || text.includes(needle));
    });
  }, [activeCategory, query]);

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#a8ddf5] py-14 sm:py-20">
        <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full border-[36px] border-[#ffeb73]/80" />
        <CharacterParade names={["Meowtchi", "Irukatchi", "Horhotchi", "Mimitchi", "Kuchipatchi"]} className="absolute -right-10 -top-16 hidden h-80 w-[34rem] scale-75 lg:block" />
        <div className="container relative grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:pr-[28rem]">
          <div>
            <p className="pixel-tag mono-type inline-block bg-[#ff6f61] px-3 py-2 text-xs font-bold text-white">PARADISE FIELD MANUAL</p>
            <h1 className="display-type mt-3 text-5xl font-black leading-none sm:text-6xl">分類攻略</h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#3f625a]">輸入關鍵字，或依問題分類。每張卡片都附來源分級；有版本差異與社群實測的內容會額外警示。</p>
            <div className="toy-shadow-sm mt-6 flex items-center gap-3 rounded-2xl border-2 border-[#193a34] bg-white px-4 py-2">
              <Search className="h-5 w-5 text-[#668079]" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋：Care Mistake、Level 6、睡眠…" className="min-w-0 flex-1 bg-transparent py-3 text-sm font-medium outline-none" />
              {query && <button onClick={() => setQuery("")} className="rounded-lg bg-[#f1ead8] px-3 py-2 text-xs font-bold">清除</button>}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-[#193a34]/20 bg-[#fff8e7]/95 py-3 backdrop-blur-md">
        <div className="container flex gap-2 overflow-x-auto pb-1">
          {["全部", ...categories.filter((item) => item.id !== "codes").map((item) => item.label)].map((label) => (
            <button key={label} onClick={() => setActiveCategory(label)} className={`focus-ring shrink-0 rounded-xl border-2 border-[#193a34] px-4 py-2 text-sm font-bold ${activeCategory === label ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#193a34]" : "bg-white hover:bg-[#ffd75e]"}`}>{label}</button>
          ))}
        </div>
      </div>

      <section className="py-14 sm:py-20">
        <div className="container grid gap-8 xl:grid-cols-[250px_1fr]">
          <aside className="hidden xl:block">
            <div className="sticky top-40 rounded-2xl border-2 border-[#193a34] bg-white p-5 shadow-[0_5px_0_#193a34]">
              <p className="mono-type text-xs font-bold text-[#a54842]">QUICK ORBIT</p>
              <nav className="mt-4 grid gap-1" aria-label="攻略頁快速導覽">
                {categories.map((category) => (
                  <a key={category.id} href={category.id === "codes" ? "/codes" : `#${category.id}`} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold hover:bg-[#74d6b0]/25">
                    {category.label}<span className="mono-type text-[10px] opacity-45">{category.glyph}</span>
                  </a>
                ))}
              </nav>
              <p className="mt-5 border-t border-[#193a34]/15 pt-4 text-xs leading-6 text-[#668079]">小提醒：搜尋會同時比對標題、分類、摘要與每個攻略步驟。</p>
            </div>
          </aside>
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="font-bold">找到 <span className="text-[#a54842]">{filtered.length}</span> 篇攻略</p>
              <Link href="/codes" className="text-sm font-bold text-[#a54842] hover:underline">直接查代碼 →</Link>
            </div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#193a34]/40 bg-white p-12 text-center">
                <Search className="mx-auto h-8 w-8 opacity-40" />
                <h2 className="display-type mt-4 text-2xl font-black">這顆星球沒有找到結果</h2>
                <p className="mt-2 text-[#668079]">換個關鍵字，或把分類切回「全部」。</p>
              </div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-2">
                {filtered.map((section, index) => (
                  <article id={section.id} key={section.id} className={`cartridge-card scroll-mt-40 border-2 border-[#193a34] bg-white p-6 pl-8 shadow-[0_5px_0_#193a34] ${index % 3 === 0 ? "lg:col-span-2" : ""}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="mono-type text-[11px] font-bold text-[#a54842]">{section.eyebrow}</p>
                        <h2 className="display-type mt-2 text-3xl font-black">{section.title}</h2>
                      </div>
                      <span className="pixel-tag bg-[#ffd75e] px-3 py-2 text-xs font-bold">{section.category}</span>
                    </div>
                    <p className="mt-5 text-base leading-8 text-[#526e67]">{section.summary}</p>
                    <div className={`mt-6 grid gap-3 ${index % 3 === 0 ? "md:grid-cols-2" : ""}`}>
                      {section.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 rounded-xl bg-[#f5efdf] p-4 text-sm leading-7">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2f9b76]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    {section.tip && (
                      <div className="mt-5 flex items-start gap-3 rounded-xl border-2 border-[#4ea987] bg-[#dff6ec] p-4 text-sm leading-7">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0" /><span><strong>實用策略：</strong>{section.tip}</span>
                      </div>
                    )}
                    {section.caution && (
                      <div className="mt-5 flex items-start gap-3 rounded-xl border-2 border-[#d4a642] bg-[#fff2c7] p-4 text-sm leading-7">
                        <AlertTriangle className="mt-1 h-4 w-4 shrink-0" /><span><strong>版本／可信度提醒：</strong>{section.caution}</span>
                      </div>
                    )}
                    <SourceLinks ids={section.sources} />
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y-[3px] border-[#23396b] bg-[#ffeb73] py-16 sm:py-20">
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#f8a7c8]/65" />
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mono-type text-xs font-bold">EVOLUTION MAP</p>
            <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">五個階段，三種關鍵條件。</h2>
            <p className="mt-5 leading-8 text-[#4e625d]">場地先決定 Kid，飲食再決定 Young，最後由 Care Mistake 與完美照顧條件決定 Adult。</p>
          </div>
          <div className="relative min-h-[330px] overflow-hidden rounded-[3rem] border-[3px] border-[#23396b] bg-[#f8a7c8] shadow-[0_8px_0_#23396b]">
            <CharacterParade names={["Babymarutchi", "Land Kid", "Toddle Young", "Mametchi", "Mimitchi"]} className="absolute inset-4" />
          </div>
        </div>
        <div className="container mt-10 grid gap-3 md:grid-cols-5">
          {growthStages.map((stage) => (
            <div key={stage.stage} className="rounded-2xl border-2 border-[#193a34] bg-[#fff8e7] p-4 shadow-[0_4px_0_#193a34]">
              <p className="mono-type text-[10px] font-bold text-[#a54842]">{stage.stage}</p>
              <p className="display-type mt-1 text-xl font-black">{stage.zh}</p>
              <p className="mt-2 text-xs font-bold">{stage.time}</p>
              <p className="mt-3 text-xs leading-6 text-[#5f756f]">{stage.key}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fields" className="scroll-mt-36 py-20 sm:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mono-type text-xs font-bold text-[#a54842]">DEVICE × FIELD MATRIX</p>
            <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">六種機身差在哪？</h2>
            <p className="mt-5 leading-8 text-[#526e67]">每台的初始場地與三場地組合固定。下表的解鎖順序綜合社群 Wiki；實際升級條件請搭配下方 Planet Level 表。</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border-2 border-[#193a34] bg-white shadow-[0_6px_0_#193a34]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-[#193a34] text-white"><tr>{["機身", "初始", "場地順序", "專屬稀有角色", "備註"].map((item) => <th key={item} className="px-5 py-4 text-sm">{item}</th>)}</tr></thead>
              <tbody>{versionRows.map((row, index) => <tr key={row.shell} className={index % 2 ? "bg-[#f5efdf]" : "bg-white"}><td className="px-5 py-4 font-black">{row.shell}</td><td className="px-5 py-4">{row.start}</td><td className="px-5 py-4 font-mono text-sm">{row.fields}</td><td className="px-5 py-4">{row.rare}</td><td className="px-5 py-4 text-sm text-[#607871]">{row.note}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fieldBranches.map((field) => (
              <div key={field.field} className="rounded-2xl border-2 border-[#193a34] bg-white p-5 shadow-[0_4px_0_#193a34]">
                <div className="flex items-center justify-between"><h3 className="display-type text-2xl font-black">{field.field}</h3><span className="pixel-tag bg-[#74d6b0] px-2.5 py-1.5 text-[10px] font-bold">CELL {field.cell}</span></div>
                <p className="mt-4 text-sm leading-7 text-[#566f69]">{field.routes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planet" className="scroll-mt-36 border-y-2 border-[#193a34] bg-[#74d6b0] py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="mono-type text-xs font-bold">PLANET LEVEL 01—10</p>
              <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">星球升級速查</h2>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-[#193a34] bg-[#fff8e7] p-4 text-sm leading-7 shadow-[0_4px_0_#193a34]">
                <Info className="mt-1 h-4 w-4 shrink-0" />新版機身的旅行、料理與裝飾開放較早；此表用共同主線整理，差異以文字註記。
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {planetLevels.map((item) => (
                <div key={item.level} className="flex gap-4 rounded-2xl border-2 border-[#193a34] bg-white p-4 shadow-[0_4px_0_#193a34]">
                  <span className="display-type flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#193a34] text-xl font-black text-white">{item.level}</span>
                  <div><p className="font-black">{item.goal}</p><p className="mt-1 text-xs leading-6 text-[#5d756f]">{item.unlock}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="breed" className="scroll-mt-36 py-20 sm:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[3rem] border-[3px] border-[#23396b] bg-[#91dfbd] shadow-[0_8px_0_#23396b]">
            <CharacterParade names={["Mametchi", "Mimitchi", "Meowtchi", "Irukatchi", "Horhotchi"]} className="absolute inset-6" />
          </div>
          <div>
            <p className="mono-type text-xs font-bold text-[#a54842]">CONNECTION LAB</p>
            <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">雙機不是必需，但會更有趣。</h2>
            <p className="mt-5 leading-8 text-[#536f68]">單機可直接在 Lab 的 HELP 選單繁殖；雙機則能 Playdate、送禮與傳遞眼睛／身體顏色。即使遺傳外觀，下一代身體仍由你的養法決定。</p>
            <div className="mt-7 rounded-2xl border-2 border-[#193a34] bg-[#ffd75e] p-5 font-bold shadow-[0_4px_0_#193a34]">Paradise 只能連 Paradise，不能和 Uni、Original 或 Connection 舊機型連線。</div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

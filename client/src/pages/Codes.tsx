/**
 * 口袋星球圖鑑代碼頁：像研究室資料卡匣，可搜尋、分類、複製並在本機標記已輸入。
 */
import CharacterParade from "@/components/CharacterParade";
import SiteShell from "@/components/SiteShell";
import { characterCatalog } from "@/data/characters";
import { codeEntries, sources } from "@/data/guideData";
import { Check, Clipboard, FlaskConical, Search, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const types = ["全部", "Lab Code", "食物", "點心", "戶外玩具", "星球裝飾"] as const;

export default function Codes() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof types)[number]>("全部");
  const [redeemed, setRedeemed] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("himian-tama-codes");
    if (saved) setRedeemed(JSON.parse(saved));
  }, []);

  const filtered = useMemo(() => {
    const needle = query.toLowerCase().replace(/\s/g, "");
    return codeEntries.filter((entry) => {
      const matchesType = type === "全部" || entry.type === type;
      const text = `${entry.name}${entry.code}${entry.version}`.toLowerCase().replace(/\s/g, "");
      return matchesType && (!needle || text.includes(needle));
    });
  }, [query, type]);

  const groupedCodes = useMemo(() => types.slice(1)
    .map((groupType) => ({
      type: groupType,
      entries: filtered.filter((entry) => entry.type === groupType),
      total: codeEntries.filter((entry) => entry.type === groupType).length,
      redeemed: codeEntries.filter((entry) => entry.type === groupType && redeemed.includes(entry.code)).length,
    }))
    .filter((group) => group.entries.length), [filtered, redeemed]);

  const toggleRedeemed = (code: string) => {
    const next = redeemed.includes(code) ? redeemed.filter((item) => item !== code) : [...redeemed, code];
    setRedeemed(next);
    localStorage.setItem("himian-tama-codes", JSON.stringify(next));
  };

  const copy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    toast.success(`已複製 ${code}`);
  };

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#ffeb73] py-14 sm:py-20">
        <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full border-[34px] border-[#f8a7c8]/80" />
        <CharacterParade names={["Mametchi", "Meowtchi", "Irukatchi", "Mimitchi", "Horhotchi"]} className="absolute -right-10 -top-12 hidden h-80 w-[32rem] scale-75 lg:block" />
        <div className="container relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:pr-[27rem]">
          <div>
            <p className="mono-type text-xs font-bold text-[#a54842]">LAB CARTRIDGE / CODE INDEX</p>
            <h1 className="display-type mt-3 text-5xl font-black sm:text-6xl">代碼大全</h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#4d655f]">搜尋名稱或代碼，一鍵複製，並把已輸入的項目留在瀏覽器中。Shop Code 解鎖購買權；Lab Code 解鎖角色細胞提示。</p>
          </div>
          <div className="egg-shape absolute bottom-2 right-8 hidden aspect-[.82] w-24 border-2 border-[#23396b] bg-[#ff6f61] p-4 text-center text-white shadow-[0_5px_0_#23396b] lg:flex lg:flex-col lg:items-center lg:justify-center">
            <span className="mono-type text-[10px] font-bold">COLLECTION</span>
            <span className="display-type mt-2 text-4xl font-black">{redeemed.length}</span>
            <span className="text-xs font-bold">已輸入</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#193a34] bg-[#dff6ec] p-5 shadow-[0_4px_0_#193a34]">
              <div className="flex items-center gap-3"><ShoppingBag className="h-5 w-5" /><h2 className="display-type text-xl font-black">Shop Code</h2></div>
              <p className="mt-3 text-sm leading-7">長按 Zoom Dial → SHOP → SHOP CODE。輸入後仍需花 Gotchi Points 購買；不同類別有 Planet Level 門檻。</p>
            </div>
            <div className="rounded-2xl border-2 border-[#193a34] bg-[#ddebfa] p-5 shadow-[0_4px_0_#193a34]">
              <div className="flex items-center gap-3"><FlaskConical className="h-5 w-5" /><h2 className="display-type text-xl font-black">Lab Code</h2></div>
              <p className="mt-3 text-sm leading-7">長按 Zoom Dial → LAB LOG → MICROSCOPE → LAB CODE。它提供角色 Cell 與養成提示，不會直接送你角色。</p>
            </div>
          </div>

          <div className="cartridge-card sticky top-20 z-30 -mx-4 mt-8 border-y-2 border-[#193a34] bg-[#fff8e7]/95 px-6 py-5 backdrop-blur-md sm:mx-0 sm:border-2 sm:shadow-[0_5px_0_#193a34]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="mono-type text-[10px] font-bold text-[#a54842]">INSERT CARTRIDGE · SELECT INDEX</p>
              <p className="text-xs font-bold text-[#a54842]">{redeemed.length} / {codeEntries.length} COLLECTION</p>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border-2 border-[#193a34] bg-white px-4">
                <Search className="h-5 w-5 shrink-0 text-[#668079]" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋：Tacos、毛絨、4RG8…" className="min-w-0 flex-1 bg-transparent py-3.5 text-sm font-medium outline-none" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[54%]">
                {types.map((item) => <button key={item} onClick={() => setType(item)} className={`focus-ring shrink-0 rounded-xl border-2 border-[#193a34] px-3 py-2.5 text-xs font-bold ${type === item ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#193a34]" : "bg-white hover:bg-[#74d6b0]"}`}>{item}</button>)}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold"><span className="text-[#a54842]">{filtered.length}</span> 筆符合 · {redeemed.length} 筆已標記</p>
            <p className="text-xs text-[#698179]">代碼會自動移除空格後複製</p>
          </div>

          <div className="mt-6 grid gap-10">
            {groupedCodes.map((group, groupIndex) => <section key={group.type} className="collection-console overflow-hidden rounded-[2rem] border-[3px] border-[#23396b] bg-white/85 shadow-[0_7px_0_#23396b]">
              <div className={`flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-[#23396b] p-5 ${["bg-[#a8ddf5]", "bg-[#ffeb73]", "bg-[#f8a7c8]", "bg-[#91dfbd]", "bg-[#cfc4ff]"][groupIndex]}`}>
                <div><p className="mono-type text-[10px] font-black text-[#ff5f64]">CARTRIDGE {String(groupIndex + 1).padStart(2, "0")}</p><h2 className="display-type mt-1 text-2xl font-black">{group.type}</h2></div>
                <div className="min-w-48 rounded-xl border-2 border-[#23396b] bg-white/90 p-3 text-xs font-black"><div className="flex justify-between"><span>已輸入</span><span className="text-[#ff5f64]">{group.redeemed} / {group.total}</span></div><div className="mt-2 h-2.5 overflow-hidden rounded-full border-2 border-[#23396b]"><div className="h-full bg-[#ff6f61]" style={{ width: `${group.total ? (group.redeemed / group.total) * 100 : 0}%` }} /></div></div>
              </div>
              <div className="grid gap-4 p-5 lg:grid-cols-2">
                {group.entries.map((entry) => {
                  const done = redeemed.includes(entry.code);
                  const codeCharacter = entry.type === "Lab Code" ? characterCatalog.find((character) => entry.name.toLowerCase().includes(character.name.toLowerCase())) : undefined;
                  return <article key={`${entry.type}-${entry.name}-${entry.code}`} className={`cartridge-card relative overflow-hidden border-2 border-[#23396b] p-5 pl-8 shadow-[0_4px_0_#23396b] transition-transform hover:-translate-y-0.5 ${done ? "bg-[#ffd9d3]" : "bg-white"}`}>
                    {codeCharacter && <img loading="lazy" src={codeCharacter.artwork} alt="" className="pointer-events-none absolute -bottom-4 -right-1 h-28 w-28 rotate-6 object-contain opacity-90" />}
                    <div className="flex items-start justify-between gap-3"><span className={`pixel-tag px-2.5 py-1.5 text-[10px] font-bold ${entry.type === "Lab Code" ? "bg-[#bde2f6]" : "bg-[#ffd75e]"}`}>{entry.type}</span><button onClick={() => toggleRedeemed(entry.code)} className={`focus-ring flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#193a34] ${done ? "bg-[#ff6f61] text-white" : "bg-[#fff8e7]"}`} aria-label={done ? "取消已輸入標記" : "標記為已輸入"}>{done && <Check className="h-4 w-4" strokeWidth={3} />}</button></div>
                    <h3 className="display-type relative z-10 mt-4 min-h-14 max-w-[76%] text-lg font-black leading-7">{entry.name}</h3>
                    <button onClick={() => copy(entry.code)} className="device-screen focus-ring relative z-10 mt-3 flex w-full items-center justify-between rounded-xl border-2 border-[#193a34] px-4 py-3 text-left"><span className="mono-type text-base font-bold tracking-[.16em]">{entry.code}</span><Clipboard className="h-4 w-4" /></button>
                    <p className="mt-3 text-xs font-bold text-[#647c75]">任務相容：{entry.version}</p>
                  </article>;
                })}
              </div>
            </section>)}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#193a34] bg-[#f5efdf] p-6">
            <h2 className="display-type text-2xl font-black">資料提醒</h2>
            <p className="mt-3 text-sm leading-7 text-[#5b736c]">代碼清單交叉比對 Tamagotchi Wiki、日文完全攻略 Wiki 與 IGN；官方 FAQ 與研究記錄用來核對輸入方式及重複使用規則。合作商品與新版機身會持續追加代碼，若裝置顯示無資料，請先確認版本相容性與 Planet Level。</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sources.filter((source) => ["official-faq", "official-code", "wiki-codes", "ign-codes", "tamapara"].includes(source.id)).map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="rounded-lg bg-white px-3 py-2 text-xs font-bold hover:underline">{source.level} · {source.publisher}</a>)}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/**
 * 口袋星球進化中心：把既有角色資料中的 evolvesFrom 關係轉成可查詢的進化路徑。
 * 不新增或改寫角色資料，只在前端建立導覽視圖。
 */
import SiteShell from "@/components/SiteShell";
import { characterCatalog, type CharacterEntry, type GrowthStage } from "@/data/characters";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight, GitBranch, Search, Sparkles, Waypoints } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";

const stageOrder: GrowthStage[] = ["Baby", "Kid", "Young", "Adult"];
const stageLabel: Record<GrowthStage, string> = { Baby: "Baby", Kid: "Kid", Young: "Young", Adult: "Adult" };
const stageZh: Record<GrowthStage, string> = { Baby: "寶寶期", Kid: "幼兒期", Young: "少年期", Adult: "成體期" };
const stageBg: Record<GrowthStage, string> = {
  Baby: "bg-[#f8a7c8]",
  Kid: "bg-[#a8ddf5]",
  Young: "bg-[#ffeb73]",
  Adult: "bg-[#91dfbd]",
};

function normalize(value: string) { return value.trim().toLowerCase(); }

function predecessorNames(character: CharacterEntry) {
  return Array.from(new Set(character.variants.map((variant) => variant.evolvesFrom).filter((name) => name && name !== "Egg")));
}

function matchesSource(character: CharacterEntry, sourceName: string) {
  const needle = normalize(sourceName);
  return character.name === sourceName || normalize(character.name) === needle || normalize(character.nameZh) === needle;
}

function findChildren(source: CharacterEntry) {
  return characterCatalog.filter((character) => predecessorNames(character).some((name) => matchesSource(source, name)));
}

function findByQuery(query: string) {
  const needle = normalize(query);
  if (!needle) return undefined;
  return characterCatalog.find((character) => [character.name, character.nameZh, ...character.species].some((value) => normalize(value).includes(needle)));
}

function findBySourceName(sourceName: string) {
  return characterCatalog.filter((character) => matchesSource(character, sourceName));
}

function ancestorChain(start: CharacterEntry, maxDepth = 3) {
  const result: CharacterEntry[] = [];
  const seen = new Set<string>([start.id]);
  let frontier = [start];
  for (let depth = 0; depth < maxDepth; depth++) {
    const next: CharacterEntry[] = [];
    for (const character of frontier) {
      for (const source of predecessorNames(character)) {
        for (const parent of findBySourceName(source)) {
          if (!seen.has(parent.id)) {
            seen.add(parent.id);
            result.push(parent);
            next.push(parent);
          }
        }
      }
    }
    frontier = next;
  }
  return result;
}

function descendantChain(start: CharacterEntry, maxDepth = 3) {
  const result: CharacterEntry[] = [];
  const seen = new Set<string>([start.id]);
  let frontier = [start];
  for (let depth = 0; depth < maxDepth; depth++) {
    const next: CharacterEntry[] = [];
    for (const character of frontier) {
      for (const child of findChildren(character)) {
        if (!seen.has(child.id)) {
          seen.add(child.id);
          result.push(child);
          next.push(child);
        }
      }
    }
    frontier = next;
  }
  return result;
}

function CharacterNode({ character, selected, onSelect }: { character: CharacterEntry; selected: boolean; onSelect: () => void }) {
  return (
    <button onClick={onSelect} className={`focus-ring group flex w-full items-center gap-3 rounded-2xl border-2 border-[#23396b] bg-white p-3 text-left shadow-[0_3px_0_#23396b] transition-transform hover:-translate-y-0.5 ${selected ? "ring-4 ring-[#ff6f61]/25" : ""}`}>
      <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl ${stageBg[character.stage]}`}>
        <img src={character.artwork} alt="" className="h-14 w-14 object-contain" loading="lazy" />
      </span>
      <span className="min-w-0">
        <strong className="block truncate text-sm text-[#23396b]">{character.nameZh}</strong>
        <span className="mono-type mt-1 block truncate text-[9px] font-black text-[#ff5f64]">{character.name}</span>
        <span className="mt-1 block text-[10px] font-bold text-[#607070]">{stageZh[character.stage]} · {character.fields.join("／")}</span>
      </span>
      <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-[#607070] transition-transform group-hover:translate-x-1" />
    </button>
  );
}

export default function Evolution() {
  const [location, navigate] = useLocation();
  const queryFromUrl = new URLSearchParams(location.split("?")[1] || "").get("q") || "";
  const [query, setQuery] = useState(queryFromUrl);
  const initial = findByQuery(queryFromUrl) || characterCatalog.find((item) => item.stage === "Baby") || characterCatalog[0];
  const [selected, setSelected] = useState<CharacterEntry>(initial);

  const predecessor = useMemo(() => {
    const names = predecessorNames(selected);
    return characterCatalog.filter((character) => names.some((name) => matchesSource(character, name))).slice(0, 8);
  }, [selected]);

  const children = useMemo(() => findChildren(selected).slice(0, 16), [selected]);
  const evolutionTree = useMemo(() => {
    const connected = [selected, ...ancestorChain(selected), ...descendantChain(selected)];
    const unique = Array.from(new Map(connected.map((character) => [character.id, character])).values());
    return stageOrder.map((stage) => ({
      stage,
      characters: unique.filter((character) => character.stage === stage).slice(0, 7),
    }));
  }, [selected]);
  const searchResults = useMemo(() => {
    const needle = normalize(query);
    if (!needle) return [];
    return characterCatalog.filter((character) => [character.name, character.nameZh, ...character.species, ...character.fields].some((value) => normalize(value).includes(needle))).slice(0, 8);
  }, [query]);

  const jumpTo = (character: CharacterEntry) => {
    setSelected(character);
    setQuery(character.name);
    navigate(`/evolution?q=${encodeURIComponent(character.name)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#fff8e7]">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[34px] border-[#a8ddf5]/70" />
        <div className="absolute right-[12%] top-24 h-20 w-20 rounded-full border-[12px] border-[#ffeb73]/80" />
        <div className="container relative py-14 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffdd57] px-4 py-2 text-xs font-black shadow-[0_4px_0_#23396b]"><GitBranch className="h-4 w-4" /> EVOLUTION CONTROL</p>
          <h1 className="display-type mt-5 max-w-3xl text-5xl font-black leading-[.98] text-[#23396b] sm:text-7xl">進化中心<br /><span className="text-[#ff5f64]">一路查到最後！</span></h1>
          <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-[#405a59] sm:text-lg">直接從現有角色資料整理進化來源與下一階段。選一隻角色，就能快速看前置角色、下一階段與每個版本的條件。</p>
          <div className="mt-7 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ff6f61]" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === "Enter" && searchResults[0] && jumpTo(searchResults[0])} placeholder="搜尋角色中文名、英文名或場地…" className="focus-ring h-14 w-full rounded-full border-[3px] border-[#23396b] bg-white pl-12 pr-5 text-sm font-bold outline-none placeholder:text-[#7b8b86] shadow-[0_5px_0_#23396b]" />
            </div>
            {searchResults.length > 0 && (
              <div className="mt-3 grid gap-2 rounded-3xl border-2 border-[#23396b] bg-[#fffdf5] p-3 shadow-[0_5px_0_#23396b]">
                {searchResults.map((character) => <button key={character.id} onClick={() => jumpTo(character)} className="flex items-center gap-3 rounded-2xl p-2 text-left hover:bg-[#e3f8f0]"><img loading="lazy" src={character.artwork} alt="" className="h-11 w-11 rounded-xl bg-[#a8ddf5] object-contain" /><span><strong className="block text-sm">{character.nameZh}</strong><span className="mono-type text-[9px] font-black text-[#ff5f64]">{character.name}</span></span></button>)}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="kawaii-pattern-bg py-10 sm:py-14">
        <div className="container">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div><p className="mono-type text-[10px] font-black text-[#ff5f64]">SELECTED SPECIMEN</p><h2 className="display-type mt-1 text-3xl font-black text-[#23396b]">{selected.nameZh}</h2><p className="mono-type mt-1 text-[10px] font-black text-[#607070]">{selected.name}</p></div>
            <Link href="/characters" className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]">回到全寵圖鑑</Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_1.6fr_1.05fr] lg:items-start">
            <section className="rounded-[2rem] border-[3px] border-[#23396b] bg-white/90 p-5 shadow-[0_7px_0_#23396b]">
              <div className="flex items-center gap-2"><ArrowLeft className="h-5 w-5 text-[#ff5f64]" /><div><p className="mono-type text-[9px] font-black text-[#ff5f64]">PREVIOUS</p><h3 className="font-black text-[#23396b]">從哪裡來？</h3></div></div>
              <div className="mt-5 grid gap-3">
                {predecessor.length ? predecessor.map((character) => <CharacterNode key={character.id} character={character} selected={false} onSelect={() => jumpTo(character)} />) : <div className="rounded-2xl border-2 border-dashed border-[#23396b]/40 bg-[#fff9e9] p-6 text-center"><Sparkles className="mx-auto h-6 w-6 text-[#ff5f64]" /><p className="mt-2 text-sm font-black">這是目前資料中的起點</p><p className="mt-1 text-xs font-bold text-[#607070]">通常代表蛋或最早期型態。</p></div>}
              </div>
            </section>

            <section className="rounded-[2rem] border-[3px] border-[#23396b] bg-[#fff9e9] p-5 shadow-[0_7px_0_#23396b] sm:p-7">
              <div className={`mx-auto grid max-w-md place-items-center rounded-[2rem] border-[3px] border-[#23396b] p-8 ${stageBg[selected.stage]}`}>
                <span className="rounded-full border-2 border-[#23396b] bg-white px-4 py-1 text-[10px] font-black shadow-[0_2px_0_#23396b]">{stageLabel[selected.stage]} · {stageZh[selected.stage]}</span>
                <img loading="lazy" src={selected.artwork} alt={`${selected.nameZh}（${selected.name}）`} className="mt-4 h-52 w-52 object-contain drop-shadow-[0_8px_0_rgba(35,57,107,.15)]" />
                <h3 className="display-type text-center text-3xl font-black text-[#23396b]">{selected.nameZh}</h3>
                <p className="mono-type mt-1 text-[10px] font-black text-[#ff5f64]">{selected.name}</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#23396b] bg-white p-4"><p className="text-[10px] font-black text-[#a54842]">場地</p><p className="mt-1 text-sm font-black">{selected.fields.join("／")}</p></div>
                <div className="rounded-2xl border-2 border-[#23396b] bg-white p-4"><p className="text-[10px] font-black text-[#a54842]">版本</p><p className="mt-1 text-sm font-black leading-6">{selected.versions.join("／")}</p></div>
              </div>
              <div className="mt-5 rounded-2xl border-2 border-[#23396b] bg-[#e3f8f0] p-4"><p className="text-[10px] font-black text-[#31735f]">目前角色的進化條件</p><div className="mt-2 grid gap-3">{selected.variants.slice(0, 4).map((variant, index) => <div key={`${variant.version}-${variant.field}-${index}`} className="rounded-xl bg-white p-3"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#23396b] px-2 py-1 text-[9px] font-black text-white">{variant.version}</span><span className="rounded-full bg-[#ffeb73] px-2 py-1 text-[9px] font-black">{variant.field}</span></div><p className="mt-2 text-xs font-bold leading-6 text-[#405a59]">{variant.conditionZh || "目前沒有額外條件。"}</p></div>)}</div></div>
            </section>

            <section className="rounded-[2rem] border-[3px] border-[#23396b] bg-white/90 p-5 shadow-[0_7px_0_#23396b]">
              <div className="flex items-center gap-2"><ArrowRight className="h-5 w-5 text-[#ff5f64]" /><div><p className="mono-type text-[9px] font-black text-[#ff5f64]">NEXT</p><h3 className="font-black text-[#23396b]">接下來去哪？</h3></div></div>
              <div className="mt-5 grid gap-3">
                {children.length ? children.map((character) => <CharacterNode key={character.id} character={character} selected={false} onSelect={() => jumpTo(character)} />) : <div className="rounded-2xl border-2 border-dashed border-[#23396b]/40 bg-[#fff9e9] p-6 text-center"><ArrowDown className="mx-auto h-6 w-6 text-[#ff5f64]" /><p className="mt-2 text-sm font-black">目前沒有更後面的資料</p><p className="mt-1 text-xs font-bold text-[#607070]">可能是最後階段，或前置名稱尚未對上。</p></div>}
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-[2rem] border-[3px] border-[#23396b] bg-[#fffdf5] p-5 shadow-[0_7px_0_#23396b] sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-type text-[10px] font-black text-[#ff5f64]">VISUAL EVOLUTION MAP</p>
                <h3 className="display-type mt-1 text-3xl font-black text-[#23396b]">互動式進化樹</h3>
                <p className="mt-2 max-w-2xl text-xs font-bold leading-6 text-[#607070]">以目前角色為中心，只顯示資料庫中實際連得上的前後型態。點任何節點即可沿著進化路徑繼續追蹤。</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#e3f8f0] px-3 py-2 text-[10px] font-black"><Waypoints className="h-4 w-4" /> LIVE GRAPH</span>
            </div>

            <div className="mt-6 overflow-x-auto pb-3">
              <div className="grid min-w-[860px] grid-cols-4 gap-4">
                {evolutionTree.map(({ stage, characters }) => (
                  <div key={stage} className="relative rounded-[1.5rem] border-2 border-[#23396b]/30 bg-white/80 p-3">
                    <div className={`rounded-xl border-2 border-[#23396b] px-3 py-2 ${stageBg[stage]}`}>
                      <p className="mono-type text-[9px] font-black text-[#23396b]">{stageLabel[stage]}</p>
                      <p className="text-xs font-black text-[#23396b]">{stageZh[stage]}</p>
                    </div>
                    <div className="mt-3 grid gap-3">
                      {characters.length ? characters.map((character) => (
                        <button key={character.id} onClick={() => jumpTo(character)} className={`group relative rounded-2xl border-2 border-[#23396b] bg-white p-2 text-left shadow-[0_3px_0_#23396b] transition-all hover:-translate-y-1 ${character.id === selected.id ? "ring-4 ring-[#ff6f61]/25" : ""}`}>
                          <div className="flex items-center gap-2">
                            <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${stageBg[character.stage]}`}>
                              <img src={character.artwork} alt="" className="h-11 w-11 object-contain" loading="lazy" />
                            </span>
                            <span className="min-w-0">
                              <strong className="block truncate text-xs text-[#23396b]">{character.nameZh}</strong>
                              <span className="mono-type mt-0.5 block truncate text-[8px] font-black text-[#ff5f64]">{character.name}</span>
                            </span>
                          </div>
                          {character.id === selected.id && <span className="absolute -right-2 -top-2 rounded-full border-2 border-[#23396b] bg-[#ffeb73] px-2 py-0.5 text-[8px] font-black">目前</span>}
                        </button>
                      )) : (
                        <div className="rounded-2xl border-2 border-dashed border-[#23396b]/30 p-5 text-center text-[10px] font-bold text-[#607070]">此階段沒有直接連結資料</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-1 text-center text-[10px] font-bold text-[#7b8b86]">← 前期　　點擊節點追蹤　　後期 →　　手機版可左右滑動查看完整進化樹</p>
          </section>

          <div className="mt-8 rounded-[2rem] border-[3px] border-[#23396b] bg-white/90 p-5 shadow-[0_6px_0_#23396b] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="mono-type text-[10px] font-black text-[#ff5f64]">STAGE OVERVIEW</p><h3 className="display-type text-2xl font-black">整個成長路徑</h3></div><span className="rounded-full border-2 border-[#23396b] bg-[#ffeb73] px-3 py-2 text-[10px] font-black">資料庫 {characterCatalog.length} 型態</span></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {stageOrder.map((stage, index) => {
                const count = characterCatalog.filter((item) => item.stage === stage).length;
                const active = selected.stage === stage;
                return <div key={stage} className={`relative rounded-2xl border-2 border-[#23396b] p-4 ${active ? stageBg[stage] : "bg-[#fff9e9]"}`}><p className="mono-type text-[9px] font-black text-[#a54842]">STEP {String(index + 1).padStart(2, "0")}</p><p className="mt-1 font-black">{stageZh[stage]}</p><p className="mono-type mt-1 text-[10px] font-black text-[#607070]">{stageLabel[stage]} · {count} 型態</p>{index < stageOrder.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-[#23396b] bg-white p-0.5 sm:block" />}</div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

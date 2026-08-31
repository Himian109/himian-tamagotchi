import SiteShell from "@/components/SiteShell";
import { matchesCharacterQuery } from "@/data/characterSearch";
import { characterCatalog, characterCatalogMeta, type CharacterEntry, type GrowthStage } from "@/data/characters";
import { Check, Heart, Search, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";

const stageLabels: Record<GrowthStage, string> = { Baby: "Baby 幼兒期", Kid: "Kid 兒童期", Young: "Young 青年期", Adult: "Adult 成年期" };
const stageShort: Record<GrowthStage, string> = { Baby: "幼兒", Kid: "兒童", Young: "青年", Adult: "成年" };
const stages: Array<"全部" | GrowthStage> = ["全部", "Baby", "Kid", "Young", "Adult"];
const versions = ["全部版本", "Land／Water／Sky 原始三版", "Jade Forest", "Orange Tropics／White Glacier"];
const fields = ["全部場地", "Land", "Water", "Sky", "Forest", "Tropical", "Ice", "Any"];
const fieldLabel: Record<string, string> = { Land: "陸地", Water: "水域", Sky: "天空", Forest: "森林", Tropical: "熱帶", Ice: "冰原", Any: "不限場地" };
const fieldStyle: Record<string, string> = { Land: "bg-[#ffdd72]", Water: "bg-[#9edff5]", Sky: "bg-[#cfc4ff]", Forest: "bg-[#93dfaa]", Tropical: "bg-[#ff9f8f]", Ice: "bg-[#d5efff]", Any: "bg-[#f6c5df]" };

function useCollectedCharacters() {
  const [collected, setCollected] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("himian-character-collection") || "[]"); } catch { return []; }
  });
  useEffect(() => localStorage.setItem("himian-character-collection", JSON.stringify(collected)), [collected]);
  const toggle = (id: string) => setCollected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return { collected, toggle };
}

function CharacterCard({ character, collected, onToggle }: { character: CharacterEntry; collected: boolean; onToggle: () => void }) {
  const field = character.fields.find((item) => item !== "Any") || "Any";
  return <article className={`character-sticker group relative overflow-hidden border-[3px] border-[#23396b] ${collected ? "bg-[#fff0ed] shadow-[0_7px_0_#ff6f61]" : "bg-white shadow-[0_7px_0_#23396b]"}`}>
    <button onClick={(event) => { event.preventDefault(); event.stopPropagation(); onToggle(); }} className={`focus-ring absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#23396b] ${collected ? "bg-[#ff6f61] text-white" : "bg-white/90 text-[#ff6f61]"}`} aria-label={collected ? `從收藏移除 ${character.nameZh}` : `收藏 ${character.nameZh}`}>
      {collected ? <Check className="h-5 w-5" strokeWidth={3} /> : <Heart className="h-5 w-5" />}
    </button>
    <Link href={`/characters/${character.id}`} className="focus-ring block text-left">
      <div className={`relative flex aspect-[1.1] items-center justify-center overflow-hidden ${fieldStyle[field] || fieldStyle.Any}`}>
        <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full border-[14px] border-white/35" />
        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full border-[10px] border-[#23396b]/10" />
        <img src={character.artwork} alt={`${character.nameZh}（${character.name}）角色圖`} loading="lazy" className="relative h-[78%] w-[78%] object-contain transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-2" />
      </div>
      <div className="p-4"><div className="flex items-center justify-between gap-2"><span className="rounded-full bg-[#23396b] px-2.5 py-1 text-[10px] font-black text-white">{stageShort[character.stage]}</span><span className="text-[10px] font-bold text-[#607070]">{fieldLabel[field] || field}</span></div><h2 className="display-type mt-3 break-words text-lg font-black leading-tight text-[#23396b]">{character.nameZh}</h2><p className="mono-type mt-1 break-words text-[10px] font-bold text-[#ff5f64]">{character.name}</p><p className="mt-2 line-clamp-2 text-xs font-bold leading-5 text-[#66726f]">{character.species.length ? `${character.species.join("／")} 系` : stageLabels[character.stage]}</p>{character.secret && <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#ff6f61] px-2.5 py-1 text-[10px] font-black text-white"><Sparkles className="h-3 w-3" />特殊角色</span>}</div>
    </Link>
  </article>;
}

export default function Characters() {
  const initialQuery = new URLSearchParams(window.location.search).get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [stage, setStage] = useState<"全部" | GrowthStage>("全部");
  const [version, setVersion] = useState("全部版本");
  const [field, setField] = useState("全部場地");
  const [collectionOnly, setCollectionOnly] = useState(false);
  const { collected, toggle } = useCollectedCharacters();
  const filtered = useMemo(() => characterCatalog.filter((character) => matchesCharacterQuery(character, query) && (stage === "全部" || character.stage === stage) && (version === "全部版本" || character.versions.includes(version)) && (field === "全部場地" || character.fields.includes(field)) && (!collectionOnly || collected.includes(character.id))), [query, stage, version, field, collectionOnly, collected]);
  const groupedCharacters = useMemo(() => (["Baby", "Kid", "Young", "Adult"] as GrowthStage[]).map((groupStage) => ({ stage: groupStage, characters: filtered.filter((c) => c.stage === groupStage), total: characterCatalog.filter((c) => c.stage === groupStage).length, collected: characterCatalog.filter((c) => c.stage === groupStage && collected.includes(c.id)).length })).filter((group) => group.characters.length), [filtered, collected]);

  return <SiteShell>
    <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#f8a7c8]"><div className="absolute inset-0 bg-[linear-gradient(115deg,#fff8ec_0_52%,#93e2d1_52%_68%,#a8ddf5_68%)]" /><div className="absolute inset-0 bg-gradient-to-r from-[#fff8ec]/96 via-[#fff8ec]/68 to-transparent" /><div className="container relative flex min-h-[420px] items-center py-16"><div className="max-w-2xl"><p className="inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffdd57] px-4 py-2 text-xs font-black shadow-[0_4px_0_#23396b]"><Sparkles className="h-4 w-4" />PARADISE 成長研究所</p><h1 className="display-type mt-6 text-5xl font-black leading-[.98] text-[#23396b] sm:text-7xl">所有寵物，<br /><span className="text-[#ff5f64]">一次集合！</span></h1><p className="mt-6 max-w-xl text-base font-bold leading-8 text-[#405a59] sm:text-lg">從 Baby、Kid、Young 到 Adult，點開角色即可查看完整養成條件與進化資料。</p><div className="mt-7 flex flex-wrap gap-3"><span className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-sm font-black">{characterCatalogMeta.visibleForms} 個型態</span><span className="rounded-full border-2 border-[#23396b] bg-[#ff6f61] px-4 py-2 text-sm font-black text-white">{collected.length} 個已收藏</span></div></div></div></section>
    <section className="kawaii-pattern-bg py-10"><div className="container"><div className="sticky top-20 z-30 rounded-[2rem] border-[3px] border-[#23396b] bg-white/95 p-4 shadow-[0_7px_0_#23396b] backdrop-blur-md sm:p-6"><div className="relative"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#607070]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋中文名、英文名、物種或養成條件…" className="focus-ring h-14 w-full rounded-full border-[3px] border-[#23396b] bg-[#fff9e9] pl-12 pr-12 text-sm font-bold outline-none" />{query && <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2"><X className="h-5 w-5" /></button>}</div><div className="mt-4 flex gap-2 overflow-x-auto pb-2">{stages.map((item) => <button key={item} onClick={() => setStage(item)} className={`focus-ring shrink-0 rounded-full border-2 border-[#23396b] px-4 py-2 text-xs font-black ${stage === item ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#23396b]" : "bg-[#ffeb73]"}`}>{item === "全部" ? "全部階段" : stageLabels[item]}</button>)}</div><div className="mt-2 flex gap-2 overflow-x-auto pb-2">{versions.map((item) => <button key={item} onClick={() => setVersion(item)} className={`focus-ring shrink-0 rounded-full border-2 border-[#23396b] px-4 py-2 text-xs font-black ${version === item ? "bg-[#72d8bc] shadow-[0_3px_0_#23396b]" : "bg-white"}`}>{item}</button>)}</div><div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1">{fields.map((item) => <button key={item} onClick={() => setField(item)} className={`focus-ring shrink-0 rounded-full border-2 border-[#23396b] px-3 py-2 text-xs font-black ${field === item ? `${fieldStyle[item === "全部場地" ? "Any" : item]} shadow-[0_3px_0_#23396b]` : "bg-white"}`}>{fieldLabel[item] || item}</button>)}<button onClick={() => setCollectionOnly((v) => !v)} className={`focus-ring ml-auto shrink-0 rounded-full border-2 border-[#23396b] px-4 py-2 text-xs font-black ${collectionOnly ? "bg-[#ff6f61] text-white" : "bg-[#fff0ed]"}`}><Heart className="mr-1 inline h-3.5 w-3.5" />只看收藏</button></div></div><div className="my-8"><p className="text-xs font-black text-[#ff5f64]">CHARACTER INDEX</p><h2 className="display-type mt-1 text-3xl font-black text-[#23396b]">找到 {filtered.length} 個成長型態</h2></div>{filtered.length ? <div className="grid gap-12">{groupedCharacters.map((group, i) => <section key={group.stage} className="collection-console overflow-hidden rounded-[2.4rem] border-[3px] border-[#23396b] bg-white/85 shadow-[0_8px_0_#23396b]"><div className={`grid gap-4 border-b-[3px] border-[#23396b] p-5 sm:grid-cols-[1fr_auto] sm:items-center ${["bg-[#f8a7c8]","bg-[#a8ddf5]","bg-[#ffeb73]","bg-[#91dfbd]"][i]}`}><div><p className="mono-type text-[10px] font-black text-[#ff5f64]">MODULE {String(i + 1).padStart(2, "0")} · LOADED</p><h3 className="display-type mt-1 text-3xl font-black text-[#23396b]">{stageLabels[group.stage]}</h3></div><div className="min-w-52 rounded-2xl border-2 border-[#23396b] bg-white/90 p-3"><div className="flex items-center justify-between text-xs font-black"><span>COLLECTION</span><span className="text-[#ff5f64]">{group.collected} / {group.total}</span></div><div className="mt-2 h-3 overflow-hidden rounded-full border-2 border-[#23396b] bg-[#fff9e9]"><div className="h-full bg-[#ff6f61]" style={{ width: `${group.total ? group.collected / group.total * 100 : 0}%` }} /></div></div></div><div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">{group.characters.map((character) => <CharacterCard key={character.id} character={character} collected={collected.includes(character.id)} onToggle={() => toggle(character.id)} />)}</div></section>)}</div> : <div className="rounded-[2rem] border-[3px] border-dashed border-[#23396b] bg-white p-12 text-center"><p className="display-type text-3xl font-black">這顆星球暫時找不到角色</p><p className="mt-3 font-bold text-[#607070]">試著清除搜尋，或切換其他階段與場地。</p></div>}</div></section>
  </SiteShell>;
}

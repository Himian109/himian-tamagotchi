import SiteShell from "@/components/SiteShell";
import { characterCatalog, getCharacterNameZh, type CharacterEntry } from "@/data/characters";
import { ArrowLeft, Check, Copy, ExternalLink, GitBranch, Heart, MapPin, Share2, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "wouter";

const stageLabel: Record<CharacterEntry["stage"], string> = { Baby: "Baby 幼兒期", Kid: "Kid 兒童期", Young: "Young 青年期", Adult: "Adult 成年期" };
const fieldLabel: Record<string, string> = { Land: "陸地", Water: "水域", Sky: "天空", Forest: "森林", Tropical: "熱帶", Ice: "冰原", Any: "不限場地" };
const fieldClass: Record<string, string> = { Land: "bg-[#ffdd72]", Water: "bg-[#9edff5]", Sky: "bg-[#cfc4ff]", Forest: "bg-[#93dfaa]", Tropical: "bg-[#ff9f8f]", Ice: "bg-[#d5efff]", Any: "bg-[#f6c5df]" };

function setMeta(name: string, content: string) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute("name", name); document.head.appendChild(node); }
  node.setAttribute("content", content);
}
function setProperty(property: string, content: string) {
  let node = document.querySelector(`meta[property="${property}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute("property", property); document.head.appendChild(node); }
  node.setAttribute("content", content);
}

export default function CharacterDetail() {
  const params = useParams<{ id: string }>();
  const character = useMemo(() => characterCatalog.find((item) => item.id === params.id), [params.id]);
  const [collected, setCollected] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!character) return;
    try { setCollected(JSON.parse(localStorage.getItem("himian-character-collection") || "[]").includes(character.id)); } catch { setCollected(false); }
    const title = `${character.nameZh}（${character.name}）｜Tamagotchi Paradise 角色圖鑑｜himian-Tamagotchi`;
    const description = `${character.nameZh}（${character.name}）的 Tamagotchi Paradise 中文角色資料：成長階段、版本、場地、進化來源、照顧失誤與進化條件。`;
    document.title = title;
    setMeta("description", description);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "article");
    setProperty("og:image", character.artwork);
    setProperty("og:url", window.location.href);
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical"); canonical.setAttribute("href", window.location.href); document.head.appendChild(canonical);

    const schemaId = "character-jsonld";
    document.getElementById(schemaId)?.remove();
    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: window.location.href,
      image: character.artwork,
      inLanguage: "zh-Hant",
      isPartOf: { "@type": "WebSite", name: "himian-Tamagotchi", url: window.location.origin },
      about: { "@type": "Thing", name: character.name },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: window.location.origin + "/" },
          { "@type": "ListItem", position: 2, name: "全寵圖鑑", item: window.location.origin + "/characters" },
          { "@type": "ListItem", position: 3, name: character.nameZh, item: window.location.href },
        ],
      },
    });
    document.head.appendChild(schema);
    return () => document.getElementById(schemaId)?.remove();
  }, [character]);

  if (!character) return <SiteShell><div className="container py-24 text-center"><p className="display-type text-4xl font-black">找不到這隻角色</p><p className="mt-3 font-bold text-[#607070]">這個圖鑑網址可能已經變更。</p><Link href="/characters" className="mt-6 inline-flex rounded-full border-2 border-[#23396b] bg-[#ffeb73] px-5 py-3 font-black shadow-[0_3px_0_#23396b]">返回全寵圖鑑</Link></div></SiteShell>;

  const variants = character.variants;
  const previous = [...new Set(variants.map((v) => v.evolvesFrom).filter((v) => v !== "Egg"))].map((name) => characterCatalog.find((c) => c.name === name)).filter(Boolean) as CharacterEntry[];
  const next = characterCatalog.filter((candidate) => candidate.variants.some((variant) => variant.evolvesFrom === character.name));

  const shareCharacter = async () => {
    const shareData = { title: `${character.nameZh}｜Tamagotchi Paradise`, text: `${character.nameZh}（${character.name}）角色資料`, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    } catch { /* user cancelled share */ }
  };

  const toggleCollection = () => {
    try {
      const current: string[] = JSON.parse(localStorage.getItem("himian-character-collection") || "[]");
      const updated = current.includes(character.id) ? current.filter((id) => id !== character.id) : [...current, character.id];
      localStorage.setItem("himian-character-collection", JSON.stringify(updated));
      setCollected(!current.includes(character.id));
    } catch { /* local-only enhancement */ }
  };

  return <SiteShell>
    <article className="kawaii-pattern-bg min-h-screen pb-20">
      <div className="container pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs font-black text-[#607070]">
          <Link href="/" className="hover:text-[#ff5f64]">首頁</Link><span aria-hidden="true">/</span><Link href="/characters" className="hover:text-[#ff5f64]">全寵圖鑑</Link><span aria-hidden="true">/</span><span className="text-[#23396b]" aria-current="page">{character.nameZh}</span>
        </nav>
        <Link href="/characters" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]"><ArrowLeft className="h-4 w-4" />返回全寵圖鑑</Link>
        <div className="mt-6 grid overflow-hidden rounded-[2.5rem] border-[3px] border-[#23396b] bg-white shadow-[0_9px_0_#23396b] lg:grid-cols-[.8fr_1.2fr]">
          <div className={`relative grid min-h-[360px] place-items-center overflow-hidden ${fieldClass[character.fields.find((item) => item !== "Any") || "Any"]}`}>
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border-[24px] border-white/35" />
            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[18px] border-[#23396b]/10" />
            <img loading="lazy" src={character.artwork} alt={`${character.nameZh}（${character.name}）角色圖`} className="relative h-72 w-72 object-contain drop-shadow-[0_10px_0_rgba(35,57,107,.15)]" />
            <span className="absolute left-6 top-6 rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black">{stageLabel[character.stage]}</span>
          </div>
          <div className="p-7 sm:p-10">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#ff6f61] px-3 py-1 text-[10px] font-black text-white">CHARACTER DATABASE</span>{character.secret && <span className="inline-flex items-center gap-1 rounded-full bg-[#ffeb73] px-3 py-1 text-[10px] font-black"><Sparkles className="h-3 w-3" />特殊角色</span>}</div>
            <h1 className="display-type mt-5 text-4xl font-black leading-tight text-[#23396b] sm:text-6xl">{character.nameZh}</h1>
            <p className="mono-type mt-2 text-sm font-black text-[#ff5f64]">{character.name}</p>
            <p className="mt-5 max-w-2xl text-sm font-bold leading-7 text-[#607070]">{character.species.length ? `${character.species.join("／")} 系角色` : stageLabel[character.stage]}。收錄 {character.variants.length} 組版本／場地資料，可直接從這個網址分享給其他玩家。</p>
            <div className="mt-7 flex flex-wrap gap-2">{character.fields.map((field) => <span key={field} className={`rounded-full border-2 border-[#23396b] px-3 py-1.5 text-xs font-black ${fieldClass[field] || fieldClass.Any}`}><MapPin className="mr-1 inline h-3.5 w-3.5" />{fieldLabel[field] || field}</span>)}{character.versions.map((version) => <span key={version} className="rounded-full border-2 border-[#23396b] bg-[#fff9e9] px-3 py-1.5 text-xs font-black">{version}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={toggleCollection} className={`focus-ring rounded-full border-2 border-[#23396b] px-5 py-3 text-sm font-black shadow-[0_3px_0_#23396b] ${collected ? "bg-[#ff6f61] text-white" : "bg-[#ffeb73]"}`}><Heart className="mr-2 inline h-4 w-4" />{collected ? "已收藏" : "加入收藏"}</button>
              <Link href={`/evolution?q=${encodeURIComponent(character.name)}`} className="focus-ring rounded-full border-2 border-[#23396b] bg-[#e3f8f0] px-5 py-3 text-sm font-black shadow-[0_3px_0_#23396b]"><GitBranch className="mr-2 inline h-4 w-4" />查看進化中心</Link>
              <button onClick={shareCharacter} className="focus-ring rounded-full border-2 border-[#23396b] bg-white px-5 py-3 text-sm font-black"><Share2 className="mr-2 inline h-4 w-4" />{copied ? <><Check className="mr-1 inline h-4 w-4" />已複製</> : "分享角色"}</button>
              <a href={character.sourceUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full border-2 border-[#23396b] bg-white px-5 py-3 text-sm font-black"><ExternalLink className="mr-2 inline h-4 w-4" />原始資料</a>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] border-[3px] border-[#23396b] bg-[#fffdf5] p-6 shadow-[0_6px_0_#23396b] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="mono-type text-[10px] font-black text-[#ff5f64]">CONNECTED DATABASE</p><h2 className="display-type mt-1 text-3xl font-black text-[#23396b]">繼續探索相關資料</h2><p className="mt-2 text-xs font-bold leading-6 text-[#607070]">從這隻角色直接前往進化、同場地角色與常用攻略，減少來回找選單。</p></div>
            <Link href={`/characters?q=${encodeURIComponent(character.name)}`} className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]">查看相關角色</Link>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href={`/evolution?q=${encodeURIComponent(character.name)}`} className="group rounded-2xl border-2 border-[#23396b] bg-[#e3f8f0] p-4 shadow-[0_3px_0_#23396b]">
              <span className="mono-type text-[9px] font-black text-[#31735f]">PATH</span><strong className="mt-2 block text-sm font-black">進化路徑</strong><span className="mt-1 flex items-center text-xs font-bold text-[#607070]">查看前後型態 <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link href={`/characters?q=${encodeURIComponent(character.fields.find((f) => f !== "Any") || character.fields[0] || "")}`} className="group rounded-2xl border-2 border-[#23396b] bg-[#ddebfa] p-4 shadow-[0_3px_0_#23396b]">
              <span className="mono-type text-[9px] font-black text-[#315a7a]">FIELD</span><strong className="mt-2 block text-sm font-black">同場地角色</strong><span className="mt-1 flex items-center text-xs font-bold text-[#607070]">探索 {fieldLabel[character.fields.find((f) => f !== "Any") || "Any"] || "相關角色"} <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link href="/guide" className="group rounded-2xl border-2 border-[#23396b] bg-[#ffeb73] p-4 shadow-[0_3px_0_#23396b]">
              <span className="mono-type text-[9px] font-black text-[#8a5d00]">GUIDE</span><strong className="mt-2 block text-sm font-black">分類攻略</strong><span className="mt-1 flex items-center text-xs font-bold text-[#607070]">查看照顧與進化 <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link href="/ai" className="group rounded-2xl border-2 border-[#23396b] bg-[#f8d7e6] p-4 shadow-[0_3px_0_#23396b]">
              <span className="mono-type text-[9px] font-black text-[#a54842]">AI LAB</span><strong className="mt-2 block text-sm font-black">問攻略助手</strong><span className="mt-1 flex items-center text-xs font-bold text-[#607070]">直接問這隻角色 <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border-[3px] border-[#23396b] bg-[#fff9e9] p-6 shadow-[0_6px_0_#23396b]"><p className="mono-type text-[10px] font-black text-[#a54842]">EVOLUTION FROM</p><h2 className="display-type mt-2 text-2xl font-black">從哪裡進化而來？</h2><div className="mt-4 grid gap-2">{previous.length ? previous.map((item) => <Link key={item.id} href={`/characters/${item.id}`} className="flex items-center gap-3 rounded-2xl border-2 border-[#23396b] bg-white p-3 hover:-translate-y-0.5"><img loading="lazy" src={item.artwork} alt="" className="h-14 w-14 rounded-xl bg-[#a8ddf5] object-contain" /><span><strong className="block">{item.nameZh}</strong><span className="mono-type text-[10px] text-[#ff5f64]">{item.name}</span></span></Link>) : <p className="font-bold text-[#607070]">蛋 → {character.nameZh}</p>}</div></div>
          <div className="rounded-[2rem] border-[3px] border-[#23396b] bg-[#e3f8f0] p-6 shadow-[0_6px_0_#23396b]"><p className="mono-type text-[10px] font-black text-[#31735f]">EVOLVES TO</p><h2 className="display-type mt-2 text-2xl font-black">下一階段有哪些？</h2><div className="mt-4 grid gap-2">{next.length ? next.map((item) => <Link key={item.id} href={`/characters/${item.id}`} className="flex items-center gap-3 rounded-2xl border-2 border-[#23396b] bg-white p-3 hover:-translate-y-0.5"><img loading="lazy" src={item.artwork} alt="" className="h-14 w-14 rounded-xl bg-[#a8ddf5] object-contain" /><span><strong className="block">{item.nameZh}</strong><span className="mono-type text-[10px] text-[#ff5f64]">{item.name}</span></span></Link>) : <p className="font-bold text-[#607070]">目前沒有後續資料。</p>}</div></div>
        </section>

        <section className="mt-10 rounded-[2rem] border-[3px] border-[#23396b] bg-white p-6 shadow-[0_7px_0_#23396b] sm:p-8"><p className="mono-type text-[10px] font-black text-[#a54842]">GROWTH DATA</p><h2 className="display-type mt-2 text-3xl font-black">版本與養成條件</h2><div className="mt-6 grid gap-5">{variants.map((variant, index) => <div key={`${variant.version}-${variant.field}-${index}`} className="rounded-3xl border-2 border-[#23396b] bg-[#fff9e9] p-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#23396b] px-3 py-1 text-[10px] font-black text-white">{variant.version}</span><span className={`rounded-full px-3 py-1 text-[10px] font-black ${fieldClass[variant.field] || fieldClass.Any}`}>{fieldLabel[variant.field] || variant.field}</span></div><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#fff4c4] p-4"><p className="text-[10px] font-black text-[#9a5a33]">成長來源</p><p className="mt-1 text-sm font-black">{variant.evolvesFrom === "Egg" ? "蛋" : getCharacterNameZh(variant.evolvesFrom, variant.field)}</p></div><div className="rounded-2xl bg-[#e3f8f0] p-4"><p className="text-[10px] font-black text-[#31735f]">照顧失誤</p><p className="mt-1 text-sm font-black">{variant.careMistakes}</p></div></div><p className="mt-4 text-sm font-bold leading-7 text-[#405a59]">{variant.conditionZh || "目前沒有額外條件。"}</p></div>)}</div></section>
      </div>
    </article>
  </SiteShell>;
}

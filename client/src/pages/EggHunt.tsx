import SiteShell from "@/components/SiteShell";
import { characterCatalog } from "@/data/characters";
import { eggHuntFields, eggHuntItems, eggHuntLocations, eggHuntMeta, type IngredientCategory, type HuntFieldId, type HuntLocationId } from "@/data/eggHunt";
import { filterEggHuntItems } from "@/data/eggHuntSearch";
import { Apple, Beef, Bug, Candy, Egg, Fish, Flame, Leaf, MapPin, Search, Sparkles, Waves, Wheat } from "lucide-react";
import { useMemo, useState } from "react";

const categoryIcons = { 肉類: Beef, 蔬果: Apple, 蟲類餐點: Bug, 海鮮: Fish, 植物: Leaf, 甜品: Candy, 穀物: Wheat } satisfies Record<IngredientCategory, typeof Apple>;
const categoryColors: Record<IngredientCategory, string> = { 肉類: "#ffd4c5", 蔬果: "#ffe876", 蟲類餐點: "#ddcfef", 海鮮: "#bdeaf7", 植物: "#b9edcf", 甜品: "#ffc8df", 穀物: "#ffe1a3" };

export default function EggHunt() {
  const [query, setQuery] = useState("");
  const [field, setField] = useState<HuntFieldId | "all">("all");
  const [location, setLocation] = useState<HuntLocationId | "all">("all");
  const filtered = useMemo(() => filterEggHuntItems(eggHuntItems, { query, field, location }), [query, field, location]);
  const shownFields = eggHuntFields.filter((entry) => filtered.some((item) => item.field === entry.id));
  const heroPals = ["Babymarutchi", "Mametchi", "Irukatchi", "Horhotchi"].map((name) => characterCatalog.find((item) => item.name === name)).filter(Boolean);

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#f0dcff]">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-[28px] border-white/45" />
        <div className="container grid min-h-[520px] gap-8 py-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div className="relative z-10">
            <span className="pixel-tag inline-flex items-center gap-2 bg-[#ffd75e] px-4 py-2 text-xs font-black"><Egg className="h-4 w-4" /> EGG HUNT / 食材研究</span>
            <h1 className="display-type mt-6 text-[clamp(3.4rem,7vw,6.5rem)] font-black leading-[.9]">尋找彩蛋，<br /><span className="text-[#ff5f64]">帶回食材！</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#46655f]">依六個場地與咚咚火山、咚咚泉／溫泉整理可獲得食材。先選地點，再確認今天想帶回哪一種材料。</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 font-black shadow-[0_3px_0_#23396b]">{eggHuntMeta.fields} 個場地</span>
              <span className="rounded-full border-2 border-[#23396b] bg-[#ff6f61] px-4 py-2 font-black text-white shadow-[0_3px_0_#23396b]">{eggHuntMeta.itemPositions} 個獲得位置</span>
              <span className="rounded-full border-2 border-[#23396b] bg-[#91dfbd] px-4 py-2 font-black shadow-[0_3px_0_#23396b]">{eggHuntMeta.uniqueIngredients} 種食材</span>
            </div>
          </div>
          <div className="relative min-h-[330px]">
            <div className="absolute inset-0 rotate-2 rounded-[45%_55%_48%_52%/58%_44%_56%_42%] border-[5px] border-[#23396b] bg-[#fff8e7] shadow-[0_12px_0_#23396b]" />
            <Egg className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 text-[#ffeb73]" fill="currentColor" strokeWidth={1.5} />
            {heroPals.map((pal, index) => <img loading="lazy" key={pal!.id} src={pal!.artwork} alt="" className={`absolute h-28 w-28 object-contain sm:h-36 sm:w-36 ${["left-[5%] top-[12%] -rotate-6", "right-[8%] top-[8%] rotate-6", "bottom-[2%] left-[18%] rotate-3", "bottom-[2%] right-[15%] -rotate-3"][index]}`} />)}
          </div>
        </div>
      </section>

      <section className="orbit-section py-16 sm:py-20">
        <div className="container">
          <div className="rounded-[2rem] border-[3px] border-[#23396b] bg-white p-5 shadow-[0_7px_0_#23396b] sm:p-7">
            <div className="flex items-center gap-3"><Search className="h-5 w-5 text-[#ff5f64]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋食材、場地或地點…" className="min-w-0 flex-1 bg-transparent py-3 text-base font-bold outline-none placeholder:text-[#7b918b]" /></div>
            <div className="mt-5 flex flex-wrap gap-2 border-t-2 border-[#23396b]/15 pt-5">
              <button onClick={() => setField("all")} className={`focus-ring rounded-full border-2 border-[#23396b] px-4 py-2 text-sm font-black ${field === "all" ? "bg-[#ff6f61] text-white" : "bg-[#fff8e7]"}`}>全部場地</button>
              {eggHuntFields.map((entry) => <button key={entry.id} onClick={() => setField(entry.id)} className={`focus-ring rounded-full border-2 border-[#23396b] px-4 py-2 text-sm font-black ${field === entry.id ? "text-white" : "bg-white"}`} style={field === entry.id ? { backgroundColor: entry.color, color: "#23396b" } : undefined}>{entry.label}</button>)}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setLocation("all")} className={`focus-ring rounded-xl border-2 border-[#23396b] px-4 py-2 text-sm font-black ${location === "all" ? "bg-[#23396b] text-white" : "bg-white"}`}>兩個地點</button>
              {eggHuntLocations.map((entry) => <button key={entry.id} onClick={() => setLocation(entry.id)} className={`focus-ring inline-flex items-center gap-2 rounded-xl border-2 border-[#23396b] px-4 py-2 text-sm font-black ${location === entry.id ? "bg-[#ffd75e] shadow-[0_3px_0_#23396b]" : "bg-white"}`}>{entry.id === "volcano" ? <Flame className="h-4 w-4" /> : <Waves className="h-4 w-4" />}{entry.label}</button>)}
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between gap-4"><div><p className="mono-type text-xs font-bold text-[#a54842]">INGREDIENT INDEX</p><h2 className="display-type mt-2 text-3xl font-black sm:text-4xl">找到 {filtered.length} 個獲得位置</h2></div><span className="hidden items-center gap-2 rounded-full bg-[#e9fff5] px-4 py-2 text-xs font-bold sm:inline-flex"><Sparkles className="h-4 w-4 text-[#ff6f61]" />依你提供的圖表整理</span></div>

          <div className="mt-8 space-y-10">
            {shownFields.map((fieldInfo) => {
              const mascot = characterCatalog.find((item) => item.name === fieldInfo.mascot);
              return (
                <section key={fieldInfo.id} className="overflow-hidden rounded-[2.25rem] border-[3px] border-[#23396b] bg-white shadow-[0_8px_0_#23396b]">
                  <div className="relative flex min-h-32 items-center justify-between overflow-hidden border-b-[3px] border-[#23396b] px-6 py-5" style={{ backgroundColor: fieldInfo.color }}>
                    <div><p className="mono-type text-xs font-black opacity-60">{fieldInfo.english} FIELD</p><h3 className="display-type mt-1 text-4xl font-black">{fieldInfo.label}</h3></div>
                    {mascot && <img loading="lazy" src={mascot.artwork} alt="" className="absolute -bottom-5 right-4 h-36 w-36 rotate-6 object-contain" />}
                  </div>
                  <div className="grid lg:grid-cols-2">
                    {eggHuntLocations.map((locationInfo, locationIndex) => {
                      const locationItems = filtered.filter((item) => item.field === fieldInfo.id && item.location === locationInfo.id);
                      if (!locationItems.length) return null;
                      return (
                        <div key={locationInfo.id} className={`p-5 sm:p-7 ${locationIndex === 0 ? "border-b-[3px] border-[#23396b] lg:border-b-0 lg:border-r-[3px]" : ""}`} style={{ backgroundColor: fieldInfo.pale }}>
                          <h4 className="display-type flex items-center gap-3 text-2xl font-black">{locationInfo.id === "volcano" ? <Flame className="h-6 w-6 text-[#ff5f64]" /> : <Waves className="h-6 w-6 text-[#4a93c9]" />}{locationInfo.label}</h4>
                          <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {locationItems.map((item) => { const Icon = categoryIcons[item.category]; return <article key={item.id} className="flex min-h-24 items-center gap-3 rounded-2xl border-2 border-[#23396b] bg-white p-4 shadow-[0_4px_0_#23396b]"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#23396b]" style={{ backgroundColor: categoryColors[item.category] }}><Icon className="h-6 w-6" /></span><span><span className="block text-[10px] font-bold text-[#789189]">{item.category}</span><strong className="display-type text-lg">{item.name}</strong></span></article>; })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {!filtered.length && <div className="mt-8 rounded-[2rem] border-[3px] border-dashed border-[#23396b] bg-[#fff8e7] p-12 text-center"><MapPin className="mx-auto h-10 w-10 text-[#ff6f61]" /><h3 className="display-type mt-4 text-2xl font-black">這條路線沒有找到食材</h3><p className="mt-2 text-sm text-[#617873]">試著清除搜尋字或切換其他場地、地點。</p></div>}
        </div>
      </section>
    </SiteShell>
  );
}

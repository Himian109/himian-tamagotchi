/**
 * 口袋星球圖鑑首頁：不對稱的文字操作區搭配大型蛋形裝置視覺，讓玩家第一眼就能搜尋與選分類。
 */
import CharacterParade from "@/components/CharacterParade";
import SiteShell from "@/components/SiteShell";
import { characterCatalog } from "@/data/characters";
import { categories, dailyChecklist, guideSections, quickFacts } from "@/data/guideData";
import { ArrowRight, CalendarDays, Check, ChevronRight, CircleAlert, Egg, GitBranch, PawPrint, Search, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const homePals = ["Mametchi", "Kuchipatchi", "Mimitchi", "Irukatchi", "Horhotchi"];
const categoryPals = ["Babymarutchi", "Meowtchi", "Irukatchi", "Horhotchi", "Forest Horhotchi", "Ananatchi", "Icy Irukatchi", "Mimitchi"]
  .map((name) => characterCatalog.find((item) => item.name === name))
  .filter(Boolean);

function DailyChecklist() {
  const [checked, setChecked] = useState<number[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("himian-tama-daily");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  const toggle = (index: number) => {
    const next = checked.includes(index) ? checked.filter((item) => item !== index) : [...checked, index];
    setChecked(next);
    localStorage.setItem("himian-tama-daily", JSON.stringify(next));
  };

  return (
      <section className="relative overflow-hidden border-y-[3px] border-[#23396b] bg-[#91dfbd] py-16 sm:py-20">
        <img src={characterCatalog.find((item) => item.name === "Kuchipatchi")?.artwork} alt="" className="pointer-events-none absolute -bottom-8 -left-6 hidden h-48 w-48 rotate-6 object-contain opacity-95 lg:block" loading="lazy" />
      <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="max-w-lg">
          <p className="mono-type text-xs font-bold">LOCAL SAVE / DAILY CARE</p>
          <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">今天的照顧，完成了嗎？</h2>
          <p className="mt-5 leading-8 text-[#31534d]">勾選狀態只保存在你的瀏覽器，不需註冊。每天回來時，可以快速確認最重要的照顧事項。</p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-xl border-2 border-[#193a34] bg-[#fff8e7] px-4 py-3 font-bold shadow-[0_4px_0_#193a34]">
            <Sparkles className="h-5 w-5 text-[#ff6f61]" />
            {checked.length} / {dailyChecklist.length} 已完成
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {dailyChecklist.map((item, index) => {
            const active = checked.includes(index);
            return (
              <button
                key={item}
                onClick={() => toggle(index)}
                className={`focus-ring flex min-h-24 items-start gap-4 rounded-2xl border-2 border-[#193a34] p-4 text-left font-bold shadow-[0_4px_0_#193a34] ${active ? "bg-[#193a34] text-white" : "bg-[#fff8e7] hover:-translate-y-1"}`}
                aria-pressed={active}
              >
                <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 ${active ? "border-[#74d6b0] bg-[#74d6b0] text-[#193a34]" : "border-[#193a34]"}`}>
                  {active && <Check className="h-4 w-4" strokeWidth={3} />}
                </span>
                <span className={active ? "line-through opacity-75" : ""}>{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate(query.trim() ? `/characters?q=${encodeURIComponent(query.trim())}` : "/characters");
  };

  return (
    <SiteShell mainClassName="home-main">
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#fff8e7]">
        <div className="container grid min-h-[700px] gap-10 py-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:py-20">
          <div className="relative z-10 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#193a34] bg-[#ffd75e] px-4 py-2 text-sm font-bold shadow-[0_3px_0_#193a34]">
              <CircleAlert className="h-4 w-4" />
              非官方・繁體中文攻略站
            </div>
            <h1 className="display-type mt-7 max-w-3xl text-[clamp(3rem,7vw,5.8rem)] font-black leading-[.98] text-[#23396b]">
              跟著寵物，<br /><span className="text-[#ff5f64]">玩遍 Paradise！</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46655f]">
              從開機、照顧、進化到 Breeding，把分散的 Tamagotchi Paradise 資訊整理成一個能搜尋、能勾選、能直接帶著玩的口袋圖鑑。
            </p>
            <form onSubmit={submit} className="toy-shadow-sm mt-8 flex max-w-xl gap-2 rounded-2xl border-2 border-[#193a34] bg-white p-2">
              <label htmlFor="hero-search" className="sr-only">搜尋攻略</label>
              <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-[#638078]" />
              <input
                id="hero-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜尋 Care Mistake、睡眠、進化…"
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium outline-none placeholder:text-[#789189]"
              />
              <button className="focus-ring rounded-xl bg-[#ff6f61] px-5 py-3 text-sm font-black text-white hover:bg-[#e85f54]">搜尋</button>
            </form>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/characters" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ff6f61] px-6 py-3 font-black text-white shadow-[0_4px_0_#23396b]">
                打開全寵圖鑑 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/guide" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffeb73] px-6 py-3 font-black shadow-[0_4px_0_#23396b]">
                查分類攻略 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="/egg-hunt" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#d9b9f3] px-6 py-3 font-black shadow-[0_4px_0_#23396b]">
                尋蛋找食材 <Egg className="h-4 w-4" />
              </Link>
              <Link href="/events" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#a8ddf5] px-6 py-3 font-black shadow-[0_4px_0_#23396b]">
                查看活動 <CalendarDays className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative mt-4 min-h-[390px] isolate sm:min-h-[460px] lg:mt-0 lg:min-h-[560px]">
            <div className="absolute inset-[5%] -z-10 rounded-full border-[30px] border-[#f6a5c8]/28 sm:inset-[2%] sm:border-[42px] lg:-inset-[4%]" />
            <CharacterParade names={homePals} className="float-soft absolute inset-4 sm:inset-8 lg:inset-3" />
            <div className="absolute bottom-2 right-2 z-20 rotate-2 rounded-full border-2 border-[#23396b] bg-[#ff6f61] px-4 py-2 text-xs font-black text-white shadow-[0_4px_0_#23396b] sm:bottom-5 sm:right-6 sm:px-5 sm:py-3 sm:text-base">ZOOM × CARE × BREED</div>
          </div>
        </div>
        <div className="container grid grid-cols-2 border-x-2 border-t-2 border-[#193a34] bg-white sm:grid-cols-4">
          {quickFacts.map((fact, index) => (
            <div key={fact.label} className={`p-5 sm:p-6 ${index < quickFacts.length - 1 ? "border-r-2 border-[#193a34]/20" : ""} ${index < 2 ? "border-b-2 border-[#193a34]/20 sm:border-b-0" : ""}`}>
              <p className="display-type text-2xl font-black text-[#ff6f61] sm:text-3xl">{fact.value}</p>
              <p className="mt-1 text-xs font-bold text-[#5f7771] sm:text-sm">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-[#23396b]/15 bg-[#fffdf4] py-10 sm:py-14">
        <div className="container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-type text-[10px] font-black text-[#a54842]">QUICK ACCESS / 05</p>
              <h2 className="display-type mt-2 text-2xl font-black sm:text-3xl">今天最可能用到的工具</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#60756f]">不用記選單位置，從這裡直接進入最常查的資料。</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { href: "/characters", label: "找角色", sub: "全寵圖鑑", icon: PawPrint, cls: "bg-[#f8a7c8]" },
              { href: "/evolution", label: "查進化", sub: "進化中心", icon: GitBranch, cls: "bg-[#91dfbd]" },
              { href: "/egg-hunt", label: "找蛋", sub: "食材／蛋", icon: Egg, cls: "bg-[#d9b9f3]" },
              { href: "/guide#care", label: "看照顧", sub: "新手必看", icon: Sparkles, cls: "bg-[#ffeb73]" },
              { href: "/events", label: "看活動", sub: "活動月曆", icon: CalendarDays, cls: "bg-[#a8ddf5]" },
              { href: "/ai", label: "問 AI", sub: "攻略助手", icon: Sparkles, cls: "bg-[#f8a7c8]" },
            ].map(({ href, label, sub, icon: Icon, cls }) => (
              <Link key={href} href={href} className={`focus-ring group rounded-2xl border-2 border-[#23396b] p-4 shadow-[0_4px_0_#23396b] transition-transform hover:-translate-y-1 ${cls}`}>
                <Icon className="h-5 w-5 text-[#23396b]" strokeWidth={2.5} />
                <strong className="mt-4 block text-sm font-black">{label}</strong>
                <span className="mt-1 block text-[11px] font-bold text-[#526c66]">{sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.6fr_1.4fr] lg:items-end">
            <div>
              <p className="mono-type text-xs font-bold text-[#a54842]">MISSION SELECT</p>
              <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">八個重要入口，不繞路。</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#56706a] lg:justify-self-end">
              先從當下問題進入，再沿著來源連到完整脈絡。每一篇都會標示官方或社群來源，不把玩家推測混進確定資訊。
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.id === "codes" ? "/codes" : `/guide#${category.id}`}
                className={`group focus-ring relative min-h-48 overflow-hidden rounded-[2rem] border-[3px] border-[#23396b] p-5 shadow-[0_6px_0_#23396b] transition-transform hover:-translate-y-1 ${["bg-[#ffeb73]", "bg-[#f8a7c8]", "bg-[#91dfbd]", "bg-[#a8ddf5]"][index % 4]}`}
              >
                <span className="mono-type text-xs font-bold opacity-60">{category.glyph} / 08</span>
                <p className="display-type relative z-10 mt-12 max-w-[72%] text-2xl font-black text-[#23396b]">{category.label}</p>
                {categoryPals[index] && <img src={categoryPals[index]?.artwork} alt="" className="absolute -bottom-4 -right-4 h-28 w-28 rotate-6 object-contain transition-transform group-hover:scale-110 group-hover:-rotate-2" />}
                <ArrowRight className="absolute bottom-5 left-5 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-[#23396b] bg-[#a8ddf5] py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative min-h-[410px] overflow-hidden rounded-[3rem] border-[3px] border-[#23396b] bg-[#f8a7c8] shadow-[0_8px_0_#23396b]">
            <CharacterParade names={["Meowtchi", "Irukatchi", "Horhotchi", "Forest Horhotchi", "Icy Irukatchi"]} className="absolute inset-5" />
          </div>
          <div className="lg:pl-8">
            <p className="mono-type text-xs font-bold text-[#a54842]">SIX FIELDS / THREE PER DEVICE</p>
            <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">先看機身，再選角色。</h2>
            <p className="mt-6 leading-8 text-[#496760]">Pink／Blue／Purple 共用 Land、Water、Sky；Jade 改為 Forest、Land、Water；Orange／White 則使用 Tropical、Ice、Forest。每台只有三個場地，因此目標角色必須先確認版本。</p>
            <Link href="/guide#fields" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-[#193a34] bg-[#ffd75e] px-5 py-3 font-bold shadow-[0_4px_0_#193a34]">
              比較六種機身 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-type text-xs font-bold text-[#a54842]">POPULAR LOOKUP</p>
              <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">熱門角色，直接查。</h2>
            </div>
            <Link href="/characters" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-sm font-black shadow-[0_3px_0_#23396b]">全部角色 <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {homePals.map((name) => {
              const item = characterCatalog.find((character) => character.name === name);
              if (!item) return null;
              return (
                <Link key={item.id} href={`/characters/${item.id}`} className="focus-ring group overflow-hidden rounded-[1.5rem] border-2 border-[#23396b] bg-white p-3 shadow-[0_5px_0_#23396b] transition-transform hover:-translate-y-1">
                  <div className="flex aspect-square items-center justify-center rounded-[1.1rem] bg-[#e8f6f0]">
                    <img src={item.artwork} alt={item.nameZh} loading="lazy" className="h-[82%] w-[82%] object-contain transition-transform group-hover:scale-105" />
                  </div>
                  <strong className="mt-3 block truncate text-sm font-black">{item.nameZh}</strong>
                  <span className="mono-type mt-1 block truncate text-[9px] text-[#a54842]">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <DailyChecklist />

      <section className="py-20 sm:py-28">
        <div className="container">
          <p className="mono-type text-xs font-bold text-[#a54842]">MOST ASKED</p>
          <h2 className="display-type mt-3 text-4xl font-black sm:text-5xl">先解決最常卡住的三題</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {guideSections.filter((item) => ["care", "growth", "breed"].includes(item.id)).map((item, index) => (
              <article key={item.id} className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#23396b] bg-white p-6 shadow-[0_6px_0_#23396b]">
                {categoryPals[index + 1] && <img src={categoryPals[index + 1]?.artwork} alt="" className="absolute right-3 top-3 h-20 w-20 rotate-6 object-contain opacity-95" />}
                <span className={`pixel-tag inline-block px-3 py-2 text-xs font-bold ${index === 0 ? "bg-[#74d6b0]" : index === 1 ? "bg-[#ffd75e]" : "bg-[#bde2f6]"}`}>{item.category}</span>
                <h3 className="display-type mt-5 max-w-[75%] text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a736d]">{item.summary}</p>
                <Link href={`/guide#${item.id}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#a54842] hover:underline">
                  閱讀攻略 <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

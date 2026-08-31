/**
 * 口袋星球圖鑑：共用框架像一台隨身研究裝置，導覽清楚、對比穩定、品牌圖標保持醒目。
 */
import { assets, categories, guideSections, lastVerified } from "@/data/guideData";
import { characterCatalog } from "@/data/characters";
import { trpc } from "@/lib/trpc";
import { BookOpen, CalendarDays, Database, Egg, ExternalLink, Eye, GitBranch, Menu, Microscope, PawPrint, Search, X, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import SupportPopup from "./SupportPopup";

const navItems = [
  { href: "/", label: "星球首頁", icon: Microscope },
  { href: "/characters", label: "全寵圖鑑", icon: PawPrint },
  { href: "/evolution", label: "進化中心", icon: GitBranch },
  { href: "/ai", label: "AI 助手", icon: Sparkles },
  { href: "/egg-hunt", label: "尋蛋攻略", icon: Egg },
  { href: "/events", label: "活動", icon: CalendarDays },
  { href: "/guide", label: "分類攻略", icon: BookOpen },
  { href: "/codes", label: "代碼大全", icon: Database },
  { href: "/sources", label: "資料來源", icon: ExternalLink },
];

const brandCharacter = characterCatalog.find((item) => item.name === "Mametchi");

function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();
  const needle = query.trim().toLowerCase();
  const characterResults = needle
    ? characterCatalog.filter((item) => [item.nameZh, item.name, ...item.species].join(" ").toLowerCase().includes(needle)).slice(0, 5)
    : [];
  const guideResults = needle
    ? guideSections.filter((item) => [item.title, item.summary, item.category, ...item.points].join(" ").toLowerCase().includes(needle)).slice(0, 4)
    : [];

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const go = (href: string) => { onClose(); navigate(href); };
  return (
    <div className="fixed inset-0 z-[100] bg-[#193a34]/35 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="全站搜尋" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="mx-auto mt-[8vh] max-w-2xl overflow-hidden rounded-[2rem] border-[3px] border-[#23396b] bg-[#fff8e7] shadow-[0_10px_0_#23396b]">
        <div className="flex items-center gap-3 border-b-2 border-[#193a34]/15 p-4 sm:p-5">
          <Search className="h-5 w-5 text-[#ff6f61]" />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") onClose(); if (event.key === "Enter" && characterResults[0]) go(`/characters/${characterResults[0].id}`); }} placeholder="搜尋角色、攻略、物種…" className="min-w-0 flex-1 bg-transparent py-2 text-base font-bold outline-none placeholder:text-[#80918b]" />
          <button onClick={onClose} className="rounded-full border-2 border-[#23396b] bg-white p-2" aria-label="關閉搜尋"><X className="h-4 w-4" /></button>
        </div>
        {!needle ? (
          <div className="p-6 sm:p-8">
            <p className="mono-type text-[10px] font-black text-[#a54842]">QUICK SEARCH</p>
            <p className="display-type mt-2 text-2xl font-black">從一個地方找到整個攻略站。</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <button key={category.id} onClick={() => go(category.id === "codes" ? "/codes" : `/guide#${category.id}`)} className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black hover:bg-[#ffeb73]">{category.label}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-5">
            {characterResults.length > 0 && <div><p className="mono-type px-2 text-[10px] font-black text-[#a54842]">CHARACTERS</p><div className="mt-2 grid gap-2">{characterResults.map((item) => <button key={item.id} onClick={() => go(`/characters/${item.id}`)} className="flex items-center gap-3 rounded-2xl border-2 border-[#23396b] bg-white p-3 text-left hover:-translate-y-0.5"><img loading="lazy" src={item.artwork} alt="" className="h-12 w-12 rounded-xl bg-[#a8ddf5] object-contain" /><span><strong className="block text-sm">{item.nameZh}</strong><span className="mono-type text-[10px] text-[#ff5f64]">{item.name}</span></span></button>)}</div></div>}
            {guideResults.length > 0 && <div className="mt-5"><p className="mono-type px-2 text-[10px] font-black text-[#a54842]">GUIDES</p><div className="mt-2 grid gap-2">{guideResults.map((item) => <button key={item.id} onClick={() => go(`/guide?q=${encodeURIComponent(item.title)}`)} className="rounded-2xl border-2 border-[#23396b] bg-white p-4 text-left hover:bg-[#e3f8f0]"><span className="text-[10px] font-black text-[#ff5f64]">{item.category}</span><strong className="mt-1 block">{item.title}</strong><span className="mt-1 block line-clamp-2 text-xs leading-5 text-[#607070]">{item.summary}</span></button>)}</div></div>}
            {characterResults.length === 0 && guideResults.length === 0 && <div className="p-8 text-center"><Search className="mx-auto h-8 w-8 opacity-30" /><p className="display-type mt-3 text-xl font-black">沒有找到結果</p><p className="mt-1 text-sm text-[#607070]">試試角色英文名、中文名或攻略關鍵字。</p></div>}
          </div>
        )}
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-xl" aria-label="返回首頁">
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#23396b] bg-[#9fe1ee] shadow-[0_3px_0_#23396b] sm:h-14 sm:w-14">
        <img loading="lazy" src={brandCharacter?.artwork || assets.logo} alt="Mametchi" className="h-[90%] w-[90%] object-contain" />
      </span>
      <span className="leading-none">
        <span className="display-type block text-[1.05rem] font-black text-[#193a34] sm:text-xl">himian-Tamagotchi</span>
        <span className="mono-type mt-1 block text-[9px] font-bold uppercase text-[#a54842] sm:text-[10px]">Paradise Guide Lab</span>
      </span>
    </Link>
  );
}

export default function SiteShell({ children, mainClassName = "" }: { children: React.ReactNode; mainClassName?: string }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const attemptedVisit = useRef(false);
  const trpcUtils = trpc.useUtils();
  const visitTotal = trpc.visits.total.useQuery(undefined, { staleTime: 60_000, retry: 1 });
  const recordVisit = trpc.visits.record.useMutation({
    onSuccess: (total) => {
      sessionStorage.setItem("himian-visit-recorded", "1");
      trpcUtils.visits.total.setData(undefined, total);
    },
  });

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (attemptedVisit.current || sessionStorage.getItem("himian-visit-recorded") === "1") return;
    attemptedVisit.current = true;
    const storageKey = "himian-visit-session";
    let sessionId = sessionStorage.getItem(storageKey);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(storageKey, sessionId);
    }
    recordVisit.mutate({ sessionId, entryPath: window.location.pathname });
  }, []);

  const visitLabel = visitTotal.isError
    ? "統計暫時離線"
    : visitTotal.data === undefined
      ? "讀取中…"
      : `${new Intl.NumberFormat("zh-TW").format(visitTotal.data)} 次`;

  return (
    <div className="min-h-screen overflow-x-hidden text-[#23396b]">
      <a href="#main-content" className="skip-link">跳到主要內容</a>
      <SupportPopup />
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <header className="sticky top-0 z-50 border-b-2 border-[#23396b]/15 bg-[#fff8e7]/95 backdrop-blur-md">
        <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要導覽">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`focus-ring flex items-center gap-1.5 rounded-xl px-3 py-3 text-xs font-bold transition-colors xl:gap-2 xl:px-4 xl:text-sm ${active ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#193a34]" : "text-[#31534d] hover:bg-[#74d6b0]/25"}`}
                >
                  <Icon className="h-4 w-4" />
                  {href === "/guide" ? "打開攻略" : href === "/codes" ? "載入代碼" : label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => setSearchOpen(true)} className="focus-ring inline-flex items-center gap-2 rounded-xl border-2 border-[#23396b] bg-white px-3 py-2 text-xs font-black shadow-[0_3px_0_#23396b] hover:bg-[#ffeb73]" aria-label="開啟全站搜尋">
              <Search className="h-4 w-4" /> 搜尋 <kbd className="hidden rounded bg-[#f1ead8] px-1.5 py-0.5 font-mono text-[9px] xl:inline">⌘K</kbd>
            </button>
            <span className="pixel-tag hidden bg-[#ffd75e] px-3 py-2 text-xs font-bold xl:inline-block">非官方繁中站</span>
          </div>
          <button
            className="focus-ring rounded-xl border-2 border-[#193a34] bg-[#ffd75e] p-3 shadow-[0_3px_0_#193a34] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t-2 border-[#193a34]/15 bg-[#fff8e7] px-4 py-3 lg:hidden" aria-label="手機版導覽">
            <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
              <button onClick={() => { setOpen(false); setSearchOpen(true); }} className="focus-ring col-span-2 flex items-center justify-center gap-2 rounded-xl border-2 border-[#23396b] bg-[#ffeb73] px-3 py-3 text-sm font-black shadow-[0_3px_0_#23396b]">
                <Search className="h-4 w-4" /> 全站搜尋
              </button>
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`focus-ring flex items-center gap-2 rounded-xl border-2 border-[#193a34] px-3 py-3 text-sm font-bold ${(href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`)) ? "bg-[#ff6f61] text-white" : "bg-white"}`}
                >
                  <Icon className="h-4 w-4" />
                  {href === "/guide" ? "打開攻略" : href === "/codes" ? "載入代碼" : label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className={`${mainClassName} pb-0 md:pb-0`}>{children}</main>

      <nav className="mobile-bottom-nav md:hidden" aria-label="手機快速導覽">
        {[
          { href: "/", label: "首頁", icon: Microscope },
          { href: "/characters", label: "圖鑑", icon: PawPrint },
          { href: "/evolution", label: "進化", icon: GitBranch },
          { href: "/egg-hunt", label: "尋蛋", icon: Egg },
        ].map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`);
          return (
            <Link key={href} href={href} className={`mobile-bottom-nav__item ${active ? "is-active" : ""}`}>
              <Icon className="h-5 w-5" strokeWidth={2.5} />
              <span>{label}</span>
            </Link>
          );
        })}
        <button onClick={() => setSearchOpen(true)} className="mobile-bottom-nav__item" aria-label="搜尋網站">
          <Search className="h-5 w-5" strokeWidth={2.5} />
          <span>搜尋</span>
        </button>
      </nav>

      <footer className="relative mt-24 overflow-hidden border-t-[3px] border-[#23396b] bg-[#23396b] py-12 text-[#fff8e7]">
        <div className="container grid gap-10 md:grid-cols-[1.3fr_.7fr]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <img loading="lazy" src={brandCharacter?.artwork || assets.logo} alt="Mametchi" className="h-16 w-16 rounded-full bg-[#9fe1ee] p-1 object-contain" />
              <p className="display-type text-2xl font-black">himian-Tamagotchi</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#fff8e7]/75">
              玩家整理的 Tamagotchi Paradise 非官方繁體中文攻略站。Tamagotchi、Tamagotchi Paradise 與相關角色及商標歸 BANDAI／其權利人所有；本站原創視覺不代表官方產品畫面。
            </p>
          </div>
          <div className="md:text-right">
            <p className="mono-type text-xs font-bold text-[#74d6b0]">DATA CHECK</p>
            <p className="mt-2 font-bold">最後查核：{lastVerified}</p>
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border-2 border-[#fff8e7]/45 bg-[#fff8e7]/10 px-4 py-2 text-left" title="每個瀏覽器工作階段計一次，重新整理不會重複累加">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6f61] text-white"><Eye className="h-4 w-4" /></span>
              <span><span className="block text-[10px] font-bold text-[#74d6b0]">全站累積瀏覽</span><strong className="display-type text-lg">{visitLabel}</strong></span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
              <Link href="/characters" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">全寵圖鑑</Link>
              <Link href="/egg-hunt" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">尋蛋攻略</Link>
              <Link href="/events" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">活動月曆</Link>
              <Link href="/guide" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">分類攻略</Link>
              <Link href="/codes" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">代碼大全</Link>
              <Link href="/sources" className="rounded-lg border border-white/25 px-3 py-2 text-sm hover:bg-white/10">資料來源</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

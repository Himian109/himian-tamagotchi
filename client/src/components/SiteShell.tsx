/**
 * 口袋星球圖鑑：共用框架像一台隨身研究裝置，導覽清楚、對比穩定、品牌圖標保持醒目。
 * Static version: no Manus/tRPC dependency. Visit count is kept locally per browser.
 */
import { assets, lastVerified } from "@/data/guideData";
import { characterCatalog } from "@/data/characters";
import { BookOpen, CalendarDays, Database, Egg, ExternalLink, Eye, Menu, Microscope, PawPrint, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import SupportPopup from "./SupportPopup";

const navItems = [
  { href: "/", label: "星球首頁", icon: Microscope },
  { href: "/characters", label: "全寵圖鑑", icon: PawPrint },
  { href: "/egg-hunt", label: "尋蛋攻略", icon: Egg },
  { href: "/events", label: "活動", icon: CalendarDays },
  { href: "/guide", label: "分類攻略", icon: BookOpen },
  { href: "/codes", label: "代碼大全", icon: Database },
  { href: "/sources", label: "資料來源", icon: ExternalLink },
];

const brandCharacter = characterCatalog.find((item) => item.name === "Mametchi");

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
  const attemptedVisit = useRef(false);
  const [visitTotal, setVisitTotal] = useState<number | null>(null);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (attemptedVisit.current) return;
    attemptedVisit.current = true;
    try {
      const key = "himian-local-visits";
      const current = Number(localStorage.getItem(key) || "0") + 1;
      localStorage.setItem(key, String(current));
      setVisitTotal(current);
    } catch {
      setVisitTotal(null);
    }
  }, []);

  const visitLabel = visitTotal === null
    ? "本機統計"
    : `${new Intl.NumberFormat("zh-TW").format(visitTotal)} 次`;

  return (
    <div className="min-h-screen overflow-x-hidden text-[#23396b]">
      <a href="#main-content" className="skip-link">跳到主要內容</a>
      <SupportPopup />
      <header className="sticky top-0 z-50 border-b-2 border-[#23396b]/15 bg-[#fff8e7]/95 backdrop-blur-md">
        <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要導覽">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`);
              return (
                <Link key={href} href={href} className={`focus-ring flex items-center gap-1.5 rounded-xl px-3 py-3 text-xs font-bold transition-colors xl:gap-2 xl:px-4 xl:text-sm ${active ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#193a34]" : "text-[#31534d] hover:bg-[#74d6b0]/25"}`}>
                  <Icon className="h-4 w-4" />
                  {href === "/guide" ? "打開攻略" : href === "/codes" ? "載入代碼" : label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-2 xl:flex">
            <span className="pixel-tag bg-[#ffd75e] px-3 py-2 text-xs font-bold">非官方繁中站</span>
          </div>
          <button className="focus-ring rounded-xl border-2 border-[#193a34] bg-[#ffd75e] p-3 shadow-[0_3px_0_#193a34] lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "關閉選單" : "開啟選單"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t-2 border-[#193a34]/15 bg-[#fff8e7] px-4 py-3 lg:hidden" aria-label="手機版導覽">
            <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className={`focus-ring flex items-center gap-2 rounded-xl border-2 border-[#193a34] px-3 py-3 text-sm font-bold ${(href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`)) ? "bg-[#ff6f61] text-white" : "bg-white"}`}>
                  <Icon className="h-4 w-4" />
                  {href === "/guide" ? "打開攻略" : href === "/codes" ? "載入代碼" : label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className={mainClassName}>{children}</main>

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
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border-2 border-[#fff8e7]/45 bg-[#fff8e7]/10 px-4 py-2 text-left" title="每個瀏覽器工作階段計一次，統計儲存在本機">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6f61] text-white"><Eye className="h-4 w-4" /></span>
              <span><span className="block text-[10px] font-bold text-[#74d6b0]">本機累積瀏覽</span><strong className="display-type text-lg">{visitLabel}</strong></span>
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

/**
 * 口袋星球圖鑑來源頁：像研究紀錄卡，透明區分官方規則、社群整理與玩家實測。
 */
import CharacterParade from "@/components/CharacterParade";
import SiteShell from "@/components/SiteShell";
import { lastVerified, sources } from "@/data/guideData";
import { ArrowUpRight, BadgeCheck, CalendarCheck, CircleAlert, FileSearch } from "lucide-react";

export default function Sources() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#91dfbd] py-14 sm:py-20">
        <div className="absolute -right-20 -top-44 h-96 w-96 rounded-full border-[34px] border-[#ffeb73]/80" />
        <CharacterParade names={["Mametchi", "Mimitchi", "Kuchipatchi", "Meowtchi", "Irukatchi"]} className="absolute -right-8 -top-14 hidden h-80 w-[32rem] scale-75 lg:block" />
        <div className="container relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:pr-[27rem]">
          <div>
            <p className="pixel-tag mono-type inline-block bg-[#ff6f61] px-3 py-2 text-xs font-bold text-white">RESEARCH LOG / VERIFIED LINKS</p>
            <h1 className="display-type mt-3 text-5xl font-black sm:text-6xl">資料來源</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#365d54] lg:justify-self-end">「能找到」不等於「都確定」。本站以官方資料定義操作，再用社群資料補足進化條件、版本表與代碼，並把可能變動的內容明確標出。</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: BadgeCheck, title: "官方", text: "產品功能、操作路徑、語言、連線相容性與安全限制。", color: "bg-[#dff6ec]" },
              { icon: FileSearch, title: "社群整理", text: "成長時間、Care Mistake、角色進化表、等級解鎖與完整代碼。", color: "bg-[#ddebfa]" },
              { icon: CircleAlert, title: "玩家實測", text: "睡眠操作、機率、隱藏角色等尚未被官方逐項公開的細節。", color: "bg-[#fff2c7]" },
            ].map(({ icon: Icon, title, text, color }) => (
              <div key={title} className={`rounded-2xl border-2 border-[#193a34] p-5 shadow-[0_4px_0_#193a34] ${color}`}>
                <Icon className="h-6 w-6" />
                <h2 className="display-type mt-4 text-2xl font-black">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#566f68]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <aside>
              <div className="sticky top-32 rounded-2xl border-2 border-[#193a34] bg-[#ffd75e] p-6 shadow-[0_5px_0_#193a34]">
                <CalendarCheck className="h-7 w-7" />
                <p className="mono-type mt-5 text-xs font-bold">LAST VERIFIED</p>
                <p className="display-type mt-2 text-3xl font-black">{lastVerified}</p>
                <p className="mt-4 text-sm leading-7">資料可能因新機身、合作商品、活動與社群拆解而增加。網站未聲稱取代官方說明書。</p>
              </div>
            </aside>
            <div className="orbit-rail grid gap-4 pl-3">
              {sources.map((source, index) => (
                <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="cartridge-card group focus-ring relative z-10 flex items-start gap-4 border-2 border-[#193a34] bg-white p-5 pl-8 shadow-[0_4px_0_#193a34] hover:-translate-y-0.5">
                  <span className="mono-type flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff6f61] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`pixel-tag inline-block px-2.5 py-1 text-[10px] font-bold ${source.level === "官方" ? "bg-[#74d6b0]" : source.level === "社群整理" ? "bg-[#bde2f6]" : "bg-[#ffd75e]"}`}>{source.level}</span>
                    <span className="display-type mt-2 block text-lg font-black">{source.title}</span>
                    <span className="mt-1 block text-sm text-[#627a73]">{source.publisher}</span>
                  </span>
                  <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

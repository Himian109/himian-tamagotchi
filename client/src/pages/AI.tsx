import SiteShell from "@/components/SiteShell";
import { characterCatalog } from "@/data/characters";
import { guideSections } from "@/data/guideData";
import { Bot, Search, Sparkles, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

type Message = { role: "user" | "assistant"; content: string };

const starterPrompts = [
  "Mametchi 要怎麼進化？",
  "每天照顧最重要的是什麼？",
  "Forest 場地有哪些進化？",
  "Care Mistake 是怎麼計算的？",
];

function answer(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return "請輸入角色名稱、場地、進化或攻略關鍵字。";
  const chars = characterCatalog.filter((item) => [item.name, item.nameZh, ...item.species].join(" ").toLowerCase().includes(needle)).slice(0, 5);
  const guides = guideSections.filter((item) => [item.title, item.summary, item.category, ...item.points].join(" ").toLowerCase().includes(needle)).slice(0, 4);
  if (chars.length === 0 && guides.length === 0) return "我在本站資料庫沒有找到完全符合的內容。可以試試角色英文名、中文名、Forest、Water、進化、照顧或代碼等關鍵字。";
  const parts: string[] = [];
  if (chars[0]) parts.push(`找到角色「${chars[0].nameZh}（${chars[0].name}）」；你可以先打開它的角色頁查看成長階段與進化資料。`);
  if (guides[0]) parts.push(`相關攻略是「${guides[0].title}」：${guides[0].summary}`);
  return parts.join(" ");
}

export default function AI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const hits = useMemo(() => {
    const needle = input.trim().toLowerCase();
    if (!needle) return [];
    return [
      ...characterCatalog.filter((item) => [item.name, item.nameZh, ...item.species].join(" ").toLowerCase().includes(needle)).slice(0, 4).map((item) => ({ type: "角色", title: item.nameZh, summary: item.name, url: `/characters/${item.id}` })),
      ...guideSections.filter((item) => [item.title, item.summary, item.category, ...item.points].join(" ").toLowerCase().includes(needle)).slice(0, 3).map((item) => ({ type: "攻略", title: item.title, summary: item.summary, url: `/guide?q=${encodeURIComponent(item.title)}` })),
    ];
  }, [input]);

  const send = (value: string) => {
    const text = value.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", content: text }, { role: "assistant", content: answer(text) }]);
    setInput("");
  };

  return (
    <SiteShell>
      <div className="kawaii-pattern-bg min-h-screen pb-20">
        <div className="container pt-8 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
              <section>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffd75e] px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]"><Bot className="h-4 w-4" /> KNOWLEDGE ASSISTANT</span>
                <h1 className="display-type mt-5 text-4xl font-black leading-tight text-[#23396b] sm:text-5xl">問攻略，<br /><span className="text-[#ff5f64]">先問自己的資料庫。</span></h1>
                <p className="mt-5 text-sm font-bold leading-7 text-[#607070]">這個版本完全在瀏覽器內運作，不依賴 Manus、登入或後端 API。它會先搜尋本站角色與攻略資料，再整理成繁體中文提示。</p>
                <div className="mt-6 rounded-3xl border-2 border-[#23396b] bg-white p-5 shadow-[0_5px_0_#23396b]">
                  <p className="mono-type text-[10px] font-black text-[#a54842]">TRY THESE</p>
                  <div className="mt-4 grid gap-2">{starterPrompts.map((prompt) => <button key={prompt} onClick={() => send(prompt)} className="rounded-2xl border-2 border-[#23396b]/20 bg-[#fffdf5] p-3 text-left text-sm font-black hover:border-[#23396b] hover:bg-[#e3f8f0]">{prompt}</button>)}</div>
                </div>
              </section>

              <section className="rounded-3xl border-2 border-[#23396b] bg-white p-4 shadow-[0_5px_0_#23396b] sm:p-6">
                <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-[#ff5f64]" /><strong>站內知識助手</strong><span className="ml-auto rounded-full bg-[#91dfbd] px-3 py-1 text-[10px] font-black">OFFLINE READY</span></div>
                <div className="mt-4 min-h-[360px] space-y-3 rounded-2xl bg-[#fff8e7] p-4">
                  {messages.length === 0 && <div className="flex min-h-[320px] flex-col items-center justify-center text-center text-[#607070]"><Bot className="h-10 w-10 text-[#ff5f64]" /><p className="display-type mt-3 text-2xl font-black text-[#23396b]">想查哪一隻？</p><p className="mt-2 text-sm font-bold">試試上面的問題，或直接搜尋角色名稱。</p></div>}
                  {messages.map((message, index) => <div key={index} className={`max-w-[90%] rounded-2xl border-2 p-3 text-sm leading-6 ${message.role === "user" ? "ml-auto border-[#23396b] bg-[#a8ddf5] font-black" : "border-[#193a34]/15 bg-white font-bold"}`}>{message.content}</div>)}
                </div>
                <form className="mt-4 flex gap-2" onSubmit={(event) => { event.preventDefault(); send(input); }}>
                  <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="例如：Mametchi 怎麼進化？" className="min-w-0 flex-1 rounded-2xl border-2 border-[#23396b] bg-white px-4 py-3 text-sm font-bold outline-none focus:ring-4 focus:ring-[#91dfbd]/50" />
                  <button className="rounded-2xl border-2 border-[#23396b] bg-[#ff6f61] px-5 py-3 text-sm font-black text-white shadow-[0_3px_0_#23396b]">搜尋</button>
                </form>
                {hits.length > 0 && <div className="mt-4 grid gap-2">{hits.map((hit) => <Link key={`${hit.type}-${hit.url}`} href={hit.url} className="group flex items-center gap-3 rounded-2xl border-2 border-[#23396b]/20 bg-[#fffdf5] p-3 hover:border-[#23396b] hover:bg-[#e3f8f0]"><span className="rounded-full bg-[#ffd75e] px-2 py-1 text-[9px] font-black">{hit.type}</span><span className="min-w-0 flex-1"><strong className="block text-sm">{hit.title}</strong><span className="block truncate text-xs text-[#607070]">{hit.summary}</span></span><ArrowRight className="h-4 w-4 text-[#ff5f64] transition-transform group-hover:translate-x-1" /></Link>)}</div>}
                <p className="mt-4 flex items-center gap-2 text-xs font-bold text-[#607070]"><Search className="h-4 w-4" /> 資料不足時不亂猜，改用站內圖鑑與攻略頁核對。</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

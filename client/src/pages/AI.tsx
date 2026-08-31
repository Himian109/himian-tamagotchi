import SiteShell from "@/components/SiteShell";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";
import { Bot, ExternalLink, Sparkles, Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const starterPrompts = [
  "Mametchi 要怎麼進化？",
  "每天照顧最重要的是什麼？",
  "Forest 場地有哪些進化？",
  "Care Mistake 是怎麼計算的？",
];

export default function AI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hits, setHits] = useState<Array<{ type: "character" | "guide"; id: string; title: string; summary: string; url: string }>>([]);
  const chat = trpc.ai.chat.useMutation({
    onSuccess: (result) => {
      setMessages(prev => [...prev, { role: "assistant", content: result.content }]);
      setHits(result.hits || []);
    },
    onError: () => {
      setMessages(prev => [...prev, { role: "assistant", content: "AI 暫時無法連線，我仍然可以幫你用站內搜尋找資料。請改用角色名稱或攻略關鍵字。" }]);
      setHits([]);
    },
  });

  const send = (content: string) => {
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    chat.mutate({ messages: next.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })) });
  };

  return <SiteShell>
    <div className="kawaii-pattern-bg min-h-screen pb-20">
      <div className="container pt-8 sm:pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <section>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffd75e] px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]"><Bot className="h-4 w-4" /> KNOWLEDGE ASSISTANT</span>
              <h1 className="display-type mt-5 text-4xl font-black leading-tight text-[#23396b] sm:text-5xl">問攻略，<br /><span className="text-[#ff5f64]">先問自己的資料庫。</span></h1>
              <p className="mt-5 text-sm font-bold leading-7 text-[#607070]">AI 會先搜尋 himian-Tamagotchi 的角色與攻略資料，再用繁體中文整理答案。資料不足時會直接告訴你，不亂猜。</p>
              <div className="mt-6 rounded-3xl border-2 border-[#23396b] bg-white p-5 shadow-[0_5px_0_#23396b]">
                <p className="mono-type text-[10px] font-black text-[#a54842]">HOW IT WORKS</p>
                <div className="mt-4 grid gap-3">
                  {["先找站內角色／攻略", "再把相關資料交給 AI", "最後提供可回到網站的連結"].map((text, i) => <div key={text} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#91dfbd] text-xs font-black">{i + 1}</span><span className="text-sm font-black">{text}</span></div>)}
                </div>
              </div>
              <div className="mt-5 rounded-3xl border-2 border-[#23396b] bg-[#e3f8f0] p-5">
                <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-[#ff5f64]" /><strong>小提醒</strong></div>
                <p className="mt-2 text-xs font-bold leading-6 text-[#526c66]">如果你要查非常精確的數值或版本差異，仍建議回到角色頁與資料來源頁核對。</p>
              </div>
            </section>
            <section>
              <AIChatBox messages={messages} onSendMessage={send} isLoading={chat.isPending} height="680px" emptyStateMessage="想查哪一隻、哪個階段或哪個攻略？" placeholder="例如：Mametchi 怎麼進化？" suggestedPrompts={starterPrompts} />
              {hits.length > 0 && (
                <section className="mt-4 rounded-3xl border-2 border-[#23396b] bg-white p-4 shadow-[0_5px_0_#23396b]" aria-label="AI 參考的站內資料">
                  <div className="flex items-center justify-between gap-3">
                    <div><p className="mono-type text-[9px] font-black text-[#ff5f64]">DATABASE LINKS</p><h2 className="display-type text-xl font-black text-[#23396b]">相關站內資料</h2></div>
                    <Search className="h-5 w-5 text-[#ff5f64]" />
                  </div>
                  <div className="mt-3 grid gap-2">
                    {hits.slice(0, 6).map((hit) => (
                      <Link key={`${hit.type}-${hit.id}`} href={hit.url} className="group flex items-start gap-3 rounded-2xl border-2 border-[#23396b]/20 bg-[#fffdf5] p-3 hover:border-[#23396b] hover:bg-[#e3f8f0]">
                        <span className={`mt-0.5 rounded-full px-2 py-1 text-[9px] font-black ${hit.type === "character" ? "bg-[#ffd75e]" : "bg-[#a8ddf5]"}`}>{hit.type === "character" ? "角色" : "攻略"}</span>
                        <span className="min-w-0 flex-1"><strong className="block text-sm font-black text-[#23396b]">{hit.title}</strong><span className="mt-1 block line-clamp-2 text-xs font-bold leading-5 text-[#607070]">{hit.summary}</span></span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#ff5f64] transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/characters" className="rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black">打開角色圖鑑</Link>
                <Link href="/evolution" className="rounded-full border-2 border-[#23396b] bg-[#91dfbd] px-4 py-2 text-xs font-black">打開進化中心</Link>
                <Link href="/guide" className="rounded-full border-2 border-[#23396b] bg-[#ffeb73] px-4 py-2 text-xs font-black">打開分類攻略</Link>
                <Link href="/sources" className="inline-flex items-center gap-1 rounded-full border-2 border-[#23396b] bg-white px-4 py-2 text-xs font-black">查看來源 <ExternalLink className="h-3.5 w-3.5" /></Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </SiteShell>;
}

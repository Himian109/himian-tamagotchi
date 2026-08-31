import SiteShell from "@/components/SiteShell";
import { characterCatalog } from "@/data/characters";
import {
  activitiesForDate,
  activityCategories,
  activityDaysInMonth,
  activityScheduleLabel,
  daysInMonth,
  paradiseActivities,
  upcomingActivityOccurrences,
  type ActivityCategory,
  type ParadiseActivity,
} from "@/data/activities";
import { CalendarDays, Cake, ChevronLeft, ChevronRight, Gift, Music2, PartyPopper, Percent, ShieldAlert, Sparkles, Star } from "lucide-react";
import { useMemo, useState } from "react";

const categoryStyle: Record<ActivityCategory, { label: string; color: string; pale: string }> = {
  personal: { label: "個人日子", color: "#f8a7c8", pale: "#fff0f6" },
  festival: { label: "節慶紀念", color: "#ff6f61", pale: "#fff0ec" },
  discount: { label: "商店優惠", color: "#ffd75e", pale: "#fff9d8" },
  sky: { label: "天空奇觀", color: "#a8ddf5", pale: "#effaff" },
  emergency: { label: "星球事件", color: "#91dfbd", pale: "#effcf6" },
};

const categoryIcon: Record<ActivityCategory, typeof Star> = {
  personal: Cake,
  festival: Gift,
  discount: Percent,
  sky: Star,
  emergency: ShieldAlert,
};

function EventCard({ activity }: { activity: ParadiseActivity }) {
  const style = categoryStyle[activity.category];
  const Icon = categoryIcon[activity.category];
  return (
    <article className="relative overflow-hidden rounded-[1.7rem] border-[3px] border-[#23396b] bg-white p-5 shadow-[0_5px_0_#23396b]">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#23396b]" style={{ backgroundColor: style.color }}><Icon className="h-6 w-6" /></span>
        <div className="min-w-0">
          <span className="text-[10px] font-black text-[#6b807a]">{style.label}</span>
          <h3 className="display-type mt-1 text-xl font-black">{activity.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#5d746e]">{activity.summary}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t-2 border-[#23396b]/10 pt-4">
        <span className="rounded-full border-2 border-[#23396b] px-3 py-1 text-xs font-black" style={{ backgroundColor: style.pale }}>{activityScheduleLabel(activity)}</span>
        {activity.reward && <span className="rounded-full bg-[#ff6f61] px-3 py-1 text-xs font-black text-white">獲得：{activity.reward}</span>}
        {activity.requirement && <span className="rounded-full bg-[#23396b] px-3 py-1 text-xs font-black text-white">條件：{activity.requirement}</span>}
      </div>
    </article>
  );
}

export default function Events() {
  const today = useMemo(() => new Date(), []);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [category, setCategory] = useState<ActivityCategory | "all">("all");
  const upcoming = useMemo(() => upcomingActivityOccurrences(today, 6), [today]);
  const todayEvents = activitiesForDate(today);
  const monthDays = daysInMonth(year, month);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const visibleActivities = paradiseActivities.filter((activity) => category === "all" || activity.category === category);
  const monthActivities = visibleActivities.filter((activity) => activity.schedule.type !== "personal" && activityDaysInMonth(activity, year, month).length > 0);
  const personalActivities = visibleActivities.filter((activity) => activity.schedule.type === "personal");

  const changeMonth = (delta: number) => {
    const next = new Date(year, month - 1 + delta, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth() + 1);
  };

  const heroPals = ["Mametchi", "Mimitchi", "Kuchipatchi"].map((name) => characterCatalog.find((item) => item.name === name)).filter(Boolean);

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-[#23396b] bg-[#ffeb73]">
        <div className="container grid min-h-[520px] gap-10 py-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative z-10">
            <span className="pixel-tag inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black"><PartyPopper className="h-4 w-4 text-[#ff6f61]" /> PARADISE EVENT CALENDAR</span>
            <h1 className="display-type mt-6 text-[clamp(3.3rem,7vw,6rem)] font-black leading-[.92]">今天星球上，<br /><span className="text-[#ff5f64]">有什麼活動？</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#496760]">把生日、節慶、折扣、流星與星球防衛事件放進同一份月曆，打開機器前先看一眼，不錯過限定日子。</p>
            <div className="mt-7 rounded-[1.5rem] border-[3px] border-[#23396b] bg-white p-5 shadow-[0_6px_0_#23396b]">
              <p className="mono-type text-xs font-black text-[#a54842]">TODAY / {today.toLocaleDateString("zh-TW", { month: "long", day: "numeric" })}</p>
              <p className="display-type mt-2 text-2xl font-black">{todayEvents.length ? `今天有 ${todayEvents.length} 個活動` : "今天沒有固定活動"}</p>
              {todayEvents.length > 0 && <p className="mt-2 text-sm font-bold text-[#5d746e]">{todayEvents.map((item) => item.title).join("、")}</p>}
            </div>
          </div>
          <div className="relative min-h-[350px]">
            <div className="absolute inset-[3%] rotate-2 rounded-[3rem] border-[4px] border-[#23396b] bg-[#a8ddf5] shadow-[0_10px_0_#23396b]" />
            <CalendarDays className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 text-white/80" strokeWidth={1.5} />
            {heroPals.map((pal, index) => <img loading="lazy" key={pal!.id} src={pal!.artwork} alt="" className={`absolute h-32 w-32 object-contain sm:h-40 sm:w-40 ${["left-[2%] bottom-[3%] -rotate-6", "left-[38%] top-[1%] rotate-3", "right-[1%] bottom-[5%] rotate-6"][index]}`} />)}
          </div>
        </div>
      </section>

      <section className="orbit-section py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="mono-type text-xs font-black text-[#a54842]">NEXT SIGNALS</p>
              <h2 className="display-type mt-2 text-4xl font-black">接下來的活動</h2>
              <div className="mt-6 space-y-3">
                {upcoming.map(({ activity, date }, index) => {
                  const Icon = categoryIcon[activity.category];
                  const style = categoryStyle[activity.category];
                  return <div key={`${activity.id}-${date.toISOString()}`} className="flex items-center gap-4 rounded-2xl border-2 border-[#23396b] bg-white p-4 shadow-[0_4px_0_#23396b]"><span className="display-type w-16 shrink-0 text-center text-xl font-black">{index === 0 && date.toDateString() === today.toDateString() ? "今天" : `${date.getMonth() + 1}/${date.getDate()}`}</span><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#23396b]" style={{ backgroundColor: style.color }}><Icon className="h-5 w-5" /></span><strong className="min-w-0 text-sm">{activity.title}</strong></div>;
                })}
              </div>
            </div>
            <div className="rounded-[2.2rem] border-[3px] border-[#23396b] bg-white p-5 shadow-[0_8px_0_#23396b] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <button onClick={() => changeMonth(-1)} className="focus-ring rounded-xl border-2 border-[#23396b] bg-[#fff8e7] p-3 shadow-[0_3px_0_#23396b]" aria-label="上一個月"><ChevronLeft className="h-5 w-5" /></button>
                <div className="text-center"><p className="mono-type text-xs font-bold text-[#a54842]">MONTHLY RADAR</p><h2 className="display-type mt-1 text-3xl font-black">{year} 年 {month} 月</h2></div>
                <button onClick={() => changeMonth(1)} className="focus-ring rounded-xl border-2 border-[#23396b] bg-[#fff8e7] p-3 shadow-[0_3px_0_#23396b]" aria-label="下一個月"><ChevronRight className="h-5 w-5" /></button>
              </div>
              <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[10px] font-black text-[#6c817b] sm:gap-2 sm:text-xs">{["日", "一", "二", "三", "四", "五", "六"].map((day) => <span key={day}>{day}</span>)}</div>
              <div className="mt-2 grid grid-cols-7 gap-1 sm:gap-2">
                {Array.from({ length: firstDay }).map((_, index) => <span key={`empty-${index}`} />)}
                {Array.from({ length: monthDays }, (_, index) => index + 1).map((day) => {
                  const date = new Date(year, month - 1, day);
                  const events = activitiesForDate(date, category);
                  const isToday = date.toDateString() === today.toDateString();
                  return <div key={day} className={`min-h-16 rounded-xl border-2 p-1.5 sm:min-h-20 sm:p-2 ${isToday ? "border-[#ff6f61] bg-[#fff0ec] shadow-[0_3px_0_#ff6f61]" : "border-[#23396b]/20 bg-[#fffaf0]"}`}><span className="text-xs font-black sm:text-sm">{day}</span><div className="mt-1 flex flex-wrap gap-1">{events.slice(0, 3).map((event) => <span key={event.id} className="h-2 w-2 rounded-full border border-[#23396b]" style={{ backgroundColor: categoryStyle[event.category].color }} title={event.title} />)}{events.length > 3 && <span className="text-[8px] font-black">+{events.length - 3}</span>}</div></div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-[#23396b] bg-[#f0dcff] py-16 sm:py-20">
        <div className="container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="mono-type text-xs font-black text-[#a54842]">EVENT INDEX</p><h2 className="display-type mt-2 text-4xl font-black">{month} 月活動圖鑑</h2><p className="mt-3 text-sm text-[#5d746e]">每月固定活動會依實際天數顯示；沒有 30 日的月份不會列出 30 日活動。</p></div>
            <div className="flex flex-wrap gap-2">{activityCategories.map((item) => <button key={item.id} onClick={() => setCategory(item.id)} className={`focus-ring rounded-full border-2 border-[#23396b] px-4 py-2 text-sm font-black ${category === item.id ? "bg-[#ff6f61] text-white shadow-[0_3px_0_#23396b]" : "bg-white"}`}>{item.label}</button>)}</div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">{personalActivities.map((activity) => <EventCard key={activity.id} activity={activity} />)}{monthActivities.map((activity) => <EventCard key={activity.id} activity={activity} />)}</div>
          {!personalActivities.length && !monthActivities.length && <div className="mt-10 rounded-[2rem] border-[3px] border-dashed border-[#23396b] bg-white p-12 text-center"><Sparkles className="mx-auto h-10 w-10 text-[#ff6f61]" /><h3 className="display-type mt-3 text-2xl font-black">這個月份沒有此類活動</h3><p className="mt-2 text-sm text-[#5d746e]">請切換月份或選擇其他活動類型。</p></div>}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-8 rounded-[2.5rem] border-[3px] border-[#23396b] bg-[#91dfbd] p-7 shadow-[0_8px_0_#23396b] lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div className="relative min-h-64"><Music2 className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-white/60" />{heroPals.slice(0, 2).map((pal, index) => <img loading="lazy" key={pal!.id} src={pal!.artwork} alt="" className={`absolute h-36 w-36 object-contain ${index === 0 ? "bottom-0 left-[8%] -rotate-6" : "right-[8%] top-0 rotate-6"}`} />)}</div>
          <div><span className="pixel-tag inline-block bg-white px-4 py-2 text-xs font-black">BIRTHDAY EVENT</span><h2 className="display-type mt-4 text-4xl font-black">生日當天，寵物會唱歌！</h2><p className="mt-4 max-w-2xl leading-8 text-[#46655f]">這是依用戶生日觸發的個人活動，不會固定出現在每月日期表。設定正確生日後，在生日當天回來聽寵物為你唱歌。</p></div>
        </div>
      </section>
    </SiteShell>
  );
}

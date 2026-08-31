export type ActivityCategory = "personal" | "festival" | "discount" | "sky" | "emergency";
export type ActivitySchedule =
  | { type: "personal" }
  | { type: "annual"; month: number; day: number }
  | { type: "annual-range"; month: number; startDay: number; endDay: number }
  | { type: "monthly"; days: number[] };

export interface ParadiseActivity {
  id: string;
  title: string;
  summary: string;
  category: ActivityCategory;
  schedule: ActivitySchedule;
  reward?: string;
  requirement?: string;
}

export const activityCategories: Array<{ id: ActivityCategory | "all"; label: string }> = [
  { id: "all", label: "全部活動" },
  { id: "festival", label: "節慶紀念" },
  { id: "discount", label: "商店優惠" },
  { id: "sky", label: "天空奇觀" },
  { id: "emergency", label: "星球事件" },
  { id: "personal", label: "個人日子" },
];

export const paradiseActivities: ParadiseActivity[] = [
  {
    id: "birthday-song",
    title: "用戶生日",
    summary: "寵物會為玩家唱歌，一起慶祝生日。",
    category: "personal",
    schedule: { type: "personal" },
    reward: "寵物生日歌",
  },
  {
    id: "new-year-gift",
    title: "元旦新年",
    summary: "新年第一天登入，可以獲得元旦壓歲錢。",
    category: "festival",
    schedule: { type: "annual", month: 1, day: 1 },
    reward: "$1,000",
  },
  {
    id: "tamagotchi-day",
    title: "Tamagotchi 日",
    summary: "與寵物一起慶祝 Tamagotchi 的特別紀念日。",
    category: "festival",
    schedule: { type: "annual", month: 11, day: 23 },
  },
  {
    id: "santa-space-flight",
    title: "聖誕老人太空飛行",
    summary: "抬頭看看天空，可以看到聖誕老人在太空飛行。",
    category: "festival",
    schedule: { type: "annual-range", month: 12, startDay: 1, endDay: 23 },
  },
  {
    id: "santa-delivery",
    title: "聖誕老人開始送禮",
    summary: "聖誕老公公開始為星球上的寵物送禮物。",
    category: "festival",
    schedule: { type: "annual", month: 12, day: 24 },
  },
  {
    id: "christmas-present",
    title: "拆開聖誕禮物",
    summary: "可以拆開聖誕老公公送來的禮物。",
    category: "festival",
    schedule: { type: "annual", month: 12, day: 25 },
    reward: "聖誕禮物",
  },
  {
    id: "food-sale",
    title: "食物與小吃五折",
    summary: "商店內的食物和小吃享有五折優惠。",
    category: "discount",
    schedule: { type: "monthly", days: [5, 15, 25] },
    reward: "五折優惠",
  },
  {
    id: "facility-sale",
    title: "娛樂設施與裝飾品五折",
    summary: "娛樂設施和裝飾品享有五折優惠。",
    category: "discount",
    schedule: { type: "monthly", days: [10, 20, 30] },
    reward: "五折優惠",
  },
  {
    id: "shooting-star",
    title: "流星許願",
    summary: "天空中會出現流星，可以向流星許願。",
    category: "sky",
    schedule: { type: "monthly", days: [7, 14, 21, 28] },
  },
  {
    id: "meteor-defense",
    title: "隕石防衛戰",
    summary: "隕石會撞向行星，準備好保護自己的星球。",
    category: "emergency",
    schedule: { type: "monthly", days: [9, 19, 29] },
  },
  {
    id: "chicken-rush",
    title: "雞群突入行星",
    summary: "雞群衝進行星時，需要把自己的電子寵物藏起來。",
    category: "emergency",
    schedule: { type: "monthly", days: [13] },
    requirement: "星球等級 6 以上",
  },
];

export interface ActivityOccurrence {
  activity: ParadiseActivity;
  date: Date;
}

export function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function activityDaysInMonth(activity: ParadiseActivity, year: number, month: number) {
  const maxDay = daysInMonth(year, month);
  if (activity.schedule.type === "personal") return [];
  if (activity.schedule.type === "annual") return activity.schedule.month === month ? [activity.schedule.day] : [];
  if (activity.schedule.type === "annual-range") {
    if (activity.schedule.month !== month) return [];
    const { startDay, endDay } = activity.schedule;
    return Array.from({ length: endDay - startDay + 1 }, (_, index) => startDay + index).filter((day) => day <= maxDay);
  }
  return activity.schedule.days.filter((day) => day <= maxDay);
}

export function activitiesForDate(date: Date, category: ActivityCategory | "all" = "all") {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return paradiseActivities.filter((activity) => {
    if (category !== "all" && activity.category !== category) return false;
    return activityDaysInMonth(activity, year, month).includes(day);
  });
}

export function upcomingActivityOccurrences(reference: Date, limit = 6) {
  const results: ActivityOccurrence[] = [];
  for (let offset = 0; offset <= 120 && results.length < limit; offset += 1) {
    const date = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate() + offset);
    for (const activity of activitiesForDate(date)) {
      results.push({ activity, date });
      if (results.length >= limit) break;
    }
  }
  return results;
}

export function activityScheduleLabel(activity: ParadiseActivity) {
  const schedule = activity.schedule;
  if (schedule.type === "personal") return "用戶設定的生日";
  if (schedule.type === "annual") return `${schedule.month} 月 ${schedule.day} 日`;
  if (schedule.type === "annual-range") return `${schedule.month} 月 ${schedule.startDay}～${schedule.endDay} 日`;
  return `每月 ${schedule.days.join("、")} 日`;
}

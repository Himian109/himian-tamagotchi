import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSiteVisitCount, recordSiteVisit } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { buildKnowledgeContext, searchKnowledge } from "./aiKnowledge";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  ai: router({
    search: publicProcedure
      .input(z.object({ query: z.string().min(1).max(120) }))
      .query(({ input }) => ({ hits: searchKnowledge(input.query) })),
    chat: publicProcedure
      .input(z.object({
        messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(4000) })).min(1).max(12),
      }))
      .mutation(async ({ input }) => {
        const latestUser = [...input.messages].reverse().find(m => m.role === "user")?.content || "";
        const context = buildKnowledgeContext(latestUser);
        const system = `你是 himian-Tamagotchi 的繁體中文攻略助手。你只能把下面的「站內資料」當作事實依據；若資料不足，明確說不知道，不要自行捏造。回答要簡潔、實用，優先用條列。若有相關站內資料，最後附上「站內資料」小節，列出可點擊的站內路徑。

站內資料：
${context || "目前沒有找到直接匹配的站內資料。"}`;
        try {
          const result = await invokeLLM({
            messages: [
              { role: "system", content: system },
              ...input.messages,
            ],
            maxTokens: 700,
          });
          const content = result.choices?.[0]?.message?.content;
          return { content: typeof content === "string" ? content : "目前無法產生回答，請改用角色名稱或攻略關鍵字搜尋。", hits: searchKnowledge(latestUser, 6) };
        } catch (error) {
          console.warn("AI chat unavailable; using local knowledge fallback", error);
          const hits = searchKnowledge(latestUser, 6);
          const fallback = hits.length
            ? `我先從站內資料找到這些相關內容：\n\n${hits.map(h => `- **${h.title}**：${h.summary}\n  站內：${h.url}`).join("\n")}`
            : "目前找不到足夠的站內資料。試試角色名稱、英文名、場地、進化或 Care Mistake 等關鍵字。";
          return { content: fallback, hits };
        }
      }),
  }),
  visits: router({
    total: publicProcedure.query(() => getSiteVisitCount()),
    record: publicProcedure
      .input(z.object({
        sessionId: z.string().uuid(),
        entryPath: z.string().min(1).max(255).default("/"),
      }))
      .mutation(({ input }) => recordSiteVisit(input.sessionId, input.entryPath)),
  }),
});

export type AppRouter = typeof appRouter;

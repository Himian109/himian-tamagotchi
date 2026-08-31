import { characterCatalog } from "../client/src/data/characters";
import { guideSections } from "../client/src/data/guideData";

export type KnowledgeHit = {
  type: "character" | "guide";
  id: string;
  title: string;
  summary: string;
  url: string;
};

const normalize = (value: string) => value.toLowerCase().normalize("NFKC").replace(/\s+/g, " ").trim();

export function searchKnowledge(query: string, limit = 8): KnowledgeHit[] {
  const needle = normalize(query);
  if (!needle) return [];
  const terms = needle.split(/\s+/).filter(Boolean);
  const score = (text: string) => terms.reduce((total, term) => total + (text.includes(term) ? (text.startsWith(term) ? 5 : 2) : 0), 0);
  const chars = characterCatalog.map((c) => {
    const text = normalize([c.name, c.nameZh, c.stage, ...c.fields, ...c.species, ...c.versions, ...c.variants.map(v => `${v.evolvesFrom} ${v.conditionZh} ${v.field} ${v.version}`)].join(" "));
    return { hit: { type: "character" as const, id: c.id, title: `${c.nameZh}（${c.name}）`, summary: `${c.stage}｜${c.fields.join("／")}｜${c.variants[0]?.conditionZh || "角色資料"}`, url: `/characters/${c.id}` }, score: score(text) };
  });
  const guides = guideSections.map((g) => {
    const text = normalize([g.category, g.title, g.summary, ...g.points, g.tip || "", g.caution || ""].join(" "));
    return { hit: { type: "guide" as const, id: g.id, title: g.title, summary: g.summary, url: `/guide#${g.id}` }, score: score(text) };
  });
  return [...chars, ...guides].filter(x => x.score > 0).sort((a,b) => b.score - a.score).slice(0, limit).map(x => x.hit);
}

export function buildKnowledgeContext(query: string): string {
  const hits = searchKnowledge(query, 6);
  return hits.map((h, i) => `${i + 1}. [${h.type}] ${h.title}\n${h.summary}\n站內連結：${h.url}`).join("\n\n");
}

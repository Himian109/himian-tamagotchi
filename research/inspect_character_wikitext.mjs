import { readFile } from "node:fs/promises";

const raw = JSON.parse(await readFile("/home/ubuntu/himian-Tamagotchi/research/character-list-api.json", "utf8"));
const wiki = raw.parse.wikitext["*"];
const headings = wiki.split("\n").filter((line) => /^==+[^=].*==+$/.test(line.trim()));
console.log(headings.join("\n"));

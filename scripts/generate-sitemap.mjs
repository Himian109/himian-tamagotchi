import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const characterSourcePath = path.join(root, 'client/src/data/characters.ts');
const charactersPagePath = path.join(root, 'client/src/pages/Characters.tsx');
const source = fs.readFileSync(characterSourcePath, 'utf8');
const ids = [...source.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]);

// GitHub Pages serves the SPA from a repository sub-path. Character cards
// previously changed history manually and opened a dialog; that became fragile
// after the Manus runtime was removed. Use the real CharacterDetail route so
// care conditions and evolution data are always rendered as a full page.
let charactersPage = fs.readFileSync(charactersPagePath, 'utf8');
const oldNavigation = 'onOpen={() => { window.history.pushState({}, "", `/characters/${character.id}`); setSelected(character); }}';
const newNavigation = 'onOpen={() => { window.location.href = `${import.meta.env.BASE_URL}characters/${encodeURIComponent(character.id)}`; }}';
if (charactersPage.includes(oldNavigation)) {
  charactersPage = charactersPage.replace(oldNavigation, newNavigation);
  fs.writeFileSync(charactersPagePath, charactersPage);
  console.log('Patched character cards to use CharacterDetail route');
} else if (!charactersPage.includes(newNavigation)) {
  console.log('Character navigation pattern not found; leaving source unchanged');
}

const base = (process.env.VITE_SITE_URL || 'https://himian-tama-y54hw8xf.manus.space').replace(/\/$/, '');
const urls = [
  '/', '/characters', '/evolution', '/egg-hunt', '/events', '/guide', '/codes', '/sources',
  ...ids.map((id) => `/characters/${encodeURIComponent(id)}`),
];
const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => {
  const section = u.split('/')[1] || 'home';
  const priority = u === '/' ? '1.0' : section === 'characters' ? '0.8' : '0.7';
  const changefreq = u === '/' ? 'daily' : section === 'characters' ? 'weekly' : 'monthly';
  return `  <url><loc>${escapeXml(base + u)}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'client/public/sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);

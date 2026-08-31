import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'client/src/data/characters.ts'), 'utf8');
const ids = [...source.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]);
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

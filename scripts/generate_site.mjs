#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

// Simple utility to slugify filenames (keep kebab-case)
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9\-]+/g, '-').replace(/^-+|-+$/g, '');

// Extract title, author, excerpt from Markdown
function parseMeta(markdown) {
  const lines = markdown.split(/\r?\n/);
  let title = '';
  let author = '';
  let excerpt = '';
  let i = 0;
  for (; i < lines.length; i++) {
    const l = lines[i].trim();
    if (l.startsWith('#')) { title = l.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim(); i++; break; }
  }
  // author line (Author: ...)
  for (let j = i; j < Math.min(lines.length, i + 6); j++) {
    const l = lines[j].trim();
    const m = l.match(/^Author:\s*(.+)$/i);
    if (m) { author = m[1].trim(); i = j + 1; break; }
  }
  // first non-empty paragraph for excerpt
  let para = [];
  for (let j = i; j < lines.length; j++) {
    const l = lines[j];
    if (l.trim() === '') {
      if (para.length) break; else continue;
    }
    if (l.startsWith('#')) break; // stop at next header
    para.push(l);
  }
  excerpt = para.join(' ').trim();
  if (excerpt.length > 320) excerpt = excerpt.slice(0, 317) + '...';
  return { title, author, excerpt };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function baseTemplate({ title, content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} — IDEAS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}</style>
  <meta name="color-scheme" content="dark light">
  <link rel="icon" href="/assets/favicon.png" />
  <meta property="og:title" content="${title} — IDEAS" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/" />
  <meta property="og:image" content="/assets/logo.svg" />
  <meta name="description" content="IDEAS — a lightweight, versioned notebook of research notes and essays." />
  <script>
    tailwind.config = { theme: { extend: { colors: { primary: { DEFAULT:'#4f46e5'} } } } }
  </script>
  <style>.prose h1,h2,h3{scroll-margin-top:6rem}</style>
  </head>
<body class="bg-slate-950 text-slate-100">
  <header class="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 font-extrabold tracking-wide"><img src="/assets/logo.svg" class="w-6 h-6" alt="logo" /> IDEAS</a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="/" class="hover:text-primary" data-i18n="nav_home">Home</a>
        <a href="/ideas/" class="hover:text-primary" data-i18n="nav_ideas">Ideas</a>
        <a href="/publications/" class="hover:text-primary" data-i18n="nav_publications">Publications</a>
        <a href="https://github.com/lachlanchen/IDEAS" class="hover:text-primary" data-i18n="nav_github">GitHub</a>
      </nav>
      <div id="langSwitcher" class="ml-4"></div>
    </div>
  </header>
  ${content}
  <footer class="border-t border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-400 flex justify-between">
      <span>© ${new Date().getFullYear()} IDEAS</span>
      <a class="hover:text-primary" href="https://github.com/lachlanchen/IDEAS">GitHub</a>
    </div>
  </footer>
  <script src="/assets/i18n.js"></script>
</body>
</html>`;
}

function ideaDetailTemplate({ title, author, html }) {
  const content = `
  <section class="bg-gradient-to-b from-slate-900 to-slate-950">
    <div class="max-w-3xl mx-auto px-4 py-14">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-2">${title}</h1>
      ${author ? `<p class="text-slate-400 mb-8"><span data-i18n="by">by</span> ${author}</p>` : ''}
      <article class="prose prose-invert prose-slate max-w-none">${html}</article>
    </div>
  </section>`;
  return baseTemplate({ title, content });
}

async function renderMarkdown(md) {
  // Use marked if available, otherwise a minimal fallback
  try {
    const { marked } = await import('marked');
    return marked.parse(md);
  } catch {
    // minimal fallback: paragraphs and links
    return md
      .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
      .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
      .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\* (.*)/g, '<li>$1</li>')
      .replace(/\n\n/g, '<p></p>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  }
}

function categoryForSlug(slug) {
  const s = slug.toLowerCase();
  // Metasurfaces
  if (s.includes('metasurface') || s.includes('s4') || s.includes('metalens')) return 'Metasurfaces';
  // Theory / Physics
  if (s.includes('kramers') || s.includes('quantum-carpets') || s.includes('fractal')) return 'Theory';
  // DORAEMON
  if (s.startsWith('doraemon-')) return 'DORAEMON';
  // AI for Science (Optimization, Imaging, Chemistry)
  if (s.includes('mpempba') || s.includes('quantum-chemistry') || s.includes('molecular') || s.includes('imaging-system')) return 'AI for Science';
  // Product & Tools
  if (s.includes('file-management') || s.includes('file-management')) return 'Product & Tools';
  return 'General';
}

function languageForSlug(slug) {
  if (slug.endsWith('-zh') || slug.includes('zh')) return 'zh';
  if (slug.endsWith('-ja') || slug.includes('-ja')) return 'ja';
  return 'en';
}

async function main() {
  const root = process.cwd();
  const ideasDir = path.join(root, 'ideas');
  const pubsDir = path.join(root, 'publications');
  const outIdeasDir = path.join(root, 'docs', 'ideas');
  const outAssetsDir = path.join(root, 'docs', 'assets');
  await ensureDir(outIdeasDir);
  await ensureDir(outAssetsDir);

  const files = (await fs.readdir(ideasDir)).filter(f => f.endsWith('.md'));
  const ideas = [];
  for (const file of files) {
    const mdPath = path.join(ideasDir, file);
    const raw = await fs.readFile(mdPath, 'utf8');
    const { title, author, excerpt } = parseMeta(raw);
    const slug = file.replace(/\.md$/, '');
    const html = await renderMarkdown(raw);
    const page = ideaDetailTemplate({ title: title || slug, author, html });
    await fs.writeFile(path.join(outIdeasDir, `${slug}.html`), page, 'utf8');
    const category = categoryForSlug(slug);
    const lang = languageForSlug(slug);
    ideas.push({ slug, title: title || slug, author, excerpt, category, lang });
  }
  await fs.writeFile(path.join(outAssetsDir, 'ideas.json'), JSON.stringify(ideas, null, 2));
  // categories manifest
  const catMap = ideas.reduce((acc, x) => { acc[x.category] = (acc[x.category]||0)+1; return acc; }, {});
  await fs.writeFile(path.join(outAssetsDir, 'categories.json'), JSON.stringify(catMap, null, 2));

  // Publications manifest
  const pubItems = [];
  const pubCats = await fs.readdir(pubsDir);
  for (const cat of pubCats) {
    const catDir = path.join(pubsDir, cat);
    const stat = await fs.stat(catDir).catch(() => null);
    if (!stat || !stat.isDirectory()) continue;
    const entries = await fs.readdir(catDir);
    for (const f of entries) {
      if (f.endsWith('.pdf')) {
        const category = categoryForSlug(cat);
        pubItems.push({
          slug: cat,
          title: cat.replace(/[-_]/g, ' '),
          href: `/publications/${cat}/${f}`,
          category
        });
      }
    }
  }
  await fs.writeFile(path.join(outAssetsDir, 'publications.json'), JSON.stringify(pubItems, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });

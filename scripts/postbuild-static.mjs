import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const rootIndexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(rootIndexPath)) {
  console.warn('[postbuild-static] dist/index.html não encontrado; nada a ajustar.');
  process.exit(0);
}

const rootIndex = fs.readFileSync(rootIndexPath, 'utf8');
const productionAssetTags = [
  ...rootIndex.matchAll(/<script\s+type="module"[^>]+src="\/assets\/[^">]+\.js"[^>]*><\/script>/g),
  ...rootIndex.matchAll(/<link\s+rel="stylesheet"[^>]+href="\/assets\/[^">]+\.css"[^>]*>/g),
].map((match) => match[0]);

const staticStyleTag = '<link rel="stylesheet" href="/static-styles.css">';
const sourceScriptPattern = /\s*<script\s+type="module"\s+src="\/src\/main\.tsx"><\/script>/g;
const sourcePreloadPattern = /\s*<link\s+rel="preload"\s+href="\/src\/(?:main\.tsx|index\.css)"[^>]*>/g;

function listHtmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(fullPath);
    return entry.isFile() && entry.name === 'index.html' ? [fullPath] : [];
  });
}

for (const filePath of listHtmlFiles(distDir)) {
  if (filePath === rootIndexPath) continue;

  let html = fs.readFileSync(filePath, 'utf8');
  const hasStaticMarkup = /class="[^"]*static-|<header\b|<main\b|<article\b/.test(html.replace(/<div id="root"><\/div>/g, ''));

  html = html.replace(sourcePreloadPattern, '');

  if (hasStaticMarkup) {
    if (!html.includes('/static-styles.css')) {
      html = html.replace('</head>', `    ${staticStyleTag}\n  </head>`);
    }
    html = html.replace(/\s*<div id="root"><\/div>/g, '');
    html = html.replace(sourceScriptPattern, '');
  } else if (productionAssetTags.length > 0) {
    html = html.replace(sourceScriptPattern, `\n    ${productionAssetTags.join('\n    ')}`);
  }

  fs.writeFileSync(filePath, html);
}

console.log('[postbuild-static] Páginas estáticas ajustadas para produção.');
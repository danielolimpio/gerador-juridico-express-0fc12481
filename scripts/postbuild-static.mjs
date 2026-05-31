import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const rootIndexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(rootIndexPath)) {
  console.warn('[postbuild-static] dist/index.html não encontrado; nada a ajustar.');
  process.exit(0);
}

const rootIndex = fs.readFileSync(rootIndexPath, 'utf8');
const productionScriptTags = [
  ...rootIndex.matchAll(/<script\s+type="module"[^>]+src="\/assets\/[^">]+\.js"[^>]*><\/script>/g),
].map((match) => match[0]);
const productionStyleTags = [
  ...rootIndex.matchAll(/<link\s+rel="stylesheet"[^>]+href="\/assets\/[^">]+\.css"[^>]*>/g),
].map((match) => match[0]);

const sourceScriptPattern = /\s*<script\s+type="module"\s+src="\/src\/main\.tsx"><\/script>/g;
const sourcePreloadPattern = /\s*<link\s+rel="preload"\s+href="\/src\/(?:main\.tsx|index\.css)"[^>]*>/g;
const staticStylesPattern = /\s*<link\s+rel="stylesheet"\s+href="\/static-styles\.css"[^>]*>/g;

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

  html = html.replace(sourcePreloadPattern, '');
  html = html.replace(staticStylesPattern, '');

  for (const styleTag of productionStyleTags) {
    if (!html.includes(styleTag)) {
      html = html.replace('</head>', `    ${styleTag}\n  </head>`);
    }
  }

  html = html.replace(
    /<body[\s\S]*?<\/body>/,
    `<body>\n    <div id="root"></div>\n    ${productionScriptTags.join('\n    ')}\n  </body>`
  );
  html = html.replace(sourceScriptPattern, '');

  fs.writeFileSync(filePath, html);
}

console.log('[postbuild-static] Páginas estáticas ajustadas para renderizar o app React em produção.');
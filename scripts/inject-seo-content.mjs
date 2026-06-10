/**
 * Injeta conteúdo HTML textual dentro do <div id="root"> de cada página estática.
 * 
 * POR QUE ISSO É SEGURO:
 * - O React (createRoot().render()) substitui automaticamente todo o conteúdo
 *   de #root quando monta a aplicação. Portanto, este conteúdo só é visível
 *   para crawlers (Googlebot, Bingbot) e para o usuário durante o
 *   carregamento inicial (~100-300ms), depois é substituído pelo app React.
 * - Não modifica nenhum componente, CSS, ou comportamento do app.
 * - Resolve o problema de SPA não indexável: o Google agora vê conteúdo
 *   textual rico (H1, parágrafos, links) ao invés de <div id="root"></div>.
 * 
 * Executa em build-time (prebuild + postbuild) e processa public/ e dist/.
 */

import fs from 'node:fs';
import path from 'node:path';

const TARGETS = ['public', 'dist'].filter(d => fs.existsSync(d));

function listHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listHtmlFiles(full));
    else if (entry.isFile() && entry.name === 'index.html') out.push(full);
  }
  return out;
}

function extractMeta(html, name) {
  // tenta name="..." e property="..."
  const re1 = new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, 'i');
  const re2 = new RegExp(`<meta\\s+property="${name}"\\s+content="([^"]*)"`, 'i');
  const m = html.match(re1) || html.match(re2);
  return m ? m[1].trim() : '';
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  return m ? m[1].trim() : '';
}

function deriveH1(title) {
  // remove sufixos comuns como " | Glossário Jurídico", " - Modelo de Contrato"
  return title
    .replace(/\s*[|–-]\s*(Glossário Jurídico|Modelo de Contrato|Modelos de Contratos|Glossário).*$/i, '')
    .replace(/\s*\|\s*.*$/, '')
    .trim() || title;
}

function buildSeoBlock({ title, description, keywords, canonical }) {
  const h1 = escapeHtml(deriveH1(title) || 'Modelo de Contrato');
  const desc = escapeHtml(description || '');
  const kwList = (keywords || '')
    .split(',')
    .map(k => k.trim())
    .filter(Boolean)
    .slice(0, 20);

  const isHome = canonical === 'https://modelodecontrato.org/' || canonical === 'https://modelodecontrato.org';

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/gerador', label: 'Gerador de Contratos' },
    { href: '/exemplos-de-contratos', label: 'Modelos de Contratos' },
    { href: '/blog', label: 'Blog Jurídico' },
    { href: '/glossario-juridico', label: 'Glossário Jurídico' },
    { href: '/tipos-de-contratos', label: 'Tipos de Contratos' },
    { href: '/como-funciona', label: 'Como Funciona' },
    { href: '/faq', label: 'Perguntas Frequentes' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  const contractLinks = [
    { href: '/contrato-de-prestacao-de-servicos', label: 'Contrato de Prestação de Serviços' },
    { href: '/contrato-de-compra-e-venda', label: 'Contrato de Compra e Venda' },
    { href: '/contrato-de-locacao-comercial', label: 'Contrato de Locação Comercial' },
    { href: '/contrato-de-locacao-de-veiculo', label: 'Contrato de Locação de Veículo' },
    { href: '/contrato-de-comodato', label: 'Contrato de Comodato' },
    { href: '/contrato-de-doacao', label: 'Contrato de Doação' },
    { href: '/contrato-de-emprestimo', label: 'Contrato de Empréstimo' },
    { href: '/contrato-de-mandato', label: 'Contrato de Mandato (Procuração)' },
    { href: '/contrato-de-franquia', label: 'Contrato de Franquia' },
    { href: '/contrato-de-estagio', label: 'Contrato de Estágio' },
    { href: '/contrato-de-trabalho-autonomo', label: 'Contrato de Trabalho Autônomo' },
    { href: '/contrato-de-parceria-empresarial', label: 'Contrato de Parceria Empresarial' },
    { href: '/contrato-de-alienacao-fiduciaria', label: 'Contrato de Alienação Fiduciária' },
    { href: '/contrato-de-rescisao-de-contrato', label: 'Contrato de Rescisão' },
    { href: '/contrato-de-adesao', label: 'Contrato de Adesão' },
  ];

  const kwHtml = kwList.length
    ? `<section aria-label="Termos relacionados"><h2>Termos relacionados</h2><ul>${kwList.map(k => `<li>${escapeHtml(k)}</li>`).join('')}</ul></section>`
    : '';

  return `
    <noscript>
      <div style="padding:16px;background:#fef3c7;color:#92400e;text-align:center;font-family:system-ui,sans-serif">
        Este site funciona melhor com JavaScript ativado. Por favor, habilite o JavaScript no seu navegador.
      </div>
    </noscript>
    <div data-seo-prerender="true" style="min-height:100vh;background:#ffffff;color:#1f2937;font-family:'Inter',system-ui,-apple-system,sans-serif;padding:24px;max-width:1200px;margin:0 auto">
      <header>
        <a href="/" style="display:inline-block;font-weight:700;font-size:1.25rem;color:#1e40af;text-decoration:none">Modelo de Contrato</a>
        <nav aria-label="Navegação principal" style="margin-top:12px">
          <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px;font-size:0.875rem">
            ${navLinks.map(l => `<li><a href="${l.href}" style="color:#374151;text-decoration:none">${l.label}</a></li>`).join('')}
          </ul>
        </nav>
      </header>
      <main style="margin-top:32px">
        <h1 style="font-size:2rem;font-weight:700;line-height:1.2;margin:0 0 16px;color:#111827">${h1}</h1>
        ${desc ? `<p style="font-size:1.125rem;line-height:1.6;color:#4b5563;margin:0 0 24px">${desc}</p>` : ''}
        ${isHome ? `
        <section>
          <h2 style="font-size:1.5rem;font-weight:600;margin:24px 0 12px">Gerador de Contratos Online Grátis 2026</h2>
          <p>Crie modelos de contratos profissionais em PDF e Word de forma rápida, segura e gratuita. Nossa plataforma oferece mais de 15 tipos de contratos elaborados por especialistas jurídicos e atualizados conforme a legislação brasileira de 2026.</p>
          <h2 style="font-size:1.5rem;font-weight:600;margin:24px 0 12px">Tipos de contratos disponíveis</h2>
          <ul>${contractLinks.map(l => `<li><a href="${l.href}" style="color:#1e40af">${l.label}</a></li>`).join('')}</ul>
        </section>` : `
        <section>
          <h2 style="font-size:1.25rem;font-weight:600;margin:24px 0 12px">Sobre este modelo</h2>
          <p>Esta página apresenta informações jurídicas atualizadas conforme a legislação brasileira de 2026, elaboradas por advogados especialistas. Utilize nossa plataforma para gerar contratos profissionais em PDF e Word de forma gratuita.</p>
          <p><a href="/gerador" style="color:#1e40af;font-weight:600">→ Acesse o gerador de contratos gratuito</a></p>
        </section>
        <section style="margin-top:24px">
          <h2 style="font-size:1.25rem;font-weight:600;margin:0 0 12px">Outros modelos de contratos</h2>
          <ul>${contractLinks.slice(0, 8).map(l => `<li><a href="${l.href}" style="color:#1e40af">${l.label}</a></li>`).join('')}</ul>
        </section>
        `}
        ${kwHtml}
      </main>
      <footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e5e7eb;font-size:0.875rem;color:#6b7280">
        <p>© 2026 Modelo de Contrato — Gerador gratuito de contratos jurídicos profissionais.</p>
        <p>
          <a href="/politica-privacidade" style="color:#6b7280;margin-right:12px">Política de Privacidade</a>
          <a href="/termos-de-uso" style="color:#6b7280;margin-right:12px">Termos de Uso</a>
          <a href="/cookies" style="color:#6b7280">Cookies</a>
        </p>
      </footer>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let processed = 0;
let skipped = 0;

for (const baseDir of TARGETS) {
  for (const filePath of listHtmlFiles(baseDir)) {
    let html = fs.readFileSync(filePath, 'utf8');

    // Só processa arquivos que tenham <div id="root"></div> vazio
    // (não sobrescreve se já foi processado por outro tooling)
    if (!/<div\s+id="root"\s*>\s*<\/div>/i.test(html)) {
      skipped++;
      continue;
    }

    const meta = {
      title: extractTitle(html),
      description: extractMeta(html, 'description'),
      keywords: extractMeta(html, 'keywords'),
      canonical: extractCanonical(html),
    };

    if (!meta.title) {
      skipped++;
      continue;
    }

    const seoBlock = buildSeoBlock(meta);
    html = html.replace(
      /<div\s+id="root"\s*>\s*<\/div>/i,
      `<div id="root">${seoBlock}</div>`
    );

    fs.writeFileSync(filePath, html);
    processed++;
  }
}

console.log(`[inject-seo-content] processadas: ${processed} | ignoradas: ${skipped}`);

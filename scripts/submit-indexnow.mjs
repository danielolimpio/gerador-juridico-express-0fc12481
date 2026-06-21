#!/usr/bin/env node
/**
 * Submete todas as URLs do sitemap.xml ao IndexNow (Bing, Yandex, Seznam, Naver).
 * Roda automaticamente após cada build/deploy.
 *
 * Uso manual: node scripts/submit-indexnow.mjs
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const HOST = "modelodecontrato.org";
const KEY = "4f3d30d159c028b9fac4785595a6614e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = resolve("public/sitemap.xml");

function extractUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { status: res.status, text: await res.text().catch(() => "") };
}

(async () => {
  let xml;
  try {
    xml = readFileSync(SITEMAP_PATH, "utf8");
  } catch (e) {
    console.error(`Não foi possível ler ${SITEMAP_PATH}:`, e.message);
    process.exit(1);
  }
  const urls = extractUrls(xml).filter((u) => u.includes(HOST));
  if (!urls.length) {
    console.error("Nenhuma URL encontrada no sitemap.");
    process.exit(1);
  }
  console.log(`Enviando ${urls.length} URLs ao IndexNow...`);

  // IndexNow aceita até 10.000 URLs por requisição
  const chunks = [];
  for (let i = 0; i < urls.length; i += 10000) chunks.push(urls.slice(i, i + 10000));

  for (const chunk of chunks) {
    const { status, text } = await submit(chunk);
    // 200/202 = sucesso. 422 normalmente = key not found (deploy o arquivo .txt primeiro).
    console.log(`Lote de ${chunk.length}: HTTP ${status} ${text || "OK"}`);
  }
  console.log("Concluído.");
})();

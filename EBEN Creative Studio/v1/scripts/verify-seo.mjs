// Confere, no site publicado, se os itens de SEO estão acessíveis de verdade
// e não só presentes no código: robots.txt, sitemap.xml, llms.txt, canonical,
// title, description, JSON-LD, hierarquia de títulos e a página 404.
//
// Uso: node scripts/verify-seo.mjs https://seudominio.com.br
// Sai com código 1 se algum item falhar.

const input = process.argv[2];
if (!input) {
  console.error("Informe a URL do site. Exemplo: node scripts/verify-seo.mjs https://seudominio.com.br");
  process.exit(2);
}

const base = new URL(input).origin;
const home = `${base}/`;
let failures = 0;
let warnings = 0;

function report(ok, label, detail = "") {
  if (!ok) failures += 1;
  console.log(`${ok ? "OK   " : "FALHA"}  ${label}${detail ? `  (${detail})` : ""}`);
}

function warn(label) {
  warnings += 1;
  console.log(`AVISO  ${label}`);
}

/** Trata https://site e https://site/ como a mesma URL (raiz). */
function sameUrl(a, b) {
  const normalize = (value) => {
    const url = new URL(value);
    url.hash = "";
    return url.pathname === "/" ? url.origin + "/" : url.toString();
  };
  try {
    return normalize(a) === normalize(b);
  } catch {
    return false;
  }
}

async function get(url) {
  const response = await fetch(url, { redirect: "follow", headers: { "User-Agent": "eben-verify-seo/1.0" } });
  return { response, body: await response.text() };
}

function attr(tag, name) {
  return tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1];
}

function metaContent(html, key, value) {
  const tag = html.match(new RegExp(`<meta[^>]*${key}="${value}"[^>]*>`, "i"))?.[0];
  return tag ? attr(tag, "content") : undefined;
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  );
}

async function checkPage(url, { expectIndexable }) {
  const { response, body: html } = await get(url);
  report(response.status === 200, `GET ${url} responde 200`, `status ${response.status}`);
  report(
    (response.headers.get("content-type") ?? "").includes("text/html"),
    "página é servida como text/html",
    response.headers.get("content-type") ?? "sem content-type",
  );

  const lang = html.match(/<html[^>]*lang="([^"]+)"/i)?.[1];
  report(lang === "pt-BR", "idioma declarado como pt-BR em <html lang>", lang ?? "ausente");

  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "");
  report(title.length > 0, "meta title presente", title || "vazio");
  if (title.length > 65)
    warn(`title com ${title.length} caracteres pode ser cortado nos resultados de busca`);

  const description = decode(metaContent(html, "name", "description") ?? "");
  report(description.length > 0, "meta description presente", `${description.length} caracteres`);
  if (description.length > 160) warn(`description com ${description.length} caracteres pode ser cortada`);

  const canonicalTag = html.match(/<link[^>]*rel="canonical"[^>]*>/i)?.[0];
  const canonical = canonicalTag ? attr(canonicalTag, "href") : undefined;
  report(
    Boolean(canonical) && sameUrl(canonical, url),
    "canonical aponta para a própria URL",
    canonical ?? "ausente",
  );

  const robotsMeta = metaContent(html, "name", "robots") ?? "";
  if (expectIndexable) {
    report(!/noindex/i.test(robotsMeta), "página indexável (sem noindex)", robotsMeta || "sem meta robots");
  }

  const headings = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((match) => Number(match[1]));
  report(
    headings.filter((level) => level === 1).length === 1,
    "exatamente um H1",
    `${headings.filter((l) => l === 1).length} encontrados`,
  );
  const skipped = headings.findIndex((level, index) => index > 0 && level > headings[index - 1] + 1);
  report(
    skipped === -1,
    "hierarquia de títulos sem pular níveis",
    skipped === -1 ? `${headings.length} títulos` : `salto em H${headings[skipped]}`,
  );

  report(Boolean(metaContent(html, "property", "og:title")), "Open Graph: og:title presente");
  report(Boolean(metaContent(html, "property", "og:url")), "Open Graph: og:url presente");

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map(
    (match) => match[1],
  );
  report(blocks.length > 0, "JSON-LD presente", `${blocks.length} bloco(s)`);
  const nodes = [];
  for (const block of blocks) {
    try {
      const data = JSON.parse(block);
      nodes.push(...(Array.isArray(data["@graph"]) ? data["@graph"] : [data]));
    } catch (error) {
      report(false, "JSON-LD é JSON válido", error.message);
    }
  }
  const types = new Set(nodes.map((node) => node["@type"]));
  for (const type of ["Organization", "WebSite", "WebPage", "Service", "FAQPage"]) {
    report(types.has(type), `JSON-LD contém ${type}`);
  }
  const foreignIds = nodes.map((node) => node["@id"]).filter((id) => id && !id.startsWith(base));
  report(foreignIds.length === 0, "todos os @id do JSON-LD usam o domínio publicado", foreignIds[0] ?? "");

  const faqPage = nodes.find((node) => node["@type"] === "FAQPage");
  if (faqPage) {
    const text = visibleText(html);
    const missing = faqPage.mainEntity.filter((question) => !text.includes(question.name));
    report(
      missing.length === 0,
      "perguntas do FAQPage aparecem no texto visível",
      missing[0]?.name ?? `${faqPage.mainEntity.length} perguntas`,
    );
  }

  return { html };
}

async function main() {
  console.log(`Verificando ${base}\n`);

  await checkPage(home, { expectIndexable: true });

  console.log("");
  const robots = await get(`${base}/robots.txt`);
  report(robots.response.status === 200, "robots.txt responde 200", `status ${robots.response.status}`);
  report(
    (robots.response.headers.get("content-type") ?? "").includes("text/plain"),
    "robots.txt é text/plain",
  );
  report(/user-agent:\s*\*/i.test(robots.body), "robots.txt tem regra para todos os robôs");
  report(/^allow:\s*\/\s*$/im.test(robots.body), "robots.txt permite rastrear as páginas públicas");
  report(!/^disallow:\s*\/\s*$/im.test(robots.body), "robots.txt não bloqueia o site inteiro");
  const sitemapLine = robots.body.match(/^sitemap:\s*(\S+)/im)?.[1];
  report(
    sitemapLine === `${base}/sitemap.xml`,
    "robots.txt aponta para o sitemap no mesmo domínio",
    sitemapLine ?? "ausente",
  );

  console.log("");
  const sitemap = await get(`${base}/sitemap.xml`);
  report(sitemap.response.status === 200, "sitemap.xml responde 200", `status ${sitemap.response.status}`);
  report(
    /xml/.test(sitemap.response.headers.get("content-type") ?? ""),
    "sitemap.xml é servido como XML",
    sitemap.response.headers.get("content-type") ?? "",
  );
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  report(locs.length > 0, "sitemap.xml lista URLs", `${locs.length} URL(s)`);
  report(
    locs.some((loc) => sameUrl(loc, home)),
    "sitemap.xml inclui a página inicial",
  );
  for (const loc of locs) {
    report(loc.startsWith(base), `URL do sitemap usa o domínio publicado: ${loc}`);
    const page = await get(loc);
    report(
      page.response.status === 200,
      `URL do sitemap responde 200: ${loc}`,
      `status ${page.response.status}`,
    );
    const tag = page.body.match(/<link[^>]*rel="canonical"[^>]*>/i)?.[0];
    const canonical = tag ? attr(tag, "href") : undefined;
    report(
      Boolean(canonical) && sameUrl(canonical, loc),
      `canonical da URL do sitemap bate com ela: ${loc}`,
      canonical ?? "sem canonical",
    );
  }

  console.log("");
  const llms = await get(`${base}/llms.txt`);
  report(llms.response.status === 200, "llms.txt responde 200", `status ${llms.response.status}`);
  report((llms.response.headers.get("content-type") ?? "").includes("text/plain"), "llms.txt é text/plain");
  report(/^# \S/.test(llms.body), "llms.txt começa com um título H1 em Markdown");
  report(/^> \S/m.test(llms.body), "llms.txt tem o resumo em citação");
  const internalLinks = [
    ...new Set([...llms.body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1])),
  ].filter((link) => link.startsWith(base));
  for (const link of internalLinks) {
    const target = new URL(link);
    target.hash = "";
    const response = await fetch(target, { redirect: "follow" });
    report(response.status === 200, `link do llms.txt responde 200: ${link}`, `status ${response.status}`);
  }

  console.log("");
  const missing = await get(`${base}/esta-pagina-nao-existe-${Date.now()}`);
  report(
    missing.response.status === 404,
    "endereço inexistente responde 404 (sem soft 404)",
    `status ${missing.response.status}`,
  );
  report(/noindex/i.test(metaContent(missing.body, "name", "robots") ?? ""), "página 404 não é indexável");

  console.log(
    `\n${failures === 0 ? "Tudo certo" : `${failures} falha(s)`}${warnings ? `, ${warnings} aviso(s)` : ""}.`,
  );
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(`Não foi possível verificar ${base}: ${error.message}`);
  process.exit(1);
});

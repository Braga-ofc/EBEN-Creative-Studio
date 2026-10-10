// Servidor estático mínimo para conferir a pasta out/ como ela será publicada.
// Uso: npm run preview  (ou: node scripts/serve-out.mjs [porta])
// Imita uma hospedagem estática comum: URLs limpas, 404.html com status 404,
// tipos de conteúdo corretos, compressão (brotli ou gzip) e cache longo para
// os arquivos com hash em /_next/static.

import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createBrotliCompress, createGzip } from "node:zlib";

const root = resolve(fileURLToPath(new URL("../out", import.meta.url)));
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

const compressible = new Set([".html", ".xml", ".txt", ".css", ".js", ".json", ".svg"]);

async function findFile(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath)).replace(/^([/\\])+/, "");
  const candidates = [clean, join(clean, "index.html"), `${clean}.html`];
  for (const candidate of candidates) {
    const full = join(root, candidate);
    if (!full.startsWith(root)) continue;
    try {
      const info = await stat(full);
      if (info.isFile()) return full;
    } catch {
      // tenta o próximo candidato
    }
  }
  return null;
}

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? "/", "http://localhost");
  const file = await findFile(pathname === "/" ? "index.html" : pathname);
  const target = file ?? join(root, "404.html");
  const extension = extname(target);
  const accepted = String(request.headers["accept-encoding"] ?? "");
  const encoding = !compressible.has(extension)
    ? null
    : accepted.includes("br")
      ? "br"
      : accepted.includes("gzip")
        ? "gzip"
        : null;

  const headers = {
    "Content-Type": types[extension] ?? "application/octet-stream",
    "Cache-Control": pathname.startsWith("/_next/static/")
      ? "public, max-age=31536000, immutable"
      : "public, max-age=0, must-revalidate",
    Vary: "Accept-Encoding",
  };
  if (encoding) headers["Content-Encoding"] = encoding;
  response.writeHead(file ? 200 : 404, headers);

  const stream = createReadStream(target);
  if (encoding === "br") stream.pipe(createBrotliCompress()).pipe(response);
  else if (encoding === "gzip") stream.pipe(createGzip()).pipe(response);
  else stream.pipe(response);
}).listen(port, () => {
  console.log(`Servindo ${root} em http://localhost:${port}`);
});

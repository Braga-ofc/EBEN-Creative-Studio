// Worker da Cloudflare: só roda para /videos/* (wrangler.jsonc, run_worker_first).
// Os arquivos estáticos da Cloudflare respondem sempre com o vídeo inteiro
// (200), e o Safari do iPhone só toca vídeo quando o servidor entrega partes
// dele (206, pedidos com o cabeçalho Range). Aqui o vídeo é lido dos arquivos
// do site e só o trecho pedido é enviado. O resto do site nem passa por aqui.

/** Interpreta "bytes=início-fim" (um intervalo só, como os navegadores pedem). */
function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match || (match[1] === "" && match[2] === "")) return null;
  if (match[1] === "") {
    // "bytes=-500": os últimos 500 bytes.
    return { start: Math.max(0, size - Number(match[2])), end: size - 1 };
  }
  const start = Number(match[1]);
  const end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
  return { start, end };
}

/** Repassa só os bytes de start a end (inclusive) do corpo, sem copiar o resto. */
function sliceBody(body, start, end) {
  let position = 0;
  return body.pipeThrough(
    new TransformStream({
      transform(chunk, controller) {
        const chunkStart = position;
        position += chunk.byteLength;
        const from = Math.max(start, chunkStart);
        const to = Math.min(end + 1, position);
        if (from < to) controller.enqueue(chunk.subarray(from - chunkStart, to - chunkStart));
        if (position > end) controller.terminate();
      },
    }),
  );
}

const worker = {
  async fetch(request, env) {
    const rangeHeader = request.headers.get("Range");
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: request.method }));
    if (!rangeHeader || asset.status !== 200 || !asset.body) return asset;

    const size = Number(asset.headers.get("Content-Length"));
    const range = size ? parseRange(rangeHeader, size) : null;
    if (!range) return asset;

    if (range.start > range.end || range.start >= size) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }

    const length = range.end - range.start + 1;
    const headers = new Headers(asset.headers);
    headers.set("Content-Range", `bytes ${range.start}-${range.end}/${size}`);
    headers.set("Content-Length", String(length));
    headers.set("Accept-Ranges", "bytes");

    const sliced = sliceBody(asset.body, range.start, range.end);
    // FixedLengthStream faz a Cloudflare enviar o Content-Length certo com o corpo em fluxo.
    let body = sliced;
    if (typeof FixedLengthStream === "function") {
      const fixed = new FixedLengthStream(length);
      sliced.pipeTo(fixed.writable);
      body = fixed.readable;
    }
    return new Response(body, { status: 206, headers });
  },
};

export default worker;

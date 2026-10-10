import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

/** Gera /llms.txt no build: um resumo do site em Markdown para sistemas e agentes de IA. */
export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

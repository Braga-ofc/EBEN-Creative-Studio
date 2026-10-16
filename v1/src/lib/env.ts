import { z } from "zod";

const siteUrlSchema = z.url({ protocol: /^https?$/ });

/**
 * Endereço público do site, sem barra no final.
 *
 * Alimenta canonical, sitemap.xml, robots.txt, llms.txt e os dados
 * estruturados. No build de produção ele é obrigatório, para que nenhuma
 * dessas URLs saia apontando para um domínio errado.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;

  if (!raw) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "Defina NEXT_PUBLIC_SITE_URL com o endereço público do site (por exemplo https://seudominio.com.br) antes do build. " +
          "Ele alimenta canonical, sitemap.xml, robots.txt, llms.txt e os dados estruturados.",
      );
    }
    return "http://localhost:3000";
  }

  const parsed = siteUrlSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL inválida: "${raw}". Use uma URL completa, como https://seudominio.com.br`,
    );
  }

  return new URL(parsed.data).origin;
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteUrl}/`).toString();
}

/**
 * IDs públicos das ferramentas de análise e de anúncios. São opcionais: sem
 * o ID, a ferramenta fica desligada e o build segue, com um aviso no
 * terminal. Um ID fora do formato para o build, porque é erro de digitação.
 */
function resolveTrackingId(
  name: string,
  raw: string | undefined,
  schema: z.ZodString,
  example: string,
): string | null {
  const value = raw?.trim();
  if (!value) return null;

  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    throw new Error(`${name} inválido: "${value}". Use o ID no formato ${example}.`);
  }

  return parsed.data;
}

export type TrackingIds = {
  ga: string | null;
  clarity: string | null;
  metaPixel: string | null;
};

export const trackingIds: TrackingIds = {
  ga: resolveTrackingId(
    "NEXT_PUBLIC_GA_ID",
    process.env.NEXT_PUBLIC_GA_ID,
    z.string().regex(/^G-[A-Z0-9]{4,16}$/),
    "G-XXXXXXXXXX",
  ),
  clarity: resolveTrackingId(
    "NEXT_PUBLIC_CLARITY_ID",
    process.env.NEXT_PUBLIC_CLARITY_ID,
    z.string().regex(/^[a-z0-9]{6,16}$/),
    "abcd1234ef (10 letras minúsculas e números)",
  ),
  metaPixel: resolveTrackingId(
    "NEXT_PUBLIC_META_PIXEL_ID",
    process.env.NEXT_PUBLIC_META_PIXEL_ID,
    z.string().regex(/^\d{10,20}$/),
    "123456789012345 (só números)",
  ),
};

const missingTools = [
  trackingIds.ga ? null : "Google Analytics (NEXT_PUBLIC_GA_ID)",
  trackingIds.clarity ? null : "Microsoft Clarity (NEXT_PUBLIC_CLARITY_ID)",
  trackingIds.metaPixel ? null : "Pixel da Meta (NEXT_PUBLIC_META_PIXEL_ID)",
].filter(Boolean);

if (missingTools.length > 0 && process.env.NODE_ENV === "production") {
  console.warn(`Sem ID, ficam desligados neste build: ${missingTools.join(", ")}.`);
}

/** Alguma ferramenta configurada: só então o aviso de cookies e os eventos entram na página. */
export const hasTracking = Boolean(trackingIds.ga || trackingIds.clarity || trackingIds.metaPixel);

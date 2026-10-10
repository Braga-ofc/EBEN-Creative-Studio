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

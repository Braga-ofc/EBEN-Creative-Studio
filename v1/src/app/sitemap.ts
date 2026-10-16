import type { MetadataRoute } from "next";
import { seo } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/env";

export const dynamic = "force-static";

/** A página inicial e a Política de Privacidade são as páginas públicas e indexáveis. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Mesma forma que o canonical gerado pelo Next.js para a raiz (sem barra final).
      url: siteUrl,
      lastModified: seo.contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/privacidade"),
      lastModified: seo.privacyUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

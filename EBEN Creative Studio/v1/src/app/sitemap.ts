import type { MetadataRoute } from "next";
import { seo } from "@/content/site";
import { siteUrl } from "@/lib/env";

export const dynamic = "force-static";

/** Só a página inicial é pública e indexável nesta versão. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Mesma forma que o canonical gerado pelo Next.js para a raiz (sem barra final).
      url: siteUrl,
      lastModified: seo.contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

"use client";

import { Check, Heart, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { hero } from "@/content/landing";
import { seo } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Curtir e compartilhar do Story, como no Instagram. A curtida é só um gesto
 * na tela (não fica salva). Compartilhar usa o compartilhamento do sistema e,
 * sem ele, copia o link da página e mostra um aviso curto.
 */
export function StoryActions() {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function share() {
    const url = `${window.location.origin}/`;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: seo.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Compartilhamento cancelado ou área de transferência bloqueada: nada a fazer.
    }
  }

  return (
    <>
      <button
        type="button"
        className={cn("story__action story__like", liked && "story__like--on")}
        aria-pressed={liked}
        aria-label={liked ? hero.story.unlike : hero.story.like}
        onClick={() => setLiked((value) => !value)}
      >
        <Heart aria-hidden="true" strokeWidth={1.75} className="size-6" />
      </button>
      <button
        type="button"
        className="story__action story__share"
        aria-label={hero.story.share}
        onClick={share}
      >
        {copied ? (
          <Check aria-hidden="true" strokeWidth={2} className="size-6" />
        ) : (
          <Send aria-hidden="true" strokeWidth={1.75} className="size-6" />
        )}
      </button>
      <span className="story__toast" role="status" data-show={copied || undefined}>
        {copied ? hero.story.copied : ""}
      </span>
    </>
  );
}

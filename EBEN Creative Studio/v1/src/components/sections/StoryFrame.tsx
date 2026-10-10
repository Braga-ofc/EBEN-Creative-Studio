import Image from "next/image";
import type { CSSProperties } from "react";
import { Monogram } from "@/components/brand/Monogram";
import { Star } from "@/components/brand/Star";
import { hero } from "@/content/landing";
import { brand, heroMedia } from "@/content/site";
import { cn } from "@/lib/cn";
import { StoryTap } from "./StoryTap";

type StoryFrameProps = {
  className?: string;
};

const SEGMENTS = [0, 1, 2] as const;

/**
 * Quadro vertical 9:16 da hero, no formato de um Story.
 *
 * Enquanto `heroMedia` for `null`, mostra o bloco reservado em CSS com as
 * mesmas dimensões da imagem definitiva. A animação é só CSS (globals.css):
 * os segmentos se completam uma vez e o quadro termina com a assinatura.
 */
export function StoryFrame({ className }: StoryFrameProps) {
  return (
    <figure className={cn("story m-0", className)}>
      {heroMedia ? (
        <Image
          src={heroMedia.src}
          alt={heroMedia.alt}
          width={heroMedia.width}
          height={heroMedia.height}
          preload
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 62vw, 100vw"
          className="story__media"
          style={{ objectPosition: heroMedia.position ?? "50% 50%" }}
        />
      ) : (
        // Espaço reservado para a imagem da hero (9:16, mínimo 1080 x 1920 px).
        <div className="story__placeholder" aria-hidden="true">
          <Star className="w-[18%] text-gold opacity-25" />
        </div>
      )}

      <div className="story__scrim" aria-hidden="true" />
      <StoryTap />

      <div aria-hidden="true">
        <div className="story__bars">
          {SEGMENTS.map((index) => (
            <div key={index} className="story__bar" style={{ "--i": index } as CSSProperties}>
              <span />
            </div>
          ))}
        </div>

        {hero.storyBeats.map((beat, index) => (
          <p
            key={beat}
            className="story__beat type-quote text-ivory"
            style={{ "--i": index } as CSSProperties}
          >
            {beat}
          </p>
        ))}

        <div className="story__end text-ivory">
          <Monogram className="size-11 shrink-0" />
          <p className="story__signature font-display leading-snug italic">
            {brand.slogan.split(". ").map((sentence, index, all) => (
              <span key={sentence} className="block">
                {index < all.length - 1 ? `${sentence}.` : sentence}
              </span>
            ))}
          </p>
        </div>
      </div>
    </figure>
  );
}

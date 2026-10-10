import Image from "next/image";
import { Star } from "@/components/brand/Star";
import { hero } from "@/content/landing";
import { heroSlides } from "@/content/site";
import { cn } from "@/lib/cn";
import { StoryControls } from "./StoryControls";

type StoryFrameProps = {
  className?: string;
};

const SIZES = "(min-width: 1024px) 380px, (min-width: 768px) 300px, 100vw";

/**
 * Quadro vertical 9:16 da hero, no formato de um Story: três fotos, uma por
 * barra, passando lado a lado em carrossel. A animação é só CSS (globals.css,
 * bloco "Story da hero"): cada barra enche enquanto a sua foto está na tela e,
 * no fim dela, a trilha desliza para a próxima.
 *
 * A primeira foto se repete no fim da trilha. Quando a terceira desliza, entra
 * essa cópia, e o ciclo recomeça do ponto idêntico, sem o carrossel voltar
 * correndo para o começo.
 */
export function StoryFrame({ className }: StoryFrameProps) {
  const track = [...heroSlides, heroSlides[0]];

  return (
    <figure className={cn("story m-0", className)}>
      <div className="story__track">
        {track.map((slide, index) => {
          const isCopy = index === heroSlides.length;
          return (
            <div key={isCopy ? "copia" : slide.src} className="story__slide" aria-hidden={isCopy || undefined}>
              <Image
                src={slide.src}
                alt={isCopy ? "" : slide.alt}
                width={slide.width}
                height={slide.height}
                sizes={SIZES}
                preload={index === 0}
                // As outras fotos ficam fora do quadro até deslizarem: com
                // carregamento preguiçoso, só começariam a baixar na hora de aparecer.
                loading={index === 0 ? undefined : "eager"}
                fetchPriority={index === 0 ? undefined : "low"}
                className="story__media"
                style={{ objectPosition: slide.position ?? "50% 50%" }}
              />
              <p className="story__beat type-quote text-ivory" aria-hidden="true">
                {hero.storyBeats[index % heroSlides.length]}
              </p>
            </div>
          );
        })}
      </div>

      <div className="story__scrim" aria-hidden="true" />
      <Star className="story__watermark" />

      <div className="story__bars" aria-hidden="true">
        {heroSlides.map((slide) => (
          <div key={slide.src} className="story__bar">
            <span />
          </div>
        ))}
      </div>

      <StoryControls />
    </figure>
  );
}

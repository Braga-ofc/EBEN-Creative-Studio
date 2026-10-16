import Image from "next/image";
import { Monogram } from "@/components/brand/Monogram";
import { Star } from "@/components/brand/Star";
import { hero } from "@/content/landing";
import { agencyInstagram, heroSlides } from "@/content/site";
import { trackLink } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { consultationLink } from "@/lib/whatsapp";
import { StoryActions } from "./StoryActions";
import { StoryControls } from "./StoryControls";

type StoryFrameProps = {
  className?: string;
};

const SIZES = "(min-width: 1024px) 380px, (min-width: 768px) 300px, 100vw";

/** Nome do perfil como o Instagram mostra no Story: sem o @. */
const profileName = agencyInstagram.handle.replace(/^@/, "");

/**
 * Quadro vertical 9:16 da hero, no formato de um Story: três fotos, uma por
 * barra, passando lado a lado em carrossel. A animação é só CSS (globals.css,
 * bloco "Story da hero"): cada barra enche enquanto a sua foto está na tela e,
 * no fim dela, a trilha desliza para a próxima.
 *
 * A primeira foto se repete no fim da trilha. Quando a terceira desliza, entra
 * essa cópia, e o ciclo recomeça do ponto idêntico, sem o carrossel voltar
 * correndo para o começo.
 *
 * No computador, o quadro vira um Story do Instagram: cantos arredondados,
 * perfil da EBEN no topo, campo de resposta (que abre o WhatsApp) com curtir e
 * compartilhar na base e um contorno em degradê que se desenha na entrada.
 */
export function StoryFrame({ className }: StoryFrameProps) {
  const track = [...heroSlides, heroSlides[0]];

  return (
    <div className={cn("story-shell", className)}>
      <svg className="story-ring" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="story-ring-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-gold)" />
            <stop offset="0.45" stopColor="var(--color-rose)" />
            <stop offset="0.75" stopColor="var(--color-ivory)" />
            <stop offset="1" stopColor="var(--color-gold)" />
          </linearGradient>
        </defs>
        <rect className="story-ring__glow" width="100%" height="100%" rx={26} pathLength={1} />
        <rect className="story-ring__line" width="100%" height="100%" rx={26} pathLength={1} />
        <g className="story-ring__comets">
          {(["glow", "tail", "mid", "head"] as const).map((part) => (
            <rect
              key={part}
              className={`story-ring__comet story-ring__comet--${part}`}
              width="100%"
              height="100%"
              rx={26}
              pathLength={1}
            />
          ))}
        </g>
      </svg>

      <figure className="story m-0">
        <div className="story__track">
          {track.map((slide, index) => {
            const isCopy = index === heroSlides.length;
            return (
              <div
                key={isCopy ? "copia" : slide.src}
                className="story__slide"
                aria-hidden={isCopy || undefined}
              >
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

        <a
          href={agencyInstagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="story__profile"
          {...trackLink("instagram_click", "story")}
        >
          <span className="story__avatar" aria-hidden="true">
            <Monogram className="story__avatar-mark" />
          </span>
          <span className="story__name">{profileName}</span>
          <span className="sr-only">{hero.story.profileHint}</span>
        </a>

        <div className="story__reply">
          <a
            href={consultationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="story__reply-field"
            {...trackLink("whatsapp_click", "story")}
          >
            {hero.story.reply}
            <span className="sr-only">{hero.story.replyHint}</span>
          </a>
          <StoryActions />
        </div>
      </figure>
    </div>
  );
}

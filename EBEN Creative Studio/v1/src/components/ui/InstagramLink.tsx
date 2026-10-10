import { Monogram } from "@/components/brand/Monogram";
import { instagram } from "@/content/site";
import { cn } from "@/lib/cn";

type InstagramLinkProps = {
  className?: string;
};

/**
 * Ícone animado do Instagram. No hover ou no foco, as camadas se abrem em leque,
 * aparece o rótulo embaixo e um cartão com o perfil em cima. A animação é só
 * CSS (globals.css, bloco "Instagram") e fica parada com movimento reduzido.
 *
 * Adaptado de um componente com styled-components para a paleta da marca:
 * sem o gradiente roxo do Instagram, sem cantos arredondados e sem sombras.
 * Desenho do ícone: Font Awesome Free (CC BY 4.0).
 */
export function InstagramLink({ className }: InstagramLinkProps) {
  return (
    <div className={cn("ig", className)}>
      {/* No celular o ícone fica à esquerda da linha; a partir de 640px, à direita. */}
      <div className="ig__card left-0 sm:right-0 sm:left-auto" aria-hidden="true">
        <Monogram className="size-10 shrink-0 text-ivory" />
        <div>
          <p className="font-display text-lg leading-tight text-ivory">{instagram.handle}</p>
          <p className="mt-1 type-small text-ash">{instagram.about}</p>
        </div>
      </div>

      <a className="ig__link" href={instagram.url} target="_blank" rel="noopener noreferrer">
        <span className="ig__layers" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span className="ig__face">
            <svg viewBox="0 0 448 512" focusable="false">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>
        </span>
        <span className="ig__label" aria-hidden="true">
          Instagram
        </span>
        <span className="sr-only">Instagram da EBEN, {instagram.handle} (abre em uma nova aba)</span>
      </a>
    </div>
  );
}

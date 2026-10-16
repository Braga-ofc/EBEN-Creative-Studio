import Image from "next/image";
import { Monogram } from "@/components/brand/Monogram";
import type { InstagramProfile } from "@/content/site";
import { trackLink, type CtaLocation } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type InstagramLinkProps = {
  profile: InstagramProfile;
  /** Onde o link está na página: vai no evento instagram_click do GA4. */
  location: CtaLocation;
  className?: string;
};

/**
 * Ícone animado do Instagram, reproduzindo o componente do vídeo de referência:
 * no hover, as camadas sobem em leque, o rótulo aparece embaixo e o cartão do
 * perfil sobe de trás do ícone (e continua aberto com o mouse em cima dele).
 * A animação é só CSS (globals.css, bloco "Instagram").
 * Desenho do ícone: Font Awesome Free (CC BY 4.0).
 */
export function InstagramLink({ profile: instagram, location, className }: InstagramLinkProps) {
  return (
    <div className={cn("ig", className)}>
      <div className="ig__tooltip" aria-hidden="true">
        <div className="ig__profile">
          <div className="ig__user">
            <div className="ig__avatar">
              {instagram.avatar ? (
                <Image
                  src={instagram.avatar.src}
                  alt=""
                  width={100}
                  height={100}
                  className="size-full object-cover object-top"
                />
              ) : (
                <Monogram className="size-9" />
              )}
            </div>
            <div>
              <p className="ig__name">{instagram.name}</p>
              <p className="ig__username">{instagram.handle}</p>
            </div>
          </div>
          <p className="ig__about">{instagram.about}</p>
        </div>
      </div>

      <a
        className="ig__link"
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        {...trackLink("instagram_click", location)}
      >
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
          {instagram.label}
        </span>
        <span className="sr-only">
          Instagram {instagram.handle}, {instagram.about} (abre em uma nova aba)
        </span>
      </a>
    </div>
  );
}

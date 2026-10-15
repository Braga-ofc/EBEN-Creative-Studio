import type { Metadata } from "next";
import Link from "next/link";
import { Monogram } from "@/components/brand/Monogram";
import { Star } from "@/components/brand/Star";
import { NotFoundStage } from "@/components/layout/NotFoundStage";
import { notFound } from "@/content/landing";
import { brand } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: `Página não encontrada | ${brand.name}`,
  description: "Este endereço não existe. Volte para a página inicial da EBEN Creative Studio.",
  robots: { index: false, follow: true },
};

/** Estrelas que piscam no fundo: posição, tamanho e cor de cada uma. */
const sparks = [
  "top-[12%] left-[9%] w-5 text-gold",
  "top-[22%] right-[12%] w-3 text-ivory",
  "top-[34%] left-[5%] w-3 text-ivory",
  "right-[7%] bottom-[18%] w-6 text-gold",
  "bottom-[9%] left-[22%] w-4 text-gold",
  "top-[8%] left-[48%] w-2.5 text-ivory",
  "right-[30%] bottom-[6%] w-3 text-ivory",
];

/**
 * Página 404 no estilo do site: o zero do "404" é a lente da marca, com o
 * monograma dentro, procurando foco numa história que não existe. Anéis
 * girando, ondas saindo da lente, uma linha de luz varrendo o monograma,
 * cantos de visor respirando e estrelas piscando; com mouse, as camadas
 * acompanham o cursor em profundidades diferentes (NotFoundStage). Todo o
 * movimento está em globals.css, bloco "Página 404".
 */
export default function NotFound() {
  return (
    <main className="lost">
      <NotFoundStage className="lost__stage">
        <span aria-hidden="true" className="lost__plx lost__plx--far lost__backdrop">
          <span className="lost__glow" />
          <Star className="lost__watermark" />
          {sparks.map((position, index) => (
            <Star
              key={position}
              className={cn("about__spark lost__spark", position, `about__spark--${(index % 4) + 1}`)}
            />
          ))}
        </span>

        <div className="lost__content shell">
          <p className="lost__code" aria-hidden="true">
            <span className="lost__plx lost__plx--mid">
              <span className="lost__digit lost__digit--left">4</span>
            </span>

            <span className="lost__plx lost__plx--near">
              <span className="lost__lens">
                <span className="lost__ripple" />
                <span className="lost__ripple" />
                <span className="lost__ripple" />
                <span className="lost__halo" />

                <svg viewBox="0 0 400 400" className="about__dial" focusable="false">
                  <defs>
                    <path
                      id="lost-dial-text"
                      d="M 200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0"
                    />
                  </defs>
                  <g className="about__spin about__spin--ticks">
                    <circle cx="200" cy="200" r="188" pathLength="120" className="about__ticks" />
                    <circle
                      cx="200"
                      cy="200"
                      r="188"
                      pathLength="12"
                      className="about__ticks about__ticks--major"
                    />
                  </g>
                  <g className="about__spin about__spin--text about__spin--ccw">
                    <text className="about__dial-text">
                      <textPath href="#lost-dial-text" textLength="1000" lengthAdjust="spacing">
                        {notFound.ring}
                      </textPath>
                    </text>
                  </g>
                </svg>

                <span className="about__spin about__spin--orbit lost__orbit">
                  <span className="lost__orbit-ring" />
                </span>

                <span className="lost__disc">
                  <Monogram className="lost__monogram" />
                  <span className="lost__scan" />
                </span>

                <span className="lost__finder">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            </span>

            <span className="lost__plx lost__plx--mid">
              <span className="lost__digit lost__digit--right">4</span>
            </span>
          </p>

          <h1 className="lost__title type-h2">{notFound.title}</h1>
          <p className="lost__text type-lead text-mist">{notFound.text}</p>

          <Link href="/" className="cta lost__cta">
            <span className="cta__glow" aria-hidden="true">
              <span />
            </span>
            <span className="cta__label">{notFound.cta}</span>
          </Link>
        </div>
      </NotFoundStage>
    </main>
  );
}

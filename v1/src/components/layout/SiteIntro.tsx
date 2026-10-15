"use client";

import { Monogram } from "@/components/brand/Monogram";
import { Star } from "@/components/brand/Star";

/**
 * Tela de abertura: o monograma da EBEN aparece no centro do campo burgundy,
 * cercado por um anel dourado que se desenha, e a lente abre do centro para as
 * bordas revelando a página. Dura cerca de 1,7s, toca uma vez por sessão
 * (IntroScript) e um toque ou clique pula. Todo o movimento está em
 * globals.css, bloco "Abertura"; com movimento reduzido, a tela nem aparece.
 */
export function SiteIntro() {
  return (
    <div
      className="intro"
      aria-hidden="true"
      onPointerDown={() => document.documentElement.setAttribute("data-intro", "skip")}
    >
      <div className="intro__mark">
        <svg viewBox="0 0 200 200" className="intro__ring" focusable="false">
          <circle cx="100" cy="100" r="96" pathLength="1" />
        </svg>
        <Monogram className="intro__monogram" />
        <Star className="intro__star" />
      </div>
    </div>
  );
}

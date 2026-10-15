"use client";

import { useEffect, useRef, type ReactNode } from "react";

type NotFoundStageProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Palco da página 404: passa a posição do mouse para o CSS, nas variáveis
 * --px e --py (de -1 a 1), e cada camada se move numa profundidade diferente
 * (bloco "Página 404" em globals.css). Só liga com mouse e sem movimento
 * reduzido; no toque, as camadas ficam paradas.
 */
export function NotFoundStage({ className, children }: NotFoundStageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        stage.style.setProperty("--px", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        stage.style.setProperty("--py", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

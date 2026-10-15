"use client";

import { useEffect, useRef, type ReactNode } from "react";

type InViewProps = {
  className?: string;
  children: ReactNode;
  /** Quanto do elemento precisa estar à vista para a entrada começar, de 0 a 1. */
  threshold?: number;
};

/**
 * Marca um bloco para as animações de entrada feitas em CSS. Ao montar, ele
 * ganha data-armed (o estado de antes da entrada); quando aparece na tela,
 * ganha data-revealed, uma única vez, e data-inview enquanto estiver à vista,
 * para os laços pararem fora dela. Sem JavaScript ou com movimento reduzido,
 * nada é armado e o bloco fica no estado final.
 */
export function InView({ className, children, threshold = 0.3 }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.setAttribute("data-armed", "");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.toggleAttribute("data-inview", entry.isIntersecting);
        if (entry.intersectionRatio >= threshold && !element.hasAttribute("data-revealed")) {
          // Dois quadros depois, para o estado armado já estar desenhado e a transição acontecer.
          requestAnimationFrame(() => requestAnimationFrame(() => element.setAttribute("data-revealed", "")));
        }
      },
      { threshold: [0, threshold] },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { registerSmoothScroll } from "@/lib/smooth-scroll";

/** Curva das viagens por âncora: começa e termina devagar, sem tranco. */
const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

/** Distância do topo em que o destino de uma âncora deve parar: o scroll-padding-top do cabeçalho fixo. */
function scrollPaddingTop(): number {
  return Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
}

/**
 * Rolagem suave com Lenis.
 *
 * Só liga quando o sistema não pede movimento reduzido, e desliga na hora se
 * a preferência mudar. A rolagem continua nativa por baixo: position sticky,
 * IntersectionObserver e as animações ligadas à rolagem seguem funcionando.
 *
 * Os links de âncora (#portfolio, #servicos...) usam a rolagem do Lenis, mas
 * mantêm o comportamento nativo que importa: o endereço ganha o #, o foco vai
 * para o destino (o link "Pular para o conteúdo" depende disso) e o
 * scroll-padding-top do cabeçalho fixo é respeitado.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const onAnchorClick = (event: MouseEvent) => {
      const instance = lenis;
      if (!instance || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      // Espera o clique terminar: um link do menu do celular fecha o menu, que
      // estava com a rolagem pausada.
      requestAnimationFrame(() => {
        // As seções com content-visibility: auto têm altura estimada até
        // aparecerem. Calcula todas agora, para o destino não mudar de lugar
        // no meio da viagem.
        document.documentElement.classList.add("render-all");
        const distance = Math.abs(target.getBoundingClientRect().top - scrollPaddingTop());

        instance.start();
        instance.scrollTo(target, {
          duration: Math.min(1.6, 0.6 + distance / 5000),
          easing: easeInOutQuart,
          onComplete: () => {
            if (Math.abs(target.getBoundingClientRect().top - scrollPaddingTop()) > 2) {
              instance.scrollTo(target, { immediate: true, force: true });
            }
            if (window.location.hash !== hash) window.history.pushState(null, "", hash);
            if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          },
        });
      });
    };

    const start = () => {
      if (lenis || reducedMotion.matches) return;
      lenis = new Lenis({ autoRaf: true, lerp: 0.1, smoothWheel: true });
      registerSmoothScroll(lenis);
      document.addEventListener("click", onAnchorClick);
    };

    const stop = () => {
      if (!lenis) return;
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      lenis = null;
      registerSmoothScroll(null);
    };

    const onPreferenceChange = () => (reducedMotion.matches ? stop() : start());

    start();
    reducedMotion.addEventListener("change", onPreferenceChange);
    return () => {
      reducedMotion.removeEventListener("change", onPreferenceChange);
      stop();
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import { trackEvent, trackLinkClick } from "@/lib/analytics";

/** Marcos de rolagem, em porcentagem da página (o GA4 só mede os 90% sozinho). */
const SCROLL_MARKS = [25, 50, 75, 90] as const;
/** Tempo na tela para uma seção contar como vista. */
const SECTION_DWELL_MS = 1000;
/** Passos de 5% para notar a seção cobrindo metade da tela, mesmo nas seções muito altas. */
const SECTION_THRESHOLDS = Array.from({ length: 21 }, (_, index) => index / 20);

/**
 * Eventos da página inicial: cliques nos links de WhatsApp e de Instagram
 * marcados com trackLink, perguntas frequentes abertas, seções vistas e
 * profundidade de rolagem. Cada coisa conta no máximo uma vez por clique ou
 * por carregamento. Um evento só fica registrado como enviado quando o GA4 já
 * está na página: antes do aceite, nada sai e nada se perde.
 */
export function PageEvents() {
  useEffect(() => {
    // Um único ouvinte no documento para todos os links marcados: um evento por clique.
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      if (link) trackLinkClick(link);
    }

    // O toggle do <details> não sobe pela árvore: o ouvinte fica na fase de captura.
    function onToggle(event: Event) {
      const item = event.target;
      if (!(item instanceof HTMLDetailsElement) || !item.open) return;
      const question = item.dataset.faqQuestion;
      if (question) trackEvent({ name: "faq_expand", params: { faq_question: question.slice(0, 100) } });
    }

    // Seção vista: metade dela na tela, ou ela cobrindo metade da tela, por 1 segundo.
    const timers = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target;
          const viewport = entry.rootBounds?.height ?? window.innerHeight;
          const needed = Math.min(entry.boundingClientRect.height, viewport) * 0.5;
          const visible = entry.isIntersecting && entry.intersectionRect.height >= needed;
          if (visible && !timers.has(section)) arm(section);
          if (!visible && timers.has(section)) {
            window.clearTimeout(timers.get(section));
            timers.delete(section);
          }
        }
      },
      { threshold: SECTION_THRESHOLDS },
    );

    function arm(section: Element) {
      const id = section instanceof HTMLElement ? section.dataset.section : undefined;
      if (!id) return;
      const timer = window.setTimeout(() => {
        if (trackEvent({ name: "section_view", params: { section_id: id } })) {
          timers.delete(section);
          observer.unobserve(section);
        } else {
          // Ainda sem aceite: tenta de novo enquanto a seção continuar na tela.
          arm(section);
        }
      }, SECTION_DWELL_MS);
      timers.set(section, timer);
    }

    document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));

    // Profundidade: a parte de baixo da tela passando por 25%, 50%, 75% e 90% da página.
    const reached = new Set<number>();
    let frame = 0;

    function measure() {
      frame = 0;
      const height = document.documentElement.scrollHeight;
      if (height <= 0) return;
      const percent = ((window.scrollY + window.innerHeight) / height) * 100;
      for (const mark of SCROLL_MARKS) {
        if (percent < mark || reached.has(mark)) continue;
        if (trackEvent({ name: "scroll_depth", params: { percent_scrolled: mark } })) reached.add(mark);
      }
      if (reached.size === SCROLL_MARKS.length) window.removeEventListener("scroll", onScroll);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(measure);
    }

    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}

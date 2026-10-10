"use client";

import { Pause, Play } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { heroSlides } from "@/content/site";

/** Animações CSS do carrossel (trilha e barras), que dividem o mesmo ciclo. */
function storyAnimations(story: HTMLElement): CSSAnimation[] {
  return story
    .getAnimations({ subtree: true })
    .filter(
      (animation): animation is CSSAnimation =>
        animation instanceof CSSAnimation && animation.animationName.startsWith("story-"),
    );
}

/**
 * Controles do Story da hero. Um toque ou clique no quadro pula para a próxima
 * foto, como no Instagram: a animação continua sendo só CSS, aqui apenas
 * adiantamos o relógio dela. O botão pausa e retoma o carrossel, para quem
 * precisa parar o movimento automático. Mouse em cima e foco pelo teclado
 * também pausam, pelo CSS.
 */
export function StoryControls() {
  const [paused, setPaused] = useState(false);

  function advance(event: MouseEvent<HTMLDivElement>) {
    const story = event.currentTarget.closest<HTMLElement>(".story");
    if (!story) return;

    const animations = storyAnimations(story);
    const timing = animations[0]?.effect?.getComputedTiming();
    if (!timing) return;

    const delay = Number(timing.delay ?? 0);
    const cycle = Number(timing.duration);
    // Antes do primeiro ciclo começar, conta como se já estivesse na primeira foto.
    const elapsed = Math.max(0, Number(animations[0].currentTime ?? 0) - delay);
    const iteration = Math.floor(elapsed / cycle);
    const slide = Math.floor(((elapsed % cycle) / cycle) * heroSlides.length);
    // Início da próxima foto: a trilha já parada nela, a barra anterior cheia.
    const target = delay + iteration * cycle + ((slide + 1) * cycle) / heroSlides.length;

    for (const animation of animations) animation.currentTime = target;
  }

  function togglePause(event: MouseEvent<HTMLButtonElement>) {
    const next = !paused;
    event.currentTarget.closest(".story")?.toggleAttribute("data-paused", next);
    setPaused(next);
  }

  return (
    <>
      <div aria-hidden="true" className="story__tap" onClick={advance} />
      <button
        type="button"
        className="story__pause"
        onClick={togglePause}
        aria-label={paused ? "Continuar a passagem das fotos" : "Pausar a passagem das fotos"}
      >
        {paused ? (
          <Play aria-hidden="true" strokeWidth={0} fill="currentColor" className="size-[18px]" />
        ) : (
          <Pause aria-hidden="true" strokeWidth={0} fill="currentColor" className="size-[18px]" />
        )}
      </button>
    </>
  );
}

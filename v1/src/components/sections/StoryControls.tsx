"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { hero } from "@/content/landing";
import { heroSlides } from "@/content/site";

/** Quanto tempo segurando conta como "segurar" (pausa) e não como toque (troca a foto). */
const HOLD_DELAY = 220;

/**
 * Animações CSS do carrossel (trilha e barras), que dividem o mesmo ciclo. As
 * de entrada do Story (story-open, story-rise...) ficam de fora.
 */
function storyAnimations(story: HTMLElement): CSSAnimation[] {
  return story
    .getAnimations({ subtree: true })
    .filter(
      (animation): animation is CSSAnimation =>
        animation instanceof CSSAnimation && /^story-(track|bar-\d)$/.test(animation.animationName),
    );
}

/**
 * Leva o carrossel para o começo de outra foto: +1 é a próxima, -1 a anterior.
 * A animação continua sendo só CSS; aqui apenas mudamos o relógio dela. Antes
 * da primeira foto vem a última, como num ciclo.
 */
function jump(story: HTMLElement, step: 1 | -1) {
  const animations = storyAnimations(story);
  const timing = animations[0]?.effect?.getComputedTiming();
  if (!timing) return;

  const count = heroSlides.length;
  const delay = Number(timing.delay ?? 0);
  const cycle = Number(timing.duration);
  // Antes do primeiro ciclo começar, conta como se já estivesse na primeira foto.
  const elapsed = Math.max(0, Number(animations[0].currentTime ?? 0) - delay);
  const iteration = Math.floor(elapsed / cycle);
  const slide = Math.floor(((elapsed % cycle) / cycle) * count);
  // A próxima da última é a primeira do ciclo seguinte; a anterior da primeira é a última do mesmo ciclo.
  const target = step === 1 ? slide + 1 : (slide - 1 + count) % count;
  // Início da foto: a trilha já parada nela, as barras anteriores cheias.
  const time = delay + iteration * cycle + (target * cycle) / count;

  for (const animation of animations) animation.currentTime = time;
}

/**
 * Controles do Story da hero, como no Instagram: um toque ou clique nos dois
 * terços da direita passa para a próxima foto e no terço da esquerda volta
 * para a anterior. Depois do toque, o tempo da foto continua correndo sozinho.
 * Segurar o clique ou o dedo pausa enquanto estiver segurando, e soltar retoma
 * sem trocar de foto. O botão pausa e retoma de vez, para quem precisa parar o
 * movimento automático; o foco pelo teclado também pausa, pelo CSS.
 */
export function StoryControls() {
  const [paused, setPaused] = useState(false);
  const holdTimer = useRef<number | null>(null);
  const held = useRef(false);

  function startHold(event: PointerEvent<HTMLButtonElement>) {
    const story = event.currentTarget.closest<HTMLElement>(".story");
    held.current = false;
    holdTimer.current = window.setTimeout(() => {
      held.current = true;
      story?.setAttribute("data-held", "");
    }, HOLD_DELAY);
  }

  function endHold(event: PointerEvent<HTMLButtonElement>) {
    if (holdTimer.current !== null) window.clearTimeout(holdTimer.current);
    holdTimer.current = null;
    event.currentTarget.closest(".story")?.removeAttribute("data-held");
  }

  function onTap(event: MouseEvent<HTMLButtonElement>, step: 1 | -1) {
    // Segurar e soltar só pausa: não troca de foto.
    if (held.current) {
      held.current = false;
      return;
    }
    const story = event.currentTarget.closest<HTMLElement>(".story");
    if (story) jump(story, step);
  }

  const holdHandlers = {
    onPointerDown: startHold,
    onPointerUp: endHold,
    onPointerLeave: endHold,
    onPointerCancel: endHold,
    onContextMenu: (event: MouseEvent<HTMLButtonElement>) => event.preventDefault(),
  };

  function togglePause(event: MouseEvent<HTMLButtonElement>) {
    const next = !paused;
    event.currentTarget.closest(".story")?.toggleAttribute("data-paused", next);
    setPaused(next);
  }

  return (
    <>
      <button
        type="button"
        className="story__tap story__tap--prev"
        aria-label={hero.story.previous}
        onClick={(event) => onTap(event, -1)}
        {...holdHandlers}
      />
      <button
        type="button"
        className="story__tap story__tap--next"
        aria-label={hero.story.next}
        onClick={(event) => onTap(event, 1)}
        {...holdHandlers}
      />
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

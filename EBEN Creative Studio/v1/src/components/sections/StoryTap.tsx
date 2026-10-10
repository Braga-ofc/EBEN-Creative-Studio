"use client";

import type { MouseEvent } from "react";

function seconds(value: string): number {
  return Number.parseFloat(value) * 1000;
}

/**
 * Camada de toque do quadro: um clique ou toque pula para o próximo trecho do
 * Story, como no Instagram. A animação continua sendo só CSS; aqui apenas
 * avançamos o relógio dela. É decorativa: sem ela, o Story completa sozinho.
 */
export function StoryTap() {
  function advance(event: MouseEvent<HTMLDivElement>) {
    const story = event.currentTarget.closest<HTMLElement>(".story");
    if (!story || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const styles = getComputedStyle(story);
    const beat = seconds(styles.getPropertyValue("--beat"));
    const leadIn = seconds(styles.getPropertyValue("--lead-in"));
    const end = leadIn + 3 * beat;

    const running = story
      .getAnimations({ subtree: true })
      .filter((animation) => animation.playState !== "finished");
    if (running.length === 0) return;

    const elapsed = Math.max(...running.map((animation) => Number(animation.currentTime ?? 0)));
    if (elapsed >= end) return;

    const next = elapsed < leadIn ? leadIn : leadIn + Math.ceil((elapsed - leadIn + 1) / beat) * beat;
    for (const animation of story.getAnimations({ subtree: true })) {
      if (animation.playState !== "finished") animation.currentTime = Math.min(next, end) + 1;
    }
  }

  return <div aria-hidden="true" className="story__tap" onClick={advance} />;
}

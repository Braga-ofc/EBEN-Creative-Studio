"use client";

import { useEffect, useState } from "react";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { cn } from "@/lib/cn";

/** Seções onde o botão já está à vista: a barra se esconde para não repetir a ação. */
const SECTIONS_WITH_CTA = ["topo", "consultoria", "agendar"];

/**
 * Barra fixa do celular com o botão principal. Aparece depois que a hero sai
 * da tela e some quando outra seção com o mesmo botão está visível.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = SECTIONS_WITH_CTA.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (targets.length === 0) return;

    const onScreen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target.id);
          else onScreen.delete(entry.target.id);
        }
        setVisible(onScreen.size === 0);
      },
      { threshold: 0.15 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ivory/15 bg-burgundy px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden",
        "transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <ConsultationButton className="w-full" />
    </div>
  );
}

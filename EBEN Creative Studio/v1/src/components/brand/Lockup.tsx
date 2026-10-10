import { cn } from "@/lib/cn";
import { Monogram } from "./Monogram";

type LockupProps = {
  className?: string;
};

/**
 * Assinatura horizontal da marca: CREATIVE, monograma e STUDIO, como no brandkit.
 * O texto é decorativo porque o link que envolve a assinatura já leva o nome.
 */
export function Lockup({ className }: LockupProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.9em]", className)} aria-hidden="true">
      <span className="[margin-right:-0.42em] font-display text-[0.8125em] tracking-[0.42em]">CREATIVE</span>
      <Monogram className="size-[2.6em] shrink-0" />
      <span className="[margin-right:-0.42em] font-display text-[0.8125em] tracking-[0.42em]">STUDIO</span>
    </span>
  );
}

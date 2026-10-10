import { ArrowUpRight } from "lucide-react";
import { ctaLabel } from "@/content/landing";
import { cn } from "@/lib/cn";
import { consultationLink } from "@/lib/whatsapp";

type ConsultationButtonProps = {
  /** "light" para fundos burgundy e charcoal; "dark" para o papel marfim. */
  tone?: "light" | "dark";
  size?: "md" | "sm";
  className?: string;
};

/**
 * A única ação da página: abre o WhatsApp da EBEN com a mensagem da
 * consultoria. Mesmo rótulo em todos os lugares.
 */
export function ConsultationButton({ tone = "light", size = "md", className }: ConsultationButtonProps) {
  return (
    <a
      href={consultationLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 font-sans font-semibold whitespace-nowrap",
        "transition-[background-color,color,transform] duration-200 ease-out active:translate-y-px",
        size === "md" ? "h-14 px-7 text-[0.9375rem]" : "h-10 px-5 text-sm",
        tone === "light"
          ? "bg-ivory text-burgundy hover:bg-gold hover:text-charcoal"
          : "bg-burgundy text-ivory hover:bg-burgundy-deep",
        className,
      )}
    >
      {ctaLabel}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn(
          "shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          size === "md" ? "size-5" : "size-4",
        )}
      />
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}

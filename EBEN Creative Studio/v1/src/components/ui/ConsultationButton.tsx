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
 *
 * Pílula com um brilho desfocado girando por trás do texto, adaptado do
 * botão escolhido pelo responsável pelo projeto (globals.css, bloco "Botão
 * da consultoria").
 */
export function ConsultationButton({ tone = "light", size = "md", className }: ConsultationButtonProps) {
  return (
    <a
      href={consultationLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("cta", tone === "dark" && "cta--dark", size === "sm" && "cta--sm", className)}
    >
      <span className="cta__glow" aria-hidden="true">
        <span />
      </span>
      <span className="cta__label">{ctaLabel}</span>
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}

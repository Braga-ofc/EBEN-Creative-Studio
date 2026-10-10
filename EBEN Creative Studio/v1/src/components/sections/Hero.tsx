import { ArrowDownRight } from "lucide-react";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { hero } from "@/content/landing";
import { StoryFrame } from "./StoryFrame";

/**
 * Primeira tela. No computador, a headline atravessa a página dos dois lados
 * do quadro vertical; no celular, o quadro ocupa a tela como um Story aberto
 * e o texto fica na base, sobre um véu burgundy.
 */
export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="hero">
      <div className="hero__inner shell">
        <StoryFrame className="hero__frame" />
        <div className="hero__veil" aria-hidden="true" />

        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-start">{hero.titleStart}</span>{" "}
            <span className="hero__title-end">{hero.titleEnd}</span>
          </h1>

          <p className="hero__sub type-lead text-mist">{hero.subtitle}</p>

          <div className="hero__actions">
            <ConsultationButton className="max-sm:w-full" />
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 py-2 font-sans text-[0.9375rem] font-semibold text-ivory underline decoration-gold/70 underline-offset-[0.4em] transition-colors hover:text-gold"
            >
              {hero.secondaryCta.label}
              <ArrowDownRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

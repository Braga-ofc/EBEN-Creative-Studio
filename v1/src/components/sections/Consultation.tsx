import { Star } from "@/components/brand/Star";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { consultation } from "@/content/landing";
import { contact } from "@/content/site";

/**
 * O convite: o único objeto de papel marfim da página, onde a oferta vira
 * ação. As bordas do papel se dissolvem no burgundy, com um gradiente de rosa
 * e dourado girando na faixa que some e um brilho girando ao contrário por
 * trás; a moldura fina fica na parte firme (globals.css, bloco "Convite").
 */
export function Consultation() {
  return (
    <section id="consultoria" aria-labelledby="consultoria-title" className="section-pad defer-render">
      <div className="shell">
        <div className="relative mx-auto max-w-[60rem]">
          <span aria-hidden="true" className="invite__glow" />
          <div className="on-ivory invite relative px-6 py-14 text-charcoal sm:px-12 lg:px-20 lg:py-20">
            <span aria-hidden="true" className="invite__edge">
              <span className="invite__edge-spin" />
            </span>
            <div aria-hidden="true" className="invite__frame" />

            <div className="relative text-center">
              <Star className="mx-auto h-7 w-auto text-burgundy" />
              <h2 id="consultoria-title" className="mx-auto mt-6 max-w-[16ch] type-h2 text-burgundy">
                {consultation.title}
              </h2>
              <p className="mx-auto mt-6 max-w-[54ch] type-lead text-ivory-muted">{consultation.text}</p>

              <ul className="mx-auto mt-10 grid max-w-[44rem] border-y border-charcoal/15 sm:grid-cols-3">
                {consultation.includes.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-4 type-body font-semibold text-charcoal max-sm:border-t max-sm:border-charcoal/10 max-sm:first:border-t-0 sm:border-l sm:border-charcoal/15 sm:py-6 sm:first:border-l-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-4">
                <ConsultationButton tone="dark" className="max-sm:w-full" />
                <p className="type-small text-ivory-muted">{contact.responseTime}</p>
              </div>

              <p className="mx-auto mt-10 max-w-[46ch] type-small text-ivory-muted italic">
                {consultation.scarcity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

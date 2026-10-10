import { Plus } from "lucide-react";
import { faq } from "@/content/landing";

/** Perguntas em <details>: funcionam sem JavaScript e o texto fica no HTML para busca. */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="section-pad defer-render">
      <div className="shell grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-8 lg:col-start-3">
          <h2 id="duvidas-title" className="type-h2">
            {faq.title}
          </h2>

          <div className="mt-12 border-b border-ivory/20 lg:mt-16">
            {faq.items.map((item) => (
              <details key={item.question} name="faq" className="faq-item group border-t border-ivory/20">
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 transition-colors hover:text-gold lg:py-7">
                  <h3 className="type-h3">{item.question}</h3>
                  <Plus
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="faq-icon mt-1 size-6 shrink-0 text-gold"
                  />
                </summary>
                <p className="max-w-[62ch] pb-8 type-body text-mist">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

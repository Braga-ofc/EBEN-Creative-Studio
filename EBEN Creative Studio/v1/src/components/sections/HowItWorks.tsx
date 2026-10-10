import { howItWorks } from "@/content/landing";

export function HowItWorks() {
  const { steps, guarantee, investment, costOfWaiting } = howItWorks;

  return (
    <section id="processo" aria-labelledby="processo-title" className="bg-charcoal section-pad defer-render">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-6">
          <h2 id="processo-title" className="type-h2">
            {howItWorks.title}
          </h2>

          {/* Uma linha contínua liga as cinco etapas, do primeiro contato ao acompanhamento. */}
          <ol className="mt-14">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative grid grid-cols-[3rem_1fr] gap-6 pb-12 after:absolute after:top-12 after:bottom-0 after:left-6 after:w-px after:bg-gold/45 last:pb-0 last:after:hidden"
              >
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-12 items-center justify-center rounded-full border border-gold bg-charcoal font-display text-xl text-gold"
                >
                  {index + 1}
                </span>
                <div className="pt-2">
                  <h3 className="type-h3">{step.title}</h3>
                  <p className="mt-2 max-w-[46ch] type-body text-ash">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-label="Garantias e investimento" className="lg:col-span-5 lg:col-start-8">
          <div className="border border-ivory/15 bg-charcoal-raised p-8 lg:p-10">
            <h3 className="type-h3">{guarantee.title}</h3>
            <ul className="mt-8 space-y-6">
              {guarantee.items.map((item) => (
                <li key={item.title}>
                  <p className="type-body font-semibold">{item.title}</p>
                  <p className="mt-1 type-small text-ash">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-ivory/15 pt-8">
            <h3 className="type-tag text-gold">{investment.title}</h3>
            <p className="mt-4 type-body text-ash">{investment.text}</p>
            <p className="mt-4 type-body">{investment.outcome}</p>
          </div>
        </aside>

        <p className="max-w-[40ch] type-quote lg:col-span-8">{costOfWaiting}</p>
      </div>
    </section>
  );
}

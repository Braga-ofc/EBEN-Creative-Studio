import { approach, services } from "@/content/landing";

export function Approach() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-burgundy-deep section-pad defer-render"
    >
      <div className="shell">
        <h2 id="servicos-title" className="rack-focus max-w-[17ch] type-h2">
          {approach.title}
        </h2>
        <p className="scroll-rise mt-6 type-lead text-mist">{approach.intro}</p>

        <ol className="scroll-stagger mt-12 grid gap-y-10 border-t border-ivory/20 pt-10 md:grid-cols-3 md:gap-x-0">
          {approach.steps.map((step, index) => (
            <li
              key={step.title}
              className="scroll-rise flex gap-5 md:border-l md:border-ivory/20 md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <span
                aria-hidden="true"
                className="scroll-pop font-display text-[2.5rem] leading-none text-gold italic"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="type-h3">{step.title}</h3>
                <p className="mt-2 type-body text-mist">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="scroll-rise mt-20 max-w-[40ch] type-lead lg:mt-28">{approach.transition}</p>

        <ul className="mt-10">
          {services.map((service) => (
            <li
              key={service.id}
              className="scroll-wipe grid gap-4 border-t border-ivory/20 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-x-6 lg:py-12"
            >
              <h3 className="type-display-row lg:col-span-7">{service.name}</h3>
              <p className="max-w-[38ch] type-lead text-mist lg:col-span-4 lg:col-start-9">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

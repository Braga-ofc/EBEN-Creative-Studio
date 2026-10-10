import { pains } from "@/content/landing";

export function Pains() {
  return (
    <section aria-labelledby="dor-title" className="section-pad defer-render">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <h2 id="dor-title" className="type-h2">
            {pains.title}
          </h2>
          <p className="mt-6 max-w-[34ch] type-lead text-mist">{pains.intro}</p>
        </div>

        <ul className="lg:col-span-6 lg:col-start-7">
          {pains.items.map((item) => (
            <li
              key={item}
              className="border-t border-ivory/20 py-6 type-pain first:border-t-0 first:pt-0 lg:py-8"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="type-h2 lg:col-span-10 lg:mt-12">
          {pains.closingStart} <em className="text-gold">{pains.closingEnd}</em>
        </p>
      </div>
    </section>
  );
}

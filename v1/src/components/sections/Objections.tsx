import { objections } from "@/content/landing";

export function Objections() {
  return (
    <section
      data-section="objecoes"
      aria-labelledby="objecoes-title"
      className="bg-burgundy-deep section-pad defer-render"
    >
      <div className="shell">
        <h2 id="objecoes-title" className="max-w-[18ch] type-h2">
          {objections.title}
        </h2>

        <dl className="mt-14 gap-x-16 md:columns-2 lg:mt-20">
          {objections.items.map((item) => (
            <div
              key={item.thought}
              className="mb-12 break-inside-avoid border-t border-ivory/20 pt-8 lg:mb-16"
            >
              <dt className="type-quote">{item.thought}</dt>
              <dd className="mt-4 type-body text-mist">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";
import { benefits } from "@/content/landing";

export function Benefits() {
  return (
    <section
      data-section="beneficios"
      aria-labelledby="beneficios-title"
      className="section-pad defer-render"
    >
      <div className="shell">
        <h2 id="beneficios-title" className="rack-focus type-h2">
          {benefits.title}
        </h2>

        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-24">
          {benefits.groups.map((group) => (
            <div key={group.title}>
              <h3 className="scroll-rise type-h3">{group.title}</h3>
              <ul className="mt-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="scroll-wipe flex gap-4 border-t border-ivory/20 py-5 first:border-t-0"
                  >
                    <Check
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="scroll-pop mt-1 size-5 shrink-0 text-gold"
                    />
                    <span className="type-lead">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

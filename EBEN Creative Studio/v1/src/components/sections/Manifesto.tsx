import { Star } from "@/components/brand/Star";
import { manifesto } from "@/content/landing";

const paragraphColumns = ["lg:col-span-4 lg:col-start-5", "lg:col-span-4 lg:col-start-9"];

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="border-t border-ivory/15 section-pad">
      <div className="shell">
        <h2 id="manifesto-title" className="rack-focus max-w-[15ch] type-statement">
          {manifesto.titleStart} <em className="text-gold">{manifesto.titleEnd}</em>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          {manifesto.paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 32)} className={`type-lead text-mist ${paragraphColumns[index]}`}>
              {paragraph}
            </p>
          ))}

          <p className="mt-6 flex items-start gap-4 md:col-span-2 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <Star className="mt-1.5 h-5 w-auto shrink-0 text-gold" />
            <span className="max-w-[34ch] type-quote">{manifesto.closing}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

import { Star } from "@/components/brand/Star";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { finalCta } from "@/content/landing";

export function FinalCta() {
  return (
    <section
      id="agendar"
      aria-labelledby="agendar-title"
      className="relative overflow-hidden border-t border-ivory/15 section-pad defer-render"
    >
      {/* Anel de lente: a forma circular do brandkit, sutil, atrás do fechamento. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[min(1120px,150vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25"
      />

      <div className="relative shell text-center">
        <Star className="mx-auto h-8 w-auto text-gold" />
        <h2 id="agendar-title" className="mx-auto mt-8 max-w-[14ch] type-statement">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-8 max-w-[52ch] type-lead text-mist">{finalCta.text}</p>
        <p className="mt-10 type-h3">{finalCta.closing}</p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <ConsultationButton className="max-sm:w-full" />
          <p className="type-small text-mist">{finalCta.note}</p>
        </div>

        <p className="mx-auto mt-20 max-w-[56ch] border-t border-ivory/20 pt-10 type-body text-mist italic">
          {finalCta.postscript}
        </p>
      </div>
    </section>
  );
}

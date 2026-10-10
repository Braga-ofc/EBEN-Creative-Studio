import Image from "next/image";
import { portfolio } from "@/content/landing";
import { portfolioItems, type PortfolioItem } from "@/content/portfolio";
import { cn } from "@/lib/cn";

const formatRatio: Record<PortfolioItem["format"], string> = {
  feed: "aspect-[4/5]",
  story: "aspect-[9/16]",
  film: "aspect-video",
};

const toneClass: Record<PortfolioItem["tone"], string> = {
  burgundy: "bg-burgundy",
  deep: "bg-burgundy-deep",
  raised: "bg-charcoal-raised",
  rose: "bg-rose-dim",
};

/** Posição de cada item na grade de 12 colunas, na ordem de `portfolioItems`. */
const placement = [
  "md:col-span-7 lg:col-span-6",
  "md:col-span-5 lg:col-span-4 lg:col-start-8 lg:mt-24",
  "md:col-span-5 lg:col-span-3 lg:col-start-2",
  "md:col-span-7 lg:col-span-7 lg:col-start-6 lg:self-end",
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="bg-charcoal section-pad defer-render"
    >
      <div className="shell">
        <div className="max-w-[46rem]">
          <h2 id="portfolio-title" className="type-h2">
            {portfolio.title}
          </h2>
          <p className="mt-6 type-lead text-ash">{portfolio.intro}</p>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-12 lg:mt-24 lg:gap-y-24">
          {portfolioItems.map((item, index) => (
            <li key={item.id} className={placement[index]}>
              <PortfolioCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="m-0">
      <div
        className={cn(
          "relative overflow-hidden",
          formatRatio[item.format],
          toneClass[item.tone],
          item.format === "story" && "max-md:w-4/5",
        )}
      >
        {item.media ? (
          <Image
            src={item.media.src}
            alt={item.media.alt}
            width={item.media.width}
            height={item.media.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 size-full object-cover"
            style={{ objectPosition: item.media.position ?? "50% 50%" }}
          />
        ) : (
          // Espaço reservado para a mídia do projeto, no formato em que ela é publicada.
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(110%_70%_at_50%_30%,rgb(247_234_215/0.07),transparent_70%)]"
          />
        )}
      </div>

      <figcaption className="mt-6">
        <h3 className="type-h3">{item.title}</h3>
        <p className="mt-2 type-tag text-gold">{item.service}</p>
        {item.figure ? (
          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="type-figure text-gold">{item.figure.value}</span>
            <span className="type-small text-ash">{item.figure.label}</span>
          </p>
        ) : null}
        <p className="mt-3 max-w-[42ch] type-body text-ash">{item.text}</p>
      </figcaption>
    </figure>
  );
}

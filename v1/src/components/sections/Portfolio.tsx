import { InstagramLink } from "@/components/ui/InstagramLink";
import { portfolio } from "@/content/landing";
import { portfolioCategories } from "@/content/portfolio";
import { agencyInstagram, portfolioInstagram } from "@/content/site";
import { PortfolioGallery } from "./PortfolioGallery";

/**
 * Portfólio separado como a pasta do Drive: Social Media, Videomaker,
 * Storymaker e Mobile Photo, cada um numa aba (PortfolioGallery).
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="overflow-x-clip bg-charcoal section-pad defer-render"
    >
      <div className="shell">
        <div className="max-w-[46rem]">
          <h2 id="portfolio-title" className="rack-focus type-h2">
            {portfolio.title}
          </h2>
          <p className="scroll-rise mt-6 type-lead text-ash">{portfolio.intro}</p>
        </div>

        <PortfolioGallery categories={portfolioCategories} />

        <div className="scroll-rise mt-20 flex flex-col items-start gap-8 border-t border-ivory/15 pt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
          <p className="max-w-[34ch] type-h3">
            Mais histórias, bastidores e coberturas no Instagram:{" "}
            <a
              href={portfolioInstagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline decoration-gold/50 transition-colors hover:text-ivory"
            >
              {portfolioInstagram.handle}
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>{" "}
            e{" "}
            <a
              href={agencyInstagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline decoration-gold/50 transition-colors hover:text-ivory"
            >
              {agencyInstagram.handle}
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>
            .
          </p>
          <div className="mb-10 flex gap-16 sm:mr-28 sm:mb-8">
            <InstagramLink profile={portfolioInstagram} />
            <InstagramLink profile={agencyInstagram} />
          </div>
        </div>
      </div>
    </section>
  );
}

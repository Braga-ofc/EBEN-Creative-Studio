import Image from "next/image";
import { Star } from "@/components/brand/Star";
import { InView } from "@/components/ui/InView";
import { about } from "@/content/landing";
import { aboutPortrait } from "@/content/site";
import { cn } from "@/lib/cn";

/** Brilhos de quatro pontas em volta do retrato: posição, tamanho e cor de cada um. */
const sparks = [
  "top-[6%] right-[8%] w-7 text-gold",
  "top-[14%] left-[4%] w-3 text-ivory",
  "bottom-[10%] left-[6%] w-5 text-ivory",
  "right-[2%] bottom-[22%] w-3.5 text-gold",
];

/**
 * Quem sou eu: a história da Geovana, entre o processo e o convite da
 * consultoria, que é para onde o último parágrafo leva o visitante.
 *
 * O retrato fica num círculo, como a lente da marca, cercado pelo anel
 * dourado deslocado, por um anel de lente com marcas de foco e o nome da
 * marca escrito em volta, por brilhos de quatro pontas e por um halo quente
 * por trás. Quando o retrato aparece na tela (InView), a íris abre, a foto sai
 * de um zoom fechado até o zoom leve e as camadas em volta entram girando
 * mais rápido, até assentarem numa volta lenta, uma para cada lado. Todo o
 * movimento está em globals.css, bloco "Quem sou eu".
 */
export function About() {
  return (
    <section
      id="quem-sou-eu"
      aria-labelledby="quem-sou-eu-title"
      className="about bg-burgundy-deep section-pad defer-render"
    >
      <Star className="about__watermark" />

      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-x-6">
        <InView
          threshold={0.35}
          className="about__stage relative mx-auto aspect-square w-full max-w-[24rem] sm:max-w-[28rem] lg:col-span-5 lg:max-w-[32rem]"
        >
          {/* De fora para dentro, cada camada gira para um lado: horário, anti-horário, horário... */}
          <span className="about__deco about__spin about__spin--far about__ripple about__ripple--far" />
          <span className="about__deco about__spin about__spin--near about__spin--ccw about__ripple about__ripple--near" />
          <span className="about__deco about__spin about__spin--glow about__glow" />

          <svg viewBox="0 0 400 400" className="about__deco about__dial" aria-hidden="true" focusable="false">
            <defs>
              <path
                id="about-dial-text"
                d="M 200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0"
              />
            </defs>
            <g className="about__spin about__spin--ticks">
              <circle cx="200" cy="200" r="188" pathLength="120" className="about__ticks" />
              <circle
                cx="200"
                cy="200"
                r="188"
                pathLength="12"
                className="about__ticks about__ticks--major"
              />
            </g>
            <g className="about__spin about__spin--text about__spin--ccw">
              <text className="about__dial-text">
                <textPath href="#about-dial-text" textLength="1000" lengthAdjust="spacing">
                  {about.ring}
                </textPath>
              </text>
            </g>
          </svg>

          <span className="about__deco about__spin about__spin--orbit about__orbit">
            <span className="about__ring" />
          </span>

          <div className="about__portrait">
            <Image
              src={aboutPortrait.src}
              alt={aboutPortrait.alt}
              width={aboutPortrait.width}
              height={aboutPortrait.height}
              sizes="(min-width: 1024px) 21rem, (min-width: 640px) 18rem, 64vw"
              className="about__photo size-full object-cover"
            />
          </div>

          <span className="about__deco about__spin about__spin--sparks about__spin--ccw about__sparks">
            {sparks.map((position, index) => (
              <Star
                key={position}
                className={cn("about__spark absolute h-auto", position, `about__spark--${index + 1}`)}
              />
            ))}
          </span>
        </InView>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 id="quem-sou-eu-title" className="rack-focus type-statement">
            {about.titleStart} <em className="text-gold">{about.titleEnd}</em>
          </h2>

          <div className="mt-10 space-y-6 lg:mt-12">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 32)}
                className={cn(
                  "about__reveal max-w-[60ch] type-lead",
                  index === 0 ? "text-ivory" : "text-mist",
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="about__reveal mt-12 flex items-center gap-4">
            <span aria-hidden="true" className="about__rule h-px w-14 bg-gold" />
            <span className="type-quote text-ivory">{about.signature}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

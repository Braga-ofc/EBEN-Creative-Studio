import Image from "next/image";
import { Star } from "@/components/brand/Star";
import { manifesto } from "@/content/landing";
import { manifestoPortrait } from "@/content/site";

const paragraphColumns = ["lg:col-span-4 lg:col-start-5", "lg:col-span-4 lg:col-start-9"];

/**
 * O conceito da marca, com a foto da Geovana em segundo plano do lado
 * esquerdo, apagada no burgundy. A foto fica dentro do bloco que vem depois do
 * título, para ser posicionada a partir dele: a cabeça dela começa sempre
 * abaixo do título, em qualquer tela. Abaixo de 1024px, os parágrafos descem
 * para a foto aparecer entre eles e o título (globals.css, bloco "Manifesto").
 */
export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="manifesto border-t border-ivory/15 section-pad">
      <div className="shell">
        <h2 id="manifesto-title" className="rack-focus max-w-[15ch] type-statement">
          {manifesto.titleStart} <em className="text-gold">{manifesto.titleEnd}</em>
        </h2>

        <div className="relative mt-14 grid gap-8 max-lg:pt-[17rem] md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <div className="manifesto__portrait" aria-hidden="true">
            <Image
              src={manifestoPortrait.src}
              alt=""
              width={manifestoPortrait.width}
              height={manifestoPortrait.height}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="size-full"
            />
          </div>

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

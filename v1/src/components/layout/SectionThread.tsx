import { Star } from "@/components/brand/Star";
import { cn } from "@/lib/cn";

type SectionThreadProps = {
  /**
   * "start" fica na margem, em cima do fio principal (SectionSpine);
   * "center" é um ramo: sai da margem, atravessa até o meio e desce até os
   * blocos centralizados (o convite da consultoria e o fechamento).
   */
  align?: "start" | "center";
};

/**
 * Fio dourado entre duas seções: ocupa o respiro do fim de uma e do começo da
 * outra, se desenha com a rolagem (com uma faísca na ponta) e acende a estrela
 * da marca na divisa, que solta uma onda de luz. Fica
 * fora das seções, com altura zero, para nenhuma delas cortar o fio.
 * Movimento em globals.css, bloco "Fio dourado".
 */
export function SectionThread({ align = "start" }: SectionThreadProps) {
  return (
    <div aria-hidden="true" className={cn("thread", align === "center" && "thread--center")}>
      <div className="thread__track shell">
        <span className="thread__branch" />
        <span className="thread__line" />
        <span className="thread__spark" />
        <span className="thread__burst" />
        <Star className="thread__star" />
      </div>
    </div>
  );
}

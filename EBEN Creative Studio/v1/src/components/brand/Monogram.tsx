import { MONOGRAM_BOX, SPRITE_URL } from "./symbols";

type MonogramProps = {
  className?: string;
  /** Nome lido por leitores de tela. Sem título, o monograma é decorativo. */
  title?: string;
};

const { x, y, width, height } = MONOGRAM_BOX;

/** Monograma oficial da EBEN, desenhado a partir do sprite da marca. Assume a cor do texto. */
export function Monogram({ className, title }: MonogramProps) {
  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <use href={`${SPRITE_URL}#monogram`} x={x} y={y} width={width} height={height} />
    </svg>
  );
}

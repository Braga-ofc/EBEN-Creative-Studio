import { SPRITE_URL, STAR_BOX } from "./symbols";

type StarProps = {
  className?: string;
};

const { x, y, width, height } = STAR_BOX;

/** Estrela de quatro pontas do monograma. Sempre decorativa e em pouca quantidade. */
export function Star({ className }: StarProps) {
  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`${SPRITE_URL}#star`} x={x} y={y} width={width} height={height} />
    </svg>
  );
}

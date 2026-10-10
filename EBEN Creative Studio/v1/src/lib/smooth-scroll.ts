import type Lenis from "lenis";

/**
 * Acesso à instância do Lenis para outros componentes, como o menu do celular,
 * que pausa a rolagem suave enquanto está aberto. Quando o Lenis não está
 * ativo (movimento reduzido ou antes de carregar), as funções não fazem nada.
 */
let instance: Lenis | null = null;

export function registerSmoothScroll(lenis: Lenis | null): void {
  instance = lenis;
}

export function pauseSmoothScroll(): void {
  instance?.stop();
}

export function resumeSmoothScroll(): void {
  instance?.start();
}

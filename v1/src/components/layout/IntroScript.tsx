/**
 * Roda antes da primeira pintura: se a abertura já passou nesta sessão, marca
 * o <html> com data-intro="seen" e o CSS esconde a tela de abertura. Falha ao
 * ler a sessionStorage (navegação privada, bloqueio) só faz a abertura tocar.
 */
const script = `(function(){try{var s=window.sessionStorage;if(s.getItem("eben-intro")){document.documentElement.setAttribute("data-intro","seen")}else{s.setItem("eben-intro","1")}}catch(e){}})();`;

export function IntroScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

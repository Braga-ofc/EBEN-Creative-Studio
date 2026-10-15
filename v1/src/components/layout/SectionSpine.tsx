/**
 * Fio principal: uma linha dourada contínua na margem esquerda, do começo do
 * manifesto ao fim das perguntas, que liga os fios das divisas (SectionThread)
 * num só. A linha de base fica sempre visível e bem apagada; por cima, um
 * traço brilhante com uma faísca na ponta acompanha a leitura, até onde a
 * página já foi rolada. Fica numa camada por cima das seções, na margem, sem
 * cruzar texto. Movimento em globals.css, bloco "Fio dourado".
 */
export function SectionSpine() {
  return (
    <div aria-hidden="true" className="spine">
      <div className="spine__lane shell">
        <span className="spine__track" />
        <span className="spine__window">
          <span className="spine__progress" />
        </span>
      </div>
    </div>
  );
}

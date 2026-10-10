---
name: EBEN Creative Studio, landing page v1
description: Campo burgundy, sala de exibição charcoal e um Story vertical com três fotos passando em carrossel.
colors:
  burgundy: "#8f0012"
  burgundy-deep: "#6e000e"
  ivory: "#f7ead7"
  ivory-muted: "#5d544f"
  mist: "#e8c9bb"
  gold: "#c6a36a"
  charcoal: "#21191a"
  charcoal-raised: "#2c2323"
  ash: "#b7ab9e"
  rose: "#c58d91"
  rose-dim: "#553e40"
typography:
  display:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.25rem, 0.8rem + 4.2vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.022em"
    fontVariation: "'WONK' 0"
  statement:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.3rem + 4.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.35rem + 2.6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  index:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.2rem + 5.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 2.8vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.8vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.05rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.25
  lead:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, Segoe UI, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  screen: "14px"
  pill: "10rem"
  lens: "9999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(96px, 5.5rem + 5vw, 176px)"
  container: "1440px"
  column-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ivory}"
    textColor: "#570606"
    rounded: "{rounded.pill}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.charcoal}"
  button-on-ivory:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "15px 30px"
  button-on-ivory-hover:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.charcoal}"
  button-compact:
    backgroundColor: "{colors.ivory}"
    textColor: "#570606"
    rounded: "{rounded.pill}"
    padding: "9px 20px"
  story-frame:
    backgroundColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    size: "9:16"
  invitation-card:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "80px"
  process-node:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.gold}"
    rounded: "{rounded.lens}"
    size: "48px"
---

# Design System: EBEN Creative Studio, landing page v1

## Overview

**Creative North Star: "O Story que fica"**

A página inteira mora no campo burgundy da marca, a cor que carrega a versão principal do logo, e abre com um Story vertical no formato que o público consome todo dia: três fotos da Geovana passam lado a lado, uma por barra, com a estrela da marca parada por cima como marca-d'água. Esse é o gesto do sistema, e ele aparece uma vez.

A densidade é baixa e o ritmo é de cinema: blocos de texto curtos com muito espaço, uma sala de exibição charcoal para o portfólio e o processo, e um único objeto de papel marfim, o convite da consultoria, onde a oferta vira ação. O tom é calmo e confiante, sem os exageros de páginas de software: nada de gradiente roxo, 3D brilhante, cantos amigáveis ou grade de ícones.

Fraunces dá a emoção nos títulos e Manrope dá a clareza no texto, como define o brandkit. Dourado e rosa existem em pouca quantidade e só fazem trabalho: fios, a estrela de quatro pontas, números grandes e foco.

**Key Characteristics:**
- Campo burgundy dominante, com charcoal como sala de exibição e marfim como papel.
- Um Story 9:16 na primeira tela, com a headline atravessando a página dos dois lados.
- Fraunces com eixo óptico e sem letras "wonky"; Manrope no texto e nos botões.
- Cantos retos em quadros e cartões; a exceção é o botão da consultoria, uma pílula com brilho girando por trás do texto.
- Grão de filme fixo e sutil sobre a página inteira.

## Colors

Uma cor principal dominante, burgundy, com dois neutros de mundo (charcoal e marfim) e dois acentos raros (dourado e rosa).

### Primary
- **Burgundy da Marca** (burgundy): chão da maior parte das seções, fundo do cabeçalho e do véu da hero no celular. É a cor da versão principal do logo.
- **Burgundy Profundo** (burgundy-deep): seções alternadas no mesmo campo (serviços e objeções) e hover dos botões burgundy.

### Secondary
- **Ouro Champanhe** (gold): fios, estrela de quatro pontas, números de resultado, itálicos de destaque em títulos grandes, ícones e contorno de foco. Sobre burgundy só aparece em texto a partir de 24px (contraste 4,1:1).

### Tertiary
- **Rosa Empoeirado** (rose): hover do botão da consultoria, com texto charcoal (6,2:1).

### Neutral
- **Marfim Quente** (ivory): todo o texto sobre fundos escuros (8,1:1 no burgundy, 14,5:1 no charcoal), o botão principal e o convite da consultoria.
- **Névoa** (mist): texto secundário sobre burgundy e burgundy profundo (6,2:1 e 8,1:1).
- **Charcoal Profundo** (charcoal): sala de exibição (portfólio, processo, rodapé) e fundo do quadro do Story.
- **Charcoal Elevado** (charcoal-raised): superfícies sobre charcoal, como o quadro de garantias e o fundo das miniaturas do portfólio enquanto carregam.
- **Cinza Quente** (ash): texto secundário sobre charcoal (7,7:1).
- **Marfim Apagado** (ivory-muted): texto secundário sobre o papel marfim (6,2:1).
- **Rosa Sombrio** (rose-dim): sem uso desde que as mídias do portfólio entraram; fica como reserva.

### Named Rules
**The Campo Burgundy Rule.** Burgundy é o chão, não o acento. A página nunca vira um fundo creme com detalhes vermelhos; o marfim aparece como texto e como um único objeto de papel.

**The Ouro Raro Rule.** Dourado nunca é texto corrido e nunca é texto pequeno sobre burgundy. Ele marca, não preenche.

## Typography

**Display Font:** Fraunces (com Iowan Old Style e Georgia como reserva)
**Body Font:** Manrope (com Segoe UI e system-ui como reserva)

**Character:** Fraunces para emoção e Manrope para clareza, como no brandkit. A Fraunces usa o eixo óptico (opsz) automático, que deixa os títulos grandes mais finos e contrastados, e o eixo WONK fixado em 0, para o h itálico continuar legível em português.

### Hierarchy
- **Display** (600, clamp de 3,25 a 5,25rem no computador, 2,75rem no celular, 0,98): só a headline da hero, dividida dos dois lados do Story.
- **Statement** (500, clamp de 2,5 a 6rem, 1,02): frases de impacto, como o slogan no manifesto e o fechamento.
- **Headline** (500, clamp de 2,125 a 4rem, 1,06): títulos de seção.
- **Index** (500, clamp de 2,75 a 6rem, 1): nomes das três frentes em linhas de índice.
- **Figure** (600, clamp de 2,5 a 4,25rem, 1, algarismos alinhados): números de resultado dos cases, em dourado.
- **Title** (500, clamp de 1,375 a 1,75rem, 1,2): títulos de item, perguntas e etapas.
- **Quote** (400 itálico, clamp de 1,375 a 2rem, 1,25): pensamentos do visitante, frases de transição e legendas do Story.
- **Lead** (400, clamp de 1,0625 a 1,25rem, 1,6): parágrafos de apoio, até 65 caracteres por linha.
- **Body** (400, 1rem, 1,65) e **Small** (400, 0,875rem, 1,55): texto corrido e notas.
- **Label** (600, 0,75rem, 0,14em, caixa alta): metadados abaixo de um título (o serviço de cada case) e títulos curtos de rodapé. Nunca acima de outro título.

### Named Rules
**The Itálico de Destaque Rule.** A ênfase dentro de um título vem do itálico da própria Fraunces, em dourado, e só a partir de 24px. Nunca outra família.

## Layout

Contêiner de até 1440px com margem lateral fluida de 20 a 48px e grade de 12 colunas com 24px entre colunas no computador. Seções com respiro vertical de 96 a 176px. A primeira tela no computador usa três colunas (1fr, largura do Story, 1fr) com subgrid para a headline; no tablet mantém a mesma ideia com fonte menor; no celular o Story ocupa a tela e o texto fica na base. Abaixo da primeira tela, cada seção usa uma família de layout diferente: declaração em largura total com foto em segundo plano, abas com capas verticais, coluna fixa com lista, linhas de índice, colunas agrupadas, linha do tempo, objeto central, colunas de texto e sanfona. As seções abaixo da primeira tela usam `content-visibility: auto` para o celular não calcular o que ainda não apareceu.

A rolagem é suave e lenta como um travelling de câmera: o Lenis interpola a rodinha do mouse (lerp 0,1) e conduz as viagens por âncora com aceleração e desaceleração simétricas (easeInOutQuart, de 0,6 a 1,6 segundo conforme a distância), sempre parando abaixo do cabeçalho fixo (scroll-padding-top de 96px). O toque do celular continua nativo e o movimento reduzido desliga a suavização por completo.

## Elevation & Depth

Sem sombras, fora o contorno quase invisível do botão da consultoria. A profundidade vem da troca de campo (burgundy, burgundy profundo, charcoal), de superfícies um tom acima (charcoal-raised), do único objeto de papel marfim com moldura interna fina e do grão de filme fixo por cima de tudo, com 5,5% de opacidade.

### Named Rules
**The Sem Sombra Rule.** Nenhuma superfície flutua. Camadas se separam por cor de campo e por fio de 1px.

## Shapes

Cantos retos (0px) em quadros, cartões e campos. Duas exceções: a pílula (10rem) do botão da consultoria e os cantos de 14px dos prints de tela do portfólio, como a tela do celular. O círculo é da marca: monograma, anel de lente atrás do fechamento e os nós numerados do processo (48px). Fios de 1px em marfim com 15% a 20% de opacidade organizam listas e seções; fios dourados marcam a linha contínua do processo e o rodapé.

## Components

### Buttons
- **Botão da consultoria:** adaptado do botão escolhido pelo responsável pelo projeto. Pílula (10rem) com padding de 15px por 30px, fundo marfim e texto #570606 em Manrope 700 de 15px. Por trás do texto, um círculo de 10rem com gradiente vermelho, marfim e âmbar, desfocado (20px) e com 50% de opacidade, gira sem parar (3s por volta). O mesmo rótulo, "Agendar uma consultoria", em todos os lugares, com aviso para leitores de tela de que abre o WhatsApp numa nova aba.
- **Hover / Focus:** fundo rosa com texto charcoal, e o brilho encolhe para 8rem e fica mais fraco; ao pressionar, o botão encolhe para 97%. Foco com contorno dourado de 2px e 3px de afastamento (burgundy sobre o papel marfim). O texto fica sempre por cima do brilho, com contraste de 4,5:1 ou mais no pior ponto.
- **Sobre marfim:** fundo burgundy, texto marfim e brilho mais escuro (vermelho, dourado e burgundy profundo, 40%).
- **Compacto:** padding de 9px por 20px e texto de 14px, no cabeçalho.
- **Link secundário:** "Ver portfólio" em texto sublinhado com fio dourado e seta diagonal.

### Cards / Containers
- **Convite da consultoria:** papel marfim sem arredondamento, moldura interna de 1px em burgundy com 25% de opacidade, estrela no topo, título burgundy e três itens separados por fios.
- **Quadro de garantias:** charcoal-raised com fio de 1px.
- **Portfólio:** abas iguais às pastas do Drive (Social Media, Videomaker, Storymaker e Mobile Photo), com fio dourado sob a aba ativa; no celular a fileira rola de lado. Social Media mostra um case por linha, com nome e número à esquerda e, à direita, o vídeo principal do case em 16:9, rodando sozinho, sem som e em loop enquanto está na tela, com o aviso "Ver com som" (os prints descem para baixo do texto) ou, sem vídeo, os prints de tela; Videomaker e Storymaker mostram um cartão por cliente, com capa 9:16, nome e contagem ("3 vídeos"); Mobile Photo é uma grade de fotos, como o perfil do Instagram.
- **Visualizador do portfólio:** um dialog em tela cheia sobre charcoal quase opaco, com o nome do grupo e o botão de fechar no topo, a mídia no centro (vídeo no player do Drive, em pé ou deitado; foto inteira) e "anterior, 1 de 3, próximo" na base. As setas do teclado navegam e Esc fecha.

### Navigation
Cabeçalho fixo de 72px (64px no celular) em burgundy com fio inferior. Assinatura CREATIVE, monograma e STUDIO à esquerda, quatro âncoras em Manrope 500 de 14px na cor névoa (marfim com sublinhado dourado no hover) e botão compacto à direita. Abaixo de 1024px, as âncoras viram um painel em tela cheia com links em Fraunces; abaixo de 768px, uma barra fixa com o botão principal aparece depois da hero e some perto das seções que já têm o botão.

### Story da hero (componente assinatura)
Quadro 9:16 com três fotos da Geovana em carrossel, uma por barra de 2px no topo. Cada foto fica 3,2s parada e desliza em 0,8s para a próxima, no instante em que a sua barra enche; depois da terceira, o ciclo recomeça sem voltar correndo. Cada foto tem a sua legenda em Fraunces itálica na base (some no celular, onde o texto da hero ocupa a base). A estrela da marca fica parada no centro como marca-d'água, bem apagada, em marfim com 18% de opacidade e contorno escuro fino. Mouse em cima e foco pelo teclado pausam; o botão de pausa no canto de cima pausa de vez; clique ou toque pula para a próxima foto. Roda mesmo com movimento reduzido, por decisão do responsável pelo projeto.

### Manifesto
A Geovana em segundo plano, grande e do lado esquerdo, filmando com o celular erguido (foto espelhada para olhar para o texto). A foto é posicionada pela altura da cabeça, que começa sempre abaixo do título; os braços e o celular sobem atrás do título, apagados. O modo de mistura luminosity a pinta com o burgundy, e máscaras dissolvem o topo, a base e a borda que encosta nos parágrafos. Abaixo de 1024px, os parágrafos descem e ela aparece numa faixa entre o título e o texto. Contraste medido sobre a foto: 3,1:1 ou mais no título dourado (texto grande) e 4,6:1 ou mais nos parágrafos.

### Linha do processo
Cinco nós circulares de 48px com algarismo em Fraunces dourado, ligados por um fio dourado contínuo que termina no último nó.

### Ícone do Instagram
Reprodução do componente do vídeo de referência do responsável pelo projeto, por isso fora das regras de cor e de canto da página: quadrado de 55px com cantos de 15px e o gradiente do Instagram, e quatro camadas com fio laranja por trás. No hover ou no foco, o conjunto gira (rotate -35deg, skew 20deg), as camadas se abrem em leque até 20px, o rótulo laranja desce ("BackStage" no perfil @geoo.silvaz, "Agência" no @eben.creative_) e um cartão escuro com foto, nome e @ sobe de trás do ícone. Em telas sem mouse o cartão não aparece. Fica no fim do portfólio, porque é onde o visitante procura mais trabalhos.

### Perguntas frequentes
Sanfona com `<details>` exclusivo (uma aberta por vez), título em Fraunces 500, sinal de mais dourado que gira 45 graus ao abrir e altura animada onde o navegador permite.

## Do's and Don'ts

### Do:
- **Do** manter burgundy (#8f0012) como chão da maior parte da página e o marfim como texto e papel.
- **Do** usar um único rótulo para a ação principal: "Agendar uma consultoria".
- **Do** mostrar a mídia no formato em que ela foi publicada no visualizador do portfólio; na grade, as capas são verticais, como no perfil do Instagram.
- **Do** manter o itálico de destaque na própria Fraunces, em dourado, só a partir de 24px.
- **Do** separar camadas por campo de cor e fio de 1px.

### Don't:
- **Don't** usar gradiente roxo, formas 3D brilhantes, fotos de banco sem tratamento, cantos amigáveis ou grades de ícones, como define o briefing.
- **Don't** colocar rótulo em caixa alta acima de um título; metadados vão abaixo.
- **Don't** usar dourado em texto pequeno sobre burgundy (contraste 4,1:1).
- **Don't** arredondar quadros ou cartões; as exceções são a pílula do botão da consultoria e os cantos de tela dos prints.
- **Don't** usar travessão em nenhum texto da página.

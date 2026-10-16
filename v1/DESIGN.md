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

A página inteira mora no campo burgundy da marca, a cor que carrega a versão principal do logo, e, depois da tela de abertura, mostra um Story vertical no formato que o público consome todo dia: três fotos da Geovana passam lado a lado, uma por barra, com a estrela da marca parada por cima como marca-d'água. Esse é o gesto do sistema, e ele aparece uma vez.

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
- **Burgundy Profundo** (burgundy-deep): seções alternadas no mesmo campo (serviços, "Quem sou eu?" e objeções) e hover dos botões burgundy.

### Secondary
- **Ouro Champanhe** (gold): fios, estrela de quatro pontas, números de resultado, itálicos de destaque em títulos grandes, ícones e contorno de foco. Sobre burgundy só aparece em texto a partir de 24px (contraste 4,1:1).

### Tertiary
- **Rosa Empoeirado** (rose): hover do botão da consultoria, com texto charcoal (6,2:1), e os brilhos de luz (halo do botão, brilho atrás do vídeo do portfólio, retrato do "Quem sou eu?" e bordas do convite).

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

Sem sombras projetadas, fora o contorno quase invisível do botão da consultoria. A profundidade vem da troca de campo (burgundy, burgundy profundo, charcoal), de superfícies um tom acima (charcoal-raised), do único objeto de papel marfim, que se dissolve nas bordas, e do grão de filme fixo por cima de tudo, com 5,5% de opacidade. A luz entra como brilho, nunca como sombra: o halo rosa do botão da consultoria, o brilho girando atrás do vídeo do portfólio, o halo do retrato do "Quem sou eu?", as cores girando nas bordas do convite, o brilho dourado do fio que liga as seções e o dos nós do processo quando acendem.

### Named Rules
**The Sem Sombra Rule.** Nenhuma superfície flutua. Camadas se separam por cor de campo e por fio de 1px; brilhos de luz são permitidos, sombras projetadas não.

## Shapes

Cantos retos (0px) em quadros, cartões e campos. Duas exceções: a pílula (10rem) do botão da consultoria e os cantos de 14px dos prints de tela do portfólio, como a tela do celular. O círculo é da marca: monograma, anel de lente atrás do fechamento, os nós numerados do processo (48px), o retrato do "Quem sou eu?" e as fotos de perfil das clientes. Fios de 1px em marfim com 10% a 20% de opacidade organizam listas, seções e o rodapé; fios dourados marcam a linha contínua do processo, o fio que liga as seções e a assinatura do "Quem sou eu?".

## Components

### Buttons
- **Botão da consultoria:** adaptado do botão escolhido pelo responsável pelo projeto. Pílula (10rem) com padding de 15px por 30px, fundo marfim e texto #570606 em Manrope 700 de 15px. Por trás do texto, um círculo de 10rem com gradiente vermelho, rosa, marfim, dourado e âmbar, desfocado (20px) e com 50% de opacidade, gira sem parar (3s por volta). Em volta, um halo rosa (dourado no papel marfim) respira a cada 3,2s, e a cada 5,5s uma faixa dourada fina atravessa a pílula por baixo do texto, como um reflexo; no hover o reflexo passa mais rápido e o botão sobe 1px. Com movimento reduzido, halo e reflexo param. O mesmo rótulo, "Agendar uma consultoria", em todos os lugares, com aviso para leitores de tela de que abre o WhatsApp numa nova aba.
- **Hover / Focus:** fundo rosa com texto charcoal, e o brilho encolhe para 8rem e fica mais fraco; ao pressionar, o botão encolhe para 97%. Foco com contorno dourado de 2px e 3px de afastamento (burgundy sobre o papel marfim). O texto fica sempre por cima do brilho, com contraste de 4,5:1 ou mais no pior ponto.
- **Sobre marfim:** fundo burgundy, texto marfim e brilho mais escuro (vermelho, dourado e burgundy profundo, 40%).
- **Compacto:** padding de 9px por 20px e texto de 14px, no cabeçalho.
- **Link secundário:** "Ver portfólio" em texto sublinhado com fio dourado e seta diagonal.

### Cards / Containers
- **Convite da consultoria:** papel marfim firme no meio e dissolvido nas quatro bordas no burgundy (16px no celular, 36px no tablet, 60px no computador, sempre menos que o respiro interno). O papel some numa rampa em curva, sem deixar ver onde termina. Na faixa que se dissolve, manchas de luz rosa e dourada em cor cheia, desfocadas (22px) e separadas por intervalos curtos, giram em volta do cartão (uma volta a cada 10s), e por trás um círculo de cores bem desfocado (64px) gira ao contrário (14s), fazendo a passagem entre o marfim e o burgundy; só rotação, desenhada uma vez, e parada com movimento reduzido; moldura interna de 1px em burgundy com 25% de opacidade logo depois da borda dissolvida, estrela no topo, título burgundy e três itens separados por fios.
- **Quadro de garantias:** charcoal-raised com fio de 1px.
- **Portfólio:** abas iguais às pastas do Drive (Social Media, Videomaker, Storymaker e Mobile Photo), com fio dourado sob a aba ativa; no celular a fileira rola de lado. Social Media mostra um case por linha, com a foto de perfil da cliente (círculo de 64px, 76px no computador, com o anel dourado deslocado), nome e número à esquerda e, à direita, o vídeo principal do case em 16:9, rodando sozinho, sem som e em loop enquanto está na tela (os prints descem para baixo do texto) ou, sem vídeo, os prints de tela. O vídeo principal fica num quadro com brilho girando por trás (um círculo de burgundy, dourado e rosa, achatado e desfocado, que gira e respira só enquanto o vídeo toca), fio dourado de 1px a 6px do vídeo, cantos de visor de 2px que se fecham no hover e a estrela dourada no canto de cima, que gira 90 graus no hover; Videomaker e Storymaker mostram um cartão por cliente, com capa 9:16, nome e contagem ("3 vídeos"); Mobile Photo é uma grade de fotos, como o perfil do Instagram.
- **Visualizador do portfólio:** um dialog em tela cheia sobre charcoal quase opaco, com o nome do grupo e o botão de fechar no topo, a mídia no centro (vídeo no player do Drive ou, no caso do vídeo da Sued, o próprio arquivo do site com controles, em pé ou deitado; foto inteira) e "anterior, 1 de 3, próximo" na base. As setas do teclado navegam e Esc fecha.

### Navigation
Cabeçalho fixo de 72px (64px no celular) em burgundy com fio inferior. Assinatura CREATIVE, monograma e STUDIO à esquerda, cinco âncoras em Manrope 500 de 14px na cor névoa (marfim com sublinhado dourado no hover), a 24px uma da outra até 1279px e a 36px a partir daí, e botão compacto à direita a partir de 768px. Abaixo de 1024px, as âncoras viram um painel em tela cheia com links em Fraunces; abaixo de 768px, uma barra fixa com o botão principal aparece depois da hero e some perto das seções que já têm o botão.

### Fio dourado (a página inteira ligada)
Um fio só liga todas as seções. O fio principal corre pela margem esquerda, no meio do respiro entre a borda da tela e o texto (10px no celular, 24px no computador), do manifesto às perguntas, sem cruzar texto: a linha de base fica sempre visível (1px, dourado a 24%) e, por cima, um traço brilhante de 2px com uma faísca marfim na ponta preenche a linha até a altura da leitura (60% da tela), acompanhando a rolagem. Em cada divisa entre seções, um trecho mais forte se desenha por cima, com a sua própria faísca, e acende a estrela da marca (24px, com brilho), que entra girando com um estalo e solta uma onda de luz. Nos dois convites, o fio faz um ramo em L: sai da margem na divisa, atravessa até o meio e desce até encostar no convite da consultoria e na estrela do fechamento. Tudo é animação ligada à rolagem, só com CSS e transform; sem suporte ou com movimento reduzido, o fio aparece inteiro e parado.

### Entradas com a rolagem
Os títulos de seção entram em foco (desfoque de 20px, 96% do tamanho). Textos sobem 3rem com desfoque; o vídeo do portfólio, o quadro de garantias e outros blocos chegam de 80% do tamanho; fotos redondas e marcas (✓, números das etapas) surgem girando; listas de serviços e de benefícios entram por varredura lateral, alternando o lado; a lista de dores acende a frase que está na faixa de leitura; e o fio do "Como funciona" se desenha etapa por etapa, com cada nó acendendo. Tudo termina pouco depois de o bloco entrar inteiro na tela.

### Abertura (a lente abrindo)
Na primeira visita da sessão, a página começa coberta pelo campo burgundy: o monograma marfim surge no centro com um leve desfoque, um anel dourado de 1px se desenha em volta dele e a estrela dourada aparece girando no canto do anel. Aos 0,8s a lente abre do centro para as bordas (uma máscara com furo redondo que cresce em 0,9s) enquanto monograma e anel avançam na direção de quem olha e somem; aos 1,7s a tela de abertura sai. Logo atrás, a primeira tela entra: a foto do Story sai do desfoque (18px) e de um zoom de 1,08, as duas metades da headline deslizam 56px dos lados até a foto (no celular, a headline inteira sobe), o subtítulo e os botões sobem em seguida e o cabeçalho desce do topo. Nas visitas seguintes da mesma sessão, só a entrada da primeira tela acontece, sem espera. Um toque pula a abertura; com movimento reduzido, nada disso acontece. A foto do Story nunca fica invisível, para não atrasar o LCP.

### Story da hero (componente assinatura)
Quadro 9:16 com três fotos da Geovana em carrossel, uma por barra de 2px no topo. Cada foto fica 3,2s parada e desliza em 0,8s para a próxima, no instante em que a sua barra enche; depois da terceira, o ciclo recomeça sem voltar correndo. Cada foto tem a sua legenda em Fraunces itálica na base (some no celular, onde o texto da hero ocupa a base). A estrela da marca fica parada no centro como marca-d'água, bem apagada, em marfim com 18% de opacidade e contorno escuro fino. Mouse em cima e foco pelo teclado pausam; o botão de pausa no canto de cima pausa de vez; clique ou toque pula para a próxima foto. Roda mesmo com movimento reduzido, por decisão do responsável pelo projeto.

### Manifesto
A Geovana em segundo plano, grande e do lado esquerdo, filmando com o celular erguido (foto espelhada para olhar para o texto). A foto é posicionada pela altura da cabeça, que começa sempre abaixo do título; os braços e o celular sobem atrás do título, apagados. O modo de mistura luminosity a pinta com o burgundy, e máscaras dissolvem o topo, a base e a borda que encosta nos parágrafos. Abaixo de 1024px, os parágrafos descem e ela aparece numa faixa entre o título e o texto. Contraste medido sobre a foto: 3,1:1 ou mais no título dourado (texto grande) e 4,6:1 ou mais nos parágrafos. Com a rolagem, a foto anda mais devagar que a página (8rem para cima e para baixo durante a passagem), como o fundo de uma cena mais distante, e a seção corta o que passa das bordas com `overflow: clip`, para as entradas dos textos se medirem pela página.

### Quem sou eu
Entre o processo e o convite da consultoria, em burgundy profundo. A foto de estúdio da Geovana (a mesma da primeira barra do Story) num círculo, como a lente da marca, com zoom leve (1,15) do cabelo à cintura. O círculo ocupa 65% de um palco quadrado cheio de camadas, de fora para dentro: duas ondas largas em fio dourado apagado (122% e 150% do palco), um halo quente de dourado e rosa que respira, um anel de lente com marcas de foco douradas (120 finas e 12 grossas) e "EBEN · CREATIVE STUDIO" escrito em volta em Manrope caixa alta, o anel dourado de 1px do tamanho do retrato deslocado para baixo e para a direita, e quatro brilhos de quatro pontas que piscam. Ao lado, "Quem sou *eu?*" em Statement com o itálico dourado, três parágrafos em Lead (o primeiro em marfim, os outros em névoa) e a assinatura em Fraunces itálica depois de um fio dourado. A estrela da marca, enorme e com 4,5% de opacidade, fica atrás do texto.

**Movimento (a lente abrindo):** quando o retrato aparece na tela (o componente InView marca a entrada), a íris abre do centro em 1,6s, com um aro dourado que cresce junto com a abertura e some no fim, e a foto sai de um zoom de 1,6 até 1,15 em 2,4s. Ao mesmo tempo, as camadas em volta acendem e entram girando mais rápido (de 90 a 240 graus a mais, desacelerando em 3,2s) até assentarem numa volta lenta e contínua, de 40s a 200s por volta, para não tirar o foco da leitura. Os sentidos se alternam de fora para dentro: ondas pontilhada (horário) e tracejada (anti-horário), halo (horário), marcas de foco (horário), nome da marca (anti-horário), anel dourado em órbita (horário) e brilhos (anti-horário). As voltas param quando o retrato sai da tela. O título usa o mesmo foco de câmera do manifesto; parágrafos e assinatura sobem com desfoque ao entrar, e o fio da assinatura se desenha. Com mouse, a foto chega 5% mais perto enquanto o cursor está no retrato. Sem JavaScript ou com movimento reduzido, nada é armado e a seção aparece parada no estado final.

### Rodapé
Ao lado do direito autoral, os links legais em Small cinza com sublinhado dourado: Política de Privacidade e Preferências de cookies (este só quando alguma ferramenta de análise está configurada).

Na linha de baixo, o crédito do desenvolvedor fica em destaque numa placa da BRAGA SYSTEMS, que segue o guia da marca do desenvolvedor (github.com/Braga-ofc/BRAGASYSTEMS) e por isso fica fora das cores da página: fundo preto-profundo (#0B0F14), fio de 1px na cor line (#2E3946), cantos chanfrados em 45° no alto à esquerda e embaixo à direita, como o símbolo da marca, e as listras diagonais da identidade em grafite (#202833) deslizando devagar no canto direito. Dentro, "SITE DESENVOLVIDO POR" em rótulo (#8A96A6), o logo horizontal oficial na versão para fundo escuro (168px no computador, 156px no celular, sem nenhum efeito, como o guia pede; o único ciano é o do próprio logo) e o número em prata-fria (#D6DDE6), separado por um fio. A placa inteira é um único link para o WhatsApp técnico; no hover o fio acende e as listras aceleram, e no foco do teclado o fio fica prata-fria, porque o recorte dos chanfros esconderia o contorno de foco. No computador a placa fica à direita, na mesma linha do direito autoral; abaixo de 480px fica centralizada, com o logo e o número empilhados. No celular, o rodapé termina com um respiro de 128px para a barra fixa do botão não cobrir o crédito.

### Aviso de cookies
Cartão charcoal com fio de 1px em marfim a 14% e o fio de cima dourado, cantos retos e sem sombra, preso embaixo: no celular ocupa a largura com 16px de margem e sobe para cima da barra fixa do botão quando ela aparece; a partir de 768px fica no canto de baixo à esquerda, com 26rem de largura. Texto em Small névoa com o link da Política de Privacidade sublinhado em dourado, e dois botões em pílula de contorno marfim, Recusar e Aceitar, do mesmo tamanho e com o mesmo peso (no hover, fundo marfim e texto charcoal). Com o Pixel configurado, o link "Personalizar" abre duas caixas de marcar em dourado, Análise e Anúncios, e o botão vira "Salvar escolhas". Entra subindo 1,5rem depois da abertura do site (2s na primeira visita da sessão, 0,6s nas seguintes) e na hora quando reaberto pelo rodapé; com movimento reduzido, aparece parado. Não é modal: não escurece a página nem prende o foco.

### Política de Privacidade
Página de texto no campo burgundy, na mesma coluna e tipografia das perguntas frequentes: data em Tag dourada, título em Headline, abertura em Lead névoa, o botão de preferências em pílula de contorno, seções separadas por fios de 1px com títulos em Fraunces 500 e listas com marcador dourado. Cabeçalho só com a assinatura da marca, que leva de volta à página inicial, e rodapé charcoal com o direito autoral.

### Linha do processo
Cinco nós circulares de 48px com algarismo em Fraunces dourado, ligados por um fio dourado contínuo que termina no último nó.

### Ícone do Instagram
Reprodução do componente do vídeo de referência do responsável pelo projeto, por isso fora das regras de cor e de canto da página: quadrado de 55px com cantos de 15px e o gradiente do Instagram, e quatro camadas com fio laranja por trás. No hover ou no foco, o conjunto gira (rotate -35deg, skew 20deg), as camadas se abrem em leque até 20px, o rótulo laranja desce ("BackStage" no perfil @geoo.silvaz, "Agência" no @eben.creative_) e um cartão escuro com foto, nome e @ sobe de trás do ícone. Em telas sem mouse o cartão não aparece. Fica no fim do portfólio, porque é onde o visitante procura mais trabalhos.

### Página 404
O "404" em Fraunces enorme (até 15rem, limitado a 30% da altura da tela), com os dois "4" em contorno dourado de 1,5px e a lente da marca no lugar do zero: o monograma marfim num disco burgundy profundo, cercado pelo anel de marcas de foco e pelo texto "PÁGINA NÃO ENCONTRADA · EBEN CREATIVE STUDIO" em volta (as mesmas peças do retrato do "Quem sou eu?"), pelo anel dourado em órbita e por quatro cantos de visor. Abaixo, o título em Headline, o texto em Lead névoa e o botão em pílula com o brilho, o halo e o reflexo do botão da consultoria. Ao fundo, um brilho quente, a estrela gigante a 4,5% girando devagar (80s por volta) e sete estrelas piscando.

**Movimento:** na entrada, os dois "4" deslizam dos lados com desfoque, a lente cresce girando, a íris do disco abre do centro, os anéis entram girando rápido e assentam numa volta lenta em sentidos alternados, o título entra em foco e o texto e o botão sobem. Depois, a lente fica viva: três ondas douradas saem dela em sequência, como um radar procurando; uma linha de luz varre o monograma de cima para baixo a cada 3,6s; o monograma perde e recupera o foco a cada 6s, como uma câmera procurando; os cantos do visor respiram; e os "4" flutuam de leve, um fora de compasso do outro. Com mouse, as camadas acompanham o cursor em profundidades diferentes: a lente até 30px, os números até 14px e o fundo até 16px no sentido contrário. Com movimento reduzido ou no toque, nada se move.

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
- **Don't** arredondar quadros ou cartões; as exceções são a pílula do botão da consultoria, os cantos de tela dos prints, os círculos da marca, o ícone do Instagram e a placa da BRAGA SYSTEMS no rodapé, que segue a identidade do desenvolvedor.
- **Don't** usar travessão em nenhum texto da página.

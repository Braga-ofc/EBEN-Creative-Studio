# Design: EBEN Creative Studio

Este arquivo é a referência da identidade da marca usada no site. O sistema visual completo, como ele está construído (componentes, tipografia em detalhe, animações e regras de uso), fica em [`v1/DESIGN.md`](../../v1/DESIGN.md), que é a fonte de verdade do design.

As cores e as fontes vêm do brandkit oficial da agência, o EBEN_Creative_Studio_Brandkit.pdf, recebido em 2026-10-09. As cores derivadas, como tons de hover e de texto secundário, foram calculadas a partir das cores oficiais, e o contraste de cada combinação de texto foi medido pela fórmula do WCAG. O conceito visual definido pelo brandkit é cinematográfico e emocional, com formas circulares, linhas finas, a estrela de quatro pontas, momentos reais e luz quente.

## Logotipo

O logotipo é um monograma circular com as letras EBEN e a estrela de quatro pontas dentro do B. A assinatura horizontal coloca a palavra CREATIVE à esquerda do monograma e a palavra STUDIO à direita, em Fraunces caixa alta com espaçamento largo entre as letras.

Os arquivos ficam em dois lugares:

| Arquivo | Uso |
| --- | --- |
| `docs/marca/eben-monograma.svg` | Monograma em `currentColor`, gerado a partir do Logo.svg original recebido em 2026-10-09, sem metadados e com as margens cortadas |
| `docs/marca/eben-estrela.svg` | A estrela recortada do próprio monograma, também em `currentColor` |
| `v1/public/brand/eben-sprite.svg` | Sprite usado no site, com o monograma e a estrela como símbolos; assumem a cor do texto onde aparecem |
| `v1/public/brand/eben-logo.svg` | Monograma com a cor burgundy fixa (#8F0012), para uso fora do site, como no README |

No site, CREATIVE e STUDIO são escritos como texto em HTML ao lado do monograma (componente `Lockup`), e não como imagem, para ficarem nítidos. O Logo.svg original foi vetorizado de forma automática e tem bordas levemente irregulares que só aparecem em tamanhos grandes.

Pergunta para você: existe o arquivo vetorial do logo feito pelo designer, em AI, PDF vetorial ou SVG exportado do programa de criação? Se existir, ele substitui o eben-monograma.svg com bordas mais limpas.

## Cores oficiais

| Token | Nome no brandkit | Valor | Papel no site |
| --- | --- | --- | --- |
| burgundy | Burgundy | #8F0012 | Chão da maior parte das seções e do cabeçalho |
| ivory | Warm Ivory | #F7EAD7 | Texto sobre fundos escuros, botão principal e o papel do convite da consultoria |
| gold | Champagne Gold | #C6A36A | Fios, estrela, números de resultado, itálicos de destaque e foco |
| charcoal | Deep Charcoal | #21191A | Sala de exibição (portfólio, processo e rodapé) |
| rose | Dusty Rose | #C58D91 | Hover do botão principal e brilhos, em pouca quantidade |

O brandkit sugere a proporção de uso de 48% burgundy, 28% marfim, 12% charcoal, 8% dourado e 4% rosa, como referência de composição. No site, o burgundy é o chão, o charcoal aparece em seções inteiras, o marfim aparece como texto e como um único objeto de papel (o convite da consultoria), e dourado e rosa ficam nos detalhes.

## Cores derivadas usadas no site

| Token | Valor | Como foi obtido | Uso |
| --- | --- | --- | --- |
| burgundy-deep | #6E000E | Burgundy escurecido | Seções alternadas no campo burgundy e hover de botões burgundy |
| mist | #E8C9BB | 86% de marfim sobre burgundy | Texto secundário sobre burgundy e burgundy-deep |
| ivory-muted | #5D544F | 72% de charcoal sobre marfim | Texto secundário sobre o papel marfim |
| charcoal-raised | #2C2323 | 5% de marfim sobre charcoal | Superfícies sobre charcoal |
| ash | #B7AB9E | 70% de marfim sobre charcoal | Texto secundário sobre charcoal |
| rose-dim | #553E40 | Rosa misturado ao charcoal | Reserva, sem uso atual |

## Contraste medido

| Texto | Fundo | Contraste | Uso permitido |
| --- | --- | --- | --- |
| marfim | burgundy | 8,1 para 1 | Qualquer texto |
| marfim | charcoal | 14,5 para 1 | Qualquer texto |
| charcoal | marfim | 14,5 para 1 | Qualquer texto |
| burgundy | marfim | 8,1 para 1 | Qualquer texto |
| mist | burgundy | 6,2 para 1 | Qualquer texto |
| mist | burgundy-deep | 8,1 para 1 | Qualquer texto |
| ash | charcoal | 7,7 para 1 | Qualquer texto |
| ivory-muted | marfim | 6,2 para 1 | Qualquer texto |
| dourado | charcoal | 7,3 para 1 | Qualquer texto |
| charcoal | rosa | 6,2 para 1 | Texto do botão principal no hover |
| dourado | burgundy | 4,1 para 1 | Só texto a partir de 24px ou elementos gráficos |
| dourado | marfim | 2,0 para 1 | Só elementos decorativos, nunca texto |

## Sequência de fundos da página

| Seção | Fundo |
| --- | --- |
| Abertura e primeira tela | burgundy |
| Manifesto | burgundy |
| Portfólio | charcoal |
| Talvez isso soe familiar | burgundy |
| O jeito EBEN (#servicos) | burgundy-deep |
| O que muda | burgundy |
| Como funciona (#processo) | charcoal |
| Quem sou eu? (#quem-sou-eu) | burgundy-deep |
| Convite da consultoria (#consultoria) | burgundy, com o papel marfim no centro |
| Objeções | burgundy-deep |
| Perguntas frequentes (#duvidas) | burgundy |
| Fechamento (#agendar) | burgundy |
| Rodapé | charcoal |

## Tipografia

A fonte de títulos é Fraunces, usada no logotipo, em títulos, frases de impacto e itálicos de destaque, com o eixo óptico automático e o eixo WONK fixado em 0. A fonte de texto é Manrope, usada em textos corridos, legendas e botões. As duas são carregadas pelo next/font/google com display swap e subconjunto latin. A regra do brandkit é Fraunces para emoção e Manrope para clareza. A escala completa (display, statement, headline, title, quote, lead, body, small e label) está em `v1/DESIGN.md`.

## Elementos gráficos

A estrela de quatro pontas aparece em dourado como separador, marca-d'água discreta, nas divisas do fio dourado e nos brilhos do retrato da Geovana. As linhas editoriais têm 1px, em marfim com 15% a 20% de opacidade para organizar listas e seções, e em dourado para os fios de destaque (o fio que liga as seções e a linha do processo). As formas circulares são da marca: o monograma, o anel de lente atrás do fechamento, o retrato e as fotos de perfil em círculo e os nós do processo. Não se aplica sombra, contorno ou efeito no logotipo.

## Espaçamento e grade

O conteúdo fica centralizado com largura máxima de 1440px e margem lateral fluida de 20px a 48px. A grade usa 12 colunas com 24px entre colunas a partir de 1024px. O respiro vertical das seções vai de 96px a 176px, conforme a largura da tela. Os pontos de quebra são os padrões do Tailwind: sm 640px, md 768px, lg 1024px, xl 1280px e 2xl 1536px.

## Bordas e movimento

Quadros, cartões e campos têm cantos retos. As exceções são a pílula do botão principal, os cantos de 14px dos prints de tela do portfólio e os círculos da marca. Não há sombras projetadas: a profundidade vem da troca de cor de fundo, de superfícies um tom acima, de fios de 1px e de brilhos de luz (dourado e rosa) atrás do botão principal, do vídeo do portfólio e do convite da consultoria. As animações e suas regras, incluindo o comportamento com movimento reduzido, estão em `v1/DESIGN.md`.

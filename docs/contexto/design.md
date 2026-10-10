# Design: EBEN Creative Studio

As cores e as fontes deste arquivo vêm do brandkit oficial da agência, o EBEN_Creative_Studio_Brandkit.pdf, recebido em 2026-10-09. As cores derivadas, como tons de hover, bordas e texto secundário, foram calculadas a partir das cores oficiais misturando uma cor da marca com outra, e o contraste de cada combinação de texto foi medido pela fórmula do WCAG. O conceito visual definido pelo brandkit é cinematográfico e emocional, com formas circulares, linhas finas, a estrela de quatro pontas, momentos reais e luz quente.

## Logotipo

O logotipo é um monograma circular com as letras EBEN e a estrela de quatro pontas dentro do B. A assinatura completa coloca a palavra CREATIVE à esquerda do monograma e a palavra STUDIO à direita, em Fraunces 400 caixa alta com espaçamento entre letras de 0.5em, com o slogan opcional abaixo em Fraunces 400.

Os arquivos de uso no site ficam em docs/marca e vão para public/images/brand na tarefa 3. O arquivo eben-monograma.svg foi gerado a partir do Logo.svg original recebido em 2026-10-09, sem os metadados, com as margens cortadas e com a cor em currentColor, então ele assume a cor do texto do tema em que está. O arquivo eben-estrela.svg é a estrela recortada do próprio monograma, também em currentColor. No site, CREATIVE, STUDIO e o slogan são escritos como texto em HTML, e não como imagem, para ficarem nítidos e legíveis por leitores de tela e buscadores.

O monograma é sempre ivory no tema burgundy, burgundy no tema marfim e ivory ou gold no tema charcoal. O monograma isolado é usado quando o espaço é pequeno, com tamanho mínimo de 32px de altura, e a assinatura completa só aparece a partir de 160px de largura total. O Logo.svg original foi vetorizado de forma automática e tem bordas levemente irregulares que só aparecem acima de 400px de altura.

Pergunta para você: existe o arquivo vetorial do logo feito pelo designer, em AI, PDF vetorial ou SVG exportado do programa de criação? Se existir, ele substitui o eben-monograma.svg com bordas mais limpas.

## Cores oficiais

| Token | Nome no brandkit | Valor | Papel |
| --- | --- | --- | --- |
| burgundy | Burgundy | #8F0012 | Cor principal da marca |
| ivory | Warm Ivory | #F7EAD7 | Fundo claro e texto sobre fundos escuros |
| gold | Champagne Gold | #C6A36A | Detalhes premium, linhas, estrela e ícones |
| charcoal | Deep Charcoal | #21191A | Texto sobre fundo claro e fundo escuro |
| rose | Dusty Rose | #C58D91 | Acento complementar, em pouca quantidade |

O brandkit sugere a proporção de uso de 48% burgundy, 28% marfim, 12% charcoal, 8% dourado e 4% rosa, como referência de composição e não como regra fixa. No site isso se traduz em seções inteiras com fundo burgundy, seções de leitura com fundo marfim, seções de vídeo e rodapé com fundo charcoal, e dourado e rosa só em detalhes.

## Cores derivadas

| Token | Valor | Como foi obtido | Uso |
| --- | --- | --- | --- |
| burgundy-hover | #6E000E | Burgundy escurecido | Botão burgundy com o cursor em cima |
| ivory-surface | #EADDCC | 6% de charcoal sobre marfim | Cartões e campos em seção marfim |
| ivory-muted | #5D544F | 72% de charcoal sobre marfim | Texto secundário em seção marfim |
| ivory-border | #D7CBBB | 15% de charcoal sobre marfim | Divisórias em seção marfim |
| field-border | #8C8279 | 50% de charcoal sobre marfim | Borda de campos de formulário |
| burgundy-muted | #E0B7AC | 78% de marfim sobre burgundy | Texto secundário em seção burgundy |
| burgundy-border | #A42F39 | 20% de marfim sobre burgundy | Divisórias em seção burgundy |
| charcoal-surface | #2C2323 | 5% de marfim sobre charcoal | Cartões em seção charcoal |
| charcoal-muted | #B7AB9E | 70% de marfim sobre charcoal | Texto secundário em seção charcoal |
| charcoal-border | #413836 | 15% de marfim sobre charcoal | Divisórias em seção charcoal |
| error | #B42318 | Vermelho fora da marca | Mensagens e bordas de erro, sempre com ícone |
| success | #2F6B3A | Verde fora da marca | Mensagem de envio concluído, reservada para o formulário futuro |
| whatsapp | #25D366 | Cor oficial do WhatsApp | Somente o botão de WhatsApp |

O vermelho de erro é próximo do burgundy, por isso toda mensagem de erro aparece junto de um ícone de alerta e de um texto explicando o erro, e nunca só pela cor. O formulário fica sempre em seção marfim.

## Contraste medido

| Texto | Fundo | Contraste | Uso permitido |
| --- | --- | --- | --- |
| charcoal | marfim | 14,5 para 1 | Qualquer texto |
| marfim | burgundy | 8,1 para 1 | Qualquer texto |
| burgundy | marfim | 8,1 para 1 | Qualquer texto |
| marfim | charcoal | 14,5 para 1 | Qualquer texto |
| dourado | charcoal | 7,3 para 1 | Qualquer texto |
| rosa | charcoal | 6,2 para 1 | Qualquer texto |
| ivory-muted | marfim | 6,2 para 1 | Qualquer texto |
| burgundy-muted | burgundy | 5,3 para 1 | Qualquer texto |
| charcoal-muted | charcoal | 7,7 para 1 | Qualquer texto |
| dourado | burgundy | 4,1 para 1 | Só texto a partir de 24px ou elementos gráficos |
| rosa | burgundy | 3,5 para 1 | Só elementos gráficos |
| dourado | marfim | 2,0 para 1 | Só elementos decorativos, nunca texto |
| error | marfim | 5,5 para 1 | Mensagens de erro |
| success | marfim | 5,4 para 1 | Mensagens de sucesso |
| field-border | marfim | 3,2 para 1 | Borda de campo, acima do mínimo de 3 para 1 |

## Temas de seção

Cada seção do site usa um de três temas, aplicado por uma classe no elemento da seção, e os componentes leem as cores do tema em que estão. No tema marfim o fundo é ivory, o texto é charcoal, o texto secundário é ivory-muted e o destaque é burgundy. No tema burgundy o fundo é burgundy, o texto é ivory, o texto secundário é burgundy-muted e o destaque é gold. No tema charcoal o fundo é charcoal, o texto é ivory, o texto secundário é charcoal-muted e o destaque é gold.

A sequência da página segue os blocos de copy.md:

| Bloco | Tema | Âncora do menu |
| --- | --- | --- |
| 1. Abertura | burgundy com vídeo | |
| 2. Proposta de valor | marfim | |
| 3. Dor | marfim, continuação do bloco 2 | |
| 4. Jeito EBEN e três frentes | burgundy | #servicos |
| 5. Benefícios | marfim | |
| 6. Prova social e portfólio | charcoal | #resultados |
| 7. Oferta | marfim | #como-funciona |
| 8. Objeções | burgundy | |
| 9. Garantia | marfim | |
| 10. Vagas e diagnóstico | charcoal, faixa estreita | |
| 11. Perguntas frequentes | marfim | #duvidas |
| 12. Chamada final e PS | burgundy | |
| Rodapé | charcoal | |

Os blocos 2 e 3 dividem a mesma seção marfim, separados por uma linha editorial, para a página não alternar de cor a cada parágrafo.

Pergunta para você: essa alternância entre burgundy, marfim e charcoal atende ao que você imagina, ou prefere o site predominantemente claro ou predominantemente escuro?

## Tipografia

A fonte principal é Fraunces, usada no logotipo, em títulos editoriais, frases de impacto e no slogan, com os pesos 400, 500 e 700. A fonte secundária é Manrope, usada em textos corridos, legendas, botões e informações comerciais, com os pesos 400, 500 e 600. As duas são carregadas pelo next/font/google com display swap e subconjunto latin. A regra do brandkit é Fraunces para emoção e Manrope para clareza.

| Token | Tamanho no celular | Tamanho a partir de 1024px | Altura de linha | Peso | Fonte |
| --- | --- | --- | --- | --- | --- |
| display | 40px | 64px | 1.05 | 700 | Fraunces |
| h1 | 32px | 48px | 1.1 | 700 | Fraunces |
| h2 | 24px | 32px | 1.2 | 500 | Fraunces |
| subtitle | 20px | 24px | 1.3 | 500 | Fraunces |
| h3 | 18px | 20px | 1.35 | 600 | Manrope |
| body-lg | 18px | 18px | 1.6 | 400 | Manrope |
| body | 16px | 16px | 1.6 | 400 | Manrope |
| small | 14px | 14px | 1.5 | 400 | Manrope |
| label | 12px | 12px | 1.4 | 500, caixa alta, espaçamento entre letras de 0.16em | Manrope |

Os tamanhos de h1, subtitle, body e label a partir de 1024px seguem a hierarquia do brandkit, que define título principal em Fraunces Bold com 48px, subtítulo em Fraunces Medium com 24px, texto de apoio em Manrope Regular com 16px e legenda em Manrope Medium com 12px. O texto corrido tem largura máxima de 65 caracteres, equivalente à classe max-w-prose.

## Elementos gráficos

A estrela de quatro pontas, desenhada a partir do arquivo eben-estrela.svg, aparece com 16px de altura como separador entre itens e com 24px como assinatura no fim de seções, na cor gold, no máximo uma vez por seção. As linhas editoriais têm 1px na cor gold nos temas burgundy e charcoal e na cor ivory-border no tema marfim, e separam título de conteúdo com largura de 48px. As formas circulares aparecem como contornos de 1px em gold com opacidade de 30%, com diâmetro entre 240px e 480px, atrás de títulos da abertura e da chamada final, sem nunca cobrir texto. Não se aplica sombra, contorno ou efeito no logotipo, e o logotipo mantém ao redor um espaço livre igual à altura da letra E do nome EBEN.

## Espaçamento e grade

A unidade base é 4px e o projeto usa a escala padrão do Tailwind, limitada aos passos 1, 2, 3, 4, 6, 8, 12, 16, 24 e 32, que correspondem a 4, 8, 12, 16, 24, 32, 48, 64, 96 e 128px. O espaçamento vertical entre seções é de 96px no celular e 128px a partir de 1024px. A margem lateral da página é de 20px no celular, 32px a partir de 768px e 48px a partir de 1280px. O conteúdo fica centralizado com largura máxima de 1280px. A grade usa 4 colunas no celular, 8 colunas a partir de 768px e 12 colunas a partir de 1024px, com espaço entre colunas de 16px no celular e 24px a partir de 768px. Os pontos de quebra são os padrões do Tailwind, sm 640px, md 768px, lg 1024px, xl 1280px e 2xl 1536px.

## Bordas, sombras e movimento

O raio de borda é de 4px em botões e campos, 12px em cartões e janelas e 9999px em elementos circulares, valores mais retos que combinam com o tom editorial da marca. As bordas têm 1px na cor de borda do tema. O projeto não usa sombras, e a separação entre camadas vem da diferença entre o fundo do tema e sua cor de superfície. As transições de cor e opacidade duram 200ms, as entradas de seção duram 700ms com deslocamento vertical de 24px, e a curva de animação é cubic-bezier(0.22, 1, 0.36, 1). Quando o sistema pede movimento reduzido, todas as animações têm duração de 0ms.

## Componentes

O Button tem altura de 48px, preenchimento horizontal de 28px, texto em Manrope 600 com 14px em caixa alta e espaçamento entre letras de 0.08em, e raio de 4px. No tema marfim, a variante primary tem fundo burgundy e texto ivory e passa para burgundy-hover com o cursor em cima. Nos temas burgundy e charcoal, a variante primary tem fundo ivory e texto burgundy e passa para fundo gold com texto charcoal. A variante secondary tem fundo transparente, borda de 1px na cor do texto do tema e texto na mesma cor, e com o cursor em cima inverte fundo e texto. A variante ghost tem só o texto com sublinhado de 1px em gold, afastado 4px da linha. O estado desativado tem opacidade de 50% e cursor not-allowed. O foco visível em qualquer elemento interativo é um contorno de 2px com afastamento de 2px, na cor burgundy no tema marfim e na cor gold nos temas burgundy e charcoal.

O Header tem altura de 64px no celular e 80px a partir de 1024px e fica fixo no topo. Sobre a abertura ele é transparente com texto ivory, e depois de 80px de rolagem ganha fundo burgundy em opacidade de 95% com desfoque de 12px. O monograma isolado fica à esquerda com 40px de altura no celular, e a partir de 1024px aparece a assinatura completa com o monograma de 48px, e o menu fica à direita em Manrope 500 com 14px, com os links Serviços, Resultados, Como funciona e Dúvidas, que rolam até as âncoras da tabela de temas, seguidos de um Button primary "Falar no WhatsApp" com altura de 40px. No celular, o menu vira um botão de 48px por 48px que abre um painel em tela cheia no tema burgundy, com os links em Fraunces 500 com 32px e o botão de WhatsApp com largura total no pé do painel.

O Hero ocupa 100svh de altura no tema burgundy, com o vídeo cobrindo o fundo e uma camada de burgundy em opacidade de 70% por cima para manter o contraste de 8,1 para 1 do texto. De cima para baixo aparecem o rótulo "EBEN Creative Studio" em label gold, a headline em display com largura máxima de 720px, a subheadline em body-lg na cor burgundy-muted com 24px de espaço acima, a proposta resumida em Fraunces 400 itálico com 20px, e o Button primary com largura total no celular e automática a partir de 768px, com a microcopy em small na cor burgundy-muted a 12px abaixo dele. O bloco de texto fica alinhado à esquerda e ancorado na parte de baixo da tela no celular, a 96px da borda inferior, para que a headline e o botão apareçam sem rolar em uma tela de 375px por 667px.

O SplitStatement, usado no bloco 2, mostra cada um dos quatro parágrafos da proposta de valor em subtitle, com 32px entre eles e o último parágrafo na cor burgundy.

O PainList, usado no bloco 3, é uma lista de seis itens em body-lg, cada um precedido de uma estrela de 12px em burgundy e separado do próximo por uma linha de 1px em ivory-border com 16px de espaço acima e abaixo. A frase de fecho aparece depois da lista em h2, com 48px de espaço acima.

O StepList, usado nos três passos do bloco 4 e nas cinco etapas do bloco 7, mostra cada passo com o número em Fraunces 700 com 48px na cor de destaque do tema, o título em h3 e a descrição em body na cor de texto secundário. No celular os passos ficam em coluna com 32px entre eles. A partir de 1024px os três passos do bloco 4 ficam em três colunas, e as cinco etapas do bloco 7 ficam em coluna, ligadas por uma linha vertical de 1px na cor de borda do tema à esquerda dos números.

O ServiceCard fica no tema burgundy, com fundo transparente, borda de 1px em burgundy-border, raio de 12px, preenchimento de 24px no celular e 32px a partir de 1024px, ícone de 32px em traço de 1.5px na cor gold, título em subtitle na cor ivory, descrição em body na cor burgundy-muted e um Button secondary "Falar sobre [serviço]" no pé do cartão. Os três cartões ficam em coluna no celular e em três colunas a partir de 1024px.

O BenefitList, usado no bloco 5, organiza os oito benefícios em uma coluna no celular e em duas colunas a partir de 768px, cada um com um ícone de check de 20px em burgundy e o texto em body-lg.

O PortfolioCard fica no tema charcoal e mostra a capa do projeto em proporção 16 por 9 no computador e 4 por 5 no celular, com raio de 12px, e exibe o nome do projeto em subtitle e o tipo de serviço em label gold sobre uma faixa inferior com degradê de charcoal em 0% até charcoal em 90%. Com o cursor em cima, a imagem aumenta para escala 1.03 em 700ms e um círculo de 64px com contorno gold e ícone de play aparece no centro.

O PortfolioFilter é uma linha de botões em formato de pílula com altura de 40px, raio de 9999px e texto em label, em que o item ativo usa fundo gold e texto charcoal e os demais usam borda charcoal-border e texto charcoal-muted.

O VideoModal ocupa a tela inteira com fundo charcoal em opacidade de 92%, mostra o vídeo centralizado com largura máxima de 1120px em proporção 16 por 9, tem botão de fechar de 48px no canto superior direito com ícone ivory e fecha com a tecla Esc ou com toque fora do vídeo.

O StatNumber, usado nos números em destaque do bloco 6, mostra o número em Fraunces 700 com 48px no celular e 64px a partir de 1024px na cor gold, e a legenda em small na cor charcoal-muted abaixo, com 8px de espaço. Os quatro números ficam em grade de duas colunas no celular e quatro colunas a partir de 1024px, separados por linhas de 1px em charcoal-border.

O CaseCard fica no tema charcoal, com fundo charcoal-surface, raio de 12px e preenchimento de 32px. Ele mostra no topo uma estrela de 16px em gold, o nome da cliente em subtitle ivory, o serviço em label gold, o resultado em body-lg ivory e, quando houver depoimento, a frase em Fraunces 400 itálico com 20px na cor charcoal-muted. Os cases ficam em coluna no celular e em uma coluna por case a partir de 1024px, até o máximo de três.

O LogoStrip mostra os logos dos clientes em ivory com opacidade de 70%, com 32px de altura, em uma grade de três colunas no celular e uma linha única a partir de 1024px, com 48px de espaço entre os logos. Os logos passam para opacidade de 100% com o cursor em cima.

O Accordion, usado nos blocos 8 e 11, mostra cada pergunta em um botão de largura total com o texto em h3 à esquerda e um ícone de mais de 20px à direita, que gira 45 graus para virar um xis quando o item está aberto. A resposta aparece em body na cor de texto secundário do tema, com 16px de espaço acima. Os itens são separados por linhas de 1px na cor de borda do tema, com 24px de preenchimento vertical, e só um item fica aberto por vez.

O GuaranteeList, usado no bloco 9, organiza os quatro compromissos em uma coluna no celular e em duas colunas a partir de 768px, cada um com o título em h3 precedido de uma linha editorial de 48px em burgundy e a descrição em body na cor ivory-muted.

O DiagnosticBanner, usado no bloco 10, é uma faixa no tema charcoal com 64px de preenchimento vertical, com o texto de vagas em body na cor charcoal-muted, o título do bônus em h2 ivory, o texto do bônus em body-lg e um Button primary. Ele fica em coluna no celular e em duas colunas a partir de 1024px, com o texto à esquerda e o bônus à direita, separados por uma linha vertical de 1px em gold.

O FinalCta, usado no bloco 12, centraliza o título em h1, o texto em body-lg na cor burgundy-muted com largura máxima de 560px, o fecho em subtitle, o Button primary e a microcopy. O PS fica abaixo, separado por uma estrela de 24px em gold e 64px de espaço, em Fraunces 400 itálico com 18px, seguido de um Button ghost "Falar no WhatsApp agora".

O CookieBanner fica fixo na parte de baixo da tela, no tema charcoal, com borda superior de 1px em gold e 16px de preenchimento no celular e 24px a partir de 768px. O texto fica em small na cor ivory com o link da Política de Privacidade sublinhado, e os botões Aceitar e Recusar são duas variantes secondary de altura 40px, com o mesmo tamanho, lado a lado. A partir de 768px o aviso tem largura máxima de 560px e fica no canto inferior esquerdo, a 20px das bordas, para não cobrir o botão fixo de WhatsApp. No celular, enquanto o aviso estiver aberto, o botão fixo de WhatsApp sobe para ficar 16px acima dele.

O campo de formulário fica reservado para o formulário de uma versão futura e não entra na primeira versão. Ele tem altura de 48px, ou 128px quando é área de texto, fundo ivory, borda de 1px em field-border, raio de 4px, preenchimento horizontal de 16px e label em Manrope 500 com 14px acima do campo com espaço de 8px. Com foco, a borda passa para 2px em burgundy. Em erro, a borda fica na cor error e a mensagem aparece abaixo em small na cor error, precedida de um ícone de alerta de 16px.

O WhatsAppButton é um círculo de 56px fixo a 20px da borda inferior e da borda direita, com fundo whatsapp e ícone branco de 28px, mantendo a identidade oficial do WhatsApp, e com o rótulo acessível "Falar com a EBEN no WhatsApp".

O Footer fica no tema charcoal, com borda superior de 1px em gold, preenchimento vertical de 64px, logotipo em ivory, slogan em Fraunces 400 itálico com 18px na cor charcoal-muted e contato, redes sociais e os links Política de Privacidade e Preferências de cookies organizados em uma coluna no celular e em três colunas a partir de 768px. Abaixo das colunas, separada por uma linha de 1px em charcoal-border e 24px de espaço, fica a linha final com o direito autoral da EBEN à esquerda e o crédito "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093" à direita, os dois em small na cor charcoal-muted, com o número sublinhado em 1px e passando para ivory com o cursor em cima. No celular, as duas informações ficam uma abaixo da outra, centralizadas.

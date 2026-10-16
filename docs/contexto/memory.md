# Memória do projeto: EBEN Creative Studio

Este arquivo registra as decisões do projeto em ordem cronológica, da mais antiga para a mais recente. Cada entrada é escrita uma única vez e não é apagada, e quando uma decisão muda, uma nova entrada explica a mudança e cita a data da entrada anterior.

## Formato de registro

```
### AAAA-MM-DD: título curto da decisão

Decisão: o que foi decidido.
Motivo: por que foi decidido assim.
Impacto: quais arquivos, tarefas ou regras mudam por causa disso.
```

## Registros

### 2026-10-09: definição da stack

Decisão: o site da EBEN Creative Studio será construído com TypeScript, React, Next.js usando App Router e Tailwind CSS.
Motivo: stack definida pelo responsável pelo projeto na abertura do trabalho.
Impacto: a arquitetura, as regras de código, os tokens de design e a lista de tarefas em docs/contexto seguem essa stack.

### 2026-10-09: destino provisório do formulário de contato

Decisão: os pedidos do formulário são enviados por e-mail para gubragah.oficiaal@gmail.com, endereço guardado na variável de ambiente CONTACT_TO_EMAIL, com o Resend proposto como serviço de envio.
Motivo: definição do responsável pelo projeto até existir um destino definitivo.
Impacto: tarefa 22 do task.md, architecture.md e lista de bibliotecas do rules.md. O Resend ainda aguarda confirmação.

### 2026-10-09: WhatsApp da agência

Decisão: o botão de WhatsApp aponta para o número informado, +55 61 9454-1957.
Motivo: número oficial informado pelo responsável pelo projeto.
Impacto: content/site.ts e tarefa 13 do task.md. O número tem 8 dígitos depois do DDD e precisa ser confirmado antes da publicação.

### 2026-10-09: identidade visual existente

Decisão: a EBEN já tem logotipo e paleta oficial, e os valores de cor e fonte do design.md passam a ser provisórios até os arquivos da marca chegarem.
Motivo: confirmação do responsável pelo projeto.
Impacto: design.md e tarefa 5 do task.md.

### 2026-10-09: hospedagem e domínio

Decisão: ainda não existe site, hospedagem nem domínio. A Vercel foi proposta como hospedagem e o domínio fica pendente.
Motivo: o site está sendo criado do zero.
Impacto: tarefas 29 e 30 do task.md.

Pendente: a hospedagem dos vídeos do portfólio, que o responsável ficou de informar em breve.

### 2026-10-09: paleta e tipografia oficiais

Decisão: o design.md passa a usar o brandkit oficial, com as cores Burgundy #8F0012, Warm Ivory #F7EAD7, Champagne Gold #C6A36A, Deep Charcoal #21191A e Dusty Rose #C58D91, a fonte Fraunces para títulos e Manrope para textos. O site alterna seções em três temas, burgundy, marfim e charcoal.
Motivo: brandkit EBEN_Creative_Studio_Brandkit.pdf enviado pelo responsável pelo projeto. Substitui a proposta provisória registrada em 2026-10-09 na entrada sobre identidade visual existente.
Impacto: design.md reescrito e tarefas 5 e 6b do task.md. Dourado nunca é usado como texto sobre marfim, porque o contraste é de 2 para 1. Os arquivos originais do logotipo ainda não chegaram.

### 2026-10-09: logotipo e número de WhatsApp confirmados

Decisão: o WhatsApp oficial é +55 61 99454-1957, com o link https://wa.me/5561994541957, corrigindo a entrada anterior sobre o WhatsApp da agência, que tinha um dígito a menos. O logotipo usado no site é o docs/marca/eben-monograma.svg, gerado a partir do Logo.svg recebido, e a estrela é o docs/marca/eben-estrela.svg, recortada do monograma. Os dois usam currentColor.
Motivo: logo em SVG e número corrigido enviados pelo responsável pelo projeto.
Impacto: prd.md, design.md e tarefas 3, 6b e 13 do task.md. O Logo.svg original foi vetorizado de forma automática, e um arquivo vetorial feito pelo designer, se existir, deve substituí-lo.

### 2026-10-09: números de contato separados e mensagem do WhatsApp

Decisão: o site mostra só o WhatsApp da agência, +55 61 99454-1957. O número +55 61 99422-7093 é o contato técnico do responsável pela criação do código e pela manutenção do site e não aparece nas páginas da agência. A mensagem preenchida no WhatsApp é "Oii, EBEN! Vim pela página e quero saber mais sobre [serviço].", com [serviço] trocado pelo nome do serviço de onde o visitante clicou.
Motivo: definição do responsável pelo projeto.
Impacto: prd.md, content/site.ts e tarefa 13 do task.md. O texto para botões sem serviço específico ainda aguarda confirmação.

### 2026-10-09: pesquisa de hospedagem gratuita

Decisão: a hospedagem fica para o responsável pelo projeto decidir depois, entre Vercel Pro, Cloudflare e Netlify. A Vercel Hobby fica descartada porque proíbe uso comercial. Os vídeos serão servidos por um serviço de vídeo, e não pela hospedagem.
Motivo: pesquisa feita nas páginas oficiais de preços e termos da Vercel, da Netlify e da Cloudflare e no guia do OpenNext.
Impacto: architecture.md e tarefa 29 do task.md, que corrige a entrada anterior sobre hospedagem e domínio, em que a Vercel tinha sido proposta.

### 2026-10-09: crédito do desenvolvedor e mensagem geral do WhatsApp

Decisão: o rodapé traz a linha "Site desenvolvido por BRAGA SYSTEMS · +55 61 99422-7093", com o número levando a https://wa.me/5561994227093, e esse é o único lugar do site em que o número técnico aparece. Os botões de WhatsApp sem serviço específico usam a mensagem "Oii, EBEN! Vim pela página e quero saber mais sobre os serviços de vocês."
Motivo: confirmação do responsável pelo projeto. Ajusta a entrada anterior sobre números de contato separados, que dizia que o número técnico não aparecia no site.
Impacto: prd.md, design.md, content/site.ts e tarefas 12 e 13 do task.md.

### 2026-10-09: formato do número no crédito

Decisão: a linha de crédito exibe o número sem o código do país, no texto "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093". O link continua https://wa.me/5561994227093, porque o WhatsApp exige o código 55 para abrir a conversa.
Motivo: pedido do responsável pelo projeto. Ajusta o texto da entrada anterior sobre o crédito do desenvolvedor.
Impacto: prd.md, design.md e tarefa 12 do task.md.

### 2026-10-09: copy da landing page e novo escopo da primeira versão

Decisão: a copy enviada pelo responsável pelo projeto virou o arquivo copy.md, reescrita na voz da agência, com a headline "Postar todo dia não é ter presença.", sem nome de método e com as três frentes Social Media, Videomaker e Storymaker. A primeira versão passa a ser uma landing page de página única que converte só pelo WhatsApp, sem formulário, com GA4 e Pixel da Meta carregados depois do aceite no aviso de cookies e o evento Lead em todo clique de WhatsApp. O formulário, as páginas de detalhe do portfólio e a seção sobre foram para depois.
Motivo: decisões do responsável pelo projeto sobre formulário, headline, nome do método e rastreamento, e a estrutura de blocos definida na copy.
Impacto: prd.md, rules.md, design.md e task.md reescritos ou ajustados. O Resend e a entrada sobre o destino provisório do formulário deixam de valer para a primeira versão.

### 2026-10-09: exportação estática

Decisão: o site é gerado como exportação estática do Next.js, com output "export" e otimização de imagens desligada, e as imagens entram no repositório já em WebP no tamanho de uso.
Motivo: sem formulário, nada precisa rodar em servidor, e a exportação estática permite hospedagem gratuita sem adaptador e com transferência ilimitada na Cloudflare.
Impacto: architecture.md, rules.md e tarefas 2 e 35 do task.md. Quando o formulário entrar, essa decisão precisa ser revista.

### 2026-10-09: UTM no link do site e não no WhatsApp

Decisão: a origem da visita é medida por parâmetros UTM no link que leva ao site, e o utm_source vai junto com o evento Lead. O link do WhatsApp não leva UTM.
Motivo: a copy original sugeria UTM no link wa.me, mas o WhatsApp ignora esses parâmetros e nada seria medido.
Impacto: architecture.md, rules.md e tarefa 15 do task.md.

### 2026-10-09: horário, cases, depoimentos, rastreamento e responsável pelos dados

Decisão: o horário de atendimento é de segunda a sábado, das 8h às 18h, e a página promete resposta em até 2 horas dentro dele. O case da Sued Silva aconteceu em 1 ano e a gestão da Juliana Arantes durou 3 meses, com uso de nome e números autorizado pelas duas. A primeira versão vai ao ar sem depoimentos em frase, porque ainda não existem. As contas do GA4 e do Pixel ainda não existem, e o site pode ir ao ar com o rastreamento desligado até os IDs chegarem. O responsável pelos dados na Política de Privacidade é uma pessoa física.
Motivo: respostas do responsável pelo projeto.
Impacto: copy.md, architecture.md, design.md e tarefas 15 e 31 do task.md.

### 2026-10-14: seção Quem sou eu

Decisão: a página ganha a seção "Quem sou eu", com a história da Geovana na primeira pessoa do singular, entre Como funciona e o convite da consultoria, com âncora #quem-sou-eu no menu. É a única exceção à voz da agência. O título é "Prazer, eu sou a Geovana." e a foto é a do perfil @geoo.silvaz (instagram/geo.jpg), recortada em círculo. A seção não tem botão próprio, porque o último parágrafo convida para a consultoria e o convite vem logo abaixo.
Motivo: texto e foto definidos pelo responsável pelo projeto. Fica como seção da página única, e não como rota separada, para manter uma ação por página.
Impacto: copy.md, content/landing.ts, content/site.ts, components/sections/About.tsx e app/page.tsx.

### 2026-10-14: novo visual da seção Quem sou eu

Decisão: o título passa a ser "Quem sou eu?" e a foto passa a ser a de estúdio da primeira barra do Story (hero/geo-estudio.webp), em quadro 4:5 com zoom leve, no lugar da foto do perfil em círculo. A seção ganha legenda na foto ("Até aqui nos ajudou o Senhor.", tirada do próprio texto), assinatura "Geovana Silva" e animações ligadas à rolagem: o obturador abre, a foto sai de um zoom fechado até o zoom leve, os cantos dourados do visor se fecham em volta do quadro, o título entra em foco e os parágrafos sobem ao chegar na tela. Sem suporte a animação por rolagem ou com movimento reduzido, a seção aparece no estado final.
Motivo: pedido do responsável pelo projeto por uma seção mais moderna, mais bonita e com mais animações. Ajusta a entrada de 2026-10-14 sobre a seção Quem sou eu.
Impacto: copy.md, DESIGN.md, content/landing.ts, content/site.ts, components/sections/About.tsx e app/globals.css.

### 2026-10-14: retrato em círculo e fotos de perfil no portfólio

Decisão: na seção Quem sou eu, a foto de estúdio da Geovana volta ao formato circular da primeira versão, sem a legenda "Até aqui nos ajudou o Senhor." sobre a foto e com mais detalhes em volta (anel de lente com marcas de foco e o nome da marca, anel dourado deslocado, halo, ondas e brilhos). No portfólio, os cases da Sued Silva e da Juliana Arantes ganham a foto de perfil ao lado do nome, o aviso "Ver com som" sai do vídeo principal, porque o vídeo não tem som, e o vídeo ganha brilho girando por trás, fio dourado, cantos de visor e a estrela da marca.
Motivo: pedido do responsável pelo projeto, que enviou as duas fotos de perfil para publicação. A foto da Juliana chegou em HEIC e foi convertida para WebP. Ajusta a entrada anterior sobre o novo visual da seção Quem sou eu.
Impacto: copy.md, DESIGN.md, content/landing.ts, content/site.ts, content/portfolio.ts, components/sections/About.tsx, components/sections/Portfolio.tsx, components/sections/PortfolioGallery.tsx, app/globals.css e public/images/portfolio.

### 2026-10-14: entrada do retrato por tempo, funções das clientes, botão e crédito

Decisão: a abertura da íris do retrato deixa de depender da rolagem e passa a acontecer por tempo quando o retrato aparece na tela, marcada pelo componente InView, porque a versão ligada à rolagem não aparecia em todos os navegadores nem ao chegar pela âncora do menu. As camadas em volta do retrato passam a girar o tempo todo, mais rápido na entrada e depois devagar, em sentidos alternados. No portfólio, Sued Silva aparece como "Cantora gospel" e Juliana Arantes como "Consultora de negócios", abaixo do nome. O botão "Agendar uma consultoria" ganha mais cor no brilho, um halo que respira e um reflexo dourado que passa de tempos em tempos. O crédito "Site desenvolvido por BRAGA SYSTEMS" fica em destaque no rodapé.
Motivo: pedido do responsável pelo projeto.
Impacto: copy.md, DESIGN.md, content/portfolio.ts, lib/llms.ts, components/ui/InView.tsx, components/sections/About.tsx, components/sections/PortfolioGallery.tsx, components/layout/SiteFooter.tsx e app/globals.css.

### 2026-10-14: animação de abertura do site

Decisão: o site ganha uma tela de abertura, a lente abrindo (monograma da EBEN com anel dourado no campo burgundy, que se abre do centro revelando a página em cerca de 1,7s), seguida da entrada animada da primeira tela (foto do Story saindo do desfoque, headline deslizando dos lados, texto, botões e cabeçalho entrando). A abertura toca uma vez por sessão, controlada pela chave eben-intro na sessionStorage, e um toque pula. Com movimento reduzido, nada disso acontece.
Motivo: pedido do responsável pelo projeto, que escolheu as duas animações juntas.
Impacto: DESIGN.md, app/page.tsx, app/layout.tsx (suppressHydrationWarning no html), components/layout/IntroScript.tsx, components/layout/SiteIntro.tsx, components/layout/SiteHeader.tsx e app/globals.css.

### 2026-10-14: revisão da documentação e decisões que não tinham registro

Decisão: a documentação passa a descrever o site como ele está publicado, e ficam registradas aqui as decisões que já valiam no código mas não tinham entrada neste arquivo:

- Hospedagem no Netlify, em https://ebencreative.netlify.app, configurada pelo `netlify.toml` na raiz do repositório, com publicação automática a cada envio para a branch `main`. Corrige a entrada de 2026-10-09 sobre a pesquisa de hospedagem, que deixava a escolha em aberto.
- Uma única ação na página: o botão "Agendar uma consultoria", em todos os pontos, com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria.". A consultoria é gratuita e inclui o diagnóstico do perfil. Os botões por serviço, o botão do diagnóstico e a mensagem geral das entradas de 2026-10-09 saíram da página.
- A primeira tela usa três fotos da Geovana em formato de Story, e não um vídeo em loop.
- As mídias do portfólio ficam no Google Drive da agência, compartilhadas por link, e o vídeo principal do case da Sued Silva fica no próprio site. Corrige a entrada de 2026-10-09 que previa um serviço de vídeo.
- A biblioteca lenis, usada na rolagem suave, entra na lista de bibliotecas permitidas do rules.md, onde não estava.
- O rastreamento (GA4, Pixel da Meta, evento Lead e UTM), o aviso de cookies e a Política de Privacidade não foram construídos e ficam para quando as contas existirem.
- Os números em destaque (6 clientes, 11 projetos, +200 mil seguidores) não aparecem na página, porque a contagem de clientes não foi confirmada como exata.
- Os perfis do Instagram são @eben.creative_ (agência) e @geoo.silvaz (trabalhos da Geovana).

Motivo: leitura de todos os documentos a pedido do responsável pelo projeto, para corrigir o que não correspondia ao site publicado.
Impacto: architecture.md, copy.md, design.md, prd.md, rules.md e task.md reescritos ou corrigidos; v1/README.md, v1/PRODUCT.md, v1/DESIGN.md e o resumo de superfície em v1/.impeccable corrigidos. O rules.md ganhou a seção "Desvios conhecidos", com os pontos em que o código atual não segue as regras. As entradas anteriores deste arquivo continuam como estavam, como histórico.

### 2026-10-14: nova página 404

Decisão: a página 404 passa a seguir o estilo do site, com muita animação: o "404" com a lente da marca no lugar do zero (monograma, anéis girando, texto "PÁGINA NÃO ENCONTRADA · EBEN CREATIVE STUDIO" em volta, ondas de radar, linha de luz e foco que se perde e volta), estrelas piscando, o botão em pílula da consultoria e, com mouse, camadas que acompanham o cursor. Os textos da página continuam os mesmos e passam a morar em content/landing.ts (notFound).
Motivo: pedido do responsável pelo projeto. Tira a página 404 da lista de desvios do rules.md, porque o texto saiu do componente.
Impacto: copy.md, rules.md, DESIGN.md, app/not-found.tsx, components/layout/NotFoundStage.tsx, content/landing.ts e app/globals.css.

### 2026-10-15: crédito do desenvolvedor visível no celular

Decisão: no celular, o rodapé ganha um respiro final do tamanho da barra fixa do botão "Agendar uma consultoria", para o crédito "Site desenvolvido por BRAGA SYSTEMS" não ficar escondido atrás dela; o botão continua no mesmo lugar. O crédito passa a ficar em destaque, numa moldura dourada com BRAGA SYSTEMS em Fraunces e um reflexo dourado, e os textos do rodapé ("Atendimento", "Na página" e "Site desenvolvido por") passam a morar em content/site.ts.
Motivo: pedido do responsável pelo projeto, que não conseguia ver o crédito no celular.
Impacto: DESIGN.md, rules.md (sai o rodapé da lista de desvios), components/layout/SiteFooter.tsx, content/site.ts e app/globals.css.

### 2026-10-15: crédito com a marca da BRAGA SYSTEMS

Decisão: o crédito do rodapé passa a usar a identidade da BRAGA SYSTEMS, numa placa com as cores, os cantos chanfrados e as listras diagonais da marca do desenvolvedor, e o logo horizontal oficial (versão para fundo escuro) no lugar do nome escrito. O logo foi copiado de github.com/Braga-ofc/BRAGASYSTEMS para public/brand/braga-systems-horizontal.svg. Seguindo o guia da marca, o logo não recebe brilho nem efeito, e o reflexo dourado da versão anterior do crédito saiu. As cores da BRAGA SYSTEMS ficam só dentro dessa placa, como exceção às cores da página.
Motivo: o responsável pelo projeto enviou o repositório com os logos e o brandkit da BRAGA SYSTEMS. Ajusta a entrada anterior sobre o crédito do desenvolvedor.
Impacto: DESIGN.md, copy.md, components/layout/SiteFooter.tsx, content/site.ts, app/globals.css e public/brand.

### 2026-10-15: mensagem no WhatsApp do crédito

Decisão: o link do número técnico no crédito do rodapé passa a abrir o WhatsApp com a mensagem "Olá!! Vim pelo site da EBEN Creative, queria saber mais sobre o seu trabalho.".
Motivo: pedido do responsável pelo projeto. Ajusta as entradas de 2026-10-09 sobre o crédito do desenvolvedor, em que o link abria sem mensagem.
Impacto: copy.md, prd.md, README.md, content/site.ts e components/layout/SiteFooter.tsx.

### 2026-10-15: análise do site, aviso de cookies e Política de Privacidade

Decisão: o site passa a medir visitas e cliques com o Google Analytics 4 (ID G-91ZE5VCFTX, ligado no netlify.toml), com o Microsoft Clarity e o Pixel da Meta prontos no código e desligados até os IDs chegarem. Os três entram pelos scripts oficiais com next/script, sem Google Tag Manager, e só depois do aceite: o aviso de cookies tem Aceitar e Recusar de mesmo peso e um painel Personalizar com duas categorias, Análise (GA4 e Clarity) e Anúncios (Pixel). A escolha fica em `eben-consent` como JSON com versão, e retirar um aceite apaga os cookies daquela categoria e recarrega a página. O clique no WhatsApp vira `whatsapp_click` no GA4, com o lugar do botão em `cta_location`, e o evento padrão Contact no Pixel, no lugar do Lead planejado antes, porque o clique mostra intenção de contato e não um cadastro; o parâmetro `source` saiu, porque o GA4 já registra a origem da sessão. Os outros eventos são `instagram_click`, `section_view` (metade da seção na tela, ou a seção cobrindo metade da tela, por 1 segundo, porque as seções altas nunca cabem pela metade no celular), `scroll_depth` (25, 50, 75 e 90%), `faq_expand`, `portfolio_tab_select` e `portfolio_item_click`. O link do crédito do desenvolvedor não é medido, para não misturar contatos técnicos com os da EBEN. O rastreamento só liga no endereço de `NEXT_PUBLIC_SITE_URL`, para deploy previews e testes locais não enviarem nada. Na conta do GA4, a medição otimizada fica só com as visualizações de página, sem as mudanças pelo histórico, porque a rolagem suave grava as âncoras no histórico e o GA4 contaria cada clique no menu como página nova. A Política de Privacidade fica em /privacidade e mostra o WhatsApp da agência como contato até chegarem o nome da responsável pelos dados e o e-mail para pedidos.
Motivo: prompt de implementação de analytics gratuito enviado pelo responsável pelo projeto, que delegou a escolha das ferramentas, e o ID do GA4 criado por ele. Substitui as entradas de 2026-10-09 sobre o rastreamento (evento Lead com utm_source e escolha salva como "accepted" ou "rejected").
Impacto: ANALYTICS_SETUP.md (novo), netlify.toml, architecture.md, copy.md, prd.md, rules.md, task.md, README.md, v1/README.md, v1/PRODUCT.md, v1/DESIGN.md, v1/.env.example, lib/env.ts, lib/analytics.ts, lib/consent.ts, components/analytics, content/privacy.ts, app/privacidade, app/layout.tsx, app/page.tsx, app/sitemap.ts, app/globals.css, o botão da consultoria, o ícone do Instagram, o rodapé, a barra fixa, o portfólio, as perguntas frequentes e todas as seções (atributo data-section).

### 2026-10-15: responsável pelos dados e Clarity ligado

Decisão: a Política de Privacidade passa a indicar Geovana dos Santos Silva como responsável pelos dados e o e-mail ebencreativestudio@gmail.com para os pedidos dos titulares, além do WhatsApp da agência. O Microsoft Clarity entra com o ID yyc2wuwh3l no netlify.toml. O GA4 foi configurado na conta pelo responsável pelo projeto (evento principal e dimensões personalizadas). O Pixel da Meta continua sem ID, então o aviso de cookies mostra só Aceitar e Recusar, sem a categoria Anúncios.
Motivo: respostas do responsável pelo projeto. Fecha a pergunta pendente 7 do copy.md.
Impacto: copy.md, prd.md, task.md, architecture.md, v1/README.md, ANALYTICS_SETUP.md, netlify.toml e content/privacy.ts.

### 2026-10-15: animação da placa da BRAGA SYSTEMS

Decisão: a placa do crédito ganha um movimento futurista e contido no ciano do logo (#35D5E8): um feixe de luz que corre sem parar pelo fio da moldura chanfrada, com um reflexo fraco junto às bordas, e uma faixa de luz fria que atravessa a placa a cada 8 segundos. Os dois passam por trás do texto e do logo, que continua sem efeito, como pede o guia da marca, e somem para quem pede movimento reduzido. As animações usam só rotação e deslocamento, que rodam na placa de vídeo sem pesar a página.
Motivo: pedido do responsável pelo projeto, de uma animação que chame atenção para o crédito sem exagero. Ajusta a entrada sobre o crédito com a marca da BRAGA SYSTEMS, em que o único ciano era o do logo.
Impacto: v1/DESIGN.md, components/layout/SiteFooter.tsx e app/globals.css.

### 2026-10-16: entrada da placa da BRAGA SYSTEMS

Decisão: a placa do crédito ganha uma entrada quando aparece na tela, marcada pelo componente InView: uma linha ciano acende no meio e se abre em duas até as bordas, revelando a placa; o fio da moldura pisca em ciano, o feixe dá uma volta rápida, o rótulo é digitado e o logo e o número sobem. Os laços (feixe, varredura e listras) ficam parados antes da entrada e fora da tela. O logo continua sem efeito, só aparece e sobe junto com o resto.
Motivo: pedido do responsável pelo projeto, de uma entrada que também chame atenção.
Impacto: v1/DESIGN.md, components/layout/SiteFooter.tsx e app/globals.css.

### 2026-10-16: domínio próprio

Decisão: o site passa a responder em https://ebencreative.com.br, que vira o endereço oficial em `NEXT_PUBLIC_SITE_URL`. O canonical, o sitemap, o robots, o llms.txt e os dados estruturados passam a usar o domínio novo, e a análise (GA4 e Clarity) só liga nele.
Motivo: o responsável pelo projeto registrou o domínio e o configurou no Netlify.
Impacto: netlify.toml, README.md, v1/README.md, v1/PRODUCT.md, ANALYTICS_SETUP.md, architecture.md, prd.md e task.md.

### 2026-10-16: cabeçalhos de segurança

Decisão: o `netlify.toml` passa a enviar cabeçalhos de segurança em todas as páginas: Content-Security-Policy com a lista de endereços permitidos (próprio site, GA4, Clarity, Pixel da Meta e Google Drive, incluindo accounts.google.com, por onde o player do Drive passa), proibição de exibir o site dentro de iframes de outros sites, HSTS com subdomínios, nosniff, Referrer-Policy, Permissions-Policy e Cross-Origin-Opener-Policy. `'unsafe-inline'` continua em script-src porque a exportação estática do Next.js, os snippets oficiais das ferramentas e o selo da Netlify usam scripts inline. A política foi testada num servidor local com os mesmos cabeçalhos: GA4, Clarity, miniaturas e vídeos do Drive e o vídeo do site funcionaram sem bloqueio. As 5 vulnerabilidades do npm audit ficam como estão: estão só no braces, dependência do ESLint usada no desenvolvimento, que não vai para o site publicado.
Motivo: pedido do responsável pelo projeto de uma análise de segurança completa.
Impacto: netlify.toml, architecture.md, rules.md.

### 2026-10-16: imagem de compartilhamento

Decisão: o site ganha a imagem de compartilhamento (Open Graph e X/Twitter, 1200 x 630): a assinatura CREATIVE, monograma e STUDIO em marfim sobre o burgundy, com o slogan em Fraunces itálica, um fio dourado e duas estrelas. Fica em `src/app/opengraph-image.png` e `twitter-image.png`, pela convenção de arquivos do Next.js, e a Política de Privacidade repete a imagem porque define o próprio openGraph. O cartão do X passa a ser o grande (summary_large_image).
Motivo: ao compartilhar o link, o WhatsApp mostrava a foto da Geovana, a primeira imagem que encontrava na página. O responsável pelo projeto pediu a logo no lugar.
Impacto: app/opengraph-image.png, app/twitter-image.png, app/layout.tsx, app/privacidade/page.tsx, prd.md, task.md e v1/README.md.

### 2026-10-16: nova primeira foto do Story

Decisão: a primeira barra do Story da hero passa a ser a foto da Geovana filmando com o celular erguido num evento, de óculos e blazer vinho (`public/images/hero/geo-filmando.webp`), recortada em 9:16 com o rosto no terço de cima e o celular dentro do quadro, para não ficarem sob o título nem cortados no celular. A foto de estúdio de fundo vermelho (geo-estudio) sai do Story e continua no retrato do "Quem sou eu?". A legenda da primeira barra continua "Social media com direção.".
Motivo: pedido do responsável pelo projeto.
Impacto: content/site.ts, public/images/hero, copy.md e v1/DESIGN.md.

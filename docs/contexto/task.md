# Tarefas: EBEN Creative Studio

Situação do projeto em 2026-10-15. O plano original, de 2026-10-09, foi substituído pelo que está abaixo: várias tarefas foram feitas de outro jeito (por exemplo, a primeira tela usa fotos em formato de Story em vez de vídeo, e a página tem um único botão, "Agendar uma consultoria") e outras foram adiadas junto com o rastreamento. As decisões de cada mudança estão no memory.md, e o texto de cada bloco está em copy.md.

## Concluído

### Base do projeto

- [x] Projeto Next.js com TypeScript em modo estrito, App Router, Tailwind CSS, ESLint e Prettier com o plugin do Tailwind, dentro de `v1/src`.
- [x] Exportação estática (`output: "export"` e `images.unoptimized`), com o build gerando a pasta `out`.
- [x] `lib/env.ts` com validação Zod de `NEXT_PUBLIC_SITE_URL`, obrigatória no build, e o arquivo `.env.example`.
- [x] Tokens de cor, fonte e movimento no `globals.css`, com Fraunces e Manrope pelo next/font.
- [x] Função `cn` em `lib/cn.ts`.
- [x] Componentes da marca: monograma, estrela e assinatura CREATIVE EBEN STUDIO, a partir do sprite em `public/brand`.

### Conteúdo e WhatsApp

- [x] `site.ts`, `landing.ts` e `portfolio.ts` com todo o texto e os dados da página.
- [x] `lib/whatsapp.ts`, que monta o link wa.me, e o botão `ConsultationButton`, usado em todos os pontos com a mensagem da consultoria.

### Estrutura e blocos da página

- [x] Cabeçalho com âncoras, botão principal e menu em tela cheia no celular.
- [x] Rodapé com slogan, atendimento, Instagram, links da página e o crédito da BRAGA SYSTEMS em destaque.
- [x] Barra fixa com o botão principal no celular.
- [x] Tela de abertura (a lente abrindo), uma vez por sessão.
- [x] Primeira tela com a headline e o Story de três fotos da Geovana, com pausa e avanço por toque.
- [x] Manifesto.
- [x] Portfólio em abas (Social Media, Videomaker, Storymaker e Mobile Photo), com os cases da Sued Silva e da Juliana Arantes e o visualizador de fotos e vídeos.
- [x] Dor, jeito EBEN com as três frentes, benefícios e como funciona, com as garantias e o investimento.
- [x] Seção "Quem sou eu?", com a história da Geovana.
- [x] Convite da consultoria gratuita, objeções, perguntas frequentes em sanfona, chamada final e PS.
- [x] Fio dourado ligando as seções e animações de entrada com a rolagem.

### Páginas de apoio e publicação

- [x] Página 404 no visual da marca.
- [x] Metadados de SEO, canonical, `sitemap.xml`, `robots.txt`, `llms.txt` e dados estruturados (JSON-LD).
- [x] Publicação no Netlify, em https://ebencreative.netlify.app, com publicação automática a cada envio para a branch `main`.

### Análise e privacidade

- [x] Aviso de cookies com Aceitar, Recusar e Personalizar (Análise e Anúncios), salvo em `eben-consent`, com o link "Preferências de cookies" no rodapé.
- [x] GA4 com o ID real (`G-91ZE5VCFTX`), carregado só depois do aceite e só no endereço oficial, com os eventos `whatsapp_click`, `instagram_click`, `section_view`, `scroll_depth`, `faq_expand`, `portfolio_tab_select` e `portfolio_item_click`.
- [x] Microsoft Clarity ligado com o ID `yyc2wuwh3l`, e Pixel da Meta (evento Contact no clique do WhatsApp) pronto no código, desligado até o ID.
- [x] Página de Política de Privacidade em /privacidade, com Geovana dos Santos Silva como responsável pelos dados e o e-mail ebencreativestudio@gmail.com para pedidos, e `ANALYTICS_SETUP.md` com o passo a passo das contas.

## Em aberto

- [ ] Medir no Lighthouse, no celular, o site publicado e corrigir o que impedir nota 90 em desempenho, acessibilidade e SEO.
- [ ] Rodar `npm run verify:seo` com o endereço público.
- [ ] Animar as entradas das últimas seções (objeções, perguntas frequentes e fechamento) no mesmo estilo das demais.
- [ ] Criar a imagem de compartilhamento para redes sociais (Open Graph).
- [ ] Registrar o domínio próprio, configurar no Netlify e trocar o `NEXT_PUBLIC_SITE_URL`. Bloqueada até a escolha do domínio.
- [ ] Faixa de logos de clientes. Bloqueada até o envio dos logos.
- [ ] Depoimentos em frase e um terceiro case. Bloqueada até existirem e serem autorizados.
- [ ] Colocar no `netlify.toml` o ID do Pixel da Meta. Bloqueada até a criação da conta.
- [ ] Validar a coleta com dados reais no DebugView e no Tempo real do GA4, no endereço publicado, e conferir as configurações manuais da conta listadas em `ANALYTICS_SETUP.md`.
- [ ] Revisão da Política de Privacidade por alguém da área jurídica.
- [ ] Corrigir ou aceitar de forma explícita os desvios listados no fim do rules.md.

Pergunta para você: existe algum prazo que mude a ordem dessas tarefas?

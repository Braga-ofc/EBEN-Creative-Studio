# Arquitetura: EBEN Creative Studio

Este arquivo descreve o site como ele está construído, na pasta `v1/` do repositório. O que ainda não existe e está planejado fica na última seção, "Planejado para depois".

## Stack

| Parte | Tecnologia |
| --- | --- |
| Linguagem | TypeScript em modo estrito |
| Estrutura | Next.js 16 com App Router e React 19 |
| Estilos | Tailwind CSS 4, com os tokens da marca em `src/app/globals.css` |
| Rolagem suave | Lenis |
| Ícones | lucide-react |
| Classes CSS | clsx e tailwind-merge, juntos na função `cn` de `src/lib/cn.ts` |
| Validação das variáveis de ambiente | Zod, em `src/lib/env.ts` |
| Fontes | Fraunces e Manrope pelo next/font |
| Imagens | next/image para as fotos do site; as miniaturas do portfólio vêm do Google Drive com a tag img comum |
| Análise e anúncios | Google Analytics 4, Microsoft Clarity e Pixel da Meta, pelos scripts oficiais com next/script, só depois do aceite no aviso de cookies |
| Qualidade | ESLint (configuração do Next.js), Prettier com o plugin do Tailwind e checagem de tipos |

As versões exatas de cada pacote ficam travadas no `package-lock.json`. Não há biblioteca de animação: todas as animações são feitas em CSS, com animações ligadas à rolagem (`animation-timeline`) onde o navegador permite, e com um pequeno componente (`InView`) para as entradas por tempo.

Como o site converte só pelo WhatsApp e não tem formulário, nada precisa rodar em servidor. Por isso ele é gerado como exportação estática, com `output: "export"` no `next.config.ts`, e o build produz a pasta `out` com HTML, CSS, JavaScript e imagens prontos. Isso tem três consequências. A hospedagem pode ser qualquer serviço de arquivos estáticos, sem adaptador. Não existem Server Actions, rotas de API nem renderização sob demanda: o `llms.txt` é uma rota gerada uma vez no build (`force-static`). E a otimização automática de imagens do Next.js fica desligada, com `images.unoptimized: true`, então as fotos do site entram no repositório já exportadas no tamanho de uso, quase todas em WebP.

O build exige a variável `NEXT_PUBLIC_SITE_URL`, com o endereço público do site, que alimenta o canonical, o sitemap, o robots, o llms.txt e os dados estruturados. As variáveis `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID` e `NEXT_PUBLIC_META_PIXEL_ID` são opcionais: cada uma liga a sua ferramenta.

## Hospedagem

O site está publicado no **Netlify**, em https://ebencreative.netlify.app. A configuração fica no `netlify.toml`, na raiz do repositório: pasta base `v1`, comando `npm ci && npm run build`, pasta publicada `out`, Node 22, `NEXT_PUBLIC_SITE_URL` apontando para o endereço do Netlify e os IDs do GA4 (`NEXT_PUBLIC_GA_ID`) e do Clarity (`NEXT_PUBLIC_CLARITY_ID`); o ID do Pixel entra no mesmo lugar quando a conta existir. Cada envio para a branch `main` do GitHub gera uma nova publicação.

A Vercel Hobby foi descartada porque proíbe uso comercial. O domínio próprio ainda não existe; quando for registrado, entra no Netlify e no `NEXT_PUBLIC_SITE_URL`.

As mídias do portfólio ficam no Google Drive da agência, compartilhadas como "qualquer pessoa com o link". A página mostra a miniatura que o próprio Drive gera e toca os vídeos no player do Drive. A exceção é o vídeo principal do case da Sued Silva (MP4 de 11,7 MB), que fica no próprio site, em `public/videos/`.

## Fluxo do aplicativo

O visitante chega pela página, quase sempre pelo celular, por um link do Instagram, de uma indicação ou de um anúncio. Na primeira visita da sessão, a tela de abertura mostra o monograma e se abre revelando a primeira tela, com a headline, as fotos em formato de Story e o botão "Agendar uma consultoria".

Rolando a página, o visitante passa pelos blocos na ordem de copy.md, ligados pelo fio dourado. Ao tocar em um item do portfólio, um visualizador (`<dialog>`) abre as fotos e os vídeos daquele cliente. Em qualquer ponto ele pode tocar no botão principal, que está no cabeçalho, na primeira tela, no convite da consultoria, no fechamento e na barra fixa do celular. Todo botão abre o mesmo link wa.me, com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria.".

Na primeira visita, depois da abertura, o aviso de cookies aparece no canto de baixo. Nada de análise ou de anúncios carrega antes da escolha: Análise libera o GA4 e o Clarity, e Anúncios libera o Pixel da Meta. Com o aceite, o site mede os cliques nos botões de WhatsApp (`whatsapp_click`, com o lugar do botão, e o Contact no Pixel), os cliques no Instagram, as seções vistas, a profundidade de rolagem, as perguntas frequentes abertas e o uso das abas e do visualizador do portfólio. A escolha pode ser revista pelo link "Preferências de cookies" do rodapé ou da Política de Privacidade, em `/privacidade`. O rastreamento só liga no endereço oficial do site, e os passos de configuração das contas estão em `ANALYTICS_SETUP.md`, na raiz do repositório.

## Árvore de pastas

```
.
├── ANALYTICS_SETUP.md     configuração do GA4, do Clarity e do Pixel, eventos e testes
├── netlify.toml
├── docs/
│   ├── contexto/          prd, copy, arquitetura, design, regras, tarefas e memória
│   └── marca/             monograma e estrela da marca em SVG
└── v1/
    ├── DESIGN.md
    ├── PRODUCT.md
    ├── README.md
    ├── .env.example
    ├── next.config.ts
    ├── package.json
    ├── public/
    │   ├── brand/         logo e sprite com o monograma e a estrela
    │   ├── images/        fotos da primeira tela, do manifesto, do Instagram e do portfólio
    │   └── videos/        vídeo principal do case da Sued Silva
    ├── scripts/           preview local da pasta out e verificação de SEO
    └── src/
        ├── app/           layout, página, privacidade, 404, globals.css, robots, sitemap, llms.txt e ícone
        ├── components/
        │   ├── analytics/ aviso de cookies, carregamento das ferramentas e eventos da página
        │   ├── brand/     monograma, estrela e assinatura CREATIVE EBEN STUDIO
        │   ├── layout/    cabeçalho, menu do celular, rodapé, barra fixa, abertura, fio dourado e rolagem suave
        │   ├── sections/  um arquivo por bloco da página
        │   └── ui/        botão da consultoria, ícone do Instagram e InView
        ├── content/       site.ts, landing.ts, portfolio.ts e privacy.ts
        └── lib/           cn, env, whatsapp, smooth-scroll, structured-data, llms, analytics e consent
```

A pasta `content` é a fonte de texto e dados. O `site.ts` guarda nome, contatos, mensagem do WhatsApp, horário, perfis do Instagram, SEO e as fotos da primeira tela e do "Quem sou eu?". O `landing.ts` guarda o texto de cada bloco, copiado de copy.md. O `portfolio.ts` guarda as abas, os clientes, os cases e as mídias do portfólio. O `privacy.ts` guarda os textos do aviso de cookies, dos links legais e da Política de Privacidade. A pasta `lib` guarda a leitura validada das variáveis de ambiente (o endereço do site e os IDs das ferramentas), o envio dos eventos (`analytics.ts`), a escolha de cookies (`consent.ts`), a função `cn`, a função que monta o link do WhatsApp, o controle da rolagem suave, os dados estruturados e o conteúdo do llms.txt.

## Como as partes se conectam

A página `app/page.tsx` é um Server Component que monta os blocos de `components/sections` na ordem de copy.md, com o fio dourado (`SectionThread` e `SectionSpine`) entre eles. Cada bloco importa o seu texto direto de `content`. Somente os componentes que precisam do navegador são Client Components: o portfólio com o visualizador (`PortfolioGallery`), os controles do Story da primeira tela (`StoryControls`), o menu do celular, a barra fixa, a rolagem suave, a tela de abertura (`SiteIntro`), o `InView` e os componentes de `components/analytics`: o `Tracking`, no layout, que carrega as ferramentas aceitas e mostra o aviso de cookies (`ConsentBanner`); o `PageEvents`, na página inicial, que mede cliques, seções, rolagem e perguntas; e o botão `ConsentPreferencesButton`.

O botão `ConsultationButton` usa o `consultationLink` de `lib/whatsapp.ts`, montado a partir do número e da mensagem de `site.ts`, e recebe o lugar onde está (`location`), que vira atributos `data-track` e `data-cta-location`. O `PageEvents` ouve os cliques com um único ouvinte no documento e lê esses atributos; as seções têm `data-section` e as perguntas, `data-faq-question`. O `IntroScript`, um script curto que roda antes da primeira pintura, decide se a abertura já passou na sessão, pela chave `eben-intro` da sessionStorage.

As cores, fontes e espaçamentos vêm dos tokens definidos em `globals.css`, descritos em `v1/DESIGN.md`.

## Planejado para depois

**Pixel da Meta.** Já está no código e liga quando o ID entrar no `netlify.toml`; com ele, o aviso de cookies passa a mostrar a categoria Anúncios.

**Formulário.** Quando o formulário entrar, a exportação estática deixa de servir sozinha, e o projeto passa a precisar de uma função separada para o envio.

**Mídias no próprio site.** Hospedar as mídias do portfólio junto com o site, em vez de buscar no Google Drive, deixaria o carregamento mais rápido e sem depender do compartilhamento da pasta.

# EBEN Creative Studio, landing page v1

Primeira das três versões independentes da landing page da EBEN Creative Studio (`v1/`, `v2/`, `v3/`). Esta pasta é um projeto completo e separado: nada aqui depende das outras versões.

O objetivo principal da página é levar o visitante a **agendar uma consultoria gratuita**, e o secundário é mostrar o portfólio. O botão "Agendar uma consultoria" abre o WhatsApp da EBEN (+55 61 99454-1957) com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria."

## Direção visual

A primeira tela é um Story: um quadro vertical 9:16, o formato que o público consome todo dia, fica no centro e a headline atravessa a página dos dois lados. Três fotos da Geovana passam lado a lado em carrossel, uma por barra, com a estrela da marca parada por cima como marca-d'água. Um toque ou clique no quadro pula para a próxima foto, e o botão no canto de cima pausa. Logo abaixo, o manifesto traz a Geovana grande em segundo plano, do lado esquerdo, filmando com o celular erguido, pintada com o burgundy da página.

Cores e fontes seguem o brandkit oficial: burgundy como chão da página, charcoal como sala de exibição, marfim para texto e para o convite da consultoria, dourado só em detalhes, Fraunces nos títulos e Manrope no texto. O sistema completo está em [DESIGN.md](DESIGN.md), e o contexto de produto em [PRODUCT.md](PRODUCT.md).

## Stack

Next.js 16 (App Router) com TypeScript, React 19, Tailwind CSS 4 e Lenis para a rolagem suave, gerado como **site estático** (`output: "export"`). O build cria a pasta `out/`, que pode ir para qualquer hospedagem de arquivos estáticos, sem servidor.

## Como rodar

Requer Node.js 20.9 ou mais recente.

```bash
npm install
```

```bash
npm run dev
```

Abre em http://localhost:3000. Em desenvolvimento, as URLs de SEO usam `http://localhost:3000`.

## Build de produção

O build exige a variável `NEXT_PUBLIC_SITE_URL` com o endereço público do site, sem barra no final. Ela alimenta o canonical, o `sitemap.xml`, o `robots.txt`, o `llms.txt` e os dados estruturados. Sem ela, o build para com uma mensagem explicando o que falta, para que nenhuma dessas URLs saia apontando para o lugar errado. Use o arquivo [.env.example](.env.example) como modelo para criar um `.env.production.local`, ou defina a variável no painel da hospedagem.

```bash
npm run build
```

Para ver o resultado como ele vai ser publicado, com compressão e página 404 de verdade:

```bash
npm run preview
```

Abre em http://localhost:4173. Para testar localmente, faça o build com `NEXT_PUBLIC_SITE_URL=http://localhost:4173`.

## Como trocar as fotos da hero

As três fotos do Story ficam em `public/images/hero/` e são listadas, na ordem em que passam, em `heroSlides`, em [src/content/site.ts](src/content/site.ts). Cada uma tem a sua legenda em `hero.storyBeats`, em [src/content/landing.ts](src/content/landing.ts), na mesma ordem.

1. Exporte a foto em WebP, na vertical, com proporção 9:16 (900 x 1600 px é suficiente). Deixe a pessoa perto do centro: no celular o quadro ocupa a tela inteira e o recorte fecha um pouco nas laterais.
2. Salve em `public/images/hero/` e troque `src` e `alt` do item em `heroSlides`. O campo `position` ajusta o ponto de foco do recorte, se precisar.

A foto do manifesto é outra, em `public/images/manifesto/` (`manifestoPortrait`, no mesmo arquivo). Ela é posicionada pela altura da cabeça, para a cabeça começar sempre abaixo do título: se trocar a foto, ajuste no bloco "Manifesto" de [src/app/globals.css](src/app/globals.css) a conta que diz em que altura da imagem fica o alto do cabelo (hoje 37%).

## Como mexer no portfólio

O portfólio segue a pasta "vídeos Portfolio" do Google Drive da EBEN: uma aba por serviço (Social Media, Videomaker, Storymaker e Mobile Photo), um cartão por subpasta (cliente ou projeto) e, dentro dele, os arquivos, que abrem num visualizador sem sair da página. Tudo fica em [src/content/portfolio.ts](src/content/portfolio.ts).

As mídias continuam no Drive. A página mostra a miniatura que o próprio Drive gera e toca os vídeos no player do Drive, que converte os arquivos do celular (.mov, .mp4) para tocar em qualquer navegador. Por isso, os arquivos precisam continuar compartilhados como "qualquer pessoa com o link". Para incluir um arquivo, copie o ID do link dele no Drive (o trecho entre `/d/` e `/view`) e acrescente no grupo certo, com `kind` igual a `"video"`, `"photo"` ou `"screen"` (print de tela). Fotos e prints precisam de `alt`, a descrição do que aparece. A primeira mídia de cada grupo é a capa do cartão.

Um arquivo também pode ficar no próprio site, com `src` e `poster` no lugar de `driveId`. É o caso do vídeo principal da Sued, em [public/videos/](public/videos/), com a capa em [public/images/portfolio/](public/images/portfolio/). Nos cases de Social Media, quando a primeira mídia é um vídeo, ele aparece grande ao lado do texto, e os prints ficam embaixo do texto. Vídeo do próprio site roda sozinho, sem som e em loop, enquanto está na tela; o clique abre o visualizador com som. Para vídeos assim, use MP4 em H.264, que toca em qualquer navegador. No vídeo da Sued, o índice do arquivo foi movido para o começo (sem recodificar), para ele começar a tocar sem esperar o download do fim.

## Onde editar os textos

Todo o texto da página fica em [src/content/landing.ts](src/content/landing.ts), adaptado da copy aprovada em `../docs/contexto/copy.md`. Contatos, horário, título e descrição de SEO ficam em [src/content/site.ts](src/content/site.ts). As perguntas frequentes alimentam ao mesmo tempo a página, o JSON-LD e o `llms.txt`, então basta mudar em um lugar.

## SEO e dados para IA

| Item | Onde é gerado | Resultado |
| --- | --- | --- |
| `robots.txt` | [src/app/robots.ts](src/app/robots.ts) | Libera o rastreamento e aponta para o sitemap |
| `sitemap.xml` | [src/app/sitemap.ts](src/app/sitemap.ts) | Lista a página inicial, a única pública e indexável |
| `llms.txt` | [src/app/llms.txt/route.ts](src/app/llms.txt/route.ts) | Resumo em Markdown para sistemas e agentes de IA |
| JSON-LD | [src/lib/structured-data.ts](src/lib/structured-data.ts) | Organization, WebSite, WebPage, Service, Offer da consultoria gratuita e FAQPage |
| Canonical, title e description | [src/app/layout.tsx](src/app/layout.tsx) | Uma URL canônica e metadados próprios da página |
| Página 404 | [src/app/not-found.tsx](src/app/not-found.tsx) | Sem indexação, com link para a página inicial |

### Validar depois de publicar

O script abaixo confere no site publicado, e não só no código, se cada item responde com o status e o tipo certos: robots, sitemap, llms.txt, canonical, JSON-LD, um único H1, hierarquia de títulos, perguntas do FAQ visíveis na página e 404 real para endereços inexistentes.

```bash
npm run verify:seo -- https://seudominio.com.br
```

## Publicação

Qualquer hospedagem de arquivos estáticos serve. Configure:

- Comando de build: `npm run build`
- Pasta publicada: `out`
- Variável de ambiente: `NEXT_PUBLIC_SITE_URL` com o domínio final
- Página de erro: `404.html` (Cloudflare e Netlify usam esse arquivo sozinhas)

Depois de publicar, rode `npm run verify:seo` com o endereço público.

## Estrutura

```
v1/
├── DESIGN.md              sistema visual desta versão
├── PRODUCT.md             contexto de produto usado no design
├── public/brand/          logo, sprite do monograma e da estrela
├── public/images/         fotos da hero e do cartão do Instagram
├── scripts/               preview local e verificação de SEO
└── src/
    ├── app/               layout, página, 404, robots, sitemap, llms.txt e ícone
    ├── components/
    │   ├── brand/         monograma, estrela e assinatura
    │   ├── layout/        cabeçalho, menu, rodapé e barra fixa do celular
    │   ├── sections/      cada bloco da página
    │   └── ui/            botão da consultoria e ícone do Instagram
    ├── content/           textos, contatos e portfólio
    └── lib/               ambiente, WhatsApp, JSON-LD e llms.txt
```

## Decisões desta versão

- O botão principal abre o WhatsApp; não há formulário nem agenda externa.
- O botão "Agendar uma consultoria" é uma pílula com um brilho girando por trás do texto, adaptada do botão escolhido pelo responsável pelo projeto (cores da marca, texto por cima do brilho para manter o contraste). Fica em [src/components/ui/ConsultationButton.tsx](src/components/ui/ConsultationButton.tsx) e no bloco "Botão da consultoria" de [src/app/globals.css](src/app/globals.css).
- O carrossel da hero, o brilho do botão e o ícone do Instagram continuam animados mesmo quando o sistema pede movimento reduzido, por decisão do responsável pelo projeto. O carrossel tem botão de pausa e para com o mouse em cima ou com o foco do teclado.
- Quase todas as mídias do portfólio são carregadas do Google Drive, sem cópia no site. Miniaturas e players só carregam quando a aba ou o visualizador abre.
- O vídeo principal da Sued (16 s, 11,7 MB) fica no próprio site, porque veio direto do computador do responsável pelo projeto. Ele roda sozinho, sem som, e só começa a baixar quando o case aparece na tela (fica parado em outra aba ou fora da tela). Cabe no limite de arquivo das hospedagens estáticas (25 MB na Cloudflare).
- A consultoria é gratuita, confirmado pelo responsável pelo projeto.
- O brandkit manda nas cores e fontes; não foi usada referência visual externa.
- A headline é a aprovada na copy: "Postar todo dia não é ter presença."
- Sem GA4, Pixel da Meta nem aviso de cookies nesta versão: as contas ainda não existem.
- As seções abaixo da primeira tela usam `content-visibility: auto` para o celular não calcular o que ainda não apareceu.
- A rolagem suave usa o [Lenis](https://github.com/darkroomengineering/lenis), em [src/components/layout/SmoothScroll.tsx](src/components/layout/SmoothScroll.tsx). Ele suaviza a rodinha do mouse e as viagens pelos links de âncora (de 0,6 a 1,6 segundo, conforme a distância), mantém o `#` no endereço e leva o foco ao destino. No toque do celular, a rolagem continua nativa. Quando o sistema pede movimento reduzido, o Lenis nem liga. Um elemento com rolagem própria precisa do atributo `data-lenis-prevent`, como o painel do menu do celular, que também pausa o Lenis enquanto está aberto.

## Instagram

Dois perfis, cada um com o ícone animado ([src/components/ui/InstagramLink.tsx](src/components/ui/InstagramLink.tsx)) no fim do portfólio e um link simples no rodapé: [@geoo.silvaz](https://www.instagram.com/geoo.silvaz/), com a maior parte dos trabalhos (rótulo "BackStage"), e [@eben.creative_](https://www.instagram.com/eben.creative_/), o perfil da agência (rótulo "Agência"). Só o perfil da agência entra no JSON-LD (`sameAs`); os dois entram no `llms.txt`. Nomes, @ e textos dos cartões ficam em [src/content/site.ts](src/content/site.ts).

## Pendências

- Hospedar as mídias do portfólio junto com o site, em vez de buscar no Google Drive (mais rápido e sem depender do compartilhamento da pasta).
- Depoimentos em frase, se houver.
- Logos de clientes.
- Domínio final, para o build de produção e a validação de SEO publicada.
- Política de Privacidade, necessária quando o rastreamento entrar.

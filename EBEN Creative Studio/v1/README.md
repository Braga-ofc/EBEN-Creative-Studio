# EBEN Creative Studio, landing page v1

Primeira das três versões independentes da landing page da EBEN Creative Studio (`v1/`, `v2/`, `v3/`). Esta pasta é um projeto completo e separado: nada aqui depende das outras versões.

O objetivo principal da página é levar o visitante a **agendar uma consultoria gratuita**, e o secundário é mostrar o portfólio. O botão "Agendar uma consultoria" abre o WhatsApp da EBEN (+55 61 99454-1957) com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria."

## Direção visual

A primeira tela é um Story: um quadro vertical 9:16, o formato que o público consome todo dia, fica no centro e a headline atravessa a página dos dois lados. Os três segmentos do Story se completam uma vez e o quadro termina com o monograma e o slogan, como o brandkit pede para o encerramento de vídeos. Um toque ou clique no quadro avança para o próximo segmento.

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

## Como trocar a imagem da hero

O quadro da hero já tem o tamanho e a proporção da imagem definitiva, então nada no layout muda quando ela entrar.

1. Exporte a imagem em WebP, na vertical, com proporção 9:16 e pelo menos 1080 x 1920 px. Deixe o assunto principal perto do centro: no celular o quadro ocupa a tela inteira e o recorte muda um pouco.
2. Salve em `public/images/hero.webp`.
3. Em [src/content/site.ts](src/content/site.ts), troque `heroMedia` de `null` para:

```ts
export const heroMedia: HeroMedia | null = {
  src: "/images/hero.webp",
  alt: "Descreva o que aparece na imagem",
  width: 1080,
  height: 1920,
  position: "50% 50%",
};
```

O campo `position` ajusta o ponto de foco do recorte, se precisar.

## Como publicar o portfólio

Cada item do portfólio tem um quadro no formato em que a mídia é publicada (4:5 para feed, 9:16 para Story e Reels, 16:9 para filme). Para colocar a mídia, salve o arquivo em `public/images/portfolio/` e preencha o campo `media` do item em [src/content/portfolio.ts](src/content/portfolio.ts). Os itens "Bastidores de eventos" e "Vídeos de marca" descrevem frentes reais da EBEN sem citar cliente e podem virar projetos com nome quando os cases forem escolhidos.

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
├── scripts/               preview local e verificação de SEO
└── src/
    ├── app/               layout, página, 404, robots, sitemap, llms.txt e ícone
    ├── components/
    │   ├── brand/         monograma, estrela e assinatura
    │   ├── layout/        cabeçalho, menu, rodapé e barra fixa do celular
    │   ├── sections/      cada bloco da página
    │   └── ui/            botão da consultoria
    ├── content/           textos, contatos e portfólio
    └── lib/               ambiente, WhatsApp, JSON-LD e llms.txt
```

## Decisões desta versão

- O botão principal abre o WhatsApp; não há formulário nem agenda externa.
- A consultoria é gratuita, confirmado pelo responsável pelo projeto.
- O brandkit manda nas cores e fontes; não foi usada referência visual externa.
- A headline é a aprovada na copy: "Postar todo dia não é ter presença."
- Sem GA4, Pixel da Meta nem aviso de cookies nesta versão: as contas ainda não existem.
- As seções abaixo da primeira tela usam `content-visibility: auto` para o celular não calcular o que ainda não apareceu.
- A rolagem suave usa o [Lenis](https://github.com/darkroomengineering/lenis), em [src/components/layout/SmoothScroll.tsx](src/components/layout/SmoothScroll.tsx). Ele suaviza a rodinha do mouse e as viagens pelos links de âncora (de 0,6 a 1,6 segundo, conforme a distância), mantém o `#` no endereço e leva o foco ao destino. No toque do celular, a rolagem continua nativa. Quando o sistema pede movimento reduzido, o Lenis nem liga. Um elemento com rolagem própria precisa do atributo `data-lenis-prevent`, como o painel do menu do celular, que também pausa o Lenis enquanto está aberto.

## Instagram

O perfil [@geoo.silvaz](https://www.instagram.com/geoo.silvaz/) aparece em três lugares: no fim do portfólio, com o ícone animado ([src/components/ui/InstagramLink.tsx](src/components/ui/InstagramLink.tsx)), no rodapé, como link simples, e no JSON-LD (`sameAs`) e no `llms.txt`. O @ e o endereço ficam em [src/content/site.ts](src/content/site.ts).

## Pendências

- Imagem definitiva da hero.
- Mídias do portfólio e, se houver, um terceiro case e depoimentos em frase.
- Logos de clientes.
- Domínio final, para o build de produção e a validação de SEO publicada.
- Política de Privacidade, necessária quando o rastreamento entrar.

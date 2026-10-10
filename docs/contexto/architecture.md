# Arquitetura: EBEN Creative Studio

## Stack

O projeto usa TypeScript em modo estrito, React, Next.js com App Router e Tailwind CSS. A validação das variáveis de ambiente usa Zod. As fontes são carregadas por next/font e as imagens por next/image. As versões exatas de cada pacote são definidas no momento da instalação, ficam travadas no package-lock e são registradas no memory.md.

Como a primeira versão converte só pelo WhatsApp e não tem formulário, nada precisa rodar em servidor. Por isso o site é gerado como exportação estática, com output: "export" no next.config.ts, e o build produz uma pasta out com HTML, CSS, JavaScript e imagens prontos. Isso tem três consequências. A hospedagem pode ser qualquer serviço de arquivos estáticos, sem adaptador. Não existem Server Actions, rotas de API nem renderização sob demanda. E a otimização automática de imagens do Next.js fica desligada, com images.unoptimized: true, então toda imagem entra no repositório já exportada em WebP no tamanho em que aparece, em até duas resoluções, 1x e 2x.

## Hospedagem

A escolha da hospedagem fica com o responsável pelo projeto. Com o site estático, a Cloudflare passa a ser a opção mais simples entre as gratuitas, porque serve arquivos estáticos sem limite de transferência e sem precisar do adaptador OpenNext. A Netlify também serve o site sem adaptador, mas o plano gratuito tem 300 créditos por mês, em que cada publicação gasta 15 e cada GB transferido gasta 20. A Vercel Hobby continua descartada, porque proíbe uso comercial. Os vídeos não ficam na hospedagem do site, e sim em um serviço de vídeo, porque são o que mais consome transferência.

Perguntas para você: qual hospedagem foi escolhida? O domínio já foi escolhido, e quem vai registrá-lo? Qual gerenciador de pacotes você prefere, npm ou pnpm?

## Fluxo do aplicativo

O visitante chega pela página, quase sempre pelo celular, por um link do Instagram, de uma indicação ou de um anúncio. A abertura mostra o vídeo em loop, a headline e o botão de WhatsApp. Na primeira visita, o aviso de cookies aparece na parte de baixo da tela sem bloquear a leitura. Se o visitante aceita, o GA4 e o Pixel da Meta são carregados. Se recusa ou ignora, nenhum script de rastreamento é carregado.

Rolando a página, o visitante passa pelos blocos de copy.md na ordem definida. Ao tocar em um item do portfólio, uma janela sobreposta abre o vídeo. Em qualquer ponto ele pode tocar no botão fixo de WhatsApp ou em um dos botões dos blocos. Todo clique em botão de WhatsApp segue a mesma sequência: a função de rastreamento dispara o evento Lead no GA4 e no Pixel, se houver consentimento, com o nome do botão e a origem da visita, e em seguida o link wa.me abre com a mensagem certa para aquele botão. O rastreamento nunca atrasa nem impede a abertura do WhatsApp.

A origem da visita é medida por parâmetros UTM no link que leva ao site, e não no link do WhatsApp. O link da bio do Instagram, por exemplo, é https://dominio/?utm_source=instagram&utm_medium=bio, e o GA4 lê esses parâmetros sozinho. A copy original sugeria colocar o UTM no link wa.me, mas o WhatsApp ignora esses parâmetros e nada seria medido. A função de rastreamento guarda o utm_source da chegada na sessionStorage e envia esse valor junto com o evento Lead.

As contas do GA4 e do Pixel da Meta ainda não existem e precisam ser criadas pelo responsável pelo projeto, no Google Analytics e no Gerenciador de Eventos da Meta. Até lá, o código de rastreamento fica pronto e desligado, e o site pode ir ao ar assim. Quando os IDs existirem, o GA4 no formato G-XXXXXXXXXX e o Pixel como um número de 15 ou 16 dígitos, basta colocá-los nas variáveis de ambiente da hospedagem e publicar de novo.

## Árvore de pastas

```
.
├── docs/
│   ├── contexto/
│   └── marca/
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── portfolio/
│   │   └── clients/
│   └── og/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── politica-de-privacidade/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── brand/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── consent/
│   ├── content/
│   │   ├── site.ts
│   │   ├── landing.ts
│   │   ├── projects.ts
│   │   ├── cases.ts
│   │   └── clients.ts
│   ├── lib/
│   │   ├── env.ts
│   │   ├── utils.ts
│   │   ├── whatsapp.ts
│   │   ├── analytics.ts
│   │   └── consent.ts
│   └── types/
│       └── content.ts
├── .env.example
├── next.config.ts
├── tsconfig.json
└── package.json
```

A pasta app contém somente a página única, a Política de Privacidade, o layout raiz e os arquivos especiais do Next.js. A pasta components/ui guarda os componentes básicos, como botão, sanfona e janela sobreposta. A pasta components/brand guarda o logo, a estrela, a linha editorial e o contorno circular. A pasta components/layout guarda cabeçalho, rodapé e botão fixo de WhatsApp. A pasta components/sections guarda cada bloco da página em um arquivo próprio, como HeroSection.tsx e FaqSection.tsx. A pasta components/consent guarda o aviso de cookies e o carregador dos scripts de rastreamento.

A pasta content é a única fonte de texto e dados. O site.ts guarda nome, números, links e mensagens do WhatsApp. O landing.ts guarda o texto de cada bloco, copiado de copy.md. O projects.ts, o cases.ts e o clients.ts guardam portfólio, cases e logos. A pasta lib guarda a leitura validada das variáveis de ambiente, a função cn, a função que monta o link do WhatsApp, as funções de rastreamento e a leitura e gravação do consentimento.

## Como as partes se conectam

A página app/page.tsx é um Server Component que importa o conteúdo de content e monta os blocos de sections na ordem de copy.md, passando o texto por props. Os blocos usam os componentes de ui e brand. Somente os componentes que precisam do navegador são Client Components: o botão de WhatsApp, por causa do rastreamento no clique, o filtro do portfólio, a janela de vídeo, a sanfona, o menu do celular e o aviso de cookies.

O botão de WhatsApp recebe uma chave de mensagem, como "general" ou "socialMedia", chama lib/whatsapp.ts para montar o link a partir de site.ts e chama trackLead de lib/analytics.ts no clique. O trackLead consulta lib/consent.ts e só envia o evento se o consentimento for "accepted". O layout raiz inclui o componente ConsentManager, que lê o consentimento salvo no localStorage com a chave eben-consent. Se não houver escolha salva, ele mostra o aviso. Se a escolha for "accepted", ele injeta os scripts do GA4 e do Pixel com next/script na estratégia afterInteractive, usando os IDs de lib/env.ts. O link "Preferências de cookies" do rodapé apaga a escolha salva e mostra o aviso de novo.

As cores, fontes e espaçamentos vêm dos tokens definidos em globals.css, descritos em design.md. Quando o formulário entrar numa versão futura, a exportação estática deixa de servir, e o projeto passa a precisar de uma hospedagem com servidor ou de uma função separada para o envio.

Pergunta para você: os vídeos serão incorporados do YouTube ou do Vimeo, ou servidos como arquivo por um serviço como o Cloudflare Stream? A resposta define se a janela de vídeo usa iframe ou a tag video.

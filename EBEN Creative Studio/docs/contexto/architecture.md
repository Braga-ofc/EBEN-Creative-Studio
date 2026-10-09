# Arquitetura: EBEN Creative Studio

## Stack

O projeto usa TypeScript em modo estrito, React, Next.js com App Router e Tailwind CSS. A validação de dados usa Zod. As fontes são carregadas por next/font e as imagens por next/image. As versões exatas de cada pacote são definidas no momento da instalação, ficam travadas no package-lock e são registradas no memory.md.

Ainda não existe site publicado, hospedagem contratada nem domínio, porque o site está sendo criado agora. A escolha da hospedagem fica com o responsável pelo projeto. A pesquisa de 2026-10-09 comparou três opções. A Vercel tem o melhor suporte a Next.js, mas o plano gratuito Hobby proíbe uso comercial, e divulgar os serviços de uma agência é uso comercial pelos termos dela, então ali o site exige o plano Pro, que é pago. A Cloudflare tem arquivos estáticos gratuitos e ilimitados e 100 mil requisições dinâmicas por dia no plano gratuito, roda Next.js pelo adaptador OpenNext e limita o código do servidor a 3 MiB comprimidos no plano gratuito. A Netlify roda Next.js sem adaptador, mas o plano gratuito agora funciona com 300 créditos por mês e limite rígido, em que cada publicação em produção gasta 15 créditos e cada GB transferido gasta 20 créditos.

Qualquer que seja a escolha, os vídeos do portfólio e da abertura não são servidos pela hospedagem do site, e sim por um serviço de vídeo, porque vídeo é o que mais consome transferência e esgotaria rápido um plano gratuito.

Perguntas para você: qual hospedagem foi escolhida? A resposta define a tarefa 29 e se o projeto precisa do adaptador OpenNext. O domínio já foi escolhido, por exemplo ebencreativestudio.com.br, e quem vai registrá-lo? Qual gerenciador de pacotes você prefere, npm ou pnpm?

## Fluxo do aplicativo

O visitante chega pela página inicial, quase sempre pelo celular. A seção de abertura mostra o vídeo em loop, o conceito da marca e o botão de orçamento. Rolando a página, ele passa por serviços, portfólio, sobre, depoimentos e contato. Ao tocar em um item do portfólio, uma janela sobreposta abre o vídeo, e um link dentro dela leva à página de detalhe do projeto em /portfolio/[slug]. Em qualquer ponto o visitante pode tocar no botão fixo de WhatsApp, que abre a conversa com a mensagem já preenchida, ou ir até o formulário de contato.

Quando o formulário é enviado, os dados vão para uma Server Action, que valida tudo com o mesmo esquema Zod usado no cliente, encaminha o pedido para o destino configurado e devolve ao navegador um resultado tipado de sucesso ou de erro. O formulário mostra a mensagem correspondente sem recarregar a página.

Por enquanto o destino é o e-mail gubragah.oficiaal@gmail.com. O endereço fica na variável de ambiente CONTACT_TO_EMAIL, e não no código, para poder ser trocado sem um novo deploy de código. O envio é feito pelo serviço Resend, que tem plano gratuito e integração simples com Server Actions.

Pergunta para você: aceita o Resend como serviço de envio? Enquanto não houver domínio próprio, o e-mail sai de um remetente de teste do Resend, que só pode enviar para o e-mail da própria conta. Por isso, a conta do Resend precisa ser criada com gubragah.oficiaal@gmail.com.

## Árvore de pastas

```
.
├── docs/
│   └── contexto/
├── public/
│   ├── images/
│   ├── videos/
│   └── og/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── politica-de-privacidade/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── content/
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── team.ts
│   │   └── site.ts
│   ├── actions/
│   │   └── contact.ts
│   ├── lib/
│   │   ├── schemas.ts
│   │   ├── utils.ts
│   │   └── env.ts
│   └── types/
│       └── content.ts
├── .env.example
├── next.config.ts
├── tsconfig.json
└── package.json
```

A pasta app contém somente rotas, layouts e arquivos especiais do Next.js. A pasta components/ui guarda os componentes básicos reutilizáveis, como botão, campo de formulário e janela sobreposta. A pasta components/layout guarda cabeçalho, rodapé e botão de WhatsApp. A pasta components/sections guarda cada seção da página inicial em um arquivo próprio. A pasta content guarda todo o texto e a lista de projetos em arquivos TypeScript tipados, e é a única fonte de conteúdo da primeira versão. A pasta actions guarda as Server Actions. A pasta lib guarda esquemas Zod, utilitários e a leitura validada das variáveis de ambiente. A pasta types guarda os tipos do conteúdo.

## Como as partes se conectam

As páginas em app são Server Components que importam os dados de content e passam esses dados por props para os componentes de sections. Os componentes de sections montam a tela usando os componentes de ui. Somente os componentes que precisam de interação no navegador, como o formulário, o filtro do portfólio, a janela de vídeo e o menu do celular, são marcados como Client Components, e eles recebem os dados já prontos do servidor. A página de detalhe do projeto usa generateStaticParams a partir de content/projects.ts, então todas as páginas de portfólio são geradas de forma estática no build. O formulário importa o esquema de lib/schemas.ts e chama a Server Action de actions/contact.ts, que importa o mesmo esquema e lê as chaves de lib/env.ts. As cores, fontes e espaçamentos vêm dos tokens definidos em globals.css, descritos em design.md.

Quando o conteúdo passar para um CMS, numa versão futura, apenas a pasta content será substituída por funções que buscam os dados no CMS, mantendo os mesmos tipos de types/content.ts, e o restante do código não precisa mudar.

Pergunta para você: os vídeos do portfólio serão incorporados do YouTube ou Vimeo, ou servidos como arquivo próprio? Essa resposta define se a janela de vídeo usa um iframe ou a tag video com arquivos em public/videos ou em um serviço de armazenamento.

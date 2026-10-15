# Regras de código: EBEN Creative Studio

O código fica na pasta `v1/` do repositório. As regras abaixo valem para todo código novo; os pontos em que o código atual não segue alguma delas estão listados no fim, em "Desvios conhecidos".

## Linguagem e estilo

Todo código é escrito em TypeScript com strict ativado no tsconfig. Nomes de variáveis, funções, componentes e arquivos de código ficam em inglês, enquanto o texto exibido ao visitante fica em português do Brasil e mora nos arquivos de `src/content`, copiado de copy.md. Componentes usam PascalCase e ficam em arquivos com o mesmo nome, como `Portfolio.tsx`. Funções e variáveis usam camelCase. Rotas usam nomes em português e em kebab-case, como `politica-de-privacidade`. Cada componente é uma função nomeada exportada, com as props tipadas por um type declarado logo acima dele. O código é formatado pelo Prettier com o plugin de ordenação de classes do Tailwind e verificado pelo ESLint com a configuração do Next.js, e nenhum commit entra com erro de lint ou de tipo.

## Bibliotecas permitidas

As dependências de execução permitidas são next, react, react-dom, zod, clsx, tailwind-merge, lucide-react para ícones e lenis para a rolagem suave. As dependências de desenvolvimento permitidas são typescript, os tipos (`@types/*`), tailwindcss e seus plugins oficiais, eslint, eslint-config-next, prettier e prettier-plugin-tailwindcss. Qualquer biblioteca fora dessa lista só entra depois de uma pergunta explícita ao responsável pelo projeto e de um registro no memory.md explicando o motivo.

As animações são feitas só com CSS e Tailwind, sem biblioteca de animação.

Quando o rastreamento entrar, o GA4 e o Pixel da Meta serão carregados pelos scripts oficiais de cada empresa por meio de next/script, sem biblioteca intermediária, e o aviso de cookies será feito no próprio projeto, sem biblioteca.

## Componentes e dados

Todo componente é Server Component por padrão, e a diretiva "use client" só aparece em componentes que usam estado, efeitos ou eventos do navegador, mantendo esses componentes pequenos e nas pontas da árvore. Texto e dados são importados de `src/content` e nunca escritos direto dentro de um componente. Imagens do próprio site usam sempre next/image com width, height e alt preenchidos, a partir de arquivos já exportados no tamanho certo, de preferência em WebP, porque a exportação estática não otimiza imagens. A exceção são as miniaturas do portfólio servidas pelo Google Drive, que usam a tag img. Fontes usam sempre next/font. Classes condicionais são combinadas com a função cn de `lib/cn.ts`. Cores, tamanhos de fonte e espaçamentos vêm somente dos tokens de `v1/DESIGN.md`, declarados em `globals.css`.

Todo link de WhatsApp é montado pela função `whatsappLink` de `lib/whatsapp.ts`, a partir do número e da mensagem de `site.ts`, com o texto codificado por encodeURIComponent, e nunca escrito à mão em um componente. O botão principal usa o `consultationLink`. Todo botão "Agendar uma consultoria" usa o mesmo componente, o `ConsultationButton`, que é onde o evento Lead será disparado quando o rastreamento entrar.

## Rastreamento e consentimento

Hoje o site não tem rastreamento: não carrega GA4, Pixel da Meta nem cookies de análise. Quando o rastreamento entrar, valem estas regras. Nenhum script de rastreamento, cookie de análise ou chamada ao GA4 ou ao Pixel acontece antes de o visitante tocar em Aceitar no aviso de cookies. A escolha fica salva no localStorage com a chave `eben-consent` e os valores "accepted" ou "rejected", e o aviso volta a aparecer quando não há escolha salva ou quando o visitante usa o link Preferências de cookies do rodapé. Os botões Aceitar e Recusar têm o mesmo tamanho e o mesmo destaque. O evento Lead leva os parâmetros button, com o nome do botão, e source, com o utm_source da chegada ou "direct" quando não houver. Os IDs do GA4 e do Pixel ficam nas variáveis `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID`, que são públicas por natureza e podem ter esse prefixo.

## Tratamento de erro

As variáveis de ambiente são validadas com Zod uma única vez em `lib/env.ts`. Hoje a única variável é `NEXT_PUBLIC_SITE_URL`, obrigatória no build de produção: sem ela, ou com uma URL inválida, o build para com uma mensagem explicando o que falta. Quando os IDs de rastreamento entrarem, eles serão opcionais: se estiverem ausentes, o build continua e o rastreamento fica desligado, com um aviso no terminal do build.

Toda leitura e gravação no localStorage e na sessionStorage fica dentro de try e catch, e uma falha nunca quebra a página (a abertura do site, por exemplo, simplesmente toca de novo). Quando o rastreamento entrar, uma falha de leitura é tratada como ausência de consentimento, e toda chamada a gtag e a fbq verifica antes se a função existe no window e fica dentro de try e catch, porque bloqueadores de anúncio impedem esses scripts de carregar. Uma falha de rastreamento nunca impede a abertura do WhatsApp nem aparece para o visitante. O vídeo principal de um case mostra a imagem de capa enquanto carrega e se não carregar. Endereços inexistentes caem no `not-found.tsx`.

## Acessibilidade e desempenho

Toda imagem informativa tem texto alternativo descritivo e toda imagem decorativa tem alt vazio. A navegação inteira funciona pelo teclado, com foco visível conforme `v1/DESIGN.md`. A sanfona das perguntas frequentes usa os elementos nativos details e summary, com uma resposta aberta por vez. Toda animação tem um caminho para quem pede movimento reduzido no sistema, e o conteúdo nunca depende de uma animação para aparecer. Quando o aviso de cookies entrar, ele não prende o foco nem cobre o botão principal.

Vídeos que tocam sozinhos não têm som, têm o atributo playsInline e exibem uma imagem de capa enquanto carregam. Os vídeos do Google Drive só carregam quando o visualizador abre, e o vídeo principal de um case só começa a baixar quando aparece na tela e para quando sai dela. A página no celular precisa manter nota de desempenho igual ou acima de 90 no Lighthouse.

## O que nunca fazer

Nunca usar o tipo any nem desativar regras do TypeScript ou do ESLint com comentários. Nunca usar o Pages Router nem misturar os dois roteadores. Nunca criar Server Actions, rotas de API ou qualquer recurso que exija servidor, porque o site é exportação estática; rotas geradas uma vez no build, como o `llms.txt`, são permitidas. Nunca escrever cores em hexadecimal, tamanhos em pixel ou estilos inline dentro de componentes. Nunca usar a tag img no lugar de next/image nem a tag a para links entre páginas no lugar de next/link; links para âncoras da própria página usam a tag a. Nunca reproduzir vídeo com som de forma automática. Nunca carregar rastreamento antes do consentimento. Nunca colocar parâmetros UTM no link do WhatsApp. Nunca colocar chaves secretas, tokens ou senhas no código ou em variáveis com prefixo NEXT_PUBLIC, e nunca subir o arquivo .env para o repositório. Nunca publicar trabalho de cliente, depoimento, número de resultado ou foto de pessoa sem autorização confirmada. Nunca inventar dados de contato, números, cases ou depoimentos, e sim deixar a pergunta registrada até a informação real chegar. Nunca mudar um texto da página direto no código sem mudar antes em copy.md. Nunca deixar console.log no código que vai para produção.

## Desvios conhecidos

Pontos em que o código atual não segue as regras acima. Ficam registrados para serem corrigidos ou aceitos de forma explícita.

1. **Texto dentro de componentes.** Alguns textos visíveis estão escritos direto no componente, e não em `src/content`: os títulos "Atendimento" e "Na página" e o crédito "Site desenvolvido por" no rodapé (`SiteFooter.tsx`), a frase "Mais histórias, bastidores e coberturas no Instagram" (`Portfolio.tsx`), o link "Pular para o conteúdo" (`page.tsx`) e os rótulos para leitores de tela dos botões.
2. **Tamanhos em pixel nos componentes.** `h-[72px]` no cabeçalho, `text-[13px]` e `text-[15px]` na assinatura do cabeçalho e do rodapé, `rounded-[14px]` nos prints do portfólio e `size-[18px]` nos ícones do Story.
3. **Estilo inline.** O ponto de foco das fotos do Story (`objectPosition`, em `StoryFrame.tsx`), que vem de um dado de `site.ts`.
4. **Regra do ESLint desativada.** `@next/next/no-img-element`, nas miniaturas do Google Drive do portfólio, que não podem usar next/image.
5. **Vídeo e movimento reduzido.** O vídeo principal do case da Sued Silva toca sozinho, sem som, mesmo quando o visitante pede movimento reduzido.
6. **Props sem type próprio.** Alguns componentes internos do portfólio (`MediaTile`, `GroupCard` e `CaseAvatar`) tipam as props direto na assinatura da função.

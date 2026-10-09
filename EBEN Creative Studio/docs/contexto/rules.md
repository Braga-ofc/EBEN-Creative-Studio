# Regras de código: EBEN Creative Studio

## Linguagem e estilo

Todo código é escrito em TypeScript com strict ativado no tsconfig. Nomes de variáveis, funções, componentes e arquivos de código ficam em inglês, enquanto o texto exibido ao visitante fica em português do Brasil e mora nos arquivos de src/content, copiado de copy.md. Componentes usam PascalCase e ficam em arquivos com o mesmo nome, como ServiceCard.tsx. Funções e variáveis usam camelCase. Rotas usam nomes em português e em kebab-case, como politica-de-privacidade. Cada componente é uma função nomeada exportada, com as props tipadas por um type declarado logo acima dele. O código é formatado pelo Prettier com o plugin de ordenação de classes do Tailwind e verificado pelo ESLint com a configuração do Next.js, e nenhum commit entra com erro de lint ou de tipo.

## Bibliotecas permitidas

As dependências de execução permitidas são next, react, react-dom, zod, clsx, tailwind-merge e lucide-react para ícones. O GA4 e o Pixel da Meta são carregados pelos scripts oficiais de cada empresa por meio de next/script, sem biblioteca intermediária. O aviso de cookies é feito no próprio projeto, sem biblioteca. As dependências de desenvolvimento permitidas são typescript, tailwindcss e seus plugins oficiais, eslint, eslint-config-next, prettier e prettier-plugin-tailwindcss. Qualquer biblioteca fora dessa lista só entra depois de uma pergunta explícita ao responsável pelo projeto e de um registro no memory.md explicando o motivo.

Pergunta para você: as animações de entrada dos blocos podem ser feitas só com CSS e Tailwind, ou você quer liberar a biblioteca motion para animações mais elaboradas?

## Componentes e dados

Todo componente é Server Component por padrão, e a diretiva "use client" só aparece em componentes que usam estado, efeitos ou eventos do navegador, mantendo esses componentes pequenos e nas pontas da árvore. Texto e dados são importados de src/content e nunca escritos direto dentro de um componente. Imagens usam sempre next/image com width, height e alt preenchidos, a partir de arquivos WebP já exportados no tamanho certo, porque a exportação estática não otimiza imagens. Fontes usam sempre next/font. Classes condicionais são combinadas com a função cn de lib/utils.ts. Cores, tamanhos de fonte e espaçamentos vêm somente dos tokens de design.md.

Todo link de WhatsApp é montado pela função de lib/whatsapp.ts a partir de uma chave de mensagem de site.ts, com o texto codificado por encodeURIComponent, e nunca escrito à mão em um componente. Todo botão de WhatsApp usa o mesmo componente, que dispara o evento Lead antes de abrir o link.

## Rastreamento e consentimento

Nenhum script de rastreamento, cookie de análise ou chamada ao GA4 ou ao Pixel acontece antes de o visitante tocar em Aceitar no aviso de cookies. A escolha fica salva no localStorage com a chave eben-consent e os valores "accepted" ou "rejected", e o aviso volta a aparecer quando não há escolha salva ou quando o visitante usa o link Preferências de cookies do rodapé. Os botões Aceitar e Recusar têm o mesmo tamanho e o mesmo destaque. O evento Lead leva os parâmetros button, com o nome do botão, e source, com o utm_source da chegada ou "direct" quando não houver. Os IDs do GA4 e do Pixel ficam nas variáveis NEXT_PUBLIC_GA_ID e NEXT_PUBLIC_META_PIXEL_ID, que são públicas por natureza e podem ter esse prefixo.

## Tratamento de erro

As variáveis de ambiente são validadas com Zod uma única vez em lib/env.ts. Se os IDs de rastreamento estiverem ausentes, o build continua e o rastreamento fica desligado, com um aviso no terminal do build, para que o site possa ir ao ar antes de as contas existirem. Toda leitura e gravação no localStorage e na sessionStorage fica dentro de try e catch, e uma falha é tratada como ausência de consentimento. Toda chamada a gtag e a fbq verifica antes se a função existe no window e fica dentro de try e catch, porque bloqueadores de anúncio impedem esses scripts de carregar. Uma falha de rastreamento nunca impede a abertura do WhatsApp nem aparece para o visitante. Se o vídeo da abertura não carregar, a imagem de capa continua visível. Endereços inexistentes caem no not-found.tsx.

## Acessibilidade e desempenho

Toda imagem informativa tem texto alternativo descritivo e toda imagem decorativa tem alt vazio. A navegação inteira funciona pelo teclado, com foco visível conforme design.md. A sanfona usa botões com aria-expanded e aria-controls. O aviso de cookies não prende o foco nem cobre o botão de WhatsApp. Vídeos de fundo não têm som, têm o atributo playsInline, exibem uma imagem de capa enquanto carregam e ficam parados quando o visitante pede movimento reduzido no sistema. Vídeos do portfólio só carregam quando a janela abre. A página no celular precisa manter nota de desempenho igual ou acima de 90 no Lighthouse.

## O que nunca fazer

Nunca usar o tipo any nem desativar regras do TypeScript ou do ESLint com comentários. Nunca usar o Pages Router nem misturar os dois roteadores. Nunca criar Server Actions, rotas de API ou qualquer recurso que exija servidor, porque o site é exportação estática. Nunca escrever cores em hexadecimal, tamanhos em pixel ou estilos inline dentro de componentes. Nunca usar a tag img no lugar de next/image nem a tag a para links internos no lugar de next/link. Nunca reproduzir vídeo com som de forma automática. Nunca carregar rastreamento antes do consentimento. Nunca colocar parâmetros UTM no link do WhatsApp. Nunca colocar chaves secretas, tokens ou senhas no código ou em variáveis com prefixo NEXT_PUBLIC, e nunca subir o arquivo .env para o repositório. Nunca publicar trabalho de cliente, depoimento, número de resultado ou foto de pessoa sem autorização confirmada. Nunca inventar dados de contato, números, cases ou depoimentos, e sim deixar a pergunta registrada até a informação real chegar. Nunca mudar um texto da página direto no código sem mudar antes em copy.md. Nunca deixar console.log no código que vai para produção.

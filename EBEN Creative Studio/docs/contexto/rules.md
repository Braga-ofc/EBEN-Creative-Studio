# Regras de código: EBEN Creative Studio

## Linguagem e estilo

Todo código é escrito em TypeScript com strict ativado no tsconfig. Nomes de variáveis, funções, componentes e arquivos de código ficam em inglês, enquanto o texto exibido ao visitante fica em português do Brasil e mora nos arquivos de src/content. Componentes usam PascalCase e ficam em arquivos com o mesmo nome, como ServiceCard.tsx. Funções e variáveis usam camelCase. Rotas usam nomes em português e em kebab-case, como politica-de-privacidade. Cada componente é uma função nomeada exportada, com as props tipadas por um type declarado logo acima dele. O código é formatado pelo Prettier com o plugin de ordenação de classes do Tailwind e verificado pelo ESLint com a configuração do Next.js, e nenhum commit entra com erro de lint ou de tipo.

## Bibliotecas permitidas

As dependências de execução permitidas são next, react, react-dom, zod, clsx, tailwind-merge, lucide-react para ícones e resend para o envio do formulário, este último pendente da sua confirmação. As dependências de desenvolvimento permitidas são typescript, tailwindcss e seus plugins oficiais, eslint, eslint-config-next, prettier e prettier-plugin-tailwindcss. Qualquer biblioteca fora dessa lista só entra depois de uma pergunta explícita ao responsável pelo projeto e de um registro no memory.md explicando o motivo.

Perguntas para você: as animações de entrada das seções podem ser feitas só com CSS e Tailwind, ou você quer liberar a biblioteca motion para animações mais elaboradas?

## Componentes e dados

Todo componente é Server Component por padrão, e a diretiva "use client" só aparece em componentes que usam estado, efeitos ou eventos do navegador, mantendo esses componentes pequenos e nas pontas da árvore. Dados de conteúdo são importados de src/content e nunca escritos direto dentro de um componente. Imagens usam sempre next/image com width, height e alt preenchidos, e fontes usam sempre next/font. Classes condicionais são combinadas com a função cn de lib/utils.ts, que une clsx e tailwind-merge. Cores, tamanhos de fonte e espaçamentos vêm somente dos tokens de design.md.

## Tratamento de erro

Toda entrada externa, seja do formulário ou de variáveis de ambiente, passa por um esquema Zod antes de ser usada. As variáveis de ambiente são validadas uma única vez em lib/env.ts, e o build falha se alguma obrigatória estiver ausente. Server Actions nunca lançam exceção para o cliente e sempre devolvem um objeto tipado no formato { ok: true } ou { ok: false, error: string, fieldErrors?: Record<string, string[]> }. Chamadas a serviços externos ficam dentro de try e catch, o erro técnico é registrado no servidor com console.error junto do nome da ação, e o visitante recebe só uma mensagem amigável em português, como "Não conseguimos enviar sua mensagem agora. Tente de novo ou fale com a gente pelo WhatsApp". Erros de renderização são capturados pelo error.tsx da rota, e endereços inexistentes, incluindo slugs de portfólio que não existem, chamam notFound para cair no not-found.tsx. O formulário desativa o botão de envio enquanto a requisição está em andamento para evitar envio duplicado.

Pergunta para você: deseja proteção contra spam no formulário com um campo oculto armadilha, que não exige biblioteca, ou com um serviço como Cloudflare Turnstile?

## Acessibilidade e desempenho

Toda imagem informativa tem texto alternativo descritivo e toda imagem decorativa tem alt vazio. Todo campo de formulário tem label visível associado. A navegação inteira funciona pelo teclado, com foco visível conforme design.md. Vídeos de fundo não têm som, têm o atributo playsInline, exibem uma imagem de capa enquanto carregam e ficam parados quando o visitante pede movimento reduzido no sistema. A página inicial no celular precisa manter nota de desempenho igual ou acima de 90 no Lighthouse.

## O que nunca fazer

Nunca usar o tipo any nem desativar regras do TypeScript ou do ESLint com comentários. Nunca usar o Pages Router nem misturar os dois roteadores. Nunca escrever cores em hexadecimal, tamanhos em pixel ou estilos inline dentro de componentes. Nunca usar a tag img no lugar de next/image nem a tag a para links internos no lugar de next/link. Nunca reproduzir vídeo com som de forma automática. Nunca buscar no navegador um dado que já pode ser entregue pelo servidor. Nunca colocar chaves, tokens ou senhas no código ou em variáveis com prefixo NEXT_PUBLIC, e nunca subir o arquivo .env para o repositório. Nunca publicar trabalho de cliente, depoimento ou foto de pessoa sem autorização confirmada. Nunca inventar dados de contato, números ou depoimentos, e sim deixar a pergunta registrada até a informação real chegar. Nunca deixar console.log no código que vai para produção.

# Tarefas: EBEN Creative Studio

Cada tarefa gera uma única entrega verificável e só começa depois que a anterior estiver concluída. Ao terminar uma tarefa, a caixa é marcada e qualquer decisão tomada durante ela é registrada no memory.md.

## Fase 1: base do projeto

- [ ] 1. Criar o projeto Next.js com TypeScript, App Router, Tailwind CSS e ESLint dentro da pasta src. Entrega: o comando de desenvolvimento abre a página padrão sem erros.
- [ ] 2. Configurar Prettier com o plugin do Tailwind e ativar strict no tsconfig. Entrega: os comandos de lint, de formatação e de checagem de tipos passam sem erro.
- [ ] 3. Criar a árvore de pastas descrita em architecture.md com arquivos vazios onde for preciso e copiar os SVGs de docs/marca para public/images/brand. Entrega: estrutura de pastas igual à do documento.
- [ ] 4. Criar lib/env.ts com validação Zod e o arquivo .env.example. Entrega: o build falha com mensagem clara quando falta uma variável obrigatória.
- [ ] 5. Declarar no globals.css os tokens de cor, fonte, raio e movimento de design.md, incluindo os três temas de seção, e carregar Fraunces e Manrope pelo next/font. Entrega: página de teste exibindo as cores, os três temas e a escala tipográfica.
- [ ] 6. Criar a função cn em lib/utils.ts. Entrega: função exportada e usada em um componente de teste.
- [ ] 6b. Criar os componentes Logo, com as variantes monograma e assinatura completa, Star, EditorialLine e o contorno circular decorativo descritos em design.md. Entrega: os quatro elementos exibidos nos três temas na página de teste.

## Fase 2: componentes básicos

- [ ] 7. Criar o componente Button com as variantes primary, secondary e ghost e o estado desativado. Entrega: as três variantes renderizadas na página de teste.
- [ ] 8. Criar os componentes de campo de texto, área de texto e seleção com label e mensagem de erro. Entrega: campos renderizados na página de teste com e sem erro.
- [ ] 9. Criar o componente Modal acessível, com fechamento pela tecla Esc e por toque fora, e foco preso dentro dele. Entrega: modal funcionando pelo teclado na página de teste.

## Fase 3: estrutura das páginas

- [ ] 10. Criar os tipos de conteúdo em types/content.ts e preencher src/content/site.ts com nome, contatos e redes sociais. Entrega: arquivo tipado, com perguntas marcadas como TODO onde o dado real ainda não chegou.
- [ ] 11. Criar o Header com menu de computador e menu em tela cheia no celular. Entrega: cabeçalho funcionando nos tamanhos de 375px e 1280px.
- [ ] 12. Criar o Footer, incluindo a linha de crédito "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093" com link para o WhatsApp técnico. Entrega: rodapé exibido em todas as páginas pelo layout raiz.
- [ ] 13. Criar o WhatsAppButton e a função que monta o link wa.me com a mensagem "Oii, EBEN! Vim pela página e quero saber mais sobre [serviço]." a partir de site.ts. Entrega: botão fixo e botões de serviço abrindo a conversa com o texto certo.

## Fase 4: seções da página inicial

- [ ] 14. Criar a seção Hero com vídeo em loop, imagem de capa e respeito ao movimento reduzido. Entrega: seção de abertura publicada na página inicial.
- [ ] 15. Preencher content/services.ts e criar a seção de serviços com ServiceCard. Entrega: os quatro serviços exibidos.
- [ ] 16. Preencher content/projects.ts e criar a seção de portfólio com PortfolioCard e PortfolioFilter. Entrega: grade filtrável por serviço.
- [ ] 17. Ligar o PortfolioCard ao Modal para reproduzir o vídeo do projeto. Entrega: vídeo abrindo e fechando a partir da grade.
- [ ] 18. Criar a seção sobre com história, conceito e equipe a partir de content/team.ts. Entrega: seção sobre publicada.
- [ ] 19. Preencher content/testimonials.ts e criar a seção de depoimentos. Entrega: depoimentos exibidos.

## Fase 5: contato

- [ ] 20. Criar o esquema Zod do formulário em lib/schemas.ts. Entrega: esquema exportado com mensagens de erro em português.
- [ ] 21. Criar o formulário de contato com validação no cliente e estado de envio. Entrega: formulário mostrando erros por campo sem enviar nada.
- [ ] 22. Criar a Server Action em actions/contact.ts com validação, envio para o destino escolhido e retorno tipado. Entrega: um envio de teste chega a gubragah.oficiaal@gmail.com pelo Resend e o formulário mostra a mensagem de sucesso. Bloqueada até a confirmação do Resend e a criação da conta.

## Fase 6: páginas internas

- [ ] 23. Criar a página /portfolio com a lista completa de projetos. Entrega: página publicada.
- [ ] 24. Criar a página /portfolio/[slug] com generateStaticParams e notFound para slugs inexistentes. Entrega: uma página estática por projeto.
- [ ] 25. Criar a página de política de privacidade. Entrega: página publicada com o texto aprovado. Bloqueada até a pergunta sobre quem redige ou revisa esse texto.
- [ ] 26. Criar not-found.tsx e error.tsx no visual da marca. Entrega: as duas telas aparecem nos casos de erro.

## Fase 7: publicação

- [ ] 27. Configurar metadados, imagem de compartilhamento, sitemap.ts e robots.ts. Entrega: link compartilhado no WhatsApp exibe título, descrição e imagem.
- [ ] 28. Rodar o Lighthouse no celular e corrigir o que impedir nota 90 em desempenho, acessibilidade e SEO. Entrega: relatório com as três notas iguais ou acima de 90.
- [ ] 29. Publicar o site na hospedagem escolhida, entre Vercel Pro, Cloudflare e Netlify, com as variáveis de ambiente configuradas. Entrega: site acessível no endereço provisório da hospedagem. Bloqueada até a escolha da hospedagem.
- [ ] 30. Registrar e apontar o domínio, verificar o domínio no Resend e testar formulário e WhatsApp em produção. Entrega: pedido de teste recebido a partir do domínio oficial. Bloqueada até a definição do domínio.

Perguntas para você: quem vai escrever os textos finais de serviços, sobre e política de privacidade, a agência ou eu a partir de um rascunho seu? Existe algum prazo que mude a ordem dessas tarefas?

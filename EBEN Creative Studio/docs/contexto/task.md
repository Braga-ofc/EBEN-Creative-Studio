# Tarefas: EBEN Creative Studio

Cada tarefa gera uma única entrega verificável e só começa depois que a anterior estiver concluída. Ao terminar uma tarefa, a caixa é marcada e qualquer decisão tomada durante ela é registrada no memory.md. Todo texto visível vem de copy.md, e trechos marcados como PENDENTE entram no código com um comentário TODO e ficam escondidos até a resposta chegar.

## Fase 1: base do projeto

- [ ] 1. Criar o projeto Next.js com TypeScript, App Router, Tailwind CSS e ESLint dentro da pasta src. Entrega: o comando de desenvolvimento abre a página padrão sem erros.
- [ ] 2. Configurar output "export" e images.unoptimized no next.config.ts, Prettier com o plugin do Tailwind e strict no tsconfig. Entrega: o build gera a pasta out e os comandos de lint, formatação e checagem de tipos passam sem erro.
- [ ] 3. Criar a árvore de pastas descrita em architecture.md e copiar os SVGs de docs/marca para public/images/brand. Entrega: estrutura de pastas igual à do documento.
- [ ] 4. Criar lib/env.ts com validação Zod de NEXT_PUBLIC_GA_ID e NEXT_PUBLIC_META_PIXEL_ID, opcionais, e o arquivo .env.example. Entrega: o build passa sem os IDs, com um aviso no terminal.
- [ ] 5. Declarar no globals.css os tokens de cor, fonte, raio e movimento de design.md, incluindo os três temas de seção, e carregar Fraunces e Manrope pelo next/font. Entrega: página de teste exibindo as cores, os três temas e a escala tipográfica.
- [ ] 6. Criar a função cn em lib/utils.ts. Entrega: função exportada e usada em um componente de teste.
- [ ] 7. Criar os componentes Logo, com as variantes monograma e assinatura completa, Star, EditorialLine e o contorno circular decorativo. Entrega: os quatro elementos exibidos nos três temas na página de teste.

## Fase 2: componentes básicos

- [ ] 8. Criar o componente Button com as variantes primary, secondary e ghost nos três temas. Entrega: as três variantes renderizadas nos três temas na página de teste.
- [ ] 9. Criar o componente Accordion acessível, com um item aberto por vez. Entrega: sanfona funcionando pelo mouse e pelo teclado na página de teste.
- [ ] 10. Criar o componente Modal acessível, com fechamento pela tecla Esc e por toque fora, e foco preso dentro dele. Entrega: modal funcionando pelo teclado na página de teste.

## Fase 3: conteúdo, WhatsApp e consentimento

- [ ] 11. Criar os tipos em types/content.ts e preencher site.ts com nome, números, links e a tabela de mensagens do WhatsApp de copy.md. Entrega: arquivo tipado e sem erro de tipo.
- [ ] 12. Preencher landing.ts com o texto de todos os blocos de copy.md, e cases.ts, projects.ts e clients.ts com o que já for real. Entrega: todo o texto de copy.md presente em content, com TODO nos pendentes.
- [ ] 13. Criar lib/whatsapp.ts, que monta o link wa.me a partir de uma chave de mensagem. Entrega: os cinco links da tabela de copy.md abrindo com o texto certo.
- [ ] 14. Criar lib/consent.ts e o componente CookieBanner, com Aceitar, Recusar e reabertura pelo rodapé. Entrega: a escolha fica salva e o aviso some e volta conforme as regras de rules.md.
- [ ] 15. Criar lib/analytics.ts e o ConsentManager, que carrega GA4 e Pixel só depois do aceite, guarda o utm_source e expõe trackLead. Entrega: com aceite, o evento Lead aparece no DebugView do GA4 e no Meta Pixel Helper, e sem aceite nenhuma requisição de rastreamento sai do navegador. Pode ser feita com IDs de teste. Sem os IDs reais, o site vai ao ar com o rastreamento desligado.
- [ ] 16. Criar o WhatsAppButton, que chama trackLead e abre o link, e o botão fixo. Entrega: todos os botões abrem a conversa certa, com e sem bloqueador de anúncio.

## Fase 4: estrutura da página

- [ ] 17. Criar o Header com âncoras, botão de WhatsApp e menu em tela cheia no celular. Entrega: cabeçalho funcionando nos tamanhos de 375px e 1280px.
- [ ] 18. Criar o Footer com slogan, contato, links legais, Preferências de cookies e a linha de crédito da BRAGA SYSTEMS. Entrega: rodapé exibido em todas as páginas pelo layout raiz.

## Fase 5: blocos da página

- [ ] 19. Criar o bloco 1, abertura com vídeo, imagem de capa e respeito ao movimento reduzido. Entrega: headline e botão visíveis sem rolar em 375px por 667px.
- [ ] 20. Criar os blocos 2 e 3, proposta de valor e dor, com SplitStatement e PainList. Entrega: os dois blocos publicados na página.
- [ ] 21. Criar o bloco 4, jeito EBEN de trabalhar, com StepList e os três ServiceCard. Entrega: cada cartão abre o WhatsApp com a mensagem do seu serviço.
- [ ] 22. Criar o bloco 5, benefícios, com BenefitList. Entrega: os oito benefícios publicados.
- [ ] 23. Criar a parte de números e cases do bloco 6, com StatNumber e CaseCard. Entrega: números e cases publicados, com os pendentes escondidos.
- [ ] 24. Criar o portfólio do bloco 6 com PortfolioCard, PortfolioFilter e o vídeo no Modal. Entrega: grade filtrável abrindo os vídeos. Bloqueada até a resposta sobre a hospedagem dos vídeos.
- [ ] 25. Criar o LogoStrip do bloco 6. Entrega: logos dos clientes publicados. Bloqueada até o envio dos logos.
- [ ] 26. Criar o bloco 7, oferta, com a lista do que entra, o StepList das cinco etapas, investimento e botão. Entrega: bloco de oferta publicado.
- [ ] 27. Criar os blocos 8 e 11, objeções e perguntas frequentes, com Accordion. Entrega: os dois blocos publicados.
- [ ] 28. Criar o bloco 9, garantia, com GuaranteeList. Entrega: os quatro compromissos publicados.
- [ ] 29. Criar o bloco 10, vagas e diagnóstico, com DiagnosticBanner. Entrega: botão do diagnóstico abrindo a mensagem certa.
- [ ] 30. Criar o bloco 12, chamada final e PS, com FinalCta. Entrega: bloco publicado com os dois botões.

## Fase 6: páginas de apoio

- [ ] 31. Criar a página de Política de Privacidade, cobrindo cookies, GA4, Pixel da Meta e o contato pelo WhatsApp. Entrega: página publicada com o texto aprovado. Bloqueada até o nome do responsável pelos dados, que é pessoa física, e o e-mail para pedidos dos titulares.
- [ ] 32. Criar a not-found.tsx no visual da marca. Entrega: a tela aparece em um endereço inexistente.
- [ ] 33. Configurar metadados, imagem de compartilhamento, sitemap.ts e robots.ts. Entrega: link compartilhado no WhatsApp exibe título, descrição e imagem.

## Fase 7: publicação

- [ ] 34. Rodar o Lighthouse no celular e corrigir o que impedir nota 90 em desempenho, acessibilidade e SEO. Entrega: relatório com as três notas iguais ou acima de 90.
- [ ] 35. Publicar a pasta out na hospedagem escolhida, com os IDs de rastreamento configurados. Entrega: site acessível no endereço provisório da hospedagem. Bloqueada até a escolha da hospedagem.
- [ ] 36. Registrar e apontar o domínio e testar todos os botões de WhatsApp e o rastreamento em produção. Entrega: evento Lead registrado a partir do domínio oficial, com a origem certa vinda de um link com UTM. Bloqueada até a definição do domínio.

Pergunta para você: existe algum prazo que mude a ordem dessas tarefas?

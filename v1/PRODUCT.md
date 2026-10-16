# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

TypeScript, React, Next.js (App Router) e Tailwind CSS, definidos pelo responsável pelo projeto. Exportação estática (`output: "export"`), sem servidor, publicada no Netlify em https://ebencreative.netlify.app. O nome `v1/` vem de quando a página foi criada como a primeira de três versões independentes; neste repositório só existe esta.

## Users

Empresários, clínicas, marcas pessoais, empresas e quem precisa de cobertura de eventos sociais, corporativos e institucionais, que querem crescer no digital e valorizam estratégia, criatividade e uma comunicação bem construída. Chegam quase sempre pelo celular, por um link do Instagram, de uma indicação ou de um anúncio. A página atende quem já conhece a EBEN e vai direto ao botão e quem não conhece e precisa ler a dor, o jeito de trabalhar e a prova antes de chamar.

## Product Purpose

A EBEN Creative Studio é uma agência de comunicação criativa e audiovisual com três frentes: Social Media, Videomaker e Storymaker. A landing page existe para levar o visitante a agendar uma consultoria gratuita (objetivo principal) e mostrar o portfólio (objetivo secundário). O botão "Agendar uma consultoria" abre o WhatsApp da agência, +55 61 99454-1957, com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria." Sucesso é o número de conversas iniciadas por esse botão.

## Positioning

A EBEN não começa pelo post: começa pela essência da marca (quem ela é, pra quem fala e como isso vira conteúdo) e só depois entra com planejamento, vídeo e bastidores em tempo real. Em eventos, não entrega só fotos e vídeos: entrega a forma como a ocasião vai ser lembrada. Conceito oficial: "Não capturamos momentos. Eternizamos histórias."

## Operating Context

O contato e a aprovação dos conteúdos acontecem pelo WhatsApp. Atendimento de segunda a sábado, das 8h às 18h, com resposta em até 2 horas nesse horário. Gravações são agendadas com antecedência. A primeira entrega acontece entre 3 dias e 1 semana após o fechamento. Contrato mínimo de 3 meses, pagamento por Pix ou cartão, orçamento sob medida.

## Capabilities and Constraints

Conversão só pelo WhatsApp, sem formulário. A medição (GA4, e o Clarity e o Pixel da Meta quando os IDs chegarem) só carrega depois do aceite num aviso de cookies discreto, no canto de baixo, que não pode cobrir o botão principal. O texto aprovado da página está em `../docs/contexto/copy.md`. Todas as fotos do site são reais (a Geovana na primeira tela, no manifesto e no "Quem sou eu?", as fotos de perfil das clientes e as mídias do portfólio); nenhuma imagem pode ser gerada ou buscada em banco de imagens. O domínio final ainda não existe: o site usa o endereço do Netlify, pela variável `NEXT_PUBLIC_SITE_URL`. Os perfis do Instagram são @eben.creative_ (agência) e @geoo.silvaz (trabalhos da Geovana). A região de atuação e a lista de logos de clientes ainda não foram informadas.

## Brand Commitments

Brandkit oficial (EBEN_Creative_Studio_Brandkit.pdf): Burgundy #8F0012 (cor principal), Warm Ivory #F7EAD7, Champagne Gold #C6A36A, Deep Charcoal #21191A e Dusty Rose #C58D91, com proporção sugerida de 48%, 28%, 12%, 8% e 4%. Fraunces para logo, títulos e frases de impacto, Manrope para textos e botões. Elementos gráficos: monograma circular EBEN, estrela de quatro pontas (separadores, detalhes, marca-d'água discreta, sem excesso), formas circulares sutis (lente, ciclo, permanência) e linhas editoriais finas. Linguagem cinematográfica e emocional, luz quente, momentos reais. O responsável pelo projeto definiu que o brandkit manda nas cores e nas fontes desta versão.

Restrições do briefing: nada de gradientes roxos, formas 3D brilhantes, fotos de banco sem tratamento, elementos excessivamente arredondados ou amigáveis, tipografia só em Inter ou fonte de sistema, grades genéricas de ícones e paletas com muitas cores distribuídas por igual. Tom calmo, confiante e moderno, refinado mas despojado.

## Evidence on Hand

Logo em `../docs/marca/eben-monograma.svg` e estrela em `../docs/marca/eben-estrela.svg`, ambos em currentColor, e no sprite `public/brand/eben-sprite.svg`. Cases autorizados, com nome, números e foto de perfil: Sued Silva (cantora gospel, Social Media), de 1 milhão para 1,2 milhão de seguidores no Instagram em 1 ano; Juliana Arantes (consultora de negócios, Social Media), 507 mil visualizações e mais de 10 mil interações, com 3 meses de gestão. O portfólio tem fotos, vídeos e prints de clientes de Social Media, Videomaker, Storymaker e Mobile Photo, guardados no Google Drive da agência. Não existem depoimentos em frase, terceiro case nem logos de clientes, e nada disso pode ser inventado. A contagem de clientes ("aproximadamente 6" em Social Media e 11 projetos de Storymaker e Videomaker) não foi confirmada como exata e não aparece como número.

## Product Principles

1. Estratégia antes do post: toda peça nasce da essência da marca.
2. Prometer processo, nunca resultado: presença planejada, constância e identidade, sem garantir seguidores ou vendas.
3. Uma ação por página: agendar a consultoria gratuita pelo WhatsApp.
4. Só o que é real vai ao ar: números, cases e escassez apenas quando verdadeiros e autorizados.

## Accessibility & Inclusion

WCAG AA em contraste e navegação por teclado, respeito a `prefers-reduced-motion` e leitura confortável no celular, onde chega a maior parte do público. As exceções ao movimento reduzido, decididas pelo responsável pelo projeto, são o carrossel da primeira tela (que tem botão de pausa), o brilho girando atrás do botão principal e o ícone do Instagram; o vídeo principal do case da Sued também continua tocando, registrado como desvio no `docs/contexto/rules.md`.

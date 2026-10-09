# Memória do projeto: EBEN Creative Studio

Este arquivo registra as decisões do projeto em ordem cronológica, da mais antiga para a mais recente. Cada entrada é escrita uma única vez e não é apagada, e quando uma decisão muda, uma nova entrada explica a mudança e cita a data da entrada anterior.

## Formato de registro

```
### AAAA-MM-DD: título curto da decisão

Decisão: o que foi decidido.
Motivo: por que foi decidido assim.
Impacto: quais arquivos, tarefas ou regras mudam por causa disso.
```

## Registros

### 2026-10-09: definição da stack

Decisão: o site da EBEN Creative Studio será construído com TypeScript, React, Next.js usando App Router e Tailwind CSS.
Motivo: stack definida pelo responsável pelo projeto na abertura do trabalho.
Impacto: a arquitetura, as regras de código, os tokens de design e a lista de tarefas em docs/contexto seguem essa stack.

### 2026-10-09: destino provisório do formulário de contato

Decisão: os pedidos do formulário são enviados por e-mail para gubragah.oficiaal@gmail.com, endereço guardado na variável de ambiente CONTACT_TO_EMAIL, com o Resend proposto como serviço de envio.
Motivo: definição do responsável pelo projeto até existir um destino definitivo.
Impacto: tarefa 22 do task.md, architecture.md e lista de bibliotecas do rules.md. O Resend ainda aguarda confirmação.

### 2026-10-09: WhatsApp da agência

Decisão: o botão de WhatsApp aponta para o número informado, +55 61 9454-1957.
Motivo: número oficial informado pelo responsável pelo projeto.
Impacto: content/site.ts e tarefa 13 do task.md. O número tem 8 dígitos depois do DDD e precisa ser confirmado antes da publicação.

### 2026-10-09: identidade visual existente

Decisão: a EBEN já tem logotipo e paleta oficial, e os valores de cor e fonte do design.md passam a ser provisórios até os arquivos da marca chegarem.
Motivo: confirmação do responsável pelo projeto.
Impacto: design.md e tarefa 5 do task.md.

### 2026-10-09: hospedagem e domínio

Decisão: ainda não existe site, hospedagem nem domínio. A Vercel foi proposta como hospedagem e o domínio fica pendente.
Motivo: o site está sendo criado do zero.
Impacto: tarefas 29 e 30 do task.md.

Pendente: a hospedagem dos vídeos do portfólio, que o responsável ficou de informar em breve.

### 2026-10-09: paleta e tipografia oficiais

Decisão: o design.md passa a usar o brandkit oficial, com as cores Burgundy #8F0012, Warm Ivory #F7EAD7, Champagne Gold #C6A36A, Deep Charcoal #21191A e Dusty Rose #C58D91, a fonte Fraunces para títulos e Manrope para textos. O site alterna seções em três temas, burgundy, marfim e charcoal.
Motivo: brandkit EBEN_Creative_Studio_Brandkit.pdf enviado pelo responsável pelo projeto. Substitui a proposta provisória registrada em 2026-10-09 na entrada sobre identidade visual existente.
Impacto: design.md reescrito e tarefas 5 e 6b do task.md. Dourado nunca é usado como texto sobre marfim, porque o contraste é de 2 para 1. Os arquivos originais do logotipo ainda não chegaram.

### 2026-10-09: logotipo e número de WhatsApp confirmados

Decisão: o WhatsApp oficial é +55 61 99454-1957, com o link https://wa.me/5561994541957, corrigindo a entrada anterior sobre o WhatsApp da agência, que tinha um dígito a menos. O logotipo usado no site é o docs/marca/eben-monograma.svg, gerado a partir do Logo.svg recebido, e a estrela é o docs/marca/eben-estrela.svg, recortada do monograma. Os dois usam currentColor.
Motivo: logo em SVG e número corrigido enviados pelo responsável pelo projeto.
Impacto: prd.md, design.md e tarefas 3, 6b e 13 do task.md. O Logo.svg original foi vetorizado de forma automática, e um arquivo vetorial feito pelo designer, se existir, deve substituí-lo.

### 2026-10-09: números de contato separados e mensagem do WhatsApp

Decisão: o site mostra só o WhatsApp da agência, +55 61 99454-1957. O número +55 61 99422-7093 é o contato técnico do responsável pela criação do código e pela manutenção do site e não aparece nas páginas da agência. A mensagem preenchida no WhatsApp é "Oii, EBEN! Vim pela página e quero saber mais sobre [serviço].", com [serviço] trocado pelo nome do serviço de onde o visitante clicou.
Motivo: definição do responsável pelo projeto.
Impacto: prd.md, content/site.ts e tarefa 13 do task.md. O texto para botões sem serviço específico ainda aguarda confirmação.

### 2026-10-09: pesquisa de hospedagem gratuita

Decisão: a hospedagem fica para o responsável pelo projeto decidir depois, entre Vercel Pro, Cloudflare e Netlify. A Vercel Hobby fica descartada porque proíbe uso comercial. Os vídeos serão servidos por um serviço de vídeo, e não pela hospedagem.
Motivo: pesquisa feita nas páginas oficiais de preços e termos da Vercel, da Netlify e da Cloudflare e no guia do OpenNext.
Impacto: architecture.md e tarefa 29 do task.md, que corrige a entrada anterior sobre hospedagem e domínio, em que a Vercel tinha sido proposta.

### 2026-10-09: crédito do desenvolvedor e mensagem geral do WhatsApp

Decisão: o rodapé traz a linha "Site desenvolvido por BRAGA SYSTEMS · +55 61 99422-7093", com o número levando a https://wa.me/5561994227093, e esse é o único lugar do site em que o número técnico aparece. Os botões de WhatsApp sem serviço específico usam a mensagem "Oii, EBEN! Vim pela página e quero saber mais sobre os serviços de vocês."
Motivo: confirmação do responsável pelo projeto. Ajusta a entrada anterior sobre números de contato separados, que dizia que o número técnico não aparecia no site.
Impacto: prd.md, design.md, content/site.ts e tarefas 12 e 13 do task.md.

### 2026-10-09: formato do número no crédito

Decisão: a linha de crédito exibe o número sem o código do país, no texto "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093". O link continua https://wa.me/5561994227093, porque o WhatsApp exige o código 55 para abrir a conversa.
Motivo: pedido do responsável pelo projeto. Ajusta o texto da entrada anterior sobre o crédito do desenvolvedor.
Impacto: prd.md, design.md e tarefa 12 do task.md.

### 2026-10-09: copy da landing page e novo escopo da primeira versão

Decisão: a copy enviada pelo responsável pelo projeto virou o arquivo copy.md, reescrita na voz da agência, com a headline "Postar todo dia não é ter presença.", sem nome de método e com as três frentes Social Media, Videomaker e Storymaker. A primeira versão passa a ser uma landing page de página única que converte só pelo WhatsApp, sem formulário, com GA4 e Pixel da Meta carregados depois do aceite no aviso de cookies e o evento Lead em todo clique de WhatsApp. O formulário, as páginas de detalhe do portfólio e a seção sobre foram para depois.
Motivo: decisões do responsável pelo projeto sobre formulário, headline, nome do método e rastreamento, e a estrutura de blocos definida na copy.
Impacto: prd.md, rules.md, design.md e task.md reescritos ou ajustados. O Resend e a entrada sobre o destino provisório do formulário deixam de valer para a primeira versão.

### 2026-10-09: exportação estática

Decisão: o site é gerado como exportação estática do Next.js, com output "export" e otimização de imagens desligada, e as imagens entram no repositório já em WebP no tamanho de uso.
Motivo: sem formulário, nada precisa rodar em servidor, e a exportação estática permite hospedagem gratuita sem adaptador e com transferência ilimitada na Cloudflare.
Impacto: architecture.md, rules.md e tarefas 2 e 35 do task.md. Quando o formulário entrar, essa decisão precisa ser revista.

### 2026-10-09: UTM no link do site e não no WhatsApp

Decisão: a origem da visita é medida por parâmetros UTM no link que leva ao site, e o utm_source vai junto com o evento Lead. O link do WhatsApp não leva UTM.
Motivo: a copy original sugeria UTM no link wa.me, mas o WhatsApp ignora esses parâmetros e nada seria medido.
Impacto: architecture.md, rules.md e tarefa 15 do task.md.

### 2026-10-09: horário, cases, depoimentos, rastreamento e responsável pelos dados

Decisão: o horário de atendimento é de segunda a sábado, das 8h às 18h, e a página promete resposta em até 2 horas dentro dele. O case da Sued Silva aconteceu em 1 ano e a gestão da Juliana Arantes durou 3 meses, com uso de nome e números autorizado pelas duas. A primeira versão vai ao ar sem depoimentos em frase, porque ainda não existem. As contas do GA4 e do Pixel ainda não existem, e o site pode ir ao ar com o rastreamento desligado até os IDs chegarem. O responsável pelos dados na Política de Privacidade é uma pessoa física.
Motivo: respostas do responsável pelo projeto.
Impacto: copy.md, architecture.md, design.md e tarefas 15 e 31 do task.md.

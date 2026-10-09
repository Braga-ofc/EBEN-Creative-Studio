# PRD: EBEN Creative Studio

## Produto

A EBEN Creative Studio é uma agência de comunicação criativa e audiovisual especializada em Social Media, produção de vídeos, Storymaker e criação de conteúdo digital. Este projeto é o site da agência, construído em TypeScript, React, Next.js e Tailwind CSS, e tem a função de apresentar a agência, mostrar o trabalho já produzido e transformar visitantes em pedidos de orçamento. O conceito que guia todo o conteúdo e o visual é a frase "Não capturamos momentos. Eternizamos histórias".

Pergunta para você: o produto é de fato um site institucional com portfólio e captação de contatos, ou existe também a intenção de ter um sistema interno, como área do cliente ou painel de gestão de pedidos, já na primeira versão?

## Problema

Empresas, empreendedores, profissionais e marcas têm dificuldade de transformar ideias, serviços e momentos importantes em conteúdos criativos, estratégicos e visualmente profissionais. Do lado da agência, o problema que o site resolve é a falta de um lugar próprio, rápido e bem apresentado onde o potencial cliente entende o que a EBEN faz, vê a qualidade das produções em vídeo e consegue pedir um orçamento sem atrito.

Pergunta para você: hoje os clientes chegam principalmente por onde, Instagram, indicação ou WhatsApp, e qual desses canais o site precisa alimentar primeiro?

## Usuário alvo

O usuário principal é o dono ou responsável pela comunicação de uma empresa, um empreendedor ou um profissional liberal que quer fortalecer a presença digital da marca e precisa de alguém que produza vídeos, cuide das redes sociais ou registre um evento. Ele chega ao site quase sempre pelo celular, vindo de um link no Instagram ou de uma indicação, e decide em poucos segundos se o trabalho tem a qualidade que ele procura. O usuário secundário é a própria equipe da EBEN, que precisa atualizar portfólio e textos sem depender de um desenvolvedor a cada mudança.

Perguntas para você: existe um segmento prioritário, como eventos, gastronomia, saúde ou varejo, que deve aparecer em destaque? Qual é a cidade ou região de atuação, e a agência atende fora dela? O público é só pessoa jurídica ou também pessoa física, por exemplo casamentos e aniversários?

## Funcionalidades da primeira versão

A primeira versão é um site de uma página principal com seções e algumas páginas internas, todo com conteúdo estático versionado no próprio repositório.

1. Página inicial com uma seção de abertura que exibe um vídeo curto em loop sem som, o conceito "Não capturamos momentos. Eternizamos histórias" e um botão de pedido de orçamento.
2. Seção de serviços que apresenta Social Media, produção de vídeos, Storymaker e criação de conteúdo digital, cada um com descrição curta e o que está incluído.
3. Seção de portfólio com uma grade de trabalhos filtrável por tipo de serviço, em que cada item abre o vídeo ou as imagens em uma janela sobreposta.
4. Página de detalhe de cada projeto do portfólio, com contexto do cliente, o que foi feito e o resultado, em endereço próprio para poder ser compartilhado.
5. Seção sobre a agência, com a história, o conceito e a equipe.
6. Seção de depoimentos de clientes.
7. Formulário de contato com nome, empresa, WhatsApp, e-mail, serviço de interesse e mensagem, validado no cliente e no servidor.
8. Botão fixo de WhatsApp visível em todas as páginas no celular e no computador.
9. Rodapé com redes sociais, contato, informações legais e a linha de crédito do desenvolvedor, BRAGA SYSTEMS.
10. Metadados de SEO, imagem de compartilhamento para redes sociais, sitemap e robots.
11. Página de política de privacidade, necessária porque o formulário coleta dados pessoais.
12. Páginas de erro 404 e de erro genérico no visual da marca.

O projeto tem dois números de WhatsApp com papéis separados. O número da agência, +55 61 99454-1957, com o link https://wa.me/5561994541957, é o número usado em todos os botões e contatos do site e recebe todo contato de clientes. O número do responsável pelo código, pela criação e pela manutenção do site é +55 61 99422-7093 e é usado só para assuntos técnicos e aparece no site em um único lugar, a linha de crédito do rodapé, no texto "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093", com o número levando ao link https://wa.me/5561994227093. O formulário envia os pedidos, por enquanto, para o e-mail gubragah.oficiaal@gmail.com.

A mensagem que abre preenchida no WhatsApp é "Oii, EBEN! Vim pela página e quero saber mais sobre [serviço].", em que [serviço] é trocado pelo nome do serviço quando o visitante toca no botão de um serviço específico, como Social Media ou Storymaker.

No botão fixo de WhatsApp e nos botões gerais, onde não há um serviço escolhido, a mensagem é "Oii, EBEN! Vim pela página e quero saber mais sobre os serviços de vocês." Onde os vídeos do portfólio estão hospedados hoje, YouTube, Vimeo ou só em arquivo? Essa resposta ficou de chegar em breve. Quantos projetos de portfólio existem prontos para publicar, e vocês têm autorização dos clientes para exibir cada um? Existem depoimentos reais já coletados? A equipe deve aparecer com nome e foto?

## Funcionalidades para depois

1. Blog ou área de conteúdos com dicas de comunicação, para atrair visitantes por busca orgânica.
2. Gerenciador de conteúdo externo, como Sanity ou outro CMS, para a equipe editar portfólio e textos sem mexer no código.
3. Páginas de destino separadas por serviço ou por segmento, pensadas para anúncios pagos.
4. Pacotes e preços publicados, caso a agência decida mostrar valores.
5. Agendamento de reunião integrado a uma agenda.
6. Versão do site em inglês ou espanhol.
7. Área do cliente para aprovação de conteúdos e entrega de arquivos.
8. Integração com analytics e pixel de anúncios com painel de conversões.

Pergunta para você: alguma dessas funcionalidades precisa subir para a primeira versão por causa de uma campanha ou prazo comercial já marcado?

## Critério de sucesso

O sucesso da primeira versão é medido pelo número de pedidos de orçamento recebidos pelo formulário e pelo WhatsApp a partir do site, e pela nota de desempenho do Lighthouse no celular igual ou acima de 90.

Perguntas para você: existe uma meta numérica de pedidos por mês? Existe data limite para o site estar no ar?

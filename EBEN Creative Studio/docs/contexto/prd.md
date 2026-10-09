# PRD: EBEN Creative Studio

## Produto

A EBEN Creative Studio é uma agência de comunicação criativa e audiovisual que trabalha com três frentes: Social Media, Videomaker e Storymaker. Este projeto é a landing page da agência, construída em TypeScript, React, Next.js e Tailwind CSS, pensada primeiro para o celular, com a função de transformar visitantes em conversas no WhatsApp. O conceito que guia o visual é a frase "Não capturamos momentos. Eternizamos histórias", e o texto completo da página está em copy.md.

## Problema

Empreendedores, profissionais e empresas sabem que precisam estar nas redes, mas não conseguem começar, manter o ritmo ou fazer o conteúdo parecer com o que o negócio realmente é. O resultado são perfis sem constância, com conteúdo genérico, que não mostram o valor do trabalho. Do lado da agência, a página resolve a falta de um lugar próprio onde o potencial cliente entende o jeito EBEN de trabalhar, vê resultados reais e chama no WhatsApp sem atrito.

Pergunta para você: hoje os clientes chegam principalmente por onde, Instagram, indicação ou anúncio?

## Usuário alvo

O usuário principal é o empresário, a clínica, a marca pessoal ou a empresa que quer crescer no digital e valoriza estratégia, criatividade e uma comunicação bem construída, além de quem precisa de cobertura de eventos sociais, corporativos e institucionais. Ele chega quase sempre pelo celular, vindo do Instagram, de uma indicação ou de um anúncio. A página atende dois perfis: quem já conhece a EBEN e vai direto ao botão, e quem não conhece e precisa ler a dor, o jeito de trabalhar e a prova antes de chamar.

Pergunta para você: qual é a cidade ou região de atuação para gravações presenciais, e a agência atende fora dela?

## Funcionalidades da primeira versão

A primeira versão é uma página única com os blocos de copy.md na ordem definida, com todo o conteúdo estático versionado no repositório e conversão somente pelo WhatsApp.

1. Abertura com vídeo curto em loop sem som, headline, subheadline, proposta resumida e botão de WhatsApp com microcopy.
2. Blocos de proposta de valor, dor, jeito EBEN de trabalhar com as três frentes e benefícios, em que cada frente tem o próprio botão de WhatsApp com a mensagem daquele serviço.
3. Prova social com números em destaque, cases com resultado, portfólio filtrável por serviço com vídeo em janela sobreposta e faixa de logos de clientes.
4. Oferta com o que entra, as cinco etapas de como funciona, investimento sob medida e botão de proposta.
5. Quebra de objeções e perguntas frequentes em formato de sanfona, que abre uma resposta por vez.
6. Garantia de processo, aviso de vagas limitadas e oferta do diagnóstico gratuito do perfil com botão próprio.
7. Chamada final e PS, cada um com botão de WhatsApp.
8. Botão fixo de WhatsApp visível o tempo todo.
9. Rodapé com slogan, WhatsApp, Instagram, links legais e a linha de crédito do desenvolvedor.
10. Google Analytics 4 e Pixel da Meta, carregados só depois que o visitante aceita os cookies, com o evento Lead disparado em todo clique de botão de WhatsApp.
11. Aviso de cookies com os botões Aceitar e Recusar e opção de mudar a escolha depois pelo rodapé.
12. Página de Política de Privacidade, exigida pela LGPD por causa dos cookies de rastreamento.
13. Metadados de SEO, imagem de compartilhamento para redes sociais, sitemap e robots.
14. Página 404 no visual da marca.

O projeto tem dois números de WhatsApp com papéis separados. O número da agência, +55 61 99454-1957, com o link https://wa.me/5561994541957, é o número usado em todos os botões e contatos da página. O número do responsável pelo código, pela criação e pela manutenção do site é +55 61 99422-7093, é usado só para assuntos técnicos e aparece em um único lugar, a linha de crédito do rodapé, no texto "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093", com o número levando ao link https://wa.me/5561994227093. As mensagens que abrem preenchidas em cada botão estão na tabela do início de copy.md.

Perguntas para você: onde os vídeos do portfólio e da abertura estão hospedados hoje, YouTube, Vimeo ou só em arquivo? Quantos projetos de portfólio existem prontos para publicar? As demais perguntas de conteúdo estão no fim de copy.md.

## Funcionalidades para depois

1. Formulário de contato com envio por e-mail para gubragah.oficiaal@gmail.com e caixa de consentimento da LGPD.
2. Página de detalhe de cada projeto do portfólio, com contexto, o que foi feito e o resultado.
3. Seção sobre a agência, com história e equipe.
4. Páginas de destino separadas por serviço ou por segmento, para anúncios pagos.
5. Blog ou área de conteúdos para atrair visitantes por busca orgânica.
6. Gerenciador de conteúdo externo, para editar textos e portfólio sem mexer no código.
7. Agendamento de reunião integrado a uma agenda.
8. Área do cliente para aprovação de conteúdos e entrega de arquivos.

## Critério de sucesso

O sucesso da primeira versão é medido pelo número de eventos Lead registrados no GA4 e no Pixel da Meta, ou seja, cliques em botões de WhatsApp, e pela nota de desempenho do Lighthouse no celular igual ou acima de 90.

Perguntas para você: existe uma meta de conversas por mês vindas da página? Existe data limite para a página estar no ar, por exemplo o início de uma campanha de tráfego pago?

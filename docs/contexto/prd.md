# PRD: EBEN Creative Studio

## Produto

A EBEN Creative Studio é uma agência de comunicação criativa e audiovisual que trabalha com três frentes: Social Media, Videomaker e Storymaker. Este projeto é a landing page da agência, construída em TypeScript, React, Next.js e Tailwind CSS, pensada primeiro para o celular, com a função de transformar visitantes em conversas no WhatsApp, a partir de uma consultoria gratuita. O conceito que guia o visual é a frase "Não capturamos momentos. Eternizamos histórias", e o texto completo da página está em copy.md. O código fica na pasta v1 do repositório.

## Problema

Empreendedores, profissionais e empresas sabem que precisam estar nas redes, mas não conseguem começar, manter o ritmo ou fazer o conteúdo parecer com o que o negócio realmente é. O resultado são perfis sem constância, com conteúdo genérico, que não mostram o valor do trabalho. Do lado da agência, a página resolve a falta de um lugar próprio onde o potencial cliente entende o jeito EBEN de trabalhar, vê resultados reais e chama no WhatsApp sem atrito.

Pergunta para você: hoje os clientes chegam principalmente por onde, Instagram, indicação ou anúncio?

## Usuário alvo

O usuário principal é o empresário, a clínica, a marca pessoal ou a empresa que quer crescer no digital e valoriza estratégia, criatividade e uma comunicação bem construída, além de quem precisa de cobertura de eventos sociais, corporativos e institucionais. Ele chega quase sempre pelo celular, vindo do Instagram, de uma indicação ou de um anúncio. A página atende dois perfis: quem já conhece a EBEN e vai direto ao botão, e quem não conhece e precisa ler a dor, o jeito de trabalhar e a prova antes de chamar.

Pergunta para você: qual é a cidade ou região de atuação para gravações presenciais, e a agência atende fora dela?

## Funcionalidades da primeira versão (publicada)

A primeira versão é uma página única, publicada no Netlify em https://ebencreative.netlify.app, com todo o conteúdo estático versionado no repositório e uma única ação: o botão "Agendar uma consultoria", que é gratuita e abre o WhatsApp. O texto de cada bloco está em copy.md.

1. Tela de abertura com o monograma da EBEN e uma lente que se abre revelando a página, uma vez por sessão.
2. Primeira tela com a headline, o subtítulo, o botão principal, o link "Ver portfólio" e três fotos da Geovana passando em formato de Story.
3. Manifesto com o conceito da marca e a proposta de valor.
4. Portfólio em abas por serviço (Social Media, Videomaker, Storymaker e Mobile Photo), com os cases da Sued Silva e da Juliana Arantes (foto de perfil, atividade e resultado) e um visualizador de fotos e vídeos sem sair da página. As mídias vêm do Google Drive da agência, e o vídeo principal do case da Sued fica no próprio site.
5. Blocos de dor, jeito EBEN de trabalhar com as três frentes e benefícios.
6. Como funciona, com as cinco etapas, as garantias de processo e o investimento sob medida.
7. Seção "Quem sou eu?", com a história da Geovana Silva, fundadora da EBEN.
8. Convite da consultoria gratuita, que inclui o diagnóstico do perfil, com o aviso de vagas limitadas.
9. Quebra de objeções e perguntas frequentes em sanfona, que abre uma resposta por vez.
10. Chamada final e PS.
11. Barra fixa com o botão principal no celular, que some quando outro botão já está à vista.
12. Rodapé com slogan, WhatsApp, Instagram da agência e da Geovana e a linha de crédito do desenvolvedor.
13. Fio dourado ligando todas as seções e animações de entrada que acompanham a rolagem, desligadas para quem pede movimento reduzido.
14. Metadados de SEO, sitemap, robots, llms.txt e dados estruturados (JSON-LD).
15. Página 404 no visual da marca.

O projeto tem dois números de WhatsApp com papéis separados. O número da agência, +55 61 99454-1957, com o link https://wa.me/5561994541957, é o número usado em todos os botões e contatos da página, com a mensagem "Oii, EBEN! Vim pela página e quero agendar uma consultoria.". O número do responsável pelo código, pela criação e pela manutenção do site é +55 61 99422-7093, é usado só para assuntos técnicos e aparece em um único lugar, a linha de crédito do rodapé, no texto "Site desenvolvido por BRAGA SYSTEMS · 61 99422-7093", com o número levando ao link https://wa.me/5561994227093 e a mensagem "Olá!! Vim pelo site da EBEN Creative, queria saber mais sobre o seu trabalho.".

## Funcionalidades para depois

1. Google Analytics 4 e Pixel da Meta, carregados só depois que o visitante aceita os cookies, com o evento Lead em todo clique de botão de WhatsApp. Aguarda a criação das contas.
2. Aviso de cookies com os botões Aceitar e Recusar e opção de mudar a escolha depois pelo rodapé, junto com o rastreamento.
3. Página de Política de Privacidade, exigida pela LGPD quando o rastreamento entrar.
4. Imagem de compartilhamento para redes sociais (Open Graph), que ainda não existe.
5. Faixa de logos de clientes, depoimentos em frase e um terceiro case, quando existirem e forem autorizados.
6. Domínio próprio no lugar do endereço do Netlify.
7. Formulário de contato com envio por e-mail para gubragah.oficiaal@gmail.com e caixa de consentimento da LGPD.
8. Página de detalhe de cada projeto do portfólio, com contexto, o que foi feito e o resultado.
9. Páginas de destino separadas por serviço ou por segmento, para anúncios pagos.
10. Blog ou área de conteúdos para atrair visitantes por busca orgânica.
11. Gerenciador de conteúdo externo, para editar textos e portfólio sem mexer no código.
12. Agendamento de reunião integrado a uma agenda.
13. Área do cliente para aprovação de conteúdos e entrega de arquivos.

## Critério de sucesso

Quando o rastreamento entrar, o sucesso é medido pelo número de eventos Lead registrados no GA4 e no Pixel da Meta, ou seja, cliques em botões de WhatsApp. Até lá, a referência são as conversas que chegam no WhatsApp da agência com a mensagem da página. A meta técnica é a nota de desempenho do Lighthouse no celular igual ou acima de 90, que ainda precisa ser medida no site publicado.

Perguntas para você: existe uma meta de conversas por mês vindas da página? Existe data limite para alguma campanha de tráfego pago?

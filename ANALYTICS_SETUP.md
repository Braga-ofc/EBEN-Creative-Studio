# Analytics e conversões: EBEN Creative Studio

Como o site da EBEN mede visitas e cliques, o que cada evento quer dizer, o que precisa ser configurado nas contas e como testar. Tudo usa os planos gratuitos do Google Analytics 4, do Microsoft Clarity e do Pixel da Meta, sem painel próprio, sem servidor e sem Google Tag Manager.

## Situação

| Item | Implementado no código | Configurado na conta | Validado com dados reais |
| --- | --- | --- | --- |
| Aviso de cookies e consentimento | Sim | Não se aplica | Pendente (depois da publicação) |
| Google Analytics 4 (`G-91ZE5VCFTX`) | Sim, ligado no `netlify.toml` | Sim, pelo responsável pelo projeto (passos abaixo) | Pendente |
| Microsoft Clarity (`yyc2wuwh3l`) | Sim, ligado no `netlify.toml` | Projeto criado; conferir o mascaramento Balanced | Pendente |
| Pixel da Meta | Sim, desligado | Pendente: falta criar o Pixel e enviar o ID | Pendente |
| Política de Privacidade (`/privacidade`) | Sim, com a responsável pelos dados e o e-mail para pedidos | Não se aplica | Falta revisão jurídica |

"Validado com dados reais" só vale depois de ver os eventos chegando no DebugView e no Tempo real do GA4, no site publicado. Os testes de código estão na seção [Testes](#testes).

## Arquitetura escolhida

- **Google Analytics 4**, instalado direto no site com o script oficial (`gtag.js`) pelo `next/script`. É a ferramenta principal: visitas, sessões, origem do tráfego, aparelho e eventos.
- **Microsoft Clarity**, com o script oficial: mapas de calor, mapas de rolagem e gravações da navegação.
- **Pixel da Meta**, com o código-base oficial: mede os anúncios no Instagram e no Facebook e forma o público de quem visitou o site, para remarketing.
- **Sem Google Tag Manager**, para não pesar a página nem criar mais uma conta; quem mantém o site mexe no código. Cada tag é instalada uma única vez.
- **Sem backend, banco de dados ou painel próprio**: os relatórios são os nativos de cada ferramenta.

O código fica em:

| Arquivo | Papel |
| --- | --- |
| `v1/src/lib/env.ts` | Lê e valida os IDs (`trackingIds`) |
| `v1/src/lib/consent.ts` | Guarda a escolha de cookies, reabre o aviso, apaga cookies ao retirar o aceite e confere o endereço oficial |
| `v1/src/lib/analytics.ts` | Envia os eventos ao GA4 e o Contact ao Pixel; marca os links medidos (`trackLink`) |
| `v1/src/components/analytics/Tracking.tsx` | No layout: carrega cada ferramenta só com o aceite e mostra o aviso |
| `v1/src/components/analytics/ConsentBanner.tsx` | O aviso de cookies |
| `v1/src/components/analytics/PageEvents.tsx` | Na página inicial: cliques, seções vistas, rolagem e perguntas abertas |
| `v1/src/components/analytics/ConsentPreferencesButton.tsx` | O link "Preferências de cookies" |
| `v1/src/content/privacy.ts` | Textos do aviso e da Política de Privacidade |
| `v1/src/app/privacidade/page.tsx` | A Política de Privacidade |

## Consentimento

- Nada de análise ou de anúncios carrega antes da escolha: nenhum script, cookie ou chamada às ferramentas.
- O aviso tem **Aceitar** e **Recusar** com o mesmo tamanho e o mesmo destaque. Com o Pixel configurado, aparece **Personalizar**, com duas categorias:
  - **Análise** libera o GA4 e o Clarity.
  - **Anúncios** libera o Pixel da Meta.
- O aviso só pergunta sobre as categorias que têm ferramenta configurada. Hoje, com o GA4 e o Clarity e sem o Pixel, ele mostra só Aceitar e Recusar.
- A escolha fica no navegador, no localStorage, com a chave `eben-consent` (por exemplo `{"v":1,"analytics":true,"ads":false}`). Se o navegador bloquear o armazenamento, a escolha vale até fechar a aba.
- O visitante revê a escolha pelo link **Preferências de cookies**, no rodapé e na Política de Privacidade.
- Retirar um aceite avisa a ferramenta (o Clarity apaga os próprios cookies e o Pixel recebe `consent revoke`), apaga os cookies daquela categoria e recarrega a página.
- Quando a política trouxer uma ferramenta nova, suba `CONSENT_VERSION` em `lib/consent.ts`: o aviso volta para todo mundo.
- O GA4 recebe o Consent Mode já com a análise concedida e os anúncios do Google negados (`ad_storage`, `ad_user_data` e `ad_personalization`), sem Google Signals e sem personalização de anúncios. O Consent Mode aqui só complementa o aviso: não substitui o aviso nem a Política de Privacidade.
- O Clarity recebe o sinal de consentimento pela Consent API v2 (`consentv2`), com `ad_Storage` concedido só quando Anúncios foi aceito.
- O Pixel entra sem a configuração automática de eventos (`autoConfig` desligado) e sem correspondência avançada.

### Só no endereço oficial

O rastreamento só liga quando a página está no endereço de `NEXT_PUBLIC_SITE_URL` (hoje `https://ebencreative.com.br`). Deploy previews, branch deploys, cópias locais e o servidor de desenvolvimento não mostram o aviso e não enviam nada, e os testes não se misturam com os dados reais. Quando o domínio próprio entrar, basta trocar o `NEXT_PUBLIC_SITE_URL`.

## Eventos

Nenhum evento leva dado pessoal: só nomes fixos de botões, seções, serviços e perguntas. O site não tem formulário nem campo para digitar.

| Evento (GA4) | Quando dispara | Parâmetros |
| --- | --- | --- |
| `page_view` | Automático do GA4, a cada página carregada | Os padrões do GA4 |
| `whatsapp_click` | Clique em qualquer botão ou link de WhatsApp da EBEN | `cta_location` |
| `instagram_click` | Clique nos perfis do Instagram (fim do portfólio e rodapé) | `cta_location` |
| `section_view` | Uma seção fica na tela por 1 segundo | `section_id` |
| `scroll_depth` | A parte de baixo da tela passa por 25%, 50%, 75% e 90% da página | `percent_scrolled` |
| `faq_expand` | Uma pergunta frequente é aberta (fechar não conta) | `faq_question` |
| `portfolio_tab_select` | O visitante troca a aba do portfólio | `service_category` |
| `portfolio_item_click` | O visitante abre um trabalho no visualizador | `service_category` |

No Pixel da Meta, o mesmo clique no WhatsApp envia o evento padrão **Contact**, além do **PageView** de cada página.

**Valores dos parâmetros:**

- `cta_location`: `cabecalho`, `menu-celular`, `topo`, `story` (perfil e campo "Enviar mensagem" do Story da primeira tela), `barra-celular`, `portfolio`, `consultoria`, `agendar` ou `rodape`.
- `section_id`: `topo`, `manifesto`, `portfolio`, `dores`, `servicos`, `beneficios`, `processo`, `quem-sou-eu`, `consultoria`, `objecoes`, `duvidas`, `agendar` ou `rodape`.
- `service_category`: `social-media`, `videomaker`, `storymaker` ou `mobile-photo`.
- `faq_question`: o texto da pergunta, até 100 caracteres.
- `percent_scrolled`: 25, 50, 75 ou 90.

**Regras de contagem:**

- Cada clique gera no máximo um evento, por um único ouvinte no documento. O WhatsApp abre normalmente, numa nova aba, sem espera.
- Cada seção conta no máximo uma vez por carregamento, e cada marco de rolagem também.
- Uma seção conta como vista quando metade dela fica na tela, ou quando ela cobre metade da tela, por 1 segundo. A segunda regra existe porque, no celular, seções como o portfólio têm mais de duas telas de altura e nunca cabem pela metade.
- Um evento só fica marcado como enviado quando o GA4 já está na página. Se o visitante aceita os cookies depois de rolar, os marcos já passados são enviados na próxima rolagem, e a seção que está na tela conta assim que completar 1 segundo.
- O link do crédito do desenvolvedor (BRAGA SYSTEMS) não é medido, porque não é contato com a EBEN.

**Leitura com cuidado:**

- Uma seção vista não quer dizer que o visitante leu ou entendeu o conteúdo, só que ela ficou na tela.
- `whatsapp_click` é intenção de contato. Não é conversa iniciada, cadastro nem venda: confirmar a conversa exigiria outra integração.
- Cliques, sessões, usuários e conversas são coisas diferentes. Vários cliques podem acontecer na mesma sessão, e nenhum deles equivale a uma pessoa.
- Quem recusa os cookies ou usa bloqueador de anúncios não aparece nos relatórios. Os números são uma amostra das visitas, não o total.

**Eventos do prompt que não entraram, porque o site não tem o elemento:** `form_start` e `form_submit` (não há formulário), `phone_click` e `email_click` (não há links de telefone ou de e-mail) e `service_cta_click` (há um único botão, o mesmo em toda a página; o lugar dele já vai no `cta_location`).

## Variáveis de configuração

| Variável | Formato | Onde fica |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | `G-` seguido de letras e números | `netlify.toml` (já preenchida) |
| `NEXT_PUBLIC_CLARITY_ID` | 10 letras minúsculas e números | `netlify.toml` (já preenchida) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Só números (15 ou 16) | `netlify.toml` (comentada até o ID chegar) |

São públicas por natureza: aparecem no código de qualquer site que usa essas ferramentas. Sem uma delas, a ferramenta fica desligada e o build segue, com um aviso no terminal. Um ID fora do formato para o build, porque é erro de digitação. Para ligar uma ferramenta, tire o `#` da linha no `netlify.toml`, coloque o ID entre as aspas e envie para a branch `main`.

## Configuração manual

As contas devem ficar no nome da EBEN (conta Google e portfólio empresarial da Meta da Geovana), com o responsável pelo site como administrador. Nenhum recurso pago precisa ser ativado.

### Google Analytics 4

1. **Fluxo de dados:** Web, com o endereço do site.
2. **Medição otimizada** (engrenagem no fluxo):
   - Deixe ligada só **Visualizações de página**.
   - Nas configurações avançadas dela, desligue **Mudanças de página com base em eventos do histórico do navegador**. A rolagem suave grava a âncora no endereço a cada clique no menu, e o GA4 contaria cada um como página nova.
   - Desligue **Rolagens**, porque o `scroll_depth` já mede os 90%, e **Cliques de saída**, porque o `whatsapp_click` e o `instagram_click` já medem os cliques que importam. Assim cada clique gera um evento só.
   - Desligue também **Pesquisa no site**, **Interações com formulários**, **Engajamento com vídeo** e **Downloads de arquivos**: o site não tem esses elementos.
3. **Retenção de dados** (Administrador > Coleta e modificação de dados): 14 meses.
4. **Evento principal:** em Administrador > Eventos > **+ Criar evento**, crie `whatsapp_click` com **Marcar como evento principal** ligado, sem valor padrão, com o método de contagem **Uma vez por sessão**, e escolha **Criar com código**.
5. **Dimensões personalizadas** (Administrador > Definições personalizadas), todas com escopo Evento e o nome do parâmetro idêntico:

   | Nome da dimensão | Parâmetro |
   | --- | --- |
   | Local do botão | `cta_location` |
   | Seção vista | `section_id` |
   | Serviço do portfólio | `service_category` |
   | Pergunta do FAQ | `faq_question` |

   A rolagem usa a dimensão pronta do GA4, **Porcentagem rolada**. Se ela não mostrar os valores nos testes, crie uma dimensão para `percent_scrolled`.
6. **Indicadores do Google (Google Signals):** desligados. O site também envia `allow_google_signals: false`.

### Microsoft Clarity

1. Em clarity.microsoft.com, crie um projeto com o endereço do site. Não instale nada pela tela de instalação: o site já tem o código.
2. Copie o **ID do projeto** (Settings > Overview) e coloque em `NEXT_PUBLIC_CLARITY_ID`.
3. **Masking:** Balanced (o padrão), que esconde campos sensíveis.
4. Opcional: ligue a integração com o Google Analytics (Settings > Setup).

### Pixel da Meta

1. No Gerenciador de Eventos do portfólio empresarial da EBEN, vá em **Conectar fontes de dados** > Web e configure **manualmente**, sem parceiros e sem a API de Conversões.
2. Copie o **ID do Pixel** e coloque em `NEXT_PUBLIC_META_PIXEL_ID`.
3. Nas configurações do Pixel, desligue a **Correspondência avançada automática** e a **Configuração automática de eventos**.
4. Depois do domínio próprio, verifique o domínio em Configurações do negócio > Segurança da marca > Domínios, pelo método da meta-tag (a tag entra no código do site).

### Domínio próprio

Quando o domínio estiver conectado no Netlify:

1. Troque `NEXT_PUBLIC_SITE_URL` no `netlify.toml`. Isso move o canonical, o sitemap e o endereço em que o rastreamento liga.
2. No GA4, edite o endereço do fluxo Web (Administrador > Fluxos de dados). O fluxo continua o mesmo, com o mesmo ID.
3. No Clarity, troque o endereço do projeto.
4. Na Meta, verifique o domínio.
5. Abra o site no endereço novo com `?ga_debug=1` e confira os eventos no DebugView.

O Netlify redireciona o endereço `.netlify.app` para o domínio principal, então os acessos antigos continuam contando no endereço novo.

### Origem do tráfego (UTM)

O GA4 registra sozinho a origem de cada sessão. Para separar o Instagram, use links com UTM na bio:

- **Perfil da EBEN:** `https://ebencreative.com.br/?utm_source=instagram&utm_medium=social&utm_content=perfil-eben`
- **Perfil da Geovana:** `https://ebencreative.com.br/?utm_source=instagram&utm_medium=social&utm_content=perfil-geovana`
- **Anúncios:** `?utm_source=instagram&utm_medium=paid&utm_campaign=nome-da-campanha`

Nunca coloque UTM no link do WhatsApp: o WhatsApp ignora esses parâmetros. Os eventos do site não leem a URL e não criam identificadores próprios.

## Como ler os relatórios

| Pergunta | Onde ver |
| --- | --- |
| Quantas visitas e de onde vieram | Relatórios > Aquisição > Aquisição de tráfego |
| Taxa de sessões com clique no WhatsApp | Na mesma tabela, a coluna **Taxa de eventos principais da sessão**, filtrada por `whatsapp_click` |
| Qual botão mais converte | Relatórios > Engajamento > Eventos > `whatsapp_click`, pela dimensão Local do botão |
| Até onde as pessoas chegam | Eventos > `section_view` por Seção vista, e `scroll_depth` por Porcentagem rolada |
| Que dúvidas aparecem mais | Eventos > `faq_expand` por Pergunta do FAQ |
| Qual serviço chama mais atenção | Eventos > `portfolio_tab_select` e `portfolio_item_click` por Serviço do portfólio |
| Celular ou computador | Relatórios > Usuário > Tecnologia |
| Onde as pessoas clicam e param | Clarity > Heatmaps e Recordings |

**Taxa de sessões com clique no WhatsApp** = sessões com pelo menos um `whatsapp_click` ÷ total de sessões × 100. Com o `whatsapp_click` marcado como evento principal, o GA4 já mostra essa conta pronta, na taxa de eventos principais da sessão.

## Testes

### Testes de código (feitos)

Os testes locais usaram IDs falsos (`G-TESTE00000` e outros); nenhum deles usou o ID real nem misturou dados com a conta da EBEN.

- **Build:** o build de produção, com o ID real, a checagem de tipos e o lint passaram sem erro. O HTML gerado não traz nenhum script do Google: o ID só vai como dado para o componente que espera o aceite.
- **Fora do endereço oficial:** com o build de produção servido em `localhost:4173`, não aparece aviso, não carrega o GA4 e o link "Preferências de cookies" fica escondido.
- **Antes do aceite:** nenhum script do GA4, do Clarity ou da Meta na página, nenhum cookie e nenhuma função `gtag`, `clarity` ou `fbq`.
- **Só Análise:** pelo Personalizar, carregam o GA4 e o Clarity, e o Pixel não. A escolha fica salva como `{"v":1,"analytics":true,"ads":false}`.
- **Aceitar tudo:** carregam o GA4, o Clarity e o Pixel. Cada clique no WhatsApp gera um `whatsapp_click` e um `Contact`.
- **Retirar o aceite:** em Preferências de cookies, Recusar apagou os cookies `_ga`, recarregou a página e deixou o GA4 e o Clarity de fora.
- **Teclado:** reaberto pelo rodapé, o foco vai para o aviso; o Esc fecha sem mudar a escolha e devolve o foco ao link.
- **Cliques simulados,** com a abertura do WhatsApp bloqueada no teste:
  - os botões da primeira tela, do cabeçalho, do convite e do fechamento e o link do rodapé geram um `whatsapp_click` cada, com o `cta_location` certo;
  - o Instagram do rodapé gera um `instagram_click`;
  - o crédito do desenvolvedor não gera nada, nem no GA4 nem no Pixel.
- **Portfólio:** trocar de aba gera `portfolio_tab_select`, clicar na aba que já está aberta não gera, e abrir um trabalho gera `portfolio_item_click`.
- **Perguntas frequentes:** abrir gera `faq_expand` com a pergunta, e fechar não gera.
- **Seções e rolagem,** no Edge em modo headless, rolando a página inteira em passos de 70% da tela com 2,5s de pausa, no computador (1280 × 800) e no celular (390 × 844):
  - as 13 seções contaram uma vez cada, inclusive o portfólio e o rodapé, que no celular são mais altos que a tela;
  - os 4 marcos de rolagem também contaram uma vez;
  - voltando ao topo e descendo de novo, nada se repetiu;
  - com pausas de 1,3s, algumas seções não contam, como pede a regra de 1 segundo na tela.
- **Seção já na tela no aceite:** a primeira tela gerou o `section_view` logo depois do aceite.
- **Celular:** o aviso fica 11px acima da barra fixa do botão e não cobre o "Agendar uma consultoria".

### Teste com dados reais (depois da publicação)

1. Abra `https://ebencreative.com.br/?ga_debug=1` numa janela anônima e aceite os cookies.
2. No GA4, abra Administrador > **DebugView**: os eventos aparecem em segundos, com os parâmetros.
3. Toque num botão de WhatsApp, abra uma pergunta e role a página até o fim.
4. Confira também Relatórios > **Tempo real**.
5. Para o Pixel, use a aba **Testar eventos** do Gerenciador de Eventos. Para o Clarity, as primeiras gravações aparecem em algumas horas.
6. Recuse os cookies em Preferências de cookies e confira, nas ferramentas do navegador, que os cookies `_ga`, `_clck` e `_fbp` sumiram.

## Privacidade e LGPD

- **Coletado com Análise:** páginas vistas, origem da visita, aparelho, navegador, região aproximada e as interações listadas em [Eventos](#eventos); no Clarity, cliques, rolagem e movimentos, com gravações da navegação.
- **Coletado com Anúncios:** a visita e o clique no WhatsApp, para medir anúncios e formar público de remarketing.
- **Nunca coletado:** nome, telefone, e-mail, mensagens ou qualquer texto digitado. O site não tem campo para digitar.
- **Finalidade e base legal:** melhorar o site e medir anúncios, com consentimento (LGPD, artigo 7º, inciso I), que pode ser retirado a qualquer momento.
- **Precisa da validação do responsável pelo site:**
  - O texto da Política de Privacidade, de preferência com revisão jurídica.
  - O prazo de retenção das contas.
  - Se as categorias e os textos do aviso atendem ao que a EBEN pretende fazer com anúncios.

Esta implementação não garante conformidade jurídica: ela segue boas práticas de consentimento, e os pontos acima precisam ser validados.

## Solução de problemas

| Problema | Causa provável |
| --- | --- |
| O aviso não aparece | O site não está no endereço de `NEXT_PUBLIC_SITE_URL` (preview ou local), nenhum ID está configurado, ou já existe escolha salva (limpe o `eben-consent` do localStorage) |
| Nada chega no GA4 | Cookies recusados, bloqueador de anúncios, ID errado no `netlify.toml`, ou o build não foi publicado |
| O DebugView fica vazio | Faltou o `?ga_debug=1` no endereço, ou o aceite veio depois da abertura (recarregue a página) |
| Dimensão personalizada sem valores | O nome do parâmetro está diferente do código, ou ainda não passaram de 24 a 48 horas |
| `page_view` a mais ao clicar no menu | A opção de mudanças de página pelo histórico continua ligada na medição otimizada |
| Cliques contados em dobro | Os cliques de saída continuam ligados na medição otimizada, ou a configuração automática de eventos do Pixel continua ligada |
| O build para com "ID inválido" | O ID no `netlify.toml` tem um erro de digitação ou espaço |

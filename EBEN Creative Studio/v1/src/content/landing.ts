/**
 * Texto da landing page v1, adaptado de docs/contexto/copy.md.
 *
 * Diferenças em relação à copy aprovada, todas decididas pelo responsável pelo
 * projeto para esta versão: o botão principal virou "Agendar uma consultoria",
 * a consultoria é gratuita e inclui o diagnóstico do perfil, e os botões de
 * cada serviço saíram para que a página tenha uma única ação.
 */

export const ctaLabel = "Agendar uma consultoria";

export const hero = {
  titleStart: "Postar todo dia",
  titleEnd: "não é ter presença.",
  subtitle:
    "Social media, vídeo e bastidores em tempo real, com estratégia e a cara do seu negócio. A consultoria é gratuita.",
  secondaryCta: { label: "Ver portfólio", href: "#portfolio" },
  /** Legendas que passam dentro do quadro, uma por segmento do Story. */
  storyBeats: ["Social media com direção.", "Vídeo com a cara da marca.", "Bastidores em tempo real."],
} as const;

export const manifesto = {
  titleStart: "Não capturamos momentos.",
  titleEnd: "Eternizamos histórias.",
  paragraphs: [
    "Você sabe que precisa estar nas redes. O difícil é começar, manter o ritmo e fazer o conteúdo parecer com o que o seu negócio realmente é. Na EBEN, a gente não começa pelo post. Começa pela essência da sua marca: o que ela quer dizer, pra quem e como.",
    "Num evento, vale o mesmo. A gente não vai só para fotografar e filmar. Vai para entender o que aquela ocasião significa e transformar isso em conteúdo que as pessoas revisitam, compartilham e lembram.",
  ],
  closing: "O resultado é uma marca que o público reconhece, entende e quer acompanhar.",
} as const;

export const portfolio = {
  title: "Histórias que a EBEN já ajudou a contar",
  intro:
    "Social media e cobertura de eventos, com identidade, qualidade de produção e os bastidores de cada projeto.",
} as const;

export const pains = {
  title: "Talvez isso soe familiar.",
  intro: "Se você é empreendedor ou profissional, sabe que o digital importa. Mas o conteúdo não anda.",
  items: [
    "Você abre o Instagram e não sabe o que postar.",
    "Você posta por três semanas e some por dois meses.",
    "Você olha o seu perfil e pensa: “isso não parece comigo”.",
    "Você vê concorrente aparecendo mais, mesmo sendo pior que você.",
    "Você já contratou alguém e recebeu post genérico, de modelo pronto.",
    "Você tem um trabalho incrível, mas quem passa pelo seu perfil não percebe.",
  ],
  closingStart: "O problema quase nunca é falta de esforço.",
  closingEnd: "É falta de direção.",
} as const;

export const approach = {
  title: "O jeito EBEN de construir presença digital",
  intro: "Antes de criar qualquer conteúdo, a gente entende três coisas.",
  steps: [
    { title: "Quem é a sua marca", text: "Valores, jeito de falar, o que ela defende." },
    { title: "Pra quem ela fala", text: "As pessoas certas, não qualquer um." },
    { title: "Como isso vira conteúdo", text: "Planejamento, vídeo e bastidores com intenção." },
  ],
  transition: "Só depois disso entram as três frentes, que você contrata juntas ou separadas.",
} as const;

export const services = [
  {
    id: "social-media",
    name: "Social Media",
    serviceType: "Gestão de redes sociais e planejamento de conteúdo",
    text: "Gestão das redes e planejamento de conteúdo, com linha editorial e constância.",
  },
  {
    id: "videomaker",
    name: "Videomaker",
    serviceType: "Produção e edição de vídeo",
    text: "Produção e edição de vídeos com a identidade da sua marca.",
  },
  {
    id: "storymaker",
    name: "Storymaker",
    serviceType: "Cobertura de bastidores em tempo real",
    text: "Cobertura de bastidores em tempo real, para mostrar o negócio acontecendo.",
  },
] as const;

export const benefits = {
  title: "O que muda na sua marca",
  groups: [
    {
      title: "Na sua rotina",
      items: [
        "Você deixa de se perguntar “o que eu posto hoje?”, porque o planejamento já está pronto.",
        "Você aparece de forma constante, sem depender de inspiração ou de tempo livre.",
        "Você ganha um parceiro que entende o seu negócio, não só alguém que “posta”.",
        "Você pode começar com uma frente e crescer conforme a marca avança.",
      ],
    },
    {
      title: "No que o público percebe",
      items: [
        "O seu perfil passa a ter cara de marca, não de conteúdo solto.",
        "Quem chega no seu Instagram entende em segundos o que você faz e por que importa.",
        "Você mostra os bastidores e cria proximidade antes da primeira conversa de venda.",
        "Os seus vídeos têm identidade, e o público reconhece o seu conteúdo antes de ler o nome.",
      ],
    },
  ],
} as const;

export const howItWorks = {
  title: "Como funciona",
  steps: [
    { title: "Conversa no WhatsApp", text: "Você conta o momento do seu negócio." },
    { title: "Entendimento da essência", text: "A gente mapeia marca, público e objetivo." },
    { title: "Proposta sob medida", text: "Escopo, entregas e investimento claros, por escrito." },
    {
      title: "Planejamento e produção",
      text: "O conteúdo começa a ganhar forma. A primeira entrega acontece entre 3 dias e 1 semana após o fechamento, conforme a complexidade do projeto.",
    },
    { title: "Acompanhamento", text: "A gente ajusta o que for preciso ao longo do caminho." },
  ],
  guarantee: {
    title: "Você não compra no escuro.",
    items: [
      { title: "Proposta antes de qualquer contrato", text: "Escopo e entregas claros, por escrito." },
      {
        title: "Nada vai ao ar sem você aprovar",
        text: "A EBEN envia cada material pelo WhatsApp e só publica depois da sua aprovação.",
      },
      { title: "Acompanhamento durante todo o projeto", text: "Conversa e ajustes, sem sumiço." },
      {
        title: "Contrato claro",
        text: "Duração mínima de 3 meses, com todas as condições por escrito antes de começar.",
      },
    ],
  },
  investment: {
    title: "Investimento",
    text: "Orçamento sob medida. O valor varia conforme a estratégia, a quantidade de entregas e o nível de acompanhamento que o seu negócio precisa.",
    outcome:
      "No fim, você tem uma marca com presença planejada, conteúdo com identidade e um calendário que roda sem depender de você.",
  },
  costOfWaiting:
    "Cada mês sem direção é um mês em que o cliente certo passa pelo seu perfil e não entende o que você faz. Ou escolhe quem apareceu melhor.",
} as const;

export const consultation = {
  title: "Comece por uma consultoria gratuita",
  text: "Na primeira conversa, a EBEN analisa o seu perfil e mostra os principais pontos que melhoraria e as oportunidades para fortalecer a sua presença digital. Se fizer sentido, a gente marca uma reunião para falar dos próximos passos.",
  includes: [
    "Diagnóstico do seu perfil",
    "Pontos de melhoria e oportunidades",
    "Próximos passos, sem compromisso",
  ],
  scarcity:
    "Para manter a qualidade de cada projeto, a EBEN acompanha um número limitado de perfis ao mesmo tempo.",
} as const;

export const objections = {
  title: "Talvez você esteja pensando...",
  items: [
    {
      thought: "Mas está caro pra mim...",
      answer:
        "Por isso a proposta é sob medida. Você pode começar com uma frente só e crescer quando fizer sentido. O investimento acompanha o momento do negócio, sem pacote engessado.",
    },
    {
      thought: "Mas já contratei alguém e não tive resultado...",
      answer:
        "Faz sentido desconfiar. Muita gente entrega post bonito sem estratégia. Aqui o conteúdo nasce do que a sua marca quer alcançar. Na conversa inicial você vê como a gente pensa antes de decidir qualquer coisa.",
    },
    {
      thought: "Mas eu mesmo consigo cuidar das minhas redes...",
      answer:
        "Consegue, e muita gente começa assim. O que costuma faltar é tempo, constância e olhar de fora. Você continua sendo a voz da marca. A gente cuida do planejamento, da produção e da rotina.",
    },
    {
      thought: "Mas não tenho tempo pra gravar...",
      answer:
        "Essa é justamente a ideia. A gente planeja para você gravar o mínimo necessário, e o Storymaker captura os bastidores enquanto você trabalha.",
    },
    {
      thought: "Mas não sei se vale investir agora...",
      answer:
        "Presença digital é construída com o tempo. Quem começa antes ganha reconhecimento antes. Se ainda estiver na dúvida, a consultoria é gratuita e não te obriga a nada.",
    },
  ],
} as const;

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      question: "A consultoria é gratuita?",
      answer:
        "Sim. Na consultoria, a EBEN analisa o seu perfil, aponta melhorias e oportunidades e, se fizer sentido, apresenta uma proposta sob medida. Não existe compromisso de contratação.",
    },
    {
      question: "Preciso contratar os três serviços?",
      answer:
        "Não. Social Media, Videomaker e Storymaker podem ser contratados separados ou em pacote, de acordo com os seus objetivos.",
    },
    {
      question: "Serve pro meu tipo de negócio?",
      answer:
        "A EBEN atende empresários, clínicas, marcas pessoais, empresas e eventos sociais, corporativos e institucionais. A gente trabalha melhor com quem valoriza estratégia, criatividade e uma comunicação bem construída. Conta qual é o seu negócio na consultoria e a gente avalia junto.",
    },
    {
      question: "Quanto tempo preciso dedicar?",
      answer:
        "O mínimo possível. A gente cuida do planejamento e da produção. Você participa das aprovações e das gravações combinadas.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Depende da estratégia, da quantidade de entregas e do acompanhamento. Não existe um valor único para todos, porque cada negócio tem necessidades diferentes. Depois da conversa, você recebe uma proposta clara.",
    },
    {
      question: "Como funciona o contrato e o pagamento?",
      answer:
        "A EBEN aceita Pix e cartão. O contrato tem duração mínima de 3 meses e, depois desse período, você escolhe se quer renovar. No contrato de 3 meses, dá para parcelar o valor total em até 6 vezes, com juros, ou pagar mês a mês. Se houver cancelamento antes do fim do contrato, é aplicada uma multa de 30% sobre o valor mensal contratado, conforme as condições do contrato.",
    },
    {
      question: "E se eu não gostar do que for feito?",
      answer:
        "Nada vai ao ar sem a sua aprovação. A EBEN envia cada material pelo WhatsApp antes da publicação, e você pede os ajustes antes de qualquer coisa ser publicada.",
    },
    {
      question: "Vocês fazem tudo, ou eu preciso mandar material?",
      answer:
        "As gravações são sempre agendadas com antecedência e, ao final da captação, todo o material previsto no serviço contratado é entregue a você. Planejamento, roteiros e orientações de produção são definidos conforme cada projeto.",
    },
    {
      question: "Em quanto tempo vocês respondem?",
      answer: "Em até 2 horas, de segunda a sábado, das 8h às 18h.",
    },
    {
      question: "Em quanto tempo vejo os primeiros resultados?",
      answer:
        "A primeira entrega acontece entre 3 dias e 1 semana após o fechamento. Já os resultados de presença digital se constroem com consistência, e na consultoria a gente alinha o que esperar do seu caso, sem prometer o que não dá pra garantir.",
    },
  ],
} as const;

export const finalCta = {
  title: "Imagine o seu perfil daqui a alguns meses.",
  text: "Quem chega entende quem você é em segundos. Os vídeos têm a sua cara. Os bastidores mostram um negócio vivo. E você não precisa mais acordar pensando no que postar.",
  closing: "Isso começa com uma conversa.",
  note: "Gratuita e sem compromisso.",
  postscript:
    "PS: A sua marca já tem valor. A EBEN existe para fazer o público enxergar isso, com estratégia, criatividade e identidade, e sem conteúdo genérico.",
} as const;

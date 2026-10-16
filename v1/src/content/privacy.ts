/**
 * Textos do aviso de cookies, dos links legais do rodapé e da Política de
 * Privacidade. A fonte é docs/contexto/copy.md: mude lá antes de mudar aqui.
 */

import { contact } from "@/content/site";

/**
 * Quem responde pelos dados na Política de Privacidade. Com null, a política
 * mostra só o WhatsApp da agência como contato.
 */
export const dataController: { name: string | null; email: string | null } = {
  name: "Geovana dos Santos Silva",
  email: "ebencreativestudio@gmail.com",
};

export const consentBanner = {
  label: "Aviso de cookies",
  text: "A EBEN usa cookies para entender como o site é usado. Você decide se aceita.",
  textWithAds:
    "A EBEN usa cookies para entender como o site é usado e para mostrar anúncios mais relevantes. Você decide se aceita.",
  policyLink: "Política de Privacidade",
  accept: "Aceitar",
  reject: "Recusar",
  customize: "Personalizar",
  save: "Salvar escolhas",
  categories: {
    analytics: {
      title: "Análise",
      text: "Google Analytics e Microsoft Clarity: mostram quais partes do site funcionam melhor, com mapas de calor e gravações da navegação, sem identificar você pelo nome.",
    },
    ads: {
      title: "Anúncios",
      text: "Pixel da Meta: mede os anúncios da EBEN no Instagram e no Facebook e permite mostrar anúncios a quem já visitou o site.",
    },
  },
} as const;

export const legalLinks = {
  privacy: "Política de Privacidade",
  preferences: "Preferências de cookies",
} as const;

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const policySections: PolicySection[] = [
  {
    id: "responsavel",
    title: "Quem cuida dos seus dados",
    paragraphs: [
      `O site é da EBEN Creative Studio, agência de comunicação criativa e audiovisual. Para qualquer assunto sobre os seus dados, fale com a gente pelo WhatsApp ${contact.whatsapp.display}, ${contact.hours.label.charAt(0).toLowerCase()}${contact.hours.label.slice(1)}.`,
    ],
  },
  {
    id: "coleta",
    title: "O que o site coleta",
    items: [
      "Sem o seu aceite, o site não carrega nenhuma ferramenta de análise ou de anúncios. Ele guarda só duas informações no seu próprio navegador, que não saem do seu aparelho: a sua escolha sobre os cookies e se a abertura animada já foi vista nesta visita.",
      "Se você aceitar a Análise, o Google Analytics registra as páginas vistas, de onde você chegou (Instagram, Google ou link direto, por exemplo), o tipo de aparelho e de navegador, a cidade ou região aproximada e como você usa a página: cliques nos botões do WhatsApp e do Instagram, seções vistas, quanto da página foi rolado, perguntas frequentes abertas e trabalhos do portfólio abertos. O Microsoft Clarity registra cliques, rolagem e movimentos na página para montar mapas de calor e gravações da navegação.",
      "Se você aceitar os Anúncios, o Pixel da Meta registra a sua visita e o clique no botão do WhatsApp, para medir os anúncios da EBEN no Instagram e no Facebook e mostrar anúncios a quem já visitou o site.",
      "O site não tem formulário nem campo para digitar, e não pede nome, telefone ou e-mail. Nenhuma dessas ferramentas recebe algo que você escreveu.",
    ],
  },
  {
    id: "whatsapp",
    title: "Quando você chama no WhatsApp",
    paragraphs: [
      "Os botões abrem o WhatsApp com uma mensagem pronta, que você pode mudar ou não enviar. Se enviar, a conversa acontece no WhatsApp, sob as regras do próprio aplicativo, e a EBEN usa o seu nome, o seu número e o que você escrever para responder e tratar do serviço que você procura.",
    ],
  },
  {
    id: "finalidade",
    title: "Por que coletamos e com qual base",
    paragraphs: [
      "A análise serve para entender o que funciona no site e melhorar a página. Os anúncios servem para medir campanhas e falar de novo com quem já conheceu a EBEN. As duas coisas só acontecem com o seu consentimento (artigo 7º, inciso I, da LGPD), que você pode retirar quando quiser, sem prejuízo nenhum para o uso do site.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies e dados guardados no navegador",
    items: [
      "Google Analytics: _ga e _ga_ seguido do código da medição, por até 2 anos. Separam uma visita da outra.",
      "Microsoft Clarity: _clck, por até 1 ano, e _clsk, por 1 dia, além de cookies da própria Microsoft, como o MUID. Juntam as páginas de uma mesma visita.",
      "Pixel da Meta: _fbp, por até 90 dias, além de cookies da própria Meta para quem tem conta no Facebook ou no Instagram. Ligam a visita aos anúncios.",
      "Do próprio site: eben-consent, com a sua escolha, até você mudá-la, e eben-intro, que lembra que a abertura já tocou e some quando a aba fecha. São necessários e não rastreiam nada.",
    ],
  },
  {
    id: "compartilhamento",
    title: "Com quem os dados são compartilhados",
    paragraphs: [
      "Google (Google Analytics), Microsoft (Clarity) e Meta (Pixel e WhatsApp) recebem os dados descritos acima e também os tratam segundo as suas próprias políticas. O site fica hospedado na Netlify, que registra dados técnicos de acesso, como o endereço IP, para entregar as páginas e proteger o servidor. As fotos e os vídeos do portfólio vêm do Google Drive, então o seu navegador se conecta aos servidores do Google para exibi-los. Essas empresas podem armazenar dados fora do Brasil, numa transferência internacional tratada no artigo 33 da LGPD.",
    ],
  },
  {
    id: "prazo",
    title: "Por quanto tempo",
    paragraphs: [
      "No Google Analytics, os dados ficam guardados por 14 meses. No Clarity e na Meta, pelos prazos definidos por cada empresa. A sua escolha sobre os cookies fica no navegador até você mudá-la ou limpar os dados do site.",
    ],
  },
  {
    id: "direitos",
    title: "Seus direitos",
    paragraphs: [
      "Pela LGPD (artigo 18), você pode pedir a confirmação de que existem dados seus, o acesso a eles, a correção, a anonimização, o bloqueio ou a eliminação, a portabilidade, a informação sobre com quem eles foram compartilhados e a revogação do consentimento. Para pedir, use o contato do início desta página. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
      "Os dados de análise não trazem o seu nome, então o caminho mais rápido para interrompê-los é escolher Recusar em Preferências de cookies e limpar os cookies do navegador.",
    ],
  },
  {
    id: "mudancas",
    title: "Mudanças nesta política",
    paragraphs: [
      "Quando esta política mudar, a data no topo muda junto. Se a mudança trouxer uma ferramenta nova, o aviso de cookies volta a aparecer para você escolher de novo.",
    ],
  },
];

export const privacyPolicy = {
  title: "Política de Privacidade",
  updatedAt: "Atualizada em 15 de outubro de 2026.",
  preferencesButton: "Mudar minhas preferências de cookies",
  backLink: "Voltar para a página inicial",
  intro:
    "Esta política explica quais dados o site da EBEN Creative Studio coleta, para quê, com quem eles são compartilhados e como você controla isso.",
  metaDescription:
    "Quais dados o site da EBEN Creative Studio coleta, para quê, com quem são compartilhados e como você controla isso.",
  controllerSentence: (name: string, email: string | null) =>
    email
      ? `A responsável pelos dados é ${name}, e os pedidos também podem ser enviados para ${email}.`
      : `A responsável pelos dados é ${name}.`,
  sections: policySections,
} as const;

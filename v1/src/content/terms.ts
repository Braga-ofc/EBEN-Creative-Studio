/**
 * Termos de Uso, em linguagem simples. O site não vende nada online e não tem
 * formulário, então os termos tratam só do uso do site e do atendimento.
 */

import { contact } from "@/content/site";
import type { PolicySection } from "@/content/privacy";

const termsSections: PolicySection[] = [
  {
    id: "quem-somos",
    title: "Quem mantém o site",
    paragraphs: [
      "Este site é da EBEN Creative Studio, agência de comunicação criativa e audiovisual, CNPJ 68.983.627/0001-43, de responsabilidade de Geovana dos Santos Silva. Ao usar o site, você concorda com estes termos.",
    ],
  },
  {
    id: "o-que-e",
    title: "Para que serve o site",
    paragraphs: [
      "O site apresenta o trabalho da EBEN e leva você ao WhatsApp para agendar uma consultoria gratuita. Ele não vende nada nem recebe pagamento. Qualquer contratação acontece em conversa e em contrato à parte.",
    ],
  },
  {
    id: "atendimento",
    title: "Atendimento",
    paragraphs: [`O atendimento é pelo WhatsApp ${contact.whatsapp.display}. ${contact.responseTime}`],
  },
  {
    id: "conteudo",
    title: "Textos, fotos e vídeos",
    paragraphs: [
      "Os textos, as fotos, os vídeos e a identidade visual do site são da EBEN ou usados com autorização de quem aparece neles. Você pode ver e compartilhar o link do site, mas não pode copiar, vender ou reutilizar esse conteúdo sem autorização por escrito.",
    ],
  },
  {
    id: "resultados",
    title: "Resultados",
    paragraphs: [
      "Os trabalhos e as histórias mostrados no site são exemplos do que a EBEN já fez. Cada marca é diferente, então o site não promete que você terá o mesmo resultado.",
    ],
  },
  {
    id: "links",
    title: "Links para outros sites",
    paragraphs: [
      "O site leva ao WhatsApp, ao Instagram e ao Google Drive. Esses serviços têm as suas próprias regras e políticas, e a EBEN não responde por elas.",
    ],
  },
  {
    id: "privacidade",
    title: "Seus dados",
    paragraphs: [
      "O que o site coleta, para quê e como você controla isso está na Política de Privacidade, que vale junto com estes termos.",
    ],
  },
  {
    id: "mudancas",
    title: "Mudanças e lei aplicável",
    paragraphs: ["A EBEN pode mudar estes termos, e a data no topo muda junto. Valem as leis brasileiras."],
  },
];

export const terms = {
  title: "Termos de Uso",
  updatedAt: "Atualizados em 3 de novembro de 2026.",
  intro: "Estas são as regras simples para usar o site da EBEN Creative Studio.",
  metaDescription:
    "Regras para usar o site da EBEN Creative Studio: atendimento, conteúdo, resultados e privacidade.",
  backLink: "Voltar para a página inicial",
  sections: termsSections,
} as const;

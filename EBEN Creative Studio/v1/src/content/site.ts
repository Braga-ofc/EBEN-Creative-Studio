/**
 * Dados fixos da EBEN Creative Studio usados em toda a página, nos metadados,
 * no JSON-LD e no llms.txt. Texto de seção fica em landing.ts.
 */

export const brand = {
  name: "EBEN Creative Studio",
  slogan: "Não capturamos momentos. Eternizamos histórias.",
  summary:
    "Agência de comunicação criativa e audiovisual com três frentes: Social Media, Videomaker e Storymaker.",
  language: "pt-BR",
  locale: "pt_BR",
} as const;

export const seo = {
  title: "EBEN Creative Studio | Social Media, Videomaker e Storymaker",
  description:
    "Agência criativa e audiovisual: gestão de redes sociais, vídeos e bastidores em tempo real, com estratégia. Agende uma consultoria gratuita pelo WhatsApp.",
  /** Data da última mudança de conteúdo, usada no sitemap. Atualize quando o texto mudar. */
  contentUpdatedAt: "2026-10-09",
} as const;

export const contact = {
  whatsapp: {
    /** Número no formato internacional, só dígitos, como o wa.me exige. */
    number: "5561994541957",
    display: "+55 61 99454-1957",
    schema: "+55-61-99454-1957",
  },
  consultationMessage: "Oii, EBEN! Vim pela página e quero agendar uma consultoria.",
  hours: {
    label: "De segunda a sábado, das 8h às 18h",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  responseTime: "Resposta em até 2 horas, de segunda a sábado, das 8h às 18h.",
} as const;

export const developerCredit = {
  name: "BRAGA SYSTEMS",
  phoneDisplay: "61 99422-7093",
  whatsappNumber: "5561994227093",
} as const;

/**
 * Imagem definitiva da hero. Enquanto for `null`, o quadro mostra o bloco
 * reservado em CSS, com as mesmas dimensões. Para trocar, coloque o arquivo em
 * public/images/ e preencha os campos abaixo. Nada no layout precisa mudar.
 *
 * Proporção do quadro: 9:16 (vertical, como um Story). Envie pelo menos
 * 1080 x 1920 px, com o assunto principal perto do centro.
 */
export const heroMedia: HeroMedia | null = null;

export type HeroMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Ponto de foco no recorte, em CSS. Exemplo: "50% 35%". */
  position?: string;
};

export const navigation = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

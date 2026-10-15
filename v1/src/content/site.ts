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
  contentUpdatedAt: "2026-10-14",
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

export type InstagramProfile = {
  /** Nome em destaque no cartão. */
  name: string;
  handle: string;
  url: string;
  /** Linha de baixo do cartão. Troque pelo número real de seguidores, se quiser mostrar. */
  about: string;
  /** Rótulo que aparece embaixo do ícone no hover. */
  label: string;
  /** Foto do cartão. Sem foto, o cartão mostra o monograma da EBEN. */
  avatar?: { src: string; alt: string };
};

/** Perfil da agência: entra no rodapé e nos dados estruturados (sameAs). */
export const agencyInstagram: InstagramProfile = {
  name: "EBEN Creative Studio",
  handle: "@eben.creative_",
  url: "https://www.instagram.com/eben.creative_/",
  about: "Perfil oficial da agência",
  label: "Agência",
};

/** Perfil pessoal, onde está a maior parte dos trabalhos. */
export const portfolioInstagram: InstagramProfile = {
  name: "Mais trabalhos",
  handle: "@geoo.silvaz",
  url: "https://www.instagram.com/geoo.silvaz/",
  about: "Portfólio e bastidores",
  label: "BackStage",
  avatar: { src: "/images/instagram/geo.jpg", alt: "Foto do perfil @geoo.silvaz" },
};

export const developerCredit = {
  label: "Site desenvolvido por",
  name: "BRAGA SYSTEMS",
  phoneDisplay: "61 99422-7093",
  whatsappNumber: "5561994227093",
  /**
   * Logo horizontal oficial da BRAGA SYSTEMS, versão para fundo escuro, copiado
   * de github.com/Braga-ofc/BRAGASYSTEMS (logo/svg/logo-horizontal-escuro.svg).
   * O guia da marca pede no mínimo 120px de largura e nenhum efeito no logo.
   */
  logo: { src: "/brand/braga-systems-horizontal.svg", width: 770, height: 168 },
} as const;

/** Títulos das colunas do rodapé. */
export const footerLabels = {
  contact: "Atendimento",
  navigation: "Na página",
} as const;

export type HeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Ponto de foco no recorte, em CSS. Exemplo: "50% 35%". */
  position?: string;
};

/**
 * As três fotos do Story da hero, uma por barra, na ordem em que passam.
 * Ficam em public/images/hero/, em WebP 9:16 (900 x 1600 px), com a pessoa
 * perto do centro: no celular o quadro ocupa a tela e o recorte fecha um pouco.
 */
export const heroSlides: readonly [HeroSlide, HeroSlide, HeroSlide] = [
  {
    src: "/images/hero/geo-estudio.webp",
    alt: "Geovana sorrindo com a mão na cintura em um estúdio de fundo vermelho, ao lado de um ring light",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/hero/geo-evento.webp",
    alt: "Geovana, em preto e branco, filmando com o celular erguido durante um evento",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/hero/geo-celular.webp",
    alt: "Geovana sorrindo e segurando o celular no estúdio de fundo vermelho, ao lado do ring light",
    width: 900,
    height: 1600,
  },
];

/**
 * Foto da Geovana em segundo plano no manifesto, do lado esquerdo: ela filmando
 * com o celular erguido num evento, espelhada para olhar para o texto. É a
 * imagem inteira (2:3), sem recorte, porque o CSS posiciona a foto pela altura
 * da cabeça (bloco "Manifesto" em globals.css). Decorativa.
 */
export const manifestoPortrait = {
  src: "/images/manifesto/geo-evento.webp",
  width: 1000,
  height: 1500,
} as const;

/**
 * Retrato da Geovana na seção "Quem sou eu": a mesma foto de estúdio da
 * primeira barra do Story (9:16, 900 x 1600 px), que o navegador já baixou na
 * hero. O círculo mostra do cabelo à cintura, com um zoom leve no rosto e no
 * tronco (bloco "Quem sou eu" em globals.css).
 */
export const aboutPortrait = {
  src: "/images/hero/geo-estudio.webp",
  alt: "Geovana Silva sorrindo, com a mão na cintura, em um estúdio de fundo vermelho ao lado de um ring light",
  width: 900,
  height: 1600,
} as const;

export const navigation = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#quem-sou-eu", label: "Quem sou eu" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

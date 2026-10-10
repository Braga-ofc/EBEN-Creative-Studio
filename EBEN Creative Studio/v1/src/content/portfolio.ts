/**
 * Portfólio da landing page.
 *
 * Os dois cases têm nome e números autorizados pelas clientes. Os outros dois
 * itens descrevem frentes de trabalho reais da EBEN sem citar cliente, até que
 * os projetos de Storymaker e Videomaker sejam escolhidos.
 *
 * Nenhum item tem mídia ainda. Enquanto `media` for `null`, o quadro mostra um
 * bloco de cor da marca no formato certo. Para publicar a mídia, coloque o
 * arquivo em public/images/portfolio/ e preencha `media`.
 */

export type PortfolioFormat = "feed" | "story" | "film";

export type PortfolioMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  service: "Social Media" | "Videomaker" | "Storymaker";
  format: PortfolioFormat;
  /** Tom do bloco reservado enquanto não houver mídia. */
  tone: "burgundy" | "deep" | "raised" | "rose";
  figure?: { value: string; label: string };
  text: string;
  media: PortfolioMedia | null;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "sued-silva",
    title: "Sued Silva",
    service: "Social Media",
    format: "feed",
    tone: "deep",
    figure: { value: "1,2 milhão", label: "de seguidores no Instagram" },
    text: "O perfil saiu de 1 milhão para 1,2 milhão de seguidores em 1 ano de gestão da EBEN.",
    media: null,
  },
  {
    id: "juliana-arantes",
    title: "Juliana Arantes",
    service: "Social Media",
    format: "story",
    tone: "rose",
    figure: { value: "507 mil", label: "visualizações" },
    text: "Mais de 10 mil interações em 3 meses de gestão estratégica de conteúdo.",
    media: null,
  },
  {
    id: "storymaker-eventos",
    title: "Bastidores de eventos",
    service: "Storymaker",
    format: "story",
    tone: "burgundy",
    text: "Cobertura em tempo real de eventos sociais, corporativos e institucionais, publicada enquanto a ocasião acontece.",
    media: null,
  },
  {
    id: "videomaker-marca",
    title: "Vídeos de marca",
    service: "Videomaker",
    format: "film",
    tone: "raised",
    text: "Produção e edição de vídeos com a identidade da marca, para o perfil e para a memória dos eventos.",
    media: null,
  },
];

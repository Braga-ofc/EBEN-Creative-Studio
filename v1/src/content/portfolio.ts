/**
 * Portfólio da landing page, separado como a pasta "vídeos Portfolio" do
 * Google Drive da EBEN: cada aba é um serviço, cada grupo é uma subpasta
 * (um cliente ou projeto) e cada mídia é um arquivo dela.
 *
 * Quase todas as mídias continuam no Drive, compartilhadas para quem tem o
 * link. A página mostra a miniatura que o próprio Drive gera e abre os vídeos
 * no player do Drive, que converte qualquer formato do celular (.mov, .mp4)
 * para tocar em qualquer navegador. Para trocar ou incluir um arquivo, copie o
 * ID do link dele no Drive (o trecho entre /d/ e /view) e coloque em `driveId`.
 *
 * Um arquivo também pode morar no próprio site, em public/, com `src` e
 * `poster` no lugar de `driveId`. É o caso do vídeo principal da Sued: MP4 em
 * H.264, que toca em qualquer navegador sem conversão.
 *
 * Os números dos dois cases de Social Media foram autorizados pelas clientes, e
 * as fotos de perfil delas foram enviadas pelo responsável pelo projeto.
 */

export type PortfolioMediaKind = "video" | "photo" | "screen";

type MediaFromDrive = {
  /** ID do arquivo no Google Drive. */
  driveId: string;
};

type MediaFromSite = {
  /** Arquivo hospedado no próprio site, dentro de public/. */
  src: string;
  /** Capa do arquivo, também em public/: aparece no cartão e antes do play. */
  poster: string;
};

export type PortfolioMedia = (MediaFromDrive | MediaFromSite) & {
  /** "screen" é um print de tela do celular, mostrado inteiro. */
  kind: PortfolioMediaKind;
  /** Descrição da foto ou do print. Vídeos usam o nome do grupo. */
  alt?: string;
  /** Vídeo gravado na horizontal (16:9). Na grade, a miniatura é recortada na vertical. */
  landscape?: boolean;
};

export type PortfolioGroup = {
  id: string;
  /** Nome do cliente ou projeto, como a subpasta do Drive. Pasta sem subpastas fica sem nome. */
  name?: string;
  /** Foto de perfil do cliente, quadrada, ao lado do nome no case. Arquivo em public/. */
  avatar?: string;
  /** O que o cliente faz, logo abaixo do nome no case. */
  role?: string;
  /** Resultado do case, quando há número autorizado. */
  result?: { value: string; label: string; text: string };
  /**
   * A primeira mídia é a capa do grupo. Num case de Social Media, se ela for
   * um vídeo, vira o vídeo principal do case, em destaque ao lado do texto.
   */
  media: PortfolioMedia[];
};

export type PortfolioCategory = {
  id: "social-media" | "videomaker" | "storymaker" | "mobile-photo";
  /** Nome da aba, igual ao da pasta no Drive. */
  label: string;
  text: string;
  groups: PortfolioGroup[];
};

/** Chave estável de uma mídia, para as listas. */
export function mediaKey(media: PortfolioMedia): string {
  return "driveId" in media ? media.driveId : media.src;
}

/**
 * Imagem de uma mídia na largura pedida. Arquivo do site usa a própria capa.
 * Arquivo do Drive usa a miniatura que o Drive gera, no endereço final para
 * onde drive.google.com/thumbnail redireciona (poupa um redirecionamento).
 * Fotos e capas de vídeo vêm em WebP (-rw); os prints de tela, que estão em
 * PNG no Drive, vêm em JPEG com qualidade 85 (-rj-l85), quase 5 vezes mais leves.
 */
export function mediaImage(media: PortfolioMedia, width: number): string {
  if (!("driveId" in media)) return media.poster;
  const format = media.kind === "screen" ? "-rj-l85" : "-rw";
  return `https://lh3.googleusercontent.com/d/${media.driveId}=w${width}${format}`;
}

/** Player do Drive para incorporar na página. */
export function drivePreview(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "social-media",
    label: "Social Media",
    text: "Gestão das redes e planejamento de conteúdo, com linha editorial e constância.",
    groups: [
      {
        id: "sued-silva",
        name: "Sued Silva",
        avatar: "/images/portfolio/sued-silva-perfil.webp",
        role: "Cantora gospel",
        result: {
          value: "1,2 milhão",
          label: "de seguidores no Instagram",
          text: "O perfil saiu de 1 milhão para 1,2 milhão de seguidores em 1 ano de gestão da EBEN.",
        },
        media: [
          {
            src: "/videos/sued-silva-seguidores.mp4",
            poster: "/images/portfolio/sued-silva-seguidores.webp",
            kind: "video",
            landscape: true,
            alt: "Vídeo do perfil de Sued Silva no Instagram, com o contador de seguidores passando de 1 milhão para 1,2 milhão",
          },
          {
            driveId: "1Dq2llcAwIFvFowVFzb1_6hxKbmiptbtg",
            kind: "screen",
            alt: "Publicação de Sued Silva no Instagram comemorando 1 milhão de seguidores",
          },
          {
            driveId: "1JDgJt2RyKMTUhJ68JHjQ6oln4mabiQrv",
            kind: "screen",
            alt: "Publicação de Sued Silva no Instagram, com a cantora no palco e a legenda sobre 1,2 milhão de seguidores",
          },
        ],
      },
      {
        id: "juliana-arantes",
        name: "Juliana Arantes",
        avatar: "/images/portfolio/juliana-arantes-perfil.webp",
        role: "Consultora de negócios",
        result: {
          value: "507 mil",
          label: "visualizações",
          text: "Mais de 10 mil interações em 3 meses de gestão estratégica de conteúdo.",
        },
        media: [
          {
            driveId: "15MleUlBVr-JFbZbhtTvjCcbJCWPvLIM8",
            kind: "screen",
            alt: "Painel do Instagram de Juliana Arantes, com 507.831 visualizações e 10.481 interações",
          },
          {
            driveId: "1ng9dWqodk8Pp5JfX0ZChyIVgzwjtY0uK",
            kind: "screen",
            alt: "Perfil de Juliana Arantes no Instagram, com 19,4 mil seguidores",
          },
        ],
      },
    ],
  },
  {
    id: "videomaker",
    label: "Videomaker",
    text: "Produção e edição de vídeos com a identidade da marca.",
    groups: [
      {
        id: "sued-silva-videos",
        name: "Sued Silva",
        media: [
          { driveId: "1CU8wEZ1rC58_EridRW5GpMMBuPEUKnG6", kind: "video" },
          {
            driveId: "19qES3aQvvaHokjJ1aFksjghsoHFcFI4J",
            kind: "photo",
            alt: "Sued Silva cantando no palco com a bandeira do Brasil",
          },
        ],
      },
      {
        id: "clinica-cehd",
        name: "Clínica Cehd",
        media: [
          { driveId: "14M_0GBuyw7Po-a3ple9R9y_0U0Osoise", kind: "video" },
          { driveId: "1rC0zL0NWLZ_Po2P9JLuI_85N9meZLgOj", kind: "video" },
          { driveId: "1YjUKVpI0c-Rcl09qvzubOFw3NYVDecCV", kind: "video" },
        ],
      },
      {
        id: "juliana-arantes-videos",
        name: "Juliana Arantes",
        media: [
          { driveId: "18K_tNFCmwXxTOFkfWi-74F8CQt2THsNy", kind: "video" },
          { driveId: "1hvqhhgfucnXgItw9Xf74SZvaO-iXkcU6", kind: "video" },
        ],
      },
      {
        id: "pollynails",
        name: "Pollynails",
        media: [{ driveId: "1CgXg9O7v1tRznigaDhw_imO4CpvTW_Xg", kind: "video" }],
      },
      {
        id: "casamento-alef-isabelle",
        name: "Casamento Alef & Isabelle",
        media: [
          { driveId: "1THlFCw1xnNytv-C8TkBeEDIDyvOkgbUd", kind: "video", landscape: true },
          { driveId: "1xbkD-hjfnpctX75XHsVKG3XKlHz6lcps", kind: "video", landscape: true },
        ],
      },
      {
        id: "igreja",
        name: "Igreja",
        media: [
          { driveId: "15QMKZ2uAMK99lyWoRDghZf0Wcs79ep_J", kind: "video", landscape: true },
          { driveId: "1J7lLTS5Oizr1KcG-rQraU31Y9GgVgrac", kind: "video", landscape: true },
        ],
      },
    ],
  },
  {
    id: "storymaker",
    label: "Storymaker",
    text: "Cobertura de bastidores em tempo real, para mostrar o negócio acontecendo.",
    groups: [
      {
        id: "club-do-litro",
        name: "Club do Litro",
        media: [
          { driveId: "1i30tmBXfuEO5Hk2x4gNetPabFEh_S7n4", kind: "video" },
          { driveId: "1XDqdiSV1aEQv1_zOrr6p0VtPpfs0bkHq", kind: "video" },
          { driveId: "1x3NlGCOlRkXMcT6dNNMBi5tf7hQ7nK8Y", kind: "video" },
        ],
      },
      {
        id: "juliana-arantes-stories",
        name: "Juliana Arantes",
        media: [
          { driveId: "1VRP0os-T_tTY1fL9p-zBsIpR2YsodD4L", kind: "video" },
          { driveId: "1wR5UGQ-sEYph7fPfBMNw2EeWA1AmPxLr", kind: "video" },
        ],
      },
      {
        id: "kale-cozinha-sensorial",
        name: "KALE Cozinha Sensorial",
        media: [
          { driveId: "12XnZx3ti5lsNV90SvPCEFjXxGCNXgdIi", kind: "video" },
          { driveId: "1IJAJG2-MwC9fLm7Pz9IL96jY1upb8ILh", kind: "video" },
        ],
      },
    ],
  },
  {
    id: "mobile-photo",
    label: "Mobile Photo",
    text: "Retratos, ensaios e produtos fotografados com o celular.",
    groups: [
      {
        id: "mobile-photo-fotos",
        media: [
          {
            driveId: "1x1CdsKQk7t8Wbxv9RdoDltOfOGXNo0rj",
            kind: "photo",
            alt: "Mulher de blazer azul-marinho sentada, com as mãos entrelaçadas, em fundo vermelho",
          },
          {
            driveId: "1EhjocJPnmsE61jDGaY5X7IwRg9T71MPF",
            kind: "photo",
            alt: "Chef de dólmã e touca pretos apontando para a câmera, com panelas na bancada",
          },
          {
            driveId: "1Wz6OFMqGPsHXED-scRKWkvtjHRxWmK2z",
            kind: "photo",
            alt: "Mulher de blusa verde-clara com as mãos entrelaçadas, diante de uma persiana",
          },
          {
            driveId: "1Fn66pePIDajq_881dU8wGs3bxbECZgHS",
            kind: "photo",
            alt: "Carne assada servida em pé sobre uma tábua de madeira, com ervas",
          },
          {
            driveId: "1lCByLlOQEQauDswW04xCGQle7hW3Hi-O",
            kind: "photo",
            alt: "Homem de camisa branca sorrindo, com as mãos entrelaçadas, diante de uma persiana",
          },
          {
            driveId: "1fv-Zdxu8-ew0o3AI2kySbHa3gzrvEg_A",
            kind: "photo",
            alt: "Chef de dólmã e touca pretos com as mãos no rosto, em fundo rosado",
          },
          {
            driveId: "1LX-8806BuYc1TobPNz33CmlUvW7kUgCG",
            kind: "photo",
            alt: "Mulher de blazer azul-marinho e calça clara sentada de pernas cruzadas, em fundo vermelho",
          },
          {
            driveId: "1zLDxjnESJwftKQvy7REY2gQ2N-OOL42G",
            kind: "photo",
            alt: "Chef sorrindo com uma colher na mão, atrás de uma bancada com panelas",
          },
          {
            driveId: "1iBHrDLrdc67nbEp_r_uzoxuhKcm6aDX-",
            kind: "photo",
            alt: "Mulher de blusa verde-clara sorrindo, diante de uma persiana",
          },
          {
            driveId: "1yh77gCuEOkq7CVWKLHYbcXAjeV6Hpy5M",
            kind: "photo",
            alt: "Chef apontando para a câmera, em preto e branco",
          },
          {
            driveId: "1QpB73-kE3RCQdGWk59F1QmSAtzCj81Yk",
            kind: "photo",
            alt: "Homem de camisa branca sorrindo, sentado à mesa de um consultório com persianas",
          },
          {
            driveId: "1eV0Iu4dq2KlFcCUtFOeGB5V0UUyZlhVi",
            kind: "photo",
            alt: "Chef de dólmã e touca pretos de olhos fechados, com as mãos junto ao rosto, em fundo cinza",
          },
          {
            driveId: "1iQx4viF-R6e3XyQm2RM050XH0N11yOr5",
            kind: "photo",
            alt: "Mulher de blazer azul-marinho gesticulando, sentada em fundo vermelho",
          },
        ],
      },
    ],
  },
];

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: o build gera a pasta out/, que pode ir para qualquer hospedagem de arquivos.
  output: "export",
  // Sem servidor não há otimização automática: as imagens entram já no tamanho e formato de uso.
  images: { unoptimized: true },
  trailingSlash: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

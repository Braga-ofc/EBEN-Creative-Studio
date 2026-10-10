import { consultation, faq, services } from "@/content/landing";
import { brand, contact, seo } from "@/content/site";
import { absoluteUrl } from "@/lib/env";
import { consultationLink } from "@/lib/whatsapp";

/**
 * Dados estruturados (Schema.org, JSON-LD) da página inicial.
 *
 * Tudo vem do mesmo conteúdo que aparece na tela: o FAQPage usa as mesmas
 * perguntas e respostas visíveis, como o Google exige.
 */
export function buildHomeStructuredData() {
  const home = absoluteUrl("/");
  const id = (fragment: string) => `${home}#${fragment}`;

  const organization = {
    "@type": "Organization",
    "@id": id("organizacao"),
    name: brand.name,
    url: home,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/eben-logo.svg"),
    },
    slogan: brand.slogan,
    description: brand.summary,
    telephone: contact.whatsapp.schema,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: contact.whatsapp.schema,
      url: consultationLink,
      availableLanguage: brand.language,
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: contact.hours.schemaDays,
        opens: contact.hours.opens,
        closes: contact.hours.closes,
      },
    },
    knowsAbout: [
      "Social Media",
      "Gestão de redes sociais",
      "Criação de conteúdo digital",
      "Produção audiovisual",
      "Videomaker",
      "Storymaker",
      "Comunicação de marcas",
      "Cobertura de eventos",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços da EBEN Creative Studio",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": id(`servico-${service.id}`) },
      })),
    },
    makesOffer: {
      "@type": "Offer",
      name: consultation.title,
      price: "0",
      priceCurrency: "BRL",
      url: consultationLink,
      itemOffered: { "@id": id("consultoria") },
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": id("site"),
    url: home,
    name: brand.name,
    inLanguage: brand.language,
    publisher: { "@id": id("organizacao") },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": id("pagina"),
    url: home,
    name: seo.title,
    description: seo.description,
    inLanguage: brand.language,
    isPartOf: { "@id": id("site") },
    about: { "@id": id("organizacao") },
    dateModified: seo.contentUpdatedAt,
  };

  const serviceNodes = services.map((service) => ({
    "@type": "Service",
    "@id": id(`servico-${service.id}`),
    name: service.name,
    serviceType: service.serviceType,
    description: service.text,
    provider: { "@id": id("organizacao") },
    url: absoluteUrl("/#servicos"),
  }));

  const consultationService = {
    "@type": "Service",
    "@id": id("consultoria"),
    name: "Consultoria gratuita de presença digital",
    serviceType: "Diagnóstico de perfil e consultoria",
    description: consultation.text,
    provider: { "@id": id("organizacao") },
    url: absoluteUrl("/#consultoria"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      url: consultationLink,
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": id("perguntas-frequentes"),
    url: absoluteUrl("/#duvidas"),
    isPartOf: { "@id": id("pagina") },
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage, ...serviceNodes, consultationService, faqPage],
  };
}

/** Serializa o JSON-LD sem permitir que o conteúdo feche a tag <script>. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

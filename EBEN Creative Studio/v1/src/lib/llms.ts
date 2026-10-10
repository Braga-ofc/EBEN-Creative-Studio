import { approach, consultation, faq, howItWorks, services } from "@/content/landing";
import { portfolioCategories } from "@/content/portfolio";
import { agencyInstagram, brand, contact, portfolioInstagram } from "@/content/site";
import { absoluteUrl } from "@/lib/env";
import { consultationLink } from "@/lib/whatsapp";

function lowerFirst(text: string): string {
  return text.charAt(0).toLocaleLowerCase("pt-BR") + text.slice(1);
}

/**
 * Conteúdo do /llms.txt, no formato proposto em llmstxt.org: título, resumo
 * em citação, detalhes e listas de links por seção. Gerado do mesmo conteúdo
 * da página, para que as duas versões nunca se contradigam.
 */
export function buildLlmsTxt(): string {
  const home = absoluteUrl("/");
  const cases = portfolioCategories.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.name && group.result ? [{ category: category.label, name: group.name, result: group.result }] : [],
    ),
  );
  const fronts = portfolioCategories.filter((category) => !category.groups.some((group) => group.result));

  const lines = [
    `# ${brand.name}`,
    "",
    `> ${brand.summary} Conceito: "${brand.slogan}" A consultoria inicial é gratuita e é agendada pelo WhatsApp.`,
    "",
    "A EBEN atende empresários, clínicas, marcas pessoais, empresas e eventos sociais, corporativos e institucionais. O trabalho começa pela essência da marca (quem ela é, pra quem fala e como isso vira conteúdo) e só depois entra a produção.",
    "",
    `- Atendimento: ${lowerFirst(contact.hours.label)}, com resposta em até 2 horas nesse horário.`,
    `- WhatsApp: ${contact.whatsapp.display}`,
    `- Instagram da agência: [${agencyInstagram.handle}](${agencyInstagram.url})`,
    `- Instagram com a maior parte dos trabalhos: [${portfolioInstagram.handle}](${portfolioInstagram.url})`,
    "- Idioma: português do Brasil",
    "",
    "## Página",
    "",
    `- [${brand.name}](${home}): landing page com serviços, portfólio, processo, consultoria gratuita e perguntas frequentes.`,
    "",
    "## Serviços",
    "",
    ...services.map((service) => `- [${service.name}](${absoluteUrl("/#servicos")}): ${service.text}`),
    "",
    `${approach.intro} ${approach.steps.map((step) => `${step.title}: ${lowerFirst(step.text)}`).join(" ")}`,
    "",
    "## Portfólio e resultados",
    "",
    ...cases.map(
      (item) =>
        `- [${item.name}, ${item.category}](${absoluteUrl("/#portfolio")}): ${item.result.value} ${item.result.label}. ${item.result.text}`,
    ),
    ...fronts.map((category) => {
      const names = category.groups.flatMap((group) => (group.name ? [group.name] : []));
      const projects = names.length > 0 ? ` Projetos: ${names.join(", ")}.` : "";
      return `- [${category.label}](${absoluteUrl("/#portfolio")}): ${category.text}${projects}`;
    }),
    "",
    "## Como funciona",
    "",
    ...howItWorks.steps.map((step, index) => `${index + 1}. ${step.title}: ${lowerFirst(step.text)}`),
    "",
    `${howItWorks.investment.title}: ${lowerFirst(howItWorks.investment.text)}`,
    "",
    "## Consultoria gratuita",
    "",
    `- [${consultation.title}](${absoluteUrl("/#consultoria")}): ${consultation.text}`,
    `- [Agendar uma consultoria pelo WhatsApp](${consultationLink}): abre uma conversa com a EBEN com a mensagem pronta.`,
    "",
    "## Perguntas frequentes",
    "",
    ...faq.items.flatMap((item) => [`### ${item.question}`, "", item.answer, ""]),
    "## Optional",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): lista de URLs indexáveis.`,
    "",
  ];

  return lines.join("\n");
}

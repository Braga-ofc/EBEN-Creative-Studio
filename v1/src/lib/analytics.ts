/**
 * Envio dos eventos do site para o GA4 e para o Pixel da Meta. As funções só
 * enviam quando o script da ferramenta já está na página, o que só acontece
 * depois do aceite no aviso de cookies; antes disso, não fazem nada. Nenhum
 * evento leva dado pessoal: só nomes fixos de botões, seções e categorias.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/** Onde fica o botão ou o link clicado (parâmetro cta_location no GA4). */
export const ctaLocations = [
  "cabecalho",
  "menu-celular",
  "topo",
  "story",
  "barra-celular",
  "portfolio",
  "consultoria",
  "agendar",
  "rodape",
] as const;

export type CtaLocation = (typeof ctaLocations)[number];

function isCtaLocation(value: string | undefined): value is CtaLocation {
  return ctaLocations.some((location) => location === value);
}

type LinkEventName = "whatsapp_click" | "instagram_click";

export type TrackedEvent =
  | { name: LinkEventName; params: { cta_location: CtaLocation } }
  | { name: "section_view"; params: { section_id: string } }
  | { name: "scroll_depth"; params: { percent_scrolled: number } }
  | { name: "faq_expand"; params: { faq_question: string } }
  | { name: "portfolio_tab_select" | "portfolio_item_click"; params: { service_category: string } };

/** Envia um evento ao GA4. Devolve true quando o GA4 estava na página para recebê-lo. */
export function trackEvent(event: TrackedEvent): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return false;
  try {
    window.gtag("event", event.name, event.params);
    return true;
  } catch {
    // Bloqueador de anúncios ou script quebrado: o site segue normalmente.
    return false;
  }
}

/** Avisa o Pixel da Meta de que a pessoa abriu o WhatsApp (evento padrão Contact). */
export function trackMetaContact(): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    window.fbq("track", "Contact");
  } catch {
    // Mesmo caso do trackEvent: uma falha de rastreamento nunca aparece para o visitante.
  }
}

/**
 * Atributos que marcam um link para o rastreamento de cliques (PageEvents).
 * O link do crédito do desenvolvedor não usa: ele não é contato com a EBEN.
 */
export function trackLink(name: LinkEventName, location: CtaLocation) {
  return { "data-track": name, "data-cta-location": location };
}

/** Lê os atributos de trackLink no elemento clicado e envia o evento certo. */
export function trackLinkClick(element: HTMLElement): void {
  const name = element.dataset.track;
  const location = element.dataset.ctaLocation;
  if (!isCtaLocation(location)) return;

  if (name === "whatsapp_click") {
    trackEvent({ name, params: { cta_location: location } });
    trackMetaContact();
  } else if (name === "instagram_click") {
    trackEvent({ name, params: { cta_location: location } });
  }
}

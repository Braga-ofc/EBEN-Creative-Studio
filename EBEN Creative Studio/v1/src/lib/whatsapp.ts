import { contact } from "@/content/site";

export function whatsappLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link do botão principal da página: abre o WhatsApp da EBEN com a mensagem da consultoria. */
export const consultationLink = whatsappLink(contact.whatsapp.number, contact.consultationMessage);

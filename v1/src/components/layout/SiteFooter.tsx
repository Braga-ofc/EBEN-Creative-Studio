import { Lockup } from "@/components/brand/Lockup";
import Image from "next/image";
import {
  brand,
  contact,
  developerCredit,
  footerLabels,
  agencyInstagram,
  navigation,
  portfolioInstagram,
} from "@/content/site";
import { consultationLink, whatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory defer-render">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-x-6 lg:py-20">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="text-[13px] sm:text-[15px]">
            <Lockup />
            <span className="sr-only">{brand.name}</span>
          </p>
          <p className="mt-8 max-w-[22ch] type-quote text-ash">{brand.slogan}</p>
        </div>

        <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
          <h2 className="type-tag text-gold">{footerLabels.contact}</h2>
          <p className="mt-4 type-small text-ash">{contact.hours.label}</p>
          <a
            href={consultationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block type-body underline decoration-gold/60 transition-colors hover:text-gold"
          >
            WhatsApp {contact.whatsapp.display}
            <span className="sr-only"> (abre em uma nova aba)</span>
          </a>
          {[agencyInstagram, portfolioInstagram].map((profile) => (
            <a
              key={profile.handle}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block type-body underline decoration-gold/60 transition-colors hover:text-gold"
            >
              Instagram {profile.handle}
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>
          ))}
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3 lg:col-span-2">
          <h2 className="type-tag text-gold">{footerLabels.navigation}</h2>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="type-small text-ash transition-colors hover:text-ivory">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* No celular, o respiro de baixo (pb-32) deixa o crédito acima da barra fixa do botão. */}
      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col items-center gap-6 pt-8 pb-32 text-center md:flex-row md:justify-between md:pb-8 md:text-left">
          <p className="type-small text-ash md:order-first">© 2026 {brand.name}</p>
          <a
            href={whatsappLink(developerCredit.whatsappNumber, developerCredit.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="credit"
          >
            <span className="credit__label">{developerCredit.label}</span>
            <Image
              src={developerCredit.logo.src}
              alt={developerCredit.name}
              width={developerCredit.logo.width}
              height={developerCredit.logo.height}
              className="credit__logo"
            />
            <span className="credit__phone">{developerCredit.phoneDisplay}</span>
            <span className="sr-only"> (WhatsApp, abre em uma nova aba)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ConsentPreferencesButton } from "@/components/analytics/ConsentPreferencesButton";
import { Lockup } from "@/components/brand/Lockup";
import { dataController, privacyPolicy } from "@/content/privacy";
import { brand } from "@/content/site";
import { absoluteUrl, hasTracking, siteUrl } from "@/lib/env";

const pageUrl = absoluteUrl("/privacidade");

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | ${brand.name}`,
  description: privacyPolicy.metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: brand.locale,
    url: pageUrl,
    siteName: brand.name,
    title: `${privacyPolicy.title} | ${brand.name}`,
    description: privacyPolicy.metaDescription,
    // O openGraph desta página substitui o da raiz: a imagem de compartilhamento precisa ser repetida.
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: brand.name }],
  },
};

/**
 * Política de Privacidade: texto simples, no campo burgundy, com a mesma
 * tipografia das perguntas frequentes. Cabeçalho próprio só com a assinatura,
 * porque as âncoras do menu principal só existem na página inicial.
 */
export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-ivory/15 bg-burgundy">
        <div className="shell flex h-16 items-center lg:h-18">
          <Link
            href="/"
            aria-label={`${brand.name}, voltar para a página inicial`}
            className="text-[0.8125rem] text-ivory sm:text-[0.9375rem]"
          >
            <Lockup />
          </Link>
        </div>
      </header>

      <main id="conteudo" className="section-pad">
        <div className="shell grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-8 lg:col-start-3">
            <p className="type-tag text-gold">{privacyPolicy.updatedAt}</p>
            <h1 className="mt-6 type-h2">{privacyPolicy.title}</h1>
            <p className="mt-6 max-w-[60ch] type-lead text-mist">{privacyPolicy.intro}</p>
            {hasTracking ? (
              <ConsentPreferencesButton
                siteUrl={siteUrl}
                label={privacyPolicy.preferencesButton}
                className="consent__button mt-8"
              />
            ) : null}

            <div className="mt-14 border-b border-ivory/20 lg:mt-16">
              {privacyPolicy.sections.map((section) => (
                <section
                  key={section.id}
                  aria-labelledby={`politica-${section.id}`}
                  className="border-t border-ivory/20 py-8 lg:py-10"
                >
                  <h2 id={`politica-${section.id}`} className="type-h3">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-[62ch] type-body text-mist">
                      {paragraph}
                    </p>
                  ))}
                  {section.id === "responsavel" && dataController.name ? (
                    <p className="mt-4 max-w-[62ch] type-body text-mist">
                      {privacyPolicy.controllerSentence(dataController.name, dataController.email)}
                    </p>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-4 max-w-[62ch] list-disc space-y-3 pl-5 marker:text-gold">
                      {section.items.map((item) => (
                        <li key={item} className="type-body text-mist">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <Link
              href="/"
              className="mt-12 inline-block type-body underline decoration-gold/60 transition-colors hover:text-gold"
            >
              {privacyPolicy.backLink}
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-ivory/10 bg-charcoal">
        <div className="shell py-8">
          <p className="type-small text-ash">© 2026 {brand.name}</p>
        </div>
      </footer>
    </>
  );
}

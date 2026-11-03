import type { Metadata } from "next";
import Link from "next/link";
import { Lockup } from "@/components/brand/Lockup";
import { brand } from "@/content/site";
import { terms } from "@/content/terms";
import { absoluteUrl } from "@/lib/env";

const pageUrl = absoluteUrl("/termos");

export const metadata: Metadata = {
  title: `${terms.title} | ${brand.name}`,
  description: terms.metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: brand.locale,
    url: pageUrl,
    siteName: brand.name,
    title: `${terms.title} | ${brand.name}`,
    description: terms.metaDescription,
    // O openGraph desta página substitui o da raiz: a imagem de compartilhamento precisa ser repetida.
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: brand.name }],
  },
};

/** Termos de Uso: mesmo layout simples da Política de Privacidade. */
export default function TermsPage() {
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
            <p className="type-tag text-gold">{terms.updatedAt}</p>
            <h1 className="mt-6 type-h2">{terms.title}</h1>
            <p className="mt-6 max-w-[60ch] type-lead text-mist">{terms.intro}</p>

            <div className="mt-14 border-b border-ivory/20 lg:mt-16">
              {terms.sections.map((section) => (
                <section
                  key={section.id}
                  aria-labelledby={`termos-${section.id}`}
                  className="border-t border-ivory/20 py-8 lg:py-10"
                >
                  <h2 id={`termos-${section.id}`} className="type-h3">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-[62ch] type-body text-mist">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/privacidade"
                className="type-body underline decoration-gold/60 transition-colors hover:text-gold"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/"
                className="type-body underline decoration-gold/60 transition-colors hover:text-gold"
              >
                {terms.backLink}
              </Link>
            </div>
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

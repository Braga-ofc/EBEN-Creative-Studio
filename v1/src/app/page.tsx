import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Approach } from "@/components/sections/Approach";
import { Benefits } from "@/components/sections/Benefits";
import { Consultation } from "@/components/sections/Consultation";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { Objections } from "@/components/sections/Objections";
import { Pains } from "@/components/sections/Pains";
import { Portfolio } from "@/components/sections/Portfolio";
import { buildHomeStructuredData, serializeJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[80] bg-ivory px-4 py-3 font-semibold text-burgundy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Manifesto />
        <Portfolio />
        <Pains />
        <Approach />
        <Benefits />
        <HowItWorks />
        <Consultation />
        <Objections />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeStructuredData()) }}
      />
    </>
  );
}

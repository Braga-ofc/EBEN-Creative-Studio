import { PageEvents } from "@/components/analytics/PageEvents";
import { IntroScript } from "@/components/layout/IntroScript";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionSpine } from "@/components/layout/SectionSpine";
import { SectionThread } from "@/components/layout/SectionThread";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteIntro } from "@/components/layout/SiteIntro";
import { About } from "@/components/sections/About";
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
import { hasTracking } from "@/lib/env";
import { buildHomeStructuredData, serializeJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      {/* O script vem antes da tela de abertura para escondê-la já na primeira pintura. */}
      <IntroScript />
      <SiteIntro />

      <a
        href="#conteudo"
        className="sr-only z-[80] bg-ivory px-4 py-3 font-semibold text-burgundy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      {/* overflow-x-clip: o que entra deslizando de lado não cria rolagem horizontal (e não quebra o sticky). */}
      <main id="conteudo" tabIndex={-1} className="overflow-x-clip outline-none">
        {/* O fio dourado: um fio principal na margem, do manifesto às perguntas
            (SectionSpine), com uma estrela em cada divisa e dois ramos que
            atravessam até o meio, um para cada convite. */}
        <Hero />
        <SectionThread />
        <div className="relative">
          <SectionSpine />
          <Manifesto />
          <SectionThread />
          <Portfolio />
          <SectionThread />
          <Pains />
          <SectionThread />
          <Approach />
          <SectionThread />
          <Benefits />
          <SectionThread />
          <HowItWorks />
          <SectionThread />
          <About />
          <SectionThread align="center" />
          <Consultation />
          <SectionThread />
          <Objections />
          <SectionThread />
          <Faq />
        </div>
        <SectionThread align="center" />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
      {hasTracking ? <PageEvents /> : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeStructuredData()) }}
      />
    </>
  );
}

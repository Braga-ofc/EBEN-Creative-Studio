"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { consentBanner } from "@/content/privacy";
import { cn } from "@/lib/cn";
import {
  closeConsentPreferences,
  saveConsent,
  useConsent,
  usePreferencesOpen,
  type Consent,
} from "@/lib/consent";

type ConsentBannerProps = {
  /** Categorias com ferramenta configurada: o aviso só pergunta sobre o que existe. */
  categories: Consent;
};

/**
 * Aviso de cookies: aparece enquanto não há escolha salva e volta pelo link
 * "Preferências de cookies". Aceitar e Recusar têm o mesmo tamanho e o mesmo
 * peso. Não é modal: não prende o foco nem cobre o botão principal (globals.css,
 * bloco "Aviso de cookies").
 */
export function ConsentBanner({ categories }: ConsentBannerProps) {
  const consent = useConsent();
  const reopened = usePreferencesOpen();
  const [customizing, setCustomizing] = useState(false);
  // Rascunho do painel Personalizar; sem rascunho, vale a escolha salva (ou tudo desligado).
  const [draft, setDraft] = useState<Consent | null>(null);
  const regionRef = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const visible = consent === null || reopened;
  const bothCategories = categories.analytics && categories.ads;
  const showOptions = bothCategories && (customizing || reopened);
  const current = draft ?? consent ?? { analytics: false, ads: false };

  // Reaberto pelo link do rodapé: o foco vem para o aviso e volta para o link depois da escolha.
  useEffect(() => {
    if (!reopened) return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    regionRef.current?.focus();
  }, [reopened]);

  if (!visible) return null;

  function finish(next: Consent) {
    const returnTo = reopened ? opener.current : null;
    setCustomizing(false);
    setDraft(null);
    saveConsent(next);
    returnTo?.focus();
  }

  function toggle(category: keyof Consent) {
    setDraft({ ...current, [category]: !current[category] });
  }

  return (
    <section
      ref={regionRef}
      tabIndex={-1}
      aria-label={consentBanner.label}
      className={cn("consent", reopened && "consent--now")}
      onKeyDown={(event) => {
        // Esc fecha sem mudar nada, mas só quando já existe uma escolha salva.
        if (event.key !== "Escape" || !reopened || consent === null) return;
        setDraft(null);
        closeConsentPreferences();
        opener.current?.focus();
      }}
    >
      <p className="type-small text-mist">
        {categories.ads ? consentBanner.textWithAds : consentBanner.text}{" "}
        <Link href="/privacidade" className="consent__link">
          {consentBanner.policyLink}
        </Link>
      </p>

      {showOptions ? (
        <div role="group" aria-label={consentBanner.customize} className="consent__options">
          {(["analytics", "ads"] as const).map((category) => (
            <label key={category} className="consent__option">
              <input
                type="checkbox"
                checked={current[category]}
                onChange={() => toggle(category)}
                className="consent__check"
              />
              <span className="type-small text-ash">
                <span className="font-semibold text-ivory">{consentBanner.categories[category].title}.</span>{" "}
                {consentBanner.categories[category].text}
              </span>
            </label>
          ))}
        </div>
      ) : null}

      <div className="consent__actions">
        <button
          type="button"
          className="consent__button"
          onClick={() => finish({ analytics: false, ads: false })}
        >
          {consentBanner.reject}
        </button>
        <button type="button" className="consent__button" onClick={() => finish(categories)}>
          {consentBanner.accept}
        </button>
      </div>

      {showOptions ? (
        <button type="button" className="consent__more" onClick={() => finish(current)}>
          {consentBanner.save}
        </button>
      ) : bothCategories ? (
        <button type="button" className="consent__more" onClick={() => setCustomizing(true)}>
          {consentBanner.customize}
        </button>
      ) : null}
    </section>
  );
}

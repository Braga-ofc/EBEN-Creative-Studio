"use client";

import { openConsentPreferences, useOnOfficialSite } from "@/lib/consent";

type ConsentPreferencesButtonProps = {
  siteUrl: string;
  label: string;
  className?: string;
};

/**
 * Reabre o aviso de cookies para o visitante rever a escolha. Fora do
 * endereço oficial o aviso não existe, então o botão também não aparece.
 */
export function ConsentPreferencesButton({ siteUrl, label, className }: ConsentPreferencesButtonProps) {
  const onSite = useOnOfficialSite(siteUrl);
  if (!onSite) return null;

  return (
    <button type="button" onClick={openConsentPreferences} className={className}>
      {label}
    </button>
  );
}

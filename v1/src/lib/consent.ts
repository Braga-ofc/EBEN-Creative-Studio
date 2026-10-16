import { useSyncExternalStore } from "react";

/**
 * Escolha do visitante sobre cookies, por categoria, guardada no localStorage
 * (chave eben-consent). Nenhum script de análise ou de anúncios carrega sem
 * ela. Só para componentes "use client": usa o window e hooks do React.
 */

export type Consent = { analytics: boolean; ads: boolean };

const STORAGE_KEY = "eben-consent";
/** Suba quando a política trouxer uma ferramenta nova: o aviso volta para todo mundo. */
const CONSENT_VERSION = 1;
const CHANGE_EVENT = "eben:consent";

/** Cookies de cada categoria, apagados quando o visitante retira o aceite. */
const COOKIE_PREFIXES: Record<keyof Consent, string[]> = {
  analytics: ["_ga", "_gid", "_gat", "_clck", "_clsk"],
  ads: ["_fbp", "_fbc"],
};

// Cópia em memória para quando o navegador bloqueia o localStorage: a escolha vale até fechar a aba.
let memoryRaw: string | null = null;
let cachedRaw: string | null | undefined;
let cachedConsent: Consent | null = null;
let preferencesOpen = false;

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const data: unknown = JSON.parse(raw);
    if (typeof data !== "object" || data === null) return null;
    const record = data as Record<string, unknown>;
    if (record.v !== CONSENT_VERSION) return null;
    return { analytics: record.analytics === true, ads: record.ads === true };
  } catch {
    return null;
  }
}

/** A escolha salva, ou null quando ainda não há escolha (falha de leitura conta como sem aceite). */
export function readConsent(): Consent | null {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY) ?? memoryRaw;
  } catch {
    raw = memoryRaw;
  }
  // Mesmo texto, mesmo objeto: o useSyncExternalStore exige uma leitura estável.
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedConsent = parse(raw);
  }
  return cachedConsent;
}

function notify() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function expireCookies(prefixes: string[]) {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => prefixes.some((prefix) => name.startsWith(prefix)));
  // O GA4 grava o cookie no domínio mais alto que consegue: apaga em todos os níveis do endereço.
  const labels = window.location.hostname.split(".");
  const domains = [""];
  for (let index = 0; index < labels.length - 1; index += 1) {
    domains.push(`; domain=.${labels.slice(index).join(".")}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}

/**
 * Salva a escolha. Quando o visitante retira um aceite que já tinha dado, os
 * scripts já carregados não têm como sair da página: o site avisa cada
 * ferramenta, apaga os cookies dela e recarrega.
 */
export function saveConsent(next: Consent) {
  const previous = readConsent();
  const raw = JSON.stringify({ v: CONSENT_VERSION, ...next });
  memoryRaw = raw;
  try {
    window.localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // Armazenamento bloqueado: fica a cópia em memória.
  }
  preferencesOpen = false;

  const revokeAnalytics = previous?.analytics === true && !next.analytics;
  const revokeAds = previous?.ads === true && !next.ads;
  if (revokeAnalytics || revokeAds) {
    try {
      if (revokeAnalytics) window.clarity?.("consent", false);
      if (revokeAds) window.fbq?.("consent", "revoke");
    } catch {
      // Ferramenta bloqueada: os cookies são apagados abaixo de qualquer jeito.
    }
    expireCookies([
      ...(revokeAnalytics ? COOKIE_PREFIXES.analytics : []),
      ...(revokeAds ? COOKIE_PREFIXES.ads : []),
    ]);
    window.location.reload();
    return;
  }

  notify();
}

/** Reabre o aviso de cookies (link "Preferências de cookies"). */
export function openConsentPreferences() {
  preferencesOpen = true;
  notify();
}

export function closeConsentPreferences() {
  preferencesOpen = false;
  notify();
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

function subscribeNever() {
  return () => {};
}

/** A escolha atual: undefined no HTML do build (ainda não dá para saber), null sem escolha. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore<Consent | null | undefined>(subscribe, readConsent, () => undefined);
}

export function usePreferencesOpen(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => preferencesOpen,
    () => false,
  );
}

/**
 * O rastreamento só liga no endereço oficial do site (NEXT_PUBLIC_SITE_URL):
 * deploy previews, cópias locais e o servidor de desenvolvimento não enviam
 * nada e não misturam testes com os dados reais.
 */
export function useOnOfficialSite(siteUrl: string): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => window.location.origin === siteUrl,
    () => false,
  );
}

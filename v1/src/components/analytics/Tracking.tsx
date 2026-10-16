"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import type { TrackingIds } from "@/lib/env";
import { useConsent, useOnOfficialSite } from "@/lib/consent";

type TrackingProps = {
  siteUrl: string;
  ids: TrackingIds;
};

/**
 * Carrega o GA4, o Microsoft Clarity e o Pixel da Meta pelos scripts oficiais,
 * cada um só depois do aceite da sua categoria, e mostra o aviso de cookies.
 * Fora do endereço oficial do site, não faz nada (useOnOfficialSite).
 */
export function Tracking({ siteUrl, ids }: TrackingProps) {
  const onSite = useOnOfficialSite(siteUrl);
  const consent = useConsent();
  const analytics = onSite && consent?.analytics === true;
  const ads = onSite && consent?.ads === true;

  // O Clarity guarda cookies de anúncio só com o aceite de Anúncios; a escolha pode mudar sem recarregar.
  useEffect(() => {
    if (!analytics || !ids.clarity) return;
    try {
      window.clarity?.("consentv2", { ad_Storage: ads ? "granted" : "denied", analytics_Storage: "granted" });
    } catch {
      // Clarity bloqueado: nada a fazer.
    }
  }, [analytics, ads, ids.clarity]);

  if (!onSite) return null;

  return (
    <>
      {analytics && ids.ga ? <GoogleAnalytics id={ids.ga} /> : null}
      {analytics && ids.clarity ? <Clarity id={ids.clarity} ads={ads} /> : null}
      {ads && ids.metaPixel ? <MetaPixel id={ids.metaPixel} /> : null}
      <ConsentBanner
        categories={{ analytics: Boolean(ids.ga || ids.clarity), ads: Boolean(ids.metaPixel) }}
      />
    </>
  );
}

/**
 * GA4 com o consentimento já concedido para análise e negado para anúncios do
 * Google, sem Google Signals. Com ?ga_debug=1 no endereço, os eventos aparecem
 * no DebugView do GA4.
 */
function GoogleAnalytics({ id }: { id: string }) {
  return (
    <>
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
gtag('js', new Date());
var config = { allow_google_signals: false, allow_ad_personalization_signals: false };
if (/[?&]ga_debug=1(&|$)/.test(location.search)) config.debug_mode = true;
gtag('config', '${id}', config);`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    </>
  );
}

/** Snippet oficial do Clarity, com o sinal de consentimento (Consent API v2). */
function Clarity({ id, ads }: { id: string; ads: boolean }) {
  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${id}");
window.clarity('consentv2', { ad_Storage: '${ads ? "granted" : "denied"}', analytics_Storage: 'granted' });`}
    </Script>
  );
}

/**
 * Código-base oficial do Pixel da Meta, sem a configuração automática de
 * eventos (autoConfig), que mandaria cliques sozinha e duplicaria o Contact.
 */
function MetaPixel({ id }: { id: string }) {
  return (
    <Script id="meta-pixel-init" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('set', 'autoConfig', false, '${id}');
fbq('init', '${id}');
fbq('track', 'PageView');`}
    </Script>
  );
}

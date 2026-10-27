"use client";

import Script from "next/script";
import { useEffect } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-KDXLX9DPMZ";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  if (process.env.NODE_ENV !== "production") return;
  window.gtag?.("event", name, parameters);
}

export function GoogleAnalytics() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const element = target?.closest<HTMLElement>("[data-ga-event]");
      if (!element) return;

      const name = element.dataset.gaEvent;
      if (!name) return;

      trackEvent(name, {
        item_name: element.dataset.gaLabel ?? element.textContent?.trim().slice(0, 80) ?? "unknown",
        destination: element instanceof HTMLAnchorElement ? element.href : "",
      });
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return <>
    {process.env.NODE_ENV === "production" && <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          send_page_view: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      `}</Script>
    </>}
  </>;
}

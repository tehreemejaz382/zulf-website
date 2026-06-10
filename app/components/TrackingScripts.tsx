"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TrackingScripts() {
  const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

  useEffect(() => {
    // Capture UTM parameters from URL if they exist
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const source = urlParams.get("utm_source");
      const medium = urlParams.get("utm_medium");
      const campaign = urlParams.get("utm_campaign");

      if (source) {
        localStorage.setItem("utm_source", source);
      }
      if (medium) {
        localStorage.setItem("utm_medium", medium);
      }
      if (campaign) {
        localStorage.setItem("utm_campaign", campaign);
      }
    }
  }, []);

  if (!fbPixelId) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SY0VBVY2JK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SY0VBVY2JK');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}

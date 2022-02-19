import React, { useEffect, useRef } from "react"
import Script from 'next/script'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
//NEXT_PUBLIC_GAdsenseClient_Square=ca-pub-8018701717083970
export default function SquareAdsense() {
  const advRef = useRef(null)
return(
    <>
    { /*START Square Google Adsense */ }

        
        <ins className="adsbygoogle example_responsive_1"
            data-ad-client={publicRuntimeConfig.NEXT_PUBLIC_GAdsenseClient_Square}
            data-ad-slot="2377556211"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
        <Script strategy="afterInteractive">
        {`
            (adsbygoogle = window.adsbygoogle || []).push({});
        `}
        </Script>
        
      { /* END Square Google Adsense */ }
           
    </>
)
}

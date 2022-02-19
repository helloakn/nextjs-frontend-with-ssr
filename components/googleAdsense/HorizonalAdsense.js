import React, { useEffect, useRef } from "react"
import Script from 'next/script'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
//NEXT_PUBLIC_GAdsenseClient_Square=ca-pub-8018701717083970
export default function HorizonalAdsense(...props) {
    const { currentPath } = props;
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }, [currentPath])

return(
    <div key={currentPath}>
    { /*START Square Google Adsense */ }

        <ins className="adsbygoogle horizonalAds"
            style={{display: 'block'}}
            data-ad-client={publicRuntimeConfig.NEXT_PUBLIC_GAdsense_Client}
            data-ad-slot="6293584643"
            data-ad-format="auto"
            data-full-width-responsive="true"
        >
        </ins>
       
      
        
      { /* END Square Google Adsense */ }
           
    </div>
)
}

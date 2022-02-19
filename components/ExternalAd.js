import React, { useEffect, useRef } from "react"
import Script from 'next/script'

export default function ExternalAd() {
  const advRef = useRef(null)
return(
    <>
    <div id="divAdvertisement"></div>

    
    <Script
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
        __html: `
        var oldDocumentWrite = document.write

        // change document.write temporary
        document.write = function(node){
        // $("body").append(node)
        // alert(node);
        let _divAdvertisementHtml = document.getElementById('divAdvertisement').innerHTML;
        document.getElementById('divAdvertisement').innerHTML = _divAdvertisementHtml + node;
        }
    `,
    }}
    />
    <Script 
    data-cfasync="false"  
    src="https://clearonclick.com/a/display.php?r=5620890" 
    strategy="afterInteractive"
    onLoad={() => {
        setTimeout(function() {
            document.write = oldDocumentWrite;
            console.log('finished loading');
        }, 100)
    }}
    ></Script>
           
    </>
)
}

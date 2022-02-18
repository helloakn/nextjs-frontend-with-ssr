import React, { useEffect, useRef } from "react"
import Script from 'next/script'

export default function ExternalAd() {
  const advRef = useRef(null)
return(
    <>
    <div id="divAdvertisement">aa</div>
    <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    var oldDocumentWrite = document.write

    // change document.write temporary
    document.write = function(node){
       // $("body").append(node)
      // alert(node);
       document.getElementById('divAdvertisement').innerHTML = node.innerHTML=node;
    }
  `,
  }}
/>
  <Script data-cfasync="false"  src="//clearonclick.com/a/display.php?r=5620634&sub1=#divAdvertisement" strategy="afterInteractive"></Script>
           
    </>
)
}

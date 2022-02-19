import React, { useEffect, useRef } from "react"

import Script from 'next/script'
import Head from 'next/head'
import getConfig from 'next/config';

const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()
let APP_DOMAIN = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;
export default function Header({...props }) {

//     useEffect(() => {
//         var ads = document.getElementsByClassName("adsbygoogle").length;
//         for (var i = 0; i < ads; i++) {
//           try {
//             (adsbygoogle = window.adsbygoogle || []).push({});
//           } catch (e) { }
//         }
//   }, []);
    return (
        <Head>
            <title>{props.title?props.title:"Aung Kyaw Nyunt"}</title>
            <base href={APP_DOMAIN} />
            {/* FOR SE */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description"                content={props.description?props.description:"aungkyawnyunt.com"} />
            <meta name="keywords"                   content={props.description?props.description:"Aung Kyaw Nyunt's portfolio website as well as tutorials website for aws tutorial, docker tutorial, devops tutorial, programming tutorial , etc..."} />
            <meta name="author"                   content="Aung Kyaw Nyunt" />
            <meta name="robots"                     content="index, follow" />
            
            {/* FOR facebook */}
            <meta property="og:url"                content={props.url?props.url:"https://www.aungkyawnyunt.com"} />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content={props.title?props.title:"Aung Kyaw Nyunt"} />
            <meta property="og:description"        content={props.description?props.description:"Aung Kyaw Nyunt's portfolio website as well as tutorial website for aws tutorial, docker tutorial, devops tutorial, programming tutorial , etc..."} />
            <meta property="og:image"              content={props.image?props.image:"https://d2y7r2fmr1u4v.cloudfront.net/author/akn.png"} />
            <meta property="fb:app_id"              content="275373384703871" />
            
            {/* FOR Twitter */}
            <meta name="twitter:card"               content="summary" />
            <meta name="twitter:site"               content="@aungkyawnyunt.com" />
            <meta name="twitter:creator"            content="@akn" />
            <meta property="og:url"                 content={props.url?props.url:"https://www.aungkyawnyunt.com"} />
            <meta property="og:title"               content={props.title?props.title:"Aung Kyaw Nyunt"} />
            <meta property="og:description"         content={props.description?props.description:"Aung Kyaw Nyunt's portfolio website as well as tutorial website for aws tutorial, docker tutorial, devops tutorial, programming tutorial , etc..."} />
            <meta property="og:image"               content={props.image?props.image:"https://d2y7r2fmr1u4v.cloudfront.net/author/akn.png"} />

            <meta name="a.validate.02" content="YaNi53bzv7MsOb9ZmhTMGEKxy7Rn3I_ZoIYa" />

            <link rel="icon" href="/media/logo.svg" />
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
            integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
            crossOrigin="anonymous"
            />
 
 <script 
            async 
            src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+publicRuntimeConfig.NEXT_PUBLIC_GAdsense_Client}
            
            crossOrigin="anonymous"
            
            
        ></script>
           

        </Head>
    )
}

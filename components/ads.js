import Script from 'next/script'
export default function Ads({...props }) {
    
    return(
        <>
            { /*START Global site tag (gtag.js) - Google Analytics*/ }
        <Script
            src={"//achcdn.com/script/atg.js"}
            strategy="beforeInteractive"
            czid="zepmguokms"
            data-adel="atag"
        />
        </>
    );
    
}
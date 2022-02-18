import Script from 'next/script'
export default function Ads({...props }) {
    
    return(
        <>
            { /*START Global site tag (gtag.js) - Google Analytics*/ }
        <Script
            src={"//clearonclick.com/a/display.php?r=5620518"}
            strategy="beforeInteractive"
            data-cfasync="false"
        />
        </>
    );
    
}
/*
<script data-cfasync="false" type="text/javascript" src="//clearonclick.com/a/display.php?r=5620518"></script>
*/

import Script from 'next/script'

import getConfig from 'next/config'
import React from 'react'

const { publicRuntimeConfig } = getConfig();

import styles from './../../styles/MainLayout.module.css'
//import styles from '../styles/MainLayout.module.css'

import Link from 'next/link'
import Image from 'next/image'

import Header from '../header';

import Ads from '../ads';
let APP_DOMAIN = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;

interface IProps {
    head: string;
    
 }

interface IMainLayout {
    children: React.ReactNode;
    head:React.ReactNode;
    title:string;
 }

export default function MainLayout({ children, ...props }:IMainLayout) {
    
    const _googleUrl = "https://www.googletagmanager.com/gtag/js?id="+publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    return (
    <>
        {
        props.head?
            props.head:
            <Header title={props.title} />
        }
      {/* Begin Body */ }
        <div className={styles.mainViewPort}>
            




{/* Start Header */ }
    <div className={styles.mainHeaderContainer}>
                


        { /*START Global site tag (gtag.js) - Google Analytics*/ }
        <Script
            src={"https://www.googletagmanager.com/gtag/js?id="+publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
      { /* END Global site tag (gtag.js) - Google Analytics*/ }

        {/* Start Small Menu */ }
        <div className={styles.menuSmallContainer}>
                    <div className={styles.menuInnerContainer}>
                                    <div className={styles.menuInnerContainerSmallLeft}>
                                        <Link href="https://github.com/helloakn">
                                            <a>GitHub</a>
                                        </Link>
                                        <Link href="https://www.upwork.com/freelancers/~014bcfc74386c7a188">
                                            <a>UpWork</a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a">
                                        <a>Linkedin</a>
                                        </Link>
                                        <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                                        <a>Facebook</a>
                                        </Link>
                                    </div>
                                    <div className={styles.menuInnerContainerSmallRight}>
                                    
                                    </div>
                    </div>
        </div>
        {/* END Small Menu */ }

        {/* Start Big Menu */ }
        <div className={styles.menuBigContainer}>
            <div className={styles.menuInnerContainer}>
                <div className={styles.menuInnerContainerBigLeft}>
                    <Link href="/home" >
                        <a className={styles.MenuLogoLink}>
                            
                            <img src="media/logo.svg" height="70%" />
                            <label>aungkyawnyunt.com</label>
                        </a>
                    </Link>
                </div>
                <div className={styles.menuInnerContainerBigRight}>
                    <Link href={APP_DOMAIN}>
                        <a>Home</a>
                    </Link>
                    <Link href="/category/aws">
                        <a>AWS</a>
                    </Link>
                    <Link href="/category/devops">
                        <a>DevOps</a>
                    </Link>
                    <Link href="/category/docker">
                        <a>Docker</a>
                    </Link>
                    <Link href="/category/programming">
                        <a>Programming</a>
                    </Link>
                    
                </div>
            </div>
        </div>

        {/* End Big Menu */ }

        <div className={styles.menuLine}>
        </div>
    </div>

{/* END Header */ }



              {/* START Content */ }
            <div className={styles.mainBodyContainer}>
                <div className={styles.bodyInnerContainer}>
                    {children}
                </div>
                
            </div>
            <div className={styles.AdsContainer}>
                   <Ads />
            </div>
            {/* END Content */ }




            {/* Start Footer */ }
            <div className={styles.mainFooterContainer}>
                <div className={styles.mainFooterInnerContainer}>
                   
                    <div className={styles.footerColumn}>
                       
                            <Link href="https://www.aungkyawnyunt.com">
                                        <a>https://www.aungkyawnyunt.com</a>
                            </Link> <br/>
                            &#169; All right Reserved. Inspired Codes...
                        
                    </div>

                    <div className={styles.footerColumn}>
                        <div className={styles.footerCaption}>Channel</div>
                        <div className={styles.footerParagraph}>
                            <div className={styles.footerRow}>
                                <Link href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a">
                                    <a>Youtube</a>
                                </Link>
                            </div>
                            <div className={styles.footerRow}>
                               
                                <Link href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a">
                                    <a>Facebook</a>
                                </Link>
                            </div>
                            <div className={styles.footerRow}>
                                <Link href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a">
                                    <a>GitHub</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerColumn}>
                        <div className={styles.footerCaption}>Get In Touch</div>
                        <div className={styles.footerParagraph}>
                            <div className={styles.footerRow}>
                                <i className="fas fa-mobile-alt"></i>
                                <label className={styles.footerLabel}>+95 9763764572</label>
                            </div>
                            <div className={styles.footerRow}>
                                <i className="fas fa-mail-bulk"></i>
                                <label className={styles.footerLabel}>aungkyawnyunt2004@gmail.com</label>
                            </div>
                            <div className={styles.footerRow}>
                                <i className="fas fa-dice-d20"></i>
                                <label className={styles.footerLabel}>
                                   
                                  
                                    <Link href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a">
                                        <a>Linkedin</a>
                                    </Link> , 
                                    <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                                        <a> Facebook</a>
                                    </Link>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* END Footer */ }

        
            
        </div>
        {/* Begin Body */ }
       
    </>
    )
}

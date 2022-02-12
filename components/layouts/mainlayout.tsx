import styles from './../../styles/MainLayout.module.css'
//import styles from '../styles/MainLayout.module.css'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../header';

export default function MainLayout({ children, ...props }) {
    return (
    <>
        {
        props.head?
            props.head:
            <Header title={props.title} />
        }
      {/* Begin Body */ }
        <div className={styles.mainContainer}>
            {/* Begin Header */ }
            <div className={styles.mainHeaderContainer}>
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
                            <Link href="home" >
                                <a className={styles.MenuLogoLink}>
                                    
                                    <img src="media/logo.svg" height="70%" />
                                    <label>aungkyawnyunt.com</label>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.menuInnerContainerBigRight}>
                            <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                            <a>Home</a>
                            </Link>
                            <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                            <a>AWS</a>
                            </Link>
                            <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                            <a>DevOps</a>
                            </Link>
                            <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                            <a>Programming</a>
                            </Link>
                            <Link href="https://www.facebook.com/mr.aungkyawnyunt">
                            <a>Others</a>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* End Big Menu */ }
                <div className={styles.menuLine}>
                </div>
            </div>
            
            {/* END Header */ }
            <div className={styles.mainBodyContainer}>
                <div className={styles.bodyInnerContainer}>
                    {children}s
                </div>
            </div>
            {/* Start Footer */ }
            <div className={styles.mainFooterContainer}>
                <div className={styles.mainFooterInnerContainer}>
                    <div className={styles.footerColumn}>
                        <div>
                            <Link href="https://www.aungkyawnyunt.com">
                                        <a>https://www.aungkyawnyunt.com</a>
                            </Link> <br/>
                            &#169; All right Reserved. Inspired Codes...
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerCaption}>Get In Touch</div>
                        <div className={styles.footerParagraph}>
                            <div className={styles.footerRow}>
                                <i class="fas fa-mobile-alt"></i>
                                <label className={styles.footerLabel}>+95 9763764572</label>
                            </div>
                            <div className={styles.footerRow}>
                                <i class="fas fa-mail-bulk"></i>
                                <label className={styles.footerLabel}>aungkyawnyunt2004@gmail.com</label>
                            </div>
                            <div className={styles.footerRow}>
                                <i class="fas fa-dice-d20"></i>
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

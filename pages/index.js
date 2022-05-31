import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()

import MainLayout from '../components/layouts/mainlayout'
import Header from '../components/header';
import Article from '../components/items/article';

import HorizonalAdsense from '../components/googleAdsense/HorizonalAdsense';

import styles from '../styles/Home.module.css';

import {chunkArray} from '../classes/chunkarray';


export async function getServerSideProps() {
  // Fetch data from external API
  let _url = serverRuntimeConfig.NEXT_PUBLIC_ApiDomain + "www/gethomedata/";
  const res = await fetch(_url)
  const data = await res.json()
 // console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}

//const Home: NextPage = () => {
function Home({ data }) {
  let responseJson = data.data;
  // console.log('slient side');
  // console.log(responseJson.latestArticles);
  // console.log('end client side');

  let articleData = chunkArray(responseJson.latestArticles,3);


  let datas = articleData.map((element,index)=>{
      if(element.length % 3 == 1) element = element.concat([1,2]);
      if(element.length % 3 == 2) element = element.concat([1]);
      return (
          <div className={styles.divLatestArticlesContentContainer} key={"divLatestArticlesContentContainer"+index}>
              {
                  element.map((elm,i)=>{
                      if( Number.isInteger(elm) ){
                        return <div key={"empty"+elm} className="emptyContainer" ></div>
                      }
                      else{
                        return (<Article  item={elm} key={"listiemsmall"+i} />)
                      }

                  })
              }
          </div>
          );
  });

  return (
    <MainLayout title="haha"
        head={<Header title="Aung Kyaw Nyunt" />}
    >
        {/* Start Banner */}
        <div className={styles.mainContainer}>
          <div className={styles.bannerContainer}>
            {/* Start Banner LEFT */}
            <div className={styles.bannerContainerLeft}>
              <div className={styles.bannerDivInfo}>
                <div className={styles.bannerRowLeft}>
                </div>
                <div className={styles.bannerRowRight}>
                  <div className={styles.banerGreeting}>
                    Hello!<br/>
                    I'm Aung Kyaw Nyunt (AKN).
                  </div>
                </div>
              </div>
              <div className={styles.bannerDivInfo}>
                <div className={styles.bannerRowLeft}>
                </div>
                <div className={styles.bannerRowRight}>
                  <div className={styles.banerPosition}>
                      Software Engineer, DevOps Engineer,<br/>
                      Cloud Solution Architect.<br/><br/>
                  </div>
                </div>
              </div>

              {/* Start Banner Address */}
              <div className={styles.bannerDivAddress}>
                <div className={styles.bannerRowIcon}>
                    <i  className="fas fa-mobile-alt" />
                </div>
                <div className={styles.banerAddressDetail}>
                +95 9763764572
                </div>
              </div>

              <div className={styles.bannerDivAddress}>
                <div className={styles.bannerRowIcon}>
                    <i  className="fas fa-mail-bulk" />
                </div>
                <div className={styles.banerAddressDetail}>
                akn.cloud86@gmail.com
                </div>
              </div>

              <div className={styles.bannerDivAddress}>
                <div className={styles.bannerRowIcon}>
                    <i  className="fas fa-map-marker-alt" />
                </div>
                <div className={styles.banerAddressDetail}>
                  No(26), Than Lan Street, Hlaing Township,Yangon City, Myanmar.
                </div>
              </div>

              <div className={styles.bannerDivAddress}>
                <div className={styles.bannerRowIcon}>
                    <i  className="fas fa-dice-d20" />
                </div>
                <div className={styles.banerAddressDetail}>
                  https://www.aungkyawnyunt.com<br/>
                </div>
              </div>
              {/* END Banner Address */}

              <div className={styles.bannerDivButtons}>
                <div className={styles.bannerRowLeft}>

                </div>
                <div className={styles.banerAddressDetail}>

                  <Link href="mailto:akn.cloud86@gmail.com">
                      <a className={styles.btnHireMe}>Contact Me</a>
                  </Link>
                </div>
              </div>


              <div className={styles.bannerDivAddress}>
                <div className={styles.bannerRowIcon}>

                </div>
                <div className={styles.banerAddressDetail}>
                <br/> My attitude is to deliver high quality work by honest for either small or huge.
                </div>
              </div>

            </div>

            {/* END Banner RIGHT */}
            <div className={styles.bannerContainerRight}>
              <img src="/media/akn.png" className={styles.imgAkn} height="100%"  alt="logo" />
            </div>
          </div>
        </div>
        {/* END Banner */}
        <div className="bodyAdvertisement">

        </div>
        {/* Start AboutMe */}
        <div className={styles.bannerAboutMeContainer}>
          <div className={styles.bannerAboutMeInnerContainer}>

            <div className={styles.AboutMeTitle}>
              About Me
            </div>
            <div className={styles.AboutMeDetail}>
            I am Software Engineer from Myanmar with over 10 years of intensive work experience in IT Fields. <br/>
             I have over 6 solid years of experience in Project Management and background as FullStack Engineer. 

I can deliver high quality work for either small nor huge.<br/><br/>
I would be glad to offer you my creative services for:<br/>
 ~ Backend Engineer (NodeJs, PHP, Python )<br/>
 ~ Frontend Engineer. ( ReactJs, NextJs )<br/>
 ~ Mobile Application Developer ( ReactNative)<br/>
 ~ Cloud Solution Architect ( AWS )
            </div>

            <div className={styles.AboutMeTitle}>
             My Mission Statement
            </div>
            <div className={styles.StatementDetail}>
              <ul className={styles.StatementUL}>
                <li>Provide Schedule and Delivery On Time.</li>
                <li>Provide Impact Analystic (To provide "Pros and Cons")</li>
                <li>Provide Option ( example: I will provide two examples and give you the suggestions as well as "Pros and Cons", so you will have the right choice.)</li>
                <li>Provide Documentation. ( PDF format from me or you provide me confluence or something ...)</li>
                <li>I would provide future support for free. (depend on projects)</li>
              </ul>
            </div>

          </div>
        </div>
        {/* END AboutMe */}

        {/* Start Latest Articles */}
        <div className={styles.divMainLatestArticles}>
          <div className={styles.divInnerLatestArticles}>
            <div className={styles.divTitleLatestArticles}>
              My Articles
            </div>
            {datas}
          </div>
        </div>
        {/* END Latest Articles */}
        <div className="bodyAdvertisement">

        </div>
        {/* Start Latest Articles */}
        <div className={styles.divMainLatestArticles}>
          <div className={styles.divInnerLatestArticles}>
            <div className={styles.divTitleLatestArticles}>

            </div>
          </div>
        </div>
        {/* END Latest Articles */}

    </MainLayout>
  )
}

export default Home

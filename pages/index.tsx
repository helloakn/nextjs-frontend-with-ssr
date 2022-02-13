import type { NextPage } from 'next'
import Link from 'next/link'

import MainLayout from '../components/layouts/mainlayout'
import Header from '../components/header';
import Article from '../components/items/article';

import styles from '../styles/Home.module.css';

import {chunkArray} from '../classes/chunkarray';

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/www/gethomedata/`)
  const data = await res.json()
  console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}

//const Home: NextPage = () => {
function Home({ data }) {
  let responseJson = data.data;
  console.log('slient side');
  console.log(responseJson.latestArticles);
  console.log('end client side');

  let articleData = chunkArray(responseJson.latestArticles,3);

        let datas = articleData.map((element,index)=>{
            return (
                <div className={styles.divLatestArticlesContentContainer} key={"divLatestArticlesContentContainer"+index}>
                    {
                        element.map((elm,i)=>{
                            return (<Article  item={elm} key={"listiemsmall"+i} />)
                        })
                    }
                </div>
                );
        });

  return (
    <MainLayout title="haha"
        head={<Header title="hello world" />}
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
                      Software Engineer, DevOps/DevSecOps Engineer,<br/>
                      Cloud Solution Architect as a freelancer.<br/><br/>
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
                aungkyawnyunt2004@gmail.com
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
                  <Link href="https://d2y7r2fmr1u4v.cloudfront.net/cv/akn.pdf" >
                      <a className={styles.btnDownloadCV}>Download CV</a>
                  </Link>
                  <Link href="mailto:aungkyawnyunt2004@gmail.com">
                      <a className={styles.btnHireMe}>Hire Me</a>
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

        {/* Start AboutMe */}
        <div className={styles.bannerAboutMeContainer}>
          <div className={styles.bannerAboutMeInnerContainer}>

            <div className={styles.AboutMeTitle}>
              About Me
            </div>
            <div className={styles.AboutMeDetail}>
              I'm a Software Engineer, DevOps Engineer, Cloud Solution Architect as a freelancer.<br/> 
              AWS Cloud Services and a background as above Project Management with over 5 years of intensive work experience in an Agile environment and worked the Senior  Engineer level with over 10 yers.<br/>
              Before my journey of freelance,<br/>
              I worked in Zote By Focus Innovation as Chief Technology Office position.
              In my free time, I write article for my www.aungkyawnyunt.com.
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
              Latest Article
            </div>
            {datas}
          </div>
        </div>
        {/* END Latest Articles */}

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

//import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'

import Gist from "react-gist";

import MainLayout from '../../../components/layouts/mainlayout'
import Header from '../../../components/header';
import NotFound from '../../../components/items/notfound';
import RelatedArticle from '../../../components/items/relatedArticle';
import styles from '../../../styles/ArticleDetail.module.css';

import HorizonalAdsense from '../../../components/googleAdsense/HorizonalAdsense';

import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()

const NEXT_PUBLIC_ImageDomain = publicRuntimeConfig.NEXT_PUBLIC_ImageDomain;
const NEXT_PUBLIC_AppDomain = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;

//import SquareAdsense from '../googleAdsense/SquareAdsense';
import SquareAdsense from '../../../components/googleAdsense/SquareAdsense';

export async function getServerSideProps(context) {
  // Fetch data from external API
  let _postId = context.params.postId;
  let _url = serverRuntimeConfig.NEXT_PUBLIC_ApiDomain+'www/getarticledetail/'+_postId;
  const res = await fetch(_url)
  const data = await res.json()
  //const data = jsonResult.data;
  //console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}

const ArticleDetailElements=(props)=>{
  let _element = props.element;
  let _key = props.keyid;
  /*
  _element.type => 
      1 for image, 
      2 for code, 
      3 for single code.
      4 for text, 
      5 for movie.
      
  */	
 //console.log('ArticleDetailElements');
 //console.log(_element);
// console.log(_key);
 function replaceHtml(_html){
  const _colorFunction = "#4a3c60";
  const _colorEqual = "#234fb9";
  
  
  let finalHtml = '';
  var lines = _html.split('\n');
  for(var i = 0;i < lines.length;i++){
    let tmpLine = lines[i];
    tmpLine = tmpLine.replaceAll('= ','<span style="color:'+_colorEqual+'">= </span>');
    tmpLine = tmpLine.replaceAll('(','<span style="color:'+_colorEqual+'">(</span>');
    tmpLine = tmpLine.replaceAll(')','<span style="color:'+_colorEqual+'">)</span>');
    tmpLine = tmpLine.replaceAll('{','<span style="color:'+_colorEqual+'">{</span>');
    tmpLine = tmpLine.replaceAll('}','<span style="color:'+_colorEqual+'">}</span>');
    tmpLine = tmpLine.replaceAll(';','<span style="color:'+_colorEqual+'">;</span>');
    tmpLine = tmpLine.replaceAll('=>','<span style="color:'+_colorEqual+'">=></span>');
    finalHtml += '<span style="color:'+_colorFunction+';">'+tmpLine+'</span>';
  }

  const tabRegex = /    /i;
  let tmpHtml = finalHtml.replace(tabRegex,"&nbsp;&nbsp;&nbsp;");
  const spaceRegex = / /i;
  tmpHtml = tmpHtml.replace(spaceRegex,"&nbsp;");
  
  return "<code>"+finalHtml+"</code>";
 }
  switch(_element.type){
      case '1': // image
          return (
              <div className="componentArticleDetail">
                  <div className="hCaption marginTop5px">{_element.title}</div>
                  <div className="marginBottom5px marginTop5px" >{_element.before_description}</div>
                  <img src={_element.value} alt={_element.title} width="95%" />
                  <div>{_element.after_description}</div>
              </div>
          );
      case '2': // gist code
          return (
              <div className="componentArticleDetail">
                <div className="hCaption marginTop5px">{_element.title}</div>
                <div className="marginBottom5px marginTop5px" >{_element.before_description}</div>
                <Gist id={_element.value} />
                <div>{_element.after_description}</div>
              </div>
              
          );
      case '3': // single code
              return (
                  <div className="componentArticleDetail">
                    <div className="hCaption marginTop5px">{_element.title}</div>
                    <div className="marginBottom5px marginTop5px" >{_element.before_description}</div>
                    <div className={styles.DivCode} dangerouslySetInnerHTML={{
                          __html: replaceHtml(_element.value)
                      }} >
                      </div>
                    <div>{_element.after_description}</div>
                  </div>

              );
      case '4': // text
          return (
              <div className="componentArticleDetail">
                <div className="hCaption marginTop5px">{_element.title}</div>
                <div className="marginBottom5px marginTop5px" >{_element.before_description}</div>
                <div dangerouslySetInnerHTML={{
                      __html: _element.value
                  }} >
                  </div>
                <div>{_element.after_description}</div>
              </div>
          );
      
      default :
          return <div>ok</div>
  }
  
}


// interface Idata {
//   data:Object;
  
// }

//const Article: NextPage = ({data}) => {
//function Article({ data }:Idata) {
  function Article({ data }) {
  const router = useRouter()
  const { postId } = router.query
  // console.log('data');
  // console.log(data.data);
  
  // console.log('data');
  let jsonResult = data;
  let article = jsonResult.data.article;
  let articleDetail = jsonResult.data.articleDetail;
  let latestArticles = jsonResult.data.latestArticles;
  //  console.log(articleDetail);
    if(jsonResult.code!=200){
      return (
        <MainLayout title="haha"
        head={
            <Header 
              title="Article Not Found"
              
            />
          }
        >
          <NotFound message="Article Not Found." />
        </MainLayout>
      )
    }
   let categories = article.categories.map((element,index)=>{
  //   console.log(NEXT_PUBLIC_AppDomain);
    return (index===0?
        <Link key={"abuttoncategory"+element.id} href={NEXT_PUBLIC_AppDomain+"category/"+element.name.toLowerCase()}>
          <a className="componentArticleAbutton"   >{element.name}</a>
        </Link>
        :
        <Link key={"abuttoncategory"+element.id} href={NEXT_PUBLIC_AppDomain+"category/"+element.name.toLowerCase()}>
         <a className="componentArticleAbutton marginLeft5px"  >{element.name}</a>
        </Link>
        );
    });

    let relatedArticles = latestArticles.map((element,index)=>{
      return (
            <RelatedArticle  item={element} key={"listiemsmall"+index} />
          );
  });

    let articleDetails = articleDetail.map((element,i)=>{
      // type => 1 for image, 2 for code, 3 for text, 4 for movie.	
      return (
      <ArticleDetailElements element={element} keyid={"articledetailelement"+i} key={"articledetailelement"+i} />
      );
    });

  return (
    <MainLayout title="haha"
        head={
        <Header 
          title={article.title}
          description={article.meta_tag||article.intro}
          image={NEXT_PUBLIC_ImageDomain+article.image}
          url={NEXT_PUBLIC_AppDomain+"article/"+postId}
        />
      }
    >
    {/* Start Header */}
    <div className={styles.ArticleDetailHeader}>
      <div className={styles.ArticleDetailHeaderInner}>
        <div className={styles.ArticleDetailHeaderInnerLeft}>
          <img src={NEXT_PUBLIC_ImageDomain+article.image} alt={article.title} className={styles.ArticleDetailImage} />
        </div>

        <div className={styles.ArticleDetailHeaderInnerRight}>
          <div className={styles.ArticleDetailHeaderInnerRightTitle}>
            <h1 className="PageTitle" alt={article.title} > {article.title}</h1>
          </div>
          <div className={styles.ArticleDetailHeaderInnerRightCategory}>
            {categories}
          </div>
          <div className={styles.ArticleDetailHeaderInnerRightAuthor}>
            <div className={styles.ArticleDetailHeaderInnerRightAuthorImage}>
              <img src="https://d2y7r2fmr1u4v.cloudfront.net/author/person.png" alt="Aung Kyaw Nyunt" className={styles.AuthorImage} />
            </div>
            <div className={styles.ArticleDetailHeaderInnerRightAuthorDetail}>
              <label>Author : Aung Kyaw Nyunt</label>
              <label>Created At : {article.created_at}</label>
            </div>
          </div>
        </div>

      </div>
    </div>
    {/* End Header */}
    <div className="bodyAdvertisement">
    
                    </div>
    {/* Start Body */}
    <div className={styles.ArticleDetailBody}>
      <div className={styles.ArticleDetailBodyInner}>
        <div className={styles.ArticleDetailBodyInnerLeft}>

          <div className={styles.ArticleIntro}
          dangerouslySetInnerHTML={{
            __html: article.intro
          }}
          >
            
          </div> 
          <div className={styles.ArticleDescription}
          dangerouslySetInnerHTML={{
            __html: article.description
          }}>
            
          </div> 
          
          <div className={styles.ArticleDetailContent}>
            {articleDetails}
          </div> 
        </div>  

        <div className={styles.ArticleDetailBodyInnerRight}>
        <iframe 
            src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amazondevices&banner=0058897P3X0G4JA14R82&f=ifr&linkID=e6d5033b5a007baf89a7e2158a6e58ac&t=wwwaungkyawny-20&tracking_id=wwwaungkyawny-20" 
            width="300" height="250" 
            scrolling="no" 
            border="0" 
            marginWidth="0" 
            style={{border:"none",marginTop:15}} frameBorder="0"></iframe>
          <h3 className={styles.hCaption}>Here is you may also like.</h3>
          
          {relatedArticles}
          <iframe 
            src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=a90725f312d07c8946205f9a77b22fe2&t=wwwaungkyawny-20&tracking_id=wwwaungkyawny-20" 
            width="300" height="250" 
            scrolling="no" 
            border="0"
            marginWidth="0" style={{border:"none"}} frameBorder="0">

          </iframe>
          
        </div>
      </div>
    </div>
    {/* End Body */}
    
    </MainLayout>
  )
}

export default Article

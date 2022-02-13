import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import Gist from "react-gist";

import MainLayout from '../../../components/layouts/mainlayout'
import Header from '../../../components/header';
import RelatedArticle from '../../../components/items/relatedArticle';
import styles from '../../../styles/ArticleDetail.module.css';

const NEXT_PUBLIC_ImageDomain = process.env.NEXT_PUBLIC_ImageDomain;
const NEXT_PUBLIC_AppDomain = process.env.NEXT_PUBLIC_AppDomain;
export async function getServerSideProps(context) {
  // Fetch data from external API
  let _postId = context.params.postId;
  let _url = 'http://localhost:8000/www/getarticledetail/'+_postId;
  const res = await fetch(_url)
  const jsonResult = await res.json()
  const data = jsonResult.data;
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
  switch(_element.type){
      case '1': // image
          return (
              <div>
                  <h1 className="hCaption">{_element.title}</h1>
                  <img src={_element.description} alt="article Detail" />
              </div>
          );
      case '2': // gist code
          return (
              <div>
                  <h3 className={styles.hCaption}>{_element.title}</h3>
                  <Gist id={_element.description} />
              </div>
              
          );
      case '3': // single code
              return (
                  <div className={styles.DivCodeContainer}>
                      <h3 className={styles.hCaption}>{_element.title}</h3>
                      <div className={styles.DivCode} dangerouslySetInnerHTML={{
                          __html: _element.description
                      }} >
                      </div>
                  </div>
              );
      case '4': // text
          return (
              <div>
                  <h3 className={styles.hCaption}>{_element.title}</h3>
                  <div dangerouslySetInnerHTML={{
                      __html: _element.description
                  }} >
                  </div>
              </div>
          );
      
      default :
          return <div>ok</div>
  }
  
}

const Article: NextPage = (jsonResult) => {
  const router = useRouter()
  const { postId } = router.query
  // console.log('jsonResult');
  // console.log(jsonResult.data);
  // console.log('jsonResult');
   let article = jsonResult.data.article;
   let articleDetail = jsonResult.data.articleDetail;
   let latestArticles = jsonResult.data.latestArticles;
  //  console.log(articleDetail);

   let categories = article.categories.map((element,index)=>{
     console.log(NEXT_PUBLIC_AppDomain);
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
        head={<Header title={article.title} />}
    >
    {/* Start Header */}
    <div className={styles.ArticleDetailHeader}>
      <div className={styles.ArticleDetailHeaderInner}>
        <div className={styles.ArticleDetailHeaderInnerLeft}>
          <img src={NEXT_PUBLIC_ImageDomain+article.image} className={styles.ArticleDetailImage} />
        </div>

        <div className={styles.ArticleDetailHeaderInnerRight}>
          <div className={styles.ArticleDetailHeaderInnerRightTitle}>
            {article.title}
          </div>
          <div className={styles.ArticleDetailHeaderInnerRightCategory}>
            {categories}
          </div>
          <div className={styles.ArticleDetailHeaderInnerRightAuthor}>
            <div className={styles.ArticleDetailHeaderInnerRightAuthorImage}>
              <img src="https://d2y7r2fmr1u4v.cloudfront.net/author/person.png" alt="aa" className={styles.AuthorImage} />
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
        <h3 className={styles.hCaption}>Here is you may also like.</h3>
          {relatedArticles}
        </div>
      </div>
    </div>
    {/* End Body */}
    
    </MainLayout>
  )
}

export default Article

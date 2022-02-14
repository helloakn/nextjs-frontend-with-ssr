import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import Gist from "react-gist";

import MainLayout from '../../../components/layouts/mainlayout'
import Header from '../../../components/header';
import NotFound from '../../../components/items/notfound';
import Article from '../../../components/items/article';
import styles from '../../../styles/CategoryArticle.module.css';

const NEXT_PUBLIC_ImageDomain = process.env.NEXT_PUBLIC_ImageDomain;
const NEXT_PUBLIC_AppDomain = process.env.NEXT_PUBLIC_AppDomain;
const NEXT_PUBLIC_ApiDomain = process.env.NEXT_PUBLIC_ApiDomain;

export async function getServerSideProps(context) {
  // Fetch data from external API
  let _categoryId = context.params.categoryId;
  let _url = NEXT_PUBLIC_ApiDomain+'www/getcategorydetail/'+_categoryId;
  const res = await fetch(_url)
  const jsonResult = await res.json()
  const data = jsonResult.data;
  //console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}

const Category: NextPage = (jsonResult) => {
  const router = useRouter()
  const { categoryId } = router.query
  // console.log('jsonResult');
  // console.log(jsonResult.data);
  // console.log('jsonResult');

  if(jsonResult.code!=200){
    return (
      <MainLayout title="haha"
      head={
          <Header 
            title="Article Not Found"
            
          />
        }
      >
        <NotFound message="Category Not Found" />
      </MainLayout>
    )
  }

  let categoryDetail = jsonResult.data.categoryDetail;
  let articles = jsonResult.data.articles;
  //  console.log(articleDetail);


  let articlesData = articles.map((element,index)=>{
      return (
            <Article css="marginTop20px" item={element} key={"listiemsmall"+index} />
          );
  });


  return (
    <MainLayout title="haha"
        head={
        <Header 
          title={categoryDetail.name+" Tutorial"}
          description={categoryDetail.description}
          image={NEXT_PUBLIC_ImageDomain+categoryDetail.image}
          url={NEXT_PUBLIC_AppDomain+"category/"+categoryId}
        />
      }
    >
    {/* Start Header */}
    <div className={styles.CategoryDetailHeader}>
      <div className={styles.CategoryeDetailHeaderInner}>
        <div className={styles.CategoryTitle}>{categoryDetail.name} Tutorials</div>
        <div className={styles.CategoryDescription}>{categoryDetail.description} Tutorials</div>
      </div>
    </div>
    {/* End Header */}

    {/* Start Body */}
    <div className={styles.CategoryBody}>
      <div className={styles.CategoryBodyInner}>
      {articlesData}
      </div>
    </div>
    {/* End Body */}
    
    </MainLayout>
  )
}

export default Category

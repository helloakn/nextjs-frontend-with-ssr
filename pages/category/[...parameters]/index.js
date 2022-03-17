//import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()
import Gist from "react-gist";

import MainLayout from '../../../components/layouts/mainlayout'
import Header from '../../../components/header';
import NotFound from '../../../components/items/notfound';
import Article from '../../../components/items/article';
import styles from '../../../styles/CategoryArticle.module.css';

import Pagination from '../../../components/pagination';

const NEXT_PUBLIC_ImageDomain = publicRuntimeConfig.NEXT_PUBLIC_ImageDomain;
const NEXT_PUBLIC_AppDomain = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;

export async function getServerSideProps(context) {
  // Fetch data from external API
  let _parameters = context.params.parameters;
  //  console.log('context.params');
  //  console.log(_parameters.length);
  //  console.log('context.params');
  let _categoryId = _parameters[0];
  let _pageAt = _parameters.length>1?_parameters[1]:1;
  _pageAt = !isNaN(_pageAt)?_pageAt:1;
  let _url = serverRuntimeConfig.NEXT_PUBLIC_ApiDomain+'www/getcategorydetail/'+_categoryId+'?page_at='+_pageAt;
  console.log(_url);
  const res = await fetch(_url)
  const data = await res.json()
  //const outPout = jsonResult;
  //console.log(data)
  // Pass data to the page via props
  // console.log('data');
  // console.log(data);
  // console.log('data');
  return { props: { data } }
}

//const Category: NextPage = (output) => {
function Category({data}){
  const router = useRouter()
  const { parameters } = router.query
  let _parameters = parameters;
  let _categoryId = _parameters[0];
  let _pageAt = _parameters.length>1?_parameters[1]:1;
  _pageAt = !isNaN(_pageAt)?_pageAt:1;

  console.log('router');
  console.log(_categoryId);
  console.log('end route');
  let jsonResult = data;
  // console.log('code');
  // console.log(jsonResult.code);
  // console.log('code');
  if(jsonResult.code!==200){
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
  let paginate = jsonResult.paginate;


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
          url={NEXT_PUBLIC_AppDomain+"category/"+_categoryId+"/"+_pageAt}
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
    <div className="bodyAdvertisement">
                    
                    </div>
    {/* Start Body */}
    <div className={styles.CategoryBody}>
      <div className={styles.CategoryBodyInner}>
      {articlesData}
      </div>
      
    </div>
    
    <div className={styles.CategoryPaginationContainer}>
        <Pagination paginate={paginate} styles={styles} root={"/category/"+_categoryId} page_at={_pageAt} />
    </div>
    {/* End Body */}
    
    </MainLayout>
  )
}

export default Category

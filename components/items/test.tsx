import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()

//import { DefaultColor,IMAGE_Domain,APP_DOMAIN } from "../config";
let DefaultColor = "#788EBA";
let IMAGE_Domain = publicRuntimeConfig.NEXT_PUBLIC_ImageDomain;
let APP_DOMAIN = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;

export default function RelatedArticle({...props }) {
    // let item = {
    //     id:"1",
    //     title:"this is title",
    //     image:"media/m1.png",
    //     link:"http://www.google.com",
    //     intro:"this is intro<br/>akn",
    //     created_at:"this is created at",
    //     categories:[]
    // }
    let item = props.item;
    let categories = item.categories.map((element:any,index:number)=>{
        return (index===0?
            <Link key={"abuttoncategory"+element.id} href={APP_DOMAIN+"category/"+element.name.toLowerCase()}>
            <a className="componentArticleAbutton" alt={element.name}  >{element.name}</a>
            </Link>
            :
            <Link key={"abuttoncategory"+element.id} href={APP_DOMAIN+"category/"+element.name.toLowerCase()}>
            <a className="componentArticleAbutton marginLeft5px"  >{element.name}</a>
            </Link>
            );
      });
    return (
        <div className="componentRelatedArticleContainer marginTop10px marginBottom10px">
            <div className="componentArticleImageContainer">
            <img alt={item.title} src={IMAGE_Domain+item.image} width="100%"/>
            </div>
            <div className="componentArticleBodyContainer">
                <div className="componentArticleBodyContainerInner">
                    <div className="componentArticleHeadContainer"> 
                    {categories}
                    </div>
                    <div className="componentArticleTitleContainer">
                        <Link href={APP_DOMAIN+"article/"+item.link}>
                            <a className="componentArticleTitleCaption">
                            {item.title.length>45?item.title.substring(0,45)+" ...":item.title}
                            </a>
                        </Link>
                    </div>
                    <div className="componentArticleContentContainer">
                        <div className="componentArticleParagraph"
                        dangerouslySetInnerHTML={{
                            __html: item.intro.substring(0,150) + " ..."
                        }}
                        >
                        </div>
                    </div>
                    <div className="componentArticleFooterContainer"> 
                        <label className="componentArticleReleaseDate">{item.created_at}</label>   
                        <Link href={APP_DOMAIN+"article/"+item.link}>
                            <a className="componentArticleAbutton">
                                Read  &nbsp;<i  color="#ffffff" className={" fas fa-chevron-circle-right"} />
                            </a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

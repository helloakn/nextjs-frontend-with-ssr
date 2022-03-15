import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()

//import { DefaultColor,IMAGE_Domain,APP_DOMAIN } from "../config";
let DefaultColor = "#788EBA";
let IMAGE_Domain = publicRuntimeConfig.NEXT_PUBLIC_ImageDomain;
let APP_DOMAIN = publicRuntimeConfig.NEXT_PUBLIC_AppDomain;

import styles from "../../styles/componentArticle.module.css";

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
            <a className="componentArticleAbutton"   >{element.name}</a>
            </Link>
            :
            <Link key={"abuttoncategory"+element.id} href={APP_DOMAIN+"category/"+element.name.toLowerCase()}>
            <a className="componentArticleAbutton marginLeft5px"  >{element.name}</a>
            </Link>
            );
      });
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <img alt={item.title} src={IMAGE_Domain+item.image} width="100%"/>
            </div>
            
            <div className={styles.body}>
                <div className={styles.categoryContainer}>
                    {categories}
                </div>
                <div className={styles.titleContainer}>
                        <Link href={APP_DOMAIN+"article/"+item.link}>
                            <a className="componentArticleTitleCaption">
                            {item.title}
                            </a>
                        </Link>
                </div>
                <div className={styles.footerContainer}> 
                        <label className="componentArticleReleaseDate">{item.created_at}</label>   
                        <Link href={APP_DOMAIN+"article/"+item.link}>
                            <a className="componentArticleAbutton">
                                Read  &nbsp;<i  color="#ffffff" className={" fas fa-chevron-circle-right"} />
                            </a>
                        </Link>
                        
                    </div>
            </div>
        </div>
    )
}

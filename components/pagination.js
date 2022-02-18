export default function Pagination({...props }) {
    let paginate = props.paginate;
    let styles = props.styles;
    let _root = props.root;
    let _pageAt = props._pageAt;

    let tmpHtml = "";
    let pageActive;
    
    let beforepages = paginate.total_page - 1;
    
    let afterpages = paginate.total_page + 1;


    let i = 0;
    if(paginate.total_page>1){
        
        tmpHtml += `<a class="page-link `+(i < paginate.page_at ? i : "") +`" onclick ="${paginate.total_page - 1}" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                    </a>`;
    }

    tmpHtml  = "";
    
    for (let pageLength = beforepages; pageLength <= afterpages; pageLength++) {
        if(paginate.page_at == pageLength){
            pageActive = "aActive";
        }
        else{
            pageActive = "";
        }
        tmpHtml += `<a class="page-link `+pageActive+`" href="#" tag="`+pageLength+`">`+pageLength+`</a>`;
    }
        tmpHtml = "";
    let currentPage = paginate.page_at;
    let startPage = 1;
    if(paginate.total_page<5){
        startPage = 1;
    }
    else{
        if(currentPage>2){
            if(paginate.total_page-currentPage<2 && paginate.total_page>5){
                startPage = (paginate.total_page-4);
            }
            else{
                startPage = currentPage-2;
            }
            
        }
    }
    
    for(let i = startPage; i<startPage+5; i++ ){
        if(i<=paginate.total_page){
        tmpHtml += `<a class="page-link `+(paginate.page_at==i?"aActive":"")+`" tag="`+i+`" href="${_root+"/"+i}" >`+i+`</a>`;
        }
    }

    let tmpFirstHtml = "";
    if(parseInt(paginate.page_at)>1){
    tmpFirstHtml = `<a class="page-link " tag="1" href="${_root}/1" >First</a>`;
    }

    let tmpLastHtml = "";
    if(paginate.total_page!=paginate.page_at){
    tmpLastHtml = `<a class="page-link " tag="`+paginate.total_page+`" href="${_root+"/"+paginate.total_page}" >Last </a>`;
    }
    

    tmpHtml = tmpFirstHtml + tmpHtml + tmpLastHtml;
    
    return(
        <>
            <div 
            className={styles.InnerPagination}
            dangerouslySetInnerHTML={{
                __html: `
                ${tmpHtml}
            `,
            }}>
            </div>
        </>
    );
    
}
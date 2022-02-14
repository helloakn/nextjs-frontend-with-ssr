import MainLayout from '../components/layouts/mainlayout'
import Header from '../components/header';
import NotFound from '../components/items/notfound';

export default function Custom500() {
    return(
        <MainLayout title="haha"
            head={
                <Header 
                title="Article Not Found"
                
                />
            }
        >
          <NotFound message="There is something went wrong. <br/> Please Try Again!" />
        </MainLayout>
    );
}
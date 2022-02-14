import MainLayout from '../components/layouts/mainlayout'
import Header from '../components/header';
import NotFound from '../components/items/notfound';

export default function Custom404() {
    return(
        <MainLayout title="haha"
            head={
                <Header 
                title="Article Not Found"
                
                />
            }
        >
          <NotFound message="Page Not Found." />
        </MainLayout>
    );
}
import { IntroPage } from '../../components/IntroPage';
import { CategoriesShowCase } from '../../components/CategoriesShowCase';
import { Footer } from '../../components/Footer';

export function CategoriesPage() {

    return (
        <>
            <IntroPage />
            <div id="Loja">
                <CategoriesShowCase />
            </div>
            <Footer />
        </>
    );

}
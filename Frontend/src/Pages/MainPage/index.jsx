import { IntroPage } from '../../components/IntroPage';
import { CarouselShowcase } from '../../components/CarouselShowcase';
import { ProductsMainShowCase } from '../../components/ProductsMainShowCase';
import { HistorySection } from '../../components/HistorySection';
import { ProjectsSection } from '../../components/ProjectsSection';
import { Footer } from '../../components/Footer';

export function MainPage() {

    return (
        <>
            <div>
                <IntroPage />
                <div id="Carrossel">
                    <CarouselShowcase />
                </div>
                <div id="Destaques">
                    <ProductsMainShowCase />
                </div>
                
                <div id="História">
                    <HistorySection />
                </div>
                <div id="Projetos">
                    <ProjectsSection />
                </div>
                <div id="Contato">
                    <Footer />
                </div>
            </div>
        </>
    );
}
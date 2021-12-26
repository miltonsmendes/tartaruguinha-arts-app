import Img from '../../assets/theo-history-image.png';
import './styles.scss';

export function HistorySection() {

    return (
        <div className="container-history-section">

            
            <div className="card-img-historia">
                 <img src={Img} alt="imagem historia" />
            </div>


            <div className="card-text">
                <h3 className="card-titulo-historia">HISTÓRIA</h3>
                <p className="card-texto-historia">
                    A Tartaruguinha Art’s nasceu de forma espontânea, através de um projeto de estudo e cuidado envolvendo tartarugas marinhas. O projeto era coordenado por uma amiga próxima do nosso fundador Théo Costa e estava precisando de patrocínio. Com o intuito de ajudar o projeto, surgiu a ideia de fazer estampa para canecas, e com a ajuda de um amigo publicitário as estampas foram criadas. A empresa nem existia ainda, mas foram vendidas algumas canecas e posteriormente algumas máscaras, tudo em prol do projeto.
                    <br /> <br />
                    Por que o nome Tartaruguinha?<br />
                    Devem pensar que é por causa do projeto, mas não é. O nome Tartaruguinha Art’s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha não tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art’s!
                </p>
            </div>
        </div>
    );

}
import Img from '../../assets/projects-image.png';
import './styles.scss';

export function ProjectsSection(props) {
    // const [openModal, setOpenModal ] = useState(false)

    return (
        <div className="container-projects-section">

            <div className="card-text">
                <div>
                    <h3 className="card-title-history one">PROJETOS</h3>
                </div>
                <div className="card-responsivo">
                    <p className="card-texto-historia">
                        Por que o nome Tartaruguinha?
                        Devem pensar que é por causa do projeto, mas não é. O nome Tartaruguinha Art’s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha não tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art’s!
                    </p>
                </div>
            </div>
            <div className="card-img-projects">
                <img src={Img} alt="imagem historia" />
            </div>
            {/* {openModal && <Modal fechar={() => setOpenModal(false)}/>} */}
        </div>
    );
}
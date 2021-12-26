import {useState, useEffect} from 'react';

import {Button} from '../Button';
import apiStore from '../../services/api';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

export function CarouselShowcase() {

    const [data, setData] = useState([]);

    useEffect(() => {
        apiStore.get('/produtos')
            .then(response => setData(response.data.data))

    }, []);

    const featureProductsList = data;
   
    return (
        <div className="container-carousel-showcase">

            <div className="carousel-title">PRODUTOS EM DESTAQUE</div>

            <Carousel variant="dark">
                {
                    featureProductsList.map(product => {
                        if (product.featured === 1) {
                            return (
                                <Carousel.Item interval={99000} className="container-images" key={product.id}>
                                    <img
                                        className="d-block w-20 mx-auto"
                                        src={product.image}
                                        alt={`Produto ${product.name}`}
                                    />
                                    <div className="prize-tag-carousel"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                    <Carousel.Caption className="row">
                                        <div className="product-title-carousel">{product.name}</div>
                                    </Carousel.Caption>

                                </Carousel.Item>
                            )
                        }
                    })
                }
            </Carousel>

            <div><Button text="OUTROS PRODUTOS" link="/categorias"/></div>

        </div>
    );
}
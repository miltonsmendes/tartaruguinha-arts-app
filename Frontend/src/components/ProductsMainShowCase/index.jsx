import { useState, useEffect } from 'react';

import {Button} from '../Button';

import apiStore from '../../services/api';

import './styles.scss';


export function ProductsMainShowCase() {

    const [data, setData] = useState([]);
 
    useEffect(() => {
        apiStore.get(`/produtos`)
            .then(response => setData(response.data.data))
    }, []);

    const productsList = data;

    return (
        <div className="container-main-products-showcase">

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">PRODUTOS EM DESTAQUE</div>
                </div>

                <div className="products-row">
                    {
                        productsList.map(product => {
                            if (product.featured === 1) {
                                return (
                                    <div className="product-card" key={product.id_product}>
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div><Button text="OUTROS PRODUTOS" link="/categorias"/></div>
        </div>
    );
}
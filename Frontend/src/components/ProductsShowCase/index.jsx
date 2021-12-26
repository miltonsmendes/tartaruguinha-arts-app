import { useState, useEffect } from 'react';

import { useCategoryPage } from '../../hooks/useCategoryPage';
import { useSelectProduct } from '../../hooks/useSelectProduct';
import { Button } from '../Button';

import apiStore from '../../services/api';

import './styles.scss';


export function ProductsShowCase() {

    const {handleSelectProduct} = useSelectProduct();

    const [data, setData] = useState([]);
    const [productsTitle, setProductsTitle] = useState("");

    const { pageValue, selectPage } = useCategoryPage();


    useEffect(() => {
        apiStore.get(`/categorias/${pageValue}`)
            .then(response => setData(response.data.data))

        switch (pageValue) {
            case 2:
                setProductsTitle("Almofadas")
                break;
            case 3:
                setProductsTitle("Almofadas de Pescoço")
                break;
            case 4:
                setProductsTitle("Máscaras")
                break;
            default:
                setProductsTitle("Canecas")
        }
    }, []);

    const productsList = data;
    console.log(productsList)

    return (
        <div className="container-products-showcase">

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">{productsTitle}</div>
                </div>

                <div className="products-row">
                    {
                        productsList.map(product => {
                            if (product.id_category === pageValue) {
                                return (
                                    <div className="product-card" key={product.id_product}>
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                        <div onClick={() => handleSelectProduct(product.id_product.id_product)}><Button text="COMPRAR" link="/comprar" /></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>
    );
}
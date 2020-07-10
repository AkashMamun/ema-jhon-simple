import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faShoppingCart, faBorderNone} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small> Only {stock} left in stock- order soon</small></p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product) }>
                    <FontAwesomeIcon icon={faShoppingCart} />Add To cart</button>
            </div>
        </div>
    );
};

export default Product;



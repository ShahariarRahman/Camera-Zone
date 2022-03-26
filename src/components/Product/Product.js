import React from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';

const Product = ({ product, getCart }) => {
    const { name, price, image } = product;
    return (
        <div className='camera-card'>
            <div className='camera-image'>
                <img src={image} alt="" />
                <h4 className='camera-model'>{name}</h4>
                <h4 className='camera-price'>Price: ${price}</h4>
            </div>
            <button onClick={() => getCart(product)} className='add-cart-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button >
        </div >
    );
};

export default Product;
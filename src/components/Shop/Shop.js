import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ products, getCart, cart, removeCartList }) => {
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product} getCart={getCart}></Product>)
                }
            </div>
            <Cart cart={cart} removeCartList={removeCartList}></Cart>
        </div>
    );
};

export default Shop;
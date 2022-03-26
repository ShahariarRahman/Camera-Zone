import React, { useState } from 'react';
import getRandomCartItem from '../../utilities/getRandomCart';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Cart.css';
const Cart = ({ cart, removeCartList }) => {

    const [randomCartItem, setRandomCartItem] = useState('Please Choose Some Cameras to the Cart');
    const showRandomCart = () => {
        if (cart.length !== 0) {
            const randomCart = getRandomCartItem(cart);
            if ((randomCartItem !== randomCart) || (cart.length === 1)) {
                setRandomCartItem(randomCart);
            }
            else {
                return showRandomCart();
            }
        }
    };

    return (
        <div className='cart-container'>
            <div className='cart-items'>
                <h2 className='selection-area'>Selected Cameras</h2>
                <p className='selection-massage'>{randomCartItem}</p>
                {
                    cart.map((selectedItem, index) => <SelectedItem
                        key={index}
                        selectedItem={selectedItem}
                    ></SelectedItem>)
                }
                <div className='choose-item-btn'>
                    <button onClick={showRandomCart}><h4>Choose One For Me</h4></button><br /><br />
                    <button onClick={removeCartList}><h4>Choose Again</h4></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
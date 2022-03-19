import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'
const Product = ({ product, setCartCount }) => {
    const { addCart, removeCart } = setCartCount;
    return (
        <div className='col-md-4 g-3' data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="card p-2 border h-100" >
                <img className='w-50 m-auto' src={product.image} alt="" />
                <h2>{product.title.slice(0, 10)}</h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success' onClick={addCart}>Cart</button>
                    <button className='btn btn-danger' onClick={removeCart}>Delete</button>
                    <ReactModal product={product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default Product;
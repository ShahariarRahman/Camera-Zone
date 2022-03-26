import React from 'react';
import './Header.css';
const Header = ({ totalCart }) => {
    return (
        <div className='header'>
            <h1 className='title'>Camera Zone</h1>
            <h2 >You have Added <span className='selected-items'>{totalCart}</span> Cameras</h2>
        </div>
    );
};

export default Header;
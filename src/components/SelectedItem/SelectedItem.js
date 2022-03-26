import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedItem.css';

const SelectedItem = ({ selectedItem }) => {
    return (
        <div className='selected-items-container'>
            <div>
                <img className='selected-images' src={selectedItem.image} alt="" />
            </div>
            <h3>
                {selectedItem.name}
            </h3>
            <button >
                <FontAwesomeIcon icon={faTrash} className='selected-trash'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SelectedItem;
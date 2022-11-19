import React from 'react';
import { useContext } from 'react';
import {TiShoppingCart} from 'react-icons/ti';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const {totalUnidades} = useContext(CartContext);

    return (
        <div>
            <TiShoppingCart  size={60} color='black' />
            <span className='spanCarrito'>{totalUnidades() !== 0 && totalUnidades()}</span>
        </div>
    );
};

export default CartWidget;
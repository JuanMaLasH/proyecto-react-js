import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div className='card item'>
            <img src={product.foto} alt={product.nombre} className='card-img-top fotoTienda' />
            <div className='card-body'>
            <h2 className='card-title'>{product.nombre}</h2>
            <h3 className='card-text descuento'>{product.descuento}% OFF EFECTIVO</h3>
            <h3 className='card-text precioLista'>Precio de lista: ${product.precio}</h3>
            <h3 className='card-text'>Precio con descuento: ${product.precio - (product.precio * product.descuento/100)}</h3>
            <h3 className='card-text verDetalle'><Link to={`/detail/${product.id}`}>Ver Detalle</Link></h3>
            </div>
            </div>
    );
};

export default Item;
import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div className='card item'>
            <img src={producto.foto} alt={producto.nombre} className='card-img-top fotoTienda' />
            <div className='card-body'>
                <h2 className='card-title'>{producto.nombre}</h2>
                <h3 className='card-text precioLista'>Precio de lista: ${producto.precio}</h3>
                <h3 className='card-text descuento'>{producto.descuento}% OFF CONTADO</h3>
                <h3  className='card-text'>Precio con descuento: ${producto.precio - (producto.precio * producto.descuento/100)}</h3>
                <h3  className='card-text verDetalle'><Link to={`/detail/${producto.id}`}>Ver Detalle</Link></h3>
            </div>
        </div>
    );
};

export default Item;
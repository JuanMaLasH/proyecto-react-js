import React, {useState, useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Contador from './Contador';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

  const [show, setShow] = useState(true);

  const {addToCart, cantidadDeProducto} = useContext(CartContext);

  const onAdd = (qty) => {
    setShow(false);
    addToCart(item, qty);
  };

  const cantidad = cantidadDeProducto(item.id);

  return (
    <div className='container detail text-center p-2'>
        <img src={item.foto} alt={item.nombre} className='fotoDetail'/>
        <div className='container contenedorDetalle'>
            <h2 className='p-2'>{item.nombre}</h2>
            <h3><strong>Características generales</strong></h3>
            <h4>{item.caracteristicas}</h4>
            <h4 className='precioLista p-2'>Precio de lista: ${item.precio}</h4>
            <h4 className='descuento p-2'>{item.descuento}% OFF CONTADO</h4>
            <h4 className='p-2'>Precio contado: ${item.precio - (item.precio * item.descuento/100)}</h4>
            {show ? (
                    <Contador stock={item.stock} onAdd={onAdd} initial={cantidad}/>
                ) : (
                    <Link to="/cart"><button className='btn btn-dark'>Ir al carrito</button></Link>
                )}
        </div>
    </div>
  );
};

export default ItemDetail;
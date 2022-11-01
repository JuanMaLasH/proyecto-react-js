import React from 'react';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => console.log (qty);

  return (
    <div className='container detail text-center'>
        <img src={item.foto} alt={item.nombre} className='fotoDetail'/>
        <div className='container contenedorDetalle'>
            <h2>{item.nombre}</h2>
            <h3 className='descuento'>{item.descuento}% OFF EFECTIVO</h3>
            <h3 className='precioLista'>Precio de lista: ${item.precio}</h3>
            <h3>Precio con descuento: ${item.precio - (item.precio * item.descuento/100)}</h3>
            <Contador stock={item.stock} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail;
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {

  const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext);

  if(cart.length === 0) 
  return (
   <h2 className='text-center p-5'>
     Aún no hay productos en el carrito, agrégelos desde nuestro <Link to="/">Home</Link> 
   </h2>
   );

  return (
      <div className='container contenedorCart'>
          {cart.map((prod) => (
              <div key={prod.id} className='text-center p-3'>
                  <img src={prod.foto} alt={prod.nombre} width="250px" className='fotoProductoCarrito'/>
                      <h2>{prod.nombre}</h2>
                      <h3 className='precioLista'>Precio de lista: ${prod.precio}</h3>
                      <h3>Precio contado: ${prod.precio - (prod.precio * prod.descuento/100)}</h3>
                      <h3>Cantidad: {prod.cantidad}</h3>
                      <button onClick={() => deleteOne(prod.id)} className='botonEliminar'> 🗑️
                      </button>
              </div>
          ))}
          <div className='text-center p-3'>
          <h3 className='precioLista'>Total: ${totalPrecio()}</h3>
          <h3>Total contado: ${(totalPrecio()*90)/100}</h3>
          <button onClick={deleteAll} className='btn btn-dark'>Vaciar carrito</button>
          <Link to='/checkout'><button className='btn btn-dark'>Continuar con la compra</button></Link>
          </div>
      </div>
  );
};

export default Cart; 
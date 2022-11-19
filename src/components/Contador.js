import { useState } from 'react';

const Contador = ({ stock, onAdd, initial=1 }) => {

    const [cantidad, setCantidad] = useState (initial);

    const sumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1);
        }
    };

    const agregar = () => {
        onAdd(cantidad);
    };

    return (
        <div className='container counter text-center p-1'>
            <div className='cantidadSumarRestar'>
            <button onClick={restar}>-</button>
            <p>
                {cantidad}
            </p>
            <button disabled={cantidad === stock} onClick={sumar}>+</button>
            </div>
            <button className="add btn btn-dark" onClick={agregar}>Agregar al carrito</button>
        </div>
    );
};

export default Contador;
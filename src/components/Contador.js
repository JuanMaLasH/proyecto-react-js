import { useState } from 'react';

const Contador = ({ stock, onAdd }) => {

    const [count, setCount] = useState (1);

    const sumar = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount (count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    const agregar = () => onAdd(count);

    return (
        <div className='counter'>
            <button onClick={restar}>-</button>
            <p className='text-center'>
                {count}
            </p>
            <button disabled={count === stock} onClick={sumar}>+</button>
            <button onClick={reset}>Volver a 0</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    );
};

export default Contador;
import React, {useState} from 'react';
import {CartContext} from '../context/CartContext';
import {db} from '../services/firebaseConfig';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {useContext} from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [emailPorConfirmar, setEmailPorConfirmar] = useState('');
   
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();
        const objOrden = {
            buyer: {
                name,
                lastName,
                telefono,
                direccion,
                email,
                emailPorConfirmar,
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
    };

    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, objOrden)
    .then((res) => {
        setOrderId(res.id);
        deleteAll();
    })
    .catch((error) => {
        console.log('Hubo un error', error);
    });
};

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleDireccion = (e) => setDireccion(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleEmailPorConfirmar = (e) => setEmailPorConfirmar(e.target.value);
    
    if (orderId) {
        return (
            <div className='container text-center p-5'>
            <h2>Gracias por tu compra {name}! Su orden de compra es: <strong>{orderId}</strong></h2>
            </div>
        );
    }

    return (
        <div className='container p-3 text-center'>
            <h2>Ingrese sus datos para finalizar la compra</h2>
           <form action="" onSubmit={enviarDatos} className='row'>
            <div className="col-md-6 p-3">
            <input type="text" placeholder='Nombre' name='nombre' className='formulario text-center' onChange={handleName} value={name} />
            </div>
            <div className="col-md-6 p-3">
            <input type="text" placeholder='Apellido' name='apellido' className='formulario text-center' onChange={handleLastName} value={lastName} />
            </div>
            <div className="col-md-6 p-3">
            <input type="number" placeholder='Teléfono' name='telefono' className='formulario text-center' onChange={handleTelefono} value={telefono} />
            </div>
            <div className="col-md-6 p-3">
            <input type="text" placeholder='Dirección' name='direccion' className='formulario text-center' onChange={handleDireccion} value={direccion} />
            </div>
            <div className="col-md-6 p-3">
            <input type="email" placeholder='Email' name='email' className='formulario text-center' onChange={handleEmail} value={email} />
            </div>
            <div className="col-md-6 p-3">
            <input type="email" placeholder='Confirmar Email' className='formulario text-center' name='emailPorConfirmar' onChange={handleEmailPorConfirmar} value={emailPorConfirmar} />
            </div>
            <button className='botonFormulario btn btn-dark' disabled={(name==="")||(!isNaN(name))||(lastName==="")||(!isNaN(lastName))||(telefono==="")||(direccion==="")||(email==="")||(emailPorConfirmar==="")||(email !== emailPorConfirmar)}>Confirmar Compra</button> 
           </form>
        </div>
    );
};

export default Form;
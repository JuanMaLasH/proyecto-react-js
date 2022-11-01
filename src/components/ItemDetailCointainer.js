import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { getProduct } from '../mock/products';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const {idProduct} = useParams();

  useEffect(() => {
     getProduct(idProduct)   
      .then((res) => {
        setItem(res);
    })
    .catch((error) => {
        console.log(error);
    }); 
}, [idProduct]);

  return (
    <div className='container'>
        <ItemDetail item = {item}/>
    </div>
  )
}

export default ItemDetailContainer;
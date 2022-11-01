import React, {useEffect, useState} from 'react';
import { getProducts } from '../mock/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams();

    useEffect(() => {
        getProducts(categoryName)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        }); 
    }, [categoryName]);

        return (
            <div className='container'>
                <h1 className='text-center'>
                    {greeting}
                </h1>
                <ItemList items = {items} />
            </div>
        );
};

export default ItemListContainer;
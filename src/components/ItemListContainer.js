import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import Carrousel from './Carrousel';
import {useParams} from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';


const ItemListContainer = ({greeting, carrousel}) => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {

        const collectionProd = collection(db, 'productos');

        if (!categoryName) {
            getDocs(collectionProd)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            const q = query(collectionProd, where('category', '==', categoryName));
            getDocs(q)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }
        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                margin: '15px',
                padding: '15px',
                justifyContent: 'center',
                justifyItems: 'center',
                }}>
                  <PacmanLoader size={50}/>
              </div>
        );
    }

        return (
            <div className='container'>
                {carrousel && (<div>  
                    <Carrousel/>
                </div>)}
                <h1 className='text-center'>
                    {greeting}
                </h1>
                <ItemList items = {items} />
            </div>
        );
};

export default ItemListContainer;
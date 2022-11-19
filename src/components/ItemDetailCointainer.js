import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true);

  const {idProd} = useParams();

  useEffect(() => {

    const ref = doc(collectionProd, idProd);

    getDoc(ref)
        .then((res) => {
            setItem({
                id: res.id,
                ...res.data(),
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
  }, [idProd]);

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
      <ItemDetail item = {item}/>
    </div>
  );
};

export default ItemDetailContainer;
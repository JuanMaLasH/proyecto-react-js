import React from 'react';
import Item from './Item';

const ItemList = ({items})  => {
    return (
        <div className='col-md-4 p-2 container text-center'>
            {items.map((product) => {
                return <Item product={product} key={product.id}/>
            })}    
        </div>
    );
};

export default ItemList;

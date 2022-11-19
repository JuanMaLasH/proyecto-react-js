import Item from './Item';
import React, { memo } from 'react';

const ItemList = memo(
     ({items})  => {
    return (
        <div className='col-md-4 p-2 container text-center'>
            {items.map((producto) => {
                return <Item producto={producto} key={producto.id}/>;
            })}    
        </div>
    );
},
(a, b) => a.items === b.items
);

export default ItemList;

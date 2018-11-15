import React from 'react';

function Items(props) {
    return (
        <div>
            <h3>{props.item.name}</h3>
            <h3>${props.item.price}</h3>
            <label>Completed:</label>
            <input
                onChange={() => props.editCart(props.cart._id, { trash: !props.cart.trash })}
                type="checkbox"
                checked={props.item.trash}/>
            <button onClick={() => props.deleteCart(props.cart._id)}>X</button>
        </div>
    )
}

export default Items;
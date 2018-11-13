import React from 'react';

function Cart(props) {
    return (
        <div>
            <h3>{props.cart.name}</h3>
            <label>Completed:</label>
            <input
                onChange={() => props.editCart(props.cart._id, { completed: !props.cart.completed })}
                type="checkbox"
                checked={props.cart.completed}/>
            <button onClick={() => props.deleteCart(props.cart._id)}>X</button>
        </div>
    )
}

export default Cart;
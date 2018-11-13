import React from 'react';
import AddToCart from "./AddToCart"
import { withContext } from "../../AppContext";
import Cart from './Cart';

function CartList(props) {
    const carts = props.carts.map(cart => {
        return (
            <Cart
                key={cart._id}
                cart={cart}
                editCart={props.editCart}
                deleteCart={props.deleteCart}
            />
        )
    })

    return (
        <main>
            <AddToCart addCart={props.addCart} />
            {carts}
        </main>
        
    )

}

export default withContext(CartList);
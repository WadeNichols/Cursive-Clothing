import React, { Component } from 'react'
import {withContext} from '../../AppContext';

class Cart extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Cart</h1>
            </div>
        )
    }
}

export default withContext (Cart)
import React, { Component } from 'react'



class AddToCart extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            name: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCart(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add New Cart</h4>

                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="name"/>
                    <input
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        type="number"
                        placeholder="price"
                    />

                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default AddToCart;

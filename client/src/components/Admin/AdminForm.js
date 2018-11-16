import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class AdminForm extends Component{
    constructor(){
        super()
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

    render(){
        return(
            <form style={{"marginTop":"200px"}}>
                <TextField
                    id="productName"
                    label="Product Name"
                    value={this.state.productName}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    id="itemType"
                    label="Item Type"
                    value={this.state.itemType}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    id="price"
                    label="Product Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    type="number"
                />
                <TextField
                    id="sex"
                    label="Sex"
                    value={this.state.Sex}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    id="partNumber"
                    label="Part Number"
                    value={this.state.partNumber}
                    onChange={this.handleChange}
                    type="number"
                />
                <input
                    id="fieldName"
                    label="Image"
                    value={this.state.fieldname}
                    onChange={this.handleChange}
                    type="file"
                />
                <button>Submit new</button>
            </form>
        )
    }
}
export default AdminForm;
import React, { Component } from 'react'

export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             index: this.props.index
        }
    }


    inStock = (amount) => {
        if(amount > 0) {
            return "Available"
        }
        else {
            return "Out of stock!"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Price: {this.props.price}$</p>
                <p>Stock: {this.inStock(this.props.stock)}</p>
                <button onClick={()=>{this.props.delete(this.state.index)}}>X</button>
            </div>
        )
    }
}

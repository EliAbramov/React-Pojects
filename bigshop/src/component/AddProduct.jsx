import React, { Component } from 'react'

export default class AddProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             price: '',
             stock: 0,
             bgColorName: 'white',
             bgColorPrice: 'white'
        }
    }
    

    validName = (e) => {
        let input = e.target.value;

        if(input === ""){
            this.setState({
                name: '',
                bgColorName: 'white'
            })
        }
        else if(input.length >= 4){
            this.setState({
                name: input,
                bgColorName: "limegreen"
            })
        } 
        else {
            this.setState({
                name: '',
                bgColorName: 'pink'
            })
        }
    }

    validPrice = (e) => {
        let input = e.target.value;

        if(input === ""){
            this.setState({
                price: '',
                bgColorPrice: 'white'
            })
        }
        else if (input > 0 || !isNaN(input)){
            this.setState({
                price: input,
                bgColorPrice: 'limegreen'
            })
        }
        else {
            this.setState({
                price: '',
                bgColorPrice: 'pink'
            })
        }
    }

    inputStock = (e) => {
        if(!isNaN(e.target.value))
            this.setState({stock: Number(e.target.value)})
        else 
            this.setState({stock: 0})
    }

    createProduct = () => {
        this.props.add(
            this.state.name,
            this.state.price,
            this.state.stock
        )
    }

    render() {
        return (
            <div>
                <input 
                    style={{backgroundColor: this.state.bgColorName}}
                    onChange={this.validName} 
                    placeholder="Enter name"
                />
                <input 
                    style={{backgroundColor: this.state.bgColorPrice}} 
                    onChange={this.validPrice} 
                    placeholder="Enter price"
                />
                <input 
                    onChange={this.inputStock} 
                    placeholder="Enter stock"
                />
                <button onClick={this.createProduct}>Add</button>
            </div>
        )
    }
}

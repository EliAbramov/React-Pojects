import React, { Component } from 'react'
import Product from './Product';
import AddProduct from './AddProduct';
import '../App.css'

// const products = [
//   {name: 'Bamba', price: 4, stock: 50},
//   {name: 'Bisli', price: 5, stock: 150},
//   {name: 'Loacker', price: 6, stock: 220},
//   {name: 'Nesti', price: 7, stock: 75}
// ]


export default class App extends Component {

  state = {
    flag: false,
    products: [
      {productName: 'Bamba', productPrice: 4, stock: 50},
      {productName: 'Bisli', productPrice: 5, stock: 0},
      {productName: 'Loacker', productPrice: 6, stock: 220},
      {productName: 'Nesti', productPrice: 7, stock: 75}
    ]
  }

  addNewProduct = (n, p, s) => {
    const newProduct = {
      productName: n,
      productPrice: p,
      stock:s
    }
    // Adding a product with spread to products list
    // products: ["Kifli", 'Bamba', 'Bisli, "Loacker", "Nesti"]
    this.setState({products: [newProduct, ...this.state.products]})
  }

  deleteProduct = (i) => {
    this.setState({products: this.state.products.filter((item, index)=>(index!==i))})
  }

  // dispaly show component if true of not showing if false
  dispaly = () => {
    if(this.state.flag){
      return <AddProduct add={this.addNewProduct}/>
    }
    else {
      return <div></div>
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BigShop</h1>
        <button onClick={()=>this.setState({flag: !this.state.flag})}>+</button>
        {this.dispaly()}

        {this.state.products.map((item, index)=>{
          return (
            <Product 
              name={item.productName}
              price={item.productPrice}
              stock={item.stock}
              delete={this.deleteProduct}
              index={index}
            />
          )
        })}
      </div>
    )
  }
}


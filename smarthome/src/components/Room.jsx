import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Product from './Product'
import AddProduct from './AddProduct'

export default function Room(props) {

    const [show, setShow] = useState(false)

    const displaySectionAdd = ()=>{
        if(show) 
            return (
                <AddProduct show={setShow} addProduct={props.add} roomIndex={props.index}/>
            )
        else{
            return null
        }
    }

    return (
        <div>
            <section>
                <h2>Name: {props.name}</h2>
                <h2>Room type: {props.type}</h2>
            </section>
            {props.products.map((p, i)=>{ 
                
                let bgColor; 
                if(p.isTurn) {
                    bgColor = "green"
                } else {
                    bgColor = "tomato"
                }

                return (
                    <Product
                        productName={p.productName}
                        changeColor={props.changeColor}
                        color={bgColor}
                        productIndex={i}
                        roomIndex={props.index}
                        del={props.del}
                    />
                )    
            })}
            <br /><br />
            <button onClick={()=>{setShow(!show)}}>ADD NEW PRODUCT</button>
            <Link to='/'><button>BACK</button></Link> 
            {displaySectionAdd()}
        </div>
    )
}

import React, {useState} from 'react'

export default function Product(props) {

    const [roomIndex, setRoomIndex] = useState(props.roomIndex)
    const [productIndex, setProductIndex] = useState(props.productIndex)
    const [imageSrc, setImageSrc] = useState(props.productName + ".png")
    
    return (
        <div className="product">
            <div 
                onClick={()=>{props.changeColor(roomIndex, productIndex)}} 
                className="product" 
                style={{backgroundColor: props.color}}
            >
                <img src={imageSrc} alt={props.productName} />
            </div>
            {/* <button onClick={props.del(roomIndex, productIndex)}>X</button> */}
        </div>
    )
}

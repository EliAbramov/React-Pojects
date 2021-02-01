import React, {useState} from 'react'

export default function AddProduct(props) {

    const [product, setProduct] = useState('')
    const [isTurn, setIsTurn] = useState('off')
    const [roomIndex, setRoomIndex] = useState(props.roomIndex)

    return (
        <div>
            <select onChange={(e)=>{setProduct(e.target.value)}}>
                <option value="">Choose</option>
                <option value="Stereo">Stereo</option>
                <option value="Lemp">Lemp</option>
                <option value="TV">TV</option>
                <option value="Oven">Oven</option>
                <option value="Boiler">Boiler</option>
                <option value="Air-conditioner">Air-conditioner</option>
            </select>
            <button onClick={()=>{props.addProduct(product, roomIndex);props.show(false)}}>Add</button>
        </div>
    )
}

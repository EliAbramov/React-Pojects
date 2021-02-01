import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function AddRoom(props) {

    const [name, setName] = useState('')    
    const [color, setColor] = useState('')    
    const [type, setType] = useState('Bedroom')    

    return (
        <div>
            <select onChange={(e)=>{setType(e.target.value)}}>
                <option value='Bedroom'>Bedroom</option>
                <option value='Kitchen'>Kitchen</option>
                <option value='Bath'>Bath</option>
            </select><br />
            <input onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/><br />
            <input onChange={(e)=>{setColor(e.target.value)}} placeholder="Color"/><br />
            <Link to='/'><button onClick={()=>{props.add(name, color, type)}}>Add</button></Link>
        </div>
    )
}

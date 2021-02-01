import React, {useState} from 'react'

export default function Person(props) {

    const [id, setId] = useState(props.i)

    return (
        <div>
            <h2>{props.n}</h2>
            <p>Age: {props.a}</p>
            <button onClick={()=>{props.delete(id)}}>X</button>
        </div>
    )
}

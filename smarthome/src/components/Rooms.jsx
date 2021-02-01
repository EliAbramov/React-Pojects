import React from 'react'
import {Link} from 'react-router-dom'
import Room from './Room'

export default function Rooms(props) {
    return (
        <div>
            {props.rooms.map(r=>{
                return (
                    <Link style={{textDecoration: "none", textDecorationColor: "black"}} to={`/room${r.name}`}>
                        <div 
                            className='room'
                            style={{backgroundColor: r.color}}
                            onClick={()=>{}}><h1>{r.name}</h1>
                        </div>
                    </Link>
                )
            })}
            <Link to='/addroom'><button>+</button></Link>
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='row'>

            <div className='col-3'></div>


            <div className='col-2'>
                <Link to='/'>Home</Link>
            </div>
            <div className='col-2'>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='col-2'>
                <Link to='/about'>About</Link>      
            </div>
            

            <div className='col-3'></div>
        </div>
    )
}

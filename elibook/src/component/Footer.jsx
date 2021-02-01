import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div>
            <footer style={{textAlign:"center", color:"lightgray"}}>Create by DevTeam {year}</footer>    
        </div>
    )
}

import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear(); // "yyyy"

    return (
        <div>
            <footer style={{color: "lightgray"}}>Made by EliDev {year}</footer>
        </div>
    )
}

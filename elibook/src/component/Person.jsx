import React from 'react';
// import Info from './Info';

export default function Person(props) {

    let borderStyle = {
        backgroundColor: ""
    }

    let changeStyle = (gender) => {
        if(gender === "Male") {
            borderStyle.backgroundColor = "CornflowerBlue"
        } 
        else {
            borderStyle.backgroundColor = "HotPink"
        }
    }

    return (
        <div style={borderStyle}>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.city}</p>
            <p>{props.hoobies}</p>
            <p>{changeStyle(props.gender)}</p>

            {/* <Info info={props.age}/>
            <Info info={props.city}/>
            <Info info={props.hoobies}/> */}
        </div>
    )
}

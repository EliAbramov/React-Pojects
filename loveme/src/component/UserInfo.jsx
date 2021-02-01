import React from 'react'
import Info from './Info'


export default function UserInfo(props) {

    let styleUser = {
        backgroundColor: ""
    }

    let styleByGender = (gender) => {
        if(gender === "Male"){
            styleUser.backgroundColor = "RoyalBlue"
        }
        else {
            styleUser.backgroundColor = "HotPink"
        }
    }

    return (
        <div style={styleUser}>
            {styleByGender(props.gender)}
            <Info info={props.name}/>
            <Info info={props.age}/>
        </div>
    )
}

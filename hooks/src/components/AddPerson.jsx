import React, {useState} from 'react'

export default function AddPerson(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <div>
            <input onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
            <input onChange={(e)=>{setAge(e.target.value)}} placeholder="Age"/>
            <button onClick={()=>{props.add(name, age)}}>Add</button>
        </div>
    )
}

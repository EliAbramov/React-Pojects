import React, {useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Person from './Person'
import AddPerson from './AddPerson'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

export default function App() {

    // Crete my first hook
    const [num, setNum] = useState(0)

    // Create hook fo change colors of a button 
    const [flag, setFlag] = useState(false) 
    const [onAirStyle, setOnAirStyle] = useState({
        backgroundColor: "white",
        borderRadius: "70%",
        height: "70px",
        width: "70px"
    })
    const changeBG = () => {
        if(flag){
            setOnAirStyle({
                backgroundColor: "white",
                borderRadius: onAirStyle.borderRadius,
                height: onAirStyle.height,
                width: onAirStyle.width
            })
        }
        else {
            setOnAirStyle({
                backgroundColor: "tomato",
                borderRadius: onAirStyle.borderRadius,
                height: onAirStyle.height,
                width: onAirStyle.width
            })
        }
        setFlag(!flag)
    }

    // Create hook with list of persons
    const [list, setList] = useState([
        {name: "Dani", age: 16},
        {name: "Bill", age: 22},
        {name: "Tony", age: 25}
    ])

    // Create new person and add him to the list of personse
    const addNewPerson = (n, a) => {setList([{name: n, age: a}, ...list])}
    
    // Delete a person from list of personse
    const deletePerson = (i) => {setList(list.filter((item, index)=>(index!=i)))}

    return (
        <div>
        <h1>Hooks & Router</h1><br /> 

        <Router> 
            <Navbar />
            <Switch>
                <Route exact path='/' component={()=>{return <Home />}} />
                <Route path='/contact' component={()=>{return <Contact />}} />
                <Route path='/about' component={()=>{return <About />}} />
            </Switch>
        </Router>



        <br /> <br /> 
        <button onClick={()=>{setNum(num+1)}}>+</button>
        {num}
        <button onClick={()=>{setNum(num-1)}}>-</button>
        <br /> <br /> 
        <button style={onAirStyle} onClick={changeBG}>ON AIR</button>
        <br /> <br /> 
        <h2>My Personse</h2>
        <AddPerson add={addNewPerson}/>
        {list.map((item, index)=>{
            return (
                <Person 
                    n={item.name} 
                    a={item.age} 
                    i={index} 
                    delete={deletePerson}
                />
            )        
        })}
        </div>
    )
}

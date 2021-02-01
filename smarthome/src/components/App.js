import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import AddRoom from './AddRoom'
import Rooms from './Rooms'
import Room from './Room'
import '../App.css';

function App() {

  const [rooms, setRooms] = useState([
    {name: "Test", type: "Type", color: "red", products: []}
  ])

  const addNewRoom = (n, c, t) => {
    setRooms([...rooms, {name: n, type: t, color: c, products: []}])
  }

  const addNewProduct = (p, i) => {
    rooms[i].products.push({productName: p, isTurn: false}) 
    setRooms([...rooms])
  }

  const removeProduct = (ri, pi) => {
    rooms[ri].products = rooms[ri].products.filter((item, index)=>(index != pi))
    setRooms([...rooms])
  }

  const changeColor= (ri, pi)=>{
    rooms[ri].products[pi].isTurn = !rooms[ri].products[pi].isTurn
    setRooms([...rooms]); 
  }

  return (
    <div className="App">
      <h1>SmartHome</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={()=>{return <Rooms rooms={rooms}/>}}/>
          <Route path='/addroom' component={()=>{return <AddRoom add={addNewRoom}/>}}/>
          {rooms.map((r, i)=>{
            return (              
              <Route path={`/room${r.name}`} component={()=>{
                return (
                  <Room 
                    name={r.name} 
                    color={r.color} 
                    type={r.type} 
                    products={r.products} 
                    changeColor={changeColor}
                    add={addNewProduct} 
                    del={removeProduct} 
                    index={i} 
                  /> 
                )}}
              />
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

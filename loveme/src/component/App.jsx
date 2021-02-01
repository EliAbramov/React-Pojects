import React from 'react'
import Header from './Header'
import UserInfo from './UserInfo'
import Footer from './Footer'
import '../App.css';

const data = [
  {
    name: "Tal",
    age: 23,
    gender: "Male"
  },
  {
    name: "Miri",
    age: 31,
    gender: "Female"
  },
  {
    name: "Nadia",
    age: 27,
    gender: "Female"
  },
  {
    name: "Igal",
    age: 34,
    gender: "Male"
  },
  {
    name: "Moshe",
    age: 25,
    gender: "Male"
  }
]


function App() {
  return (
    <div className="App">
      <Header />
      {data.map(user=>{
        return(
          <UserInfo 
            name={user.name}
            age={user.age}
            gender={user.gender}
         />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

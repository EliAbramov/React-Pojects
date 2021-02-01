import '../App.css';
import Header from './Header';
import Person from './Person';
import Footer from './Footer';
import AddPerson from './AddPerson';

const data = [
  {
    name: "Shimon",
    age: 28,
    city: "Natania",
    hoobies: "Football, Drinking",
    gender: "Male"
  },
  {
    name: "Mirit",
    age: 20,
    city: "Arad",
    hoobies: "Dencieng, Drinking",
    gender: "Feamle"
  },
  {
    name: "Gila",
    age: 27,
    city: "Beer Sheva",
    hoobies: "Sudoko",
    gender: "Female"
  },
  {
    name: "Bill",
    age: 31,
    city: "Tel Aviv",
    hoobies: "Darts",
    gender: "Male"
  },
  {
    name: "Ron",
    age: 31,
    city: "Tel Aviv",
    hoobies: "Darts",
    gender: "Female"
  }
]

let number = 21;

function App() {
  return (
    <div>
      <Header />
      <AddPerson num={number}/>
      {data.map(p=>{
        return (
          <Person 
            name={p.name}
            age={p.age}
            city={p.city}
            hoobies={p.hoobies}
            gender={p.gender}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

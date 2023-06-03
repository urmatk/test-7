import React, {useState} from 'react';
import './App.css';
import {consistsOf} from "./Types";
import coffee from "./img/coffee.png";
import Food from "./img/Food.png";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import AddItems from "./components/AddItems/AddItems";


const MENU: consistsOf[] = [
  {name: 'hamburger', price: 80, image: Food},
  {name: 'Cheezburger', price: 90, image: Food},
  {name: 'Fries', price: 45, image: Food},
  {name: 'Coffee', price: 70, image: coffee},
  {name: 'Tea', price: 50, image: coffee},
  {name: 'Cola', price: 40, image: coffee},
];
function App() {
  const [AddItems, setAddItems] = useState([]);

  const changeCount = () => {
    const AddItems = [...MENU];
    if ()
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="OrderDetails">

        </div>
        <div className="AddItems">
          {MENU.map((item) => (
            <AddItems image={item.image} clickButton={changeCount}/>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;

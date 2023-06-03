import React, {useState} from 'react';
import './App.css';
import {consistsOf} from "./Types";
import coffee from "./img/coffee.png";
import Food from "./img/Food.png";
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
  const [items, setItems] = useState<{ [key: string]: number }>({});
  let price = 0;

  for (let key in items) {
    const item = MENU.find(el => el.name === key);
    if (item) {
      price = price + (item.price * items[key]);
    }
  }
  const FoodClick = (name: string) => {
    const newItems = {...items};
    if (newItems[name]) {
      newItems[name] = newItems[name] + 1;
    } else {
      newItems[name] = 1;
    }
    setItems(newItems);
  }

  const deleteItem = (name: string) => {
    const newItems = {...items};
    if (newItems[name]) {
      if (newItems[name] === 1) {
        delete newItems[name];
      } else {
        newItems[name] = newItems[name] - 1;
      }
    }
    setItems(newItems);
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="OrderDetails">
          {
            price === 0 ? <div>
              Order is empty <br/>
              Please add some items
            </div> : <div>
              {
                Object.keys(items).map(key => {
                  const item = MENU.find(element => element.name === key);
                  return <div className="order" key={key}>
                    <span>{key}   </span>
                    <span>x{items[key]}</span>
                    <span>{(item?.price || 0) * items[key]}KGS</span>
                    <button onClick={() => deleteItem(key)}>delete</button>
                  </div>
                })
              }
              <b>Total price: {price}</b>
            </div>
          }
        </div>
        <div className="AddItems">
          {MENU.map((item) => (
            <AddItems key={item.name} name={item.name} image={item.image} price={item.price}
                      clickButton={() => FoodClick(item.name)}/>

          ))}


        </div>

      </div>

    </div>
  );
}

export default App;

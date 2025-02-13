import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import List from "./components/List"
import Add from "./components/Add"

function App() {
  const items = [
	  {id: 1, name: "item1", price:10},
	  {id: 2, name: "item2", price:20}, 
	  {id: 3, name: "item3", price:30}
  ];

  const [count, setCount] = useState(0);

  const nombre = "andre";
  const elemento = <h2> hola, {nombre}</h2>;

  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };

  const add = (item) => {
    console.log('hola');
    item.id = items.length + 1;
    items.push(item);
  };


  return (
    <div>
	<Header/>
	{count}
	<Button/>
	<Button name = "suma" click={sum}/>
	<Button name = "mensaje" click={() => alert("hola")}/>
	<Add add={add}/>
	<List items={items}/>
	<Footer/>
    </div>
  );
}

export default App;

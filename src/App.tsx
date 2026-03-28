import { useState } from "react";
import "./App.css"

class Fruit {
  name: string;
  nutrient: number;

  constructor(name: string, nutrient: number) {
    this.name = name;
    this.nutrient = nutrient;
  }
}

function App() {

  const fruits:Fruit[]=[
    new Fruit("Apple",50),
    new Fruit("Banana", 100),
    new Fruit("Citrus",1000)
  ]

  const [count, setCount] = useState<number>(0);
  const [fruit, setFruit] = useState<Fruit>();

  function handleClick(): void {
    setCount(count + 1);
    if (count % 3 === 0) {
      setFruit(fruits[0]);
    } else if (count % 3 === 1) {
      setFruit(fruits[1]);
    } else {
      setFruit(fruits[2]);
    }
  }
  return (
    <div>
      <h1>Fruit Counter</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Fruit name is :{fruit?.name} Fruit nutrient is: {fruit?.nutrient}</button>
    </div>
  );
}

export default App;

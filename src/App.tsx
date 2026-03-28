import { useState } from "react";
import "./App.css"

function App() {
  interface Fru {
    name: string;
    nutrient: number;
  }
  const fruits: Fru[] = [
    { name: "Apple", nutrient: 50 },
    { name: "Banana", nutrient: 60 },
    { name: "Citrus", nutrient: 70 },
  ];

  const [count, setCount] = useState<number>(0);
  const [fruit, setFruit] = useState<Fru>();

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

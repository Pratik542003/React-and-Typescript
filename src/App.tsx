import { useState } from "react";
import "./App.css";

class Fruit {
  name: string;
  nutrient: number;

  constructor(name: string, nutrient: number) {
    this.name = name;
    this.nutrient = nutrient;
  }
}

interface Juice {
  fruit: Fruit;
  isAvailable: boolean;
}

function App() {
  const fruits: Fruit[] = [
    new Fruit("Apple", 50),
    new Fruit("Banana", 100),
    new Fruit("Citrus", 1000),
  ];

  const juices: Juice[] = [
    { fruit: fruits[0], isAvailable: true },
    { fruit: fruits[1], isAvailable: false },
    { fruit: fruits[2], isAvailable: true },
  ];

  // ✅ state to control displayed list
  const [list, setList] = useState<Juice[]>(juices);

  function showColor(name: string): string {
    const colorMap: Record<string, string> = {
      Apple: "red",
      Banana: "gold",
      Citrus: "orange",
    };
    return colorMap[name] || "black";
  }

  // ✅ filter function
  function showNutrients(): void {
    const filtered = juices.filter((j) => j.fruit.nutrient > 99);
    setList(filtered);
  }

  return (
    <div>
      <h1>Fruit List</h1>

      <ul>
        {list.map((j, index) => (
          <li key={index} style={{ color: showColor(j.fruit.name) }}>
            {j.fruit.name} - {j.fruit.nutrient} -{" "}
            {j.isAvailable ? "Available" : "Not Available"}
          </li>
        ))}
      </ul>

      <button onClick={showNutrients}>
        Show Nutrient &gt; 99
      </button>
    </div>
  );
}

export default App;
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    setData(input);
  }

  return (
    <div className="container">
      <h1 className="hello">Hello</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Enter Text: </label>

        <input type="text" id="text" value={input} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Output:</h3>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default App;

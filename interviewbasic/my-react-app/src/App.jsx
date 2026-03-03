import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>

      <h1>React Level-1 Counter 🚀</h1>

      <h2>Count: {count}</h2>

      <button
        className="increase"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        className="decrease"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>

      <button
        className="reset"
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      <br /><br />

      <button
        className="toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark Mode
      </button>

    </div>
  );
}

export default App;
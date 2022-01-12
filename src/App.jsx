import { useState } from "react";
import "./App.css";
import { Cat, Choose } from "./components/Choose";

function App() {
  const [toggle, setIsToggle] = useState(false);
  return (
    <div className="App">
      <h1>Choose your favorite pet</h1>
      <button onClick={() => setIsToggle(!toggle)}>Change</button>

      {toggle ? <Choose /> : <Cat />}
    </div>
  );
}

export default App;

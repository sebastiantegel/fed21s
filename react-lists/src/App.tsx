import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  let buttonText = "Visa todos";
  if (show) {
    buttonText = "Göm todos";
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{buttonText}</button>
      {show && <Todos></Todos>}
    </div>
  );
}

export default App;

import { Counter } from "./components/Counter";
import { HelloWorld } from "./components/HelloWorld";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HelloWorld msg="Hello world"></HelloWorld>
      <Counter></Counter>
    </div>
  );
}

export default App;

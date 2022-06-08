import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./components/Counter";
import { CounterAgain } from "./components/CounterAgain";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Counter></Counter>
        <CounterAgain></CounterAgain>
      </div>
    </Provider>
  );
}

export default App;

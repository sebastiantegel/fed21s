import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <AddTodo></AddTodo>
        <Todos></Todos>
      </div>
    </Provider>
  );
}

export default App;

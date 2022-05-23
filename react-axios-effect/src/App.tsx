import "./App.css";
import { Movies } from "./components/Movies";
import { NewMovie } from "./components/NewMovie";

function App() {
  return (
    <div className="App">
      <NewMovie></NewMovie>
      {/* <Movies></Movies> */}
    </div>
  );
}

export default App;

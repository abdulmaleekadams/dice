import "./App.css";
import Die from "./components/Die/Die";
import Lottery from "./components/lottery/Lottery";
import RollDie from "./components/rollDie/RollDie";

function App() {
  return (
    <div className="App">
      <RollDie />
      <Lottery />
    </div>
  );
}

export default App;

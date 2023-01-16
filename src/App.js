import "./App.css";
import CoinFlipper from "./components/coin/CoinFlipper";
import Lottery from "./components/lottery/Lottery";
import RollDie from "./components/rollDie/RollDie";

function App() {
  return (
    <div className="App">
      <RollDie />
      <Lottery />
      <CoinFlipper />
    </div>
  );
}

export default App;

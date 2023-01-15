import "./App.css";
import Settings from "./components/Settings/Settings";
import { useState } from "react";
import PlayField from "./components/PlayField/PlayField";

function App() {
  const [gameOptions, setGameOptions] = useState(null);
  const startGame = (options) => {
    setGameOptions(options);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="App">
      <h1 className="app-header" onClick={refreshPage}>
        Match 'em
      </h1>
      {!gameOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <PlayField gameOptions={gameOptions} />
      )}
    </div>
  );
}

export default App;

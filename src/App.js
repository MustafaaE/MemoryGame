import "./App.css";
import useFetchImages from "./hooks/useFetchImages";
import Settings from "./components/Settings/Settings";
import { useState } from "react";

function App() {
  // const [game]
  // const images = useFetchImages();
  // console.log({ images });
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => {
    console.log(options);
  };
  return (
    <div className="App">
      <h1>Matching Game</h1>
      <Settings startGame={startGame} />
    </div>
  );
}

export default App;

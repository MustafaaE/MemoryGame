import "./App.css";
import useFetchImages from "./hooks/useFetchImages";
import Settings from "./components/Settings/Settings";
import { useState } from "react";
import PlayField from "./components/PlayField/PlayField";

function App() {
  // const [game]
  // const images = useFetchImages();
  // console.log({ images });
  const [gameOptions, setGameOptions] = useState(null);

  // const images = useFetchImages(gameOptions);
  // console.log(images, "hej");
  const startGame = (options) => {
    setGameOptions(options);
  };
  return (
    <div className="App">
      <h1 className="app-header">Matching Game</h1>
      {!gameOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <PlayField gameOptions={gameOptions} />
      )}
    </div>
  );
}

export default App;

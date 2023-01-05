import "./App.css";
import useFetchImages from "./hooks/useFetchImages";
import Settings from "./components/Settings/Settings";

function App() {
  // const images = useFetchImages();
  // console.log({ images });

  return (
    <div className="App">
      <h1>Matching Game</h1>
      <Settings />
    </div>
  );
}

export default App;

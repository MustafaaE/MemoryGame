import "./App.css";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const images = useFetchImages();
  // console.log({ images });

  return (
    <div className="App">
      <h1>Magic Match</h1>
    </div>
  );
}

export default App;

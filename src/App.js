import "./App.css";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const images = useFetchImages();
  console.log({ images });
  return <div className="App"></div>;
}

export default App;

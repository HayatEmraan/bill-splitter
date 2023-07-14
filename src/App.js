import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Bill Splitter | React JS";
  }, []);
  return (
    <div className="App">
      <h1>Welcome to Power House | React JS</h1>
    </div>
  );
}

export default App;

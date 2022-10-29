import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;

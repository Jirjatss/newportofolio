import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <div className="App bg-[#0e1630]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;

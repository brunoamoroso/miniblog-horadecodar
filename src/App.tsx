import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="container mx-auto">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

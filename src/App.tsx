import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

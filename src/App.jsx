import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Green from "./components/Green";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

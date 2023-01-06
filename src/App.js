import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import History from "./pages/History";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <div className="wrap ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/history" element={<History />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

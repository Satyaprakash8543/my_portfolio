import { useState } from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";
// import Hero from "./Component/Hero.jsx";
import Project from "./Component/Project.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar /> {/* Navbar stays at top */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
        <Footer /> {/* Footer stays at bottom */}
        {/* <Hero/> */}
      </Router>
    </>
  );
}

export default App;

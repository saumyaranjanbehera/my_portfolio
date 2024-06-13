import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";


const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/experience" element={<Layout />}>
          <Route index element={<Experience />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

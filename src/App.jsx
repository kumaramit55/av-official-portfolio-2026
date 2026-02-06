import "./App.css";
import About from "./components/aboutSection";
import Contact from "./components/contact";

import Hero from "./components/hero-Section";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

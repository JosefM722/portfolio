import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Navbar />
      <Contact />
    </>
  );
}
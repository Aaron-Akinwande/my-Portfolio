import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="max-w-7xl mx-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

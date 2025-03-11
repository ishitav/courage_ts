import { useRef } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import OurMessage from "./sections/OurMessage";
import Shop from "./sections/Shop";
import "./index.css";

const App = () => {
  const aboutRef = useRef(null);
  const messageRef = useRef(null);
  const shopRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Modern Navigation Bar */}
      <nav className="nav">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <button className="nav-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </button>
          <button className="nav-button" onClick={() => scrollToSection(aboutRef)}>About</button>
          <button className="nav-button" onClick={() => scrollToSection(messageRef)}>Our Message</button>
          <button className="nav-button" onClick={() => scrollToSection(shopRef)}>Shop</button>
        </div>
      </nav>

      {/* Sections */}
      <Home scrollToShop={() => scrollToSection(shopRef)} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={messageRef}>
        <OurMessage />
      </div>
      <div ref={shopRef}>
        <Shop />
      </div>
    </div>
  );
};

export default App;
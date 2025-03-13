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
    const offset = 80; // Adjust this value based on your navbar height
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-container">
      {/* Professional Navigation Bar with Optimized Logo Size */}
      <nav className="nav">
        <img src="/logo3.png" alt="Courage Ts Logo" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <div className="nav-links">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(messageRef)}>Our Message</button>
          <button onClick={() => scrollToSection(shopRef)}>Shop</button>
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
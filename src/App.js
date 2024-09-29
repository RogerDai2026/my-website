import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Interests from './components/Interests';
import Contact from './components/Contact';
import './App.css';




function App() {
  // Auto-scroll feature for the portfolio
  useEffect(() => {
    const sections = ["home", "experience", "interests", "contact"];
    let index = 0;
    const intervalId = setInterval(() => {
      scroller.scrollTo(sections[index], {
        smooth: true,
        duration: 1000,
      });
      index = (index + 1) % sections.length;
    }, 50000); // Scrolls every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* Scrollable sections */}
      <Element name="home" className="section">
        <Home />
      </Element>
      <Element name="Experience" className="section">
        <Resume />
      </Element>
      <Element name="interests" className="section">
        <Interests />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;



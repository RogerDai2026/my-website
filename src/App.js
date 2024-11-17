// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Interests from './components/Interests';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Create a HomePage component that includes all sections and the auto-scroll
function HomePage() {
  // Auto-scroll feature can remain here or be moved into Home component
  // Ensure the useEffect is correctly placed as per previous instructions

  return (
    <div>
      <Home />
      <Resume />
      <Interests />
      <Contact />
    </div>
  );
}

// Optional: Define a NotFound component for unmatched routes
function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router basename="/my-website">
       <ScrollToTop /> {/* Set the basename to your subdirectory */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
          {/* Add additional routes here if needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

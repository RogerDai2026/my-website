// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Interests from './components/Interests';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import './App.css';

// Create a HomePage component that includes all sections and the auto-scroll
function HomePage() {
  // Auto-scroll feature can remain here or be moved into Home component
  // If you previously moved it here as per previous advice
  // Make sure to include it here if needed
  return (
    <div>
      <Home />
      <Resume />
      <Interests />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router basename="/my-website"> {/* Set the basename to your subdirectory */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-form" element={<ContactForm />} />
          {/* Add additional routes here if needed */}
          {/* Optionally, add a 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
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

export default App;

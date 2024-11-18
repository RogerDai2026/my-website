
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleContactMeClick = () => {
    navigate('/contact-form');
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Email: qd8@rice.edu</p>
      <button onClick={handleContactMeClick}>Contact Me</button>
    </div>
  );
}

export default Contact;

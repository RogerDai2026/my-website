// ContactForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  // const navigate = useNavigate();

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to manage submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
  
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };
  
  return (
    <div className="contact-form">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name (required)</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleChange} 
          required 
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleChange} 
        />

        <label htmlFor="email">Email (required)</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          required 
        />

        <label htmlFor="subject">Subject (required)</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          value={formData.subject}
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message (required)</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange} 
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Display submission status */}
      {status && <p className="status-message">{status}</p>}

      <div className="contact-info">
        <p>ECE, Rice University</p>
        <p>6100 Main St.,</p>
        <p>MS-366</p>
        <p>Houston, TX-77025, USA</p>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.8205063166953!2d-95.40429768434957!3d29.718550081998334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0ee2999a7ff%3A0xe6a5e6d22d9a869e!2s6100%20Main%20St%2C%20Houston%2C%20TX%2077025%2C%20USA!5e0!3m2!1sen!2sus!4v1633396485635!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Rice University Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

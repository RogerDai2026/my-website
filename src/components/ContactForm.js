
// ContactForm.js
import React from 'react';


function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Contact</h2>
      <form>
        <label htmlFor="firstName">First Name (required)</label>
        <input type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email (required)</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject (required)</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message (required)</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
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
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out anytime!</p>
      </div>

      <div className="contact-content">

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? Our team is here to help.</p>

          <div className="info-box">
            <strong>Email:</strong>
            <p>support@fintech.com</p>
          </div>

          <div className="info-box">
            <strong>Phone:</strong>
            <p>+92 300 1234567</p>
          </div>

          <div className="info-box">
            <strong>Address:</strong>
            <p>Fintech Tower, Karachi, Pakistan</p>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;

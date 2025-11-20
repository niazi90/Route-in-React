import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner for secure financial solutions.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Fintech is a modern financial platform that provides secure,
            reliable, and fast financial services. Our mission is to bring
            innovation and simplicity to your financial life.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become a leading global fintech platform that empowers users
            with transparency, security, and trust.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Secure and encrypted financial process</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Transparent and fast transaction system</li>
            <li>✔ Trusted by thousands worldwide</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
            alt="About Fintech"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

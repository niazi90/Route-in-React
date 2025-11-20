import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-text">
          <h1>Smart & Secure Financial Solutions</h1>
          <p>
            Manage your money with confidence. Fast transactions, modern tools,
            and complete data security—all in one platform.
          </p>

          <button className="hero-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src="https://th.bing.com/th/id/R.0a9538fa796f8867c7d5e116884116ab?rik=%2btPRBUxUYt%2fAYQ&pid=ImgRaw&r=0"
            alt="Fintech"
          />
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Secure Payments</h3>
            <p>Your data is protected with enterprise-grade encryption.</p>
          </div>

          <div className="feature-box">
            <h3>Fast Transactions</h3>
            <p>Send and receive money instantly across the globe.</p>
          </div>

          <div className="feature-box">
            <h3>24/7 Support</h3>
            <p>We are always available to help you anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <h2>Start Your Financial Journey Today</h2>
        <p>Join thousands who trust Fintech for their daily transactions.</p>
        <button className="cta-btn">Create an Account</button>
      </section>

    </div>
  );
};

export default Home;

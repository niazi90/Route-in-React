import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>

      <Link to="/" className="error-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;

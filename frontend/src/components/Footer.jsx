import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2>AI Resume Coach</h2>
          <p>
            Helping students and professionals build job-winning resumes
            using Artificial Intelligence.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Upload Resume</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@airesumecoach.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 AI Resume Coach. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
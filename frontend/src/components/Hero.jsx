import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build Job-Winning <span>Resumes with AI</span>
        </h1>

        <p>
          Upload your resume and receive ATS scores, personalized
          feedback, skill recommendations, and interview preparation
          tips powered by Artificial Intelligence.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Try Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
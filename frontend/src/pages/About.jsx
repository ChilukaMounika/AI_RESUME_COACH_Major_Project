import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">

        <h1>
          About <span>AI Resume Coach</span>
        </h1>

        <p className="about-intro">
          AI Resume Coach is an intelligent web application
          designed to help job seekers improve their resumes
          and align them with job descriptions using NLP
          techniques.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h2>🎯 Objective</h2>

            <p>
              To assist candidates in understanding
              how well their resumes match a specific
              job role and provide guidance to improve
              their chances of getting shortlisted.
            </p>
          </div>

          <div className="about-card">
            <h2>⚙ Technologies Used</h2>

            <ul>
              <li>React.js</li>
              <li>Flask</li>
              <li>BERT</li>
              <li>spaCy</li>
              <li>PyMuPDF</li>
              <li>jsPDF</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>✨ Features</h2>

            <ul>
              <li>Resume Parsing</li>
              <li>ATS Score Generation</li>
              <li>Semantic JD Matching</li>
              <li>Skill Gap Analysis</li>
              <li>Course Recommendations</li>
              <li>PDF Report Download</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
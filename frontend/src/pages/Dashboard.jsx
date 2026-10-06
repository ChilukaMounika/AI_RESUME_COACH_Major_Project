import React from "react";
import { useLocation } from "react-router-dom";
import { generateReport } from "../utils/reportGenerator";
const Dashboard = () => {
  const location = useLocation();

  const storedData =
    location.state?.analysisResult ||
    JSON.parse(
      localStorage.getItem("resumeAnalysis")
    );
  

  if (!storedData) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <h1>No Analysis Found</h1>

          <p>
            Please upload your resume and
            analyze it first.
          </p>
        </div>
      </div>
    );
  }

  const {
    ats_score,
    strengths,
    improvements,
    matching_skills,
    missing_skills,
    recommendations,
    filename,
  } = storedData;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <h1>
          Resume <span>JD Match</span> Dashboard
        </h1>

        {/* Resume Name */}
        <div className="dashboard-card">
          <h2>📄 Resume</h2>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "18px",
            }}
          >
            {filename}
          </p>
        </div>

        {/* ATS Match Score */}
        <div className="ats-card">

          <h2>🎯 ATS Match Score</h2>
          <div className="score-circle">
              {Math.round(ats_score)}%
          </div>

          <p>
            {ats_score >= 80
              ? "Excellent match for this job role!"
              : ats_score >= 60
              ? "Good match. Improve a few missing skills."
              : "Low match. Upskilling is recommended."}
          </p>

        </div>

        {/* Strengths & Improvements */}
        <div className="dashboard-grid">

          <div className="dashboard-card">

            <h2>💪 Strengths</h2>

            <ul>
              {strengths.map((item, index) => (
                <li key={index}>
                  ✅ {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="dashboard-card">

            <h2>⚠ Areas of Improvement</h2>

            <ul>
              {improvements.map((item, index) => (
                <li key={index}>
                  ❌ {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Matching Skills */}
        <div className="dashboard-card">

          <h2>✅ Matching Skills</h2>

          <div className="skills-container">

            {matching_skills.length > 0 ? (
              matching_skills.map(
                (skill, index) => (
                  <span
                    className="matching-chip"
                    key={index}
                  >
                    {skill}
                  </span>
                )
              )
            ) : (
              <p>
                No matching skills found.
              </p>
            )}

          </div>

        </div>

        {/* Missing Skills */}
        <div className="dashboard-card">

          <h2>⚠ Missing Skills</h2>

          <div className="skills-container">

            {missing_skills.length > 0 ? (
              missing_skills.map(
                (skill, index) => (
                  <span
                    className="missing-chip"
                    key={index}
                  >
                    {skill}
                  </span>
                )
              )
            ) : (
              <p>
                No missing skills found.
              </p>
            )}

          </div>

        </div>

        {/* Free Course Recommendations */}
        <div className="dashboard-card">

          <h2>
            📚 Free Learning Recommendations
          </h2>

          <div className="courses-container">

            {recommendations.length > 0 ? (

              recommendations.map(
                (course, index) => (

                  <div
                    className="course-card"
                    key={index}
                  >

                    <h3>
                      {course.skill}
                    </h3>

                    <p>
                      {course.course}
                    </p>

                    <span>
                      {course.platform}
                    </span>

                    <br />

                    <a
                      href={course.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#38BDF8",
                        display: "inline-block",
                        marginTop: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Watch Free Course →
                    </a>

                  </div>

                )
              )

            ) : (

              <p>
                No course recommendations.
              </p>

            )}

          </div>

        </div>
        <button
            className="download-btn"
            onClick={() => generateReport(storedData)}
        >
            Download Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
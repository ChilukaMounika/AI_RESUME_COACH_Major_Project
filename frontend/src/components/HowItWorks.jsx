import React from "react";

const steps = [
  {
    number: "01",
    title: "Upload Resume",
    description:
      "Upload your resume in PDF format securely to our platform.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI analyzes your resume for ATS compatibility and content quality.",
  },
  {
    number: "03",
    title: "Get Insights",
    description:
      "Receive detailed feedback, ATS scores, and improvement suggestions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2>How It Works</h2>

      <p>
        Improve your resume in just a few simple steps and get ready to land your dream job.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
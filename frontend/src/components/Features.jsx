import React from "react";

const features = [
  {
    icon: "📄",
    title: "Resume Analysis",
    description:
      "Get AI-powered feedback to improve your resume and stand out to recruiters.",
  },
  {
    icon: "🎯",
    title: "ATS Score",
    description:
      "Check how well your resume performs against Applicant Tracking Systems.",
  },
  {
    icon: "🧠",
    title: "Skill Recommendations",
    description:
      "Identify missing skills and boost your chances of landing interviews.",
  },
  
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Powerful Features</h2>
      <p>
        Everything you need to build a job-winning resume and prepare for your dream job.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
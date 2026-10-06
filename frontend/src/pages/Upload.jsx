import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
  if (!selectedFile) {
    alert("Please select a resume!");
    return;
  }

  if (!jobDescription.trim()) {
    alert("Please paste the Job Description!");
    return;
  }

  setLoading(true);

  try {
    const formData = new FormData();

    formData.append("resume", selectedFile);
    formData.append("job_description", jobDescription);

    const response = await fetch(
      "http://127.0.0.1:5000/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log("Backend Response:", data);

    if (!response.ok) {
      throw new Error(
        data.error || "Analysis failed"
      );
    }

    localStorage.setItem(
      "resumeAnalysis",
      JSON.stringify(data)
    );

    navigate("/dashboard", {
      state: {
        analysisResult: data,
      },
    });

  } catch (error) {
    console.error(error);

    alert(
      error.message ||
      "Error analyzing resume."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="upload-page">
      <div className="upload-container">

        <h1>
          Upload Your <span>Resume</span>
        </h1>

        <p>
          Upload your resume and paste the job
          description to get ATS matching,
          skill analysis, and free learning
          recommendations.
        </p>

        <div className="upload-card">

          <div className="upload-cloud">
            ☁️
          </div>

          <h2>Upload Resume</h2>

          <label className="custom-upload-btn">
            Choose Resume

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              hidden
            />
          </label>

          {selectedFile && (
            <div className="selected-resume">
              ✅ {selectedFile.name}
            </div>
          )}

          <div className="jd-section">

            <h3>
              Paste Job Description
            </h3>

            <textarea
              className="jd-textarea"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(
                  e.target.value
                )
              }
            />

          </div>

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

          <small>
            Supported format:
            PDF • Max Size: 5 MB
          </small>

        </div>
      </div>
    </div>
  );
};

export default Upload;
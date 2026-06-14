import { useState } from "react";
import api from "../services/api";
import "./ResumeUpload.css";
import { useNavigate } from "react-router-dom";


function ResumeUpload({
  setResult,
  setPdfFile
}) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const analyzeResume = async () => {
  if (!resume) {
    alert("Please upload a resume");
    return;
  }

  if (!jobDescription.trim()) {
    alert("Please enter a job description");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    const response = await api.post(
      "/Resume/analyze-ai",
      formData
    );

    navigate("/result", {
      state: {
        result: response.data,
        pdfFile: resume
      }
    });

  } catch (error) {
    console.error(error);
    alert("Analysis failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="upload-container">
      <h1 className="main-title">
        ATS Resume Analyzer
      </h1>

      <label className="upload-box">
        <input
          type="file"
          accept=".pdf"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];

            setResume(file);
            setPdfFile(file);
          }}
        />

        {resume ? (
          <>
            <div className="success-icon">✅</div>
            <h3>{resume.name}</h3>
            <p>Resume uploaded successfully</p>
          </>
        ) : (
          <>
            <div className="upload-icon">📄</div>
            <h3>Upload Resume</h3>
            <p>Click here to select PDF</p>
          </>
        )}
      </label>

      <textarea
        className="job-description"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      {loading && (
        <div className="progress-section">
          <p>Analyzing Resume...</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      )}

      <button
        className="analyze-btn"
        disabled={loading}
        onClick={analyzeResume}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Analyzing...
          </>
        ) : (
          "Analyze Resume"
        )}
      </button>
    </div>
  );
}

export default ResumeUpload;
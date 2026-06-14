import "./ATSResult.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SummaryCard from "./SummaryCard";
function ATSResult({ result }) {
  if (!result) return null;

  return (
    
    <div className="result-container">
<div className="quick-wins-card">
  <h3>🚀 Quick Wins</h3>

  <ul>
    {result.missingSkills?.slice(0, 5).map((skill, index) => (
      <li key={index}>
        Add <strong>{skill}</strong> to your resume through
        projects, skills section, or work experience.
      </li>
    ))}
  </ul>
</div>

      {/* Score Card */}
       <SummaryCard result={result} />
      <div className="score-card">
        <h2>ATS Score</h2>
        <div className="progress-container">
          <CircularProgressbar
            value={result.atsScore}
            text={`${result.atsScore}%`}
            styles={buildStyles({
              textSize: "16px",
              pathColor:
                result.atsScore >= 70
                  ? "#22c55e"
                  : result.atsScore >= 40
                  ? "#f59e0b"
                  : "#ef4444",
              textColor: "#ffffff",
              trailColor: "rgba(255,255,255,0.2)"
            })}
          />
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <h4>{result.strengths?.length || 0}</h4>
            <p>Matched Skills</p>
          </div>

          <div className="stat-box">
            <h4>{result.missingSkills?.length || 0}</h4>
            <p>Missing Skills</p>
          </div>

          <div className="stat-box">
            <h4>{result.missingKeywords?.length || 0}</h4>
            <p>Missing Keywords</p>
          </div>
        </div>
      </div>
      

      {/* Skills Section */}
      <div className="grid-container">

        <div className="section-card">
          <h3>✅ Strengths</h3>

          <div className="chips-container">
            {result.strengths?.map((item, index) => (
              <span className="chip success" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="section-card">
          <h3>❌ Missing Skills</h3>

          <div className="chips-container">
            {result.missingSkills?.map((item, index) => (
              <span className="chip danger" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div className="section-card">
        <h3>🔍 Missing Keywords</h3>

        <div className="chips-container">
          {result.missingKeywords?.map((item, index) => (
            <span className="chip warning" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      

      {/* Recommendations */}
      <div className="section-card">
        <h3>💡 AI Recommendations</h3>

        <ol className="recommendations">
          {result.improvements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      
          <div className="score-explanation-card">
  <h3>📊 Why this score?</h3>

  <div className="explanation-grid">

    <div className="good-points">
      <h4>✅ Detected</h4>

      {result.strengths?.slice(0, 5).map((item, index) => (
        <div key={index} className="positive-item">
          {item}
        </div>
      ))}
    </div>

    <div className="bad-points">
      <h4>❌ Missing</h4>

      {result.missingSkills?.slice(0, 5).map((item, index) => (
        <div key={index} className="negative-item">
          {item}
        </div>
      ))}
    </div>
    

  </div>
  
</div>

    </div>
  );
}

export default ATSResult;